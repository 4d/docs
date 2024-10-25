---
id: array-real
title: ARRAY REAL
slug: /commands/array-real
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY REAL.Syntax-->**ARRAY REAL** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY REAL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY REAL.Summary-->O comando ARRAY REAL cria e/ou redimensiona um array de elementos do tipo Real na memória.<!-- END REF--> 

* O parâmetro *nomeArray* é o nome do array.
* O parâmetro *tamanho* é o número de elementos em um array.
* O parâmetro *tamanho2* é opcional; se *tamanho2* for especificado, o comando cria um array de duas dimensões. Neste caso, *tamanho* especifica o número de linhas e *tamanho2* especifica o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY REAL para um array já existente:

* se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos se iniciam em 0.
* se você reduzir o tamanho de um array, os últimos elementos deletados do array se perdem.

#### Exemplo 1 

Este exemplo cria um array de processo de 100 elementos de tipo Real:

```4d
 ARRAY REAL(arValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 linhas de 50 elementos do tipo Real:

```4d
 ARRAY REAL($arValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array de interprocesso de 50 elementos do tipo Real e determina a cada elemento seu número:

```4d
 ARRAY REAL(◊arValores;50)
 For($vlElem;1;50)
    ◊arValores{$vlElem}:=$vlElem
 End for
```

#### Ver também 

[ARRAY INTEGER](array-integer.md)  
[ARRAY LONGINT](array-longint.md)  