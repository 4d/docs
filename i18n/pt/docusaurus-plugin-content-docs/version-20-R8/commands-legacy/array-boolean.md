---
id: array-boolean
title: ARRAY BOOLEAN
slug: /commands/array-boolean
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BOOLEAN.Syntax-->**ARRAY BOOLEAN** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BOOLEAN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY BOOLEAN.Summary-->O comando ARRAY BOOLEAN cria e/ou redimensiona um array de elementos  na memória.<!-- END REF-->é o nome do array.
* O parâmetro *tamanho* é o número de elementos em um array.
* O parâmetro *tamanho2* é opcional; se *tamanho2* for especificado, o comando cria um array de duas dimensões.

Neste caso, *tamanho* especifica o número de filas e *tamanho2* especifica o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY BOOLEAN para um array já existente:

* se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos são inicializados em False.
* se você reduzir o tamanho de um array, os últimos elementos deletados do array são perdidos.

**Dica:** em alguns contextos, um alternativa à utilização de arrays Booleanos é usar um array Inteiro onde cada elemento signifique "verdadeiro" se for diferente de zero e signifique "falso" se for igual a zero.

#### Exemplo 1 

Este exemplo cria um array de processo de 100 elementos de tipo [Booleano](# "Can be either TRUE or FALSE"):

```4d
 ARRAY BOOLEAN(abValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 linhas de 50 elementos do tipo [Booleano](# "Can be either TRUE or FALSE"):

```4d
 ARRAY BOOLEAN($abValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array interprocesso de 50 elementos do tipo Booleano e determina que cada elemento signifique "Verdadeiro":

```4d
 ARRAY BOOLEAN(◊abValues;50)
 For($vlElem;1;50)
    ◊abValores{$vlElem}:=(($vlElem%2)=0)
 End for
```

#### Ver também 

[ARRAY INTEGER](array-integer.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 223 |
| Thread-seguro | &check; |


