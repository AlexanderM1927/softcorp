<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section animate__animated animate__fadeIn">
      <div class="hero-container">
        <div class="hero-left">
          <div class="hero-eyebrow">
            <span class="eyebrow-dot"></span>
            {{ $t('index.available') }}
          </div>
          <h1 class="hero-title">
            {{ $t('index.heroTitle') }}<br>
            <span class="hero-accent">{{ $t('index.heroAccent') }}</span><br>
            {{ $t('index.heroTrust') }}
          </h1>
          <p class="hero-description">
            {{ $t('index.heroDesc') }}
          </p>
          <div class="hero-actions">
            <button class="btn-primary" @click="goTo('projects')">{{ $t('index.viewPortfolio') }}</button>
            <button class="btn-outline" @click="goTo('about')">{{ $t('index.aboutMe') }}</button>
          </div>
          <div class="hero-stack">
            <span class="stack-badge">Vue.js</span>
            <span class="stack-badge">Laravel</span>
            <span class="stack-badge">Node.js</span>
            <span class="stack-badge">Shopify</span>
          </div>
        </div>
        <div class="hero-right">
          <div class="code-card">
            <div class="code-card__header">
              <span class="code-dot code-dot--red"></span>
              <span class="code-dot code-dot--yellow"></span>
              <span class="code-dot code-dot--green"></span>
              <span class="code-card__title">developer.js</span>
            </div>
            <div class="code-card__body">
              <p><span class="c-kw">const</span> <span class="c-var">developer</span> = {</p>
              <p class="code-indent"><span class="c-key">name</span>: <span class="c-str">'AlexanderM'</span>,</p>
              <p class="code-indent"><span class="c-key">role</span>: <span class="c-str">'Full Stack Dev'</span>,</p>
              <p class="code-indent"><span class="c-key">experience</span>: <span class="c-num">{{ $t('years') }}</span>,</p>
              <p class="code-indent"><span class="c-key">skills</span>: [</p>
              <p class="code-indent2"><span class="c-str">'Vue.js'</span>, <span class="c-str">'Laravel'</span>,</p>
              <p class="code-indent2"><span class="c-str">'Node.js'</span>, <span class="c-str">'PHP'</span>,</p>
              <p class="code-indent2"><span class="c-str">'MySQL'</span>, <span class="c-str">'Shopify'</span></p>
              <p class="code-indent">],</p>
              <p class="code-indent"><span class="c-key">openToWork</span>: <span class="c-bool">true</span></p>
              <p>};</p>
            </div>
          </div>
          <div class="hero-stat-card hero-stat-card--1">
            <span class="stat-number">{{ $t('years') }}+</span>
            <span class="stat-label">Years Exp.</span>
          </div>
          <div class="hero-stat-card hero-stat-card--2">
            <span class="stat-number">15+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="hero-blob hero-blob--1"></div>
          <div class="hero-blob hero-blob--2"></div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section w-100">
      <div class="experience-wrapper">
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
.code-card {
  background: #1a1a2e;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  width: 380px;
  position: relative;
  z-index: 2;

  &__header {
    background: #252542;
    padding: 0.875rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__title {
    color: #8892a4;
    font-size: 0.8rem;
    font-family: monospace;
    margin-left: 0.5rem;
  }

  &__body {
    padding: 1.5rem;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.8;
    p { margin: 0; color: #a9b7c6; }
    .code-indent { padding-left: 1.5rem; }
    .code-indent2 { padding-left: 3rem; }
  }
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  &--red    { background: #ff5f57; }
  &--yellow { background: #febc2e; }
  &--green  { background: #28c840; }
}

.c-kw   { color: #cc99cd; }
.c-var  { color: #6fc1ff; }
.c-key  { color: #f07178; }
.c-str  { color: #c3e88d; }
.c-num  { color: #f78c6c; }
.c-bool { color: #ff9cac; }
</style>
