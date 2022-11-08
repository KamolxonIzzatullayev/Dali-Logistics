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
              id="auth-button"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-body__header">
              <div class="modal-body__header-title">Welcome to</div>
              <div class="modal-body__header-logo">
                <img src="@/assets/icons/auth-logo.svg" alt="" />
              </div>
              <div class="modal-body__header-text">
                <p>
                  Sign up to receive the latest updates on things it interests
                  you
                </p>
              </div>
            </div>
            <div v-if="authType == 0 || authType == 1" class="modal-body__body">
              <div class="input-group mt-3" v-if="authType == 1">
                <input
                  type="text"
                  v-model="user.fullName"
                  class="form-control"
                  placeholder="Full name"
                  aria-label="Full name"
                  aria-describedby="basic-addon2"
                  @input="checkWarning"
                />
                <span class="input-group-text" id="basic-addon2">
                  <img
                    src="../../../../assets/icons/input-user.svg"
                    alt="email"
                  />
                </span>
              </div>

              <p
                class="modal-body__body-warning"
                v-if="authType == 1 && warning.fullNameStatus"
              >
                {{ warning.fullName }}
              </p>

              <div class="input-group mt-3">
                <input
                  type="email"
                  v-model="user.email"
                  class="form-control"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <img src="@/assets/icons/auth-email.svg" alt="email" />
                </span>
              </div>

              <p class="modal-body__body-warning" v-if="warning.emailStatus">
                {{ warning.email }}
              </p>

              <div class="input-group mt-3" v-if="authType == 1">
                <input
                  type="text"
                  v-model="user.phoneNumber"
                  class="form-control"
                  placeholder="Phone number"
                  aria-label="Phone number"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <img src="@/assets/icons/contact-phone.svg" alt="email" />
                </span>
              </div>

              <p
                class="modal-body__body-warning"
                v-if="authType == 1 && warning.phoneNumberStatus"
              >
                {{ warning.phoneNumber }}
              </p>

              <div class="input-group mt-3">
                <input
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon3"
                />
                <span class="input-group-text" id="basic-addon3">
                  <img src="@/assets/icons/auth-show-password.svg" alt="" />
                </span>
              </div>

              <p class="modal-body__body-warning" v-if="warning.passwordStatus">
                {{ warning.password }}
              </p>

              <div class="input-group mt-3" v-if="authType == 1">
                <input
                  type="password"
                  class="form-control"
                  v-model="user.confirmPassword"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="basic-addon4"
                />
                <span class="input-group-text" id="basic-addon4">
                  <img src="@/assets/icons/auth-show-password.svg" alt="" />
                </span>
              </div>

              <p
                class="modal-body__body-warning"
                v-if="authType == 1 && warning.confirmPasswordStatus"
              >
                {{ warning.confirmPassword }}
              </p>

              <input
                class="mt-3"
                v-if="authType == 1"
                type="checkbox"
                id="terms"
              />
              <label class="mt-3" v-if="authType == 1" for="terms"
                >I agree to the terms of service</label
              >

              <div
                class="modal-body__body-forget mt-3"
                v-else
                @click="authType = 2"
              >
                Forgot password ?
              </div>
            </div>

            <div v-else class="modal-body__forget">
              <div class="input-group mt-3">
                <input
                  type="email"
                  v-model="user.email"
                  class="form-control"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <img src="@/assets/icons/auth-email.svg" alt="email" />
                </span>
              </div>

              <p class="modal-body__body-warning" v-if="warning.emailStatus">
                {{ warning.email }}
              </p>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="check">
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      authType: 0,
      user: {
        email: "",
        password: "",
        fullName: "",
        phoneNumber: "",
        confirmPassword: "",
      },
      warning: {
        email: "Enter your E-mail*",
        emailStatus: false,
        password: "Enter your password*",
        passwordStatus: false,
        fullName: "Enter your name*",
        fullNameStatus: false,
        phoneNumber: "Enter your phone number*",
        phoneNumberStatus: false,
        confirmPassword: "Confirm the password*",
        confirmPasswordStatus: false,
      },
      allStatuses: false,
    };
  },
  computed: {
    ...mapGetters({ userInfo: "auth/getUser" }),
  },

  methods: {
    changeAuthType(e) {
      this.authType = e;
    },

    check() {
      if (this.authType == 0) {
        if (this.user.email.trim() !== "" && this.user.password.trim() !== "") {
          this.$store.dispatch("auth/login", {
            username: this.email,
            password: this.password,
          });
          document.getElementById("auth-button").click();
          this.$router.push("/admin");
        } else {
          this.checkWarning();
        }
      } else {
        console.log("signing up");
      }
    },

    checkWarning() {
      let warningNames = Object.keys(this.user);
      let statuses = [];
      warningNames.forEach((elem) => {
        let statusName = elem + "Status";
        statuses.push(statusName);
        if (this.user[elem].length) {
          this.warning[statusName] = false;
        } else {
          this.warning[statusName] = true;
        }
      });

      if (statuses.every((element) => element === true)) {
        this.allStatuses = true;
      } else {
        this.allStatuses = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./NavbarHeader.style.scss";
</style>
