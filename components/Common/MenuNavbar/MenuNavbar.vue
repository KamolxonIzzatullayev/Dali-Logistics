<template>
  <div class="c-cu-menu">
    <div class="menu">
      <div class="container-xxl">
        <div class="menu-navbar">
          <div class="menu-navbar__logo">
            <router-link to="/"
              ><img src="@/assets/images/logo.png" alt=""
            /></router-link>
          </div>
          <ul class="menu-navbar__list">
            <li class="menu-navbar__list-item">
              <nuxt-link class="menu-navbar__list-item-link" to="/about">О компании</nuxt-link>
            </li>
            <li class="menu-navbar__list-item">
              <nuxt-link class="menu-navbar__list-item-link" to="/offers">Услуги</nuxt-link>
            </li>
            <li class="menu-navbar__list-item">
              <a class="menu-navbar__list-item-link" href="#">
                Наши преимущества</a
              >
            </li>
            <li class="menu-navbar__list-item">
              <a class="menu-navbar__list-item-link" href="#">Блог</a>
            </li>
            <li class="menu-navbar__list-item">
              <a class="menu-navbar__list-item-link" href="#">Нам доверяют</a>
            </li>
            <li class="menu-navbar__list-item">
              <a class="menu-navbar__list-item-link" href="#">Нам доверяют</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./MenuNavbar.style.scss";
</style>
