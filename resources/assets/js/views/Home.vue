<template>
    <div>
        <div class="container-fluid hero-section d-flex align-content-center justify-content-center flex-wrap ml-auto">
            <h2 class="title">Doxavic Store </h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4 product-box" v-for="(product,index) in products" :key="index">
                        <button @click='addToCart1(product)'> Add to Cart </button>
                        
                                <img :src="product.image" :alt="product.name">
                                <h5><span v-html="product.name"></span>
                                    <span class="small-text text-muted float-right">$ {{product.price}}</span>
                                </h5>
                                <button class="col-md-4 btn btn-sm btn-primary float-right" @click=" onNavigate(product.id)">Buy Now</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { productsservice} from '../services/ProductsService'
  import { mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return {
                products : []
            }
        },
        methods: {
            ...mapActions({
   addToCart1: 'addToCart'
        }),
        onNavigate(id){

            this.$router.push({name: 'single-products', params:{id : id}})
        }
        }
        ,
       
        mounted(){
      
            axios.get("api/products/")
            .then(response => {
                this.products = response.data
                   console.log("fetchimg from  getting fro network")
                this.$store.dispatch('addToProduct', response.data)

            })
            .catch(error => {
                console.error(error);
            })
            }
           
        
    }
</script>
<style scoped>
    .small-text {
        font-size: 14px;
    }
    .product-box {
        border: 1px solid #cccccc;
        padding: 10px 15px;
    }
    .hero-section {
        height: 30vh;
        background: #ababab;
        align-items: center;
        margin-bottom: 20px;
        margin-top: -20px;
    }
    .title {
        font-size: 60px;
        color: #ffffff;
    }
</style>
