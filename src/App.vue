<script>
import HeaderC from './components/HeaderC.vue'
import MainC from './components/MainC.vue'
import { store } from './store'
import axios from 'axios'
export default{
    components:{
        HeaderC,
        MainC
    },
    data() {
        return {
            store
        }
    },
    methods:{
        getCards(){
            axios
            .get(store.apiUrl)
            .then (res => {
                console.log(res.data)
                store.cardList = res.data.data
                console.log(store.cardList)
            })
        }
    },
    mounted(){
        this.getCards() 
    }
}
</script>

<template>
<HeaderC/>
<MainC/>


</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>
