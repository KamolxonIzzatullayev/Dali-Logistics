<template>
  <div
    class="c-l-header"
    :style="{
      backgroundImage: `url(${require(`@/assets/images/${bgHref}.png`)})`,
      backgroundPosition: currentPath == '' ? 'top' : 'center',
    }"
  >
    <NavbarHeader></NavbarHeader>

    <MenuNavbar></MenuNavbar>

    <h1 v-if="!path" class="active">{{ title }}</h1>

    <h1 v-else class="another">{{ title }}</h1>

    <p v-if="path">
      <nuxt-link to="/">ГЛАВНАЯ</nuxt-link> /
      <nuxt-link :to="link">{{ path }}</nuxt-link>
    </p>

    <SearchField></SearchField>
  </div>
</template>

<script>
import MenuNavbar from "@/components/Common/MenuNavbar/MenuNavbar.vue";
import NavbarHeader from "@/components/Common/NavbarHeader/NavbarHeader.vue";
import SearchField from "@/components/Custom/SearchField/SearchField.vue";

export default {
  props: {
    title: {
      type: String,
    },
    path: {
      type: String,
    },
    bgHref: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  components: {
    MenuNavbar,
    NavbarHeader,
    SearchField,
  },
};
</script>

<style lang="scss" scoped>
@import "./HeaderView.style.scss";
</style>
