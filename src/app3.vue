 <template>
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
     
<v-form class="white--text pt-0 text-right" >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="3"
        >
          <v-text-field
            v-model="title"
            :rules="[rules.required, rules.counter]"
            label="Title"
            counter
            maxlength="10"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="3"
        >
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  
  

 <v-card-text class="white--text pt-0 text-right">
        <br>
        <h3 ><u>ПОЛЕЗНЫЕ ССЫЛКИС</u></h3><br>
        <ul>
          <a href="http://ritg.ru/directions/software_development/" >
   <li class="white--text pt-0 text-right" >Разработка ПО</li>
   </a>
   <a href="http://ritg.ru/directions/mobile/">
   <li class="white--text pt-0 text-right">Мобильная разработка</li>
   </a>
   <a href="http://ritg.ru/directions/it_consulting/">
   <li class="white--text pt-0 text-right">ИТ-консалтинг</li>
   </a>
   <a href="http://ritg.ru/about_ritg/">
   <li class="white--text pt-0 text-right">О компании</li>
   </a>
   <a href="http://ritg.ru/projects/">
   <li class="white--text pt-0 text-right">Портфолио</li>
   </a>
   <a href="http://ritg.ru/contacts/">
   <li class="white--text pt-0 text-right">Контакты</li>
   </a>
  </ul>
      </v-card-text>
        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-6"
          dark
          icon
        >
          <v-icon size="30px">
            {{ icon }}
          </v-icon>
        </v-btn>
     

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>RITG</strong>
      </v-card-text>
    </v-card>
    
  </v-footer>
     </template>
     
     <script>
  export default {
    data: () => ({
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
       
    }),
    
  }

</script>