<template>
	<div
		id="app"
		class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200"
	>
		<nav
			class="w-full 
        fixed z-50 
        flex flex-wrap
        items-center
        justify-between
        px-2
        py-3
        bg-gray-900
        mb-3
      "
		>
			<div
				class="
          container
          px-4
          mx-auto
          flex flex-wrap
          items-center
          justify-between
        "
			>
				<div
					class="
            w-full
            relative
            flex
            justify-between
            lg:w-auto
            px-4
            lg:static lg:block lg:justify-start
          "
				>
					<router-link
						to="/"
						class="
              text-sm
              font-bold
              leading-relaxed
              inline-block
              mr-4
              py-2
              whitespace-nowrap
              uppercase
              text-white
            "
						href="#pablo"
					>
						Clean Code
					</router-link>
					<button
						class="
              text-white
              cursor-pointer
              bg-purple-900
              text-xl
              leading-none
              px-3
              py-1
              border border-solid border-transparent
              rounded
              bg-transparent
              block
              lg:hidden
              outline-none
              focus:outline-none
            "
						type="button"
						v-on:click="toggleNavbar()"
					>
						<span class="fas fa-bars">Menu</span>
					</button>
				</div>
				<div
					v-bind:class="{ hidden: !showMenu, flex: showMenu }"
					class="lg:flex lg:flex-grow items-center"
				>
					<ul class="flex flex-col lg:flex-row list-none ml-auto">
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/class/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Classes</span
								>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/variables/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Variaveis</span
								>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/functions/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Funções</span
								>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/objects-data/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Objetos e Dados</span
								>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/interfaces/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Interfaces</span
								>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/comments/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Comentários</span
								>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/exception/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Exceção</span
								>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/cleancode/unit-test/', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Testes Unitários</span
								>
							</router-link>
						</li>

							<!-- <li class="nav-item">
							<router-link
								class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
								:to="{ path: '/csharp-tricks', reload: true }"
							>
								<i class="text-lg leading-lg text-white opacity-75" /><span
									class="ml-2"
									>Dicas</span
								>
							</router-link>
						</li> -->

						<li class="nav-item">
							<div class="dropdown">
								<a
									class="
                  px-3 dropbtn 
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-white
                  hover:opacity-75
                "
									href="#"
								>
									<i class="text-lg leading-lg text-white opacity-75" /><span
										class="ml-2"
										>Novidades C#</span
									>
								</a>

								<div class="dropdown-content">
									<router-link
										:to="{ path: '/csharp-news/v6', reload: true }"
										class="text-xs font-bold uppercase cursor-pointer"
										>C# 6</router-link
									>
									<router-link
										:to="{ path: '/csharp-news/v7', reload: true }"
										class="text-xs font-bold uppercase cursor-pointer"
										>C# 7</router-link
									>
									<router-link
										:to="{ path: '/csharp-news/v8', reload: true }"
										class="text-xs font-bold uppercase cursor-pointer"
										>C# 8</router-link
									>
									<router-link
										:to="{ path: '/csharp-news/v9', reload: true }"
										class="text-xs font-bold uppercase cursor-pointer"
										>C# 9</router-link
									>
									<router-link
										:to="{ path: '/csharp-news/v10', reload: true }"
										class="text-xs font-bold uppercase cursor-pointer"
										>C# 10</router-link
									>
									<router-link
										:to="{ path: '/csharp-news/v11', reload: true }"
										class="text-xs font-bold uppercase cursor-pointer"
										>C# 11</router-link
									>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<portal-target name="modals"></portal-target>
		<router-view :key="$route.path" class="flex mt-10" />
	</div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

a {
	color: whitesmoke !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

#app {
	background: linear-gradient(-45deg, #b8a2ed, #131219, #4a5568, #6649a0);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100%;
}

code {
	font-size: 0.8em !important;
}

.color-principal {
	color: #280068;
}

.dropbtn {
	border: none;
	cursor: pointer;
}

.dropdown {
	position: relative;
}

.dropdown-content {
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
}

.dropdown-content a {
	color: black !important;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
}

.dropdown-content a:hover {
	background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
	display: block;
}

.tracking-wider {
	color: #8b62ef;
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
</style>

<script>
export default {
	name: "pink-navbar",
	data() {
		return {
			showMenu: false,
		};
	},
	methods: {
		toggleNavbar: function() {
			this.showMenu = !this.showMenu;
		},
	},
};
</script>
