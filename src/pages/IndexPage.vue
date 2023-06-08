<template>
  <q-page class="flex">
    <div
      class="main-container only-desktop animate__animated animate__fadeIn"
      :style="`
        background: url('/images/software-development-button.jpg');
        background-size: cover;
      `"
    >
      <div class="main-container__info">
        <h1 class="text-h5">Custom Sofware</h1>
        <h2 class="text-h6">Start building the application for your company or project.</h2>
      </div>
    </div>
    <div
      class="main-container only-mobile animate__animated animate__fadeIn"
      :style="`
        background: url('/images/bg-mobile.jpeg');
        background-size: cover;
      `"
    >
      <div class="main-container__info">
        <h1 class="text-h5">Custom Sofware</h1>
        <h2 class="text-h6">Start building the application for your company or project.</h2>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'IndexPage'
})
</script>
<style lang="scss">
.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  z-index: 1;
  padding-left: 2rem;
  padding-right: 2rem;
}

//desktop
@media only screen and (min-width: $responsiveSize) {
  .main-container__info {
    position: relative;
    top: 7rem;
    color: white;
    text-decoration: solid;
  }
}
// mobile
@media only screen and (max-width: $responsiveSize) {
  .main-container__info {
    position: relative;
    top: 5rem;
    color: white;
    text-decoration: solid;
    h1, h2 {
      margin-top: 0;
    }
  }
}
</style>
