<template>
  <div class="v-home">
    <div class="home-header">
      <div class="bg"></div>
      <HeaderView></HeaderView>
    </div>

    <ExperienceView></ExperienceView>

    <OffersView></OffersView>

    <FormView></FormView>

    <NewsView></NewsView>
  </div>
</template>

<script>
import HeaderView from "@/components/Layout/HeaderView/HeaderView.vue";
import ExperienceView from "@/components/Layout/ExperienceView/ExperienceView.vue";
import OffersView from "@/components/Layout/OffersView/OffersView.vue";
import FormView from "@/components/Layout/FormView/FormView.vue";
import NewsView from "@/components/Layout/NewsView/NewsView.vue";
export default {
  name: "IndexPage",
  components: { HeaderView, ExperienceView, OffersView, FormView, NewsView },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
</style>
