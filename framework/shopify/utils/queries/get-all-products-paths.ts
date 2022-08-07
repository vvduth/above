const getAllProductsPathQuery = `
query getAllProductsPaths($first: Int = 250) {
    products(first: $first) {
      edges {
        node {
          handle
        }
      }
    }
  }

`

export default getAllProductsPathQuery 