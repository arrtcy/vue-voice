<template>
  <section class="Presonal">
          <van-cell is-link @click="showPopup" icon=''></van-cell>
            <van-popup v-model="show" position="left" :style="{ width: '85%',height:'100%' } "  >
                <div id="top">
                    <van-notice-bar scrollable text="技术是开发它的人的共同灵魂。" />
                    <van-card
                       desc="描述信息"
                       title=""
                       thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                       @click="click1"
                    />
                </div>
                <div id="nav">
                   <p><van-icon name="bulb-o" size='24px'/>创作者中心</p>
                </div>
                <div id="main">
                    <p>音乐服务</p>
                    <hr>
                      <p><van-icon name="bullhorn-o" size='24px'/>听歌识曲</p>
                      <p><van-icon name="comment-circle-o" size='24px'/>云村有票</p>
                      <p><van-icon name="shopping-cart-o" size='24px'/>商城</p>
                      <p><van-icon name="points" size='24px'/>游戏专区</p>
                      <p><van-icon name="music-o" size='24px'/>口袋彩铃</p>
                </div>
                <div id="footer">
                      <p>其他服务</p>
                    <hr>
                      <p><van-icon name="aim" size='24px'/>个性装扮</p>
                      <p @click="off"><van-icon name="clock-o" size='24px' />定时关闭</p>
                      <p><van-icon name="records" size='24px'/>音乐黑名单</p>
                      <p><van-icon name="points" size='24px'/>边听边存</p>
                      <p><van-icon name="description" size='24px'/>我的订单</p>
                </div>
                    <div id="set">
                        <span><van-icon name="music-o" size='24px'/>夜间模式</span>
                        <span><van-icon name="setting-o" size='24px'/>设置</span>
                        <span @click='quit'><van-icon name="close" size='24px'/>退出</span>
                    </div>  
            </van-popup>
  </section>
</template>

<script>
import { Dialog } from 'vant';
export default {
     data() {
    return {
      show: false,
      active: 0,
      Dialog,
      name
    };
  },
   methods: {
         showPopup() {
            // const  res=await info()
            // console.log(res)
          this.show = true;
        },
        quit(){
          localStorage.clear("uid")
          this.$router.push({name:"Login"})
          },
         off(){
            Dialog.confirm({
               title: '定时关闭',
               message: '10分钟\n20分钟\n30分钟\n45分钟\n60分钟',
               })
               .then(() => {
                
               })
               .catch(() => {
                
               });
        },
        click1(){
           this.$router.push({name:'Update'})
        }
     },
    created() {
        this.$envetBus.$on('name',name)
    }
 }
</script>

<style scoped>
html,body{
  font-size: 100px;
  display: flex;
}

  #top,#nav,#main,#footer{
    padding:1rem;
    
  }
  #nav{
    height: 1rem;
    background-color: goldenrod;
  }
  #main{
    margin-top: 1rem;
    background-color: rgb(247,247,247);
  }
  #footer{
    margin-top: 1rem;
    background-color: rgb(247,247,247);
  }
  #main p {
    margin-top:0.5rem
  }
  #main p:hover{
    background-color: rgb(230,230,230);
  }
   #footer p {
    margin-top:0.5rem
  }
  #footer p:hover{
    background-color: rgb(230,230,230);
  }
 #set{
   margin-top: 1rem;
   display: flex;
   justify-content: space-around;
   height: 5rem;
   line-height: 5rem;
   background-color: goldenrod;
 }

</style>