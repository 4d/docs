---
id: dom-find-xml-element
title: DOM Find XML element
slug: /commands/dom-find-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element.Syntax-->**DOM Find XML element** ( *elementRef* ; *xRuta* {; *arrRefElement*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| xRuta | Text | &#8594;  | Ruta XPath del elemento a buscar |
| arrRefElement | Text array | &#8592; | Lista de referencias de los elementos encontrados (si aplica) |
| Resultado | Text | &#8592; | Referencia del elemento encontrado (si aplica) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Find XML element.Summary-->El comando DOM Find XML element permite buscar los elementos XML específicos en una estructura XML.<!-- END REF--> La búsqueda comienza por el elemento designado por el parámetro *refElement*.

El nodo XML a buscar está definido por el parámetro *xRuta*, expresado en notación XPath (para mayor información, ver la sección *Uso de la notación XPath (DOM)*). Se admiten las siguientes expresiones de ruta:

| **Expresión**                   | **Acción**                                                                                                                         |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| *nodename*                      | Selecciona todos los nodos hijos del nodo de contexto con el nombre "*nodename*"                                                   |
| /                               | Selecciona los nodos del nodo raíz (ruta absoluta)                                                                                 |
| //                              | Selecciona los nodos en el documento del nodo actual que coinciden con la selección sin importar dónde se encuentren               |
| @                               | Selecciona atributos                                                                                                               |
| .                               | Selecciona el nodo actual                                                                                                          |
| ..                              | Selecciona el padre del nodo actual                                                                                                |
| \*                              | Selecciona todos los elementos hijos del nodo de contexto                                                                          |
| @\*                             | Selecciona todos los atributos del nodo de contexto                                                                                |
| text()                          | Selecciona todos los hijos del nodo texto del nodo de contexto                                                                     |
| node()                          | Selecciona todos los hijos del nodo de contexto, sin importar el tipo de nodo                                                      |
| local-name()                    | Devuelve una cadena que representa el nombre local del primer nodo de un conjunto de nodos dado                                    |
| para\[1\]                       | Selecciona el primer hijo para del nodo de contexto                                                                                |
| para\[last()\]                  | Selecciona el último hijo para del nodo de contexto                                                                                |
| chapter\[title="Introduction"\] | Selecciona los capítulos hijos del nodo de contexto que tienen uno o más hijos títulos con un valor de cadena igual a Introduction |
| chapter\[title\]                | Selecciona los capítulos hijo del nodo de contexto que tienen uno o más hijos títulos                                              |
| para\[@type="warning"\]         | Selecciona todos los hijos para del nodo de contexto que tienen un atributo "type" con el valor "warning"                          |
| para\[@type="warning"\]\[5\]    | Selecciona el quinto hijo para del nodo de contexto que tiene un atributo "type" con el valor "warning"                            |
| para\[5\]\[@type="warning"\]    | Selecciona el quinto hijo para del nodo de contexto si ese hijo tiene un atributo "type" con el valor "warning"                    |
| para\[contains(@type,'bg')\]    | Selecciona todos los hijos para del nodo de contexto que tiene un atributo "type" que contiene la cadena "bg"                      |
| //title \| //price              | Selecciona todos los elementos de título y precio en el documento                                                                  |

**Nota de compatibilidad:** **a partir de la v18 R3, la implementación XPath es más compatible y permite el soporte de las expresiones anteriores. Por razones de compatibilidad, la implementación no estándar anterior se mantiene de forma predeterminada en las bases convertidas. Si desea beneficiarse de las funciones extendidas en sus bases convertidas, debe seleccionar la opción de compatibilidad *Utilizar XPath estándar de Página Compatibilidad.* 

**Nota:** las búsquedas distinguen entre mayúsculas y minúsculas.

El comando devuelve la referencia XML de los elementos encontrados. Cuando se pasa el array de cadenas *arrRefElement*, el comando lo llena con la lista de referencias XML encontradas. En este caso, el comando devuelve el primer elemento del array *arrRefElement* como resultado. Este parámetro es útil cuando existen varios elementos con el mismo nombre en la ubicación especificada por el parámetro *xRuta*.

#### Ejemplo 1 

Dada la siguiente estructura XML:

```RAW
  Harry Potter  29.99  Learning XML  39.95
```

Este ejemplo permite buscar rápidamente un elemento XML y mostrar su valor:

```4d
 vElemRef:=DOM Parse XML source("books.xml")
 vFound:=DOM Find XML element(vElemRef;"book[2]/title") //ruta relativa del nodo actual
 DOM GET XML ELEMENT VALUE(vFound;value)
 ALERT("The value of the element is: \""+value+"\"") //Aprendiendo XML
```

La misma búsqueda también puede efectuarse de esta forma:

```4d
 vElemRef:=DOM Parse XML source("books.xml")
 vFound:=DOM Find XML element(vElemRef;"/bookstore/book[2]") //ruta absoluta de raíz
 vFound:=DOM Find XML element(vFound;"title")
 DOM GET XML ELEMENT VALUE(vFound;value)
 ALERT("The value of the element is: \""+value+"\"") //Aprendiendo XML
```

#### Ejemplo 2 

Dada la siguiente estructura XML: 

```RAW
         aaa      bbb      ccc   
```

El siguiente código permite recuperar la referencia de cada elemento Elem2 en el array arrAfound:

```4d
 vElemRef:=DOM Parse XML source("example.xml")
 ARRAY TEXT(arrAfound;0)
 vFound:=DOM Find XML element(vElemRef;"/Root/Elem1/Elem2";arrAfound)
```

#### Ejemplo 3 

Desea seleccionar todos los elementos "rect" con atributos "class" que contengan la cadena "bgcontainer":

```4d
 $node:=DOM Find XML element($root;" //rect[contains(@class,'bgcontainer')")
```

#### Variables y conjuntos del sistema 

Si el comando se ejecutó correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se genera un error. 

#### Gestión de errores 

Se genera un error cuando:

* La referencia del elemento no es válida
* La ruta xPath especificada no es válida.

#### Ver también 

[DOM Count XML elements](dom-count-xml-elements.md)  
[DOM Create XML element](dom-create-xml-element.md)  