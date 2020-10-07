<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2" >

                <div class="cart">
                  <h1 class="title">Checkout List !</h1>
                   <p >
                       <i>Checkout List!</i>
    	
                         </p>
  
                      <table class="table table-striped" >
    	                 <thead>
    	                 	<tr>
    			             <td>Name</td>
    			             <td>Price</td>
    			             <td>Quantity</td>
                             <td>Available in Store </td>
    		                </tr>
    	              </thead>
    	               <tbody>
    		              <tr v-for ="p in products" :key="p.name" >
        		            <td>{{ p.name }}</td>
        		            <td>${{ p.price }}</td>
        		            <td>{{ p.quantity }}</td>
                            <td>{{ p.units }}</td>
        	                  </tr>
        	               <tr>
        		              <td><b>Total:</b></td>
        		                 <td></td>
        		                <td><b>${{ TotalAmount }}</b></td>
        	                   </tr>
    	               </tbody>

                           </table>
    
  














              
                   
                   
                </div>
                
                <br>
                <div>
                    <div v-if="!isLoggedIn">
                        <h2>You need to login to continue</h2>
                        <button class="col-md-4 btn btn-primary float-left" @click="login">Login</button>
                        <button class="col-md-4 btn btn-danger float-right" @click="register">Create an account</button>
                    </div>
                    <div v-if="isLoggedIn">
                        <div class="row">
                            <label for="address" class="col-md-3 col-form-label">Delivery Address</label>

                            <div class="col-md-9">
                                <input id="address" type="text" class="form-control" v-model="address" required>
                            </div>
                        </div>
                        <br>
                        <button class="col-md-4 btn btn-sm btn-success float-right" v-if="isLoggedIn" @click="placeOrder">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
        data(){
            return {

                address : "",
               products:null,
               quantity : null,
                isLoggedIn : null,
              
                TotalAmount:null
               
            }
        },
        mounted(){
           // this.isLoggedIn = localStorage.getItem('jwt') != null
           this.isLoggedIn = this.$store.getters.gettoken
       
       

        },
        beforeMount(){
         this.products = this.$store.getters.cartProducts
              this.TotalAmount  = this.$store.getters.CartTotalAmount
              console.log(this.$store.getters.CartTotalAmount)
         
           
        },
       
        methods : {
            login(){
                this.$router.push({ name: 'login', params: { nextUrl: this.$route.fullPath }})
            },
            register(){
                this.$router.push({ name: 'register', params: { nextUrl: this.$route.fullPath }})
            },
            placeOrder(e) {
                e.preventDefault()
                axios.post('api/orders/', {
                    address : this.address,
                    quantity: this.quantity,
                    product : this.product.id
                })
                .then(response => {
                    this.$router.push('/confirmation')
                })
                .catch(error => {
                    console.error(error);
                })          
            },
            checkUnits(e){
                if (this.quantity > this.product.units)
                {
                    this.quantity = this.product.units
                }
            }
        }
    }
</script>
<style scoped>
    .small-text {
        font-size: 18px;
    }
    .order-box {
        border: 1px solid #cccccc;
        padding: 10px 15px;
    }
    .title {
        font-size: 36px;
    }
</style>