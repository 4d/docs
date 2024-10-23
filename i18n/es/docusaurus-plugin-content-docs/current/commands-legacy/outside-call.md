---
id: outside-call
title: Outside call
slug: /commands/outside-call
displayed_sidebar: docs
---

<!--REF #_command_.Outside call.Syntax-->**Outside call**  -> Resultado<!-- END REF-->
<!--REF #_command_.Outside call.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve True si el ciclo de ejecución es outside call |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Outside call.Summary-->**Outside call** devuelve True para el ciclo de ejecución After.<!-- END REF--> 

Para que se genere el ciclo de ejecución **Outside call**, asegúrese de que la propiedad del evento On Outside call del formulario y/o los objetos se haya seleccionado en el entorno Diseño.

**Nota:** este comando es equivalente a utilizar [Form event code](form-event-code.md) y probar si devuelve el evento On Outside call.

#### Ver también 

[Form event code](form-event-code.md)  
[POST OUTSIDE CALL](post-outside-call.md)  