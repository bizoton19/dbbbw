<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        By Adrien Salomon
      </h1>
      <p class=".uk-text-lead">Business | Investor | Finance geek | Podcaster</p>
      <div class="links">
        <a
          href="https://www.instagram.com/dontbebrokebewoke/"
          uk-icon="icon: instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Instagram
        </a>
        <a
          href="https://nuxtjs.org/"
          uk-icon="icon: twitter"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Twitter
        </a>
        <a
          href="https://nuxtjs.org/"
          uk-icon="icon: facebook"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Facebook
        </a>
        <a
          href="/blog"
          uk-icon="icon: pencil"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Blog
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/dontbebrokebewoke/id1532142721"
          uk-icon="icon: microphone"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Podcast
        </a>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
