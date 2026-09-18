<template>
  <div class="home">
<AppHero class="home__hero"/>
<AppOffers class="home-offers"/>
<AppAbout class="home-about"/>
<ClientOnly>
<AppUpcoming class="home-upcoming"/>
</ClientOnly>

<AppListing  
    v-slot="{list}"
    :title="'Блог'"
    class="home__listing"
    :moreLink="true"
    :grid="'column'"
    :url="'http://localhost:3000/json/blog.json'"
      >
      
      <ArticleCard
        v-for="(card, index) in list"
        :key="index"
        :data="card"
        class="app-listing__article"
      />
    </AppListing>

    <AppContacts class="home-contacts"/>

       <AppDoit class="home-doit"/>


  </div>
</template>

<script setup></script>

<style lang="less">
.home {
  overflow: hidden;
    padding: 100px 0;
    &__listing{
        margin-bottom: 95px;
    }
}


</style>