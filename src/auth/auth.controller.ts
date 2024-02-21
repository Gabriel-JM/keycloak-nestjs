import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async login() {
    const { body } = await this.authService.login()

    return /*html*/`
      <div>
        <h2>Token</h2>
        <textarea style="width: 100%; height: 100px">
          ${body.access_token}
        </textarea>
      </div>

      <h2>Verify</h2>
      <form action="/auth" method="POST">
        <input type="text" name="token">
        <button>Send</button>
      </form>

      <h2>User Info</h2>
      <form action="/auth/info" method="POST">
        <input type="text" name="token">
        <button>Send</button>
      </form>
    `
  }

  @Post()
  async verify(@Body() data: { token: string }) {
    const { isValid } = await this.authService.verify(data.token)

    return /*html*/`
      <h2>${isValid ? 'Is Valid' : 'Is Not Valid'}</h2>
    `
  }

  @Post('/info')
  async info(@Body() data: { token: string }) {
    const { body } = await this.authService.userInfo(data.token)

    return body
  }
}
