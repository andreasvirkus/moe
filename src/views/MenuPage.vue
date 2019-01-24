<template>
  <div class="menu-page">
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="food in list" :key="food.name">
        <div class="f-space">
          <span>{{ food.name }}</span>
          <span>{{ food.price }}</span>
        </div>
        <p>{{ food.ingredients }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu-page',
  props: {
    title: String,
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
  .menu-page {

  }
</style>
