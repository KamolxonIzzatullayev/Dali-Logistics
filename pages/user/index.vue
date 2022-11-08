<template>
  <div class="p-user-main container-xxl">
    <div class="main">
      <div class="main-header">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-12">
            <div class="main-header__card">
              <div class="main-header__card-header">
                <h2>Orders</h2>
              </div>
              <div class="main-header__card-body">
                <div class="main-header__card-body-icon">
                  <img src="@/assets/icons/user/user-orders.png" alt="" />
                </div>
                <div class="main-header__card-body-text">
                  <h1>252</h1>
                  <p>Open my orders</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-12">
            <div class="main-header__card">
              <div class="main-header__card-header">
                <h2>Chat with Operator</h2>
              </div>
              <div class="main-header__card-body">
                <div class="main-header__card-body-icon">
                  <img src="@/assets/icons/user/user-chat.png" alt="" />
                </div>
                <div class="main-header__card-body-text">
                  <h1>14</h1>
                  <p>Open chat</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 banner">
            <img src="@/assets/icons/user/user-main-banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/admin-main.scss";
</style>
