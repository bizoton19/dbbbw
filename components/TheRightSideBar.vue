<template>
  <div>
    <v-card class="pa-2 mb-2" rounded elevation="2">
      <v-card-title> Social Links </v-card-title>
      <v-list>
        <v-list-item v-for="link in socials" :key="link.title">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon left>mdi-{{ link.icon }}</v-icon>
              <a :href="link.url" target="_new">
                {{ link.title }}
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="pa-2 mb-2" rounded elevation="2"
  >
      <v-card-title> Latest Blogs </v-card-title>
      <v-list>
        <v-list-item v-for="post in posts" :key="post.slug">
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: post.slug } }"
              >
                {{ post.title }}
              </NuxtLink>
            </v-list-item-title>
            <v-list-item-subtitle>{{
              formatDate(post.updatedAt)
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <NuxtLink to="/blog"> More... </NuxtLink>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    posts: Array,
    socials: Array,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
</style>