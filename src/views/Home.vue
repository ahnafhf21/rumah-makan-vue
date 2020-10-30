<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
        <h2><strong>Best</strong> Snacks</h2>
        </div>
        <div class="col">
          <router-link to="/snacks" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> All Views</router-link>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <Card :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Card
  },
  data() {
    return {
      products: [],
    };
  },
  methods:{
    setProduct(data){
      this.products = data
    }
  },
  mounted() {
    axios.get('http://localhost:3000/best-products')
    .then((response) => this.setProduct(response.data))
    .catch((error) => console.log(error))
  }

}
</script>
