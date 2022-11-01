<template>
  <div class="p-a-account container-xxl">
    <div class="account-header">
      <div class="account-header__background">
        <input type="file" />
        <button class="account-header__background-button">Cover Change</button>
      </div>
      <div class="account-header__personal container">
        <div class="account-header__personal-photo">
          <img
            src="../../../assets/images/admin/admin-personal-img.png"
            alt=""
          />
        </div>
        <div class="account-header__personal-data">
          <h1>
            Bekzod Turdiev <span class="badge text-bg-primary">Online</span>
          </h1>
          <h2><span>ID </span> #123456</h2>
        </div>
      </div>
    </div>

    <div class="account-body">
      <div class="account-body__tab">
        <ul>
          <li
            v-for="(tab, index) in tabs"
            :key="tab.id"
            @click="makeTabActive(index)"
            :class="tabPanel == index ? 'active' : ''"
          >
            {{ tab.title }}
          </li>
        </ul>
      </div>
      <div class="account-body__tab-panels">
        <div v-if="tabPanel == 0" class="tab-panel">
          <ul>
            <li><span>Role: </span> Adminstrator</li>
            <li><span>Email: </span> 123@gmail.com</li>
            <li><span>Telephone: </span> +998 (93) 699-65-65</li>
            <li><span>Company: </span> Dali Logistic</li>
          </ul>
        </div>

        <div  class="tab-panel">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPanel: 0,
      tabs: [
        {
          id: 1,
          title: "Profile",
        },
        {
          id: 2,
          title: "Edit Profile",
        },
      ],
    };
  },
  methods: {
    makeTabActive(ind) {
      this.tabPanel = ind;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./account.style.scss";
</style>
