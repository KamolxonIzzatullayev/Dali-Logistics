<template>
  <div class="c-l-offers">
    <div class="container-xxl">
      <h1 class="custom-headline">Что мы предлагаем нашим клиентам</h1>

        <OffersTab></OffersTab>

        <OffersTabMobile></OffersTabMobile>

    </div>
  </div>
</template>

<script>
import OffersTab from '@/components/user/Custom/OffersTab/OffersTab.vue';
import OffersTabMobile from '@/components/user/Custom/OffersTabMobile/OffersTabMobile.vue';
export default {
    components: { OffersTab, OffersTabMobile }
};
</script>

<style lang="scss" scoped>
@import "./OffersView.style.scss";
</style>
