<template>
    <div class="card shadow">
    <img :src="'../imgs/' + product.gambar" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{product.nama}}</h5>
        <p class="card-text">
            Price : Rp {{product.harga}}
        </p>
        <router-link :to=" '/snack/' + product.id" class="btn btn-success"><b-icon-cart></b-icon-cart> Order Now</router-link>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['product']

}
</script>

<style>

</style>