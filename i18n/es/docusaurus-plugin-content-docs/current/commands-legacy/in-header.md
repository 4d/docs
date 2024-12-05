---
id: in-header
title: In header
slug: /commands/in-header
displayed_sidebar: docs
---

<!--REF #_command_.In header.Syntax-->**In header**  : Boolean<!-- END REF-->
<!--REF #_command_.In header.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve True si el ciclo de ejecución es in header |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.In header.Summary-->**In header** devuelve True para el ciclo de ejecución In header.<!-- END REF--> 

Para que se genere el ciclo de ejecución **In header**, asegúrese de que la propiedad del evento On Header para el formulario y/o los objetos haya sido seleccionada en el entorno Diseño.

**Nota:** este comando es equivalente a utilizar [Form event code](../commands/form-event-code.md) y probar si devuelve el evento On Header.

#### Ver también 

*\_o\_During*  
[In break](in-break.md)  
[In footer](in-footer.md)  