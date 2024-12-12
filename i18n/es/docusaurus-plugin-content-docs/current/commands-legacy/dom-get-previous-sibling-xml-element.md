---
id: dom-get-previous-sibling-xml-element
title: DOM Get previous sibling XML element
slug: /commands/dom-get-previous-sibling-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get previous sibling XML element.Syntax-->**DOM Get previous sibling XML element** ( *elementRef* {; *nomElemHermano* {; *valorElemHermano*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get previous sibling XML element.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| nomElemHermano | Text | &#8592; | Nombre del elemento XML hermano |
| valorElemHermano | Text | &#8592; | Valor del elemento XML hermano |
| Resultado | Text | &#8592; | Referencia del elemento XML hermano |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Get previous sibling XML element.Summary-->El comando DOM Get previous sibling XML element devuelve una referencia al anterior “hermano” del elemento XML pasado en referencia.<!-- END REF--> Esta referencia puede utilizarse con los otros comandos de análisis XML. 

Los parámetros opcionales *nomElemHermano* y *valorElemHermano*, si se pasan, reciben respectivamente el nombre y el valor del elemento “hermano” anterior. 

Este comando puede utilizarse para navegar entre los “hijos” de un elemento XML. 

Antes del primer “hermano,” la variable sistema OK tiene el valor 0\. 

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente y si el elemento referenciado no es el primer “hijo” de la estructura, la variable sistema OK toma el valor 1\. Si ocurre un error o si el elemento analizado es el primer “hijo” de la estructura, toma el valor 0.

#### Ver también 

[DOM Get next sibling XML element](dom-get-next-sibling-xml-element.md)  