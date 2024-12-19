---
id: identifiers
title: Identificadores
---

Esta seção descreve as convenções e regras para nomear os vários elementos da linguagem 4D (variáveis, tabelas, objetos, formulários, etc).

## Regras básicas

As regras seguintes aplicam-se a todas as estruturas 4D.

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Pontos (".") Pontos (".") Pontos (".") e colchetes ("[ ]") não são permitidos em nomes de tabelas, campos, métodos ou variáveis.
- Não são permitidas vírgulas, barras, aspas e dois pontos.
- Os caracteres reservados para uso como operadores, como * e +, não são permitidos.
- Não use nomes reservados, ou seja, nomes de comandos 4D`(Date`, `Time`, etc.), palavras-chave (If, For, etc.) e constantes.
- Os espaços finais são ignorados.

### Regras adicionais para propriedades de objetos e nomes ORDA

- Não são permitidos caracteres de espaço.
- Pontos (".") Pontos (".") Pontos (".") e parênteses ("[ ]") não são permitidos.
- Os nomes são sensíveis a maiúsculas e minúsculas.

### Regras adicionais para SQL

- Somente os caracteres _0123456789abcdefghijklmnopqrstuvwxyz são aceitos
- Os nomes não devem incluir nenhuma palavra-chave SQL (comando, atributo, etc.).

**Nota:** a área "SQL" do Inspetor no editor de estrutura indica automaticamente quaisquer caracteres não autorizados no nome de uma tabela ou campo.

## Tabelas

Uma tabela se designa colocando seu nome entre parênteses: [...]. O nome de uma tabela pode conter até 31 caracteres.

Exemplos:

```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Campos

Você designa um campo especificando primeiro a tabela à qual ele pertence. O nome do campo segue imediatamente o nome da tabela. Um nome de campo pode conter até 31 caracteres.

Exemplos:

```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Variáveis interprocesso

Você designa uma variável interprocessos precedendo o nome da variável com os símbolos (`<>`) - um sinal de "menor que" seguido de um sinal de "maior que".

O nome de uma variável interprocesso pode ter até 31 caracteres, sem incluir os símbolos `<>`.

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

Uma variável local é determinada colocando um sinal de dólar ($) antes do nome da variável. Um nome de variável local pode conter até 31 caracteres, sem incluir o sinal de dólar.

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

Designa-se uma variável de processo utilizando o seu nome (que não pode começar com os símbolos `<>` nem com o símbolo do dólar $). Um nome de array processo pode conter até 31 caracteres.

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

### Elementos de arrays

You reference an element of an interprocess, process or local array by using the curly braces("{ }"). O elemento referenciado é denotado por uma expressão numérica.

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

### Elementos de arrays bidimensionais

You reference an element of a two-dimensional array by using the curly braces ({…}) duas vezes. duas vezes. The element referenced is denoted by two numeric expressions in two sets of curly braces.

Exemplos:

```4d
 //Addressing an element of a two-dimensional interprocess array If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional process array If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional local array If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Atributos de objetos

When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. between the name of the object (or attribute) and the name of the attribute. An attribute name can contain up to 255 characters and is case sensitive.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Note:** Additional rules apply to object attribute names (they must conform to the ECMAScript specification). For more information, see [Object property identifiers](Concepts/dt_object.md#object-property-identifiers).

## Formulários

Você designa um formulário usando uma expressão de cadeia de caracteres que representa seu nome. O nome de um formulário pode conter até 31 caracteres.

Exemplos:

```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Objectos de formulário

Você designa um objeto de formulário passando o nome dele como uma string, precedido pelo parâmetro *. O nome de um objeto de formulário pode conter até 255 caracteres.

Exemplo:

```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Note:** Do not confuse form objects (buttons, list boxes, variables that can be entered, etc.) and objects in the 4D language. 4D language objects are created and manipulated via object notation or dedicated commands.

## Métodos projeto

You designate a project method (procedure or function) by using its name. O nome de um método pode conter até 31 caracteres.

**Nota:** um método projeto que não retorne um resultado também é chamado de um procedimento. Um método projeto que retorna um resultado também é chamado uma função.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Dica:** é uma boa técnica de programação adotar a mesma convenção de nomenclatura que a utilizada por 4D para os métodos integrados. Use caracteres maiúsculos para nomear seus métodos; no entanto, se um método é uma função, capitalize o primeiro caractere de seu nome. Dessa maneira, quando reabrir um banco de dados para manutenção depois de alguns meses, já saberá se um método retorna um resultado, simplesmente olhando seu nome na janela do Explorer.

**Nota:** quando você chama um método, você só digita o nome dele. Entretanto, alguns comandos integrados em 4D, como `ON EVENT CALL`, assim como todos os comandos dos Plug-In, esperam o nome de um método como uma string quando se passar um parâmetro de tipo método. Exemplo:

Exemplos:

```4d
 // Este comando espera um método (função) ou fórmula QUERY BY FORMULA([aTable];Special query)
 // Este comando espera um método (procedimento) ou declaração APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //Mas este comando espera um nome de método ON EVENT CALL("HANDLE EVENTS")
```

Os métodos projeto podem aceitar parâmetros (argumentos). Os parâmetros se passam ao método entre parêntesis, depois do nome do método. Cada parâmetro está separado do próximo por um ponto e vírgula (;). Os parâmetros estão disponíveis dentro do método chamado como variáveis locais numeradas sequencialmente: $1, $2,..., $n. Os parâmetros estão disponíveis dentro do método chamado como variáveis locais numeradas sequencialmente: $1, $2,..., $n. Além disso, podem ser endereçados múltiplos parâmetros consecutivos (e últimos) com a sintaxe ${n}onde n, expressão numérica, é o número do parâmetro. Os parâmetros estão disponíveis dentro do método chamado como variáveis locais numeradas sequencialmente: $1, $2,..., $n. Além disso, podem ser endereçados múltiplos parâmetros consecutivos (e últimos) com a sintaxe ${n}onde n, expressão numérica, é o número do parâmetro.

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

Você designa um comando de plug-in usando seu nome conforme definido pelo plug-in. O nome de um comando de plug-in pode conter até 31 caracteres.

Exemplos:

```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Conjuntos

Do ponto de vista do escopo, há dois tipos de conjuntos:

- Conjuntos interprocesso
- Conjuntos process

4D Server também inclui:

- Conjuntos clientes

### Conjuntos interprocesso

Um conjunto é um conjunto interprocessos se o nome do conjunto for precedido pelos símbolos (`<>`) - um sinal de "menor que" seguido por um sinal de "maior que".

Um nome de conjunto de interprocessos pode conter até 255 caracteres, sem incluir os símbolos `<>`.

### Conjuntos process

Para designar um conjunto processo se utilizar uma expressão de tipo string que represente seu nome (que não pode começar com os símbolos `<>` ou o sinal de dólar $). O nome de um conjunto pode conter até 255 caracteres.

### Conjuntos clientes

O nome de um conjunto cliente deve ser precedido do sinal de dólar ($). Um nome de conjunto de clientes pode conter até 255 caracteres, sem incluir o cifrão.

**Nota:** Os conjuntos são mantidos na máquina servidor. Em certos casos, para fins de eficiência ou especiais, pode ser necessário trabalhar com conjuntos localmente nas máquinas cliente. Para isso, utilizam-se os conjuntos clientes.

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

Do ponto de vista do escopo, há dois tipos de seleções temporárias:

- Seleções temporárias interprocesso
- Seleções temporárias processo.

### Seleções temporárias interprocesso

A named selection is an interprocess named selection if its name is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess named selection name can contain up to 255 characters, not including the `<>` symbols.

### Seleções temporárias processos

Para designar uma seleção nomeada se utiliza uma expressão de tipo string que represente seu nome (que não pode começar com os símbolos `<>` ou o sinal de dólar $). Um nome de seleção temporal pode conter até 255 caracteres.

Exemplos:

```4d
 //Interprocess Named Selection USE NAMED SELECTION([Customers];"<>ByZipcode")
 //Process Named Selection USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Processos

In the single-user version, or in Client/Server on the Client side, there are two types of processes:

- Processos globais
- Processos locais.

### Processos globais

Pode determinar um processo global usando uma expressão string que represente seu nome (que não pode começar com o sinal de dólar $). Um nome de processo pode conter até 255 caracteres.

### Processos locais

Pode determinar um processo local se o nome do processo for precedido pelo sinal de dólar ($). The process name can contain up to 255 characters, not including the dollar sign.

Exemplos:

```4d
 //Iniciar processo global "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Iniciar processo local "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Resumo das convenções de escrita em 4D

A tabela seguinte resume as convenções de nomeação 4D.

| Identificador                  | Max. Largura     | Exemplo                            |
| ------------------------------ | ---------------- | ---------------------------------- |
| Tabela                         | 31               | [Invoices]                         |
| Campo                          | 31               | [Employees]Last Name               |
| Variável/array interprocesso   | `<>` + 31  | `<>vlNextProcessID`          |
| Variável/Array processo        | 31               | vsCurrentName                      |
| Variável/Array local           | $ + 31           | $vlLocalCounter                    |
| Propriedades de objetos        | 255              | $o.myAttribute                     |
| Formulário                     | 31               | "My Custom Web Input"              |
| Objecto de formulário          | 255              | "MyButton"                         |
| Métodos proyecto               | 31               | M_ADD_CUSTOMERS                  |
| Rotina Plug-in                 | 31               | PDF SET ROTATION                   |
| Interprocess Set               | `<>` + 255 | `"<>Records to be Archived"` |
| Conjunto process               | 255              | "Current selected records"         |
| Conjunto cliente               | $ + 255          | "$Previous Subjects"               |
| Seleção nomeada                | 255              | "Employees A to Z"                 |
| Seleção temporal interprocesso | `<>` + 255 | `"<>Employees Z to A"`       |
| Processo local                 | $ + 255          | "$Follow Events"                   |
| Processo global                | 255              | "*P_MODULE_FACTURES*"            |
| Semáforo                       | 255              | "mysemaphore"                      |

**Note:** If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Resolving Naming Conflicts

Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.

4D identifica os nomes utilizados nos procedimentos na seguinte ordem:

1. Campos
2. Comandos
3. Página Métodos
4. Comandos de plug-in
5. Constantes predefinidas
6. Variáveis.

Por exemplo, 4D tem um comando incorporado chamado `Date`. If you named a method *Date*, 4D would recognize it as the built-in `Date` command, and not as your method. Isto impedi-lo-ia de chamar o seu método. If, however, you named a field “Date”, 4D would try to use your field instead of the `Date` command.
