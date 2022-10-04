<template>
  <div class="c-cu-navbar">
    <div class="container">
      <div class="navbar-header d-flex justify-content-end">
        <nav>
          <ul class="navbar-header__list">
            <li class="navbar-header__list-item">
              <a
                class="navbar-header__list-item-link d-flex align-items-center"
                href="#"
              >
                <img src="@/assets/icons/user.svg" alt="user" />
                <span>Авторизоваться </span></a
              >
            </li>
            <li class="navbar-header__list-item">
              <a
                class="navbar-header__list-item-link d-flex align-items-center"
                href="#"
              >
                <img src="@/assets/icons/nastroyka.svg" alt="nastroyka" />
                <span>Справочник</span>
              </a>
            </li>
            <li class="navbar-header__list-item">
              <a
                class="navbar-header__list-item-link d-flex align-items-center"
                href="#"
              >
                <img src="@/assets/icons/lang.svg" alt="nastroyka" />
                <span>Руcский</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
@import "./NavbarHeader.style.scss";
</style>
