<template>
  <div class="loading-wrapper text-center loading-5">
    <div class="spinner-wrapper w-100">
      <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant"/>
    </div>
    <h1 class="my-5" style="
    color: blue;">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'LoadingA',
  props: {
    variant: {
      required: false,
      type: String,
      default: 'info',
      validator: (value) => {
        // Value must match one of these strings
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].includes(value)
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].includes(value)
      }
    }
  }
}
</script>

<style lang="stylus">
.loading-5{
  padding-bottom: 11rem !important;
  padding-top: 11.5rem !important;
  }
  .spinner-wrapper
    .spinner
      width 4rem
      height 4rem

</style>
