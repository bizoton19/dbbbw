<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Posts</h1>

       <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>

      </div>
    </div>
    
  </div>
</template>

<script>

export default {
   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>