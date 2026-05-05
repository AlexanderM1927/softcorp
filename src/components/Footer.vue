<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__brand">
        <p class="footer__logo">
          Alexander<span>M</span>
          <a
            href="https://instagram.com/alexanderm.co"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__instagram"
            aria-label="Instagram"
          >
            <q-icon name="fa-brands fa-instagram" size="1.2em" />
          </a>
          <a
            href="https://github.com/alexanderm1927"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__github"
            aria-label="GitHub"
          >
            <q-icon name="fa-brands fa-github" size="1.2em" />
          </a>
        </p>
        <p class="footer__tagline">{{ $t('footer.tagline') }}</p>
      </div>
      <div class="footer__copy">
        <p>{{ $t('footer.rights') }}</p>
      </div>
    </div>
  </div>
</template>
