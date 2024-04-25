---
id: identifiers
title: Identificadores
---

Esta seção descreve as convenções e regras para nomear os vários elementos da linguagem 4D (variáveis, tabelas, objetos, formulários, etc)

> Se forem utilizados caracteres não romanos nos nomes dos identificadores, o seu comprimento máximo pode ser inferior.

## Arrays

Array names follow the same rules as [variables](#variables).

## Classes

Um nome de processo pode conter até 31 caracteres.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a class and a [database table](#tables) is not recommended, in order to prevent any conflict.

## Funções

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.

## Propriedades dos objectos

The name of an object property (also called object _attribute_) can contain up to 255 characters.

As propriedades dos objetos podem fazer referência a valores escalares, elementos ORDA, funções de classe, outros objetos, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Os nomes são sensíveis às maiúsculas e minúsculas.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

Começar o nome de uma propriedade de objecto com um carácter de sublinhado ("_") excluirá a propriedade das funcionalidades de preenchimento automático no editor de código 4D. For example, if you declare `$o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"$o. "`.

:::

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

:::

## Parâmetros

Parameter names must start with a `$` character and follow the same rules as [variable names](#variables).

Exemplos:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Métodos projeto

Um método projeto (procedimento ou função) se designa utilizando seu nome. Um nome de método pode conter até 31 caracteres.

- Um nome de método projecto deve começar com uma letra, um dígito, ou um sublinhado
- A partir daí, o nome pode incluir qualquer letra ou dígito, o carácter de sublinhado ("_") ou o carácter de espaço.
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Os nomes dos métodos projecto são insensíveis a maiúsculas e minúsculas.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Use maiúsculas para nomear seus métodos, entretanto, se um método for uma função, coloque em maiúsculas o primeiro caractere de seu nome. Dessa maneira, quando reabrir um banco de dados para manutenção depois de alguns meses, já saberá se um método retorna um resultado, simplesmente olhando seu nome na janela do Explorer.

> Quando chamar um método, apenas digite seu nome. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed.

Exemplos:

```4d
 //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

## Tabela

Uma tabela se designa colocando seu nome entre parênteses: [...]. Um nome de tabela pode conter até 31 caracteres.

O nome do campo segue imediatamene o nome da tabela. Um nome campo pode conter até 31 caracteres.

- O nome de uma tabela ou de um campo deve começar por uma letra, um sublinhado ou um dólar ("$")
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Nomes não devem incluir palavras chave SQL (comando, atributo, etc).

Exemplos:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Giving the same name to a table and a [class](#classes) is not recommended, in order to prevent any conflict.

## Variáveis.

The name of a variable can be up to 31 characters, not including the scope symbols (`$` or `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- A partir daí, o nome pode incluir qualquer letra ou dígito e o carácter de sublinhado ("_").
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos <code>&lt;&gt;</code> .

Exemplos:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales 
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

## Outros nomes

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- Os nomes das cadeias de caracteres podem conter quaisquer caracteres.
- Os caracteres de espaço não estão permitidos.

Exemplos:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set

```
