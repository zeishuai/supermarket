<template>
  <div class="carBox">
    <topTitle @backClick="backClick" :params='title'></topTitle>
    <div class="shoppingMain">
      <div class="shoppingItem" v-for="(item,index) in shoppingList">
        <div class="selectCircle" :class="{checked:item.isSelect}" @click="selectGoods(item)"></div>
        <div class="shoppingImg">
          <img :src="item.imgurl" alt="">
        </div>
        <div class="itemRight">
          <p class="title">{{item.title}}</p>
          <p>{{item.color}}</p>
          <div class="numAndMoney">
            <p>￥{{item.money}}</p>
            <div class="numberControl">
              <a class="btn" @click="numDel(item,index)">-</a>
              <input type="text" v-model="item.num" readonly="readonly">
              <a class="btn" @click="numAdd(item,index)">+</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottomMain">
      <div class="selectCircle" :class="{checked:allSelect}" @click="allGoodsSelect"></div>
      <span style="padding: 10px">全选</span>
      <button class="bottombtn2" @click="delGoods">删除</button>
      <button class="bottombtn1" @click="buyGoods">￥{{sum}}&nbsp;结算</button>
    </div>
    <footerTab @footerClick="goUrl" :params='active'></footerTab>
  </div>
</template>

<script>
  import topTitle from '../components/topTitle'
  import footerTab from "../components/footerTab";
  export default {
    name: "shoppingCart",
    components:{topTitle,footerTab},
    data() {
      return {
        active: 2,
        title:'购物车',
        shoppingList: [
          {
            imgurl: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=206733228,1637722865&fm=26&gp=0.jpg",
            title: "苹果",
            color: "粉色",
            money: 149,
            num: "1",
            isSelect: false,
          },
          {
            imgurl: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=206733228,1637722865&fm=26&gp=0.jpg",
            title: "李子",
            color: "粉色",
            money: 149,
            num: "10",
            isSelect: false,
          },
          {
            imgurl: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=206733228,1637722865&fm=26&gp=0.jpg",
            title: "香蕉",
            color: "粉色",
            money: 149,
            num: "1",
            isSelect: false,
          },
          {
            imgurl: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=206733228,1637722865&fm=26&gp=0.jpg",
            title: "葡萄",
            color: "粉色",
            money: 149,
            num: "1",
            isSelect: false,
          },
          {
            imgurl: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=206733228,1637722865&fm=26&gp=0.jpg",
            title: "西瓜瓜",
            color: "粉色",
            money: 149,
            num: "1",
            isSelect: false,
          },
        ],
        allSelect: false,
        sum: 0,
      }
    },
    methods: {
      // 路由
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
      },
      // 返回
      backClick(v) {
        this.$router.push({path:'/'})
      },
      selectGoods(item) {
        item.isSelect = !item.isSelect
        this.allSelect = false
        if (item.isSelect == true) {
          this.sum = this.sum + (item.money * item.num)
        } else {
          this.sum = this.sum - (item.money * item.num)
        }
      },
      allGoodsSelect() {
        this.allSelect = !this.allSelect
        if (this.allSelect == true) {
          this.sum = 0
          for (var i = 0; i < this.shoppingList.length; i++) {
            this.shoppingList[i].isSelect = true;
            this.sum = this.sum + (this.shoppingList[i].money * this.shoppingList[i].num)
          }
        } else {
          for (var i = 0; i < this.shoppingList.length; i++) {
            this.sum = this.sum - (this.shoppingList[i].money * this.shoppingList[i].num)
            this.shoppingList[i].isSelect = false;
          }
        }
      },
      numAdd(item, index) {
        item.num++
        if (item.isSelect == true) {
          this.sum = this.sum + item.money
        }
      },
      numDel(item, index) {
        item.num--
        if (item.isSelect == true) {
          this.sum = this.sum - item.money
        }
        if (item.num == 0) {
          this.shoppingList.splice(index, 1)
        }
      },
      buyGoods() {
        alert("购买成功,共花费" + this.sum + "元")
      },
      delGoods() {
        this.sum = 0;
        for (var i = 0; i < this.shoppingList.length; i++) {
          if (this.shoppingList[i].isSelect) {
            this.shoppingList.splice(i, 1)
            i--
          }
        }
        if (this.allSelect) {
          this.shoppingList.splice(0, this.shoppingList.length);
          this.allSelect = false
        }
      }
    }
  }
</script>

<style scoped lang="less" type="text/css">
.carBox{
  min-height: 1300px;
  background: #EFEFEF;
}

  button{
    outline: none;
    border-color: transparent;
    box-shadow:none;
  }
  .shoppingMain{
    padding-top: 40px;
    width: 100%;
    height: auto;
    margin-bottom: 70px;
    padding-bottom: 180px;
    box-sizing: border-box;
  }
  .shoppingItem{
    width: 96%;
    margin-left: 2%;
    background: #fff;
    border-radius:5px;
    display: flex;
    margin-bottom: 20px;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .selectCircle{
    width: 30px;
    height: 30px;
    border: 2px solid #cccccc;
    border-radius: 50%;
    margin: auto 0px auto 10px;
  }
  .shoppingImg{
    width: 140px;
    height: 140px;
    padding: 10px;
  }
  .shoppingImg img{
    height: 100%;
    width: 100%;
  }
  .itemRight{
    font-size: 10px;
    width: 300px;
    margin-top: 26px;
  }
  .title{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .numAndMoney{
    display: flex;
  }
  input{
    width: 40px;
    height: 20px;
    margin: 10px;
    text-align: center;
  }
  .numberControl{
    position: absolute;
    right: 30px;
  }
  .bottomMain{
    position: fixed;
    width: 100%;
    height: auto;
    border: 1px #a7a5a5 solid;
    bottom: 118px;
    left: 0;
    background: #fff;
    display: flex;
    padding: 10px;
  }
  .btn{
    padding: 10px 20px;
    box-sizing: border-box;
    background: #cccccc5a;
    line-height: 25px;
  }
  .bottombtn1{
    width:auto;
    height: 50px;
    border: none;
    color: #fff;
    background-color: #e26411;
    border-radius: 25px;
    margin: 10px 0 0 20px;
  }
  .bottombtn2{
    width:100px;
    height: 50px;
    border: none;
    color: #fff;
    background-color: #cecac7;
    border-radius: 25px;
    margin: 10px 0 0 300px;
  }
  .checked{
    border: 2px solid #e26411;
    border-radius: 50%;
    background: url("../../static/img/sele.png") no-repeat center;
  }
</style>
