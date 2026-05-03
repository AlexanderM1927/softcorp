<template>
  <div class="experience-content">
    <div class="experience-header">
      <span class="experience-eyebrow">{{ $t('experience.eyebrow') }}</span>
      <h2 class="experience-title">{{ $t('experience.title') }}</h2>
    </div>
    <div class="row experience-cards">
      <div class="col-md-3 col-xs-12">
        <div class="exp-card">
          <img src="/images/backend.png" class="exp-card__img">
          <h3 class="exp-card__title">{{ $t('experience.backend.title') }}</h3>
          <p class="exp-card__stack"><b>{{ $t('experience.backend.stack') }}</b></p>
          <div class="exp-card__divider"></div>
          <p class="exp-card__desc">{{ $t('experience.backend.desc') }}</p>
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="exp-card">
          <img src="/images/frontend.png" class="exp-card__img">
          <h3 class="exp-card__title">{{ $t('experience.frontend.title') }}</h3>
          <p class="exp-card__stack"><b>{{ $t('experience.frontend.stack') }}</b></p>
          <div class="exp-card__divider"></div>
          <p class="exp-card__desc">{{ $t('experience.frontend.desc') }}</p>
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="exp-card">
          <img src="/images/ecommerce.png" class="exp-card__img">
          <h3 class="exp-card__title">{{ $t('experience.ecommerce.title') }}</h3>
          <p class="exp-card__stack"><b>{{ $t('experience.ecommerce.stack') }}</b></p>
          <div class="exp-card__divider"></div>
          <p class="exp-card__desc">{{ $t('experience.ecommerce.desc') }}</p>
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="exp-card">
          <img src="/images/server.png" class="exp-card__img">
          <h3 class="exp-card__title">{{ $t('experience.server.title') }}</h3>
          <p class="exp-card__stack"><b>{{ $t('experience.server.stack') }}</b></p>
          <div class="exp-card__divider"></div>
          <p class="exp-card__desc">{{ $t('experience.server.desc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
