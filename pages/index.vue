<template>
<v-container >
  <v-row dense justify='space-around'>,
    <v-col md="5">
  <Logo />
    </v-col>
    <v-col md="3">
  <TheRightSideBar :posts="posts" :socials="socials"/>
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
    const posts = await $content("blog").fetch();
    return { socials, posts };
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


