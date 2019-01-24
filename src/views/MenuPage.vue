<template>
  <div class="menu-page">
    <h1>{{ section[0].toUpperCase() + section.substring(1) }}</h1>

    <ul>
      <li v-for="food in list" :key="food.name" class="m-top-m">
        <div class="f-space">
          <span>{{ food.name }}</span>
          <span>{{ food.price }}</span>
        </div>
        <p class="text-left">{{ food.ingredients }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu-page',
  props: {
    section: String,
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.menu-page {
  max-width: 30rem;
  width: 95%;
  margin: 0 auto;
}
</style>
