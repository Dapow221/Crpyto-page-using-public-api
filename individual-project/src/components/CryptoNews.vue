<template>
  <div class="col-6 card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="thumb-img">
        <a :href="article.url" target="_blank">
          <img :src="article.imageurl" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="card-text">{{ truncateText(article.body) }}</p>
          <p class="card-text">
            <small class="text-muted">{{ time_since(article.published_on) }}</small>
          </p>
          <button type="button" class="btn btn-dark" @click.prevent="handlerAdd">
            I Like This News
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { ago } from '../utility/index'
import { useMain } from '../stores/main'

export default {
  props: ['article'],
  methods: {
    truncateText(value) {
      if (value.length > 135) {
        const substr = value.substring(0, 135)
        return substr.substring(0, substr.lastIndexOf(' ')) + ' ...'
      } else {
        return value
      }
    },
    time_since(val) {
      if (val) {
        return ago(val)
      } else {
        return ''
      }
    },
    ...mapActions(useMain, ['addFavoriteNews']),

    handlerAdd() {
      const dataFavorite = {
        articleUrl: this.article.url,
        articleImageUrl: this.article.imageurl,
        articleTitle: this.article.title,
        articleBody: this.article.body,
        articlePubhlishedOn: this.article.published_on
      }
      this.addFavoriteNews(dataFavorite)
    }
  }
}
</script>

<style lang="scss" scoped></style>
