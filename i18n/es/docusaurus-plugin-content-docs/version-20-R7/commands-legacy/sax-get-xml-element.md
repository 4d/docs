---
id: sax-get-xml-element
title: SAX GET XML ELEMENT
slug: /commands/sax-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT.Syntax-->**SAX GET XML ELEMENT** ( *documento* ; *nombre* ; *prefijo* ; *nomsAtributos* ; *valoresAtributos* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| nombre | Text | &#8592; | Nombre del elemento |
| prefijo | Text | &#8592; | Espacio de nombre |
| nomsAtributos | Text array | &#8592; | Nombres de los atributos |
| valoresAtributos | Text array | &#8592; | Valores de los atributos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX GET XML ELEMENT.Summary-->El comando SAX GET XML ELEMENT  devuelve diversa información relativa al elemento *nombre* presente en el documento XML referenciado por *documento*.<!-- END REF--> Este comando debe llamarse con los eventos XML Start Element o XML End Element SAX. En el caso específico de XML End Element, los parámetros de atributos no son manipulados. Para mayor información sobre los eventos SAX, consulte la descripción del comando [SAX Get XML node](sax-get-xml-node.md "SAX Get XML node"). 

El parámetro *nombre* contiene el nombre del elemento. 

El parámetro *prefijo* devuelve el espacio de nombre (namespace) del elemento. Este parámetro está vacío si ningún espacio de nombre está asociado al elemento. 

El comando llena el array *nomsAtributos* con los nombres de los atributos del elemento objetivo. Si es necesario, el comando crea y dimensiona automáticamente el array. 

El comando también llena el array *valoresAtributos* con los valores de los atributos del elemento objetivo. Si es necesario, el comando crea y dimensiona automáticamente el array. 

#### Ejemplo 

Consideremos el siguiente código XML:

```4d
 
 MiTexto
 
```

Una vez se ejecuta la siguiente instrucción: 

```4d
 SAX GET XML ELEMENT(DocRef;vNombre;vPrefijo;tAttrNombres;tAttrValores)
```

...*vNombre* contendrá “Hijo”  
*vPrefix* contendrá “”  
*tAttrNombres{1}* contendrá “Att1”, *tAttrNombres{2}* contendrá “Att2”, *tAttrNombres{3}* contendrá “Att3”  
*tAttrValores{1}* contendrá “111”, *tAttrValores{2}* contendrá “222”, *tAttrValores{3}* contendrá “333”

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error. 

#### Ver también 

[SAX Get XML node](sax-get-xml-node.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 876 |
| Hilo seguro | &check; |
| Modifica variables | OK |


