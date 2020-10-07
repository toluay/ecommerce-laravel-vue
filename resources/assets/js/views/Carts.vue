<template>
  <div class="cart">
    <h1 class="title">Your Cart</h1>
    <p v-show="!products.length">
    	<i>Your cart is empty!</i>
    	<router-link to="/">Go shopping</router-link>
    </p>
    <table class="table table-striped" v-show="products.length">
    	<thead>
    		<tr>
    			<td>Name</td>
    			<td>Price</td>
    			<td>Quantity</td>
    		</tr>
    	</thead>
    	<tbody>
    		<tr v-for="p in products" :key="p.name">
        		<td>{{ p.name }}</td>
        		<td>${{ p.price }}</td>
        		<td>{{ p.quantity }}</td>
        	</tr>
        	<tr>
        		<td><b>Total:</b></td>
        		<td></td>
        		<td><b>${{ total }}</b></td>
        	</tr>
    	</tbody>

    </table>
        <p> 	<router-link to="/" class="col-md-4 btn btn-sm btn-primary float-right" >Go shopping</router-link>
		<router-link :to="{ path: '/checkout'}" class="col-md-4 btn btn-sm btn-primary float-right">Checkout</router-link></p>
		
	
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
	  }, 0)
	  
    }
  },
  methods: {
  	checkout(){
  		alert('Pay us $' + this.total)
  	}
  },
  destroyed(){
	  this.$store.dispatch('addToCartTotalAmount', this.total)
	  alert(this.total)
  }
}
</script>
