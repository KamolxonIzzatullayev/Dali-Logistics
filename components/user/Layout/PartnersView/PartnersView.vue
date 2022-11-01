<template>
  <div class="c-l-partners">
    <div class="container-xxl">
      <h1 class="custom-headline">
        Компании с которыми мы успешно сотрудничаем
      </h1>
      <client-only>
        <carousel :autoplay="true" :nav="false" :items="4">
          <div
            class="partners-item"
            v-for="(partner, index) in partnersData"
            :key="index"
          >
            <a :href="partner.link">
              <img :src="partner.image" alt="..."
            /></a>
          </div>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array,
    },
  },

  computed: {
    partnersData() {
      let partnersData = [];

      this.partners.forEach((elem) => {
        let link = elem.link;
        let image = process.env.baseUrl + elem.image;
        let a = {
          link,
          image,
        };
        partnersData.push(a);
      });

      return partnersData;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./PartnersView.style.scss";
</style>
