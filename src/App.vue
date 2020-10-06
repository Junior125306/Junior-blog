<template>
  <div id="app">
    <div id="nprogress-container">
      <header class="header">
        <div class="header__left">
          <Logo v-if="showLogo"/>
        </div>
        <div class="header__right">
          <ToggleTheme/>
        </div>
      </header>
    </div>

    <main class="main">
      <router-view :key="$route.path"/>
    </main>

    <footer class="footer">
      <div class="footer__copyright">
        Copyright ©2019 - {{ new Date().getFullYear() }}.
      </div>
      <div class="footer__links">
        Deployed on
        <svg
            t="1600607602460"
            style="vertical-align: -.15em;"
            class="svg-inline--fa fa-github fa-w-16"
            viewBox="0 0 1677 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3889"
            width="16"
            height="16"
        >
          <path
              d="M673.235968 866.406382l-371.649382-80.841101a78.735785 78.735785 0 0 1-60.871107-73.350447c-0.152559-1.037402-0.152559-399.384638 0-400.399156a78.743413 78.743413 0 0 1 60.871107-73.373331L673.235968 157.593618 713.114933 0h-433.115469C128.096303 0 4.874265 122.833012 4.279285 274.606497v474.764122c0.594981 151.773485 123.817018 274.629381 275.720179 274.629381h433.115469l-39.878965-157.593618zM989.529257 866.406382l371.58073-80.841101a78.705273 78.705273 0 0 0 60.871107-73.350447c0.175443-1.037402 0.175443-399.384638 0-400.399156a78.712901 78.712901 0 0 0-60.871107-73.373331L989.529257 157.593618 949.642663 0h433.07733c151.903161 0 275.140454 122.833012 275.697295 274.606497v474.764122c-0.556841 151.773485-123.794135 274.629381-275.697295 274.629381h-433.07733l39.886594-157.593618z"
              fill="#2c2c2c"
              p-id="3890"
          ></path>
          <path
              d="M673.235968 492.277914h316.293289v39.41366H673.235968z"
              fill="#2c2c2c"
              p-id="3891"
          ></path>
        </svg>
        <a href="https://www.aliyun.com/" target="_blank">
          阿里云
        </a>
        <font-awesome :icon="['fas', 'heart']"/>
        <a href="http://beian.miit.gov.cn/">豫ICP备19042490号-1</a>
      </div>
      <div class="footer__links"></div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: {default: true},
  },
  components: {
    Logo,
    ToggleTheme,
  },
}
</script>

<style lang="scss">
a:link {
  text-decoration: none;
}

#app {
  scroll-behavior: smooth;
}

#nprogress-container {
  display: flex;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  background-color: rgba(255, 255, 255, 0.6);
  background-color: rgba($color: var(--bg-color-rgb), $alpha: 0.6);
  backdrop-filter: blur(32px);
  z-index: 10;

  @media screen and (min-width: 1300px) {
    // Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__left,
  &__right {
    display: flex;
    align-items: center;
    font-family: var(--base-font-family);
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  // max-width: var(--content-width);
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space) 15px var(--space);
  text-align: center;
  line-height: 1.8;
  font-size: 0.9em;
  font-family: var(--base-font-family);

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }

  svg {
    margin-right: 0.2rem;
  }

  #rss-stats {
    padding-top: 0.35rem;

    a {
      margin-right: 0.35rem;
    }
  }
}
</style>
