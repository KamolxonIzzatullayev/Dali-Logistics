<template>
  <div class="c-cu-menu">
    <div class="menu">
      <div class="container-xxl">
        <nav class="navbar navbar-expand-md fixed-top">
          <div class="container-fluid">
            <router-link to="/">
              <img src="@/assets/images/logo.png" alt="" />
            </router-link>
            <div class="actions">
              <button
                class="actions-auth"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src="../../../../assets/icons/input-user-white.svg"
                  alt=""
                />
              </button>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <img src="../../../../assets/icons/menu-icon.svg" alt="" />
              </button>
            </div>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <router-link to="/">
                  <img src="@/assets/images/logo.png" alt="" />
                </router-link>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <nuxt-link class="menu-navbar__list-item-link" to="/about">
                      <img
                        src="@/assets/icons/mobileMenu/manu-company.svg"
                        alt=""
                      />
                      <span> О компании </span>
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="menu-navbar__list-item-link" to="/offers">
                      <img
                        src="@/assets/icons/mobileMenu/menu-settings.svg"
                        alt=""
                      />
                      <span> Услуги </span>
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="menu-navbar__list-item-link" to="/blog">
                      <img
                        src="@/assets/icons/mobileMenu/menu-barchar.svg"
                        alt=""
                      />
                      <span> Наши преимущества </span>
                    </nuxt-link>
                  </li>

                  <li class="nav-item">
                    <nuxt-link
                      class="menu-navbar__list-item-link"
                      to="/contacts"
                    >
                      <img
                        src="@/assets/icons/mobileMenu/menu-blog.svg"
                        alt=""
                      />
                      <span> Блог </span>
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="menu-navbar__list-item-link" to="/about">
                      <img
                        src="@/assets/icons/mobileMenu/menu-partner.svg"
                        alt=""
                      />
                      <span> Нам доверяют </span>
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="menu-navbar__list-item-link" to="/offers">
                      <img
                        src="@/assets/icons/mobileMenu/menu-phone.svg"
                        alt=""
                      />
                      <span> Контакты </span>
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="menu-navbar__list-item-link" to="/blog">
                      <img
                        src="@/assets/icons/mobileMenu/menu-dictionary.svg"
                        alt=""
                      />
                      <span> Справочник </span>
                    </nuxt-link>
                  </li>

                  <li class="nav-item">
                    <nuxt-link
                      class="menu-navbar__list-item-link"
                      to="/contacts"
                    >
                      <img
                        src="@/assets/icons/mobileMenu/menu-flag-russia.svg"
                        alt=""
                      />
                      <span> Русский </span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div class="menu-navbar">
          <div class="menu-navbar__logo">
            <router-link to="/">
              <img src="@/assets/images/logo.png" alt="" />
            </router-link>
          </div>
          <ul class="menu-navbar__list">
            <li class="menu-navbar__list-item">
              <nuxt-link class="menu-navbar__list-item-link" to="/about">
                О компании
              </nuxt-link>
            </li>
            <li class="menu-navbar__list-item">
              <nuxt-link class="menu-navbar__list-item" to="/offers">
                Услуги
              </nuxt-link>
            </li>
            <li class="menu-navbar__list-item">
              <nuxt-link class="menu-navbar__list-item-link" to="/blog">
                Блог
              </nuxt-link>
            </li>
            <li class="menu-navbar__list-item">
              <nuxt-link class="menu-navbar__list-item-link" to="/contacts">
                Контакты
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-body__header">
              <div class="modal-body__header-title">Welcome to</div>
              <div class="modal-body__header-logo">
                <img src="../../../../assets/icons/auth-logo.svg" alt="" />
              </div>
              <div class="modal-body__header-text">
                <p>
                  Sign up to receive the latest updates on things it interests
                  you
                </p>
              </div>
            </div>
            <div class="modal-body__body">
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <img
                    src="../../../../assets/icons/auth-email.svg"
                    alt="email"
                  />
                </span>
              </div>

              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon3"
                />
                <span class="input-group-text" id="basic-addon3">
                  <img
                    src="../../../../assets/icons/auth-show-password.svg"
                    alt=""
                  />
                </span>
              </div>

              <div class="input-group mb-3" v-if="authType == 1">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="basic-addon4"
                />
                <span class="input-group-text" id="basic-addon4">
                  <img
                    src="../../../../assets/icons/auth-show-password.svg"
                    alt=""
                  />
                </span>
              </div>

              <input type="checkbox" id="terms" />
              <label for="terms">I agree to the terms of service</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              {{
                authType == 0
                  ? "SIGN IN"
                  : authType == 1
                  ? "SIGN UP"
                  : "SEND RESET INSTRUCTIONS"
              }}
            </button>
            <p v-if="authType == 0">
              Don't have an account?
              <a @click="changeAuthType(1)">Sign Up Now</a>
            </p>
            <p v-if="authType == 1">
              Already with us? <a @click="changeAuthType(0)"> Sign in</a>
            </p>
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
      authType: 0,
    };
  },
  methods: {
    changeAuthType(e) {
      this.authType = e;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./MenuNavbar.style.scss";
</style>
