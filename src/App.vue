<script>
import HeaderC from './components/HeaderC.vue'
import MainC from './components/MainC.vue'
export default{
    components:{
        HeaderC,
        MainC
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
