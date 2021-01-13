<template>
  <div class="hello" :style="note">
    <div style="height:30px;border:1px solid #ccc;background:rgba(255,255,255,0.5);border-radius: 10px;position: relative;top:20px">
      <div style="float: left;width: 10%;height:100%;display: flex;justify-content: center;align-items: center">
        <icon type="search" style="color: #5d5d5d"></icon>
      </div>
      <div style="float: left;width: 70%;height:100%">
        <swiper :auto="true" height="30px" direction="vertical" :show-dots="false">
          <swiper-item style="height: 30px" v-for="(item, index) in searchHint" :key="index">
            <p style="overflow:hidden;padding:0;margin:0;height:30px;line-height: 30px;color:#5d5d5d;font-size:14px">{{item}}</p>
          </swiper-item>
        </swiper>
      </div>
      <div style="float: left;width: 20%;height:100%;display: flex;justify-content: center;align-items: center">
        <icon type="clear" style="color: #5d5d5d"></icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App111111',
        url:require('../assets/11111.png'),
        results: [],
        value: 'test',
        searchHint:['11','22'],
        note:{
          // backgroundImage:"background:url('../assets/6363.jpg')",
          height:'230px',
          width:'100%',
          border:'1px solid #ccc',
          backgroundRepeat:"no-repeat",
        }
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    background: url("../assets/11111.png");
    background-size: 100%;
  }
</style>
