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
									Tipos de registro
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    Definir um tipo de referência que fornece funcionalidade interna para encapsular dados. Você pode criar tipos de registro com propriedades imutáveis usando parâmetros posicionais ou sintaxe de propriedade padrão
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
public record Person(string FirstName, string LastName);

public record Person
{
    public string FirstName { get; init; } = default!;
    public string LastName { get; init; } = default!;
};

// Você também pode criar tipos de registro com propriedades mutáveis e campos:

public record Person
{
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
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
									Setters somente init
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    Somente setters init fornecem sintaxe consistente para inicializar membros de um objeto. Inicializadores de propriedade deixam claro qual valor está definindo qual propriedade, você pode criar init acessadores em vez de set acessadores para propriedades e indexadores.
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
public struct WeatherObservation
{
    public DateTime RecordedAt { get; init; }
    public decimal TemperatureInCelsius { get; init; }
    public decimal PressureInMillibars { get; init; }

    public override string ToString() =>
        $"At {RecordedAt:h:mm tt} on {RecordedAt:M/d/yyyy}: " +
        $"Temp = {TemperatureInCelsius}, with {PressureInMillibars} pressure";
}

// Os chamadores podem usar a sintaxe do inicializador de propriedades para definir os valores, preservando ainda a imutabilidade:

var now = new WeatherObservation 
{ 
    RecordedAt = DateTime.Now, 
    TemperatureInCelsius = 20, 
    PressureInMillibars = 998.0m 
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
									Melhorias na correspondência de padrões
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    O C# 9 inclui novas melhorias de correspondência de padrões:
									<ul>
<li><em><strong>Padrões de tipo correspondem</strong></em> a um objeto correspondente a um tipo específico</li>
<li><em><strong>Padrões parênteses</strong></em> impõem ou enfatizam a precedência de combinações de padrões</li>
<li><em><strong>Padrões conjuntivos <code>and</code></strong></em> exigem que ambos os padrões correspondam</li>
<li><em><strong>Padrões disjuntivos <code>or</code></strong></em> exigem que qualquer padrão corresponda</li>
<li><em><strong>Padrões negados <code>not</code></strong></em> exigem que um padrão não corresponda</li>
<li><em><strong>Os padrões relacionais</strong></em> exigem que a entrada seja menor que, maior que, menor ou igual ou maior que ou igual a uma determinada constante.</li>
</ul>
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
public static bool IsLetter(this char c) =>
    c is >= 'a' and &lt;= 'z' or >= 'A' and &lt;= 'Z';

public static bool IsLetterOrSeparator(this char c) =>
    c is (>= 'a' and &lt;= 'z') or (>= 'A' and &lt;= 'Z') or '.' or ',';
                                    				</code>
                                			</pre>
										</div>
									</div>
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
if (e is not null)
{
    // ...
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
									new expressão 
								</h2>
								<h2 class="text-white text-base pr-5 pl-5 opacity-75">
                                    ocê pode omitir o tipo em uma new expressão quando o tipo do objeto criado já for conhecido. O uso mais comum está em declarações de campo:
								</h2>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<div v-highlight>
											<pre>
                              						<code class="language-csharp">
	private List<WeatherObservation> _observations = new();

	public WeatherForecast ForecastFor(DateTime forecastDate, WeatherForecastOptions options)

	var forecast = station.ForecastFor(DateTime.Now.AddDays(2), new());

	WeatherStation station = new() { Location = "Seattle, WA" };
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
	name: "CSharp9"
};
</script>