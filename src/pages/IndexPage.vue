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
        <h1 class="text-h5 text-gray">Software Engineer</h1>
        <h2 class="text-h6">Full Stack developer with more than 4 years of experience working with differents environments and projects.</h2>
      </div>
      <div class="main-container__btn">
        <button @click="goTo('projects')">Watch briefcase!</button>
      </div>
    </div>
    <div
      class="main-container only-mobile animate__animated animate__fadeIn"
      :style="`
        background: url('/images/bg-mobile.PNG');
        background-size: cover;
      `"
    >
      <div class="main-container__info">
        <h2 class="text-h5 text-gray">Software Engineer</h2>
        <h2 class="text-h6">Full Stack developer with more than 4 years of experience working with differents environments and projects.</h2>
      </div>
      <div class="main-container__btn">
        <button @click="goTo('projects')">Watch briefcase!</button>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { functions } from '../utils/functions.js'


export default defineComponent({
  name: 'IndexPage',
  mixins: [functions]
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

//desktop
@media only screen and (min-width: $responsiveSize) {
  .main-container__btn {
    position: absolute;
    right: 5rem;
    bottom: 7rem;
    color: white;
    text-decoration: solid;
    cursor: pointer;
    button {
      padding: 0.5rem 2rem;
      font-size: 1rem;
      border-radius: 2rem;
    }
  }
}
// mobile
@media only screen and (max-width: $responsiveSize) {
  .main-container__btn {
    position: absolute;
    bottom: 7rem;
    color: white;
    text-decoration: solid;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
    button {
      padding: 0.5rem 2rem;
      font-size: 1rem;
      border-radius: 2rem;
    }
  }
}

.text-gray {
  opacity: 0.5;
}
</style>
