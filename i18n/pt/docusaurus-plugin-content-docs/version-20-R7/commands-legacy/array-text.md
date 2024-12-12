---
id: array-text
title: ARRAY TEXT
slug: /commands/array-text
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TEXT.Syntax-->**ARRAY TEXT** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY TEXT.Summary-->O comando ARRAY TEXT cria e/ou redimensiona um array de elementos do tipo [Texto](# "A character string that may contain from 0 to 2 GB of text") na memória.<!-- END REF-->

* O parâmetro *nomeArray* é o nome do array.
* O parâmetro *tamanho* é o número de elementos em um array.
* O parâmetro *tamanho2* é opcional; se *tamanho2* for especificado, o comando cria um array de duas dimensões. Neste caso, *tamanho* especifica o número de linhas e *tamanho2* especifica o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY TEXT para um array já existente:

* se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos se iniciam em "" (cadeia vazia).
* se você reduzir o tamanho de um array, os últimos elementos deletados do array se perdem.

#### Exemplo 1 

Este exemplo cria um array de processo de 100 elementos de tipo [Texto](# "A character string that may contain from 0 to 2 GB of text"):

```4d
 ARRAY TEXT(atValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 linhas de 50 elementos do tipo [Texto](# "A character string that may contain from 0 to 2 GB of text"):

```4d
 ARRAY TEXT($atValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array de interprocesso de elementos do tipo texto e atribui a cada elemento o valor “Elemento #” seguido pelo seu número de elemento:

```4d
 ARRAY TEXT(◊atValues;50)
 For($vlElem;1;50)
    ◊atValores{$vlElem}:="Elemento #"+String($vlElem)
 End for
```
