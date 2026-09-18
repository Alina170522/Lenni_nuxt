<template>
  <section class="app-contacts">
    <h2 class="app-contacts__section-title section-title">Контакты</h2>
    <div class="app-contacts__wrapper">
      <ul class="app-contacts__list">
        <li class="app-contacts__item">
          <div class="app-contacts__item-mark">
            <SvgIcon 
        name="location"
        class="app-contacts__item__icon" 
        width="24" 
        height="24"
        />
            
          </div>
          <div class="app-contacts__item-content">
            <h4 class="app-contacts__item-title">Томск, Красноармейская 146</h4>
            <div class="app-contacts__item-info">2 этаж</div>
            <div class="app-contacts__item-info">оф. 206</div>
          </div>
        </li>
        <li class="app-contacts__item">
          <div class="app-contacts__item-mark">
                <SvgIcon 
        name="rent"
        class="app-contacts__item__icon" 
        width="24" 
        height="24"
        />
           
          </div>
          <div class="app-contacts__item-content">
            <h4 class="app-contacts__item-title">Отдел аренды</h4>
            <a href="tel:+73822907256" class="app-contacts__item-info" >
              8 (3822)-90-72-56
            </a>
            <a  href="mailto:idat@tusur.ru"  class="app-contacts__item-info" >
              idat@tusur.ru
            </a>
          </div>
        </li>
        <li class="app-contacts__item">
          <div class="app-contacts__item-mark">
                <SvgIcon 
        name="star"
        class="app-contacts__item__icon" 
        width="24" 
        height="24"
        />
            
          </div>
          <div class="app-contacts__item-content">
            <h4 class="app-contacts__item-title">Отдел мероприятий</h4>
            <a href="tel:+73822907256" class="app-contacts__item-info" >
              8 (3822) 90-72-56
            </a>
            <a href="mailto:idat@tusur.ru" class="app-contacts__item-info" >
              idat@tusur.ru
            </a>
          </div>
        </li>
      </ul>

      <div class="app-contacts__map-conteiner">
  
        <TheMap class="app-contacts__map" />
     
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="less">
.app-contacts {
  
  .container();
 padding-left: 20px;
  margin: 95px auto 180px;
  @media @bw650 {
    margin: 20px auto;
  }

  &__section-title {
    text-align: center;
    
    
   
    
  }

  &__wrapper {
   
    display: flex;
    gap: 130px;
   align-items: flex-start;
    
    
    @media @bw950 {
      flex-direction: column-reverse;
      justify-self: center;
    }
  }

  &__list {
  
    list-style: none;
  display: block;
   justify-self: start;
  
    padding: 0 ;
    margin: 0;
    width: 420px;
    @media @bw950 {
      display: flex;
      max-width: 100%;
      width: 100%;
      gap: 65px;
    }
    @media @bw650 {
      flex-direction: column;
      padding-left: 0;
      max-width: 100%;
      padding: 0;
      align-items: flex-start;
      gap: 40px;
    }
  }

  &__item {
    display: flex;
    gap: 24px;
   

   padding-top: 45px;
   
  
    @media @bw950 {
      display: flex;
      flex-direction: column;
      padding-right: 0;
      align-items: center;
    }
    @media @bw650 {
      flex-direction: row;
      align-items:flex-start;
      padding: 0;
      justify-self: center;
      
    }
  }

  &__item-mark {
    width: 110px;
    height: 110px;
    background: @black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    @media @bw650 {
      width: 65px;
      height: 65px;
    }
  }

  &__item-icon {
    width: 24px;
    height: 24px;
    color: @red;
  }
  &__item-content
  
  { 
    @media @bw950 {
      justify-items: center;
    }
    @media @bw650 {
      justify-items: start;
    }
  }

  &__item-title {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
  }

  &__item-info {
      display: flex;
    font-size: 16px;
    font-weight: 400;
    font-family: @font1;
    line-height: 1.375;
   
    @media @bw950 {
      display: block;
    }
  }
  &__item-title,
  &__item-info {
    @media @bw400 {
      font-size: 14px;
    }
  }

   &__map-conteiner {
    width: 100%;
    max-width: 750px;
    height: 420px;
    margin-left: auto;
    @media @bw1020 {
      width: 100%;
      height: 350px;
      margin-bottom: 125px;
    }
    @media @bw768 {
      margin-bottom: 65px;
    }
  }
}
</style>
