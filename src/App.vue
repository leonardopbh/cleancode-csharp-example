<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <div class="flex-shrink-0 pt-12 pb-5 text-center">
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
    </div>
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

#app {
 	background: linear-gradient(-45deg,#b8a2ed,#6649a0,#4a5568,#6649a0);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100%;
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