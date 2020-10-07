<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <img :src="product.image" :alt="product.name">
                <h3 class="title" v-html="product.name"></h3>
                <p class="text-muted">{{product.description}}</p>
                <h4>
                    <span class="small-text text-muted float-left">$ {{product.price}}</span>
                    <span class="small-text float-right">Available Quantity: {{product.units}}</span>
                </h4>
                <br>
                <hr>
                <button @click='addToCart(product)' class='col-md-4 btn btn-sm btn-primary float-left'>Add to cart</button>
                
                <router-link :to="{ path: '/cart'}" class="col-md-4 btn btn-sm btn-primary float-right">Go to Cart</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return {
                product : []
            }
        },
        methods: mapActions([
    'addToCart'
  ]),
        beforeMount(){
                  
            axios.get(`/api/products/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data
            })
            .catch(error => {
                console.error(error);
            })
                  
        }
    }
</script>
<style scoped> 
        
    .title {
        font-size: 36px;
    }
</style>
