
<template>
  <section class="app-doit home_doit">
  <div class="app-doit__item">
    <span class="app-doit__slogan-1">Просто делайте,</span>
    <span class="app-doit__slogan-2">что нравится,</span>
    <span class="app-doit__slogan-3">а мы вам поможем</span>
  </div>
</section>

</template>
<script setup >

</script>

<style lang="less" >
.app-doit{
    position: relative;
    box-sizing: border-box;
   text-align: right;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
   
     padding-bottom: 8.3em;
    
     &__item {
     position: relative;
     margin: 0 0 0 -5.5vw;
     padding: 0 50px;
    width: 100%; 
    font-family: @font3;
    font-size:6.6vw;
    font-weight: 700;
    line-height: 1.2;
     @media @bw1020 {
      display: flex;
      flex-direction: column;
      margin: 0 0 0 -9vw;
      align-items: flex-start;
      font-size: 10.5vw;
    }
    @media @bw600 {
      margin: 0 0 0 -12vw;
      
    }
   
   
}
&__slogan-1{
  @media @bw500 {
    margin: 0 0 0 -5vw;
    
  }
}
    &__slogan-2{
      @media @bw1020 {
        position: relative;
        align-self: flex-end;
        right: -17vw;
      }
    }
    @media @bw650 {
      right: -5vw;
      
    }
   
 
    
    
    
    &__slogan-3{
     
    display: block;
    position: relative;
    right: -10.5vw;
    @media @bw1020 {
      position: relative;
      right: -3vw;
      
      
    }
    }

    
}
</style>