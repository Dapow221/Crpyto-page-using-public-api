<template>
  <div class="row">
    <div class="col-lg-6 col-xl-3 mb-4">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-md-4">
              <img src="@/assets/Images/bitcoin.png" class="float-start w-100" alt="..." />
            </div>
            <div class="col-md-8 p-3">Bitcoin</div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ dataBitcoin.bitcoin }} $</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-6 col-xl-3 mb-4">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-md-4">
              <img src="@/assets/Images/ethereum.png" class="float-start w-100" alt="..." />
            </div>
            <div class="col-md-8 p-3">Ethereum</div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ dataEthereum.ethereum }} $</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-6 col-xl-3 mb-4">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-md-4">
              <img src="@/assets/Images/cardano-2.png" class="float-start w-100" alt="..." />
            </div>
            <div class="col-md-8 p-3">Cardano</div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ dataCardano.cardano }} $</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-6 col-xl-3 mb-4">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-md-4">
              <img src="@/assets/Images/matic-logo.png" class="float-start w-100" alt="..." />
            </div>
            <div class="col-md-8 p-3">Polygon</div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ dataMatic.polygon }} $</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useStore } from '../stores/store'

export default {
  computed: {
    ...mapState(useStore, ['dataBitcoin', 'dataEthereum', 'dataCardano', 'dataMatic'])
  },
  methods: {
    ...mapActions(useStore, ['fetchDataCrypto', 'fetchEthereum', 'fetchCardano', 'fetchMatic'])
  },
  created() {
    this.fetchDataCrypto()
    this.fetchEthereum()
    this.fetchCardano()
    this.fetchMatic()
  }
}
</script>

<style lang="scss" scoped></style>
