<template>
  <div class="food-detail">
    <Navbar :updateChart="charts"/>
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Snacks</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Chart</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>My <strong>Chart</strong></h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Descriptions</th>
                <th scope="col">Total</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(chart, index) in charts" :key="chart.id">
                <th>{{ index + 1 }}</th>
                <td>
                  <img
                    :src="'/imgs/' + chart.products.gambar"
                    class="img-fluid shadow"
                    width="200px"
                  />
                </td>
                <td>
                  <strong>{{ chart.products.nama }}</strong>
                </td>
                <td>{{ chart.keterangan ? chart.keterangan : "-" }}</td>
                <td>{{ chart.jumlah_pemesanan }}</td>
                <td align="right">Rp {{ chart.products.harga }}</td>
                <td align="right">
                  <strong
                    >Rp
                    {{ chart.products.harga * chart.jumlah_pemesanan }}</strong
                  >
                </td>
                <td
                  align="center"
                  class="text-danger"
                  @click="deleteChart(chart.id)"
                >
                  <b-icon-trash></b-icon-trash>
                </td>
              </tr>
              <tr>
                <td colspan="6" align="right"><strong>Total Harga:</strong></td>
                <td align="right">
                  <strong>Rp {{ totalHarga }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama Pemesan</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja">Nomor Meja</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>

            <button type="submit" class="btn btn-success" @click="checkout">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Chart",
  components: {
    Navbar,
  },
  data() {
    return {
      charts: [],
      pesan: {}
    };
  },
  methods: {
    setCharts(data) {
      this.charts = data;
    },
    deleteChart(id) {
      axios
        .delete("http://localhost:3000/charts/" + id)
        .then(() => {
          this.$toast.error("Chart has been deleted.", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        })
        .catch((error) => console.log(error));

      axios
      .get("http://localhost:3000/charts/")
      .then((response) => this.setCharts(response.data))
      .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.charts = this.charts;
        axios
          .post("http://localhost:3000/orders", this.pesan)
          .then(() => {
            // Hapus Semua Keranjang 
            this.charts.map(function (item) {
              return axios
                .delete("http://localhost:3000/charts/" + item.id)
                .catch((error) => console.log(error));
            });
            this.$router.push({ path: "/order-success" });
            this.$toast.success("Sukses Dipesan", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Nama dan Nomor Meja Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/charts/")
      .then((response) => this.setCharts(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.charts.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>