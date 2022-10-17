<template>
  <div class="p-home" style="background-color: #f5f5f5">
    <div class="home-header">
      <div class="bg"></div>
      <HeaderView
        :bg-href="bgHref"
        :title="title"
        :path="path"
        :link="link"
      ></HeaderView>
    </div>

    <ExperienceView></ExperienceView>

    <OffersView></OffersView>

    <FormView></FormView>

    <NewsView></NewsView>

    <PartnersView></PartnersView>

    <FAQView></FAQView>

    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "../components/user/Layout/HeaderView/HeaderView.vue";
import ExperienceView from "../components/user/Layout/ExperienceView/ExperienceView.vue";
import OffersView from "../components/user/Layout/OffersView/OffersView.vue";
import FormView from "../components/user/Layout/FormView/FormView.vue";
import NewsView from "../components/user/Layout/NewsView/NewsView.vue";
import PartnersView from "../components/user/Layout/PartnersView/PartnersView.vue";
import FAQView from "../components/user/Layout/FAQView/FAQView.vue";
import FooterView from "../components/user/Common/FooterView/FooterView.vue";
export default {
  name: "IndexPage",
  components: {
    HeaderView,
    ExperienceView,
    OffersView,
    FormView,
    NewsView,
    PartnersView,
    FAQView,
    FooterView,
  },
  data() {
    return {
      bgHref: "headerBackground",
      title: "Oт желания к реальности",
      path: "",
      link: "/",
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
