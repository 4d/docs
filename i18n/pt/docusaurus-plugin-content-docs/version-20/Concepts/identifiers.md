---
id: identifiers
title: Identificadores
---

Esta seção descreve as convenções e regras para nomear os vários elementos da linguagem 4D (variáveis, tabelas, objetos, formulários, etc)

> If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Arrays

Array names follow the same rules as [variables](#variables).

## Classes

Um nome de processo pode conter até 31 caracteres.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a class and a [database table](#tables) is not recommended, in order to prevent any conflict.

## Funções

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

> **Dica:** Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D.

## Propriedades dos objectos

Um nome de objeto de formulário pode conter até 255 caracteres.

Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Os nomes são sensíveis às maiúsculas e minúsculas.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

Starting an object property name with an underscore character ("_") will exclude the property from the autocompletion features in the 4D code editor. For example, if you declare `$o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"$o. "`.

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

> Giving the same name to a table and a [class](#classes) is not recommended, in order to prevent any conflict.

## Variáveis.

O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos `<>` .

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- A partir daí, o nome pode incluir qualquer letra ou dígito e o carácter de sublinhado ("_").
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- 4D identifica os nomes utilizados nos métodos em função na seguinte ordem de ordem de prioridade:
- O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos `<>` .

Exemplos:

```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
```

## Outros nomes

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

O nome de um conjunto interprocesso pode ter até 255 caracteres, não incluindo os símbolos `<>`.

- String names can contain any characters.
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
