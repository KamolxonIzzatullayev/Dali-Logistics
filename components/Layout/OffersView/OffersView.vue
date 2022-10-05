<template>
  <div class="c-l-offers">
    <div class="container">
      <h1 class="text-center">Что мы предлагаем нашим клиентам</h1>

        <OffersTab></OffersTab>
      
    </div>
  </div>
</template>

<script>
import OffersTab from '@/components/Custom/OffersTab/OffersTab.vue';
export default {
    components: { OffersTab }
};
</script>

<style lang="scss" scoped>
@import "./OffersView.style.scss";
</style>
