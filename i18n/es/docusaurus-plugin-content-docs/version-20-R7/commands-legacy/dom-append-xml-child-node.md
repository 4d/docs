---
id: dom-append-xml-child-node
title: DOM Append XML child node
slug: /commands/dom-append-xml-child-node
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML child node.Syntax-->**DOM Append XML child node** ( *refElement* ; *tipoHijo* ; *valorHijo* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML child node.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refElement | Text | &#8594;  | Referencia del elemento XML |
| tipoHijo | Integer | &#8594;  | Tipo de hijo a añadir |
| valorHijo | Text, Blob | &#8594;  | Texto o variable (Texto o BLOB)cuyo valor debe insertarse como nodo hijo |
| Resultado | Text | &#8592; | Referencia del elemento XML hijo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Append XML child node.Summary-->El comando DOM Append XML child node se utiliza para anexar el valor *valorHijo* al nodo XML designado por *refElement*.<!-- END REF-->   
  
El tipo de nodo creado es especificado por el parámetro *tipoHijo*. En este parámetro se puede pasar una de las siguientes constantes, del tema "":  

| Constante                  | Tipo         | Valor |
| -------------------------- | ------------ | ----- |
| XML CDATA                  | Entero largo | 7     |
| XML comment                | Entero largo | 2     |
| XML DATA                   | Entero largo | 6     |
| XML DOCTYPE                | Entero largo | 10    |
| XML ELEMENT                | Entero largo | 11    |
| XML processing instruction | Entero largo | 3     |
  
  
En *valorHijo*, pase los datos a insertar. Pase una cadena o una variable 4D (cadena o BLOB). El contenido de este parámetro siempre se convertirá en texto.   
  
**Nota**: si el parámetro *refElement* designa el nodo Document (nodo de nivel superior), el comando inserta un nodo "Doctype" antes de cualquier otro nodo. Lo mismo ocurre con las instrucciones de procesamiento y los comentarios, que siempre se insertan antes del nodo raíz (pero después del nodo Doctype).

#### Ejemplo 1 

Adición de un nodo de tipo texto:

```4d
 Reference:=DOM Create XML element(refElement;"myElement")
 DOM SET XML ELEMENT VALUE(Reference;"Hola")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"Nueva")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"York")
```

Resultado:  

```XML
<myElement>Hola<br/>Nueva<br/>York</myElement>
```

#### Ejemplo 2 

Adición de un nodo de tipo instrucción de proceso:

```4d
 $Txt_instruction:="xml-stylesheet type = \"text/xsl\" href=\"style.xsl\""
 Reference:=DOM Append XML child node(elementRef;XML Processing Instruction;$Txt_instruction)
```

Resultado (insertado antes del primer elemento):  

```XML
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

#### Ejemplo 3 

Adición de un nodo de tipo comentario:

```4d
 Reference:=DOM Append XML child node(elementRef;XML Comment;"Hola mundo")
```

Resultado:  

```XML
<!--Hola mundo-->
```

#### Ejemplo 4 

Adición de un nodo de tipo CDATA:

```4d
 Reference:=DOM Append XML child node(elementRef;XML CDATA;"12 < 18")
```

Resultado:  

```XML
<element><![CDATA[12 < 18]]></element>
```

#### Ejemplo 5 

Adición o reemplazo de un nodo de tipo declaración Doctype:

```4d
 Reference:=DOM Append XML child node(elementRef;XML DOCTYPE;"Books SYSTEM \"Book.DTD\"")
```

Resultado (insertado antes del primer elemento):  

```XML
<!DOCTYPE Books SYSTEM  "Book.DTD">
```

#### Ejemplo 6 

Adición o reemplazo de un nodo de tipo Element.

* si el parámetro *valorHijo* es un fragmento XML, se inserta como nodos hijos:  
```4d  
 Reference:=DOM Append XML child node(refElement;XML ELEMENT;"simoneva")  
```  
    
Resultado:  
```XML  
<parent>  
    <child>simon</child>  
    <child>eva</child>  
</parent>  
```
* de lo contrario, se añade un nuevo elemento hijo vacío:  
```4d  
 Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"tbreak")  
```  
    
Resultado:  
```XML  
<parent>  
     <tbreak/>  
 </parent>  
```

Si el contenido de *valorHijo* no es valido, se devuelve un error. 

#### Ver también 

[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1080 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


