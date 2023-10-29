<template>
  <div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-dark">
      <div class="sidenav-menu">
        <div class="nav accordion" id="accordionSidenav">
          <div class="sidenav-menu-heading">Core</div>

          <a
            class="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseDashboards"
            href=""
            aria-expanded="false"
            aria-controls="collapseDashboards"
            @click="switchPage('/')"
          >
            <div class="nav-link-icon"><i class="fa-solid fa-users"></i></div>
            Home
          </a>

          <div class="sidenav-menu-heading">Data</div>

          <a
            class="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            href=""
            aria-expanded="false"
            aria-controls="collapseLayouts"
            @click="switchPage('/crypto')"
          >
            <div class="nav-link-icon"><i class="fa-solid fa-coins"></i></div>
            Crypto and News
            <div class="sidenav-collapse-arrow"></div>
          </a>

          <a
            class="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            href=""
            aria-expanded="false"
            aria-controls="collapseLayouts"
            @click="switchPage('/topcoins')"
          >
            <div class="nav-link-icon"><i class="fa-solid fa-coins"></i></div>
            Top Coins
            <div class="sidenav-collapse-arrow"></div>
          </a>

          <div v-if="isLogin === true" class="sidenav-menu-heading">MY FAVORITE</div>

          <a
            v-if="isLogin === true"
            @click="switchPage('/favorite')"
            class="nav-link collapsed"
            data-bs-toggle="collapse"
            href=""
            data-bs-target="#collapseComponents"
            aria-expanded="false"
            aria-controls="collapseComponents"
          >
            <div class="nav-link-icon"><i class="fa-solid fa-heart fa-beat"></i></div>
            My Favorite
          </a>

          <div class="sidenav-menu-heading">ACCOUNT</div>
          <template v-if="!isLogin">
            <a
              @click="switchPage('/login')"
              class="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseComponents"
              aria-expanded="false"
              href=""
              aria-controls="collapseComponents"
            >
              <div class="nav-link-icon"><i class="fa-solid fa-right-to-bracket"></i></div>
              Login
            </a>
            <a
              @click="switchPage('/register')"
              class="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseComponents"
              aria-expanded="false"
              href=""
              aria-controls="collapseComponents"
            >
              <div class="nav-link-icon"><i class="fa-solid fa-users"></i></div>
              Register
            </a>
          </template>
          <a
            v-else
            class="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseComponents"
            aria-expanded="false"
            aria-controls="collapseComponents"
            href=""
            @click="logoutHandler"
          >
            <div class="nav-link-icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
            Logout
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useSessionStore } from '../stores/session'

export default {
  computed: {
    ...mapState(useSessionStore, ['isLogin'])
  },
  methods: {
    switchPage(value) {
      this.$router.push(value)
    },
    logoutHandler() {
      this.logout()
      this.$router.push('/')
    },

    ...mapActions(useSessionStore, ['logout'])
  }
}
</script>
