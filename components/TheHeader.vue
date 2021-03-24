<template>
<div>
     <v-app-bar app color="primary" dense dark>
      
       <img
          lazy-src="~/assets/images/logo_main.jpeg"
          height="50"
          width="50"
          src="~/assets/images/logo_main.jpeg"
        />
    
      
      <ul>
        <li>
          <NuxtLink to="/blog"> Blog </NuxtLink>
        </li>
        <li>|</li>
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>|</li>
        <li>
          <NuxtLink to="/"> Contact </NuxtLink>
        </li>
      </ul>
    </v-app-bar>
</div>
</template>

<script>
export default {
  
  data: () => ({
    drawer: true,
    
  }),
}
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
  color: beige;
  line-height: 40px;
  padding-left: 10px;
}

</style>