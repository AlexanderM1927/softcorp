<template>
  <q-page class="flex">
    <div
      class="second-container animate__animated animate__fadeIn"
    >
    <h1 class="text-h2">Projects</h1>
    <br>
      <div class="row projects">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="col-md-3 col-xs-12 project-container"
          @click="goToProject(project.url)"
        >
          <div
            class="project-image"
            :style="`
              background: url(${project.img});
              background-size: cover;
            `"
          ></div>
          <div class="project-content">
            <h2 class="text-h6">{{ project.title }}</h2>
            <hr>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <p>
          I have also work in differents projects for company as software developer.
        </p>
        <ul>
          <li href="https://caretree.me/" target="_blank"><b>CareTree</b> as software developer in Heinsohn</li>
          <li href="https://eovolt.com/" target="_blank"><b>Eovolt</b> as software developer in Gradiweb</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
const projects = [
  {
    img: '/images/soundhub.png',
    title: 'SoundHub',
    description: 'Listen your favorites songs, make playlists and chat with people.',
    url: 'https://soundhub.alexm.club'
  },
  {
    img: '/images/myguardmoney.png',
    title: 'MyGuardmoney',
    description: 'Admin your finances, a note your expenses over the month and get graphics about your incomings vs outcomings. It works without internet connection',
    url: 'https://myguardmoney.alexm.club'
  },
  {
    img: '/images/casatudor.png',
    title: 'CasaTudor',
    description: 'Ecommerce store with Nuxt and Strapi.',
    url: 'https://casatudor.alexm.club'
  },
  {
    img: '/images/mypipeline.png',
    title: 'MyPipeline',
    description: 'Manage your business pipeline. Create your tasks and keep notified. Default account mail: admin@gmail.com password: admin',
    url: 'https://mypipeline.alexm.club'
  }
]
export default {
  // name: 'PageName',
  setup () {
    return {
      projects: projects
    }
  },
  methods: {
    goToProject (url) {
      location.href = url
    }
  }
}
</script>
<style lang="scss" scoped>
.projects {
  gap: 2rem;
  justify-content: center;
}

.project-container {
  background: white;
  border-radius: 2rem;
  cursor: pointer;
}

.project-content {
  padding: 0.5rem;
}

.project-image {
  height: 10rem;
  width: 100%;
  border-radius: 2rem;
}
</style>
