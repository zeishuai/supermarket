<template>
  <div class="index">
    <div id="apps">
      <nav>
        <p
          v-for="(item,$index) in arrs"
          @click="toggle($index)"
          :class="{active:$index==active}"
        >{{item}}</p>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      active: 0,
      arrs: ["菜单1", "菜单2", "菜单3", "菜单3",'菜单5','菜单6','菜单7','菜单8','菜单9','菜单10','菜单11']
    };
  },
  methods: {
    toggle(index) {
      this.active = index;
    },
  },
  created() {},
  mounted() {},
  watch: {},
  components: {}
};
</script>
<style scoped lang="less" rel="stylesheet/less">
  #apps{ width: 100%; overflow:hidden; }
  #apps nav{ padding: 0 10px; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: middle; -ms-flex-align: middle; align-items: middle; overflow: auto; }
  #apps p{ text-align: center; font-size: 16px; -ms-flex-negative: 0; flex-shrink: 0; padding: 10px; margin: 5px; }
  #apps p.active{ color: #ffff00; background-color: #000000; }
</style>
