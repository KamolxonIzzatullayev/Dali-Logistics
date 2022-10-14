<template>
  <div class="c-cu-navbar">
    <div class="container-xxl">
      <div class="navbar-header d-flex justify-content-end">
        <nav>
          <ul class="navbar-header__list">
            <li class="navbar-header__list-item">
              <a
                class="navbar-header__list-item-link d-flex align-items-center"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#modal"
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

    <div
      class="modal fade"
      id="modal"
      tabindex="-1"
      aria-labelledby="modalLabel"
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
                <img src="../../../assets/icons/auth-logo.svg" alt="" />
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
                  <img src="../../../assets/icons/auth-email.svg" alt="email" />
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
                    src="../../../assets/icons/auth-show-password.svg"
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
                    src="../../../assets/icons/auth-show-password.svg"
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
@import "./NavbarHeader.style.scss";
</style>
