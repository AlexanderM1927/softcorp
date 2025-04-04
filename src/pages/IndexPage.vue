<template>
  <q-page class="flex">
    <section
      class="w-100 only-desktop animate__animated animate__fadeIn"
    >
      <div class="main-container">
        <div class="main-container__info">
          <h1 class="text-h5 text-gray">Software Engineer</h1>
          <h2 class="text-h6">
            Hey there! I'm a software developer. One of my passions is the self-learning process, and I am looking to continuously improve my problem-solving skills. I started developing websites at a young age because of my curiosity, and until now, I have continued working to become a master in developing quality, scalable, and high-performance applications. <br>
            I have participated in multiple areas of software development, such as coding, deploying, and testing in multiple applications.<br>
            When it comes to coding, I'm always trying to create the most understandable, quality, and high-performance code possible.<br>
            I have an ambitious mindset for self-improvement and can assume new challenges with flexibility.<br>
          </h2>
        </div>
        <div class="main-container__btn">
          <button @click="goTo('projects')">Watch briefcase!</button>
        </div>
      </div>
    </section>
    <section
      class="w-100 only-mobile animate__animated animate__fadeIn"
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
    </section>
    <section class="third-container w-100 bg-white">
      <div class="third-container__wrapper">
        <IndexExperience />
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { functions } from '../utils/functions.js'
import IndexExperience from 'src/components/IndexExperience.vue';


export default defineComponent({
  name: 'IndexPage',
  mixins: [functions],
  components: {
    IndexExperience
  }
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
