---
id: identifiers
title: Identificadores
---

Esta seção descreve as convenções e regras para nomear os vários elementos da linguagem 4D (variáveis, tabelas, objetos, formulários, etc)

> Se forem utilizados caracteres não romanos nos nomes dos identificadores, o seu comprimento máximo pode ser inferior.

## Arrays

Os nomes dos arrays seguem as mesmas regras que as [variáveis](#variables).

## Classes

Um nome de processo pode conter até 31 caracteres.

O nome de uma classe deve estar em conformidade com as [regras normais de nomeação de propriedades](#object-properties) para notação de pontos.

> Não se recomenda dar o mesmo nome a uma classe e a uma [tabela de banco de dados](#tables-and-fields), de modo a evitar qualquer conflito.

## Funções

O nome de funções devem estar em conformidade com as [regras normais de nomeação de propriedades](#object-properties) para notação de pontos.

> **Dica:** Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D.

## Propriedades dos objectos

Um nome de objeto de formulário pode conter até 255 caracteres.

As propriedades dos objetos podem fazer referência a valores escalares, elementos ORDA, funções de classe, outros objetos, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](./dt_object.md#properties)**:

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Os nomes são sensíveis às maiúsculas e minúsculas.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

Começar o nome de uma propriedade de objecto com um carácter de sublinhado ("_") excluirá a propriedade das funcionalidades de preenchimento automático no editor de código 4D. Por exemplo, se declarar `$o._myPrivateProperty`, esta não será proposta no editor de código quando escrever `"$o. "`.

:::

Ver também [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

**Nota:** são aplicadas regras adicionais aos nomes de atributos de objetos (devem ser ajustados à especificação ECMAScript). Para saber mais, consulte [Identificadores de propriedades de objetos](Concepts/dt_object.md#object-property-identifiers).

:::


## Parâmetros

Os nomes dos parâmetros devem começar com um caracter `$` e seguir as mesmas regras que os nomes das variáveis [](#variables).

Exemplos:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Métodos projeto

Um método projeto (procedimento ou função) se designa utilizando seu nome. Um nome de método pode conter até 31 caracteres.

- Um nome de método projecto deve começar com uma letra, um dígito, ou um sublinhado
- A partir daí, o nome pode incluir qualquer letra ou dígito, o carácter de sublinhado ("_") ou o carácter de espaço.
- 4D identifica os nomes utilizados nos métodos em função na seguinte ordem de ordem de prioridade:
- Os nomes dos métodos projecto são insensíveis a maiúsculas e minúsculas.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Dica:** é uma boa técnica de programação adotar a mesma convenção de nomenclatura que a utilizada por 4D para os métodos integrados. Use maiúsculas para nomear seus métodos, entretanto, se um método for uma função, coloque em maiúsculas o primeiro caractere de seu nome. Dessa maneira, quando reabrir um banco de dados para manutenção depois de alguns meses, já saberá se um método retorna um resultado, simplesmente olhando seu nome na janela do Explorer.

 > Quando chamar um método, apenas digite seu nome. Entretanto, alguns comandos integrados em 4D, como `ON EVENT CALL`, assim como todos os comandos de Plug-In, esperam o nome de um método como uma string quando se passar um parâmetro de tipo método.

Exemplos:

```4d
 // Este comando espera um método (função) ou fórmula QUERY BY FORMULA([aTable];Special query)
 // Este comando espera um método (procedimento) ou declaração APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //Mas este comando espera um nome de método ON EVENT CALL("HANDLE EVENTS")
```

## Tabela

Uma tabela se designa colocando seu nome entre parênteses: [...]. Um nome de tabela pode conter até 31 caracteres.

O nome do campo segue imediatamene o nome da tabela. Um nome campo pode conter até 31 caracteres.

- O nome de uma tabela ou de um campo deve começar por uma letra, um sublinhado ou um dólar ("$")
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- 4D identifica os nomes utilizados nos métodos em função na seguinte ordem de ordem de prioridade:
- Nomes não devem incluir palavras chave SQL (comando, atributo, etc).

Exemplos:

```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Não é recomendável dar o mesmo nome a uma tabela e a uma [classe](#classes), para evitar qualquer conflito.

## Variáveis.

O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos `<>` .

- O nome de uma variável tem de começar por uma letra, um sublinhado ou um dólar ("$") para os [parâmetros](parameters.md) e [variáveis locais](variables.md#local-variables), ou `<>` para as [variáveis interprocessos](variables.md#interprocess-variables).
- Pode usar um digito como primeiro caractere, mas isso não é recomendado e nem é compatível com a declaração de sintaxe [`var`](variables.md#using-the-var-keyword).
- A partir daí, o nome pode incluir qualquer letra ou dígito e o carácter de sublinhado ("_").
- Pod eusar um caractere Espaço, mas isso não é recomendado nem compatível com a sintaxe de declaração [  `var` ](variables.md#using-the-var-keyword).
- 4D identifica os nomes utilizados nos métodos em função na seguinte ordem de ordem de prioridade:
- O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos `<>` .

Exemplos:

```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
```

## Outros nomes

Na linguagem 4D, vários elementos têm seus nomes manejados como strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

O nome de um conjunto interprocesso pode ter até 255 caracteres, não incluindo os símbolos `<>`.

- Os nomes das cadeias de caracteres podem conter quaisquer caracteres.
- Os caracteres de espaço não estão permitidos.

Exemplos:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set USE SET("<>Deleted Records") //Interprocess set If(Records in set("$Selection"+String($i))>0) //Client set

```
