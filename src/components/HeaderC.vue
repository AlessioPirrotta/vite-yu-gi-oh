<script>
import {store} from '../store'
export default{
name: 'HeaderC'
}
</script>

<template>
<header>
    <div class="d-flex justify-content-center py-4" >
        <img width="20%" src="../assets/img/Yu-Gi-Oh!.png" alt="">
    </div>
    <div class="d-flex justify-content-center">
        <select style="width: 20%;" class="bg-transparent text-light border-danger rounded-1" aria-label="Default select example">
        <option class="bg-danger" selected>Open this select menu</option>
        <option class="bg-danger"  value="1">One</option>
        <option class="bg-danger"  value="2">Two</option>
        <option class="bg-danger"  value="3">Three</option>
        </select>
    </div>
    
</header>
</template>

<style lang="scss" scoped>
div:first-child{
    background-color: rgba(150, 150, 150, 0.3);
}



</style>