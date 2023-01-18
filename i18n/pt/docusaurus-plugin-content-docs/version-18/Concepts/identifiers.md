---
id: identifiers
title: Identificadores
---

Esta seção descreve as convenções e regras para nomear os vários elementos da linguagem 4D (variáveis, tabelas, objetos, formulários, etc)

## Regras básicas

As regras abaixo são aplicadas à todas as estruturas de 4D.

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Pontos (".") Periods (".") and brackets ("[ ]") are not allowed in table, field, method, or variable names.
- Não são permitidos vírgulas, barras inclinadas, aspas nem dois pontos.
- Os caracteres reservados para seu uso como oepradores como * e + não estão permitidos.
- Não use nomes reservados, ou seja, nomes de comando 4D (`Date`, `Time`, etc), palavras chaves (If, For, etc.), e constantes.
- Os espaços finais são ignorados.

### Regras adicionais para as propriedades dos objetos e os nomes ORDA

- Os caracteres de espaço não estão permitidos.
- Pontos (".") Periods (".") and brackets ("[ ]") are not allowed.
- Os nomes são sensíveis às maiúsculas e minúsculas.

### Regras adicionais para SQL

- Só são aceitos os caracteres _0123456789abcdefghijklmnopqrstuvwxyz
- Nomes não devem incluir palavras chave SQL (comando, atributo, etc).

**Nota:** a área "SQL" do Inspector no editor de estruturas indica automaticamente qualquer caractere não autorizado no nome de uma tabela ou campo.

## Tabelas

Uma tabela se designa colocando seu nome entre parênteses: [...]. Um nome de tabela pode conter até 31 caracteres.

Exemplos:

```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Campos

Para designar um campo, primeiro se especifica a tabela a qual pertence. O nome do campo segue imediatamene o nome da tabela. Um nome campo pode conter até 31 caracteres.

Exemplos:

```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Variáveis interprocesso

Designa-se uma variável interprocessada precedendo o nome da variável com os símbolos (`<>`) - um sinal "menos do que" seguido de um sinal "maior do que".

O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos `<>` .

Exemplos:

```4d
<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
```

## Variáveis processo

Designa-se uma variável de processo utilizando o seu nome (que não pode começar com os símbolos `<>` nem com o símbolo do dólar $). Um nome de processo pode conter até 31 caracteres.

Exemplos:

```4d
<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
```

## Variáveis locais

Uma variável local é determinada colocando um sinal de dólar ($) antes do nome da variável.  Um nome de variável local pode conter até 31 caracteres, sem incluir o sinal de dólar.

Exemplos:

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

Designa-se uma variável interprocessada precedendo o nome da variável com os símbolos (`<>`) - um sinal "menos do que" seguido de um sinal "maior do que".

O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos `<>` .

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

O nome de um array local vai precedido do sinal de dólar ($). Um nome de array local pode conter até 31 caracteres, sem incluir o sinal de dólar.

Exemplos:

```4d
ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
```

### Elementos de arrays

A referência a um elemento de um array local, processo ou interprocesso se realiza mediante chaves ("{ }"). O elemento ao qual faz referência se indica com uma expressão numérica.

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

### Elementos de arrays de duas dimensões

A referência a um elemento de um array local, processo ou interprocesso se realiza mediante chaves ("{ }}) duas vezes. O elemento ao que se faz referência se denota através de duas expressões numéricas em dois conjuntos de pares de chaves

Exemplos:

```4d
 //Direcionamento de um elemento de um array interprocesso de duas dimensões If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

    //Direcionar um elemento de uma array processo de duas dimensões If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

    //Direcionar um elemento de um array local de duas dimensões If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Atributos de objetos

Quando a notação objeto estiver ativada, é designado um atributo de objeto (também chamado propriedade de objeto) colocando um ponto (".")  entre o nome do objeto (ou do atributo) e o nome do atributo. Um nome de atributo pode conter até 255 caracteres e diferencia entre  maiúsculas e minúsculas.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Nota:** são aplicadas regras adicionais aos nomes de atributos de objetos (devem ser ajustados à especificação ECMAScript). Para saber mais, consulte [Identificadores de propriedades de objetos](Concepts/dt_object.md#object-property-identifiers).

## Formulários

Um formulário se designa mediante uma expressão de tipo string que representa seu nome. Um nome de formulário pode conter até 31 caracteres.

Exemplos:

```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Objetos de formulários

Se designar um objeto de formulário passando seu nome como uma string, precedida pelo parâmetro *. Um nome de objeto de formulário pode conter até 255 caracteres.

Exemplo:

```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Nota:** não confunda os objetos de formulário (botões, list boxes, variáveis editáveis, etc.) e os objetos da linguagem 4D. Os objetos da linguagem 4D são criados e manipulados através da notação de objetos ou de comandos dedicados.

## Métodos projeto

Um método projeto (procedimento ou função) se designa utilizando seu nome. Um nome de método pode conter até 31 caracteres.

**Nota:** um método projeto que não devolve um resultado também se chama um procedimento. Um método projeto que devolve um resultado também se denomina função.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Dica:** é uma boa técnica de programação adotar a mesma convenção de nomenclatura que a utilizada por 4D para os métodos integrados. Use maiúsculas para nomear seus métodos, entretanto, se um método for uma função, coloque em maiúsculas o primeiro caractere de seu nome. Dessa maneira, quando reabrir um banco de dados para manutenção depois de alguns meses, já saberá se um método retorna um resultado, simplesmente olhando seu nome na janela do Explorer.

**Nota:** quando chamar a um método, só tem que escrever seu nome. Entretanto, alguns comandos integrados em 4D, como `ON EVENT CALL`, assim como todos os comandos de Plug-In, esperam o nome de um método como uma string quando se passar um parâmetro de tipo método. Exemplo:

Exemplos:

```4d
 // Este comando espera um método (função) ou fórmula
QUERY BY FORMULA([aTable];Special query)
 // Este comando espera um método (procedimento) ou declaração
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //Mas este comando espera um nome de método
ON EVENT CALL("HANDLE EVENTS")
```

Os métodos projeto podem aceitar parâmetros (argumentos). Os parâmetros se passam ao método entre parêntesis, depois do nome do método. Cada parâmetro está separado do próximo por um ponto e vírgula (;). Os parâmetros estão disponíveis dentro do método chamado como variáveis locais numeradas sequencialmente: $1, $2,..., $n. Os parametros estão disponíveis dentro do método chamado como variáveis locais numeradas consecutivamente: $1, $2,…, $n. Além disso, pode direcionar múltiplos parâmetros consecutivos com a sintaxe ${n} onde n, expressão numérica, é o número do parâmetro.

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
    //- Também  podem ser direcionados como, por exemplo, ${$vlParam} onde $vlParam é 1, 2 ou 3
    //- O valor resultante se atribui a $0
vtClone:=Dump("is";"the";"it")
```

## Comandos de plug-in

Para designar um comando de plug-in se utiliza seu nome, tal e como o define o plug-in. O nome de um comando plug-in pode conter até 31 caracteres.

Exemplos:

```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Conjuntos

Desde o ponto de vista do escopo, há dois tipos de conjuntos:

- Conjuntos interprocesso
- Conjuntos processo

4D Server também inclui:

- Conjuntos clientes

### Conjuntos interprocesso

A set is an interprocess set if the name of the set is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess set name can contain up to 255 characters, not including the `<>` symbols.

### Conjuntos processo

Para designar um conjunto processo se utilizar uma expressão de tipo string que represente seu nome (que não pode começar com os símbolos `<>`  ou o sinal de dólar $). O nome de um conjunto processo pode conter até 255 caracteres.

### Conjuntos clientes

O nome de um conjunto cliente deve ser precedido do sinal de dólar ($). Um nome de conjunto cliente pode conter até 255 caracteres, sem incluir o sinal de dólar.

**Nota:** os conjuntos são mantidos pelo equipamento servidor. Em certos casos, por motivos especiais ou por eficiência, pode querer trabalhar com conjuntos localmente no equipamento Cliente. Para fazer isso, use conjuntos Clientes.

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

Relativo ao escopo, há dois tipos de seleções temporárias/named:

- Seleções interprocesso temporárias
- Seleções processo temporárias.

### Seleções interprocesso temporárias

Uma seleção temporária é uma seleção interprocesso temporária se seu nome for precedido dos símbolos (`<>`) - um sinal "menor que" seguido de um sinal "maior que".

O nome de uma variável interprocessada pode ter até 255 caracteres, não incluindo os símbolos `<>` .

### Seleções processo temporárias

Para designar uma seleção nomeada se utiliza uma expressão de tipo string que represente seu nome (que não pode começar com os símbolos `<>`  ou o sinal de dólar $). O nome de uma seleção temporária pode conter até 255 caracteres.

Exemplos:

```4d
 //Seleção nomeada interprocesso
USE NAMED SELECTION([Customers];"<>ByZipcode")
 //Seleção nomeada processo
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Processos

Em modo monousuário, ou em Cliente/Servidor do lado do Cliente, há dois tipos de processos:

- Processos globais
- Processos locais.

### Processos globais

Pode determinar um processo global usando uma expressão string que represente seu nome (que não pode começar com o sinal de dólar $). Um nome de processo pode conter até 255 caracteres.

### Processos locais

Pode determinar um processo local se o nome do processo for precedido pelo sinal de dólar ($). O nome de processo pode conter até 255 caracteres, sem incluir o sinal de dólar.

Exemplos:

```4d
 //Iniciar processo global "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Iniciar processo local "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Resumo das convenções de escrita em 4D

A tabela abaixo resume as convenções de nomes em 4D.

| Identificador                  | Tamanho Máx      | Exemplo                            |
| ------------------------------ | ---------------- | ---------------------------------- |
| Tabela                         | 31               | [Invoices]                         |
| Campo                          | 31               | [Employees]Last Name               |
| Variável/array interprocesso   | `<>` + 31  | `<>vlNextProcessID`          |
| Variável/Array processo        | 31               | vsCurrentName                      |
| Variável/Array local           | $ + 31           | $vlLocalCounter                    |
| Propriedades de objetos        | 255              | $o.myAttribute                     |
| Formulário                     | 31               | "My Custom Web Input"              |
| Objetos de formulário          | 255              | "MyButton"                         |
| Método Projeto                 | 31               | M_ADD_CUSTOMERS                  |
| Comando de plug-in             | 31               | PDF SET ROTATION                   |
| Conjuntos interprocesso        | `<>` + 255 | `"<>Records to be Archived"` |
| Conjuntos processo             | 255              | "Current selected records"         |
| Conjunto cliente               | $ + 255          | "$Previous Subjects"               |
| Seleção nomeada                | 255              | "Employees A to Z"                 |
| Seleção temporal interprocesso | `<>` + 255 | `"<>Employees Z to A"`       |
| Processo local                 | $ + 255          | "$Follow Events"                   |
| Processo global                | 255              | "*P_INVOICES_MODULE*"            |
| Semáforo                       | 255              | "mysemaphore"                      |

**Nota:** se caracteres não romanos, fora do alfabeto latino, forem usados nos nomes dos identificadores, o tamanho máximo pode ser menor.

## Resolução de conflitos de nomes

Tenha certeza de usar nomes únicos para os diferentes elementos de seu banco de dados. Se um objeto particular tiver o mesmo nome que outro objeto de diferente tipo (por exemplo, se um campo se chamar Pessoa e uma variável também se chamar Pessoa), 4D utiliza um sistema de prioridade.

4D identifica os nomes utilizados nos métodos em função na seguinte ordem de ordem de prioridade:

1. Campos
2. Comandos
3. Métodos
4. Comandos de plug-in
5. Constantes predefinidas
6. Variáveis.

Por exemplo, 4D tem um comando integrado chamado `Date`. Se chamar a um método *Date*, 4D o reconhecerá como o comando integrado `Date`, e não como seu método. Isso impediria de chamar seu método. Se entretanto, chamar um campo de "Date", 4D tentará usar seu campo ao invés do comando `Date`.
