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

            store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' 

            if(store.searchText){
                store.apiUrl += `?archetype=${store.searchText}`
            }

            axios
            .get(store.apiUrl)
            .then (res => {
                console.log(res.data)
                console.log(store.apiUrl)
                store.cardList = res.data.data
                console.log(store.cardList)
            })
        },
        getArch(){
            axios
            .get(store.apiUrlArch)
            .then (res => {
                console.log(res.data)
                store.archetypeList = res.data
                console.log(store.archetypeList)
            })
        }
    },
    mounted(){
        this.getCards() 
        this.getArch()
    }
}
</script>

<template>
<HeaderC @archSearch="getCards"/>
<MainC/>


</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>
