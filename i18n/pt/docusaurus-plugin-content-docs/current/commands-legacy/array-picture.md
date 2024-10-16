---
id: array-picture
title: ARRAY PICTURE
slug: /commands/array-picture
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY PICTURE.Syntax-->**ARRAY PICTURE** ( *nomeArray* ; *tamanho* {; *tamanho2*} )<!-- END REF-->
<!--REF #_command_.ARRAY PICTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArray | Array | &#8594;  | Nome do array |
| tamanho | Integer | &#8594;  | Número de elementos no array ou Número de linhas se tamanho 2 for especificado |
| tamanho2 | Integer | &#8594;  | Número de colunas no array de duas dimensões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY PICTURE.Summary-->O comando ARRAY PICTURE cria e/ou redimensiona um array de elementos [Imagem](# "Can be any Windows or Macintosh picture") na memória.<!-- END REF-->

* O parâmetro *nomeArray* é o nome do array.
* O parâmetro *tamanho* é o número de elementos em um array.
* O parâmetro *tamanho2* é opcional; se *tamanho2* for especificado, o comando cria um array de duas dimensões. Neste caso, *tamanho* especifica o número de linhas e *tamanho2* especifica o número de colunas em cada array. Cada linha em um array de duas dimensões pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimensão do array, você pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimensões.

Enquanto se aplica ARRAY PICTURE para um array já existente:

* se você aumentar o tamanho de um array, os elementos existentes não sofrem mudanças, e os novos elementos se iniciam para imagems vazias. Isto significa que [Picture size](picture-size.md "Picture size") aplicados a um destes elementos vai retornar *0*.
* se você reduzir o tamanho de um array, os últimos elementos deletados do array são perdidos.

#### Exemplo 1 

Este exemplo cria um array de processo de 100 elementos de tipo [Imagem](# "Can be any Windows or Macintosh picture"):

```4d
 ARRAY PICTURE(agValores;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 linhas de 50 elementos de tipo [Imagem](# "Can be any Windows or Macintosh picture"):

```4d
 ARRAY PICTURE($agValores;100;50)
```

#### Exemplo 3 

Este exemplo cria um array de interprocesso de tipo [Imagem](# "Can be any Windows or Macintosh picture") e carrega cada imagem de um dos elementos do array. O tamanho do array é igual ao número de recursos *'PICT'* disponíveis na base. O nome do recurso do array começa por *"User Intf/"*:

```4d
 RESOURCE LIST("PICT";$aiResIDs;$asResNomes)
 ARRAY PICTURE(◊agValores;Size of array($aiResIDs))
 $vlPictElem:=0
 For($vlElem;1;Size of array(◊agValues))
    If($asResNames="User Intf/@")
       $vlPictElem:=vlPictElem+1
       GET PICTURE RESOURCE("PICT";$aiResIDs{$vlElem};$vgImagem)
       ◊agValores{$vlPictElem}:=$vgImagem
    End if
 End for
 ARRAY PICTURE(◊agValores;$vlPictElem)
```
