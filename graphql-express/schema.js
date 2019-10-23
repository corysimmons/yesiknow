const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql')

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    user: {
      type: User,
      description: '`user` field from `User` type.',
      resolve: () => ({}),
    },
    id: {
      type: GraphQLID,
      description: 'id field from User type.',
      resolve: () => '1',
    },
    image: {
      type: GraphQLString,
      description: 'field that returns an image URI.',
      resolve: () => '/images/logo.svg',
    },
  }),
})

const userSchema = new GraphQLSchema({
  query: User,
})

module.exports = userSchema
