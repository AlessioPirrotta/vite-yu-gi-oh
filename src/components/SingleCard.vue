<script>
import {store} from '../store'
export default{
name: 'SingleCard',
props: [
    'propsItem'
],
data() {
    return {
        store
    }
},
}
</script>

<template>
<div class="col-2 position-relative">
    <div v-if="(store.loading)" id="spinner" class="spinner-border text-danger position-absolute" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
   <figure class="d-flex flex-column justify-content-center">
    <img :src="propsItem.card_images[0].image_url_small" alt="">
    <h4 class="text-center pt-4" >{{ propsItem.name }}</h4>
    <h5 class="text-center" >{{ propsItem.archetype }}</h5>
   </figure> 
</div>
</template>

<style lang="scss" scoped>

img{
    width: 100%;
}
h5{
    color:rgba(240, 73, 47, .7) ;
}
h4{
    color: rgba(183, 220, 213, .7);
}

#spinner{
    top: 140px;
    left: 90px;
}


</style>