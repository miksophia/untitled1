<template>
  <div class="page-content reason">
    <div class="layout">
      <div class="flex xs12">
        <h2 class="t-new">
          Почему стоит передать своих клиентов именно HostFly.by?
        </h2>
        <ul class="list-reason">
          <li v-for="item in reasonList"
              :key="item.title">
            <p class="item-title">{{item.title}}</p>
            <p class="description">{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reasonList: [
        {
          text: 'Мы регулярно изучаем рынок хостинг-услуг в Беларуси и других странах и хорошо ознакомлены со спецификой подобных сделок. При оценке стоимости клиентской базы мы учитываем десятки разных факторов, ' +
              'влияющих на формирование итоговой цены. Спорные моменты решаются в пользу продавца.',
          title: 'Достойное вознаграждение'
        },
        {
          text: 'Мы знаем, что передача клиентской базы - это серьёзный шаг. Процесс миграции может включать в себя не только перенос самих сайтов, но и почтовых сервисов,  трансфер доменов, перенос настроек доменных зон, сопутствующих услуг и т.д. Мы приложим максимум усилий, чтобы автоматизировать и облегчить этот этап, ' +
              'сделав переезд на нашу площадку максимально комфортным для вас и ваших клиентов.',
          title: 'Помощь в миграции'
        },
        {
          text: 'Наши специалисты имеют многолетний опыт работы с хостингом в ряде стран, включая Беларусь, ' +
              'Россию, США и некоторые страны Западной Европы. За годы своей профессиональной ' +
              'деятельности мы перенесли к себе на обслуживание десятки клиентских ' +
              'баз различных хостинг-провайдеров. Мы имеем уже наработанные и проверенные временем' +
              ' сценарии миграции, шаблоны документов, устоявшиеся практики коммуникаций с клиентами и т.д.',
          title: 'Профессиональная команда'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.list-reason{
  li{
    list-style: none;
    padding: 0 0 0 110px;
    margin: 0 0 50px 0;
    position: relative;
  }
  li:before{
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    background-image: url("./img/marker.png");
    position: absolute;
    left: 0;
    top: 0;
  }
li:after{
  content: " ";
  display: block;
  width: 10px;
  height: 100%;
  background-image: url("./img/rect.png");
  position: absolute;
  background-repeat: no-repeat;
  left: 75px;
  top: 0;
}
  .item-title{
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #EB276D;
    margin-bottom: 15px;
  }
}
 #app .page-content.reason{
    margin-bottom: 100px;
  }
</style>
