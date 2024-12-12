---
id: array-object
title: ARRAY OBJECT
slug: /commands/array-object
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY OBJECT.Syntax-->**ARRAY OBJECT** ( *nomArray* ; *tam* {; *tam2*} )<!-- END REF-->
<!--REF #_command_.ARRAY OBJECT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nome do array |
| tam | Integer | &#8594;  | Número de elementos do array ou número de arrays se especificado tam2 |
| tam2 | Integer | &#8594;  | Número de elementos do array 2D |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY OBJECT.Summary-->O comando **ARRAY OBJECT** cria e/ou redimensiona um array de elementos de tipo Objeto de linguagem em memória.<!-- END REF-->

O parâmetro *nomArray* é o nome do array. Pode utilizar qualquer nome conforme as convenções de 4D.  
  
O parâmetro de *tam* é o número de elementos do array.  
  
O parâmetro *tam2* é opcional. Se passar, este comando cria um array de duas dimensões. Neste caso, *tam* especifica o número de filas e *tam2* o número de colunas de cada array. Cada fila em um array de duas dimensões se pode processar tanto como um elemento e como um array. Isto significa que quando se trabalha com a primeira dimensão de um array de duas dimensões, se pode inserir e retirar arrays inteiros utilizando outros comandos do tema "Arrays".  
  
Quando se aplica o comando **ARRAY OBJECT** a um array existente:

* Se amplia seu tamanho, os elementos existentes não se mudam e os novos elementos não estão definidos. Pode provar se um elemento se define utilizando o comando [OB Is defined](ob-is-defined.md).
* Se reduzir seu tamanho, se eliminam e perdem os elementos ao "fundo" do array.

#### Exemplo 1 

Criação de um array de processo de 100 elementos de tipo objeto:

```4d
 ARRAY OBJECT(arrObjects;100)
```

#### Exemplo 2 

Criação de um array local de 100 filas, contendo cada um 50 elementos de tipo de objeto:

```4d
 ARRAY OBJECT($arrObjects;100;50)
```

#### Exemplo 3 

Criação e cheio de um array local de objetos:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4)
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James";"age";3)
 APPEND TO ARRAY($arrayChildren;$ref_james)
  // $arrayChildren{1} -> {"name":"Richard","age":7}
  // $arrayChildren{2} -> {"name":"Susan","age":4}
  // $arrayChildren{3} -> {"name":"James","age":3}
```

#### Ver também 

[C\_OBJECT](c-object.md)  
*Criando arrays*  
*Objetos (Linguagem)*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1221 |
| Thread-seguro | &check; |


