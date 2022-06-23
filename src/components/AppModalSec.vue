<script>
export default {
  name: 'modal2',
  emits: ['close2'],
  methods: {
    close2 () {
      this.$emit('close2')
    }
  }
}
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal modalsec"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <h2 class="modal__header">
          Заявка успешно отправлена!
        </h2>
        <button
          type="button"
          class="btn-close"
          @click="close2"
          aria-label="Close modal"
        >

        </button>

        <section
          class="modal-body"
          id="modalDescription"
        >
<p class="desc">Наши специалисты обработают вашу заявку
  и свяжутся с вами в ближайшее время. </p>
        </section>
      </div>
    </div>
  </transition>
</template>

<style>
  .desc{
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    max-width: 450px;
    color: #333333;
    margin-bottom: 40px;
  }
  .modalsec{
    background-image: url("./img/bugs2.png");
    background-size: 35%;
    background-position: bottom left 10px;
    background-repeat: no-repeat;
  }
</style>
