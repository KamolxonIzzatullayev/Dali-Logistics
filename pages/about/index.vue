<template>
  <div class="p-about">
    <div class="rain">
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
    </div>
    <div class="about-header">
      <div class="bg"></div>
      <HeaderView
        :title="topBanner.name_en"
        :path="path"
        :bg-href="topBanner.image"
        :link="link"
      ></HeaderView>
    </div>

    <AboutCompanyView :data="data.about_title_images"></AboutCompanyView>

    <OurTarget :data="banner_bottom"></OurTarget>

    <OurTeam></OurTeam>

    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "@/components/user/Layout/HeaderView/HeaderView.vue";
import FooterView from "@/components/user/Common/FooterView/FooterView.vue";
import AboutCompanyView from "../../components/user/Layout/AboutCompanyView/AboutCompanyView.vue";
import OurTarget from "../../components/user/Layout/OurTarget/OurTarget.vue";
import OurTeam from "@/components/user/Layout/OurTeam/OurTeam.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    AboutCompanyView,
    OurTarget,
    OurTeam,
  },

  watch: {
    aboutPageData() {
      this.getData();
    },
  },

  data() {
    return {
      title: "О компании",
      path: "О КОМПАНИИ",
      background: "about-bg",
      link: "/about",
      data: {},
      topBanner: {
        image: "",
        name_en: "",
      },
      banner_bottom: {
        image: "",
        name_en: "",
      },
    };
  },

  methods: {
    getData() {
      this.data = this.aboutPageData.data;
      this.topBanner = this.data.banner_top;
      this.banner_bottom = this.data.banner_bottom
    },
  },

  computed: {
    aboutPageData() {
      return this.$store.getters["aboutPage/getAboutPageData"];
    },
  },

  mounted() {
    this.$store.dispatch("aboutPage/getAboutPageData");
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
