import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      dataBitcoin: [],
      dataEthereum: [],
      dataCardano: [],
      dataMatic: []
    }
  },
  actions: {
    changeState(value) {
      this.dataBitcoin = value
    },
    async fetchDataCrypto() {
      try {
        const data = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')

        let cb = this.changeState

        data.onmessage = function (message) {
          const dataString = message.data
          const dataObject = JSON.parse(dataString)
          cb(dataObject)
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeStateEthereum(value) {
      this.dataEthereum = value
    },
    async fetchEthereum() {
      try {
        const data = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum')

        let cb = this.changeStateEthereum

        data.onmessage = function (message) {
          const dataString = message.data
          const dataObject = JSON.parse(dataString)
          cb(dataObject)
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeStateCardano(value) {
      this.dataCardano = value
    },
    async fetchCardano() {
      try {
        const data = new WebSocket('wss://ws.coincap.io/prices?assets=cardano')

        let cb = this.changeStateCardano

        data.onmessage = function (message) {
          const dataString = message.data
          const dataObject = JSON.parse(dataString)
          cb(dataObject)
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeStateMatic(value) {
      this.dataMatic = value
    },
    async fetchMatic() {
      try {
        const data = new WebSocket('wss://ws.coincap.io/prices?assets=polygon')

        let cb = this.changeStateMatic

        data.onmessage = function (message) {
          const dataString = message.data
          const dataObject = JSON.parse(dataString)
          // console.log(dataObject)
          cb(dataObject)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
