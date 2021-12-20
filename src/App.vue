<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <!-- <div class="flex-shrink-0 pt-12 pb-5 text-center">
        <router-link class="font-semibold text-gray-700 hover:underline" to="/">Início</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" :to="{ path: '/cleancode/class/', reload: true }">Classes</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" :to="{ path: '/cleancode/variables/', reload: true }">Variaveis</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/cleancode/functions/">Funções</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/cleancode/objects-data/">Objetos e Dados</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/cleancode/interfaces/">Interfaces</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/cleancode/comments/">Comentários</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/cleancode/exception/">Exceção</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/cleancode/unit-test/">Testes Unitários</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/csharp-news/">Novidades C#</router-link>
    </div> -->

 <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link to="/" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
          Clean Code
        </router-link>
        <button class="text-white cursor-pointer bg-purple-900 text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <span class="fas fa-bars">Menu</span>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/class/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Classes</span>
            </router-link>
          </li>
          <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/variables/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Variaveis</span>
            </router-link>
          </li>
          <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/functions/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Funções</span>
            </router-link>
          </li>
          <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/objects-data/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Objetos e Dados</span>
            </router-link>
          </li>
          <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/interfaces/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Interfaces</span>
            </router-link>
          </li>
                    <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/comments/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Comentários</span>
            </router-link>
          </li>
                    <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/exception/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Exceção</span>
            </router-link>
          </li>
                    <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/cleancode/unit-test/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Testes Unitários</span>
            </router-link>
          </li>
                    <li class="nav-item">
             <router-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" :to="{ path: '/csharp-news/', reload: true }">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Novidades C#</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <portal-target name="modals"></portal-target>
    <router-view :key="$route.path" class="flex" />
  </div>

</template>
<style>

@tailwind base;
@tailwind components;
@tailwind utilities;

a {
  color: whitesmoke !important;
}

h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

#app {
 	background: linear-gradient(-45deg,#b8a2ed,#131219,#4a5568,#6649a0);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100%;
}

code {
  font-size: 0.8em !important;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% { 
		background-position: 0% 50%;
	}
}

.color-principal {
  color: #280068;
}

.tracking-wider {
    color: #8b62ef;
}
</style>

<script>
export default {
  name: "pink-navbar",
  data() {  
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>