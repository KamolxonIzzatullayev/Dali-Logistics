<template>
  <div class="p-offers" style="background-color: #f5f5f5">
    <div class="rain">
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
      <div class="rain-line"><span class="rain-line__drop"></span></div>
    </div>
    <div class="offers-header">
      <div class="bg"></div>
      <HeaderView
        :title="title"
        :path="path"
        :bg-href="background"
        :link="link"
      ></HeaderView>
    </div>
    <div class="offers-component">
      <div class="container-xxl">
        <div
          class="offers-component__image"
          :style="{
            backgroundImage: `url(${require(`@/assets/images/${getDataById.bgImage}.png`)})`,
            backgroundPosition: 'center',
          }"
        ></div>

        <h2 class="offers-component__title">
          {{ getDataById.title }}
        </h2>

        <p>
          Время доставки дольше чем иным видом транспорта. Подача на фабрику или
          продавцу, место гарантировано. Отправим, встретим, доставим.
          <br />
          <br />
          Плюсом морской транспортировки является низкая стоимость,
          универсальность, ведь таким способом можно легко перевезти разный вид
          товаров. Контейнер надёжно оберегает любой, даже самый хрупкий, груз,
          позволяя компактно разместить ёмкости на борту и удобно их выгрузить.
          <br />
          <br />
          Преимущества морских грузоперевозок <br />
          · Сравнительно с воздушными, трубопроводными, ЖД и автомобильными
          видами перевозок морская транспортировка судном отличается более
          низкой себестоимостью. <br />
          <br />
          · Строительство крупногабаритных судов способствует повышению их
          грузоподъемности, что снижает себестоимость транспортировки морским
          судном. <br />
          <br />
          · Ни один другой вид транспорта не может сравниться с морским судном
          по грузоподъемности и вместимости товаров для транспортировки. <br />
          <br />
          · Согласно статистике, морская транспортировка отличается самым низким
          процентом потери или порчи груза в результате аварий или стихийных
          бедствий (от 1 до 1,5%). <br />
          <br />
          · Транспортировка грузов морским судном – наиболее эффективные вариант
          перемещения товаров между различными континентами.
        </p>

      </div>
    </div>

    <FormView></FormView>

    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "@/components/user/Layout/HeaderView/HeaderView.vue";
import FooterView from "@/components/user/Common/FooterView/FooterView.vue";
import OffersCards from "@/components/user/Layout/OffersCards/OffersCards.vue";
import FormView from "@/components/user/Layout/FormView/FormView.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    HeaderView,
    FooterView,
    OffersCards,
    FormView
},
  data() {
    return {
      title: "Наши услуги",
      path: "УСЛУГИ",
      background: "offer-bg",
      link: "/offers",
    };
  },
  computed: {
    ...mapGetters({
      data: "getTabHeaders",
    }),

    getDataById() {
      let result = undefined;
      this.data.forEach((element) => {
        if (element.id == this.$route.params.slug) {
          result = element;
        }
      });

      return result;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
