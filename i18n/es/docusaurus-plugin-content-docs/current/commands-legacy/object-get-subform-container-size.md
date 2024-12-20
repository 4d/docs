---
id: object-get-subform-container-size
title: OBJECT GET SUBFORM CONTAINER SIZE
slug: /commands/object-get-subform-container-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Syntax-->**OBJECT GET SUBFORM CONTAINER SIZE** ( *ancho* ; *alto* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ancho | Integer | &#8592; | Ancho del objeto subformulario |
| alto | Integer | &#8592; | Alto del objeto subformulario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Summary-->El comando **OBJECT GET SUBFORM CONTAINER SIZE** devuelve el *ancho* y el *alto* (en píxeles) de un objeto subformulario "actual", mostrado en el formulario padre.<!-- END REF-->  
  
Este comando debe llamarse desde el método de un formulario utilizado como subformulario y mostrado en un objeto subformulario. Devuelve el *ancho* y el *alto* del objeto que contiene el subformulario. Devuelve el *ancho* y el *alto* del objeto que contiene el subformulario.  
  
Este comando es útil, por ejemplo, en el caso de objetos de subformulario que deben redimensionarse en función de las características del objeto subformulario mismo. En el evento formulario On Load, el subformulario puede llamar a este comando para calcular el espacio a su disposición con el fin de mostrar su contenido.

El evento On Resize se genera en el método formulario del subformulario si el objeto subformulario se redimensiona en el objeto formulario padre (por ejemplo si el objeto subformulario tiene una propiedad de agrandamiento horizontal/vertical y si el formulario padre se redimensiona).

* Si el comando se llama desde un formulario que no se está utilizando como un subformulario, devuelve el tamaño actual de la ventana del formulario.
* Si el comando se llama fuera del contexto de la visualización de la pantalla (por ejemplo, durante la impresión del formulario), devuelve 0 en *ancho* y *alto*.

#### Ver también 

[OBJECT GET SUBFORM](object-get-subform.md)  
[OBJECT SET SUBFORM](object-set-subform.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1148 |
| Hilo seguro | &cross; |

