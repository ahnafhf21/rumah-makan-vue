<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Madani Snacks</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/snacks">Snacks</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> 
                        <router-link class="nav-link" to="/chart">Charts
                        <b-icon-bag></b-icon-bag>
                        <span class="badge badge-success ml-2">{{updateChart ? updateChart.length : orders.length}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from "axios";

export default {
    name : 'Navbar',
    data(){
        return {
            orders: []
        }
    },
    props: ['updateChart'],
    methods: {
        setJumlah(data) {
            this.orders = data
        }
    },
    mounted() {
    axios.get('http://localhost:3000/charts')
    .then((response) => this.setJumlah(response.data))
    .catch((error) => console.log(error))
  }
}
</script>

<style>

</style>