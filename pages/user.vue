<template>
  <div class="p-a-dashboard">
    <user-sidebar @hide-sidebar="hideSidebar"></user-sidebar>
    <div :class="hiddenSideBar ? 'small-dashboard' : 'dashboard'">
      <user-header></user-header>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import UserSidebar from '@/components/roleUser/Layout/UserSidebar/UserSidebar.vue';
import UserHeader from '@/components/roleUser/Layout/UserHeader/UserHeader.vue';
export default {
  components: { UserSidebar, UserHeader },
  data() {
    return {
      hiddenSideBar: false,
    };
  },

  methods: {
    hideSidebar(val) {
      this.hiddenSideBar = val;
    },
  },
  // middleware({redirect}) {
  //   if (!(localStorage.getItem("token") && localStorage.getItem("user"))) {
  //     return redirect('/')
  //   }
  // },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/admin.scss";
</style>
