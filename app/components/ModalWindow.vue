<template>
  <ClientOnly>
    <teleport to="body">
      <Transition>
      <div v-if="isActive" class="modal-window">
        <div class="modal-window__wrapper">
          <div class="modal-window__sticky-close">
            <button
              type="button"
              title="Закрыть"
              class="modal-window__x-btn x-btn"
              @click="close"
            >
              <SvgIcon class="x-btn__icon" name="x" width="12" height="12" />
            </button>
          </div>

          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <slot>
         
            </slot>
          </div>
        </div>
      </div>
      </Transition>
    </teleport>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
});
 const store = useStore();
 const isActive = computed(() => {
    return props.name ? store.modal[props.name] : null;
  });

  const close = () => {
    if (props.name) store.closeModal(props.name);
  };
</script>

<style lang="less">
.modal-window {
  box-sizing: border-box;
  position: fixed;
  backdrop-filter: blur(50px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 110;
  padding: 90px 95px 50px;
  background-color: rgba(28, 27, 27, 0.4);
  overflow-y: auto;
  @media @bw768 {
    padding: 60px 20px 20px;
    
  }
  &__wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1210px;
    margin: auto;
    background-color: @gray;
    background-image: url(../assets/images/noise.png);
    background-position:
      0 0,
      0 0;
    background-size:
      auto,
      100% auto;
    background-repeat: repeat, repeat-y;
  }

  &__container {
    box-sizing: border-box;
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
    padding: 0 40px 40px;
  @media @bw768 {
    padding: 0 20px 20px;
    
  }
      
    }
  
  &__sticky-close {
    position: sticky;
    top: 0;
    align-self: flex-end;
    width: 0;
    height: 0;
  }
  &__x-btn {
    position: absolute;
    top: -30px;
    right: -30px;
  }
  &__container {
    box-sizing: border-box;
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px 40px;
    @media @bw768{
    padding: 0 20px 20px;
    }
  }
  
  &__title {
    position: relative;
    margin: -40px 0 70px;
    padding: 10px 85px;
    max-width: 595px;
    width: 100%;
    background-color: @black;
    text-transform: uppercase;
    font-weight: 400;
    font-family: @font2;
    font-size: 22px;
    line-height: 1.36;
    color: @white;
    letter-spacing: 0.02em;
    z-index: 1;
    @media @bw1020 {
      max-width: 450px;
      padding: 10px;
    }
    @media @bw768 {
      max-width: 230px;
      font-size: 14px;
      padding: 10px 16px;
      margin: -20px 0 40px;
     } 
     }
}

.form__submit {
  margin-right: 15vw;
  width: 100%;
  @media @bw1020 {
    width: 290px;
  }
  @media @bw768 {
    margin-right: 0;
    max-width: 100%;
    width: 100%;
  }
}
</style>
