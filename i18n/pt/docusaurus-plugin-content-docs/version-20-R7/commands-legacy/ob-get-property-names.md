---
id: ob-get-property-names
title: OB GET PROPERTY NAMES
slug: /commands/ob-get-property-names
displayed_sidebar: docs
---

<!--REF #_command_.OB GET PROPERTY NAMES.Syntax-->**OB GET PROPERTY NAMES** ( *objeto* ; *arrProp* {; *arrTipos*} )<!-- END REF-->
<!--REF #_command_.OB GET PROPERTY NAMES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto estruturado |
| arrProp | Text array | &#8592; | Nomes das propriedades |
| arrTipos | Integer array | &#8592; | Tipos de propriedades |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB GET PROPERTY NAMES.Summary-->O comando **OB GET PROPERTY NAMES** devolve, em *arrProp*, os nomes das propriedades contidas no objeto de linguagem designados pelo parâmetro *objeto* .<!-- END REF-->deve ter sido definido utilizando o comando [C\_OBJECT](c-object.md) ou designar um campo objeto 4D.  
  
Passe um array texto no parâmetro *arrProp*. Se o array não existe, o comando cria e o redimensiona de forma automática.  
  
Opcionalmente, também pode passar um array inteiro longo em *arrTipos*. Para cada elemento de *arrProp*, o comando devolve, em *arrTipos*, o tipo de valor armazenado na propriedade. Pode comparar os valores recebidos com as seguintes constantes, que se encontram no tema "*Tipos de campos e variáveis*":

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Is Boolean    | Inteiro longo | 6     |
| Is collection | Inteiro longo | 42    |
| Is null       | Inteiro longo | 255   |
| Is object     | Inteiro longo | 38    |
| Is real       | Inteiro longo | 1     |
| Is text       | Inteiro longo | 2     |
| Object array  | Inteiro longo | 39    |
  
  
Nota: para os atributos array, o comando devolve Is collection.

#### Exemplo 1 

Deseja provar que um objeto não está vazio:

```4d
 ARRAY TEXT(arrNames;0)
 ARRAY LONGINT(arrTypes;0)
 var $ref_richard : Object
 OB SET($ref_richard;"name";"Richard";"age";7)
 OB GET PROPERTY NAMES($ref_richard;arrNames;arrTypes)
  // arrNames{1}="name", arrNames{2}="age"
  // arrTypes{1}=2, arrTypes{2}=1
 If(Size of array(arrNames)#0)
  // ...
 End if
```

#### Exemplo 2 

Utilizando um elemento de array de objetos:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4;"girl";True) //atributo adicional
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James")
 OB SET NULL($ref_james;"age") //atributo null
 APPEND TO ARRAY($arrayChildren;$ref_james)
 
 OB GET PROPERTY NAMES($arrayChildren{1};$arrNames;$arrTypes)
  // $arrayChildren{1} = {"name":"Richard","age":7}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrTypes{1}=2
  // $arrTypes{2}=1
 
 OB GET PROPERTY NAMES($arrayChildren{2};$arrNames;$arrTypes)
  // $arrayChildren{3} = {"name":"Susan","age":4,"girl":true}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrNames{3}="girl"
  // $arrTypes{1}=2
  // $arrTypes{2}=1
  // $arrTypes{3}=6
 
 OB GET PROPERTY NAMES($arrayChildren{3};$arrNames;$arrTypes)
  // $arrayChildren{3} = {"name":"James","age":null}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrTypes{1}=2
  // $arrTypes{2}=255
```

#### Ver também 

[OB Get type](ob-get-type.md)  
[OB SET NULL](ob-set-null.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1232 |
| Thread-seguro | &check; |


