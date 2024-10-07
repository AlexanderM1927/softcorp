<template>
  <q-page class="flex">
    <section
      class="second-container animate__animated animate__fadeIn"
    >
    <h1 class="text-h4">Projects</h1>
    <p>
      Here is a list of projects where I've been participated.
    </p>
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
    </section>
  </q-page>
</template>

<script>
const projects = [
  {
    img: '/images/caretree.png',
    title: 'CareTree',
    description: 'Software Application to provide smart care management. Here I used to participate in the development team into the maintenance of the website, building different features, fixing bugs and fixing security risks.',
    url: 'https://caretree.me/'
  },
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
    img: '/images/eovolt.png',
    title: 'Eovolt',
    description: 'Online store built with Shopify when I used to work for Gradiweb.',
    url: 'https://eovolt.com/'
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
    description: 'As a freelance, I develop this application to store corporation documents and automatically add an identifier according to area.',
    url: 'http://extranet.exro.co:8085'
  },
  {
    img: '/images/exro-controlprograms.png',
    title: 'EXRO | Control Programas Químicos',
    description: 'As a freelance, I develop this application to generate reports related to several company water treatment projects and clients.',
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
