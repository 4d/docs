---
id: self
title: Self
slug: /commands/self
displayed_sidebar: docs
---

<!--REF #_command_.Self.Syntax-->**Self**  : Pointer<!-- END REF-->
<!--REF #_command_.Self.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Puntero hacia el objeto de formulario (si lo hay) cuyo método está siendo ejecutado actualmente. Si no Nil (->[]) si fuera de contexto |

<!-- END REF-->

#### Nota de compatibilidad 

<!--REF #_command_.Self.Summary-->Este comando sólo se conserva por razones de compatibilidad.<!-- END REF--> A partir de la versión 12 de 4D, se recomienda utilizar el comando OBJECT Get pointer.

#### Descripción 

El comando Self devuelve un puntero hacia el objeto cuyo método de objeto se está ejecutando. 

Self se utiliza para referenciar una variable en su propio método de objeto. Devuelve un puntero válido sólo cuando se desde dentro de un método de objeto o desde un método de proyecto que se llama directa o indirectamente por un método de objeto. 

Si Self se llama fuera de contexto, devuelve un puntero Nil (*\->\[\]*).

**Consejo:** Self es muy útil cuando varios objetos en un formulario deben efectuar la misma acción, operada sobre ellos mismos.

**Nota:** cuando se utiliza en el contexto de un list box, la función devuelve:

* Para una columna asociada a un campo, un puntero al campo asociado,
* Para una columna asociada a una variable, un puntero a la variable,
* Para una columna asociada a una expresión, un puntero Nil.

#### Ejemplo 

Ver el ejemplo del comando [RESOLVE POINTER](resolve-pointer.md "RESOLVE POINTER").

#### Ver también 

[OBJECT Get pointer](object-get-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  
[This ](this.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 308 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


