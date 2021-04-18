<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="transparent"
      flat
    >
     <header-view > 
     <div class="header">
        <v-container class="py-0 fill-height">
       
                          <!--лого  -->
        <v-div class="page-loader-body">
           <v-img  src="../src/plugins/logo-default-130x42.png"
               color="blue-grey lighten-5"
               class="mr-1"
               contain="true"
               max-height="42"
               max-width="130" 
        ></v-img>
      </v-div>
          <v-div > 
          
              <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>
              </v-div>
      </v-container>
    </div>
     </header-view>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
      
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--середина  -->
              <h1 class="text-center">Наши услуги</h1>
             <v-container grid-list-xl >
  <v-layout align-center justify-center row reverse fill-height/>
    <v-layout v-bind="binding">
      
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
            <v-icon > mdi-cog-outline</v-icon>
             </v-btn>
          <v-card-text>
            <h3>Разработка ПО</h3><br>
                  <p>Разрабатываем многофункциональное<br>
                   ПО на заказ, внедряем в работу и <br>
                   сопровождаем.</p>
          </v-card-text>
         <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
         ПОДРОБНЕЕ
        </v-btn>
          <v-card height="20"></v-card>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
             <v-icon>mdi-laptop</v-icon>
            </v-btn>
          <v-card-text>
            <h3>Мобильная разработка</h3><br>
            <p>Разрабатываем мобильные <br>
             приложения, которые помогут вывести <br>
             ваш бизнес на новый уровень.</p>
          </v-card-text>
          <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
         ПОДРОБНЕЕ
        </v-btn>
           <v-card height="20"></v-card>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card grey lighten-5="primary">
           <v-btn icon>
              <v-icon>mdi-pencil-ruler</v-icon>
             </v-btn>
          <v-card-text>
            <h3>ИТ-консалтинг</h3><br>
            <p>Наша работа позволит оптимизировать<br>
             Ваши затраты на внедрение <br>
             информационных технологий и<br>
              ИТ-решений в задачах Вашего бизнеса.</p>
          </v-card-text>
          <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          ПОДРОБНЕЕ
        </v-btn>
        <v-card height="2"></v-card>
        </v-card>
        
      </v-flex>
    </v-layout>
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
          тут должна быть анимация и этот эелемент должен быть вынесен в отдельный элемент
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

     <input name="phone" :value="phoneNumber" @input="handleUserInput" />
<div class="container" id="app">
  {{phone|mask}}
  <div class="form-group">
    <div class="input-group">
      <span class="input-group-addon"><span>+7</span></span>
         <input type="tel" 
         v-model="phone"
         name="phone"
         id="phone"
         placeholder="(***) ***-****"
         autocomplete="tel"
         maxlength="14"
         class="form-control"
         pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" required />
         
</div>
</div>
</div>
  
  

 <v-card-text class="white--text pt-0 ">
        <br>
        <h3 ><u>ПОЛЕЗНЫЕ ССЫЛКИС</u></h3><br>
        <ul>
          <a href="http://ritg.ru/directions/software_development/" >
   <li class="white--text pt-0 " >Разработка ПО</li>
   </a>
   <a href="http://ritg.ru/directions/mobile/">
   <li class="white--text pt-0 ">Мобильная разработка</li>
   </a>
   <a href="http://ritg.ru/directions/it_consulting/">
   <li class="white--text pt-0 ">ИТ-консалтинг</li>
   </a>
   <a href="http://ritg.ru/about_ritg/">
   <li class="white--text pt-0 ">О компании</li>
   </a>
   <a href="http://ritg.ru/projects/">
   <li class="white--text pt-0 ">Портфолио</li>
   </a>
   <a href="http://ritg.ru/contacts/">
   <li class="white--text pt-0 ">Контакты</li>
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
        'mdi-instagram',
        'mdi-vk',
      ],
        items: [
          {
            src: require('../src/plugins/slider-classic-slide-1-1920x710.jpg'),
          },
          {
            src: require('../src/plugins/slider-classic-slide-2-1920x710.jpg'),
          },
        ],
      
       phoneNumber: '', 
       
        }),
     }
     

</script>