<template>
<div class="carousel">
<v-carousel hide-delimiters class="carousel"> 
<v-carousel-item 
v-for="(item,i) in items" 
:key="i" 
:src="item.src" 
> 
<v-row 
   align="center" 
   justify="center" 
> 
<div class="text-center">
<v-col 
   class="text-center" 
> 
<h1 class="display-1 font-weight-thin mb-4 blue--text darken-4" > 
  тут должен быть текст
</h1> 
<h4 class="subheading"> 
тут тоже но типо описание
</h4> 
</v-col> 
</div>
</v-row> 
</v-carousel-item> 
</v-carousel>
</div>
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