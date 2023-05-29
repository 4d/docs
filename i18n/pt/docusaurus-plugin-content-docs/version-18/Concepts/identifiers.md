---
id: identifiers
title: Identificadores
---

This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.).

## Regras básicas

The following rules apply for all 4D frameworks.

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Pontos (".") and brackets ("[ ]") are not allowed in table, field, method, or variable names.
- Commas, slashes, quotation marks, and colons are not allowed.
- Characters reserved for use as operators, such as * and +, are not allowed.
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (If, For, etc.), and constants.
- Any trailing spaces are ignored.

### Additional rules for object property and ORDA names

- Space characters are not allowed.
- Pontos (".") and brackets ("[ ]") are not allowed.
- Names are case sensitive.

### Additional rules for SQL

- Only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted
- Names must not include any SQL keywords (command, attribute, etc.).

**Note:** The "SQL" area of the Inspector in the Structure editor automatically indicates any unauthorized characters in the name of a table or field.

## Tabelas

You designate a table by placing its name between brackets: [...]. A table name can contain up to 31 characters.

Exemplos:

```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Campos

You designate a field by first specifying the table to which it belongs. The field name immediately follows the table name. A field name can contain up to 31 characters.

Exemplos:

```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Interprocess Variables

You designate an interprocess variable by preceding the name of the variable with the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

The name of an interprocess variable can be up to 31 characters, not including the `<>` symbols.

Exemplos:

```4d
<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
```

## Variáveis processo

Designa-se uma variável de processo utilizando o seu nome (que não pode começar com os símbolos `<>` nem com o símbolo do dólar $). Um nome de variável de processo pode conter até 31 caracteres.

Exemplos:

```4d
<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
```

## Variáveis locais

Uma variável local é determinada colocando um sinal de dólar ($) antes do nome da variável. A local variable name can contain up to 31 characters, not including the dollar sign.

Exemplos:

```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
```

## Arrays

You designate an array by using its name, which is the name you pass to an array declaration (such as ARRAY LONGINT) when you create the array. Arrays are variables, and from the scope point of view, like variables, there are three different types of arrays:

- Arrays interprocesso,
- Arrays processo,
- Arrays locais.

### Arrays interprocesso

The name of an interprocess array is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess array name can contain up to 31 characters, not including the `<>` symbols.

Exemplos:

```4d
ARRAY TEXT(<>atSubjects;Records in table([Topics]))
SORT ARRAY(<>asKeywords;>)
ARRAY INTEGER(<>aiBigArray;10000)
```

### Arrays proceso

Designa-se uma variável de processo utilizando o seu nome (que não pode começar com os símbolos `<>` nem com o símbolo do dólar $). A process array name can contain up to 31 characters.

Exemplos:

```4d
ARRAY TEXT(atSubjects;Records in table([Topics]))
SORT ARRAY(asKeywords;>)
ARRAY INTEGER(aiBigArray;10000)
```

### Arrays locais

O nome de um array local vai precedido do sinal de dólar ($). A local array name can contain up to 31 characters, not including the dollar sign.

Exemplos:

```4d
ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
```

### Elements of arrays

You reference an element of an interprocess, process or local array by using the curly braces("{ }"). The element referenced is denoted by a numeric expression.

Exemplos:

```4d  
 If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

 //Direcionar um elemento de um array processo If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

 //Direcionar um elemento de um array local If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Elements of two-dimensional arrays

You reference an element of a two-dimensional array by using the curly braces ({…}) duas vezes. The element referenced is denoted by two numeric expressions in two sets of curly braces.

Exemplos:

```4d
 //Addressing an element of a two-dimensional interprocess array
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional local array
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Atributos de objetos

When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. An attribute name can contain up to 255 characters and is case sensitive.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Note:** Additional rules apply to object attribute names (they must conform to the ECMAScript specification). For more information, see [Object property identifiers](Concepts/dt_object.md#object-property-identifiers).

## Formulários

You designate a form by using a string expression that represents its name. A form name can contain up to 31 characters.

Exemplos:

```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Objectos de formulário

You designate a form object by passing its name as a string, preceded by the * parameter. A form object name can contain up to 255 characters.

Exemplo:

```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Note:** Do not confuse form objects (buttons, list boxes, variables that can be entered, etc.) and objects in the 4D language. 4D language objects are created and manipulated via object notation or dedicated commands.

## Métodos projeto

You designate a project method (procedure or function) by using its name. A method name can contain up to 31 characters.

**Note:** A project method that does not return a result is also called a procedure. A project method that returns a result is also called a function.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Dica:** é uma boa técnica de programação adotar a mesma convenção de nomenclatura que a utilizada por 4D para os métodos integrados. Use uppercase characters for naming your methods; however if a method is a function, capitalize the first character of its name. By doing so, when you reopen a database for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

**Note:** When you call a method, you just type its name. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all the Plug-In commands, expect the name of a method as a string when a method parameter is passed. Exemplo:

Exemplos:

```4d
 // Este comando espera um método (função) ou fórmula QUERY BY FORMULA([aTable];Special query)
 // Este comando espera um método (procedimento) ou declaração APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //Mas este comando espera um nome de método ON EVENT CALL("HANDLE EVENTS")
```

Project methods can accept parameters (arguments). Os parâmetros se passam ao método entre parêntesis, depois do nome do método. Cada parâmetro está separado do próximo por um ponto e vírgula (;). Os parâmetros estão disponíveis dentro do método chamado como variáveis locais numeradas sequencialmente: $1, $2,..., $n. Além disso, podem ser endereçados múltiplos parâmetros consecutivos (e últimos) com a sintaxe ${n}onde n, expressão numérica, é o número do parâmetro.

Dentro de uma função, a variável local $0 contém o valor a devolver.

Exemplos:

```4d
 //Dentro de DROP SPACES $1 é um ponteiro ao campo [People]Name DROP SPACES(->[People]Name)

 //Dentro de Calc creator:
 //- $1 é numérico e igual a 1
 //- $2 é numérico e igual a 5
 //- $3 é texto ou string e igual a "Nice"
 //- O valor do resultado se atribui a $0
$vsResult:=Calc creator(1;5; "Nice")

 //Dentro de Dump:
 //- os tres parâmetros são texto ou string
 //- Se pode direcionar como $1, $2 ou $3
 //- Também podem ser direcionados como, por exemplo, ${$vlParam} onde $vlParam é 1, 2 ou 3
 //- O valor resultante se atribui a $0
vtClone:=Dump("is";"the";"it")
```

## Comandos de plug-in

You designate a plug-in command by using its name as defined by the plug-in. A plug-in command name can contain up to 31 characters.

Exemplos:

```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Conjuntos

From the scope point of view, there are two types of sets:

- Conjuntos interprocesso
- Conjuntos process

4D Server also includes:

- Conjuntos clientes

### Conjuntos interprocesso

A set is an interprocess set if the name of the set is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess set name can contain up to 255 characters, not including the `<>` symbols.

### Conjuntos process

Para designar um conjunto processo se utilizar uma expressão de tipo string que represente seu nome (que não pode começar com os símbolos `<>` ou o sinal de dólar $). A set name can contain up to 255 characters.

### Conjuntos clientes

O nome de um conjunto cliente deve ser precedido do sinal de dólar ($). A client set name can contain up to 255 characters, not including the dollar sign.

**Note:** Sets are maintained on the Server machine. In certain cases, for efficiency or special purposes, you may need to work with sets locally on the Client machine. To do so, you use Client sets.

Exemplos:

```4d
 //Conjuntos interprocesso USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Conjuntos processo USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //conjuntos clientes USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
```

## Seleções temporárias

From the scope point of view, there are two types of named selections:

- Interprocess named selections
- Process named selections.

### Interprocess Named Selections

A named selection is an interprocess named selection if its name is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess named selection name can contain up to 255 characters, not including the `<>` symbols.

### Process Named Selections

Para designar uma seleção nomeada se utiliza uma expressão de tipo string que represente seu nome (que não pode começar com os símbolos `<>` ou o sinal de dólar $). A named selection name can contain up to 255 characters.

Exemplos:

```4d
 //Interprocess Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
 //Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Processos

In the single-user version, or in Client/Server on the Client side, there are two types of processes:

- Processos globais
- Processos locais.

### Processos globais

Pode determinar um processo global usando uma expressão string que represente seu nome (que não pode começar com o sinal de dólar $). A process name can contain up to 255 characters.

### Processos locais

Pode determinar um processo local se o nome do processo for precedido pelo sinal de dólar ($). The process name can contain up to 255 characters, not including the dollar sign.

Exemplos:

```4d
 //Iniciar processo global "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Iniciar processo local "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Summary of Naming Conventions

The following table summarizes 4D naming conventions.

| Identifier                   | Max. Largura     | Exemplo                            |
| ---------------------------- | ---------------- | ---------------------------------- |
| Tabela                       | 31               | [Invoices]                         |
| Campo                        | 31               | [Employees]Last Name               |
| Interprocess Variable/Array  | `<>` + 31  | `<>vlNextProcessID`          |
| Variável/Array processo      | 31               | vsCurrentName                      |
| Variável/Array local         | $ + 31           | $vlLocalCounter                    |
| Propriedades de objetos      | 255              | $o.myAttribute                     |
| Formulário                   | 31               | "My Custom Web Input"              |
| Objecto de formulário        | 255              | "MyButton"                         |
| Métodos proyecto             | 31               | M_ADD_CUSTOMERS                  |
| Rotina Plug-in               | 31               | PDF SET ROTATION                   |
| Interprocess Set             | `<>` + 255 | `"<>Records to be Archived"` |
| Conjunto process             | 255              | "Current selected records"         |
| Client Set                   | $ + 255          | "$Previous Subjects"               |
| Seleção nomeada              | 255              | "Employees A to Z"                 |
| Interprocess Named Selection | `<>` + 255 | `"<>Employees Z to A"`       |
| Processo local               | $ + 255          | "$Follow Events"                   |
| Processo global              | 255              | "*P_INVOICES_MODULE*"            |
| Semáforo                     | 255              | "mysemaphore"                      |

**Note:** If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Resolving Naming Conflicts

Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.

4D identifies names used in procedures in the following order:

1. Campos
2. Comandos
3. Página Métodos
4. Comandos de plug-in
5. Constantes predefinidas
6. Variables.

For example, 4D has a built-in command called `Date`. If you named a method *Date*, 4D would recognize it as the built-in `Date` command, and not as your method. This would prevent you from calling your method. If, however, you named a field “Date”, 4D would try to use your field instead of the `Date` command.
