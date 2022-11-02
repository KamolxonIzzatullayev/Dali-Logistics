<template>
  <div class="c-l-target">
    <div class="target">
      <div class="container-xxl">
        <div class="target-text">
          <h1>ЦЕЛИ И МИССИЯ</h1>
          <p class="col-md-8 col-sm-12 col-12">
            Наша цель – предоставить оптимальные логистические решения путем
            разработки и реализации правильного маршрута перевозки для
            участников внешнеэкономической деятельности. А также, мы работаем
            над постоянным улучшением качества услуг, полностью соответствующих
            международным стандартам и соблюдением всех договоренностей,
            заключенных с клиентами.
          </p>
        </div>
      </div>
      <div class="target-footer">
        <div class="container-xxl">
          <img :src="imgHref" :alt="data.name_en ? data.name_en : ''" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },

  computed: {
    imgHref() {
      return process.env.baseUrl + this.data.image;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./OurTarget.style.scss";
</style>
