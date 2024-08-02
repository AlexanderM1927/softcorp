<template>
  <q-layout view="lHh Lpr lFf">
    <div class="main-header animate__animated animate__slideInLeft">
      <div class="main-header__content">
        <div class="main-header__title">
          AlexanderM
        </div>
        <div class="main-header__links only-desktop">
          <li v-for="(link, index) in links" :key="index"><a class="anchor__hover-underline" @click="goTo(link.href)">{{ link.title }}</a></li>
        </div>
        <div @click="openMobileMenu" class="main-header__burger only-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
            <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor" />
          </svg>
        </div>
        <div id="burger-menu" class="header__menu--mobile only-mobile">
          <div class="burger-menu__container">
              <div class="burger-menu__header">
                  <p class="text-h6">Menu</p>
                  <div class="burger-menu__close">
                    <svg @click="closeMobileMenu" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4978 10.4643L20.7384 2.22366C21.2616 1.70044 21.1308 0.78482 20.6076 0.39241C20.0844 0 19.4304 0 18.9071 0.39241L10.6665 8.63302L2.42593 0.39241C1.90272 -0.130803 1.1179 -0.130803 0.594684 0.39241C0.0714707 0.915623 0.0714707 1.70044 0.594684 2.22366L8.70449 10.4643L0.463881 18.7049C-0.0593327 19.2281 -0.190136 20.0129 0.333077 20.5361C0.856291 21.0593 1.64111 21.1901 2.16432 20.6669L2.29513 20.5361L10.5357 12.2955L18.7763 20.5361C19.2996 21.0593 20.2152 20.9285 20.6076 20.4053C21 19.8821 21 19.2281 20.6076 18.7049L12.4978 10.4643Z" fill="#0F3C4D"/>
                    </svg>
                  </div>
              </div>
              <ul>
                <li v-for="link in links" :key="link.key">
                  <a @click="goTo(link.href)"><q-icon :name="link.icon" />{{ link.title }}</a>
                </li>
              </ul>
          </div>
      </div>
      </div>
    </div>

    <q-page-container>
      <router-view />
      <a href="https://wa.me/573164510766?text=Hi%20Im%20in%20AlexanderM.dev" class="floating" target="_blank">
        <q-icon name="fa-brands fa-whatsapp" />
      </a>

    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import 'animate.css'
import { links } from '../utils/links'
import { functions } from '../utils/functions.js'

export default defineComponent({
  name: 'MainLayout',
  mixins: [functions],

  setup () {

    return {
      links: links
    }
  },
  methods: {
    openMobileMenu () {
      document.getElementById('burger-menu').classList.add('open')
    },
    closeMobileMenu () {
      document.getElementById('burger-menu').classList.remove('open')
    }
  }
})
</script>
<style lang="scss" scoped>
.main-header {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: fixed;
  z-index: 2;
  width: 100%;
}

.main-header__title {
  font-size: 2rem;
  color: white;
  cursor: pointer;
}
@media only screen and (min-width: $responsiveSize) {
  .main-header__content {
    display: flex;
    width: 100%;
    align-items: center;
    margin-left: 2rem;
  }
}
// mobile
@media only screen and (max-width: $responsiveSize) {
  .main-header__content {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-right: 2rem;
    justify-content: space-between;
  }
}
.main-header__links {
  justify-self: center;
  display: flex;
  color: white;
  margin-left: 2rem;
  list-style: none;
  font-size: 1rem;
  opacity: 0.7;
  li {
    margin-right: 1rem;
    a {
      text-decoration: none;
      color: white;
    }
  }
}

.main-header__burger {
  color: white;
  opacity: 1;
  place-items: center;
  & svg {
    width: 1rem;
    height: 1.188rem;
  }
}
</style>
