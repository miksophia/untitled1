<template>
  <div class="page-content about-host">
        <h2 class="t-new">
          О хостинг-провайдере HostFly.by
        </h2>
    <div class="about-host__list">
      <article v-for="item in hostList"
               :key="item">
        <img :src="item.src" alt="">
        <p>{{item.title}}</p>
      </article>
    </div>
  </div>

</template>

<script>
import h1 from './img/h1.png'
import h2 from './img/h2.png'
import h3 from './img/h3.png'
import h4 from './img/h4.png'
import h5 from './img/h5.png'
import h6 from './img/h6.png'
export default {
  data () {
    return {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,

      hostList: [
        {
          src: h1,
          title: '17 лет опыта в США и Европе'
        },
        {
          src: h2,
          title: '3 года в Беларуси'
        },
        {
          src: h3,
          title: 'Официальный регистратор доменов .BY и .БЕЛ'
        },
        {
          src: h4,
          title: 'Резидент Парка высоких технологий'
        },
        {
          src: h5,
          title: 'Современное оборудование HP, DELL, CISCO в дата-центре уровня Tier III'
        },
        {
          src: h6,
          title: 'Аттестованный оператор системы защиты информации и персональных данных'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app .page-content.about-host{
  margin-bottom: 80px;
}
#app .t-new{
  font-weight: 600;
  font-size: 34px;
  line-height: 130%;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 60px;
}
.about-host__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 85px;
  align-items: baseline;
  img{
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    color: #FFFFFF;

  }

  article {
    display: grid;
    justify-items: center;
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>
