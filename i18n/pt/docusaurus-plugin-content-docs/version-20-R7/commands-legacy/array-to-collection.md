---
id: array-to-collection
title: ARRAY TO COLLECTION
slug: /commands/array-to-collection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO COLLECTION.Syntax-->**ARRAY TO COLLECTION**  ( *coleçãlo* ; *array* {; *nomProp*}{; *array2* ; *nomProp2* ; ... ; *arrayN* ; *nomPropN*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO COLLECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| coleçãlo | Collection | &#8592; | Coleção a receber o array de dados |
| array | Array | &#8594;  | Array a copiar para a coleção, se nomeProp for passado, array a copiar aos valores da arrayProp na coleção |
| nomProp | Text | &#8594;  | Nome de propriedade objeto cujmo valor a preencher com elementos do array |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY TO COLLECTION.Summary-->O comando **ARRAY TO COLLECTION**  \[#descv\]copia um ou mais *array*(s) nos elementos ou os valores de *nomeProp* da *coleção*\[#/descv\].<!-- END REF-->  
  
Este comando pode funcionar com uma *coleção* que contém valores ou uma *coleção* que contenha objetos, em cujo caso os parâmetros *nomeProp* são obligatórios.

* Se omitir o parâmetro *nomeProp*, o comando copia todos os elementos de *array* a *coleção*. Se a *coleção* não estiver vazia, os elementos existentes são substituídos e são agregados novos elementos se o tamanho de *array* for maior que a longitude da *coleção*. Depois de que se executa o comando, a longitude da *coleção for* idêntica ao tamanho de *array*.
* Se passar um ou mais parâmetros *nomeProp*, o comando cria ou substitui objetos como elementos de *coleção*. Cada objeto se completa com uma propriedade cujo nomee se oferece no parâmetro *nomeProp*, e cujo valor é o elemento de array correspondente. Se a *coleção* não estava vazia, os elementos existentes são substituidos e se agregam novos elementos se o tamanho do *array* for maior que a coleção. Depois de que se executar o comando, a longitude da *coleção for* a mesma que o tamanho do maior array.

#### Exemplo 1 

Deseja copiar um array de texto em uma coleção:

```4d
 var $colFruits : Collection
 $colFruits:=New collection
 ARRAY TEXT($artFruits;4)
 $artFruits{1}:="Orange"
 $artFruits{2}:="Banana"
 $artFruits{3}:="Apple"
 $artFruits{4}:="Grape"
 ARRAY TO COLLECTION($colFruits;$artFruits)
  //$colFruits[0]="Orange"
  //$colFruits[1]="Banana"
  //...
```

#### Exemplo 2 

Se quiser copiar valores de campo em uma coleção de objetos por meio de arrays:

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($artCity;0)
 ARRAY LONGINT($arLZipCode;0)
 SELECTION TO ARRAY([Customer]City;$artCity)
 SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)
 ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")
  //$col[0]={"cityName":"Cleveland","Zip":35049}
  //$col[1]={"cityName":"Blountsville","Zip":35031}
  //...
```

#### Exemplo 3 

Se quiser copiar um array de texto em uma coleção compartilhada:

```4d
 ARRAY TEXT($at;1)
 
 APPEND TO ARRAY($at;"Apple")
 APPEND TO ARRAY($at;"Orange")
 APPEND TO ARRAY($at;"Grape")
 
 var $sharedCol : Collection
 $sharedCol:=New shared collection
 
 Use($sharedCol)
    ARRAY TO COLLECTION($sharedCol;$at)
 End use
```

#### Ver também 

[COLLECTION TO ARRAY](collection-to-array.md)  
*Conversões de Tipo entre coleções e arrays 4D*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1563 |
| Thread-seguro | &check; |
| Proibido no servidor ||


