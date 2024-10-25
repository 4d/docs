---
id: before
title: Before
slug: /commands/before
displayed_sidebar: docs
---

<!--REF #_command_.Before.Syntax-->**Before**  -> Resultado<!-- END REF-->
<!--REF #_command_.Before.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve True si el ciclo de ejecución es un Before |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Before.Summary-->**Before** devuelve True para el ciclo de ejecución Before.<!-- END REF-->

Para que el ciclo de ejecución **Before** se genere, asegúrese de que la propiedad de evento On Load para el formulario y/o los objetos se haya seleccionado en el entorno Diseño.

**Nota:** este comando es equivalente a usar [Form event code](form-event-code.md) y probar si devuelve el evento On Load.

#### Ver también 

[Form event code](form-event-code.md)  