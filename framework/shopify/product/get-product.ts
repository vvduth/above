import { APIConfig } from '@common/types/api';
import React from 'react'

const getProduct = async(config: APIConfig): Promise<any> => {

  return {
    product:{
        name: "My cool product",
        slug: "my-super-product"
    }
  }
}

export default getProduct