<template>
  <div :class="hiddenSideBar ? 'smallbar' : 'sidebar'">
    <div class="sidebar-header">
      <div class="sidebar-header__logo">
        <nuxt-link to="/admin">
          <img src="../../../assets/images/logo.png" alt="" />
        </nuxt-link>
      </div>
      <div class="sidebar-header__back" @click="hideSidebar">
        <span>
          <img
            :src="
              !hiddenSideBar
                ? require('../../../assets/icons/admin/admin-sidebar-hide.svg')
                : require('../../../assets/icons/admin/admin-sidebar-show.svg')
            "
            alt=""
          />
        </span>
      </div>
    </div>
    <div class="sidebar-body">
      <ul class="sidebar-body__list">
        <li
          v-for="item in menuList"
          :key="item.id"
          class="sidebar-body__list-item"
          :class="$route.path.slice(7) == item.path ? 'active' : ''"
        >
          <nuxt-link :to="`/admin/${item.path}`">
            <img
              :src="require(`@/assets/icons/admin/${item.icon}.png`)"
              alt=""
            />
            <span>
              {{ item.name }}
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
      menuList: "getAdminMenu",
    }),
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
@import "./AdminSidebar.style.scss";
</style>
