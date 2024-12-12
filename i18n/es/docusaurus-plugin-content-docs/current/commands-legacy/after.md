---
id: after
title: After
slug: /commands/after
displayed_sidebar: docs
---

<!--REF #_command_.After.Syntax-->**After**  : Boolean<!-- END REF-->
<!--REF #_command_.After.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve True si el ciclo de ejecución es un after |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.After.Summary-->**After** devuelve True para el ciclo de ejecución After.<!-- END REF-->

Para que el ciclo de ejecución **After** se genere, asegúrese de que la propiedad del evento On Validate ara el formulario y/o los objetos se haya seleccionado en el entorno Diseño.

**Nota:** este comando es equivalente a usar [Form event code](../commands/form-event-code.md) y probar si devuelve el evento On Validate.

#### Ver también 

[Form event code](../commands/form-event-code.md)  