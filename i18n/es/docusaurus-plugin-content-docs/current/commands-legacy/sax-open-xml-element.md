---
id: sax-open-xml-element
title: SAX OPEN XML ELEMENT
slug: /commands/sax-open-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT.Syntax-->**SAX OPEN XML ELEMENT** ( *documento* ; *etiqueta* {; *nomAtrib* ; *valorAtrib*} {; *nomAtrib2* ; *valorAtrib2* ; ... ; *nomAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| etiqueta | Text | &#8594;  | Nombre del elemento a abrir |
| nomAtrib | Text | &#8594;  | Nombre del atributo |
| valorAtrib | Text | &#8594;  | Valor del atributo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX OPEN XML ELEMENT.Summary-->El comando SAX OPEN XML ELEMENT permite añadir un nuevo elemento en el documento XML referenciado por *document* como también, opcionalmente, atributos y sus valores.<!-- END REF--> 

El elemento añadido está “abierto” en el documento (la etiqueta de fin no está añadida). Para cerrar un elemento creado utilizando este comando, debe:

* Utilizar el comando [SAX CLOSE XML ELEMENT](sax-close-xml-element.md "SAX CLOSE XML ELEMENT"), o
* Cerrar el documento XML. En este caso, 4D añadirá automáticamente las etiquetas XML de cierre necesarias.

En *etiqueta*, pase el nombre del elemento a crear. Este nombre sólo puede contener letras, números y los caracteres “.”, “-“,”\_” y “:”. Si se pasa un caracter inválido en *etiqueta*, se generará un error. 

Opcionalmente, el comando permite pasar uno o varios pares de atributos/valores (en forma de variables, campos o valores literales) utilizando los parámetros *nomAtrib* y *valorAtrib*. Puede pasar tantos pares atributo/valor como quiera. 

#### Ejemplo 

La siguiente instrucción:

```4d
 vElement:="Libro"
 SAX OPEN XML ELEMENT($DocRef;vElement)
```

... escribirá la siguiente línea en el documento: 

```4d
 <book< pre=""></book<>
```

#### Gestión de errores 

Si se pasa en tag un carácter inválido, se genera un error. 

#### Ver también 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 853 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


