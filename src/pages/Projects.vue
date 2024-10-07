<template>
  <q-page class="flex">
    <div
      class="second-container animate__animated animate__fadeIn"
    >
    <h1 class="text-h4">Projects</h1>
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
        <div class="col-12">
          <p>
            As a software engineer, I have worked for different companies and on various projects.
          </p>
          <ul>
            <li> <a href="https://caretree.me/" target="_blank"><b>CareTree</b></a> as software developer in Heinsohn</li>
            <li> <a href="https://eovolt.com/" target="_blank"><b>Eovolt</b></a> as software developer in Gradiweb</li>
          </ul>
          <p>
            Also, as Freelance I have developed 2 differents projects for a local company here in Colombia called EXRO.
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const projects = [
  {
    img: '/images/myguardmoney.png',
    title: 'MyGuardmoney',
    description: 'Admin your finances, a note your expenses over the month and get graphics about your incomings vs outcomings. It works without internet connection',
    url: 'https://myguardmoney.alexm.club'
  },
  {
    img: '/images/soundhub.png',
    title: 'SoundHub',
    description: 'Listen your favorites songs, make playlists and chat with people.',
    url: 'https://soundhub.alexm.club'
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
  },
  {
    img: '/images/exro-filemanager.png',
    title: 'EXRO | File Manager',
    description: 'Application to store corporation documents and automatically add an identifier according to area.',
    url: 'http://extranet.exro.co:8085'
  },
  {
    img: '/images/exro-controlprograms.png',
    title: 'EXRO | Control Programas Químicos',
    description: 'Application to generate reports related to several company water treatment projects and clients.',
    url: 'http://extranet.exro.co:8082'
  },
  {
    img: '/images/github.png',
    title: 'GitHub repositories',
    description: 'There are also other projects with other technologies on my repo, you can see it!',
    url: 'https://github.com/AlexanderM1927'
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
      window.open(url, '_blank')
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
