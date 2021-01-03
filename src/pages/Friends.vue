<template>
  <div>
    <h1 class="friends-title text-center space-bottom">Friends</h1>

    <div class="friends-container text-center space-bottom">
      <a
        class="btn"
        v-for="friend in friends"
        :key="friend.id"
        :href="friend.link"
        target="_blank"
        :style="friend.style"
        ><g-image class="avatar" alt="avatar" :src="friend.avatar" blur="5" />
        <span>{{ friend.id }}</span></a
      >
      <p class="note">
        * I don't accept friend link requests from someone I don't know.
      </p>
    </div>

    <div class="post-comments">
      <div id="disqus_thread" />
    </div>
  </div>
</template>

<script>
import DisqusJS from 'disqusjs'

export default {
  metaInfo: {
    title: 'Friends',
  },
  data() {
    return {
      friends: [
        {
          id: '@moliam',
          link: 'https://moliam.space/',
          avatar: 'http://backgroundimg.oss-cn-shenzhen.aliyuncs.com/9_ball3_4k.jpg\n',
          style: 'color: #fff; background-color: #473922',
        }
      ],
    }
  },
  mounted() {
    // Initialize post comment by DisqusJS
    if (process.env.NODE_ENV === 'production') {
      const disqusjs = new DisqusJS({
        shortname: 'spencerwoo',
        siteName: "Spencer's Blog",
        identifier: 'spencer-blog-guestbook',
        apikey:
          'F6hHeFWtfmWW5n4RVf4hjgazRj8y0ERfQdeQPIGKr79yajw6glnmTqrgYHTC8XaS',
        admin: 'spencerwoo',
        adminLabel: 'Admin',
      })
    }
  },
}
</script>

<style lang="scss">
.friends-container {
  max-width: var(--content-width);
  margin-left: auto;
  margin-right: auto;

  .btn {
    margin: 0.3em 0.6em 0.3em 0;
    text-decoration: none;
    padding: 0.5em;
    border-radius: var(--radius);
    display: inline-block;
    overflow: hidden;
    position: relative;

    .avatar {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 48px;
      height: 48px;
      border-radius: var(--radius);
      background-color: #fff;
      transform: rotate(20deg) translate(-15%, 0%);
    }

    span {
      margin-left: 2.6em;
    }
  }

  .note {
    margin: calc(var(--space) / 2) 0;
    font-size: 0.9em;
    opacity: 0.8;
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  max-width: var(--content-width);
  margin: 0 auto;
  font-family: var(--base-font-family);
}
</style>
