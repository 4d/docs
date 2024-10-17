---
id: array-date
title: ARRAY DATE
slug: /commands/array-date
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY DATE.Syntax-->**ARRAY DATE** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY DATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY DATE.Summary-->O comando ARRAY DATE cria e/ou redimensiona um array de elementos de tipo Data em memória.<!-- END REF-->

* O parâmetro *nomeArray* é o nome do array.
* O parâmetro *tamanho* é o número de elementos no array.
* O parâmetro *tamanho2* é opcional; se *tamanho2*, for especificado, o comando cria um array de duas dimensões. Neste caso, *tamanho* especifica o número de linhas e *tamanho2* especifica o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY DATE para um array já existente:

* se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos se iniciam em data nula (!00/00/00!).
* se você reduzir o tamanho de um array, os últimos elementos deletados do array são perdidos.

#### Exemplo 1 

Este exemplo cria um array de processo de 100 elementos de tipo Data:

```4d
 ARRAY DATE(adValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 linhas de 50 elementos do tipo Data:

```4d
 ARRAY DATE($adValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array interprocesso de 50 elementos do tipo Data e determina a cada elemento a data atual mais um número de dias igual ao número de elemento:

```4d
 ARRAY DATE(◊adValores;50)
 For($vlElem;1;50)
    ◊adValores{$vlElem}:=Current date+$vlElem
 End for
```
