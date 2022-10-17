<template>
  <div class="c-co-footer">
    <div class="container-xxl">
      <div class="footer">
        <div class="footer-menu">
          <div class="footer-menu__logo">
            <a href="#"
              ><img src="../../../../assets/images/FooterLogo.png" alt=""
            /></a>
          </div>
          <div class="footer-menu__nav">
            <ul class="footer-menu__nav-list">
              <li>
                <nuxt-link to="/about">О компании</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/offers">Услуги</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blog">Блог</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contacts">Контакты</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer-menu__social">
            <div class="footer-menu__social-item">
              <img src="../../../../assets/icons/Instagram.svg" alt="instagram" />
            </div>
            <div class="footer-menu__social-item">
              <img src="../../../../assets/icons/Facebook.svg" alt="" />
            </div>
            <div class="footer-menu__social-item">
              <img src="../../../../assets/icons/Twitter.svg" alt="" />
            </div>
            <div class="footer-menu__social-item">
              <img src="../../../../assets/icons/Telegram.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="footer-owner">
          Политика конфиденциальности © 2022 Dalilogistic.Все права защищены
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./FooterView.style.scss";
</style>
