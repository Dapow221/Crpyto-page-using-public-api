import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'YOUR_BASE_URL'

export const useMain = defineStore('main', {
  state: () => {
    return {
      dataNews: [],
      dataTopCoins: [],
      dataFavorite: []
    }
  },
  actions: {
    async getNews() {
      try {
        let response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')

        if (response.ok) {
          let { Data } = await response.json()
          this.dataNews = Data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async addFavoriteNews(dataFavorite) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/favorite`,
          method: 'post',
          data: dataFavorite,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        this.fetchFavorites()

        Swal.fire({
          icon: 'success',
          title: 'Successfully added to favorites',
          text: `Please enjoy !`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'success',
          title: 'Please login first',
          text: `Please enjoy !`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    async getTopCoins() {
      try {
        let response = await fetch(
          'https://data-api.cryptocompare.com/asset/v1/top/list?page=1&page_size=10&sort_by=CREATED_ON&sort_direction=DESC'
        )

        if (response.ok) {
          let { Data } = await response.json()
          this.dataTopCoins = Data.LIST
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchFavorites() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/favorite`,
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        this.dataFavorite = data.favorite
      } catch (error) {
        console.log(error)
      }
    },
    async deleteFavorite(id) {
      try {
        await axios({
          url: `${baseUrl}/favorite/` + id,
          method: 'delete',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        this.fetchFavorites()

        Swal.fire({
          icon: 'success',
          title: 'Successfully remove from your favorites',
          text: `Please enjoy !`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {}
    }
  }
})
