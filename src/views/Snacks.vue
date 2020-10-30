<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4" >
        <div class="col">
          <h1>Daftar <strong>Snacks</strong></h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <input v-model="search" type="text" class="form-control" placeholder="Write down your wanted food!" aria-label="Write down your wanted food!" @keyup="searchSnacks">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
          <Card :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import axios from 'axios'

export default {
  name: 'Snacks',
  components: {
    Navbar,
    Card,
  },
  data() {
    return {
      products: [],
      search: '',
    };
  },
  methods:{
    setProduct(data){
      this.products = data
    },
    searchSnacks(){
      axios.get('http://localhost:3000/products?q='+this.search)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
    }
  },
  mounted() {
    axios.get('http://localhost:3000/products')
    .then((response) => this.setProduct(response.data))
    .catch((error) => console.log(error))
  }
}
</script>
