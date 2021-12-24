<template>
	<main>
		<div class="max-w-7xl mx-auto pb-8 sm:px-6 lg:px-8">
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="shadow overflow-hidden sm:rounded-lg mt-6">
                      	  	<div>
                                <h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Expressões switch simplificadas</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">Veja abaixo o exemplo de simplificação do switch:</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
public static RGBColor FromRainbowClassic(Rainbow colorBand)
{
    switch (colorBand)
    {
        case Rainbow.Red:
            return new RGBColor(0xFF, 0x00, 0x00);
        case Rainbow.Orange:
            return new RGBColor(0xFF, 0x7F, 0x00);
        case Rainbow.Yellow:
            return new RGBColor(0xFF, 0xFF, 0x00);
        case Rainbow.Green:
            return new RGBColor(0x00, 0xFF, 0x00);
        case Rainbow.Blue:
            return new RGBColor(0x00, 0x00, 0xFF);
        case Rainbow.Indigo:
            return new RGBColor(0x4B, 0x00, 0x82);
        case Rainbow.Violet:
            return new RGBColor(0x94, 0x00, 0xD3);
        default:
            throw new ArgumentException(message: "invalid enum value", paramName: nameof(colorBand));
    };
}
                                    				</code>
                                				</pre>
							    		</div>
									</div>
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
public static RGBColor FromRainbow(Rainbow colorBand) =>
    colorBand switch
    {
        Rainbow.Red    => new RGBColor(0xFF, 0x00, 0x00),
        Rainbow.Orange => new RGBColor(0xFF, 0x7F, 0x00),
        Rainbow.Yellow => new RGBColor(0xFF, 0xFF, 0x00),
        Rainbow.Green  => new RGBColor(0x00, 0xFF, 0x00),
        Rainbow.Blue   => new RGBColor(0x00, 0x00, 0xFF),
        Rainbow.Indigo => new RGBColor(0x4B, 0x00, 0x82),
        Rainbow.Violet => new RGBColor(0x94, 0x00, 0xD3),
        _              => throw new ArgumentException(message: "invalid enum value", paramName: nameof(colorBand)),
    };
                                    				</code>
                                				</pre>
							    		</div>
									</div>
                        		</div>

								<h2 class="text-white text-base pr-5 pl-5 opacity-75">Veja outros exemplos de utilização com Padrões da propriedade e de tuplas:</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
public static decimal ComputeSalesTax(Address location, decimal salePrice) =>
    location switch
    {
        { State: "WA" } => salePrice * 0.06M,
        { State: "MN" } => salePrice * 0.075M,
        { State: "MI" } => salePrice * 0.05M,
        // other cases removed for brevity...
        _ => 0M
    };
                                    				</code>
                                				</pre>
							    		</div>
									</div>
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
public static string RockPaperScissors(string first, string second)
    => (first, second) switch
    {
        ("rock", "paper") => "rock is covered by paper. Paper wins.",
        ("rock", "scissors") => "rock breaks scissors. Rock wins.",
        ("paper", "rock") => "paper covers rock. Paper wins.",
        ("paper", "scissors") => "paper is cut by scissors. Scissors wins.",
        ("scissors", "rock") => "scissors is broken by rock. Rock wins.",
        ("scissors", "paper") => "scissors cuts paper. Scissors wins.",
        (_, _) => "tie"
    };
                                    				</code>
                                				</pre>
							    		</div>
									</div>
                        		</div>
   							</div>

							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Declarações using por escopo</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">A variável que está sendo declarada deve ser descartada ao final do escopo delimitador. Por exemplo, considere o seguinte código que grava um arquivo de texto:</h2>
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
static int WriteLinesToFile(IEnumerable&lt;string> lines)
{
    using var file = new System.IO.StreamWriter("WriteLines2.txt");
    int skippedLines = 0;
	foreach (string line in lines)
    {
        if (!line.Contains("Second"))
            file.WriteLine(line);
        else
            skippedLines++;
    }
    return skippedLines;
}
                                    				</code>
                                				</pre>
							    		</div>
									</div>
							</div>

							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Funções locais estáticas</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">Agora você pode adicionar o static modificador a funções locais para garantir que a função local não Capture (referencie) nenhuma variável do escopo delimitador.</h2>
									<div>
	  									<div v-highlight>
	    		  							<pre>
				  								<code class="language-csharp">
 int M()
{
    int y;
    LocalFunction();
    return y;

    void LocalFunction() => y = 0; // Acessa váriavel local y
}
												</code>
	  										</pre>
	  	  								</div>
		  							</div>
		  							<div>
	  	  								<div v-highlight>
	    	  								<pre>
				  								<code class="language-csharp">
int M()
{
    int y = 5;
    int x = 7;
    return Add(x, y);

    static int Add(int left, int right) => left + right; // Nao pode referenciar ou capturar nenhuma variavel do escopo
}
												</code>
			  								</pre>
	  	  								</div>
		  							</div>
							</div>

							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Fluxos assíncronos</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">você pode criar e consumir fluxos de forma assíncrona. Um método que retorna um fluxo assíncrono tem três propriedades:

Ele é declarado com o modificador async.
Ela retorna um IAsyncEnumerable&lt;T>.
O método contém instruções yield return para retornar elementos sucessivos no fluxo assíncrono.</h2>
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
public static async System.Collections.Generic.IAsyncEnumerable&lt;int> GenerateSequence()
{
    for (int i = 0; i &lt; 20; i++)
    {
        await Task.Delay(100);
        yield return i;
    }
}

await foreach (var number in GenerateSequence())
{
    Console.WriteLine(number);
}
                                    				</code>
                                				</pre>
							    		</div>
									</div>
							</div>

							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Índices e intervalos</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">Índices e intervalos fornecem uma sintaxe sucinta para acessar elementos únicos ou intervalos em uma sequência.</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
									<ul>
										<li>● System.Index representa um índice em uma sequência.</li>
										<li>● O índice do operador end <code>^</code> , que especifica que um índice é relativo ao final da sequência.</li>
										<li>● System.Range representa um subintervalo de uma sequência.</li>
										<li>● O operador Range <code>..</code> , que especifica o início e o término de um intervalo como seus operandos.</li>
									</ul>
								</h2>
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
var words = new string[]
{
                // index from start    index from end
    "The",      // 0                   ^9
    "quick",    // 1                   ^8
    "brown",    // 2                   ^7
    "fox",      // 3                   ^6
    "jumped",   // 4                   ^5
    "over",     // 5                   ^4
    "the",      // 6                   ^3
    "lazy",     // 7                   ^2
    "dog"       // 8                   ^1
};              // 9 (or words.Length) ^0

var quickBrownFox = words[1..4]; // "quick", "brown" e "fox"
var lazyDog = words[^2..^0];	 // "lazy" e "dog"
var allWords = words[..]; 	 // contempla todos os intervalos
var firstPhrase = words[..4]; 	 // contempla "The" through "fox"
var lastPhrase = words[6..]; 	 // contempla "the", "lazy" and "dog"
                                    				</code>
                                				</pre>
							    		</div>
									</div>
							</div>

							<div>
								<h2 class="text-white text-3xl font-bold pr-5 pl-2 inline-flex">Atribuição de União nula</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">Você pode usar o ??= operador para atribuir o valor do seu operando à direita para seu operando à esquerda somente se o operando esquerdo for avaliado como null.</h2>
									<div>
										<div v-highlight>
	    										<pre>
                              						<code class="language-csharp">
List&lt;int> numbers = null;
int? i = null;

numbers ??= new List&lt;int>();
numbers.Add(i ??= 17);
numbers.Add(i ??= 20);

Console.WriteLine(string.Join(" ", numbers));  // output: 17 17
Console.WriteLine(i);  // output: 17
                                    				</code>
                                				</pre>
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