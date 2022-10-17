<template>
  <div class="c-cu-offers-mobile">
    <div class="offers">
      <div v-for="card in tabHeaders" :key="card.id">
        <div class="tabs-card">
          <div class="tabs-card__img">
            <img :src="require(`@/assets/images/${card.bgImage}.png`)" alt="" />
          </div>
          <div class="tabs-card__title">
            <h2>{{ card.title }}</h2>
          </div>
          <div class="tabs-card__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto quo vero magnam corrupti ipsa expedita nam nobis maxime
              tenetur.
            </p>
          </div>
          <div class="tabs-card__submit">
            <button>
                <nuxt-link :to="`/offers/${card.id}`">Подробнее</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      tabHeaders: "getTabHeaders",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "./OffersTabMobile.style.scss";
</style>
