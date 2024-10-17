---
id: dom-set-xml-element-value
title: DOM SET XML ELEMENT VALUE
slug: /commands/dom-set-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Syntax-->**DOM SET XML ELEMENT VALUE** ( *elementRef* {; *xRuta*}; *valorElement* {; *} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT VALUE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| xRuta | Text | &#8594;  | Ruta XPath del elemento XML |
| valorElement | Text, Variable | &#8594;  | Nuevo valor del elemento |
| * | Operador | &#8594;  | Si se pasa: definir el valor en CDATA |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Summary-->El comando DOM SET XML ELEMENT VALUE le permite modificar el valor del elemento definido por *refElement*.<!-- END REF-->

Si pasa el parámetro opcional *xRuta*, elige utilizar la notación XPath para indicar el elemento a modificar (para mayor información ver la sección *Uso de la notación XPath (DOM)*). The following path expressions are supported: 

| **Expresión**  | **Acción**                                      |
| -------------- | ----------------------------------------------- |
| /              | Designa el nodo raíz (ruta absoluta)            |
| para\[1\]      | Designa el primer para hijo del nodo contextual |
| para\[last()\] | Designa el último para hijo del nodo contextual |

En este caso, debe pasar la referencia de un elemento XML raíz en *refElement* y la ruta XPath del elemento a modificar en *xRuta*.

***Nota de compatibilidad:* a partir de la v18 R3, la implementación XPath en 4D es más compatible. Por razones de compatibilidad, la implementación no estándar anterior se mantiene de forma predeterminada en las bases convertidas. Si desea beneficiarse de las funcionalidades extendidas en sus bases convertidas, debe seleccionar la opción de compatibilidad **Utilizar XPath estándar de* Página Compatibilidad.* 

En *valorElement*, pase una cadena o una variable (o un campo) que contenga el nuevo valor del elemento especificado:

* Si pasa una cadena, el valor se utilizará "tal como" en la estructura XML.
* Si pasa una variable o un campo, 4D procesará el valor, dependiendo del tipo de *valorElement*. Todos los tipos de datos pueden ser utilizados, a excepción de los arrays, imágenes y punteros. Si *valorElement* se evalua como *indefinido*, 4D utiliza una cadena vacía.

Cuando se pasa el parámetro opcional asterisco (\*), indica que el valor del elemento debe ser definido bajo la forma de CDATA. La forma especial CDATA permite escribir texto sin formato (ver ejemplo 2).

**Nota:** si el elemento designado por *refElement* es de tipo BLOB procesado por este comando, lo codifica automáticamente en base64\. Sin embargo, el comando [DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md) realiza automáticamente la operación inversa.

##### Nota sobre el procesamiento de caracteres de fin de línea 

Para cumplir con las reglas de procesamiento XML, todas las secuencias de caracteres de fin de línea CR y CRLF se convierten en caracteres LF.

#### Ejemplo 1 

En la siguiente fuente XML: 

```XML
<Book>
   <Title>El mejor vendedor</Title>
</Book>
```

Si se ejecuta el siguiente código, con *vRefElem* contiene la referencia del elemento “Titulo”:

```4d
 DOM SET XML ELEMENT VALUE(vRefElem;"El Perdedor")
```

Obtenemos:

```XML
<Book>
   <Title>El Perdedor</Title>
</Book>
```

#### Ejemplo 2 

En la siguiente fuente XML: 

```XML
<Maths>
   <Postulate>1+2=3</Postulate>
</Maths>
```

Queremos escribir el texto “12<18” en el elemento *<Postulate>*. Esta cadena no puede escribirse en XML porque el carácter “<” no se acepta. Este carácter debe transformarse entonces en “<” o debe utilizarse la forma CDATA. Si *vElemRef* indica el nodo XML *<Postulate>*:

```4d
  // Forma normal
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18")
```

Obtenemos:

```XML
<Maths>
   <Postulate>12 < 18</Postulate>
</Maths>
```
  
  
```4d
  // CDATA form
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18";*)
```

Obtenemos:

```XML
<Maths>
   <Postulate><![CDATA[12 < 18]]></Postulate>
</Maths>
```

#### Variables y conjuntos del sistema 

Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0 y se genera un error (por ejemplo, si la referencia del elemento es inválida).

#### Ver también 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  