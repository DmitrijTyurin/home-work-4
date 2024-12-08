<template>
    <label>
        <div><slot>Наименование: </slot><input type="search" class="lefti" placeholder="Search..." aria-label="Search" v-model="sName"></input></div>
        <div class="leftb"><slot>Цена от: </slot><input type="number" class="lefti" v-model="sPriceFrom" /></div>
        <div class="leftb"><slot>Цена до: </slot><input type="number" class="lefti" v-model="sPriceTo" /></div>
        <button class="leftb" @click="filter = search()">Поиск</button>
    </label>
</template>

<script setup>
    import {ref} from "vue";

    const filter = defineModel('filter')

    const sName = ref('')
    const sPriceFrom = ref(null)
    const sPriceTo = ref(null)

    function search() {
        return {sName: sName.value, sPriceFrom: sPriceFrom.value, sPriceTo: sPriceTo.value}
    }
</script>

<style>
    .leftb {
        margin-left: 40px;
    }
    .lefti {
        margin-left: 10px;
    }
    div {
        display:inline-block;
    }
</style>