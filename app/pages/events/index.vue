<template>
  <div class="events">
    <AppListing  
    v-slot="{list}"
    :title="'Мероприятия'"
    class="events__listing"
    :moreBtn="true"
    :url="'/json/events.json'"
      >
      
      <EventCard
        v-for="(card, index) in list"
        :key="index"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>

    <AppServes class="events-serves"/>

    <AppOffers class="home-offers"/>
     
     <ContactEven/>
  </div>
</template>

<script setup>

 </script>

<style lang="less">
  .events {
    padding: 140px 0 100px;
   
    position: relative;
     overflow-x: hidden;

    &__listing {
    
        margin-bottom: 100px;
    }

    &__services {
        .container(); 
        margin-bottom: 50px;
    }

 
    
    .listing__link{
        text-align: center;
    }
} 
</style>