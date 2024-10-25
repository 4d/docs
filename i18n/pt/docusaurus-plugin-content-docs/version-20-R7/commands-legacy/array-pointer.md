---
id: array-pointer
title: ARRAY POINTER
slug: /commands/array-pointer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY POINTER.Syntax-->**ARRAY POINTER** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY POINTER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY POINTER.Summary-->O comando ARRAY POINTER cria e/ou redimensiona um array de elementos do tipo Puntero na memória.<!-- END REF-->

* O parâmetro *nomeArray* é o nome do array.
* O parâmetro *tamanho* é o número de elementos em um array.
* O parâmetro *tamanho2* é opcional; se *tamanho2* for especificado, o comando cria um array de duas dimensões. Neste caso, *tamanho* especifica o número de linhas e *tamanho2* especifica o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY POINTER para um array já existente:

* se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos se iniciam em *ponteiro* nulo. Isso significa que ao aplicar Nil a um destes novos elementos resulta em Verdadeiro.
* se você reduzir o tamanho de um array, os últimos elementos deletados do array se perdem.

#### Exemplo 1 

Este exemplo cria um array de processo de 100 elementos de tipo [Ponteiro](# "A reference to another variable (including arrays and array elements), table, or field"):

```4d
 ARRAY POINTER(apValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 linhas de 50 elementos do tipo [Ponteiro](# "A reference to another variable (including arrays and array elements), table, or field"):

```4d
 ARRAY POINTER($apValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array de interprocesso de elementos do tipo [Ponteiro](# "A reference to another variable (including arrays and array elements), table, or field") e determina a cada elemento a que aponta a tabela cujo número é o mesmo do elemento. O tamanho do array é igual ao número de tabelas na base de dados. No caso de uma tabela deletada, o resultado da linha será Nil.

```4d
 ARRAY POINTER(◊apValores;Last table number)
 For($vlElem;1;Size of array(◊apValores);1;-1)
    If(Is table number valid($vlElem))
       ◊apValores{$vlElem}:=Table($vlElem)
    End if
 End for
```
