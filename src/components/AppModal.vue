<script>
export default {
  name: 'modal',
  emits: ['close'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <h2 class="modal__header">
          Оставить заявку
        </h2>
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
        >

        </button>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <form>
            <div>
            <input type="text" required placeholder="Ф.И.О.*">
            <input type="tel" placeholder="Телефон">
            <input type="email" required placeholder="E-mail*">
            <input type="text" placeholder="Название компании">
            <input type="text" placeholder="Сайт">
            <textarea placeholder="Комментарий"></textarea>
            </div>
            <button type="submit" class="cont-btn">
              Отправить заявку
            </button>
          </form>
        </section>
      </div>
    </div>
  </transition>
</template>
<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal {
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 40px 60px;
    position: relative;
    border-radius: 10px;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    width: 18px;
    height: 18px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    background-image: url("./img/cross-mod.svg");
    top: 20px;
    right: 20px;
    background-size: contain;
    position: absolute;
  }
  .modal__header{
    font-weight: 600;
    font-size: 34px;
    line-height: 130%;
    text-align: center;
    color: #333333;
  }
  .modal-body div{
    display: grid;
    margin-bottom: 10px;
  }
.modal-body{
  input, textarea{
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
    padding: 12px 20px;
    background: rgba(232, 232, 252, 0.5);
    border: 1px solid rgba(54, 42, 98, 0.5);
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
    min-width: 450px;
    font-family: FiraSans;
  }
  textarea{
    resize: none;
  }
  button{
    display: grid;
    margin: 0 auto;

  }
}
</style>
