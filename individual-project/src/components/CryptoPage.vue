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
                    <div class="page-header-icon"><i data-feather="filter"></i></div>
                    Crypto and News
                  </h1>
                  <div class="page-header-subtitle">
                    This is the crypto mini data's where you can find the most popular crypto coins
                    in the world.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="container-xl px-4 mt-n10">
          <CryptoCard />
          <div class="row gap-2">
            <CryptoNews
              v-for="article in dataNews.slice(0, 12)"
              :key="article.id"
              :article="article"
            />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import CryptoCard from './CryptoCard.vue'
import CryptoNews from './CryptoNews.vue'
import { mapActions, mapState } from 'pinia'
import { useMain } from '../stores/main'

export default {
  components: { Sidebar, Header, Footer, CryptoCard, CryptoNews },
  methods: {
    ...mapActions(useMain, ['getNews'])
  },
  computed: {
    ...mapState(useMain, ['dataNews'])
  },
  created() {
    this.getNews()
  }
}
</script>
