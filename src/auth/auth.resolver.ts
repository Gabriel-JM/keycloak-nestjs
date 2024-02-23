import { Query, Resolver } from '@nestjs/graphql'
import { UserGQLSchema } from './user-gql-schema'

@Resolver('Auth')
export class AuthResolver {
  @Query(() => UserGQLSchema)
  async getUserData() {

  }
}
