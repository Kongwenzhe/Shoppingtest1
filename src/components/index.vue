<template>
  <div class="index1">

    <x-header  :right-options="{showMore: true}">杭州大厦</x-header>
    <div class="null1"></div>
    <div class="texture">
      <img src="../assets/shopping.png">
    </div>
    <div class="content">
      <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/person.png" width="30" height="30">
      </x-input>


      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/tel.png" width="30" height="30">
      </x-input>


      <x-input title="身份证" name="email" placeholder="请输入您的身份证" is-type="email">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/id.png" width="30" height="30">
      </x-input>


      <x-input title="验证码" name="number" placeholder="请输入验证码" keyboard="number" is-type="email">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/identify.png" width="30" height="30">
        <button slot="right"  style="width:100px;color:#888888;height:30px;margin-top: 0px;margin-right:10px;border: 1px solid #DAA520; border-radius: 30px; " >
          <span v-show="show" @click="getCode">获取验证码</span>
          <span v-show="!show" class="count">{{count}} s</span>
        </button>
      </x-input>
      </group>
       <div class="fin">
         <check-icon type="plain" :value.sync="value" ></check-icon>
         <span style="color:#C0C0C0;font-size: 12px">我已阅读并同意遵守 </span>
         <span style="color:#DAA520;font-size: 12px"  @click="goThree">用户注册协议</span>
       </div>

    </div>
    <div class="footer">

      <button  style="width:80%;height:40px;margin:0px 0px 0px 40px;background-color:#DAA520;color:#fff;border-radius: 15px;" @click="goFirst">
      提交</button>
      <button style="width:80%;height:40px;margin:25px 0px 0px 40px;background-color:#DAA520;color:#fff;border-radius: 15px;" @click="goSecond">绑定实体卡</button>

    </div>
  </div>

</template>


<script>
  import { XInput, Group, XButton, Cell,CheckIcon,XHeader} from 'vux'
  const TIME_COUNT = 60;
  export default {
    data () {
      return {
        value:true,
        show: true,
        count: '',
        timer: null,
         }
      },
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      CheckIcon,
      XHeader
    },
    methods:{
      goFirst:function(){
        this.$router.push({path:'/second'})
      },
      goSecond:function(){
        this.$router.push({path:'/second'})
      },
      goThree:function () {
        this.$router.push({path:'/promise'})
      },
      getCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }
    }

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .index1{
    margin: 0px ;
    padding: 0px;
    width: 100%;
  }
  .null1{
    width: 100%;
    height: 0;
    position:relative;
  }
  .texture{
    margin: 50px 25px 50px 25px;
  }
  .texture img{
    width:80%;
    margin-left:25px;

  }
  .content{
    box-shadow: #DAA520 0px 0px 1px 1px ;
    width: 80%;
    margin-left: 38px;
  }
  button{
    background-color:#fff;
    border:0px;
  }
  .fin{
    margin-left: 20px;
  }
  .footer{
    margin-top: 50px;

  }
</style>
