---
id: is-compiled-mode
title: Is compiled mode
slug: /commands/is-compiled-mode
displayed_sidebar: docs
---

<!--REF #_command_.Is compiled mode.Syntax-->**Is compiled mode** {( * )} : Boolean<!-- END REF-->
<!--REF #_command_.Is compiled mode.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Devuelve la información de la base local |
| Resultado | Boolean | &#8592; | Compilado (True), Interpretado (False) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is compiled mode.Summary-->Is compiled mode prueba si la base se está ejecutando en modo compilado (True) o interpretado (False).<!-- END REF--> 

El parámetro opcional *\** es útil en caso de una arquitectura que utilice componentes: puede ser utilizada para determinar la base (local o componente) de cual quiere conocer el modo de ejecución.  
  
• Cuando el comando se llama desde un componente:

\- si se pasa el parámetro *\**, el comando devuelve [True](true.md "True") o [False](false.md "False") dependiendo del modo de ejecución de la base host, 

\- si no se pasa el parámetro *\**, el comando devuelve [True](true.md "True") o [False](false.md "False") dependiendo del modo de ejecución del componente.  
  
• Cuando el comando se llama desde un método de una base local, devuelve [True](true.md "True") o [False](false.md "False") dependiendo del modo de ejecución de la base local.

#### Ejemplo 

En una de sus rutinas, usted incluyó el código de depuración de la base, útil únicamente cuando está en modo interpretado. Puede preceder este código con una prueba que llama a Is compiled mode:

```4d
  // ...
 If(Not(Is compiled mode))
  // Incluya el código para depurar su base aquí
 End if
  // ...
```

#### Ver también 

[IDLE](idle.md)  
[Undefined](undefined.md)  