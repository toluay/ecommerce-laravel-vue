import Api from './Api'

export const productsservice= {
  index:function index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  show:function show (productId) {
    return Api().get(`products/${productId}`)
  },
  post: function post (product) {
    return Api().post('products', product)
  },
  put: function put (product) {
    return Api().put(`products/${product.id}`, product)
  }
}
