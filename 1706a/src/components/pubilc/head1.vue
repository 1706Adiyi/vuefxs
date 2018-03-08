<template>
  <div id="head1">
    <img src="../../assets/logo.png" alt="">
    <div class="head1">
        <div>
            <i class="iconfont icon-user"></i>
            <p>用户</p>
        </div>
        <div>
            <i class="iconfont icon-nav"></i>
            <p>导航</p>
        </div>
    </div>
  </div>
</template>
 
<script>
export default {
    name: 'App'
   }
</script>
<style lang="scss">
 @import url("../../assets/iconfont/iconfont.css");
 #head1{background:white;
     width:100;display:flex;justify-content: space-between;box-sizing: border-box;padding: .3rem;align-items: center;
     img{height: 1rem}
    .head1{display: flex;justify-content: center;align-items: center;
        div{display: flex;flex-direction: column;justify-content: center;align-items: center;margin:0 .2rem;
            i{margin: .2rem 0}
        }
    }
 }
</style>