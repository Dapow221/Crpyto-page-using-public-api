<template>
  <HeaderBar />
  <div id="layoutSidenav">
    <SideNav />
    <div id="layoutSidenav_content">
      <main>
        <header class="page-header page-header-dark bg-dark pb-10">
          <div class="container-xl px-4">
            <div class="page-header-content pt-4">
              <div class="row align-items-center justify-content-between">
                <div class="col-auto mt-4">
                  <h1 class="page-header-title">
                    <div class="page-header-icon"><i data-feather="filter"></i></div>
                    Your Favorite
                  </h1>
                  <div class="page-header-subtitle">This is your favorite list mini data's</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="container-xl px-4 mt-n10">
          <div class="row">
            <FavoriteCard
              v-for="favorite in dataFavorite"
              :key="favorite.id"
              :favorite="favorite"
            />
          </div>
        </div>
      </main>
      <FooterBar />
    </div>
  </div>
</template>

<script>
import HeaderBar from './Header.vue'
import FooterBar from './Footer.vue'
import FavoriteCard from './Favorite.vue'
import SideNav from './Sidebar.vue'
import { mapActions, mapState } from 'pinia'
import { useMain } from '../stores/main'

export default {
  components: { HeaderBar, FooterBar, FavoriteCard, SideNav },
  computed: {
    ...mapState(useMain, ['dataFavorite'])
  },
  methods: {
    ...mapActions(useMain, ['fetchFavorites'])
  },
  created() {
    console.log(this.dataFavorite)
    this.fetchFavorites()
  }
}
</script>

<style lang="scss" scoped></style>
