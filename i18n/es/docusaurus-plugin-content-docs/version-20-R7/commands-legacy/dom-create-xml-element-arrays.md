---
id: dom-create-xml-element-arrays
title: DOM Create XML element arrays
slug: /commands/dom-create-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element arrays.Syntax-->**DOM Create XML element arrays** ( *refElement* ; *xRuta* {; *arrayNomsAtrib* ; *arrayValoresAtrib*} {; *arrayNomsAtrib2* ; *arrayValoresAtrib2* ; ... ; *arrayNomsAtribN* ; *arrayValoresAtribN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element arrays.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refElement | Text | &#8594;  | Referencia del elemento XML raíz |
| xRuta | Text | &#8594;  | Ruta XRuta del elemento XML a crear |
| arrayNomsAtrib | Text array | &#8594;  | Array de nombres de atributos |
| arrayValoresAtrib | Text array | &#8594;  | Array de valores de atributos |
| Resultado | Text | &#8592; | Referencia del elemento XML creado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Create XML element arrays.Summary-->El comando DOM Create XML element arrays se utiliza para añadir un nuevo elemento en el elemento XML de *refElement*, como también opcionalmente, atributos y sus valores en forma de arrays.<!-- END REF-->

Aparte de soportar arrays (ver a continuación), este comando es idéntico a [DOM Create XML element](dom-create-xml-element.md "DOM Create XML element"). Por favor consulte la descripción de este comando para conocer mayores detalles de su funcionamiento. 

Opcionalmente, el comando DOM Create XML element arrays permite pasar varios pares de atributos y valores de atributos en forma de arrays en los parámetros *arrayNomsAtrib* y *arrayValoresAtrib*. En *arrayValoresAtrib*, puede pasar arrays de tipo texto, fecha, numérico e imagen. 4D efectúa automáticamente las conversiones necesarias; puede modificar estas conversiones utilizando el comando [XML SET OPTIONS](xml-set-options.md "XML SET OPTIONS"). 

Los arrays deben haber sido creados previamente y funcionar por pares. Puede pasar tantos pares de arrays y de elementos como quiera en cada par. 

#### Ejemplo 

Queremos crear el siguiente elemento:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<RootElement>
   <Elem1>
      <Elem2>
         <Elem3 Font="Verdana" Size="10" Style="Bold"></Elem3>
      </Elem2>
   </Elem1>
</RootElement>
```

Para esto, es suficiente escribir:

```4d
 ARRAY TEXT(arrAttNames;3)
 ARRAY TEXT(arrAttValues;3)
 arrAttNames{1}:="Font"
 arrAttValues{1}:="Verdana"
 arrAttNames{2}:="Size"
 arrAttValues{2}:="10"
 arrAttNames{3}:="Style"
 arrAttValues{3}:="Bold"
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElementRef:=DOM Create XML element arrays(vRootRef;vxPath;arrAttNames;arrAttValues)
```

#### Ver también 

[DOM Create XML element](dom-create-xml-element.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1097 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


