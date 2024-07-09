<script>

// esportiamo il componente SingleCharacterCard
export default {
  name: 'SingleCharacterCard',
  props: ['info'],
//   utilizzo di computed per ritornare se archetype o meno
  computed: {
    hasArchetype() {
      return !!this.info.archetype;
    }
  }
}
</script>

<template>
    <div class="card text-center pb-5 ">
        <img :src="info.card_images[0].image_url" alt="" class="img-fluid mb-3 ">
        <h5 class="card-title font-weight-bold text-white ">
            {{info.name}}
        </h5>
        <!-- se è archetype itera archetype e msotra -->
        <p  v-if="hasArchetype"  class="card-text">
            {{info.archetype}}
        </p>
        <!-- se non è archetype itera race e mostra -->
        <p v-else class="card-text">
            {{info.race}}
        </p>
    </div>
    

</template>

<style scoped lang="scss">
@use'../assets/style/partials/general.scss' as*;

.card-title {
    font-size: 14px;
    font-weight: 700;
}

.card-text {
    font-size: 12px;
    font-size: smaller;
     
}



</style>