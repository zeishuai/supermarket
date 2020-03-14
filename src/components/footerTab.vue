<template>
  <div class="footerBox">
    <ul>
      <li @click="footerClick(index)" v-for="(item,index) in footerList" :key="item.id">
        <p :class="'icon'+index"></p>
        <p :class="{active:index == params}">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "footerTab",
    props: {
      params: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        footerList: [
          {
            id: '1',
            text: '零食选购'
          },
          {
            id: '2',
            text: '快递带取'
          },
          {
            id: '3',
            text: '购物车'
          },
          {
            id: '4',
            text: '我的'
          }
        ]
      }
    },
    methods:{
      footerClick(index){
        //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
        this.$emit('footerClick',index)
      }
    }
  }
</script>

<style type="text/css" scoped>
  .footerBox {
    width: 100%;
    height: 120px;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    right: 0;
  }
  .active{
    /*color: #e26411;*/
    color: #6E76FB;
  }

  .footerBox ul {
    display: flex;
    justify-content: space-between;
    background: #cccccc2a;
  }

  .footerBox li {
    width: 20%;
    height: 100%;
    text-align: center;
    padding: 20px 0;
    box-sizing: border-box;
  }

  .icon0 {
    width: 60px;
    height: 60px;
    background: url("../../static/img/shouye.png") no-repeat;
    margin: auto;
  }

  .icon1 {
    width: 60px;
    height: 60px;
    background: url("../../static/img/kuaidi.png") no-repeat;
    margin: auto;
  }

  .icon2 {
    width: 60px;
    height: 60px;
    background: url("../../static/img/ziyuan.png") no-repeat;
    margin: auto;
  }

  .icon3 {
    width: 60px;
    height: 60px;
    background: url("../../static/img/wode.png") no-repeat;
    margin: auto;
  }

  .footerBox li p {
    font-size: 28px;
  }
</style>
