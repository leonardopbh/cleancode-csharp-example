<template>
  <div
    id="app"
    class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200"
  >
    <div class="flex-shrink-0 py-12 text-center">
      <div>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          :key="$route.fullPath"
          to="/"
          >Início</router-link
        >
        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
         key="/cleancode/class/"
          :to="{ path: '/cleancode/class/', reload: true }"
          >Classes</router-link
        >
       <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          key="/cleancode/variables/"
          :to="{ path: '/cleancode/variables/', reload: true }"
          >Variaveis</router-link
        >
        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          key="/cleancode/functions/"
          to="/cleancode/functions/"
          >Funções</router-link
        >
         <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          key="/cleancode/interfaces/"
          to="/cleancode/interfaces/"
          >Interfaces</router-link
        >
      </div>
    </div>
    <portal-target name="modals"></portal-target>
    <router-view :key="$route.path" class="flex" />

    <div class="flex justify-center items-center flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>
      <a href="https://github.com/leonardopbh/cleancode-csharp-example"
        class="text-sm m-2 font-semibold text-gray-600 hover:underline">
        Ver este código no github
      </a>
    </div>
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
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.scale-70 {
  transform: scale(0.7);
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
