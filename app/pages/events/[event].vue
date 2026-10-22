<template>
  <article v-if="data && !pending" class="event">

    <header class="event__header">
       <h1 class="event__banner-title title">
        {{data.title}} 
        </h1>
        <div class="event__banner-content">

          <div class="event__banner-data data">
            <time v-if="datetime" class="event__banner-date" :datetime="data.date">
              {{datetime.date}} </time>
          <div class="event__info-text">
            {{data.location}} 
          </div>
          </div>
       
       
    
    <picture class="event__banner img">
        <source type="image/webp" :srcset="asset(data.img_webp)" />

        <img 
        :src="asset(data.img)" 
        :alt="data.alt"
        class="event__img" />
      </picture>

      <div class="event__banner-meet meet">
            <div class="event__banner-time" >
              
            <time class="event__banner-hour" >
               {{datetime?.time}}
                </time>
                <span>начало</span>
            </div>
           
             <div class="event__info-text">
            {{data.address}} 
             </div>
          </div>
        </div>
   </header>
   <div class="event__container">
    
    <div class="event__content-text content"
    v-html="data.content">
   
     </div>
      <EventReserve class="event__reserve"/>
    
   </div>
   

  </article>
  <div v-else>
Упс, что-то пошло не так
  </div>
</template>

<script setup>
const asset = useAsset();

const route = useRoute()

const slug = computed(() => String(route.params.event))

const { data, pending, error } = await useFetch(
  () => asset(`/json/events/${slug.value}.json`),
  {
    key: () => `event-${slug.value}`,
    server: false,
    lazy: true,
    default: () => null
  }
)

const datetime = computed(() => {
  if (!data.value?.date) return null

  const date = new Date(data.value.date)

  return {
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }
})
</script>

<style lang="less">
 .event__container{ 
   

  .container();
 }
.event {
  padding-top: 120px;
  @media @bw500 {
  overflow: hidden;
 // padding-right: 40px;
    
  }


 
  &__banner {
   display: grid;
    padding: 40px;
    margin-bottom: 40px;
    @media @bw768 {
      padding: 20px;
      display: contents;
      
    }
   
  }
  &__banner-title {
    margin: 0 auto 80px;
    font-family: @font2;
    font-size: 70px;
    font-weight: 500;
    line-height: 1.285;
    text-align: center;
    @media @bw768 {
      font-size: 40px;
      max-width: 468px;
      margin: 0 auto 40px;
    }
    @media @bw500 {
      font-size: 20px;
      max-width: 240px;
      margin-bottom: 40px;
    }
  }
  &__banner-content {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "data img meet";
    gap: 40px;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;
   
  
    @media @bw768 {
      max-width: 720px;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "img img"
        "data meet";
      row-gap: 16px;
      column-gap: 20px;
      align-items: start;
    }
  }
  
  
  &__banner-data {
    grid-area: data;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    justify-self: end;
    font-family: @font3;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.1875;
    color: @black;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    @media @bw768 {
     
      align-items: center;
      text-align: center;
      font-size: 12px;
     

    } /* Линия внизу под "КАФЕ ПТИЧКА" */
    &::after {
      content: "";
      position: absolute;
      bottom: -12px;
     left: 50%;
      right: auto;
      transform: translateX(-50%);
      width: 100%;
      max-width: 105px;
      height: 1px;
      background: linear-gradient(
        270deg,
        rgba(28, 27, 27, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  &__banner-date {
    position: relative;
    display: block;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 12px;
    padding-top: 12px;
    @media @bw768 {
      font-size: 18px;
    } /* Линия сверху даты */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      width: 100%;
      max-width: 105px;
      height: 1px;
      background: linear-gradient(
        270deg,
        rgba(28, 27, 27, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      @media @bw768 {
       top: 8px;
        
      }
    }
  }
  &__img {
    grid-area: img;
    max-width: 506px;
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    @media @bw1340 {
      max-width: 426px;
    }
    @media @bw768 {
      justify-self: center;
   
      max-width: 245px;
    }
    
  }
  &__banner-meet {
    grid-area: meet;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    justify-self: start;
    font-family: @font3;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.1875;
    color: @black;
    text-transform: uppercase;
    @media @bw768 {
     
      align-items: center;
      font-size: 12px;
    } /* Линия внизу под адресом */
    &::after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 30%;
      right: auto;
      transform: translateX(-50%);
      width: 100%;
      max-width: 105px;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(28, 27, 27, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      @media @bw768 {
      bottom: -10px;
       left: 40%;
        
      }
    }
    p {
      margin: 8px 0 0 0;
     }
  }
     &__banner-address{
    @media @bw1020 {
      font-size: 14px;
       white-space: nowrap;
    }
     @media @bw768 {
      font-size: 12px;
      font-weight: 700;
     }
     }
        
      
    
  
  &__banner-time {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    @media @bw768 {
      justify-content: center;
      margin-bottom: 8px;
      font-size: 12px;
    }
  } /* Время (крупное) */
  &__banner-hour {
    position: relative;
    display: block;
    font-family: @font3;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.5px;
    padding-top: 0;
    @media @bw768 {
      font-size: 18px;
    } /* Линия сверху времени */
    &::before {
      content: "";
      position: absolute;
      //top: -5px;
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      width: 100%;
      max-width: 160px;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(28, 27, 27, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      @media @bw768 {
        
       
        
      }
    }
  }
}
 
.event__content-text {
 
  text-align: left;
  max-width: 868px;
  margin-top: 75px;
  margin-bottom: 50px;
  font-size: 16px;
  font-weight: 400;
  font-family: @font1;
  line-height: 1.375;
}

.event-reserve {
  display: grid;
  grid-template-columns: 405px 1fr;
  gap: 65px 11%;
  margin-bottom: 80px;
  grid-template-areas:
    "checks scheme"
    "order legend";
  align-items: start;
  @media @bw1340 {
    grid-template-columns: 340px 1fr;
    gap: 65px 6.5%;
  }
  @media @bw1020 {
    gap: 60px;
    grid-template-columns: 1fr 390px;
    grid-template-areas:
      "scheme scheme"
      "checks legend "
      "checks  order";
  }
  @media @bw768 {
    gap: 60px;
    align-items: flex-start;
    width: 100%;
    grid-template-columns: 100%;
    grid-template-areas:
      "scheme"
      "legend"
      "checks"
      "order";
  }

  &__checks {
    grid-area: checks;
    display: flex;
    flex-direction: column;
    gap: 15px;
    //margin-top: 30px;
    align-items: flex-start;
    .reserve__section-title {
      margin-bottom: 15px;
    }
  }

  &__scheme {
    grid-area: scheme;
    display: flex;
    flex-direction: column;
  }
  &__scheme-container {
    position: relative;
  }

  &__scheme-title {
    width: 162px;
    margin-top: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.375;
    color: @white;
    text-align: center;
    text-transform: none;
  }
  &__scheme-wrapper {
    position: relative;
    width: 100%;
    

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 51.15384%;
    }
  }

  &__scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 
  &__tickets-layout {
    display: contents;
  }

  &__order {
    grid-area: order;
    text-align: left;
    width: 100%;
    max-width: 405px;
    @media @bw768 {
      justify-self: center;
      width: 100%;
    }
  }
  &__legend {
    grid-area: legend;
    width: 100%;
    justify-self: end;
    text-align: end;
    width: 405px;

    @media @bw768 {
      margin-top: 35px;
      justify-self: left;
      text-align: start;
    }
  }

  &__tickets-list {
    margin-top: 20px;
  }

  &__tickets {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    margin-top: 18px;
    gap: 20px;
  }

  &__qty {
    flex: 1;
    white-space: nowrap;
    &::after {
      content: " " attr(data-caption) " | " attr(data-price);
    }
  }

  &__sum {
    flex-shrink: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.388;
    text-align: right;
    white-space: nowrap;
    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
  }
}

.event-reserve__total {
  display: flex;
  justify-content: center;
  padding: 26px;
  max-width: 405px;
  font-family: @font1;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  &::before {
    content: attr(data-caption);
    margin-right: 30px;
  }

  &::after {
    content: attr(data-currency);
    margin-left: 4px;
    font-size: 0.95em;
  }
}
.event-reserve__submit {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  max-width: 405px;
  gap: 10px;
}

.event-reserve__legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;
  user-select: none;
}

// Легенда

.event-reserve__legend-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  margin-top: 20px;
  @media @bw768 {
    align-items: flex-start;
  }
}

.event-reserve__legend-list .reserve__check {
  display: flex;
  align-items: center;
  cursor: default;
  user-select: none;

  .check__mark {
    position: static !important;
    width: 24px;
    height: 24px;
    border: 2px solid @black;
    background-color: transparent;
    pointer-events: none;
    margin-right: 8px;
  }
}
.legend__qty {
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  color: @black;
  &::after {
    content: " " attr(data-price) " |  1 " attr(data-caption);
  }
}

.event-reserve__legend-list .legend-red .check__mark {
  background-color: @red !important;
  border-color: @red !important;
}

.event-reserve__legend-list .legend-black .check__mark {
  background-color: @black !important;
  border-color: @black !important;
}
.radio__ladel {
  font-size: 14px;
  margin-left: 8px;
}
.radio__mark-black {
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid @black;
  padding: 3px;
  background-clip: content-box;
  background-color: transparent;
  @media @bw768 {
    margin-left: -10px;
  }
}
.radio__mark-red {
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 0;
  left: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid @red;
  padding: 3px;
  background-clip: content-box;
  background-color: transparent;
  @media @bw768 {
    margin-left: -10px;
  }
}
.radio__mark-sold {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #bfbfbf;
}
}
</style>