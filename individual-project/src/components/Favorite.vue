<template>
  <div class="card mb-3" style="max-width: 540rem">
    <div class="row g-0">
      <div class="thumb-img">
        <a :href="favorite.articleUrl" target="_blank">
          <img :src="favorite.articleImageUrl" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ favorite.articleTitle }}</h5>
          <p class="card-text">{{ favorite.articleBody }}</p>
          <button type="button" class="btn btn-dark" @click.prevent="handlerDelete(favorite.id)">
            Remove to Your Favorite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useMain } from '../stores/main'

export default {
  props: ['favorite'],
  methods: {
    ...mapActions(useMain, ['deleteFavorite']),

    handlerDelete(id) {
      this.deleteFavorite(id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
