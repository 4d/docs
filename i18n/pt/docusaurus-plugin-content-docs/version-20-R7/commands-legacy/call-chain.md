---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->
<!--REF #_command_.Call chain.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; | Coleção de objetos descrevendo a cadeia de método de chamada dentro de um processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Call chain.Summary-->O comando **Call chain** devolve uma coleção de objetos que descrevem cada passo da cadeia de chamadas ao método dentro do processo atual.<!-- END REF--> Oferece a mesma informação que a janela do Depurador. Tem a vantagem adicional de poder ser executado desde qualquer ambiente 4D, incluido o modo compilado.

O comando facilita a depuração ao permitir a identificação de método chamado, o componente que o chamou e o número de linha onde foi realizada a chamada. Cada objeto na coleção devolvida contém as propriedades abaixo:

| **Propriedade** | **Tipo**     | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                             | **Exemplo**              |
| --------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| database        | texto        | Nome do banco de dados que chama ao método (para distinguir métodos locais e métodos componentes)                                                                                                                                                                                                                                                                                                         | "database":"contactInfo" |
| line            | entero largo | Número de linha da chamada ao método                                                                                                                                                                                                                                                                                                                                                                      | "line":6                 |
| name            | texto        | Nome de método chamado                                                                                                                                                                                                                                                                                                                                                                                    | "name":"On Load"         |
| type            | texto        | Tipo de método: <br/>"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (quando chamara um método projeto com *Executar no atributo servidor*.), "executeFormula" (quando executar uma fórmula através de [PROCESS 4D TAGS](process-4d-tags.md) ou a avaliação de uma fórmula em um documento 4D Write Pro.)</li<"formmethod",<> | "type":"formMethod"      |

**Nota:** para que este comando possa operar em modo compilado, a verificação de Range não deve estar desabilitada. Ver *Controle de execução*.

#### Exemplo 

O código abaixo devolve uma coleção de objetos que contenham informação sobre a cadeia de chamadas ao método:

```4d
 var $currentCallChain : Collection
 $currentCallChain:=Call chain
```

Se for executado um un método projeto, a string de chamadas poderia conter (por exemplo):

```json
[   {    "type":"projectMethod",    "name":"detailForm",    "line":1,    "database":"myDatabase"   }]
```

Se for executado um método de objeto de formulário, a cadeia de chamadas poderia conter (por exemplo):

```json
[   {    "type":"formObjectMethod",    "name":"detailForm.Button",    "line":1,    "database":"myDatabase"   },   {    "type":"formMethod",    "name”:"detailForm",    "line":2,    "database":"myDatabase"   },   {    "type":"projectMethod",    "name”:"showDetailForm",    "line":2,    "database":"myDatabase”   }]
```


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1662 |
| Thread-seguro | &check; |


