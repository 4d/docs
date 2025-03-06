---
id: collection-to-array
title: COLLECTION TO ARRAY
slug: /commands/collection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.COLLECTION TO ARRAY.Syntax-->**COLLECTION TO ARRAY** ( *coleção* ; *array* {; *nomProp*}{; *array2* ; *nomProp2* ; ... ; *arrayN* ; *nomPropN*} )<!-- END REF-->
<!--REF #_command_.COLLECTION TO ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| coleção | Collection | &#8594;  | Coleção a copiar em array |
| array | Array | &#8592; | Array que vai receber os elementos da coleção; se nomeProp for passado, array que  vai receber os valores de nomeProp na coleção |
| nomProp | Text | &#8594;  | Nome de propriedade de objeto cujos valores vão ser copiados em array ("" para todos os elementos) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.COLLECTION TO ARRAY.Summary-->O comando **COLLECTION TO ARRAY** preenche um ou mais *array*(s) com elementos ou valores de *nomeProp* da *coleção* em *array*(s).<!-- END REF-->

Este comando pode funcionar com uma *coleção* que contenha valores ou uma *coleção* que contenha objetos, em cujo caso os parâmetros *nomeProp* são obrigatórios.

* Se omitir o parâmetro *nomeProp*, o comando copia todos os elementos de *coleção* a *array*. Depois de que se executa o comando, o tamanho de *array* é idêntico a longitude da *coleção*.
* Se passar um ou mais parâmetros *nomeProp*(s), *coleção* deve ser uma coleção de objetos (se ignoram outros elementos). Neste caso, cada parâmetro *nomeProp* indica o nome de uma propriedade dentro de cada objeto da coleção cujos valores deseja copiar no *array* correspondente. Pode passar todo par *nomeProp* / *array*, combinando tipos de array. Depois de que se executa o comando, cada tamanho de *array* é idêntico a longitude de *coleção*.

Em todos os casos, 4D converte os elementos ou valores da coleção de acordo ao tipo de *array* (se for necessário). As regras de conversão são detalhadas na página *Conversões de Tipo entre coleções e arrays 4D*.

#### Exemplo 1 

Se quiser copiar uma coleção de strings em um array de texto:

```4d
 var $fruits : Collection
 $fruits:=New collection("Orange";"Banana";"Apple";"Grape")
 ARRAY TEXT($artFruits;0)
 COLLECTION TO ARRAY($fruits;$artFruits)
  //$artFruits{1}="Orange"
  //$artFruits{2}="Banana"
  //...
```

#### Exemplo 2 

Se quiser copiar diferentes valores de propriedade de uma coleção de objetos em diferentes arrays:

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($city;0)
 ARRAY LONGINT($zipCode;0)
 $col.push(New object("name";"Cleveland";"zc";35049))
 $col.push(New object("name";"Blountsville";"zc";35031))
 $col.push(New object("name";"Adger";"zc";35006))
 $col.push(New object("name";"Clanton";"zc";35046))
 $col.push(New object("name";"Shelby";"zc";35143))
 
 COLLECTION TO ARRAY($col;$city;"name";$zipCode;"zc")
  //$city{1}="Cleveland", $zipCode{1}=35049
  //$city{2}="Blountsville", $zipCode{2}=35031
  //...
```

#### Ver também 

[ARRAY TO COLLECTION ](array-to-collection.md)  
*Conversões de Tipo entre coleções e arrays 4D*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1562 |
| Thread-seguro | &check; |


