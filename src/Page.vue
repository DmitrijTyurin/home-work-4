<template>
    <div class="container">
        <header class="bottom">
            <page-header 
                v-model:filter="filter">
            </page-header>
        </header>
        <main>
            <page-main 
                v-model:filteredDatas="filteredDatas"
                v-model:cart="cart">
            </page-main>
        </main>
    </div>
</template>

<script setup>
    import PageHeader from './components/PageHeader.vue';
    import PageMain from './components/PageMain.vue';

    const filteredDatas = defineModel('filteredDatas')
    const filter = defineModel('filter')
    const cart = defineModel('cart')
</script>

<style scoped>
    .bottom {
        margin-bottom: 40px;
    }
</style>