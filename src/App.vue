<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
       
  <!--лого  -->
        <v-img  src="../src/plugins/logo-default-130x42.png"
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
<!-- поиск -->
        <v-responsive max-width="0">
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
              
                <v-list-item
                  v-for="n in 0"
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
               >
              <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
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
                 ырвио
          <v-container>
        <v-row>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="4"
          >
            <v-card height="200">
              <h1 class="display-1 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      
<h1 class="text-center">Почему стоит выбрать нас</h1>
<v-container grid-list-xl>
  <v-layout align-center justify-center row reverse fill-height/>
    <v-layout v-bind="binding">
      
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
            <v-icon > mdi-thumb-up-outline</v-icon>
             </v-btn>
          <v-card-text>
            <h3>Лидеры IT-рынка</h3><br>
                  <p>Победители Всероссийских<br>
                  конкурсов, в том числе <br>
                   и РЕЙТИНГА РУНЕТА.</p>
          </v-card-text>
          <v-card height="50"></v-card>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
             <v-icon>mdi-card-account-details-outline</v-icon>
            </v-btn>
          <v-card-text>
            <h3>Профессиональная<br> команда разработчиков</h3><br>
            <p>В RITG работают эксперты<br>
               и профессионалы своего дела. <br>
            Вместе мы решим любую задачу.</p>
          </v-card-text>
           <v-card height="30"></v-card>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
              <v-icon>mdi-trophy-outline</v-icon>
             </v-btn>
          <v-card-text>
            <h3>Разрабатываем<br> лучшие решения</h3><br>
            <p>Наши проекты отмечены<br>
             наградами международного уровня.</p>
          </v-card-text>
        </v-card>
        <v-card height="50" ></v-card>
      </v-flex>
    </v-layout>
  </v-container>

<v-container grid-list-xl>
  <v-layout align-center justify-center row reverse fill-height/>
    <v-layout v-bind="binding">
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
            <v-icon>mdi-cellphone-link</v-icon>
             </v-btn>
          <v-card-text>
            <h3>Используем продвинутые<br> технологии</h3><br>
                  <p>Применяем методы <br>
                  машинного обучения и <br>
                  нейросети для решения задач</p>
          </v-card-text>
          <v-card height="50"></v-card>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
             <v-icon>mdi-account-group-outline</v-icon>
            </v-btn>
          <v-card-text>
            <h3>Гибкий подход</h3><br>
            <p>Мы всегда поддерживаем<br>
             Ваши идеи, создаем<br>
              оригинальные, интуитивно<br>
               понятные и удобные<br>
               решения для них.<br>
                Ориентируемся на Agile, Scrum.</p>
          </v-card-text>
           <v-card height="10"></v-card>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
              <v-icon>mdi-headset</v-icon>
             </v-btn>
          <v-card-text >
            <h3>Техническая <br>поддержка</h3><br>
            <p>Мы не бросаем Вас по итогам<br>
             работ, а осуществляем <br>
             техническую поддержку</p>
          </v-card-text>
        </v-card>
        <v-card height="50"></v-card>
      </v-flex>
    </v-layout>
  </v-container>
      Erzghj
           <v-parallax
    dark
    src="../src/plugins/bg-image-2-1920x1304.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
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
    </v-main>
  </v-app>


</template>


<script>
  export default {
    data: () => ({
      links: [
        'ГЛАВНАЯ',
        'О КОМПАНИИ',
        'УСЛУГИ',
        'ПОРТФОЛИО',
        'ВАКАНСИИ',
        'КОНТАКТЫ',
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
        ],
        title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
    }),
     
    

  }

</script>