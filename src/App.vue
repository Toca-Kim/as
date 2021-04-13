<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        
  <!--лого  -->
        <v-img  src="logo-default-130x42.png"
          color="blue-grey lighten-5"
          class="mr-1"
         
          contain="true"
          max-height="42"
        ></v-img>
          
        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>
cxxsdc<!-- поиск -->
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                cdqwe<!--бокавухи-->
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--середина  -->
              <v-carousel hide-delimiters>
                <v-carousel-item 
                   v-for="(item,i) in items"
                   :key="i"
                   :src="item.src"
               ></v-carousel-item>
                 </v-carousel>
           карври
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

<!--подвал  -->
    
 <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-text class="white--text pt-0">
        <br>
        <h3 ><u>О НАС</u></h3><br>
     Наша компания разрабатывает высокотехнологичные,<br>
    современные веб и мобильные приложения для бизнеса с 2006 года.
      </v-card-text>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
     

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>RITG</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </v-main>
  </v-app>


</template>


<script>
  export default {
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
       icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
        items: [
          {
            src: require('../src/plugins/slider-classic-slide-1-1920x710.jpg'),
          },
          {
            src: require('../src/plugins/slider-classic-slide-2-1920x710.jpg'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
        ]
    }),
  }

</script>