<template>
  <q-page class="flex">
    <div
      class="second-container"
    >
    <h1 class="text-h2">Our projects</h1>
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
    </div>
  </q-page>
</template>

<script>
const projects = [
  {
    img: '/images/myguardmoney.png',
    title: 'MyGuardmoney',
    description: 'Admin your finances, a note your expenses over the month and get graphics about your incomings vs outcomings. It works without internet connection',
    url: 'https://myguardmoney.soft-corp.online'
  },
  {
    img: '/images/soundhub.png',
    title: 'SoundHub',
    description: 'Download music, listen your favorites songs, make playlists and chat with people.',
    url: 'https://soundhub.soft-corp.online'
  },
  {
    img: '/images/exro.png',
    title: 'EXRO - Aplicación de programas químicos',
    description: 'App developed for EXRO.',
    url: 'http://extranet.exro.co:8082'
  },
  {
    img: '/images/mypipeline.png',
    title: 'MyPipeline',
    description: 'Manage your business pipeline. Create your tasks and keep notified.',
    url: 'https://mypipeline.soft-corp.online'
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
