<template>
  <div class="c-l-header">

    <NavbarHeader></NavbarHeader>

    <MenuNavbar></MenuNavbar>

    <h1>Oт желания к реальности</h1>

    <SearchField></SearchField>
  </div>
  
</template>

<script>
import MenuNavbar from "@/components/Common/MenuNavbar/MenuNavbar.vue";
import NavbarHeader from "@/components/Common/NavbarHeader/NavbarHeader.vue";
import SearchField from "@/components/Custom/SearchField/SearchField.vue";

export default {
  components: {
    MenuNavbar,
    NavbarHeader,
    SearchField
},
};
</script>

<style lang="scss" scoped>
@import "./HeaderView.style.scss";
</style>
