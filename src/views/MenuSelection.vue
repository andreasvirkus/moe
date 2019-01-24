<template>
  <nav class="menu-selection">
    <router-link to="/menu/appetizers" class="m-btn m-btn--big">Starters & Sides</router-link>
    <router-link to="/menu/dishes" class="m-btn m-btn--big">Main dishes</router-link>
    <router-link to="/menu/desserts" class="m-btn m-btn--big">Desserts</router-link>
    <router-link to="/menu/drinks" class="m-btn m-btn--big">Drinks</router-link>
  </nav>
</template>

<style lang="scss">
.menu-selection {
  a {
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    margin: 1rem auto;

    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
}
</style>
