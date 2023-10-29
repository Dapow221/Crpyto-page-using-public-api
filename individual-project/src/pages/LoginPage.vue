<template>
  <div id="layoutAuthentication" class="bg-dark">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container-xl px-4">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11">
              <div class="card my-5">
                <div class="card-body p-5 text-center">
                  <div class="h3 fw-light mb-3">Sign In :</div>
                </div>
                <hr class="my-0" />
                <div class="card-body p-5">
                  <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                      <label class="text-gray-600 small" for="emailExample">Email address</label>
                      <input
                        class="form-control form-control-solid"
                        type="text"
                        aria-label="Email Address"
                        aria-describedby="emailExample"
                        v-model="payload.email"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="text-gray-600 small" for="passwordExample">Password</label>
                      <input
                        class="form-control form-control-solid"
                        type="password"
                        placeholder=""
                        aria-label="Password"
                        aria-describedby="passwordExample"
                        v-model="payload.password"
                      />
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-0">
                      <input class="btn btn-dark" type="submit" value="Login" />
                    </div>
                  </form>
                </div>
                <hr class="my-0" />
                <div class="card-body px-5 py-4">
                  <div class="small text-center text-dark">
                    New user?
                    <RouterLink to="/register">Create an account!</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useSessionStore } from '../stores/session'

import FooterBar from '../components/Footer.vue'

export default {
  data() {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  components: { FooterBar },
  computed: {
    ...mapState(useSessionStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useSessionStore, ['login']),

    handleLogin() {
      this.login(this.payload)
    }
  }
}
</script>

<style></style>
