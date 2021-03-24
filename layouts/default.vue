<template>
  <v-app>
    <TheHeader/>
    <v-main>
      <Nuxt />
    </v-main>
    <TheFooter/>

    <v-footer app dark color="" height="72" inset> </v-footer>
  </v-app>
</template>
<script>
import TheHeader from '../components/TheHeader.vue';
export default {
  components: { TheHeader },
  data: () => ({}),
};
</script>

<style scoped>

</style>
