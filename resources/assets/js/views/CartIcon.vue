<template>
<div class="nav-item is-tab" :class="{ 'active-bottom-border': $route.path === '/cart' }">
	                  
     <div class="field is-grouped">
	                     <p class="control">
	                        <router-link to='/cart' class="button is-info">
	                        <span class="icon">
	                            <i class="fa fa-shopping-cart"></i>
	                        </span>
	                            <span>Checkout ({{itemsInCart}})</span>
	                         </router-link>
	                      </p>
	    </div>
 </div>
</template>
<script>
export default {
    
    props:['itemsInCart'],
}
</script>