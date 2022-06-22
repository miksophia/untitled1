<template>
  <div class="white-section steps-host">
    <div class="container">
      <div class="layout">
        <div class="flex xs12">
          <h2 class="t-white">
            Шаги реализации сделки
          </h2>
          <div class="steps__list">
            <article v-for="item in StepsList" :key="item.id">
              <p class="step__id">
                {{item.id}}
              </p>
              <p class="steps__item__title">
                {{item.title}}
              </p>
              <p class="description">
                {{item.text}}
              </p>
            </article>
            <div class="step__btn">
              <p class="step__btn__title">
                Готовы к сотрудничеству?
              </p>
              <p class="description">
                Оствьтие ваши контакты для связи
              </p>
              <app-button @open="open">
                Оставить заявку
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bug from './img/bug.png'
export default {
  data () {
    return {
      StepsList: [
        {
          id: 1,
          title: 'Предварительное изучение',
          text: 'Мы высылаем вам анкету (бриф) с более чем 70  вопросами. Вы заполняете ' +
              'её и отправляете нам. При необходимости, перед этим шагом подписывается NDA, ' +
              'так что вы можете быть спокойны о конфиденциальности данных.'
        },
        {
          id: 2,
          title: 'Оценка и формирование предложения',
          text: 'Вторым шагом станет выбор схемы и условий сотрудничества. ' +
              'Мы сформируем индивидуальное предложение для вашего бизнеса.'
        },
        {
          id: 3,
          title: 'Согласование и подпись документов',
          text: 'После того, как мы согласуем все аспекты и выберем форму сотрудничества, останется только подписать все необходимые документы.'
        },
        {
          id: 4,
          title: 'Передача клиентов',
          text: 'После того, как документы подписаны, мы начинаем миграцию вашей клиентской ' +
              'базы на обслуживание в HostFly.by. Весь процесс переноса будет постоянно курироваться' +
              ' как специалистами технической поддержки, так и отделом менеджмента, ' +
              'и пройдёт максимально незаметно для конечных пользователей вашего хостинга.'
        },
        {
          id: 5,
          title: 'Финальный аудит',
          text: 'На этом завершающем этапе мы проводим проверку полноты и качества переноса клиентской базы, ' +
              'готовим и подписываем бухгалтерские Акты, производим окончательный расчет.'
        }
      ],
      bug
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
.step__id{
  background-image: url("./img/step.svg");
  background-repeat: no-repeat;
  height: 60px;
  background-size: contain;
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  color: #251057;
  padding: 4px 35px;
  margin-bottom: 20px;
}
  .steps__item__title{
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #333333;
    margin-bottom: 10px;
  }
  .steps__list .description{
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #333333;
  }
  .steps__list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px 32px;
  }
  .step__btn{
    background-color: #251057;
    border-radius: 10px;
    text-align: center;
   padding: 44px 39px;
    background-image: url("./img/bug.png");
    background-size: 50%;
    background-position: right;
    .description{
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 30px;
    }
  }
  .step__btn__title{
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;
    text-align: center;
    margin-bottom: 10px;
    color: #FFFFFF;
  }
  #app .white-section.steps-host{
    padding-bottom: 120px;
    background-image: url("./img/bugs.png");
    background-repeat: no-repeat;
    background-position: bottom 15% right 5%;
    background-size: 15%;
    background-color: white;
  }
</style>
