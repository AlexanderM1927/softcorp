<template>
  <q-page>
    <section class="page-hero animate__animated animate__fadeIn">
      <div class="page-hero__content">
        <span class="page-eyebrow">{{ $t('projects.eyebrow') }}</span>
        <h1 class="page-title">{{ $t('projects.title') }}<br><span class="text-green">{{ $t('projects.titleAccent') }}</span></h1>
        <p class="page-subtitle">{{ $t('projects.subtitle') }}</p>
      </div>
    </section>

    <section class="projects-section">
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
          @click="goToProject(project.url)"
        >
          <div
            class="project-card__image"
            :style="`background-image: url(${project.img})`"
          >
            <div class="project-card__overlay">
              <span class="project-card__view">View Project ↗</span>
            </div>
          </div>
          <div class="project-card__body">
            <span v-if="project.position" class="project-card__badge">{{ project.position }}</span>
            <h2 class="project-card__title">{{ project.title }}</h2>
            <p class="project-card__desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
const projects = [
  {
    img: '/images/hqrentalsoftware.png',
    title: 'HQ Rental Software',
    description: 'Software Application for agencies in the Car Rental business.',
    position: 'Mid Developer',
    url: 'https://hqrentalsoftware.com/'
  },
  {
    img: '/images/caretree.png',
    title: 'CareTree',
    position: 'Junior Advanced Developer - Heinsohn',
    description: 'Smart care management platform. Maintained features, fixed bugs, and addressed security risks within the development team.',
    url: 'https://caretree.me/'
  },
  {
    img: '/images/mandarastore.png',
    title: 'Mandara Store',
    position: 'Lead Developer',
    description: 'Full-featured ecommerce store built with Nuxt and Strapi as the headless CMS.',
    url: 'https://mandarastore.com/'
  },
  {
    img: '/images/exro-filemanager.png',
    title: 'EXRO | File Manager',
    position: 'Lead Developer',
    description: 'Corporate document storage system with automatic area-based identifier assignment.',
    url: 'http://extranet.exro.co:8085'
  },
  {
    img: '/images/exro-controlprograms.png',
    title: 'EXRO | Chemical Programs',
    position: 'Lead Developer',
    description: 'Reporting application for water treatment projects and client management.',
    url: 'http://extranet.exro.co:8082'
  },
  {
    img: '/images/myguardmoney.png',
    title: 'MyGuardmoney',
    position: 'Lead Developer',
    description: 'Personal finance tracker with expense graphs, income vs. outgoing insights — works offline.',
    url: 'https://myguardmoney.alexm.club'
  },
  {
    img: '/images/mypipeline.png',
    title: 'MyPipeline',
    position: 'Lead Developer',
    description: 'Business pipeline manager with task tracking and real-time notifications.',
    url: 'https://mypipeline.alexm.club'
  },
  {
    img: '/images/eovolt.png',
    title: 'Eovolt',
    position: 'Frontend Developer - Gradiweb',
    description: 'Shopify store for a French e-bike company. Led development with SEO optimization and custom feature implementation.',
    url: 'https://eovolt.com/'
  },
  {
    img: '/images/soundhub.png',
    title: 'SoundHub',
    position: 'Lead Developer',
    description: 'PWA: Listen to your favorite songs, build playlists, and chat with people in real-time.',
    url: 'https://soundhub.alexm.club'
  },
  {
    img: '/images/gbmedia.png',
    title: 'GBMedia Platform',
    position: 'Software Engineer',
    description: 'Multi-studio management platform built with Laravel Tenancy for multi-database domain-driven architecture.',
    url: 'https://laravel.gbmediagroup.com/public/login'
  },
  {
    img: '/images/github.png',
    title: 'GitHub Repositories',
    description: 'More projects with various technologies available on my GitHub profile.',
    url: 'https://github.com/AlexanderM1927'
  }
]
export default {
  name: 'Projects',
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
// ── Page hero (shared pattern) ─────────────────────────────────────
.page-hero {
  background: #ffffff;
  padding: 9rem 5rem 4rem;
  border-bottom: 1px solid #f3f4f6;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -150px;
    right: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(46, 204, 113, 0.07) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  &__content {
    max-width: 700px;
  }
}

.page-eyebrow {
  display: inline-block;
  color: $green;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: $text-primary;
  line-height: 1.15;
  margin: 0 0 1.25rem;
}

.text-green { color: $green; }

.page-subtitle {
  font-size: 1.05rem;
  line-height: 1.75;
  color: $text-secondary;
  max-width: 560px;
  margin: 0;
}

// ── Projects grid ──────────────────────────────────────────────────
.projects-section {
  background: #f9fafb;
  padding: 4rem 5rem;
}

.projects-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.project-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #f3f4f6;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
    border-color: $green;

    .project-card__overlay {
      opacity: 1;
    }
  }

  &__image {
    height: 180px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: rgba(46, 204, 113, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &__view {
    color: white;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.02em;
  }

  &__body {
    padding: 1.5rem;
  }

  &__badge {
    display: inline-block;
    background: $green-light;
    color: #16a34a;
    border: 1px solid #bbf7d0;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.2rem 0.7rem;
    border-radius: 2rem;
    margin-bottom: 0.75rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 700;
    color: $text-primary;
    margin: 0 0 0.5rem;
  }

  &__desc {
    font-size: 0.875rem;
    color: $text-secondary;
    line-height: 1.6;
    margin: 0;
  }
}

// ── Mobile ─────────────────────────────────────────────────────────
@media only screen and (max-width: $responsiveSize) {
  .page-hero {
    padding: 8rem 1.5rem 3rem;
  }

  .projects-section {
    padding: 3rem 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
