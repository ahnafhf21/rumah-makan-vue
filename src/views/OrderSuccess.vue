<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row justify-content-center mt-5">
                <h2>Order has been submitted! </h2>     
            </div>
            <div class="row justify-content-center">
                <router-link to="/">Return to home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name: "OrderSuccess",
    components:{
        Navbar,
    }
}
</script>

<style>

</style>