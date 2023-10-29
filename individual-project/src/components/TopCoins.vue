<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="topcoins.LOGO_URL" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ topcoins.SYMBOL }}</h5>
          <p class="card-text">{{ topcoins.ASSET_DESCRIPTION_SNIPPET }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['topcoins']
}
</script>

<style></style>
