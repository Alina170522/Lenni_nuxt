<template>
  <section class="app-listing">
    <h2 class="app-listing__title section-title">{{ title }}</h2>

    <div :class="listClass">
      <slot :list="list" />
    </div> 
     

    <button v-if="moreBtn" type="button" class="more-btn app-listing__more-btn">
    Показать всё

      <SvgIcon
        class="more-btn__arrow"
        name="arrow_down"
        width="62"
        height="92"
      />
    </button>
      <a v-else-if="moreLink" href="#" class="app-listing__link link"   >Смотреть все </a>
  </section>
</template>

<script setup>
const asset = useAsset();
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    required: true
  },
  moreBtn: {
    type: Boolean,
    default: false
  },
  moreLink: {
    type: Boolean,
    default: false
  },
  grid: {
    type: String,
    default: 'row'
  }
})

const { data: list } = await useFetch(
  () => asset(props.url),
  {
    key: () => `list-${props.url}`,
    server: false,
    lazy: true,
    default: () => []
  }
)

const listClass = computed(() =>
  props.grid === 'column'
    ? 'app-listing__column-list'
    : 'app-listing__list'
)
</script>

<style lang="less">
 .app-listing {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1414px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;

  &__list {
    display: flex;
    align-items: flex-start ;
    flex-wrap: wrap;
   gap: 115px 58px;
   
  
  @media @bw1660 {
      gap: 90px 40px ;
      
    }
    @media @bw1020 {
     gap: 90px 30px;
     
      justify-content: center;
      align-items: flex-start;
      
    }
    @media @bw650 {
      gap: 60px 0;
      justify-content: center;
      
    }
  }
 
  &__card {
   
    
    width: calc(33.333% - 38.666px);
    @media @bw1660 {
      width: calc(33.333% - 26.666px); 
    }
    @media @bw1020 {
      width: calc(50% - 15px); 
    
    }
    @media @bw650 {
    
    
      max-width: 450px;
      width: 100%;
      
    }
  }

  

}
  .app-listing__link{
  text-align: right ;
  padding-top: 65px;
}
</style>