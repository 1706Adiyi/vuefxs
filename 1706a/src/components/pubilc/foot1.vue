<template>
<div id="foot1">
 <div class="nv-bottom">
        <div class="phone">
            <i class="iconfont">&#xe607;</i>服务热线：400-9577-658
        </div>
        <div class="model">
            <div style="color: #39c894;">
                触屏版
            </div>
            <div>
                电脑版
            </div>
            <div>
                关于我们
            </div>
            <div>
                联系我们
            </div>
        </div>
        <div class="finish">
            2016 sirfang.com 刚需房装修就找房先森
        </div>
         <div class="backToTheTop">
            <i class="iconfont">&#xe63a;</i>
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
 #foot1{width: 100%;background:white;
     .nv-bottom{width: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;
        .phone{width: 100%;display: flex;justify-content: center;align-items: center; font-size: 0.35rem;margin:.3rem 0;
            i{color: #39c894 ; font-size: 0.35rem;}
        }
        .model{width: 100%;display: flex;
            div{width: 25%;display: flex;justify-content: center;align-items: center;border-right:0.01rem solid #eaeaea; font-size: 0.35rem;
            }
            div:nth-of-type(4){border-right:0 }
        }
    }
    .finish{width: 100%;height: 1rem;display: flex;justify-content: center;align-items: center; font-size: 0.35rem;}
    .backToTheTop{width: 1rem;height: 1rem;border: 0.01rem solid #eaeaea;border-radius:50%; display: flex;justify-content: center;align-items: center;position: fixed;top:75%;right: 0.2rem;background:white; 
        i{font-size: 0.5rem;color: #eaeaea}
    }
 }
</style>