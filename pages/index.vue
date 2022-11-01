<template>
  <div class="p-home" style="background-color: #f5f5f5">
    <div class="rain">
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
    </div>
    <div class="home-header">
      <div class="bg"></div>
      <HeaderView
        :bg-href="bannerData.image"
        :title="bannerData.name_en"
        :path="path"
        :link="link"
      ></HeaderView>
    </div>

    <ExperienceView></ExperienceView>

    <!-- <OffersView></OffersView> -->

    <FormView></FormView>

    <!-- <NewsView></NewsView> -->

    <PartnersView :partners="partners"></PartnersView>

    <FAQView :faq="data.faqs"></FAQView>

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

  watch: {
    indexPageData() {
      this.getData();
    },
  },

  data() {
    return {
      bgHref: "headerBackground",
      title: "",
      path: "",
      link: "/",
      data: {},
      bannerData: {
        name_en: "",
        image: "",
      },
      partners: []
    };
  },

  computed: {
    indexPageData() {
      return this.$store.getters["indexPage/getIndexPageData"];
    },
  },

  methods: {
    getData() {
      this.data = this.indexPageData.data;
      this.partners = this.data.partners
      this.bannerData = this.data.banner;
    },
  },

  mounted() {
    this.$store.dispatch("indexPage/getIndexPageData");
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
