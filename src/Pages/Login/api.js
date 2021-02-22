// Graphql query to get all data for the user

const userQuery = (id) => {
  return (
    `query {
        user(id: "${id}") {
          id
          email
          meals{
            id
            name
            ingredients{
              id
              name
            }
          }
        }
    }`
  )
}


export default userQuery