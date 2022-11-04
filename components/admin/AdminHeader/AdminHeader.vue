<template>
  <div class="dashboard-header d-flex">
    <div class="dashboard-header__search input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Universal Search"
        aria-label="Universal Search"
        aria-describedby="basic-addon2"
      />
      <span class="input-group-text" id="basic-addon2">
        <img src="../../../assets/icons/admin/admin-search-icon.png" alt="" />
      </span>
    </div>
    <div class="dropdown dashboard-header__notification">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="../../../assets/icons/admin/admin-notification.png" alt="" />
        <span></span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <div class="btn-group dashboard-header__chat">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="../../../assets/icons/admin/admin-chat.png" alt="" />
      </button>
      <ul class="dropdown-menu dropdown-menu-start">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <div class="btn-group dashboard-header__chat">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="../../../assets/images/usa-flag.svg" alt="" />
      </button>
    </div>
    <div class="dropdown dashboard-header__profile">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="../../../assets/images/admin/admin-profile.png" alt="" />
        <div class="profile">
          <p class="profile-name">{{ userInfo.full_name }}</p>
          <p class="profile-role">Admistrator</p>
        </div>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Exit</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ userInfo: "auth/getUser" }),
  },
};
</script>

<style lang="scss" scoped>
@import "./AdminHeader.style.scss";
</style>
