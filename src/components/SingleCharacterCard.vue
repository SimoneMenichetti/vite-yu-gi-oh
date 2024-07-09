<script>
// esportiamo il componente SingleCharacterCard
export default{
    name:'SingleCharacterCard',
}
</script>

<template>
    <div class="card text-center ">
        <img class="img-fluid mb-3 " src="https://th.bing.com/th/id/R.5e9ce1ad62c4bb675bbd507acbb159aa?rik=XDaALsmXEZtxTQ&riu=http%3a%2f%2fimages.jedessine.com%2f_uploads%2f_tiny_galerie%2f20081145%2fcarte_b1p.jpg&ehk=sOhTp7basNF%2fBvRXJiXZM8ofbsvfPnKG%2fkYLErvv5uI%3d&risl=&pid=ImgRaw&r=0" alt="">
        
        <h5 class="card-title font-weight-bold text-white ">
            "A" CELL BREEDING DEVICE
        </h5>
        <p class="card-text">
            Alien
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