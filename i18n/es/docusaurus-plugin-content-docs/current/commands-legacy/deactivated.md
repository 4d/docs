---
id: deactivated
title: Deactivated
slug: /commands/deactivated
displayed_sidebar: docs
---

<!--REF #_command_.Deactivated.Syntax-->**Deactivated**  : Boolean<!-- END REF-->
<!--REF #_command_.Deactivated.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve TRUE si el ciclo de ejecución está en desactivación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Deactivated.Summary-->El comando **Deactivated** devuelve True en un método formulario u objeto cuando la ventana del primer plano del proceso de primer plano, contiene el formulario, se traslada a la parte posterior.<!-- END REF-->

Para que se genere el ciclo de ejecución **Deactivated**, asegúrese de que la propiedad del evento On Deactivate para el formulario y/o los objetos haya sido seleccionada en el entorno Diseño. 

**Nota:** este comando es equivalente a utilizar [Form event code](../commands/form-event-code.md) y probar si devuelve el evento On Deactivate.

#### Ver también 

[Activated](activated.md)  
[Form event code](../commands/form-event-code.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 347 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


