---
id: formula-from-string
title: Formula from string
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R3   | Suporte do parâmetro *context*                         |
| 17 R6   | Renamed New formula from string -> Formula from string |
| 17 R3   | Adicionado                                             |

</details>

<!-- REF #_command_.Formula from string.Syntax -->**Formula from string**( *formulaString* : Text ) : 4D.Function<br/>**Formula from string**( *formulaString* : Text ; *context* : Longint ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->

| Parâmetro     | Tipo                         |     | Descrição                                                                                         |
| ------------- | ---------------------------- | :-: | ------------------------------------------------------------------------------------------------- |
| formulaString | Text                         |  →  | Fórmula texto a ser retornada como objeto                                                         |
| context       | Number                       |  →  | `sk execute in current database` (por padrão) ou `sk execute in host database` |
| Resultados    | 4D. Function |  ←  | Objeto nativo encapsulando a fórmula                                                              |

<!-- END REF -->

#### Descrição

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a `4D.Function` object based upon the *formulaString* and, optionnally, a *context*<!-- END REF -->.  *formulaString* can be as simple as a single value or complex, such as a project method with parameters.

Esse comando é como [`Formula`](formula.md), exceto pelo fato de que ele lida com uma fórmula baseada em texto e permite definir um contexto de execução. It is usually recommended to use the `Formula` command, except if the original formula was expressed as text (e.g., stored externally in a JSON file), or if you want to create a formula in a host database while calling `Formula from string` from a component. É altamente recomendável usar a sintaxe com tokens com esse comando.

> Because local variable contents can not be accessed by name in compiled mode, they can not be used in *formulaString*. An attempt to access a local variable with `Formula from string` will result in an error (-10737).

If the formula is created in a component, you might consider using the *context* parameter. Por padrão, dado que as fórmulas são executadas no contexto em que foram criadas, não conseguirá chamar uma variável, uma função ou um método não compartilhado do banco de dados host. In this case, you can pass the `sk execute in host database` constant in the *context* parameter to execute the `4D.Function` object in the context of the host database. Estão disponíveis as seguintes constantes:

| Parâmetros                       | Tipo    | Descrição                                                                          |
| -------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| `sk execute in current database` | Integer | (padrão) A fórmula será executada no contexto em que foi criada |
| `sk execute in host database`    | Integer | A fórmula será executada no contexto do banco de dados do host                     |

#### Exemplo

O código abaixo cria um diálogo aceitando uma fórmula em formato texto:

```4d
 var $textFormula : Text
 var $f : 4D. Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)

...e executa a fórmula:

![](../assets/en/API/formulaAlert.png)

#### Veja também

[Formula](formula.md)\
[Parse formula](../commands-legacy/parse-formula.md)
