<template>
  <div>
    <v-app-bar app color="white" dense>
      <img
        lazy-src="~/assets/images/logo_main.jpeg"
        height="48"
        width="50"
        src="~/assets/images/logo_main.jpeg"
      />

      <ul>
        <!-- <li>
          <NuxtLink to="/blog"> Blog </NuxtLink>
        </li>
        <li>|</li>-->
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>|</li>
        <li>
          <NuxtLink to="/"> Contact </NuxtLink>
        </li>
      </ul>
      <v-spacer></v-spacer>
      <v-btn large color="secondary"> Book a Session</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
  }),
};
</script>

<style scoped>
ul > li {
  display: inline-block;
  /* You can also add some margins here to make it look prettier */
  zoom: 1;
  *display: inline;

  /* this fix is needed for IE7- */
}
li {
  border: none;
}

a {
  text-decoration: none;
  color: black;
  line-height: 40px;
  padding-left: 10px;
}
</style>