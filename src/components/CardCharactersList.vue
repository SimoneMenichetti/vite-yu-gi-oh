<script>
// esportiamo il component CardCharactersList
export default{
    name:'CardCharactersList',
}
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col-12">
           <!-- bg black -->
        </div>
    </div>
    <div class="row card-container">
        <div class="col-6 col-md-4 col-lg-3 mb-5">
            <!-- componenti cards -->
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
@use'../assets/style/partials/general.scss' as*;


.card-container {
      margin-top: 20px;
      background-color: #212529;
    }
  
</style>