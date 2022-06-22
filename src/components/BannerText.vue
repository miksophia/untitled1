<template>
  <div class="page-content banner-mn">
    <div class="layout">
      <div class="flex banner-btm">
        <p>Мы покупаем хостинг-провайдеров в Беларуси, России, Украине
          и других странах за высокое вознаграждение.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.banner-btm{
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 45px;
  p{
    font-weight: 600;
    font-size: 34px;
    line-height: 130%;
    text-align: center;
    color: #C4DC2A;
  }
}
#app .page-content.banner-mn{
    margin-bottom: 80px;
  }
</style>
