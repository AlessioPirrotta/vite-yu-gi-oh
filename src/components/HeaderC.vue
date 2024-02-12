<script>
import {store} from '../store'
export default{
name: 'HeaderC',
data() {
    return {
        store
    }
},
}
</script>

<template>
<header>
    <div id="head" class="d-flex justify-content-center py-4" >
        <img width="20%" src="../assets/img/Yu-Gi-Oh!.png" alt="">
    </div>
    <div class="d-flex justify-content-center ">
    <div style="width: 20%;" class="d-flex flex-column justify-content-center">
        <select @change="$emit('archSearch')" style="width: 100%;" class="bg-transparent text-light border-danger rounded-1" aria-label="Default select example" v-model="store.searchText" >
        <option class="bg-warning text-danger" value="" disabled selected>Choose Archetype</option>
        <option :value="item.archetype_name" v-for="(item, index) in store.archetypeList" :key="index" class="bg-danger">{{item.archetype_name}}</option>
        </select>
        <h5 class="mt-3">{{store.cardList.length}} Carte ottenute</h5>
    </div>
   
    </div>
    
</header>
</template>

<style lang="scss" scoped>
#head{
    background-color: rgba(150, 150, 150, 0.3);
}
h5{
    color:#f0492f ;
}




</style>