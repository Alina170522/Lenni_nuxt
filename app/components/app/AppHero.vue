
<template>
   <header class="app-hero">
    <div class="app-hero-title">
                <h1 class="app-hero-title__section">АРТ-ПРОСТРАНCТВО</h1>
                <TheLogo class="app-hero__logo"/>
                <p class="app-hero-title__slogan">ДЛЯ ЛЮДЕЙ, ГОРЯЩИХ СЕРДЦЕМ И ДЕЛОМ
                <br> МЕСТО ДЛЯ НАСТОЯЩЕГО
                </p>
               
                
        </div>
            </header>
</template>

<script setup >

</script>


<style lang="less" >
.app-hero-title{

     text-align: center;
     
     &__section,
     &__slogan{
      
        font-size: 45px;
        font-weight: 400;
        line-height: 1.288;
        margin-bottom: 70px;
        font-family: @font2;
        @media @bw1020 {
         font-size: 30px;
        }
        @media @bw600 {
         font-size: 20px;
         margin-bottom: 40px;
        }
        @media @bw400 {
         font-size: 13px;
        }
     }
    &__slogan{
      margin-top: 60px;
    }
    
}

</style>