<template>
	<main>
		<div class="max-w-7xl mx-auto pb-8 sm:px-6 lg:px-8">
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div
						class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
					>
						<div class="shadow overflow-hidden sm:rounded-lg mt-6">
							<!-- NOVO ITEM -->
							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
									Variável out
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
									Antes do C# 7, as variáveis out (ou de saída) tinham que ser
									declaradas antes de seu uso. Com C# 7, o código é reduzido por
									uma linha porque a variável pode ser declarada em uso:
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
string n = "42";
int resultado;

if (string.TryParse(n, out resultado)
{
    Console.WriteLine($"Conversão feita com sucesso: {resultado}");

}
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
string n = "42";

if (string.TryParse(n, out var resultado)
{
  Console.WriteLine($"Conversão feita com sucesso: {resultado}");
}
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
									Argumentos non-trailing
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
									Nas versões anteriores do C#, nós tínhamos duas maneiras de
									usar argumentos nomeados. Podemos especificar todos os nomes
									de argumentos e deixar de fora aqueles com valor padrão ou nós
									especificamos argumentos posicionais primeiro e depois
									argumentos nomeados.
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
v = Volume(a: 3, c: 5, b: 4);
v = Volume(3, b: 4, c: 5);
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
v = Volume(3, b: 4, 5);
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
									Struct readonly
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
									Estruturas devem ser somente leitura (com algumas exceções).
									Usando o C # 7.2, é possível declarar uma estrutura com o
									modificador readonly, portanto, o compilador verifica se a
									estrutura não foi alterada.
								</h2>
								<div v-highlight>
									<pre>
                              						<code class="language-csharp">
public readonly struct Dimensoes
{
   public double Comprimento { get; }
   public double Largura { get; }
   public Dimensoes(double comprimento, double largura)
   {
      Comprimento = comprimento;
      Largura = largura;
    }
    public double Diagonal => Math.Sqrt(Comprimento * Comprimento + Largura * Largura );
}
                                    				</code>
                                			</pre>
								</div>
							</div>
							<!-- FIM DO ITEM -->

							<!-- NOVO ITEM -->
							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
									Parâmetros In
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
									No C# 7.2 podemos usar o modificador in com parâmetros, alem
									de ref e out. Isso garante que um tipo de valor passado não
									seja alterado, e ele pode ser passado por referência para
									evitar uma cópia:
								</h2>
								<div v-highlight>
									<pre>
                              						<code class="language-csharp">
static void Calcular(in int numero)
{
    // o valor numero não pode ser alterado
}
                                    				</code>
                                			</pre>
								</div>
							</div>
							<!-- FIM DO ITEM -->

							<!-- NOVO ITEM -->
							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
									Private protected
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
									O C# 7.2 incluiu um novo nível de acessibilidade: private
									protected. Isso é para coincidir com o mesmo nível de acesso
									que já existe no CLR. O membro declarado com essa
									acessibilidade pode ser visível nos tipos derivados desse tipo
									de contenção dentro do assembly. Não é visível para qualquer
									tipo não derivado do tipo de contenção ou fora do assembly que
									o contém. isto é, o acesso é limitado a tipos derivados dentro
									do conjunto de contenção. Isso é muito útil se os
									desenvolvedores quiserem implementar algo visível apenas para
									o nível de assembly interno.
								</h2>
								<div v-highlight>
									<pre>
                              						<code class="language-csharp">
public class Base
  {
      protected private void M()
      {
        Console.WriteLine("Origem Base.M()");
      }
  }

  public class Derivada : Base
  {
     new public void M()
     {
         Console.WriteLine("Origem Derivada.M()");
         base.M();
     }
}
                                    				</code>
                                			</pre>
								</div>
							</div>
							<!-- FIM DO ITEM -->

                             <!-- NOVO ITEM -->
                     	 <div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">
									Target-Type Default
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    No C# 7.1, temos agora definido um literal padrão que permite uma sintaxe mais curta em comparação com o operador padrão.

O operador padrão sempre requer a repetição do tipo, que agora não é mais necessário, oque facilita para tipos complexos.
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
int x = default(int);
ArrayImutavel&lt;int> arr = default(ArrayImutavel&lt;int>);
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
int x = default;
ArrayImutavel&lt;int> arr = default;
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
									Funções Locais
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    Antes de C# 7, não era possível declarar uma função dentro de um método. Você poderia criar um expressão lambda e invocá-la como mostrado aqui no trecho de código C# 6:
								</h2>
                                <h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    Com C# 7, uma função local pode ser declarada dentro de um método.
A função local só é acessível dentro do escopo do método:
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
public void Calcular()
{
     Func&lt;int, int, int> Somar = (x, y) => x + y;
     int resultado = Somar(38, 4);
     Console.WriteLine(resultado);
}
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
public void Calcular()
{
    int Somar(int x, int y) => x + y;
    int resultado = Somar(38, 4);
    Console.WriteLine(resultado);
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
	name: "CSharp7",
};
</script>
