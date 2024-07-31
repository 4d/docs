---
id: singleton
title: $singleton
---

Você pode chamar diretamente as [funções de seus singletons compartilhados] expostas (../Concepts/classes.md#singleton-classes) por meio de REST.

As funções singleton são chamadas em solicitações POST com o comando `$singleton` e sem `()`. Por exemplo, se você tiver definido uma função `buildVehicle()` na classe singleton compartilhada `VehicleFactory`, poderá chamá-la usando a seguinte solicitação:

```json
/rest/$singleton/VehicleFactory/buildVehicle
```

com dados no corpo do pedido POST: ["truck"]

Na linguagem 4D, esta chamada é equivalente a:

```4d
$singleton:=cs.VehicleFactory.me.buildVehicle("truck")
```

:::note

Tenha em mente que somente funções com a [palavra-chave `exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) podem ser diretamente chamadas de solicitações REST.

:::

## Chamadas funções

Las funciones Singleton deben llamarse siempre utilizando peticiones **POST** (una petición GET recibirá un error). A sintaxe formal é:

`/rest/$singleton/SingletonClass/SingletonClassFunction`

> All 4D code called from REST requests **must be thread-safe** if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the [*Use preemptive process* setting value](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) is ignored by the REST Server).

:::info

Você pode restringir chamadas a funções singleton específicas configurando os privilégios apropriados no arquivo [**roles.json**](../ORDA/privileges.md#rolesjson-file).

:::

## Parâmetros

Você pode enviar parâmetros para funções singleton. Del lado del servidor, serán recibidos en los [parámetros declarados](../Concepts/parameters.md#declaring-parameters) de las funciones clase singleton.

O envio de parâmetros para funções singleton é exatamente igual ao envio de parâmetros para funções de classe ORDA. Por favor, consulte [o parágrafo **Parâmetros** da página "Chamando as funções classe"](ClassFunctions.md#parameters) para uma descrição detalhada.

## Exemplo

Você criou um singleton compartilhado simples com uma função exposta:

```4d
//class mySingleton

shared singleton Class constructor()

exposed Function sayHello ($value : Text)
	return "Hello "+$value

```

:::note

A classe `mySingleton` e a função `sayHello` são listadas quando você chama o comando [`$catalog`]($catalog.md#singleton).

:::

Pode então executar este pedido:

**POST** `/rest/$singleton/mySingleton/sayHello`

Corpo da solicitação: ["John"]

#### Resposta

```json
{
	"result": "Hello John"
}
```
