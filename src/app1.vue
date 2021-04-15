<template>
<v-carousel hide-delimiters>
                <v-carousel-item 
                   v-for="(item,i) in items"
                   :key="i"
                   :src="item.src"
               >
              <v-row
      align="center"
      justify="center"
      height="500"
    >
      <v-col
        class="text-center"
        
        
      >
        <h1 class="display-1 font-weight-thin mb-4 blue--text darken-4" >
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
               </v-carousel-item>
                 </v-carousel>
</template>
<script>
 export default {
    data: () => ({
        items: [
          {
            src: require('../src/plugins/slider-classic-slide-1-1920x710.jpg'),
          },
          {
            src: require('../src/plugins/slider-classic-slide-2-1920x710.jpg'),
          },
        ]
    }),
     
  }
</script>