<script setup>
import Footer from './components/parts/Footer.vue'
import Navigation from './components/parts/Navigation.vue'
</script>

<template>
  <div
    class="m-0 font-sans antialiased font-normal text-left leading-default text-base dark:bg-slate-950 bg-gray-50 text-slate-500 dark:text-white/80">
    <!-- sidenav -->
    <Navigation />

    <div class="">
      <div class="container ">
        <!-- Route View -->
        <RouterView class=" mt-5 " :key="$route.fullPath" />
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped></style>