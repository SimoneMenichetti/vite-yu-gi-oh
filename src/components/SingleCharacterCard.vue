<script>
// esportiamo il componente SingleCharacterCard
export default{
    name:'SingleCharacterCard',
    props:['info'],
}
</script>

<template>
    <div class="card text-center ">
        <img :src="info.card_images[0].image_url" alt="" class="img-fluid mb-3 ">
        
        <h5 class="card-title font-weight-bold text-white ">
            {{info.name}}
        </h5>
        <p class="card-text">
            {{info.archetype}}
        </p>
    </div>
    

</template>

<style scoped lang="scss">
@use'../assets/style/partials/general.scss' as*;

.card-title {
      font-size: 14px;
    }

    .card-text {
      font-size: 10px;
     
    }
</style>