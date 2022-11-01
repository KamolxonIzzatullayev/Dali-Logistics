<template>
  <div class="container-xxl">
    <div class="main">
      <h1 class="main-title">Good morning User!</h1>
      <div class="main-header">
        <div class="row">
          <div class="col-md-4 col-sm-4 col-12">
            <div class="main-header__card">
              <div class="main-header__card-header">
                <h1>201</h1>
                <div class="main-header__card-header-icon">
                  <img
                    src="../../assets/icons/admin/admin-number-applications.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="main-header__card-text">Number of applications</div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-12">
            <div class="main-header__card">
              <div class="main-header__card-header">
                <h1>8,200 $</h1>
                <div class="main-header__card-header-icon">
                  <img
                    src="../../assets/icons/admin/admin-total-sales.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="main-header__card-text">Total sales</div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-12">
            <div class="main-header__card">
              <div class="main-header__card-header">
                <h1>142</h1>
                <div class="main-header__card-header-icon">
                  <img
                    src="../../assets/icons/admin/admin-number-users.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="main-header__card-text">Total number of users</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-body">
        <h1 class="main-body__title">Recent Sales</h1>
        <div class="table-responsive">
          <table class="table table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col">Application number</th>
                <th scope="col">Buyer</th>
                <th scope="col">Product</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">#5598</td>
                <td scope="col">Alisher Murodov</td>
                <td scope="col">Lorem ipsum dolor sit amet consectetur.</td>
                <td scope="col">Under process</td>
                <td scope="col">
                  <button class="btn btn-light">Details</button>
                </td>
              </tr>
              <tr>
                <td scope="col">#5598</td>
                <td scope="col">Alisher Murodov</td>
                <td scope="col">Lorem ipsum dolor sit amet consectetur.</td>
                <td scope="col">Canceled</td>
                <td scope="col">
                  <button class="btn btn-light">Details</button>
                </td>
              </tr>
              <tr>
                <td scope="col">#5598</td>
                <td scope="col">Alisher Murodov</td>
                <td scope="col">Lorem ipsum dolor sit amet consectetur.</td>
                <td scope="col">Returned</td>
                <td scope="col">
                  <button class="btn btn-light">Details</button>
                </td>
              </tr>
              <tr>
                <td scope="col">#5598</td>
                <td scope="col">Alisher Murodov</td>
                <td scope="col">Lorem ipsum dolor sit amet consectetur.</td>
                <td scope="col">Under process</td>
                <td scope="col">
                  <button class="btn btn-light">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="main-footer pt-3">
        <nav aria-label="Page navigation example">
          <ul class="pt-3 pagination justify-content-center">
            <li class="page-item">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item"><a class="page-link active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">6</a></li>
            <li class="page-item"><a class="page-link" href="#">7</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item"><a class="page-link" href="#">25</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/admin-main.scss";
</style>

