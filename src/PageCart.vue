<template>
    <div v-if="cart.length === 0">
        <h3>Ваша корзина пуста</h3>
    </div>

    <div v-if="cart.length > 0" v-css:display="'flex'">
        <div>
            <li v-css:list-style="'none'" v-for="productData in cart">
                <div v-css:width="'700px'" class="dv">
                    <div class="ileft dv"><img :src="productData.data.image" width="100" height="100" /></div>
                    <div class="icenter dv"></div>
                    <div class="iright dv">
                        <div class="margin dv">
                            <div class="ileft dv"></div>
                            <div class="iright mleft dv">{{ productData.data.title }}</div>
                            <div class="icenter dv"></div>
                            <div class="iclear dv"></div>
                        </div>
                        <div class="margin dv">
                            <div class="ileft dv"></div>
                            <div class="iright dv" v-css:color="'red'">{{ productData.data.price * productData.quantity }} ₽</div>
                            <div class="icenter dv"></div>
                            <div class="iclear dv"></div>
                        </div>
                        <div class="margin dv">
                            <div class="ileft dv"></div>
                            <div class="iright dv">
                                <button class="mleft btn" @click="decQuantity(productData.id)">-</button>
                                <input type="text" :value="productData.quantity" class="mleft price" disabled>
                                <button class="mleft btn" @click="incQuantity(productData.id)">+</button>
                            </div>
                            <div class="icenter dv"></div>
                            <div class="iclear dv"></div>
                        </div>
                    </div>
                    <div class="iclear dv"></div>
                    <hr>
                </div>
            </li>
        </div>
        <div v-css:width="'300px'" class="mleft">
            <button 
                v-css:background="'green'" 
                v-css:color="'white'" 
                v-css:width="'100%'"
                @click="router.push({name: 'buy'})">Перейти к оформлению</button>
            <div class="dv">
                <div class="ileft dv"> <h4>Ваша корзина</h4></div>
                <div class="iright mleft dv"></div>
                <div class="icenter dv"></div>
                <div class="iclear dv"></div>
            </div>
            <div class="dv">
                <div class="ileft dv">Товары ({{ allQuantity() }})</div>
                <div class="iright mleft dv">{{ allPrice() }} ₽</div>
                <div class="icenter dv"></div>
                <div class="iclear dv"></div>
            </div>

        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const cart = defineModel('cart')

    const router = useRouter()

    function incQuantity(id) {
        for (let i = 0; i <= cart.value.length-1; i++){
            if (cart.value[i].id === id) {
                cart.value[i].quantity += 1
            }
        }
    }

    function decQuantity(id) {
        for (let i = 0; i <= cart.value.length-1; i++){
            if (cart.value[i].id === id) {
                if (cart.value[i].quantity > 0) {
                    cart.value[i].quantity -= 1
                }
            }
        }
    }

    function allQuantity() {
        let allQuant = 0;
        for (let i = 0; i <= cart.value.length-1; i++){
            allQuant += cart.value[i].quantity
        }
        return allQuant
    }

    function allPrice() {
        let allPrice = 0;
        for (let i = 0; i <= cart.value.length-1; i++){
            allPrice += cart.value[i].quantity * cart.value[i].data.price
        }
        return allPrice
    }
</script>

<style scoped>
    .dv {
        display: block;
    }

    .ileft {
        float: left;
    }

    .iright {
        float: right;
    }

    .icenter {
        text-align: center; 
        margin: 0 auto;
    }

    .iclear {
        clear: both;
    }

    .margin {
        margin: 5px;
    }

    .mleft {
        margin-left: 10px;
    }

    .price {
        width: 20px;
    }

    .btn {
        width: 3em;
        height: 3em;
    }
</style>