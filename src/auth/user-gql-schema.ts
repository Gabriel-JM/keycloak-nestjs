import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType({
  description: 'User Data'
})
export class UserGQLSchema {
  @Field(() => ID)
  id: string
  
  @Field()
  username: string

  @Field()
  email: string
}
