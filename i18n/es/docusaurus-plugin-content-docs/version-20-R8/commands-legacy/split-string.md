---
id: split-string
title: Split string
slug: /commands/split-string
displayed_sidebar: docs
---

<!--REF #_command_.Split string.Syntax-->**Split string** ( *cadenaASeparar* ; *separador* {; *opciones*} ) : Collection<!-- END REF-->
<!--REF #_command_.Split string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| cadenaASeparar | Text | &#8594;  | Valor de la cadena |
| separador | Text | &#8594;  | Cadena en la que cadenaASeparar se divide. Si cadena vacía (""), cada carácter de cadenaASeparar es una subcadena |
| opciones | Integer | &#8594;  | Opciones relativas a las cadenas vacías y espacios |
| Resultado | Collection | &#8592; | Colección de subcadenas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Split string.Summary-->El comando **Split string** devuelve una colección de cadenas, creada al dividir *cadenaAseparar* en subcadenas en los límites especificados por el parámetro *separador*.<!-- END REF--> Las subcadenas en la colección devuelta no incluyen el *separador*.

Si no se encuentra un *separador* en *cadenaAseparar*, **Split string** devuelve una colección que contiene un elemento único, *cadenaAseparar*. Si pasó una cadena vacía en *separador*, **Split string** devuelve una colección de cada carácter de *cadenaAseparar*.

En el parámetro *opciones*, puede pasar una o una combinación de las siguientes constantes del tema *Cadenas*:

| Constante               | Tipo         | Valor | Comentario                                                          |
| ----------------------- | ------------ | ----- | ------------------------------------------------------------------- |
| sk ignore empty strings | Entero largo | 1     | Eliminar las cadenas vacías de la colección resultante (se ignoran) |
| sk trim spaces          | Entero largo | 2     | Retirar los espacios al principio y al final de las subcadenas      |

#### Ejemplo 1 

```4d
 var $vt : Text
 var $col : Collection
 $col:=New collection
 
 $vt:="John;Doe;120 jefferson st.;Riverside;; NJ; 08075"
 $col:=Split string($vt;";") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
```

#### Ejemplo 2 

El parámetro *separador* puede ser una cadena de múltiples caracteres: 

```4d
 var $vt : Text
 var $col : Collection
 $vt:="NameSmithage40"
 $col:=Split string($vt;"")
  //$col=["Name","Smith","age","40"]
```

#### Ver también 

[TEXT TO ARRAY](text-to-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1554 |
| Hilo seguro | &check; |


