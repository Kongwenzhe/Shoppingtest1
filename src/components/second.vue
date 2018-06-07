<template>
<div class="second">
  <x-header  :right-options="{showMore: true}">杭州大厦</x-header>
  <div class="null3"></div>
  <div class="down1">
    <div class="down11">
      <img src="../assets/touxiang.jpg">
    </div>
    <div class="down12">
      <img src="../assets/vip.jpg" v-on:click='Toggle()'>
    </div>
    <div class="change2" v-show="no" v-on:click='Toggle()'>
      <img src="../assets/erweima2.png" style="margin-top: 100px;margin-left: 15px" >
    </div>
  </div>
  <div class="down2">
    <div class="down21">
    <flexbox>
      <flexbox-item ><div class="flex-demo"><img src="../assets/small.png" @click="goFirst"><p>个人信息</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>会员权益</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>会员活动</p></div></flexbox-item>
    </flexbox>
      <br>
    <flexbox>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>我的卡券</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>积分商城</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>会员福利</p></div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>停车缴费</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>店铺查询</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>服务预约</p></div></flexbox-item>
    </flexbox>
    </div>
    <div class="down22">

      <flexbox :gutter="-10">
        <flexbox-item><div class="flex-demo"><img src="../assets/star.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img src="../assets/star.png"></div></flexbox-item>
      </flexbox>
     <br>
      <br>
      <br><br>

      <flexbox :gutter="-10">
        <flexbox-item><div class="flex-demo"><img src="../assets/star.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img src="../assets/star.png"></div></flexbox-item>
      </flexbox>

    </div>
  </div>
</div>
</template>

<script>
  import { XInput, Group, XButton, Cell,XHeader,Flexbox,FlexboxItem} from 'vux'
  import XImg from "vux/src/components/x-img/index";
  export default {
    data () {
      return {
        value:true,
        no:false
      }
    },
    components: {
      XImg,
      XInput,
      XButton,
      Group,
      Cell,
      XHeader,
      Flexbox,
      FlexboxItem
    },
    methods:{
      Toggle:function(){
        this.no=!this.no;
      },
      goFirst:function(){
        this.$router.push({path:'/first'})
      }
    }

  }
</script>

<style scoped>
  .second{
    margin: 0 ;
    padding: 0;
    width: 100%;
    background:#fff;
  }
  .null3{
    width: 100%;
    height: 0;
    position: relative;
  }
  .down1{
    width: 440px;
    height: 250px;
    background-image:url("../assets/backgroud.jpg");
  }
  .down11 img{
    width:70px;
    height:70px;
    border-radius: 50%;
    border: 1px solid #DAA520;
    margin: 20px 80px 80px 170px;
  }
  .down11{
    height: 115px;
  }
  .down12 img{
    width:200px;
    height:120px;
    margin-left: 105px;
    opacity:0.7;
    border: 2px solid 	#FF6600;
    border-radius:20px;

  }
  .down2{
    width: 100%;
    height: 500px;
    margin-top: 40px;
    margin-left: 28px;
    color:#888888;
  }
  .down22{
   margin-top:-268px;
   margin-left: 68px;
  }
  .change2 {
   z-index: 99;
    background-color:rgba(48,48,48,0.5) ;
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: -245px;
    margin-left: 0px;
  }

</style>
