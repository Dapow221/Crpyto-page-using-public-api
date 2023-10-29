import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'YOUR_BASE_URL'

export const useSessionStore = defineStore('session', {
  state: () => {
    return {
      loginUser: []
    }
  },

  getters: {
    isLogin() {
      if (localStorage.getItem('access_token')) {
        return true
      }

      return false
    }
  },

  actions: {
    async login(payload) {
      try {
        const res = await axios.post(`${baseUrl}/login`, {
          email: payload.email,
          password: payload.password
        })

        localStorage.setItem('access_token', res.data.access_token)


        Swal.fire('Success !', `Welcome back!`, 'success')
        setTimeout(() => {
          window.location.href = '/'
        }, 500)
      } catch (error) {
        console.log(error)

        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: error.responseJSON,
          confirmButtonText: 'Try Again'
        })
      }
    },

    async register(response) {
      try {
        await axios.post(`${baseUrl}/register`, {
          email: response.email,
          password: response.password
        })

        this.router.push('/login')

        Swal.fire('Success to register!')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: error.responseJSON,
          confirmButtonText: 'Try Again'
        })
      }
    },
    async logout() {
      try {
        localStorage.clear()

        Swal.fire('Success to logout!')
        setTimeout(() => {
          window.location.href = '/'
        }, 500)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
