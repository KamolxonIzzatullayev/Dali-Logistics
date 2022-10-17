<template>
  <div class="c-l-news" :class="$route.path == '/' ? '' : 'blog'">
    <div class="container-xxl">
      <h1 v-if="$route.path == '/'" class="custom-headline">Полезные статьи</h1>
      <div class="row cards-wrapper">
        <div
          v-for="card in $route.path == '/' ? cards.slice(0, 4) : cards"
          :key="card.id"
          class="col-md-3 col-sm-6 col-12 border-0 my-3 card"
        >
          <img
            :src="require(`@/assets/images/${card.img}.png`)"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{card.title}}</h5>
            <p class="card-text">{{card.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          img: "slider-1",
          title: "Как работает аналитика «KPI водителей»",
          desc: "15.09.2022",
        },
        {
          id: 2,
          img: "slider-2",
          title: "Аналитика работы филиалов: в чем ее польза",
          desc: "15.09.2022",
        },
        {
          id: 3,
          img: "slider-3",
          title: "Топ-5 востребованных компетенций в логистике",
          desc: "15.09.2022",
        },
        {
          id: 4,
          img: "slider-4",
          title: "Топ-5 востребованных компетенций в логистике",
          desc: "15.09.2022",
        },
        {
          id: 5,
          img: "slider-1",
          title: "Как работает аналитика «KPI водителей»",
          desc: "15.09.2022",
        },
        {
          id: 6,
          img: "slider-2",
          title: "Аналитика работы филиалов: в чем ее польза",
          desc: "15.09.2022",
        },
        {
          id: 7,
          img: "slider-3",
          title: "Топ-5 востребованных компетенций в логистике",
          desc: "15.09.2022",
        },
        {
          id: 8,
          img: "slider-4",
          title: "Топ-5 востребованных компетенций в логистике",
          desc: "15.09.2022",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./NewsView.style.scss";
</style>
