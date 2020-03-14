<template>
  <div class="payment-conter">
    <topTitle @backClick="backClick" :params='title'></topTitle>
    <div class="paymentBox">
      <ul>
        <li v-for="(item,index) in goodsList" :key="item.id">
          <p class="payment-li-number">
            <span>订单号:sm1231323423423</span>
            <span>待评价</span>
          </p>
          <div class="payment-li-des">
            <div class="payment-li-desimg">
              <van-image
                width="70"
                height="70"
                radius="10"
                :src="item.url"
              />
            </div>
            <div class="payment-des-txt">
              <p>{{item.des}}</p>
              <p>¥{{item.money}} x {{item.number}}</p>
            </div>
          </div>
          <div class="totalTxt">
            <p>共{{item.number}}件商品</p>
            <p>合计：<span>¥{{item.money}}</span>（运费¥10.00）</p>
          </div>
          <div class="payment-btu">
            <!--            <span @click="showToast"></span>-->
            <span @click="showToast">退货/退款</span>
          </div>
        </li>
      </ul>
    </div>
    <!--评价弹出层-->
    <van-popup v-model="show" position="top">
      <p class="ecal-score-title">退货/退款</p>
<!--      <div class="ecal-score">-->
<!--        -->
<!--        <van-radio-group v-model="ecalRadio" direction="horizontal">-->
<!--          <van-radio name="1">退款</van-radio>-->
<!--          <van-radio name="2">退货</van-radio>-->
<!--        </van-radio-group>-->
<!--      </div>-->
      <van-field name="radio" label="退货/退款：">
        <template #input>
          <van-radio-group v-model="ecalRadio" direction="horizontal">
            <van-radio name="1">退款</van-radio>
            <van-radio name="2">退货</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="ecalreason"
        name="原因"
        label="原因"
        label-width="40"
        placeholder="原因"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-button
        style="margin-top: 20px;margin-bottom: 20px;width: 20%;height: 30px;line-height: 20px;float: right;margin-right: 20px"
        round block type="info" native-type="submit">
        提交
      </van-button>
    </van-popup>
  </div>
</template>

<script>
  import topTitle from "../components/topTitle";

  export default {
    components: {topTitle},
    name: "receiving",
    data() {
      return {
        title: '退货/退款',
        show: false,
        rateValue: 3,
        rateMessage: '',
        ecalRadio:'1',
        ecalreason:'',
        goodsList: [
          {
            id: 1,
            des: '付邮免费送！2019护考复习资料安抚爱疯饿哦金融股看法app的卡片',
            url: 'https://img.yzcdn.cn/vant/cat.jpeg',
            money: '100.00',
            number: '2',
            orderNum: 'sm1231323423423'
          },
          {
            id: 2,
            des: '付邮免费送！2019护考复习资料安抚爱疯饿哦金融股看法app的卡片',
            url: 'https://img.yzcdn.cn/vant/cat.jpeg',
            money: '100.00',
            number: '32',
            orderNum: 'sm1231323423423'
          },
          {
            id: 3,
            des: '付邮免费送！2019护考复习资料安抚爱疯饿哦金融股看法app的卡片',
            url: 'https://img.yzcdn.cn/vant/cat.jpeg',
            money: '100.00',
            number: '22',
            orderNum: 'sm1231323423423'
          },
          {
            id: 4,
            des: '付邮免费送！2019护考复习资料安抚爱疯饿哦金融股看法app的卡片',
            url: 'https://img.yzcdn.cn/vant/cat.jpeg',
            money: '100.00',
            number: '21',
            orderNum: 'sm1231323423423'
          },
          {
            id: 5,
            des: '付邮免费送！2019护考复习资料安抚爱疯饿哦金融股看法app的卡片',
            url: 'https://img.yzcdn.cn/vant/cat.jpeg',
            money: '100.00',
            number: '11',
            orderNum: 'sm1231323423423'
          }
        ]
      }
    },
    methods: {
      // 返回
      backClick(v) {
        this.$router.push({path: 'my'})
      },
      showToast() {
        this.show = true
        // this.$toast({
        //   message: "取消成功",
        // })
      },
    }
  }
</script>

<style scoped type="text/css">
  .ecal-score-title {
    text-align: center;
    line-height: 50px;
    font-size: 36px;
    color: #000000;
    margin-top: 10px;
  }

  .ecal-score {
    padding: 20px;
    margin: auto;
    height: 100px;
    box-sizing: border-box;
    font-size: 28px;
  }

  .rateMessage {
    font-size: 28px;
    margin-top: 20px;
  }

  .rateMessage >>> .van-cell__title span {
    font-size: 28px;
  }

  .payment-conter {
    height: auto;
    min-height: 1400px;
    padding-bottom: 40px;
    box-sizing: border-box;
    background: #EFEFEF;
    overflow: hidden;
  }

  .paymentBox li {
    width: 95%;
    background: #ffffff;
    padding: 30px 20px;
    box-sizing: border-box;
    margin: auto;
    margin-top: 20px;
    border-radius: 15px;
  }

  .payment-li-number {
    display: flex;
    justify-content: space-between;
  }

  .payment-li-number span:nth-child(1) {
    font-size: 24px;
    color: #cccccc;
  }

  .payment-li-number span:nth-child(2) {
    font-size: 26px;
    color: #A92D29;
  }

  .payment-li-des {
    margin-top: 20px;
    display: flex;
    border-bottom: 2px solid #EFEFEF;
    padding-bottom: 20px;
    box-sizing: border-box;
  }

  .payment-li-desimg {
    float: left;
  }

  .payment-des-txt {
    width: 500px;
    float: left;
    margin-left: 20px;
  }

  .payment-des-txt p:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 28px;
  }

  .payment-des-txt p:nth-child(2) {
    font-size: 24px;
    margin-top: 15px;
  }

  .totalTxt {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  .totalTxt p:nth-child(1) {
    font-size: 0.32rem;
    color: #cccccc;
  }

  .totalTxt p:nth-child(2) {
    font-size: 28px;
    color: #000000;
  }

  .totalTxt p:nth-child(2) span {
    color: #a92d29;
  }

  .payment-btu {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    font-size: 0.32rem;
  }

  .payment-btu span {
    padding: 10px 30px;
    box-sizing: border-box;
    text-align: center;
    border: 2px solid #000000;
    border-radius: 50px;
    margin-left: 20px;
    color: #000000;
  }

  .payment-btu span:nth-child(2) {
    border-color: #a92d29;
    color: #a92d29;
  }
</style>
