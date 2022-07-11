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
									Global Usings
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    C# 10 nos trouxe os imports globais, que nos dá a possibilidade de importar uma única vez cada biblioteca no projeto!
									Para isso basta apenas usar a palavra-chave global antes de realizar o using.
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
global using System;
global using System.Linq;
global using System.Collections.Generic;
global using System.Threading.Tasks;

namespace CSharp10.Usings
{
    public class Usings
    { }
}
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
// E então quando precisar dessas bibliotecas é só importar a classe de usings!
using CSharp10.Usings;

namespace CSharp10.UseImports
{
    public class UseImports
    { }
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
									File-Scoped Namespaces
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    possibilidade de utilizar uma namespace para um arquivo todo ao invés de se utilizar um bloco {} para isso.
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
// ANTES
namespace CSharp10.FileScoped
{
    public class NormalNamespaces
    { }
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
namespace CSharp10.FileScoped;

public class FileScopedNamespaces
{ }
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
									Null Parameter Checking
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    agora você pode verificar se o parâmetro passado para uma função é null com a menor quantidade de código possível, isso utilizando (!!) em frente do nome do parâmetro.
								</h2>
								<div class="grid grid-cols-1 gap-1">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
using System;

namespace CSharp10.NullCheck
{
    public class NewNullCheck
    {
        public double CalculateFeePrice(string zipcode!!)
        {
            // Logic here....
            var fee = new Random().NextDouble();

            return fee;
        }
    }
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
									Required Properties
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    O C# 9 nos trouxe as record class, classes que são específicas para serem utilizadas como modelos de dados, nos dando possibilidade de manipular os dados dentro do objeto mais facilmente.

Agora no C# 10 focando nas record class foi adicionado as required properties.

Elas basicamente indicam que uma propriedade precisar ser iniciada ao instanciar o objeto (requerida) somente utilizando a palavra required atras do tipo da propriedade.
								</h2>
								<div class="grid grid-cols-1 gap-1">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
using System.Collections.Generic;

namespace CSharp10.RequiredProperties.Required
{
    public record Product
    {
        public required string Name { get; init; }
        public required double Price { get; init; }
        public required int Amount { get; init; }
    }
    
    public class Order
    {
        public List<Product> OrderProducts { get; private set; }

        public Order()
        {
            OrderProducts = new List<Product>
            {
                new Product
                {
                    Name = "RTX 3060 TI",
                    Price = 7000,
                    // If i dont initialize, compiler error!
                    Amount = 1
                 }
              };
          }
     }
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
									Field Keyword
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    C# 10 adicionou a palavra-chave field, no qual você gera um backdoor onde pode manipular o valor antes de atribui-lo a propriedade.
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
namespace CSharp10.FieldKeyword
{
    public record Product
    {
        public string Name { get; init; }
        public int Amount { get; init; }

        // Price + 5% of value!
        public double Price { get; init => field = value + (value * 0.05); }
    }
}
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
namespace CSharp10.FieldKeyword
{
    public record ProductGetterSetter
    {
        public string Name { get; set; }
        public int Amount { get; set; }

        // Price + 5% or + 10% of value!
        public double Price
        {
            get;
            set
            {
                if (value &lt;= 5)
                    field = value + (value * 0.05);
                else
                    field = value + (value * 0.10);
            }
        }
    }
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
	name: "CSharp10"
};
</script>