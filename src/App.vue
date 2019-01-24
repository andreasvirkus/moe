<template>
  <div class="app">
    <div class="app__nav text-left f-space">
      <router-link to="/" v-show="$route.name !== 'home'">👈 Menu</router-link>
      <button class="m-btn m-left-a" @click="showQR = !showQR">Show QR</button>
    </div>
    <router-view :list="pageItems"/>

    <div v-if="showQR">
      <qriously :value="pageUrl" :size="200"/>
    </div>
  </div>
</template>

<script>
const foodList = {
  appetizers: [
    {
      name: 'Gin & tonic',
      price: '6€',
      ingredients: 'Gin, tonic, a classy lime'
    },
    {
      name: 'Tom Collins',
      price: '6€',
      ingredients: 'Gin, sugar syrup, lemon juice, lemon'
    },
    {
      name: 'White Russian',
      price: '5.50€',
      ingredients: 'USSR secret'
    },
    {
      name: 'Whiskey sour',
      price: '7€',
      ingredients: 'You should be manly enough not to ask.'
    }
  ],
  dishes: [
    {
      name: 'Chilly cheese steak',
      price: '11€',
      ingredients: 'Things. Ooh - and cheese!'
    },
    {
      name: 'Beet greens corn soko',
      price: '13€',
      ingredients: ''
    },
    {
      name: 'Earthnut pea potato',
      price: '11.50€',
      ingredients: ''
    },
    {
      name: 'Smoked salmon',
      price: '16€',
      ingredients: 'Slippery slope.'
    }
  ],
  desserts: [
    {
      name: 'Gin & tonic',
      price: '6€',
      ingredients: 'Gin, tonic, a classy lime'
    },
    {
      name: 'Tom Collins',
      price: '6€',
      ingredients: 'Gin, sugar syrup, lemon juice, lemon'
    },
    {
      name: 'White Russian',
      price: '5.50€',
      ingredients: 'USSR secret'
    },
    {
      name: 'Whiskey sour',
      price: '7€',
      ingredients: 'You should be manly enough not to ask.'
    }
  ],
  drinks: [
    {
      name: 'Gin & tonic',
      price: '6€',
      ingredients: 'Gin, tonic, a classy lime'
    },
    {
      name: 'Tom Collins',
      price: '6€',
      ingredients: 'Gin, sugar syrup, lemon juice, lemon'
    },
    {
      name: 'White Russian',
      price: '5.50€',
      ingredients: 'USSR secret'
    },
    {
      name: 'Whiskey sour',
      price: '7€',
      ingredients: 'You should be manly enough not to ask.'
    }
  ]
}

export default {
  name: 'app',
  data () {
    return {
      showQR: false
    }
  },
  computed: {
    pageItems () {
      return foodList[this.$route.params.section]
    },
    pageUrl () {
      return location.href
    }
  }
}
</script>

<style src="@/styles/variables.css"></style>
<style src="@/styles/global.scss" lang="scss"></style>
<style src="@/styles/utils.css"></style>
<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &__nav {
    padding: 30px;
  }
}
</style>
