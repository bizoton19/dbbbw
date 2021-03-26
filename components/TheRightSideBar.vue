<template>
  <div>
    <v-card class="pa-2 mb-2" rounded elevation="2">
      <v-app-bar dark color="primary">
        <v-toolbar-title>Social Links</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-list>
        <v-list-item-group v-model="selectedItem">
         
          <v-list-item v-for="link in socials" :key="link.title">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon :color="link.icon.color" left>mdi-{{ link.icon.name }}</v-icon>
                <a :href="link.url" target="_new">
                  {{ link.title }}
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card class="pa-2 mb-2" rounded elevation="2">
      <v-app-bar dark color="primary">
        <v-toolbar-title>Products/Services</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-list>
        <v-list-item v-for="product in products" :key="product.title">
          <v-list-item-content>
            <v-list-item-title>
             <v-icon :color="product.icon.color" left>mdi-{{ product.icon.name }}</v-icon>
                <a :href="product.url" target="_new">
                  {{ product.title }}
                </a>
            </v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    products: Array,
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