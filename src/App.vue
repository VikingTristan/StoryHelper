<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Story</span>
        <span class="font-weight-light">Helper</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <Markov/>
    </v-content>
  </v-app>
</template>

<script>
import Markov from "./components/Markov";

export default {
  name: 'App',
  components: {
    Markov
  },
  data () {
    return {
      //
    }
  }
}
</script>
