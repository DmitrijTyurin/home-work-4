<template>
  <Navigation @set-page="setPage" v-model:cart="cart"></Navigation>
  <h1>Магазин</h1>
  <router-view name="default"
    v-model="productDatas"
    v-model:filteredDatas="filteredDatas" 
    v-model:filter="filter"
    v-model:cart="cart"
  />
  <p>&copy; 2024 Сделано на коленке, но с душой</p>
</template>

<script setup>
  import axios from "axios";
  import {onMounted, ref, computed} from "vue";
  import Navigation from "./components/Navigation.vue";

  const cart = ref([])

  const productDatas = ref ([])
  function getProductData() {
  axios
    .get("https://fakestoreapi.com/products")
    .then(response => (productDatas.value = response.data));
  }
  
  const filter = ref ({sName: '', sPriceFrom: null, sPriceTo: null})
  const filteredDatas = computed(() => {
    if (filter.value.sName !== '' || (filter.value.sPriceFrom !== null & filter.value.sPriceFrom !== '') || (filter.value.sPriceTo !== null & filter.value.sPriceTo !== ''))
      return productDatas.value.filter((productData) => 
              (filter.value.sName === '' || (filter.value.sName !== '' & productData.title.toLowerCase().includes(filter.value.sName.toLowerCase()))) &
              (filter.value.sPriceFrom === null || (filter.value.sPriceFrom !== null & productData.price >= filter.value.sPriceFrom)) &
              (filter.value.sPriceTo === null || (filter.value.sPriceTo !== null & productData.price <= filter.value.sPriceTo))
          )
    return productDatas.value
  })

  onMounted(() => {
    getProductData();
    })
</script>