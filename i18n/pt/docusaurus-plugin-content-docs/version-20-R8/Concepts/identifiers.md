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

O nome de uma classe deve estar em conformidade com as regras normais de nomeação de propriedades para notação de pontos.

> Não se recomenda dar o mesmo nome a uma classe e a [tabela de base de dados](#tables), a fim de evitar qualquer conflito.

## Funções

Nomes de função devem estar em conformidade com as regras normais de nomeação de propriedades para notação de pontos.

> \*\*Dica: Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D.

## Propriedades dos objectos

O nome de uma propriedade de objeto (também chamada de *atributo* de objeto) pode conter até 255 caracteres.

As propriedades dos objetos podem fazer referência a valores escalares, elementos ORDA, funções de classe, outros objetos, etc. Seja qual for sua natureza, os nomes das propriedades do objeto devem seguir as seguintes regras **se você quiser usar a [notação de ponto](dt_object.md#propriedades-do-objeto)**:

- Um nome deve começar por um caractere alfabético, um subscrito ou um sinal de dólar ("$") (lembre que um sinal de dólar pode denotar um elemento local, ver abaixo).
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Os nomes são sensíveis às maiúsculas e minúsculas.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

Começar o nome de uma propriedade de objecto com um carácter de sublinhado ("_") excluirá a propriedade das funcionalidades de preenchimento automático no editor de código 4D. Por exemplo, se você declarar `$o._myPrivateProperty`, isso não será proposto no editor de código quando você digitar `"$o. "`.

:::

Ver también [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

Se você usar **notação de string** dentro de colchetes, os nomes das propriedades podem conter qualquer caractere (ex: `meuObjeto["1-" First property"]`).

:::

## Parâmetros

Os nomes dos parâmetros devem começar com um caracter $ e seguir as mesmas regras que os [nomes das variáveis](#variables).

Exemplos:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Métodos projeto

Um método projeto (procedimento ou função) se designa utilizando seu nome. Um nome de método pode conter até 31 caracteres.

- Um nome de método projecto deve começar com uma letra, um dígito, ou um sublinhado
- A partir daí, o nome pode incluir qualquer letra ou dígito, o carácter de sublinhado ("_") ou o carácter de espaço.
- Não use nomes reservados, por exemplo, nomes de comandos 4D (`Date`, `Time`, etc), palavras-chave (`If`, `for`, etc.), ou nomes constantes (`Euro`, `Black`, `Sexta`, etc.).
- Os nomes dos métodos projecto são insensíveis a maiúsculas e minúsculas.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Dica:** É uma boa técnica de programação adotar a mesma convenção de nomenclatura que a utilizada por 4D para os métodos integrados. Use maiúsculas para nomear seus métodos, entretanto, se um método for uma função, coloque em maiúsculas o primeiro caractere de seu nome. Dessa maneira, quando reabrir um banco de dados para manutenção depois de alguns meses, já saberá se um método retorna um resultado, simplesmente olhando seu nome na janela do Explorer.

> Quando chamar um método, apenas digite seu nome. Entretanto, alguns comandos integrados em 4D, como ON EVENT CALL, assim como todos os comandos de Plug-In, esperam o nome de um método como uma string quando se passar um parâmetro de tipo método.

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
- Não use nomes reservados, por exemplo, nomes de comandos 4D (`Date`, `Time`, etc), palavras-chave (`If`, `for`, etc.), ou nomes constantes (`Euro`, `Black`, `Sexta`, etc.).
- Nomes não devem incluir palavras chave SQL (comando, atributo, etc).

Exemplos:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Não é recomendável dar o mesmo nome a uma tabela e a uma [classe](#classes), para evitar qualquer conflito.

## Variáveis.

O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos  .

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables) (deprecated).
- A partir daí, o nome pode incluir qualquer letra ou dígito e o carácter de sublinhado ("_").
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), system variable names (`OK`, `document`...), or constant names (`Euro`, `Black`, `Friday`, etc.).
- O nome de uma variável interprocessada pode ter até 31 caracteres, não incluindo os símbolos <code>&lt;&gt;</code> .

Exemplos:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

### Compatibidade

Some naming practices were previously allowed but are no longer supported when the [direct typing mode is enabled](../Project/compiler.md#enabling-direct-typing) (introduced in 4D 20 R7). Enabling this mode will produce syntax errors if:

- a variable name has a digit as first character,
- a variable name contains space characters,
- you declared variables named $0, $1, etc.

## Outros nomes

Na linguagem 4D, vários elementos têm seus nomes manejados como strings: forms, form objects, named selections, processes, sets, menu bars, etc.

O nome de um conjunto interprocesso pode ter até 255 caracteres, não incluindo os símbolos <code></code> (se houver).

- Os nomes das cadeias de caracteres podem conter quaisquer caracteres.
- Os caracteres de espaço não estão permitidos.

Exemplos:

```4d
DIALOG([Storage];"Caixa de notas"+String($vlStage))
OBJETIVO SET FONT(*;"Binfo";"Tempos")
USE SELECÇÃO NOMED ([Customers];"Fechado")//Processo da Seleção Nomeada
USE SELECÇÃO NOTON([Customers]; <>ByZipcode") /// Interprocess Nomeado Seleção
 //Iniciando o processo global "Adicionar Clientes"
$vlProcessID:=Novo processo ("P_ADD_CUSTOMERS";48*1024; Adicionar Clientes")
 //Iniciando o processo local "$Follow Movimentos de Mouse"
$vlProcessID:=Novo processo ("P_MOUSE_SNIFFER"; 6*1024;"$Follow Movimentos de mouse")
CONFIGURAÇÃO CRIADA ([Customers]; Pedidos de clientes")///Processo definir
USE SET("<>Registros Excluídos") //Interprocess set
If(Registros no conjunto("$Selection"+String($i))>0) //Cliente definido

```
