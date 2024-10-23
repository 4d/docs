---
id: in-footer
title: In footer
slug: /commands/in-footer
displayed_sidebar: docs
---

<!--REF #_command_.In footer.Syntax-->**In footer**  -> Resultado<!-- END REF-->
<!--REF #_command_.In footer.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve True si el ciclo de ejecución es in footer |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.In footer.Summary-->**In footer** devuelve True para el ciclo de ejecución In footer.<!-- END REF-->

Para que se genere el ciclo de ejecución **In footer** asegúrese de que la propiedad del evento On Printing footer para el formulario y/o los objetos haya sido seleccionada en el entorno Diseño.

**Nota:** este comando es equivalente a utilizar [Form event code](form-event-code.md) y probar si devuelve el evento On Printing footer.

#### Ver también 

*\_o\_During*  
[In break](in-break.md)  
[In header](in-header.md)  