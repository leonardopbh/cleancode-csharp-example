<template>
	<main>
		<div class="max-w-7xl mx-auto pb-8 sm:px-6 lg:px-8">
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div
						class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
					>
						<div
							class="shadow overflow-hidden sm:rounded-lg mt-6"
						>
							<div
								v-for="cleanCode in listCleanCode"
								:key="cleanCode.id"
								class="cursor-pointer rounded-md"
							>
							 <div v-if="cleanCode.id  >= 0">
								<h2 class="text-gray-500 font-bold text-2xl pl-5 inline-flex">
									#{{ cleanCode.id }}
								</h2>
								<h2
									class="text-white text-3xl font-bold pr-5 pl-2 inline-flex"
									v-html="cleanCode.title"
								></h2>
								<h2
									class="text-white text-base pr-5 pl-5 opacity-75"
									v-html="cleanCode.subtitle"
								></h2>

								<div class="px-6">
									<div class="grid grid-cols-2 gap-2">
										<div>
											
											<div v-highlight>
												<pre>
													<label class="float-left text-gray-600 hover:underline">#{{ cleanCode.id }} Código ruim</label>
                              				<code class="language-csharp"> {{ cleanCode.badCode != "" ? cleanCode.badCode : noCodeExampleWarnning }}</code>
                            			</pre>
											</div>
										</div>
										<div>
											<div v-highlight>
												<pre>
													<label class="float-left text-gray-600 hover:underline">#{{ cleanCode.id }} Código melhorado</label>
                              				<code class="language-csharp"> {{ cleanCode.goodCode != "" ? cleanCode.goodCode : noCodeExampleWarnning }}</code>
                            			</pre>
											</div>
										</div>
									</div>
								</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import hljs from "highlight.js";
import Vue from "vue";
import vueHljs from "vue-hljs";
import "vue-hljs/dist/style.css";
Vue.use(vueHljs, { hljs });

export default {
	name: "ListCleanCodeExamples",
	components: {	
	},
	data() {
		return {
			listCleanCode: [],
			noCodeExampleWarnning: "Em breve código de exemplo."
		};
	},
	created() {
		import(`../data/${this.$route.params.section}.json`).then((data) => {
			this.listCleanCode = data;
		});
	},
	methods: {
	}
};
</script>