<template>
    <div>
        <li v-css:list-style="'none'" v-for="productData in productDatas">
            <div  v-if="productData.id == prodId">
                <div class="margin">
                    <div class="ileft"><img :src="productData.image" width="400" height="400" /></div>
                    <div class="icenter"></div>
                    <div class="iright">
                        <div class="margin">
                            <div class="ileft"><label v-css:color="'red'">Наименование:  </label> {{ productData.title }}</div>
                            <div class="iright mleft"></div>
                            <div class="icenter"></div>
                            <div class="iclear"></div>
                        </div>
                        <div class="margin">
                            <div class="ileft"><label v-css:color="'red'">Цена:  </label>{{ productData.price}} ₽</div>
                            <div class="iright"></div>
                            <div class="icenter"></div>
                            <div class="iclear"></div>
                        </div>
                        <div class="margin">
                            <div class="ileft"><label v-css:color="'red'">Описание:  </label>{{ productData.description}}</div>
                            <div class="iright"></div>
                            <div class="icenter"></div>
                            <div class="iclear"></div>
                        </div>
                        <div class="margin">
                            <div class="ileft"><label v-css:color="'red'">Категория:  </label>{{ productData.category}}</div>
                            <div class="iright"></div>
                            <div class="icenter"></div>
                            <div class="iclear"></div>
                        </div>
                        <div class="margin">
                            <div class="ileft"><label v-css:color="'red'">Рейтинг:  </label>{{ productData.rating.rate}}</div>
                            <div class="iright"></div>
                            <div class="icenter"></div>
                            <div class="iclear"></div>
                        </div>
                        <div class="margin">
                            <div class="ileft"><label v-css:color="'red'">Количество проголосовавших:  </label>{{ productData.rating.count}}</div>
                            <div class="iright"></div>
                            <div class="icenter"></div>
                            <div class="iclear"></div>
                        </div>
                    </div>
                    <div class="iclear"></div>
                </div>
                <div class="margin">
                    <div class="ileft"></div>
                    <div class="iright">
                        <div class="main2" v-if="inCart(productData.id)"><label class="lbl" @click="delCart(productData.id)">Удалить из корзины</label></div>
                        <div class="main"><label  class="lbl" @click="addCart(productData)">{{ buttonName(productData.id) }}</label></div>
                    </div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>
            </div>
        </li>
    </div>
</template>

<script setup>
    defineProps(['prodId'])

    const productDatas = defineModel()
    const cart = defineModel('cart')

    function buttonName(id) {
      for(let i = 0; i <= cart.value.length-1; i++)
        if (cart.value[i].id === id) return 'Добавить в корзину (' + cart.value[i].quantity + ')'
      return 'Добавить в корзину'               
    }

    function inCart(id) {
      for(let i = 0; i <= cart.value.length-1; i++)
        if (cart.value[i].id === id) return true
      return false            
    }

    function addCart(data) {
      for(let i = 0; i <= cart.value.length-1; i++) {
        if (cart.value[i].id === data.id) {
          cart.value[i].quantity += 1
          return
        }}
      cart.value.push({id: data.id, quantity: 1, data: data})
    }

    function delCart(id) {
      for(let i = 0; i <= cart.value.length-1; i++) {
        if (cart.value[i].id === id) {
          cart.value.splice(i, 1)
          return
        }}
    }
</script>

<style scoped>
    div {
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

    .main {
    width: 300px;
    height: 50px;
    font-weight: bold;
    font-size: 15px;
    font-family: "Josefin Sans", sans-serif;
    background-color: #fdcb6e;
    cursor: pointer;
    box-shadow: 5px 5px 0 0;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20px;
    float: right;
    margin: 5px;
    }

    .main2 {
    width: 240px;
    height: 50px;
    font-weight: bold;
    font-size: 15px;
    font-family: "Josefin Sans", sans-serif;
    background-color: #fdcb6e;
    cursor: pointer;
    box-shadow: 5px 5px 0 0;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20px;
    float: right;
    margin: 5px;
    }

    .lbl {
    position: absolute;
    text-decoration: none;
    color: #000;
    z-index: 1000;
    }
    .main::after {
    content: "";
    top: 0;
    left: 0;
    width: 300px;
    height: 50px;
    background: linear-gradient(to right, #ff7675, #e84393);
    opacity: 0;
    transition: 0.3s;
    }
    .main:hover {
    box-shadow: -5px -5px 0 0;
    transform: scale(0.9);
    }
    .main:hover::after {
    opacity: 1;
    }

    .main2::after {
    content: "";
    top: 0;
    left: 0;
    width: 240px;
    height: 50px;
    background: linear-gradient(to right, #ff7675, #e84393);
    opacity: 0;
    transition: 0.3s;
    }
    .main2:hover {
    box-shadow: -5px -5px 0 0;
    transform: scale(0.9);
    }
    .main2:hover::after {
    opacity: 1;
    }
</style>