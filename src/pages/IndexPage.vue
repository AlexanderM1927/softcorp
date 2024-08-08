<template>
  <q-page class="flex">
    <div
      class="w-100 only-desktop animate__animated animate__fadeIn"
      :style="`
        background: url('/images/software-development-button.jpg');
        background-size: cover;
      `"
    >
      <div class="main-container">
        <div class="main-container__info">
          <h1 class="text-h5 text-gray">Software Engineer</h1>
          <h2 class="text-h6">Full Stack developer with more than 4 years of experience working with differents environments and projects.</h2>
        </div>
        <div class="main-container__btn">
          <button @click="goTo('projects')">Watch briefcase!</button>
        </div>
      </div>
    </div>
    <div
      class="w-100 only-mobile animate__animated animate__fadeIn"
      :style="`
        background: url('/images/bg-mobile.PNG');
        background-size: cover;
      `"
    >
      <div class="main-container">
        <div class="main-container__info">
          <h2 class="text-h5 text-gray">Software Engineer</h2>
          <h2 class="text-h6">Full Stack developer with more than 4 years of experience working with differents environments and projects.</h2>
        </div>
        <div class="main-container__btn">
          <button @click="goTo('projects')">Show the Portfolio!</button>
        </div>
      </div>
    </div>
    <div class="third-container w-100 text-white">
      <div class="third-container__content">
        <h2 class="text-h4">I have experience working as...</h2>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <div class="d-flex flex-column justify-center stack-card">
              <div>
                <img src="/images/backend.png" class="stack-card__image">
              </div>
              <h3 class="text-h5">Backend Developer</h3>
              <p>
                <b>Stack:</b> PHP, Laravel and JavaScript (NodeJS)
              </p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="d-flex flex-column justify-center stack-card">
              <div>
                <img src="/images/frontend.png" class="stack-card__image">
              </div>
              <h3 class="text-h5">Frontend Developer</h3>
              <p>
                <b>Stack:</b> HTML, CSS, SCSS, JavaScript, VueJS, JQuery, Quasar, Nuxt
              </p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="d-flex flex-column justify-center stack-card">
              <div>
                <img src="/images/ecommerce.png" class="stack-card__image">
              </div>
              <h3 class="text-h5">Ecommerce Developer</h3>
              <p>
                I have experience working with Shopify.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="d-flex flex-column justify-center stack-card">
              <div>
                <img src="/images/server.png" class="stack-card__image">
              </div>
              <h3 class="text-h5">Server Managment</h3>
              <p>
                I used to work with Ubuntu to set up VPS and config a pipeline through Jenkins to CI/CD process.
              </p>
            </div>
          </div>
        </div>
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
.stack-card {
  padding: 2rem;
  text-align: center;
}
.stack-card__image {
  width: 10rem;
  height: 10rem;
}
</style>
