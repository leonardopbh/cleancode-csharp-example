<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <div class="flex-shrink-0 py-12 text-center">
      <div>
         <router-link class="font-semibold text-gray-700 hover:underline" :key="$route.fullPath" to="/">Início</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" :key="$route.fullPath" to="/cleancode">Funções</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" key="/cleancode/variables/" :to="{ path: '/cleancode/variables/', reload: true }">Variaveis</router-link>
         <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" key="/cleancode/functions/" to="/cleancode/functions/">Funções</router-link>
    
      </div>
      <div class="mt-2">
        <a href="https://github.com/" class="text-sm font-semibold text-gray-600 hover:underline">
         Ver este código no github
        </a>
      </div>
    </div>
    <portal-target name="modals"></portal-target>
    <router-view :key="$route.path" class="flex-1"/>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.color-principal {
  color: #280068;
}

.origin-top-right {
  transform-origin: top right;
}
.transition-all {
  transition-property: all;
}
.transition-fastest {
  transition-duration: 50ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.ease-out-quad {
  transition-timing-function: cubic-bezier(.25, .46, .45, .94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(.55, .085, .68, .53);
}
.scale-70 {
  transform: scale(.7);
}
.scale-100 {
  transform: scale(1);
}
.py-12 {
    padding-top: 3rem;
    padding-bottom: unset; 
}
.max-w-lg {
    max-width: unset; 
}
</style>
