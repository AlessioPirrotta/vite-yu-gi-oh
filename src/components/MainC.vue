<script>
import SingleCard from '../components/SingleCard.vue'
import { store } from '../store'
export default{
name: 'MainC',
components:{
    SingleCard
},
data() {
    return {
        store
    }
},

}
</script>

<template>
    <main class="container">
        <div class="d-flex flex-wrap gap-5 py-5">
            <SingleCard v-for= "(item, index) in store.cardList" 
            :key="index"
            :propsItem="item"/>

        </div>

    </main>
</template>

<style lang="scss" scoped>



</style>