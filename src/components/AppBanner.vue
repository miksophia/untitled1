<template>
  <div class="container root-button-banner banner banner-top">
    <div class="layout">
      <div class="flex xs12 banner-new">
        <h1>
          Купим вашу хостинг-компанию
        </h1>
        <ul class="list list-banner">
          <li v-for="item in BannerList" :key="item">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['fon1'],
  data () {
    return {
      BannerList: [
        'Ваш бизнес в сфере оказания услуг хостинга перестал быть прибыльным?',
        'Вы тратите слишком много усилий на администрирование текущих процессов, не получая должного результата?',
        'Вы хотели бы выгодно выйти из этого бизнеса, получив достойную компенсацию за потраченные многолетние усилия по привлечению клиентов к себе на хостинг-площадку?'
      ]
    }
  }
}
</script>

<style lang="scss">
#app .list.list-banner li:before{
  width: 10px;
  height: 10px;
}
#app .list.list-banner li{
  padding-left: 25px;
  margin-bottom: 35px;
}
.list-banner{
  max-width: 625px;
}
  .banner-new{
    margin-top: 120px;
    margin-bottom: 150px;
    h1{
      font-weight: 600;
      font-size: 45px;
      line-height: 130%;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 50px;
    }
  }
</style>
