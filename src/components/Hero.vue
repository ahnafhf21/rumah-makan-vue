<template>
    <div class="row mt-4">
        <div class="col">
            <div class="d-flex h-100">
                <div class="justify-content-center align-self-center"> 
                <h2><strong>Delicious snacks,</strong><br>
                in Your Gadget</h2>
                <p>Choose your favorite snacks!</p>
                <router-link to="/snacks" class="btn btn-lg btn-success"><b-icon-arrow-right></b-icon-arrow-right>
                    Order</router-link>
                </div>
            </div>
        </div>
        <div class="col">
            <img src="../assets/images/hero.png" width="100%"/>
        </div>
    </div>
</template>

<script>
export default {
name : 'Hero'
}
</script>

<style>

</style>