---
id: array-integer
title: ARRAY INTEGER
slug: /commands/array-integer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY INTEGER.Syntax-->**ARRAY INTEGER** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY INTEGER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY INTEGER.Summary-->O comando ARRAY INTEGER cria e/ou redimensiona um array de elementos de tipo *Inteiro* de 2 bytes de memória.<!-- END REF-->é o nome do array.
* O parâmetro *tamanho* é o número de elementos em um array.
* O parâmetro *tamanho2* é opcional; se *tamanho2*, for especificado, o comando cria um array de duas dimensões. Neste caso, size especifica o número de linhas e *tamanho2*especifica o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY INTEGER para um array já existente:

* se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos se iniciam em 0.
* se você reduzir o tamanho de um array, os últimos elementos são deletados do array e se perdem.

#### Exemplo 1 

Este exemplo cria um array de processo de 2 bytes de 100 elementos de tipo [Inteiro](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"):

```4d
 ARRAY INTEGER(aiValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 2 bytes de 100 linhas de 50 elementos do tipo [Inteiro](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"):

```4d
 ARRAY INTEGER($aiValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array interprocesso de 2 bytes de 50 elementos do tipo *Inteiro* e determina a cada elemento seu número de elemento:

```4d
 ARRAY INTEGER(◊aiValores;50)
 For($vlElem;1;50)
    ◊aiValores{$vlElem}:=$vlElem
 End for
```

#### Ver também 

[ARRAY LONGINT](array-longint.md)  
[ARRAY REAL](array-real.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 220 |
| Thread-seguro | &check; |


