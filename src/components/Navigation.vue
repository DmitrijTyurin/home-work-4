<template>
  <nav>
    <ul class="container">
      <li><router-link :to="{name: 'main'}">Главная</router-link></li>
      <li><router-link :to="{name: 'add'}">Добавить товар</router-link></li>
      <li><router-link :to="{name: 'cart'}">{{ getCart() }}</router-link></li>
      <li><router-link :to="{name: 'login'}">{{ login() }}</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
  const cart = defineModel('cart')
  
  function login() {
    if (window.localStorage.getItem('login') === null) {
      return 'Войти'
    } else {
      return window.localStorage.getItem('login') + '(Выйти)'
    }
  }

  function getCart() {
    let allQuantity = 0;
    for (let i = 0; i <= cart.value.length-1; i++) {
      allQuantity += cart.value[i].quantity;
    }
    if (allQuantity == 0) {
      return 'Корзина';
    }
    else {
      return 'Корзина (' + allQuantity + ')';
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .container {
    margin: auto;
    width: 1000px;
  }

  a {text-decoration: none;}

  ul {
    padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    list-style: none;
  }

  nav {
    background: #0ca0d6;
    font-size: 0;
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  nav > ul > li {
    display: inline-block;
      font-size: 14px;
      padding: 0 15px;
      position: relative;
  }

  nav > ul > li > a {
    color: #fff;
      display: block;
      padding: 20px 0;
      border-bottom: 3px solid transparent;
      transition: all .3s ease;
  }

  nav > ul > li:hover > a {
    color: #444; 
      border-bottom: 3px solid #444;
  }
</style>
