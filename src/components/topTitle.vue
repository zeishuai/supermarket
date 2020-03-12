<template>

  <div class="carBox-title">
    <p @click="backClick" class="iconBack"></p>
    {{params}}</div>
</template>

<script>
  export default {
    name: "topTitle",
    props: {
      params: {
        type: String,
        default: '标题'
      }
    },
    methods:{
      backClick(index){
        //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
        this.$emit('backClick',this.params)
      }
    }
  }
</script>

<style scoped>
  .carBox-title {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 36px;
    background: #ffffff;
    position: relative;
  }
  .iconBack{
    position: absolute;
    left: 25px;
    top: 40px;
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    border-width: 0 0 2px 2px;
    border-color: #000000;
    border-style: solid;
    transform: matrix(0.71, 0.71, -.71, 0.71, 0, 0);
    -webkit-transform: matrix(0.71, 0.71, -.71, 0.71, 0, 0);
    cursor: pointer;
  }
</style>
