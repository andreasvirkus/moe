<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-show="$route.name !== 'home'">Menu</router-link>
    </div>
    <router-view :list="pageItems"/>
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
  computed: {
    pageItems () {
      return foodList[this.$route.params.section]
    }
  }
}
</script>

<style src="@/styles/variables.css"></style>
<style src="@/styles/global.scss" lang="scss"></style>
<style src="@/styles/utils.css"></style>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>
