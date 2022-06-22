<template>
  <button class="cont-btn" @click="$emit('open')">
    <slot/>
  </button>
</template>

<style>
  .cont-btn{
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #FFFFFF;
    background: #EB276D;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 15px 25px;
    cursor: pointer;
    width: fit-content;
  }
</style>

<script>
export default {
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
