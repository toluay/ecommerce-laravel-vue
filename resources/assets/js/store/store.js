import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as types from './mutation-types'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)


const initialState = ()=>{
  token: null ;
  user: {};
  isUserLoggedIn: false;
  added: [];
  all: [ ];
  CartTotalAmount: null
}
const state = initialState();

export default new Vuex.Store({
  strict: debug,
 plugins
 : [
    createPersistedState()
 ],
  state: {
    is_admin :null ,
    token: null,
    user: {},
    isUserLoggedIn: false,
    added: [],
  all: [ ],
  CartTotalAmount: 45
  },
  // getters
 getters : {
   getisadmin :state=> state.is_admin,
   gettoken : state=> state.token,
  allProducts: state => state.all, // would need action/mutation if data fetched async

  	CartTotalAmount: state => state.CartTotalAmount,
	getNumberOfProducts: state => (state.all) ? state.all.length : 0,
	cartProducts: state => {
		return state.added.map(({ id, quantity }) => {
			const product = state.all.find(p => p.id === id)

			return {
        name: product.name,
        units:product.units,
        image:product.image,
				price: product.price,
				quantity :quantity
			}
		})
	}
},
  mutations: {
    [types.SET_TOKEN] (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    [types.SET_ISADMIN] (state, isadminvalue) {
      state.is_admin = isadminvalue
     
    },
    
    [types.ADD_TO_PRODUCT] (state, product) {
      state.all.push( product)
    },

    [types.ADD_TO_CARTTOTALAMOUNT] (state, cartTotalAmount) {
      state.CartTotalAmount = cartTotalAmount
    },

    [types.SET_USER] (state, user) {
      state.user = user
    },


    [types.ADD_TO_CART] (state, { id }) {
	    const record = state.added.find(p => p.id === id)

	    if (!record) {
	      state.added.push({
	        id,
	        quantity: 1
	      })
        alert('Item Added to cart')
	    } else {
	      record.quantity++
        alert('Item Added to cart')
	    }
    },
    RESET_STATE(state){
      const newstate = initialState()
      Object.keys(newstate).forEach(key=>{ state[key]=newstate[key]})
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit(types.SET_USER, token)
    },
    setUser ({commit}, user) {
      commit(types.SET_USER, user)

    },
    setIsAdmin ({commit}, isadmin) {
      commit(types.SET_USER, isadmin)
    },
    addToProduct({ commit }, product){
      commit(types.ADD_TO_PRODUCT, product)
    },

    addToCartTotalAmount({ commit }, cartTotalAmount){
      commit(types.ADD_TO_CARTTOTALAMOUNT, cartTotalAmount)
    },
    addToCart({ commit }, product){
      commit(types.ADD_TO_CART, {
        id: product.id
      })

    }
  }
})
