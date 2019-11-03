<template>
  <v-container>
    <h1 class="display-1 text-center">Weather App</h1>
    <v-flex xs12>
      <v-card color="blue-grey darken-2" dark>
        <v-card-text>Here is the card</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <v-text-field label="First name"></v-text-field>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: 'tranduyhoa94',
        password: '123123123'
      }
    }
  },
  created() {
    const user = {
      email: this.user.email,
      password: this.user.password
    }
    console.log(user)
    this.$store.dispatch('signinUserInDatabase', {
      user
    })
  }
}
</script>
