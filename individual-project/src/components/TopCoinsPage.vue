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
                    <div class="page-header-icon"><i class="fa-brands fa-bitcoin"></i></div>
                    Top Coins
                  </h1>
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
                        <h1 class="text-dark">Theres a top coins by Dapow Crypto</h1>
                        <p class="text-gray-700 mb-0">
                          Certainly, here are brief descriptions of some of the top cryptocurrencies
                          as of my last knowledge update in October 2023:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gap-2">
            <TopCoins v-for="topcoins in dataTopCoins" :key="topcoins.id" :topcoins="topcoins" />
          </div>
          <div id="disqus_thread"></div>
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
import TopCoins from './TopCoins.vue'
import { mapActions, mapState } from 'pinia'
import { useMain } from '../stores/main'

export default {
  components: { Sidebar, Header, Footer, TopCoins },
  methods: {
    ...mapActions(useMain, ['getTopCoins'])
  },
  computed: {
    ...mapState(useMain, ['dataTopCoins'])
  },
  created() {
    (function () {
      var d = document,
        s = d.createElement('script')
      s.src = 'https://crypto-ndenvwldac.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    })()
    this.getTopCoins()
  }
}
</script>
