import store from '../store'

export interface Product {
  id: string
  name: string
  description?: string
  image?: string
  cents?: number
  quantity?: number
}

export default store.collection('products')