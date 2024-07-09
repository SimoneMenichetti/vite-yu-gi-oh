<script>
import SingleCharacterCard from './SingleCharacterCard.vue';

// esportiamo il component CardCharactersList
export default{
    name:'CardCharactersList',
    components:{
        SingleCharacterCard,
    }
}
</script>

<template>
<div class="container ">
    <div class="row card-container">
        <div class="col-6 col-md-4 col-lg-3 mb-5">
            <!-- componenti cards -->
             <SingleCharacterCard />
        </div>
        
    </div>
</div>
</template>

<style scoped lang="scss">
@use'../assets/style/partials/general.scss' as*;


.card-container {
    margin-top: 20px;
   

    .card{
        background-color: #D48F38;
    }

   
    
}

    
  
</style>