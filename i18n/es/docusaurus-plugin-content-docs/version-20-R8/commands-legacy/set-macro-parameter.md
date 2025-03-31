---
id: set-macro-parameter
title: SET MACRO PARAMETER
slug: /commands/set-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MACRO PARAMETER.Syntax-->**SET MACRO PARAMETER** ( *selector* ; *paramText* )<!-- END REF-->
<!--REF #_command_.SET MACRO PARAMETER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Selección a utilizar |
| paramText | Text | &#8594;  | Texto enviado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET MACRO PARAMETER.Summary-->El comando SET MACRO PARAMETER inserta el texto *paramText* en el método desde el cual se llama.<!-- END REF--> 

Si se ha seleccionado texto en el método, el parámetro *selector* permite definir si el texto *paramText* debe reemplazar todo el método o únicamente el texto seleccionado. En *selector*, puede pasar una de las siguientes constantes, del tema “”:

| Constante               | Tipo         | Valor |
| ----------------------- | ------------ | ----- |
| Full method text        | Entero largo | 1     |
| Highlighted method text | Entero largo | 2     |
  
  
Si ningún texto ha sido seleccionado, *paramText* se inserta en el método.

#### Nota 

 Para que los comandos [GET MACRO PARAMETER](get-macro-parameter.md "GET MACRO PARAMETER") y SET MACRO PARAMETER funcionen correctamente, el nuevo atributo “version” debe declararse en la macro misma de esta forma:

```xml
<macro name="MyMacro" version="2">
--- Text of macro ---
</macro>
```

#### Ejemplo 

Esta macro crea un nuevo texto que será devuelto al método llamante:

```4d
 var $texto_entrada : Text
 var $texto_salida : Text
 GET MACRO PARAMETER(Highlighted method text;$texto_entrada)
  //Suponga que el texto seleccionado es una tabla, ej. “[Clientes]”
 $texto_salida:=""
 $texto_salida:=$texto_salida+Command name(47)+"("+$texto_entrada+")" // Selecionar todos ([Clientes])
 $texto_salida:=$texto_salida+"$i:="+Command name(76)+"("+$texto_entrada+")" // $i:=Records in selection([Clientes])
 SET MACRO PARAMETER(Highlighted method text;$texto_salida)
  //Reemplaza el texto seleccionado por el nuevo código
```

#### Ver también 

[GET MACRO PARAMETER](get-macro-parameter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 998 |
| Hilo seguro | &cross; |


