---
id: identifiers
title: Identifiers
---

Esta seção descreve as convenções e regras para nomear os vários elementos da linguagem 4D (variáveis, tabelas, objetos, formulários, etc)


## Regras básicas

As regras abaixo são aplicadas à todas as estruturas de 4D.

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Pontos (".") e colchetes ("[ ]") não estão permitidos nos nomes de tabelas, campos, métodos ou variáveis.
- Não são permitidos vírgulas, barras inclinadas, aspas nem dois pontos.
- Os caracteres reservados para seu uso como oepradores como * e + não estão permitidos.
- Não use nomes reservados, ou seja, nomes de comando 4D (`Date`, `Time`, etc), palavras chaves (If, For, etc.), e constantes.
- Os espaços finais são ignorados.

### Regras adicionais para as propriedades dos objetos e os nomes ORDA
- Os caracteres de espaço não estão permitidos.
- Pontos (".") e os colchetes ("[ ]") não estão permitidos.
- Os nomes são sensíveis às maiúsculas e minúsculas.

### Regras adicionais para SQL
- Só são aceitos os caracteres _0123456789abcdefghijklmnopqrstuvwxyz
- Nomes não devem incluir palavras chave SQL (comando, atributo, etc).

**Nota:** a área "SQL" do Inspector no editor de estruturas indica automaticamente qualquer caractere não autorizado no nome de uma tabela ou campo.


## Tables

Uma tabela se designa colocando seu nome entre parênteses: [...]. Um nome de tabela pode conter até 31 caracteres.

Examples:
```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Campos

Para designar um campo, primeiro se especifica a tabela a qual pertence. O nome do campo segue imediatamene o nome da tabela. Um nome campo pode conter até 31 caracteres.

Examples:
```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Variáveis interprocesso

Pode estabelecer uma variável interprocesso ao preceder o nome da variável com os símbolos (<>) — um sinal “menor que” seguido por um sinal “maior que”.

O nome de uma variável interprocesso pode ser de até 31 caracteres, sem incluir os símbolos <>.

Examples:
```4d
<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
```

## Variáveis processo

Uma variável de processo é determinada com seu nome (que não possa começar com os símbolos <> nem $). A process variable name can contain up to 31 characters.

Examples:
```4d
<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
```

## Variáveis locais

Uma variável local é determinada colocando um sinal de dólar ($) antes do nome da variável.  Um nome de variável local pode conter até 31 caracteres, sem incluir o sinal de dólar.

Examples:
```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
```

## Arrays

Um array se designa escrevendo seu nome, que é o nome que se passa a um comando de declaração de array (como ARRAY LONGINT) quando criar o array. Arrays são variáveis, e desde o ponto de vista do escopo,da mesma forma que as variáveis, têm três tipos diferentes de arrays:

- Arrays interprocesso,
- Arrays processo,
- Arrays local.

### Arrays interprocesso
O nome do array interprocesso é precedido pelos símbolos (<>) - um sinal "menor que" seguido por um sinal "maior que".

Um nome de array interprocesso pode conter até 31 caracteres, sem incluir os símbolos <>.

Examples:
```4d
ARRAY TEXT(<>atSubjects;Records in table([Topics]))
SORT ARRAY(<>asKeywords;>)
ARRAY INTEGER(<>aiBigArray;10000)
```

### Arrays proceso
Um array processo se designa com seu nome (que não pode começar com os símbolos <> nem com $). Um nome de array processo pode conter até 31 caracteres.

Examples:
```4d
ARRAY TEXT(atSubjects;Records in table([Topics]))
SORT ARRAY(asKeywords;>)
ARRAY INTEGER(aiBigArray;10000)
```

### Arrays locais
O nome de um array local vai precedido do sinal de dólar ($). Um nome de array local pode conter até 31 caracteres, sem incluir o sinal de dólar.

Examples:
```4d
ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
```

### Elementos de arrays
A referência a um elemento de um array local, processo ou interprocesso se realiza mediante chaves ("{ }"). O elemento ao qual faz referência se indica com uma expressão numérica.

Examples:
```4d  
    //O elemento ao que se faz referência se indica com uma expressão numérica.
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

    //Direcionar um elemento de um array processo
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

    //Direcionar um elemento de um array local
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Elementos de arrays de duas dimensões
A referência a um elemento de um array de duas dimensões se realiza utilizando as chaves ({…}) duas vezes. O elemento ao que se faz referência se denota através de duas expressões numéricas em dois conjuntos de pares de chaves

Examples:
```4d
    //Direcionamento de um elemento de um array interprocesso de duas dimensões 
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

    //Direcionar um elemento de uma array processo de duas dimensões
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

    //Direcionar um elemento de um array local de duas dimensões
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Atributos de objetos

Quando a notação objeto estiver ativada, é designado um atributo de objeto (também chamado propriedade de objeto) colocando um ponto (".") entre o nome do objeto (ou do atributo) e o nome do atributo. Um nome de atributo pode conter até 255 caracteres e diferencia entre  maiúsculas e minúsculas.

Examples:
```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Nota:** são aplicadas regras adicionais aos nomes de atributos de objetos (devem ser ajustados à especificação ECMAScript). Para saber mais, consulte [Identificadores de propriedades de objetos](Concepts/dt_object.md#object-property-identifiers).

## Formulários

Um formulário se designa mediante uma expressão de tipo string que representa seu nome. Um nome de formulário pode conter até 31 caracteres.

Examples:
```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Objetos de formulários

Se designar um objeto de formulário passando seu nome como uma string, precedida pelo parâmetro *. Um nome de objeto de formulário pode conter até 255 caracteres.

Example:
```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Nota:** não confunda os objetos de formulário (botões, list boxes, variáveis editáveis, etc.) e os objetos da linguagem 4D. Os objetos da linguagem 4D são criados e manipulados através da notação de objetos ou de comandos dedicados.

## Métodos projeto

Um método projeto (procedimento ou função) se designa utilizando seu nome. Um nome de método pode conter até 31 caracteres.

**Nota:** um método projeto que não devolve um resultado também se chama um procedimento. Um método projeto que devolve um resultado também se denomina função.

Examples:
```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Dica:** é uma boa técnica de programação adotar a mesma convenção de nomenclatura que a utilizada por 4D para os métodos integrados. Use uppercase characters for naming your methods; however if a method is a function, capitalize the first character of its name. By doing so, when you reopen a database for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

**Note:** When you call a method, you just type its name. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all the Plug-In commands, expect the name of a method as a string when a method parameter is passed. Example:

Examples:
```4d
    //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
    //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
    //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

Project methods can accept parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. In addition, multiple consecutive (and last) parameters can be addressed with the syntax ${n}where n, numeric expression, is the number of the parameter.

Inside a function, the $0 local variable contains the value to be returned.

Examples:
```4d
    //Within DROP SPACES $1 is a pointer to the field [People]Name
DROP SPACES(->[People]Name)

    //Within Calc creator:
    //- $1 is numeric and equal to 1
    //- $2 is numeric and equal to 5
    //- $3 is text or string and equal to "Nice"
    //- The result value is assigned to $0
$vsResult:=Calc creator(1;5;"Nice")

    //Within Dump:
    //- The three parameters are text or string
    //- They can be addressed as $1, $2 or $3
    //- They can also be addressed as, for instance, ${$vlParam} where $vlParam is 1, 2 or 3
    //- The result value is assigned to $0
vtClone:=Dump("is";"the";"it")
```

## Plug-In Commands

You designate a plug-in command by using its name as defined by the plug-in. A plug-in command name can contain up to 31 characters.

Examples:
```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Sets

From the scope point of view, there are two types of sets:

- Interprocess sets
- Process sets

4D Server also includes:

- Client sets

### Interprocess Sets
A set is an interprocess set if the name of the set is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

An interprocess set name can contain up to 255 characters, not including the <> symbols.

### Process Sets
You denote a process set by using a string expression that represents its name (which cannot start with the <> symbols or the dollar sign $). A set name can contain up to 255 characters.

### Client Sets
The name of a client set is preceded by the dollar sign ($). A client set name can contain up to 255 characters, not including the dollar sign.

**Note:** Sets are maintained on the Server machine. In certain cases, for efficiency or special purposes, you may need to work with sets locally on the Client machine. To do so, you use Client sets.

Examples:
```4d
    //Interprocess sets
USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
    //Process sets
USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
    //Client sets
USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
```

## Named Selections

From the scope point of view, there are two types of named selections:

- Interprocess named selections
- Process named selections.

### Interprocess Named Selections
A named selection is an interprocess named selection if its name is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

An interprocess named selection name can contain up to 255 characters, not including the <> symbols.

### Process Named Selections
You denote a process named selection by using a string expression that represents its name (which cannot start with the <> symbols nor the dollar sign $). A named selection name can contain up to 255 characters.

Examples:
```4d
    //Interprocess Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
    //Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Processes

In the single-user version, or in Client/Server on the Client side, there are two types of processes:

- Global processes
- Local processes.

### Global Processes
You denote a global process by using a string expression that represents its name (which cannot start with the dollar sign $). A process name can contain up to 255 characters.

### Local Processes
You denote a local process if the name of the process is preceded by a dollar ($) sign. The process name can contain up to 255 characters, not including the dollar sign.

Examples:
```4d
    //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
    //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Summary of Naming Conventions

The following table summarizes 4D naming conventions.

| Identifier                   | Max. Length | Example                    |
| ---------------------------- | ----------- | -------------------------- |
| Table                        | 31          | [Invoices]                 |
| Field                        | 31          | [Employees]Last Name       |
| Interprocess Variable/Array  | <> + 31     | <>vlNextProcessID          |
| Process Variable/Array       | 31          | vsCurrentName              |
| Local Variable/Array         | $ + 31      | $vlLocalCounter            |
| Object attribute             | 255         | $o.myAttribute             |
| Form                         | 31          | "My Custom Web Input"      |
| Form object                  | 255         | "MyButton"                 |
| Project method               | 31          | M_ADD_CUSTOMERS          |
| Plug-in Routine              | 31          | PDF SET ROTATION           |
| Interprocess Set             | <> + 255    | "<>Records to be Archived" |
| Process Set                  | 255         | "Current selected records" |
| Client Set                   | $ + 255     | "$Previous Subjects"       |
| Named Selection              | 255         | "Employees A to Z"         |
| Interprocess Named Selection | <> + 255    | "<>Employees Z to A"       |
| Local Process                | $ + 255     | "$Follow Events"           |
| Global Process               | 255         | "*P_INVOICES_MODULE*"    |
| Semaphore                    | 255         | "mysemaphore"              |

**Note:** If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Resolving Naming Conflicts

Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.

4D identifies names used in procedures in the following order:

1. Campos
2. Commands
3. Methods
4. Plug-in routines
5. Predefined constants
6. Variables.

For example, 4D has a built-in command called `Date`. If you named a method *Date*, 4D would recognize it as the built-in `Date` command, and not as your method. This would prevent you from calling your method. If, however, you named a field “Date”, 4D would try to use your field instead of the `Date` command.
