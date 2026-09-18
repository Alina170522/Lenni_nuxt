<template>
  <section class="app-offers">
    <div class="app-header-offers">
      <h4 class="app-offers__title">Я ХОЧУ:</h4>
      <div class="app-offers__btns">
        <button
          class="app-offers__btn btn--red btn"
          type="button"
          @click="openPopup()"
        >
          Провести мероприятие
        </button>

        <button class="app-offers__btn btn" type="button">
          Стать арендатором
        </button>
      </div>
    </div>
    <ModalWindow
      :name="'getOffer'"
      :title="' Заполните форму<br />и мы подберем площадку'"
    >
     <EventsForm @close="closePopup" />
    </ModalWindow>
  </section>
</template>

<script setup>
const store = useStore();
const openPopup = () => {
  store.openModal("getOffer");
};

const closePopup = () => {
  store.closeModal("getOffer");
};
</script>

<style lang="less">
.app-offers {
 padding-top: 5px;
 padding-bottom: 200px;
  display: block;
  text-align: center;
  font-family: @font2;
  font-size: 20px;
  line-height: 30px;
  @media @bw600 {
    font-size: 13px;
  }
  &__btns {

    justify-self: center;

    .btn--red {
      margin-right: 46px;
      @media @bw600 {
        margin-right: 0;
        margin-bottom: 25px;
      }
    }
    .app-offers__btn {
      @media @bw600 {
        width: 100%;
        max-width: 280px !important;
      }
    }
  }
}
</style>
