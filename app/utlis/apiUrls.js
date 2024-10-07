const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const saree = `${baseURL}/api/sarees?populate=*`
export const lehenga = `${baseURL}/api/lehengas?populate=*`
export const kurti_frock = `${baseURL}/api/kurti-frocks?populate=*`
export const jeans_top  = `${baseURL}/api/jeans-tops?populate=*`
export const girl_kids  = `${baseURL}/api/girl-kids?populate=*`
export const event  = `${baseURL}/api/events?populate=*`
export const tentBanner  = `${baseURL}/api/tent-main-banners?populate=*`