---
id: in-break
title: In break
slug: /commands/in-break
displayed_sidebar: docs
---

<!--REF #_command_.In break.Syntax-->**In break**  -> Resultado<!-- END REF-->
<!--REF #_command_.In break.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve True si el ciclo de ejecución es in break |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.In break.Summary-->**In break** devuelve True para el ciclo de ejecución In break.<!-- END REF--> 

Para que se genere el ciclo de ejecución **In break** asegúrese de que la propiedad del evento On Printing Break para el formulario y/o los objetos haya sido seleccionada en el entorno Diseño.

**Nota:** este comando es equivalente a utilizar [Form event code](form-event-code.md) y probar si devuelve el evento On Printing Break.

#### Ver también 

*\_o\_During*  
[In footer](in-footer.md)  
[In header](in-header.md)  