---
id: array-longint
title: ARRAY LONGINT
slug: /commands/array-longint
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY LONGINT.Syntax-->**ARRAY LONGINT** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY LONGINT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY LONGINT.Summary-->O comando ARRAY LONGINT cria e/ou redimensiona um array de elementos de tipo Intero longo de 4 bytes em memória.<!-- END REF-->é o nome do array.
* O parâmetro *tamanho* é o número de elementos no array.
* O parâmetro *tamanhoi2* é opcional; se *tamanho2* for especificado, o comando cria um array de duas dimensões. Neste caso, *tamanho* especifica o número de filas e *tamanho2* o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY LONGINT a um array existente:

* Se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos se iniciam em 0.
* Se você reduzir o tamanho de um array, os últimos elementos são deletados do array e se perdem.

#### Exemplo 1 

Este exemplo cria um array de processo de 4 bytes de 100 elementos de tipo [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"):

```4d
 ARRAY LONGINT(aiValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 4 bytes de 100 linhas de 50 elementos do tipo [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"):

```4d
 ARRAY LONGINT($aiValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array interprocesso de 4 bytes de 50 elementos do tipo *Inteiro longo* e determina a cada elemento seu número de elemento:

```4d
 ARRAY LONGINT(◊aiValores;50)
 For($vlElem;1;50)
    ◊aiValores{$vlElem}:=$vlElem
 End for
```

#### Ver também 

[ARRAY INTEGER](array-integer.md)  
[ARRAY REAL](array-real.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 221 |
| Thread-seguro | &check; |
| Proibido no servidor ||


