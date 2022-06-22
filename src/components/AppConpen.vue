<template>
  <div class="white-section compen">
    <div class="container">
      <div class="layout">
        <div class="flex xs12">
          <h2 class="t-white">
            Мы готовы предложить вам следующие виды компенсаций
          </h2>
          <div class="comp__list">
            <article v-for="item in compList" :key="item.title" :class="item.color">
              <p class="comp__item__title">
                {{item.title}}
              </p>
              <p class="description">
                {{item.text}}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      compList: [
        {
          title: 'Покупка клиентской базы',
          text: 'Стоимость каждого клиента формируется исходя из стоимости его месячной подписки, ' +
              'умноженной на коэффициент 12. При этом размер коэффициента может меняться, в зависимости' +
              ' от качества базы: объёма юридических лиц, цен, типа панели управления, длительности текущих ' +
              'договорных обязательств и т.д.',
          color: 'purple'
        },
        {
          title: 'Передача клиентов по партнёрской программе',
          text: 'Передавая клиентов к нам на обслуживание, вы будете получать от 20% ' +
              'каждого платежа всех клиентов на постоянной основе. Размер выплат устанавливается заранее, ' +
              'он будет зависеть от качества и количества клиентов передаваемой базы.',
          color: 'pink'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .compen{
    padding-bottom: 80px;
  }
.comp__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 18px;
  .description{
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #333333;
  }
  article{
    border-radius: 10px;
    padding: 30px;
  }
  .comp__item__title{
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #333333;
    position: relative;
    padding-left: 20px;
    margin-bottom: 15px;
    &:before{
      width: 10px;
      height: 10px;
      top: 8px;
      content: '';
      position: absolute;
      left: 0;
      background: #eb276d;
    }
  }
  .pink{
    background: #F3E3F0;
  }
  .purple{
    background: #E8E8FC;
  }
}
</style>
