<template>
    <div>这是个人中心
      <footerTab @footerClick="goUrl" :params='active'></footerTab>
    </div>
</template>

<script>
  import footerTab from "../components/footerTab";
    export default {
      components:{footerTab},
        name: "my",
      data() {
        return {
          active:3
        }
      },
      methods:{
        goUrl(val) {
          if (val === 0) {
            this.$router.push({path:'/'})
          } else if (val === 1) {
            this.$router.push({path:'express'})
          } else if (val === 2) {
            this.$router.push({path:'shoppingCart'})
          } else {
            this.$router.push({path:'my'})
          }
        }
      }
    }
</script>

<style scoped>

</style>
