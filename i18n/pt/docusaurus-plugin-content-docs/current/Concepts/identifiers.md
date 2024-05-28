---
id: identifiers
title: Identificadores
---

Esta seção descreve as convenções e regras para nomear os vários elementos da linguagem 4D (variáveis, tabelas, objetos, formulários, etc)

> Se forem utilizados caracteres não romanos nos nomes dos identificadores, o seu comprimento máximo pode ser inferior.

## Arrays

Los nombres de los arrays siguen las mismas reglas que las [variables](#variables).

## Classes

Um nome de processo pode conter até 31 caracteres.

Un nombre de clase debe cumplir con el estándar [reglas de nomenclatura de propiedades](#object-properties) para la notación de puntos.

> No se recomienda dar el mismo nombre a una clase y a una [tabla de la base](#tables), para evitar conflictos.

## Funções

Los nombres de función deben cumplir con el estándar [reglas de nomenclatura de propiedades](#object-properties) para la notación de puntos.

> **Consejo:** comenzar el nombre de la función con un carácter de subrayado ("_") excluirá la función de las funcionalidades de autocompletado en el editor de código 4D.

## Propriedades dos objectos

El nombre de una propiedad objeto (también llamado objeto _atributo_) puede contener hasta 255 caracteres.

As propriedades dos objetos podem fazer referência a valores escalares, elementos ORDA, funções de classe, outros objetos, etc. Sea cual sea su naturaleza, los nombres de las propiedades de los objetos deben seguir las siguientes reglas **si se quiere utilizar la [notación de punto](dt_object.md#object-properties)**:

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Os nomes são sensíveis às maiúsculas e minúsculas.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

Começar o nome de uma propriedade de objecto com um carácter de sublinhado ("_") excluirá a propriedade das funcionalidades de preenchimento automático no editor de código 4D. Por ejemplo, si declara `$o._myPrivateProperty`, no se propondrá en el editor de código cuando escriba `"$o. "`.

:::

Ver también [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

Si utiliza **notación de cadena** entre corchetes, los nombres de las propiedades pueden contener cualquier caracter (ej.: `miObjeto["1. First property"]`).

:::

## Parâmetros

Los nombres de los parámetros deben comenzar con un caracter `$` y seguir las mismas reglas que los [nombres de variables](#variables).

Exemplos:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Métodos projeto

Um método projeto (procedimento ou função) se designa utilizando seu nome. Um nome de método pode conter até 31 caracteres.

- Um nome de método projecto deve começar com uma letra, um dígito, ou um sublinhado
- A partir daí, o nome pode incluir qualquer letra ou dígito, o carácter de sublinhado ("_") ou o carácter de espaço.
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), o nombres de constantes (`Euro`, `Black`, `Friday`, etc.).
- Os nomes dos métodos projecto são insensíveis a maiúsculas e minúsculas.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Consejo:** es una buena técnica de programación adoptar la misma convención de nomenclatura que la utilizada por 4D para los métodos integrados. Use maiúsculas para nomear seus métodos, entretanto, se um método for uma função, coloque em maiúsculas o primeiro caractere de seu nome. Dessa maneira, quando reabrir um banco de dados para manutenção depois de alguns meses, já saberá se um método retorna um resultado, simplesmente olhando seu nome na janela do Explorer.

> Quando chamar um método, apenas digite seu nome. Sin embargo, algunos comandos integrados en 4D, como `ON EVENT CALL`, así como también todos los comandos del plug-in, esperan el nombre de un método como una cadena cuando se pasa un parámetro de tipo método.

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
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), o nombres de constantes (`Euro`, `Black`, `Friday`, etc.).
- Nomes não devem incluir palavras chave SQL (comando, atributo, etc).

Exemplos:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> No se recomienda dar el mismo nombre a una tabla y a una [clase](#classes), para evitar conflictos.

## Variáveis.

El nombre de una variable puede tener hasta 31 caracteres, sin incluir los símbolos de alcance (`$` or `<>`).

- Un nombre de variable debe comenzar con una letra, un guión bajo o un dólar ("$") para [parámetros](parameters.md) y [variables locales](variables.md#local-variables), o `<>` para [variables de interproceso](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- A partir daí, o nome pode incluir qualquer letra ou dígito e o carácter de sublinhado ("_").
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), o nombres de constantes (`Euro`, `Black`, `Friday`, etc.).
- O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos <code>&lt;&gt;</code> .

Exemplos:

```4d
For($vlRecord;1;100) //variable local
$vsMyString:="Hello there" //variable local
var $vName; $vJob : Text //variables locales 
If(bValidate=1) //variable proceso 
<>vlProcessID:=Current process() //variable interproceso
```

## Outros nomes

En el lenguaje 4D, varios elementos tienen sus nombres manejados como cadenas: **formularios**, **objetos de formulario**, **selecciones temporales**, **procesos**, **conjuntos**, **barras de menú**, etc.

Estos nombres de cadena pueden contener hasta 255 caracteres, sin incluir los caracteres `$` or `<>` (si los hay).

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
