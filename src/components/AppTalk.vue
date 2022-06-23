<template>
  <div class="page-content talk-block">
    <div class="layout">
      <div class="flex talk">
        <img :src="host1" alt="">
        <div class="talk-wrapper">
          <p class="description">Мы готовы в равной степени обсуждать перенос к нам на обслуживание как небольших клиентских баз, так и клиентских баз крупных хостинг-провайдеров на индивидуальных условиях, предоставляя новым клиентам высокий уровень обслуживания.
            Вы можете быть уверены, что передаёте проект в надёжные руки.</p>
          <app-button @open="open">Оставьте ваши контакты</app-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import host1 from './img/host1.png'
export default {
  data () {
    return {
      host1
    }
  },
  emits: ['open'],
  methods: {
    close () {
      this.$emit('close')
    },
    open () {
      this.$emit('open')
    }
  }
}
</script>

<style lang="scss">
.talk{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  img{
    width: 100%;
  }
  .description{
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 30px;
  }
}
.talk-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
 #app .page-content.talk-block{
    margin-bottom: 80px;
  }
@media screen and (max-width: 767px){
  .talk{
    column-gap: 60px;
    .description{
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  #app .page-content.talk-block{
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 575px){
  .talk{
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
  #app .page-content.talk-block{
    margin-bottom: 40px;
  }
}
</style>
