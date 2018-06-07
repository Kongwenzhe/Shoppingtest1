<template>
  <div class="first">
    <x-header  :right-options="{showMore: true}">杭州大厦</x-header>
    <div class="null2"></div>
    <div class="Up1" >
      <div class="Up11">
      <img src="../assets/touxiang.jpg">
      </div>
      <div class="Up12">
      <button>VIP微信卡</button>
      </div>
      <div class="Up13">我的积分
      <h1 style="margin-left: 19px">0</h1>
      </div>
    </div>
    <div class="Up2">
      <group  label-width="5em" label-margin-right="2em" label-align="left">
        <cell title="姓名">
          <img slot="icon" width="20" style="display:block;" src="../assets/person.png">
          <div>
            <span style="color: green;margin-right: 182px">张亮亮</span>
          </div>
        </cell>
        <cell title="会员卡号" >
          <img slot="icon" width="20" style="display:block;" src="../assets/id.png">
          <div>
            <span style="color: green;margin-right: 182px">15465415612654</span>
          </div>
        </cell>

        <cell title="会员卡信息" url="../assets/person.png">
          <img slot="icon" width="20" style="display:block;" src="../assets/identify.png">
          <div>
            <span style="margin-right: 120px"><img src="../assets/tiaoxingma.png" style="height: 40px;width: 200px"></span>
          </div>
        </cell>
      </group>
    </div>

    <div class="Up3">
      <p>我的服务</p>
      <div class="Up31">
        <flexbox>
          <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>积分商城</p></div></flexbox-item>
          <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>我的卡券</p></div></flexbox-item>
          <flexbox-item><div class="flex-demo"><img src="../assets/small.png"><p>订单中心</p></div></flexbox-item>
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
        value:true
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

  }

  }
</script>

<style scoped>
  .first{
       margin: 0 ;
       padding: 0;
       width: 100%;
       background:#F0F0F0;
     }
  .null2{
    width: 100%;
    height: 0;
    position: relative;
  }
  .Up1{
    width: 440px;
    height: 250px;
    background-image:url("../assets/backgroud.jpg");
  }
  .Up1 img{
    width:70px;
    height:70px;
    border-radius: 50%;
    border: 1px solid #DAA520;
    margin: 20px 80px 80px 170px;
  }
  .Up11{
    height: 120px;
  }
  .Up12{
    height: 30px;
  }
  .Up12 button{
    color:#DAA520;
    margin-left:162px;
    background-color:#E8E8E8;
    border: 1.5px solid #FFCC33;
    border-radius: 30px;
    width: 90px
  }
  .Up13{
    margin-left:172px;
    color:#888888;
  }
  .Up2{
    margin-top: -20px;
  }
  .Up3{
    margin-top: 10px;
    height: 300px;
    z-index: 2;
    background-color: #fff;
    color: #888888;
  }
  .Up31{
    margin-top: 40px;
    margin-left: 45px;
  }
</style>
