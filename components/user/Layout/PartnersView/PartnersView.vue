<template>
  <div class="c-l-partners">
    <div class="container-xxl">
      <h1 class="custom-headline">
        Компании с которыми мы успешно сотрудничаем
      </h1>
      
      <carousel :autoplay="true" :nav="false" :items="4" :rewind="true">
        <div
          v-for="(item, i) in partners"
          :key="i"
          class="position-realtive partners-item"
        >
          <a :href="item.link"> <img :src="item.image" alt="" /></a>
        </div>
      </carousel>
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
};
</script>

<style lang="scss" scoped>
@import "./PartnersView.style.scss";
</style>
