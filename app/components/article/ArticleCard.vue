<template>
  <article class="article-card">
    <a href="#" class="article-card__link">
      <picture class="article-card__picture">
        <source
          type="image/webp"
          media="(max-width: 450px)"
          :srcset="asset(data.img_webp)"
        />

        <source media="(max-width: 450px)" :srcset="asset(data.img)" />

        <source media="(max-width: 1169px)" :srcset="asset(data.img_tablet)" />

        <source
          type="image/webp"
          media="(max-width: 1169px)"
          :srcset="asset(data.img_tablet_webp)"
        />
        <source media="(max-width: 1169px)" :srcset="asset(data.img_tablet)" />

        <source type="image/webp" :srcset="asset(data.img_webp)" />
        <img :src="asset(data.img)" :alt="data.alt" class="article-card__img" />
      </picture>
    </a>
    <div class="article-card__info">
      <time :datetime="data.date" class="article-card__time">
       {{date}}
         </time>
      <a href="#" class="article-card__title-link">
        <h4 class="article-card__title">
           {{data.title}}</h4>

        <span class="article-card__arrow arrow">
         <SvgIcon 
        name="arrow"
        class="arrow__icon" 
        width="91" 
        height="60"
        />
        </span>
      </a>
        

      <p class="article-card__text">
        {{data.text}}
        </p>
    </div>
  </article>
</template>

<script setup>
const asset = useAsset();
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const date = computed(() => {
  try {
    return new Date(props.data.date).toLocaleDateString();
  } catch {
    return null;
  }
});
</script>

<style lang="less">
.article-card {

  
  &__container {
    
    .container();
  }
  &__content {
    max-width: 830px;
    
  }
}
.article-card {
    box-sizing: border-box;
    display: flex;
    position: relative;
   padding-top: 10px ;
    padding-left: 0;
    right: 30px;
@media @bw1170 {
    flex-direction: column;
 
}
    
   
    

    &:hover {
        .article-card__picture {
            box-shadow: 0 0 30px 0 fade(@black, 55%);
        }
    }

     & + .article-card {
    margin-top: 120px;
    @media @bw768 {
        margin-top: 80px;
        
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      margin: 0 auto 60px;
      bottom: 100%;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 1254px;
      height: 1px;
      background-color: @black;
      pointer-events: none;
    }
  }

    &__link {
        flex-shrink: 0;
        margin-right: 60px;
        display: block;
        width: 467px;
        text-decoration: none;
        font-size: 0;
         @media @bw1170 {
      width: 100%;
      margin-right: 0;
      flex-shrink: 1; 
    }

    @media @bw768 {
      width: 100%;
      margin-right: 0;
    }

        &:hover {
            & ~ .article-card__info .article-card__title-link {
                color: @red;
                text-decoration-color: @red;
            }
        }
    }

    &__picture {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        transition: box-shadow 0.2s;

        &::after {
            content: '';
            display: block;
            width: 100%;
            padding-top: 62.715%;
        }
    }

    &__img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__info {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 30px 150px 30px 0;
        @media @bw400 {
            align-items: start;
            padding: 20px 0;
         
     
            
        }
        
    }

    &__time {
        margin: 0 0 40px;
        color: @black;
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        @media @bw600 {
            margin: 0 0 20px;
            font-size: 14px;
            
        }
    }

    &__title-link,
    &__text {
        max-width: 470px;
        @media @bw768 {
            margin-bottom: 20px;
            
        }
        
    }

    &__title-link {
        margin: auto 0 40px;
        font-weight: 600;
        font-size: 24px;
        color: @black;
        text-decoration-color: transparent;
        transition: color 0.2s, text-decoration-color 0.2s;

        &:hover {
            color: @red;
            text-decoration: @red 0.2s;
            
        }
     
    }

    &__title {
        margin: 0;
        font-weight: 600;
        font-size: 24px;
       line-height: 33px;
    @media @bw768 {
        font-size: 20px;
        
    } 
    @media @bw400 {
        font-size: 16px;
        
    }
    }

    &__text {
        margin: 0;
        @media @bw768 {
            font-size: 16px;
            
        }
        @media @bw400 
        {font-size: 14px;
            margin: 0 0 40px;
        }
        
    }

 &__arrow {
    position: absolute;
    right: 0;
    bottom: 30px;
    color: inherit;
    z-index: 2;
  
    

     &:hover {
            color: @red;
           
        }
    
}







.link {
    color: @black;
    font-family: @font1;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    text-decoration: none;
    

    &:hover {
        color: @red;
        text-decoration-color: @red;
    }
}



}

</style>
