<template>
  <div>
    <h1 class="not-found-title text-center space-bottom" style="font-size: 3.5em">404</h1>
    <div class="not-found-container">
      <p class="description">
        <g-link to="/">🐷你迷路了</g-link>
      </p>
      <g-image
        alt="404 Not Found"
        class="not-found-bg"
        src="https://cdn.zz-yy.top/Images/404.webp"
        blur="5"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

  a:not(.button){
    color: #666;
    text-decoration:none;
  }

.not-found-container {
  text-align: center;
  max-width: var(--content-width);
  margin: 0 auto;

  .description {
    opacity: 0.8;
    font-size: 0.5em;
  }
}
</style>
