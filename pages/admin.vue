<template>
  <div class="p-a-dashboard">
    <AdminSidebar @hide-sidebar="hideSidebar"></AdminSidebar>
    <div :class="hiddenSideBar ? 'small-dashboard' : 'dashboard'">
      <AdminHeader></AdminHeader>
      <div
        v-if="isDashboardFilterVisible"
        class="dashboard-filter container-xxl"
      >
        <input type="email" class="form-control" placeholder="Order ID" />

        <input type="date" class="form-control" placeholder="Date" />
        <input type="date" class="form-control" placeholder="Date" /><select
          class="form-select"
          aria-label="Default select example"
        ></select>
        <button type="submit" class="btn btn-primary">Search</button>
        <button type="submit" class="btn btn-primary">Clear</button>
      </div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/admin/AdminSidebar/AdminSidebar.vue";
import AdminHeader from "@/components/admin/AdminHeader/AdminHeader.vue";
export default {
  components: { AdminSidebar, AdminHeader },
  data() {
    return {
      hiddenSideBar: false,
    };
  },

  computed: {
    isDashboardFilterVisible() {
      if (this.$route.path == "/admin") {
        return false;
      } else if (this.$route.path == "/admin/account" || this.$route.path == "/admin/online-chat") {
        return false;
      } else {
        return true;
      }
    },
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
