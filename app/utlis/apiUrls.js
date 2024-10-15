const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const mainSlider = `${baseURL}/api/main-sliders?sort=createdAt:desc&populate=*`
export const saree = `${baseURL}/api/sarees?sort=createdAt:desc&populate=*`
export const lehenga = `${baseURL}/api/lehengas?sort=createdAt:desc&populate=*`
export const kurti_frock = `${baseURL}/api/kurti-frocks?sort=createdAt:desc&populate=*`
export const jeans_top  = `${baseURL}/api/jeans-tops?sort=createdAt:desc&populate=*`
export const girl_kids  = `${baseURL}/api/girl-kids?sort=createdAt:desc&populate=*`
export const event  = `${baseURL}/api/events?sort=createdAt:desc&populate=*`
export const tentBanner  = `${baseURL}/api/tent-main-banners?sort=createdAt:desc&populate=*`
export const mainLogo  = `${baseURL}/api/logos?sort=createdAt:desc&populate=*`
export const pantShirt  = `${baseURL}/api/pant-shirts?sort=createdAt:desc&populate=*`
export const jeansTshirt  = `${baseURL}/api/jeans-tshirts?sort=createdAt:desc&populate=*`
export const boyKid  = `${baseURL}/api/boy-kids?sort=createdAt:desc&populate=*`
export const decoration  = `${baseURL}/api/decorations?sort=createdAt:desc&populate=*`
export const tentProduct  = `${baseURL}/api/tent-products?sort=createdAt:desc&populate=*`
export const customerSay  = `${baseURL}/api/customer-says?sort=createdAt:desc&populate=*`