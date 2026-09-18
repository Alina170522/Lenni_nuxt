<template>
  <section class="app-contacts">
    <div class="app-contacts__wrapper">
      <ul class="app-contacts__list">
        <li class="app-contacts__item">
          <div class="app-contacts__item-mark">
            <SvgIcon
              name="info"
              class="app-contacts__item__icon"
              width="24"
              height="24"
            />
          </div>
          <div class="app-contacts__item-content">
            <h4 class="app-contacts__item-title">Цены</h4>
            <div class="app-contacts__item-info">
              Цены, указанные на сайте носят информационный характер. Мы
              придерживаемся индивидуального подхода в работе с клиентом.
            </div>
          </div>
        </li>
        <li class="app-contacts__item">
          <div class="app-contacts__item-mark">
            <SvgIcon
              name="contact"
              class="app-contacts__item__icon"
              width="24"
              height="24"
            />
          </div>
          <div class="app-contacts__item-content">
            <h4 class="app-contacts__item-title">Контакты</h4>
            <div class="app-contacts__item-info">
              Отдел организации мероприятий
            </div>
            <a href="tel:+73822907256" class="app-contacts__item-info">
              8 (3822)-90-72-56 </a
            ><br />
            <a href="mailto:idat@tusur.ru" class="app-contacts__item-info">
              idat@tusur.ru
            </a>
          </div>
        </li>
        <li class="app-contacts__item">
          <div class="app-contacts__item-mark">
            <SvgIcon
              name="hand"
              class="app-contacts__item__icon"
              width="24"
              height="24"
            />
          </div>
          <div class="app-contacts__item-content">
            <h4 class="app-contacts__item-title">Преимущество</h4>
            <div class="app-contacts__item-info">
              Мы имеем все возможности для того, чтобы помочь как малому бизнесу
              и молодым талантам, так и большим корпорациям и холдингам.
            </div>
          </div>
        </li>
      </ul>
      
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="less">
.app-contacts {
  .container();
  overflow-x: hidden;
  @media @bw650 {
    margin: 20px auto;
  }

  &_section-title {
    text-align: center;
    margin-bottom: 60px;
  }

  &__wrapper {
    display: block;
    justify-content: center;
    align-items: center;

   gap: 80px;
  }

  &__list {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
    gap: 65px;
    padding: 70px 10px 40px;
    margin:  0;
    width: 100%;

    @media @bw950 {
      flex-direction: column;
      padding-left: 0;
      max-width: 100%;
      padding: 0 16px;
      align-items: center;
      gap: 40px;
    }
    @media @bw650 {
      flex-direction: column;
      padding-left: 0;
      max-width: 100%;
      padding: 0 16px;
      align-items: center;
      gap: 40px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: 320px;
    width: 100%;
    margin: 0 auto;

    gap: 24px;

    @media @bw950 {
      align-items: center;
      padding: 0;
      justify-self: center;
      width: 100%;
      max-width: 320px;
      margin: 90px auto;
    }
    @media @bw650 {
      align-items: center;
      padding: 0;
      justify-self: center;
      width: 100%;
      max-width: 320px;
      margin: 0 auto;
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
  &__item-content {
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
   

    @media @bw950 {
      text-align: center;
      display: block;
      width: auto;
    }
    @media @bw650 {
      flex-direction: column !important;
      text-align: center;
      justify-items: center;
      display: block;
      width: auto;
    }
  }

  &__item-title {
    margin: 0 0 8px;
    font-size: 20px !important;
    font-weight: 600;
  }

  &__item-info {
    font-size: 16px;
    font-weight: 400;
    font-family: @font1;
    line-height: 1.375;
    @media @bw950 {
      display: block;
    }
    @media @bw650 {
      display: block;
    }
  }
  &__item-title,
  &__item-info {
    @media @bw650 {
      font-size: 18px;
    }
    @media @bw400 {
      font-size: 14px;
    }
  }
 
}
</style>
