import { Product } from "@common/types/product";


type AvailableChoices = "color" | "size" | string

export type Choices = {
  [P in AvailableChoices]: string
}


export const getVariant = (product: Product, choices: Choices) =>
  product.variants.find((variant:any) =>
    variant.options.every((variantOption:any) => {
      const optionName = variantOption.displayName.toLocaleLowerCase()
        return optionName in choices &&
         choices[optionName] === variantOption.values[0].label
    })
  )
