<script setup lang="ts">
import { days } from "@/components/Days";
</script>

<template>
  <div id="app">
    <header>
      <!-- <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      /> -->

      <div><h1 class="green">Advent of Code 2021</h1></div>
      <div class="wrapper">
        <nav>
          <RouterLink v-for="id in days.keys()" :key="id" :to="`/day/${id}`"
            >Day {{ id }}</RouterLink
          >
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /* display: inline-block; */
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    /* display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2); */
  }

  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    /* top: -10px; */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    /* display: flex;
    place-items: flex-start;
    flex-wrap: wrap; */
    align-content: center;
    place-items: center;
  }

  nav {
    text-align: left;
    margin-left: 10rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 0;
  }
}
</style>
