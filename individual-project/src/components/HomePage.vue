<template>
  <Header />
  <div id="layoutSidenav">
    <Sidebar />
    <div id="layoutSidenav_content">
      <main>
        <header class="page-header page-header-dark bg-dark pb-10">
          <div class="container-xl px-4">
            <div class="page-header-content pt-4">
              <div class="row align-items-center justify-content-between">
                <div class="col-auto mt-4">
                  <h1 class="page-header-title">
                    <div class="page-header-icon"><i data-feather="activity"></i></div>
                    Main Content
                  </h1>
                  <div class="page-header-subtitle">Overview and content summary</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="container-xl px-4 mt-n10">
          <div class="row">
            <div class="col-xxl-4 col-xl-12 mb-4">
              <div class="card h-100">
                <div class="card-body h-100 p-5">
                  <div class="row align-items-center">
                    <div class="col-xl-8 col-xxl-12">
                      <div class="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4">
                        <h1 class="text-dark">Welcome Crypto Dapow!</h1>
                        <p class="text-gray-700 mb-0">
                          Crypto Database is the world's most popular and authoritative source for
                          crypto content. Find news for the latest and most popular coins.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3">
              <img
                src="https://images.newscientist.com/wp-content/uploads/2022/05/16165955/SEI_104332349.jpg"
                class="card-img-top"
                style="height: 10rem; object-fit: cover"
              />
              <div class="card-body">
                <h5 class="card-title">What is cryptocurrencies?</h5>
                <p class="card-text">
                  Cryptocurrency is a digital or virtual form of currency that relies on
                  cryptographic techniques to secure and verify transactions and control the
                  creation of new units. Unlike traditional currencies issued by governments (such
                  as the US dollar or the euro), cryptocurrencies are decentralized and typically
                  operate on a technology called blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  components: { Sidebar, Header, Footer }
}
</script>
