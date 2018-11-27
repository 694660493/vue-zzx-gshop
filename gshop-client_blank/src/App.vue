<template>
  <div>
    <footGuide v-show="$route.meta.showFooter"></footGuide>
    <router-view></router-view>
  </div>
</template>

<script>
  import footGuide from "./components/foot-guide/foot-guide.vue"
    export default {
        name: "App",
        components:{footGuide}
    }
</script>

<style lang="stylus" scoped>

</style>
