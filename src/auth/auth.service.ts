import { Injectable } from '@nestjs/common'

export type KeycloakError = {
  error?: string
  error_description: string
}

export type KeycloakSuccess = {
  access_token: string
  expires_in: number
  refresh_expires_in: number
  refresh_token: string
  'not-before-policy': number // 0
  token_type: string // Bearer
  session_state: string // uuid
  scope: string // 'profile email'
}

export type KeycloakResponse = KeycloakSuccess & KeycloakError

/**
 {
  access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBN2ZxaW1jUnRvaUlqdWRNN29WUmhhMUR6OGFSSkNQV1Z0TlBXemVQSGYwIn0.eyJleHAiOjE3MDg0NjA3MDEsImlhdCI6MTcwODQ2MDQwMSwianRpIjoiMDlkNTFmNGQtZThhYy00ZTFiLTliZDMtYjk3YjM2MTU5NjgwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwic3ViIjoiZmZkODA0NTQtOGEzNC00NzZiLTlmY2EtNmYzMmQ5YWY3YTJjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwic2Vzc2lvbl9zdGF0ZSI6ImQ4MjE0ZTUwLTkzYTgtNGIxOS05M2FiLWJmN2ZkYjZjM2IwMCIsImFjciI6IjEiLCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJkODIxNGU1MC05M2E4LTRiMTktOTNhYi1iZjdmZGI2YzNiMDAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkdhYnJpZWwgTWVsbyIsInByZWZlcnJlZF91c2VybmFtZSI6ImdhYnJpZWwiLCJnaXZlbl9uYW1lIjoiR2FicmllbCIsImZhbWlseV9uYW1lIjoiTWVsbyIsImVtYWlsIjoiZ2FicmllbC5qbTE2QGdtYWlsLmNvbSJ9.WIyz3dzeFGtmGutzIxF7AZ7qwUd924YyoQRyQlsgO874MEU7Msi4bCG8GQXP_arMFeTS6-CHh0dDydQB8oJTtI-s6dfJZ4wsbO_uwVtbFPt9Fi2NPK_cpeyXiQYVZIjOwFDqsiLH5oHM67RY4dhwBlMSYE4rZtGz0c2GCJjxtGy1c6U5mfQoiVXt8G9zIlvJ-_uW6Eo-zvopov-xBV6PXjldFklBvPDObeOWIXFEFZccqtrTT0ydjNwtkK7XB73kBDFoAMY_n_j14PfCLX6VH7nyWorITefZc0uh9q2JwwuNPtAbNiytwZ4wXgSQXfVbfVK7BZ2FJqbXhpZvpGEw2Q',
  expires_in: 300,
  refresh_expires_in: 1800,
  refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmYzk2YmUyNy1iZDM5LTQ0NjgtYWQwOS05YjJkNTlkYWE4MzAifQ.eyJleHAiOjE3MDg0NjIyMDEsImlhdCI6MTcwODQ2MDQwMSwianRpIjoiMTE2YjFlYzEtNWJiMy00ZTBmLWFlNTctNDk3MTBiOTU0NDFmIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwic3ViIjoiZmZkODA0NTQtOGEzNC00NzZiLTlmY2EtNmYzMmQ5YWY3YTJjIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImFkbWluLWNsaSIsInNlc3Npb25fc3RhdGUiOiJkODIxNGU1MC05M2E4LTRiMTktOTNhYi1iZjdmZGI2YzNiMDAiLCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJkODIxNGU1MC05M2E4LTRiMTktOTNhYi1iZjdmZGI2YzNiMDAifQ.Q3ochUyCdzftp_MoVKfXl04iwzJd7fQBcxPt2EI0mp4',
  token_type: 'Bearer',
  'not-before-policy': 0,
  session_state: 'd8214e50-93a8-4b19-93ab-bf7fdb6c3b00',
  scope: 'profile email'
 }
*/

export type KeycloakTokenVerificationSuccess = {
  exp: number
  iat: number
  jti: string // uuid
  iss: string
  sub: string // uuid / user id
  typ: string // Bearer
  azp: string // admin-cli, client id?
  session_state: string // uuid
  acr: string // "1"
  scope: string // "profile email"
  sid: string // uuid
  email_verified: boolean
  preferred_username: string // normal username?
  client_id: string
  username: string
  token_type: string // Bearer
  active: boolean
}

export type KeycloakTokenVerificationResponse = KeycloakTokenVerificationSuccess & KeycloakError

/**
  {
  "exp": 1708541328,
  "iat": 1708541028,
  "jti": "b057e288-d567-481b-a81f-f4a9590e2bfc",
  "iss": "http://keycloak:8080/realms/myrealm",
  "sub": "fbcb61c0-474d-4d1b-a94b-cfc2a640d671",
  "typ": "Bearer",
  "azp": "admin-cli",
  "session_state": "bc92aeb8-ef77-4c85-832d-1eb726a8b4ac",
  "acr": "1",
  "scope": "profile email",
  "sid": "bc92aeb8-ef77-4c85-832d-1eb726a8b4ac",
  "email_verified": true,
  "preferred_username": "gabriel",
  "client_id": "admin-cli",
  "username": "gabriel",
  "token_type": "Bearer",
  "active": true
  }
*/

const host = 'http://keycloak:8080'

@Injectable()
export class AuthService {
  clientSecret = 'Cg6FQcZtxNMDO8Q1puCNyPThoLQzzAlb'

  async login() {
    const params = new URLSearchParams()
    params.set('username', 'gabriel')
    params.set('password', '1234')
    params.set('grant_type', 'password')
    params.set('client_id', 'admin-cli')
    params.set('client_secret', this.clientSecret)

    const response = await fetch(
      `${host}/realms/myrealm/protocol/openid-connect/token`,
      {
        method: 'POST',
        body: params
      }
    )
    const body = await response.json() as KeycloakSuccess

    return {
      statusCode: response.status,
      body
    }
  }

  async createUser() {
    const adminResponse = await this.adminAccess()

    if (!adminResponse.success) {
      return
    }

    const hash = Math.random().toString(32).substring(3)
    const newUserJSON = JSON.stringify({
      firstName: 'New',
      lastName: 'User',
      username: 'newuser' + hash,
      email: `user${hash}@email.com`,
      credentials: [
        {
          type: 'password',
          value: '1234'
        }
      ],
      enabled: true
    })

    const response = await fetch(
      `${host}/admin/realms/myrealm/users`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminResponse.body.access_token}`
        },
        body: newUserJSON
      }
    )
    const contentLength = response.headers.get('content-length')

    const body = contentLength
      ? await response.json()
      : null
    
    return {
      statusCode: response.status,
      body
    }
  }

  async userInfo(token: string) {
    const [, payload] = token.split('.')
    const payloadJSON = Buffer.from(payload, 'base64').toString()
    const { sub: userId } = JSON.parse(payloadJSON) as { sub: string }

    const adminResponse = await this.adminAccess()

    if (!adminResponse.success) {
      return { body: { error: 'Admin access denied' } }
    }

    const response = await fetch(
      `${host}/admin/realms/myrealm/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${adminResponse.body.access_token}`
        }
      }
    )
    const body = await response.json()

    return { headers: response.headers, body }

  }

  async verify(token: string) {
    const params = new URLSearchParams({
      token,
      client_id: 'admin-cli',
      client_secret: this.clientSecret
    })
    
    const response = await fetch(
      `${host}/realms/myrealm/protocol/openid-connect/token/introspect`,
      {
        method: 'POST',
        body: params
      }
    )
    const body = await response.json() as KeycloakTokenVerificationResponse

    if (!body.active || body.error_description) {
      return { isValid: false }
    }

    return { isValid: true }
  }

  private async adminAccess() {
    const params = new URLSearchParams({
      username: 'admin',
      password: 'admin',
      grant_type: 'password',
      client_id: 'admin-cli'
    })

    const adminResponse = await fetch(
      `${host}/realms/master/protocol/openid-connect/token`,
      {
        method: 'POST',
        body: params
      }
    )
    const adminBody = (await adminResponse.json()) as KeycloakResponse

    if (adminBody.error) {
      return { success: false }
    }

    return { success: true, body: adminBody }
  }
}
