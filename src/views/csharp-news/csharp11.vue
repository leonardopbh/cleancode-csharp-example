<template>
	<main>
		<div class="max-w-7xl mx-auto pb-8 sm:px-6 lg:px-8">
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="shadow overflow-hidden sm:rounded-lg mt-6">

                        <!-- NOVO ITEM -->
                     	 <div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
									Quebra de linha na interpolação de strings
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    No C# podemos utilizar o caractere $ antes de uma string para permitir sua interpolação. O mesmo acontece com a necessidade de quebra de linhas dentro da string que demanda o caractere @ antes da mesma.
								</h2>
								<div class="grid grid-cols-1 gap-1">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
var inter = $"eu sou uma string {valor}";
var quebra = @"eu posso
                quebrar linhas";
var osDois = $@"eu interpolo {valores} e
                ainda quebro linhas";
                                    				</code>
                                			</pre>
										</div>
									</div>
								</div>
							</div>
                        <!-- FIM DO ITEM -->

						   <!-- NOVO ITEM -->
                     	 <div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
									List patterns
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    Outra mudança bem-vinda é o List Patterns ou padrões de listas, algo similar ao que temos em outras linguagens como JavaScript e que nos permite criar padrões utilizando (...)
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
int[] arr1 = { 1, 2, 5, 6, 7, 8, 9, 10 };

public static int CheckSwitch(int[] values)
    => values switch
    {
        [1, 2, .., 10] => 1, // Vai até o valor 10
        [1, 2] => 2,
        [1, _] => 3,
        [1, ..] => 4, // Vai do 1 ao fim da lista
        [..] => 50 // Vale para toda a lista
    };
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
// Ainda podemos capturar parte de uma lista, como mostrado abaixo utilizando var middle que no caso recebeu a fatia da lista.\
public static string CaptureSlice(int[] values)
    => values switch
    {
        [1, .. var middle, _] => $"Middle {String.Join(", ", middle)}",
        [.. var all] => $"All {String.Join(", ", all)}"
    };
                                    				</code>
                                			</pre>
										</div>
									</div>
								</div>
							</div>
                        <!-- FIM DO ITEM -->

  					 <!-- NOVO ITEM -->
                     	 <div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
									Null Checking
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    Outra mudança é a checagem de nulos, que já havia sido melhorada nas versões anteriores com uso do is, como mostrado abaixo:
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
// ANTES														
public static void M(string s)
{
    if (s is null)
    {
        throw new ArgumentNullException(nameof(s));
    }
    // Body of the method
}
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
// DEPOIS
public static void M(string s!!)
{
    // Body of the method
}
                                    				</code>
                                			</pre>
										</div>
									</div>
								</div>
							</div>
                        <!-- FIM DO ITEM -->

                        </div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "CSharp11"
};
</script>