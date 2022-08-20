<template>
	<main>
		<div class="max-w-7xl mx-auto pb-8 sm:px-6 lg:px-8">
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="shadow overflow-hidden sm:rounded-lg mt-6">

 					 <!-- SECTION -->
                            <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex"></h2>  
							<h2 class="text-white text-base pr-5 pl-5 opacity-75">
								
							</h2>  
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">

                                    </code>
                                </pre>
                              </div>
                        </div>
                      <!-- END SECTION -->
					  
                        <!-- SECTION -->
                            <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">stackalloc </h2>
							<h2 class="text-white text-base pr-5 pl-5 opacity-75">
								stack e heap. A stack é onde variáveis locais (de funções e métodos) e parâmetros de funções são armazenados e todo o resto é armazenado na heap. Quando se cria um objeto, ele em si é armazenado na heap e sua referência é armazenada na stack. Com a utilização de stackalloc você estará armazenando os valores diretamente na stack (e não na heap). E o acesso à stack é um pouco mais rápido do que à heap.
							</h2>   
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
int length = 3;
Span<int> numbers = stackalloc int[length];
for (var i = 0; i &lt; length; i++)
{
    numbers[i] = i;
}
                                    </code>
                                </pre>
                              </div>
                        </div>
                      <!-- END SECTION -->

					     <!-- SECTION -->
                            <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
								Aggregate	
							</h2>  
							<h2 class="text-white text-base pr-5 pl-5 opacity-75">
O exemplo de código a seguir demonstra como usar o Aggregate para aplicar uma função de acumulador e um seletor de resultado.
							</h2>  
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
string[] fruits = { "apple", "mango", "orange", "passionfruit", "grape" };
// Determine whether any string in the array is longer than "banana".
// Determine se qualquer string na matriz é maior que "banana".
string longestName = fruits.Aggregate("banana", (longest, next) =>
                        next.Length > longest.Length ? next : longest,
			// Return the final result as an upper case string.
                   	 fruit => fruit.ToUpper());
                                    </code>
                                </pre>
                              </div>
                        </div>
                      <!-- END SECTION -->

 					 <!-- SECTION -->
                            <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">ThenBy</h2>  
							<h2 class="text-white text-base pr-5 pl-5 opacity-75">
								Executa uma ordenação posterior dos elementos em uma sequência em ordem crescente usando um comparador especificado
							</h2>  
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
string[] fruits = { "grape", "passionfruit", "banana", "mango",
                      "orange", "raspberry", "apple", "blueberry" };

// Sort the strings first by their length and then
//alphabetically by passing the identity selector function.
IEnumerable<string> query =
    fruits.OrderBy(fruit => fruit.Length).ThenBy(fruit => fruit);

foreach (string fruit in query)
{
    Console.WriteLine(fruit);
}

/*
    This code produces the following output:

    apple
    grape
    mango
    banana
    orange
    blueberry
    raspberry
    passionfruit
*/
                                    </code>
                                </pre>
                              </div>
                        </div>
                      <!-- END SECTION -->

            
                        </div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "Tricks"
};
</script>