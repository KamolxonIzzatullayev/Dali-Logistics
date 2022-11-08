<template>
  <div :class="hiddenSideBar ? 'smallbar' : 'sidebar'">
    <div class="sidebar-header">
      <div class="sidebar-header__logo">
        <nuxt-link to="/user">
          <img src="@/assets/images/logo.png" alt="" />
        </nuxt-link>
      </div>
      <div class="sidebar-header__back" @click="hideSidebar">
        <span>
          <img
            :src="
              !hiddenSideBar
                ? require('@/assets/icons/admin/admin-sidebar-hide.svg')
                : require('@/assets/icons/admin/admin-sidebar-show.svg')
            "
            alt=""
          />
        </span>
      </div>
    </div>
    <div class="sidebar-body">
      <div class="sidebar-body__profile">
        <div class="sidebar-body__profile-img">
          <img src="@/assets/images/admin/role-user.png" alt="" />
        </div>
        <div class="sidebar-body__profile-name">Kristin Watson</div>
        <div class="sidebar-body__profile-id">ID :#AB50489</div>
      </div>

      <ul class="sidebar-body__list">
        <li
          v-for="item in thisRole.menu"
          :key="item.id"
          class="sidebar-body__list-item"
          :class="$route.path.slice(6) == item.path ? 'active' : ''"
        >
          <nuxt-link :to="`/user/${item.path}`">
            <img
              :src="require(`@/assets/icons/admin/${item.icon}.png`)"
              alt=""
            />
            <span>
              {{ item.title }}
            </span>
            <div class="backgraund"></div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      hiddenSideBar: false,
    };
  },
  computed: {
    ...mapGetters({
      menuList: "user/getProfile",
    }),
    thisRole() {
      let a = {};
      this.menuList.forEach((element) => {
        if (element.name == "user") {
          a = element;
        }
      });

      return a;
    },
  },

  methods: {
    hideSidebar() {
      this.hiddenSideBar = !this.hiddenSideBar;
      this.$emit("hide-sidebar", this.hideSidebar);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./UserSidebar.style.scss";
</style>
