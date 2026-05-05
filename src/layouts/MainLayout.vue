<template>
  <q-layout view="lHh Lpr lFf">
    <div id="main-header" class="main-header header-transparent animate__animated animate__slideInLeft">
      <div class="main-header__content">
        <div class="main-header__title" @click="goTo('/')">Alexander<span>M</span></div>
        <div class="main-header__links only-desktop">
          <li v-for="(link, index) in links" :key="index"><a class="nav-link" @click="goTo(link.href)">{{ $t(link.titleKey) }}</a></li>
        </div>
        <div class="main-header__actions only-desktop">
          <div class="lang-toggle">
            <button :class="['lang-btn', { active: currentLocale === 'en' }]" @click="setLocale('en')">EN</button>
            <span class="lang-sep">|</span>
            <button :class="['lang-btn', { active: currentLocale === 'es' }]" @click="setLocale('es')">ES</button>
          </div>
          <button class="main-header__cta" @click="goTo('about')">{{ $t('nav.contactMe') }}</button>
        </div>
        <div class="mobile-right only-mobile">
          <div class="lang-toggle">
            <button :class="['lang-btn', { active: currentLocale === 'en' }]" @click="setLocale('en')">EN</button>
            <span class="lang-sep">|</span>
            <button :class="['lang-btn', { active: currentLocale === 'es' }]" @click="setLocale('es')">ES</button>
          </div>
          <div @click="openMobileMenu" class="main-header__burger">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
            <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor" />
          </svg>
          </div>
        </div>
        <div id="burger-menu" class="header__menu--mobile only-mobile">
          <div class="burger-menu__container">
              <div class="burger-menu__header">
                  <p class="text-h6">{{ $t('nav.menu') }}</p>
                  <div class="burger-menu__close">
                    <svg @click="closeMobileMenu" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4978 10.4643L20.7384 2.22366C21.2616 1.70044 21.1308 0.78482 20.6076 0.39241C20.0844 0 19.4304 0 18.9071 0.39241L10.6665 8.63302L2.42593 0.39241C1.90272 -0.130803 1.1179 -0.130803 0.594684 0.39241C0.0714707 0.915623 0.0714707 1.70044 0.594684 2.22366L8.70449 10.4643L0.463881 18.7049C-0.0593327 19.2281 -0.190136 20.0129 0.333077 20.5361C0.856291 21.0593 1.64111 21.1901 2.16432 20.6669L2.29513 20.5361L10.5357 12.2955L18.7763 20.5361C19.2996 21.0593 20.2152 20.9285 20.6076 20.4053C21 19.8821 21 19.2281 20.6076 18.7049L12.4978 10.4643Z" fill="#1a1a2e"/>
                    </svg>
                  </div>
              </div>
              <ul>
                <li v-for="link in links" :key="link.titleKey">
                  <a @click="goTo(link.href)"><q-icon :name="link.icon" />{{ $t(link.titleKey) }}</a>
                </li>
              </ul>
          </div>
      </div>
      </div>
    </div>

    <div id="menu-overlay" class="menu-overlay" @click="closeMobileMenu"></div>
    <q-page-container>
      <router-view />
      <a href="https://wa.me/573164510766?text=Hi%20I%20want%20to%20talk%20with%20you" class="floating" target="_blank">
        <q-icon name="fa-brands fa-whatsapp" />
      </a>
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import 'animate.css'
import { links } from '../utils/links'
import { functions } from '../utils/functions.js'
import Footer from 'src/components/Footer.vue'

export default defineComponent({
  name: 'MainLayout',
  mixins: [functions],
  components: { Footer },
  setup () {
    const { locale } = useI18n()
    const currentLocale = computed(() => locale.value)
    function setLocale (lang) {
      locale.value = lang
    }
    return {
      links,
      currentLocale,
      setLocale
    }
  },
  watch: {
    $route () {
      this.closeMobileMenu()
    }
  },
  mounted () {
    setTimeout(() => {
        this.handleScroll()
        window.addEventListener('scroll', () => {
          this.handleScroll()
        })
    }, 200)
  },
  methods: {
    openMobileMenu () {
      if (document.getElementById('burger-menu').style.left == '-100%' || document.getElementById('burger-menu').style.left === '') {
        document.getElementById('burger-menu').style.left = '0'
        document.getElementById('menu-overlay').style.opacity = '1'
        document.getElementById('menu-overlay').style.pointerEvents = 'all'
      } else {
        this.closeMobileMenu()
      }
    },
    closeMobileMenu () {
      document.getElementById('burger-menu').style.left = '-100%'
      document.getElementById('menu-overlay').style.opacity = '0'
      document.getElementById('menu-overlay').style.pointerEvents = 'none'
    },
    changeHeaderPerBlack () {
      document.getElementById('main-header')?.classList.replace('header-transparent', 'header-secondary')
    },
    changeHeaderPerDefault () {
      document.getElementById('main-header')?.classList.replace('header-secondary', 'header-transparent')
    },
    handleScroll () {
      const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (bodyScrollTop > 70) {
        this.changeHeaderPerBlack()
      } else {
        this.changeHeaderPerDefault()
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.header-transparent {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.header-secondary {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.main-header {
  position: fixed;
  z-index: 10;
  width: 100%;
  transition: box-shadow 0.3s, border-color 0.3s;
}

#burger-menu {
  width: 82%;
  max-width: 320px;
  left: -100%;
  transition: all 0.3s ease;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.main-header__title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a2e;
  cursor: pointer;
  span { color: $green; }
}

@media only screen and (min-width: $responsiveSize) {
  .main-header__content {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 1.25rem 5rem;
    justify-content: space-between;
  }
}

@media only screen and (max-width: $responsiveSize) {
  .main-header__content {
    display: flex;
    align-items: center;
    padding: 1.25rem 1.5rem;
    justify-content: space-between;
  }
}

.main-header__links {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;

  li {
    margin-right: 1.5rem;
  }
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a2e;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover { color: $green; }
}

.main-header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-right {
  display: none;

  @media only screen and (max-width: $responsiveSize) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.lang-btn {
  background: none;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  color: #888;
  cursor: pointer;
  padding: 0.25rem 0.1rem;
  letter-spacing: 0.05em;
  transition: color 0.2s;

  &:hover { color: #1a1a2e; }
  &.active { color: $green; }
}

.lang-sep {
  font-size: 0.75rem;
  color: #ccc;
  pointer-events: none;
}

.main-header__cta {
  background: $green;
  color: white;
  border: none;
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    filter: brightness(0.88);
    box-shadow: 0 6px 20px rgba(46, 204, 113, 0.35);
  }
}

.main-header__burger {
  color: #1a1a2e;
  opacity: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    width: 1rem;
    height: 1.188rem;
    display: block;
  }
}
</style>
