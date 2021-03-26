<template>
<v-container >
  <v-row dense justify='space-around'>,
    <v-col md="5">
  <Logo />
  <h2>By Adrien Salomon</h2>
  <p>Business | Investor | Finance geek</p>
    </v-col>
    <v-col md="3">
  <TheRightSideBar :products="products" :socials="socials"/>
  </v-col>
  </v-row>
</v-container>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
  }),
  async asyncData({ $content, params }) {
    const socials = await $content("socialLinks").fetch();
    const products = await $content("products").fetch();
    console.log(products)
    return { socials, products };
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
</script>
<style >
</style>


