import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "products"]{
  _id,
  name,
  price,
  description,
  "image": image.asset->url,
  discountPercent,
  new,
  colors,
  sizes
}
`

export const fourProducts = groq `*[_type == "products"][0..3]`

export const feProducts = groq `*[_type == "products"][4..7]`

export const etProducts = groq `*[_type == "products"][8..12]`

