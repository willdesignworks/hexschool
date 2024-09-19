<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">登入</router-link> |
    <router-link to="/dashboard">dashboard</router-link> |
    <router-link to="/dashboard/products">products</router-link> |
  </nav>
  <router-view/>

</template>

<style lang="scss">
//@import "~bootstrap/scss/bootstrap";
@import "./assets/all.scss";
</style>
