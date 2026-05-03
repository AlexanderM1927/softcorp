<template>
  <q-page>
    <section class="page-hero animate__animated animate__fadeIn">
      <div class="page-hero__content">
        <span class="page-eyebrow">{{ $t('about.eyebrow') }}</span>
        <h1 class="page-title">{{ $t('about.title') }}<br><span class="text-green">{{ $t('about.titleAccent') }}</span></h1>
        <p class="page-subtitle">{{ $t('about.subtitle') }}</p>
      </div>
    </section>

    <section class="about-section">
      <div class="about-container">
        <div class="about-bio">
          <div class="about-block">
            <h2 class="about-block__title">{{ $t('about.storyTitle') }}</h2>
            <p>{{ $t('about.storyP1') }}</p>
            <p>{{ $t('about.storyP2') }}</p>
          </div>
          <div class="about-block">
            <h2 class="about-block__title">{{ $t('about.frontendTitle') }}</h2>
            <p>{{ $t('about.frontendDesc') }}</p>
          </div>
          <div class="about-block">
            <h2 class="about-block__title">{{ $t('about.backendTitle') }}</h2>
            <p>{{ $t('about.backendDesc') }}</p>
          </div>
          <div class="about-block">
            <h2 class="about-block__title">{{ $t('about.devopsTitle') }}</h2>
            <p>{{ $t('about.devopsDesc') }}</p>
          </div>
          <div class="about-cta">
            <p>{{ $t('about.ctaText') }}</p>
            <a href="https://wa.me/573164510766?text=Hi%20Im%20in%20AlexanderM.dev" target="_blank" class="about-cta__btn">{{ $t('about.ctaBtn') }}</a>
          </div>
        </div>

        <div class="about-sidebar">
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-item__number">5+</span>
              <span class="stat-item__label">{{ $t('about.yearsLabel') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-item__number">15+</span>
              <span class="stat-item__label">{{ $t('about.projectsLabel') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-item__number">7+</span>
              <span class="stat-item__label">{{ $t('about.vueLabel') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-item__number">5+</span>
              <span class="stat-item__label">{{ $t('about.laravelLabel') }}</span>
            </div>
          </div>
          <div class="skills-card">
            <h3 class="skills-card__title">{{ $t('about.techStack') }}</h3>
            <div class="skills-grid">
              <span class="skill-tag" v-for="skill in skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
          <div class="availability-card">
            <div class="availability-card__dot"></div>
            <div>
              <p class="availability-card__status">{{ $t('about.availableStatus') }}</p>
              <p class="availability-card__sub">{{ $t('about.availableSub') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'About',
  setup () {
    return {
      skills: [
        'JavaScript', 'TypeScript', 'PHP', 'Vue.js', 'Nuxt',
        'Laravel', 'Node.js', 'Quasar', 'HTML', 'SCSS',
        'MySQL', 'MongoDB', 'Shopify', 'Strapi', 'Jenkins',
        'Ubuntu', 'Git', 'Jest', 'Docker'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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

  &__content { max-width: 700px; }
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

.about-section {
  background: #f9fafb;
  padding: 4rem 5rem;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 3rem;
  align-items: start;
}

.about-bio {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-block {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

  &__title {
    font-size: 1.1rem;
    font-weight: 700;
    color: $text-primary;
    margin: 0 0 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 1.1em;
      background: $green;
      border-radius: 2px;
    }
  }

  p {
    font-size: 0.95rem;
    line-height: 1.75;
    color: $text-secondary;
    margin: 0 0 0.75rem;

    &:last-child { margin: 0; }
  }
}

.about-cta {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;

  p {
    font-size: 0.95rem;
    color: $text-secondary;
    margin: 0;
  }

  &__btn {
    display: inline-block;
    background: $green;
    color: white;
    padding: 0.75rem 1.75rem;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s;

    &:hover {
      filter: brightness(0.88);
      box-shadow: 0 6px 20px rgba(46, 204, 113, 0.35);
      transform: translateY(-2px);
    }
  }
}

.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: sticky;
  top: 6rem;
}

.about-stats {
  background: white;
  border-radius: 1rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

.stat-item {
  padding: 1.5rem;
  text-align: center;
  border-right: 1px solid #f3f4f6;
  border-bottom: 1px solid #f3f4f6;

  &:nth-child(even)      { border-right: none; }
  &:nth-last-child(-n+2) { border-bottom: none; }

  &__number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: $green;
    line-height: 1;
  }

  &__label {
    display: block;
    font-size: 0.78rem;
    color: $text-secondary;
    font-weight: 500;
    margin-top: 0.35rem;
    line-height: 1.3;
  }
}

.skills-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

  &__title {
    font-size: 1rem;
    font-weight: 700;
    color: $text-primary;
    margin: 0 0 1rem;
  }
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: $green-light;
  color: #16a34a;
  border: 1px solid #bbf7d0;
  padding: 0.3rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.78rem;
  font-weight: 600;
}

.availability-card {
  background: $text-primary;
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &__dot {
    width: 12px;
    height: 12px;
    min-width: 12px;
    background: $green;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.25);
    animation: pulse-dot 2s infinite;
  }

  &__status {
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0 0 0.2rem;
  }

  &__sub {
    color: #8892a4;
    font-size: 0.78rem;
    margin: 0;
  }
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.25); }
  50%       { box-shadow: 0 0 0 8px rgba(46, 204, 113, 0.1); }
}

@media only screen and (max-width: $responsiveSize) {
  .page-hero {
    padding: 8rem 1.5rem 3rem;
  }

  .about-section {
    padding: 3rem 1.5rem;
  }

  .about-container {
    grid-template-columns: 1fr;
  }

  .about-sidebar {
    position: static;
  }
}
</style>
