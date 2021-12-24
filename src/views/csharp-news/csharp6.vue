<template>
	<main>
		<div class="max-w-7xl mx-auto pb-8 sm:px-6 lg:px-8">
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="shadow overflow-hidden sm:rounded-lg mt-6">

                        <div>
                                <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Auto-propriedades</h2>
                                <h2 class="text-white text-base pr-5 pl-5 opacity-75">Inicializadores para auto-propriedades</h2>
                                <h2 class="text-white text-base pr-5 pl-5 opacity-75">Passa a ser possível declarar a inicialização de auto-propriedades da mesma forma que se inicializam os campos:</h2>
                                <div v-highlight>
	    							<pre>
                              		<code class="language-csharp">
public class Person
{
    public string First { get; set; } = "Jane";
    public string Last { get; set; } = "Doe";
}
                                    </code>
                                	</pre>
							    </div>

                                <h2 class="text-white text-base pr-5 pl-5 opacity-75">As auto-propriedades passam a dispensar o acessor de escrita passando, por isso, a poder ser apenas de leitura</h2>
							    <div v-highlight>
                                    <pre>
                              		<code class="language-csharp">
public class Person
{
    public string First { get; } = "Jane";
    public string Last { get; } = "Doe";
}
                                    </code>
                                	</pre>
							    </div>
                                <h2 class="text-white text-base pr-5 pl-5 opacity-75">no caso das auto-propriedades apenas de leitura é possível inicializar o seu valor no construtor:</h2>
							    <div v-highlight>
                                    <pre>
                              		<code class="language-csharp">
public class Person
{
    // ...

    public Person(string first, string last)
    {
        First = first;
        Last = last;
    }
}
                                    </code>
                                	</pre>
							    </div>
                        </div>

                        <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Expressões lambdas para definir propriedades Get</h2>   
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
public string NomeCompleto => new string((Nome + " " + SobreNome).ToArray());
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Arrow properties or functions</h2>   
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
public Point Move(int dx, int dy) => new Point(x + dx, y + dy);
public void Print() => Console.WriteLine(First + " " + Last);
                                    </code>
                                </pre>
                              </div>
                        </div>

                        <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Operador Null Condicional</h2>   
                            <h2 class="text-white text-base pr-5 pl-5 opacity-75">Da mesma forma que os tipos anuláveis (nullabe types), os operadores null-conditional podem ser usados para obter o mesmo resultado, bastando apenas usar o sinal ? depois da instância e antes de chamar a propriedade.</h2>
                             <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
if (funcionario != null && funcionario.Endereco != null)
{
	Console.WriteLine((funcionario.Nome) + "  " + (funcionario.Endereco.Residencial ?? "Sem endereço"));
} 
Console.ReadLine();	
WriteLine((funcionario?.Nome) + "  " + (funcionario?.Endereco?.Residencial ?? "Sem endereço"));
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Usando diretivas com classes estáticas</h2>   
                            <h2 class="text-white text-base pr-5 pl-5 opacity-75">Agora, na C# 6, podemos ir um passo além, e importar os membros estáticos de uma classe para o nosso namespace. Isto significa que podemos usar os membros estáticos de uma classe diretamente, sem necessidade de qualificá-los com o seu espaço para nome ou nome do tipo.</h2>
                           <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
using static System.Console;
using static System.Math;
using static System.DayOfWeek;
using static System.Linq.Enumerable;
namespace Using_Static
{
    class Program
    {
        static void Main(string[] args)
        {
            var numeros = Range(1, 10).ToArray();
            WriteLine("A raiz quadrada de 4 é : " + Sqrt(4));
            WriteLine(" 3 * 3 + 4 * 4  = " + Sqrt(3 * 3 + 4 * 4));
            WriteLine("Sexta-Feira " + Friday + "Segunda-feira : " + Monday);
            foreach (int num in numeros)
            {
                WriteLine(num);
            }
            ReadLine();
        }
    }
}
                                    </code>
                             </pre>
                         </div>
                        </div>

                        <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Inicializadores de índices</h2>   
                            <h2 class="text-white text-base pr-5 pl-5 opacity-75">A partir de agora, passa a ser possível usar inicializadores em que são usados indexadores:</h2>
                              <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
var numbers = new Dictionary&lt;int, string>
{
    [7] = "sete",
    [9] = "nove",
    [13] = "treze"
};
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Filtros de exceções</h2>   
                            <h2 class="text-white text-base pr-5 pl-5 opacity-75">Isto permite que sejam definidos mais que um bloco catch para o mesmo tipo de exceção:</h2>
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
try
{
    //...
}
catch (SqlException ex) when (ex.Number == 2)
{
    // ...
}
catch (SqlException ex)
{
    // ...
}
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Await em blocos catch e finally</h2>   
                            <h2 class="text-white text-base pr-5 pl-5 opacity-75">No C#5 não era permitida a utilização da palavra-chave await em blocos catch e finally porque, na altura da implementação da funcionarioonalidade async-await, a equipe pensou que isto não seria possível implementar. Mas agora descobriram que afinal não era impossível.</h2>
                            <div v-highlight>
                                <pre>
                            	    <code class="language-csharp">
Resource res = null;
try
{
    res = await Resource.OpenAsync();      


catch (ResourceException e)
{
    await Resource.LogAsync(res, e);        
}
finally
{
    if (res != null) await res.CloseAsync();         
}
                                    </code>
                                </pre>
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
export default {
	name: "CSharp6"
};
</script>