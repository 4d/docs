---
id: activated
title: Activated
slug: /commands/activated
displayed_sidebar: docs
---

<!--REF #_command_.Activated.Syntax-->**Activated**  : Boolean<!-- END REF-->
<!--REF #_command_.Activated.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve TRUE si el ciclo de ejecución está en activación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Activated.Summary-->El comando **Activated** (obsoleto) devuelve **True** en un método formulario cuando la ventana que contiene el formulario se convierte en la ventana del primer plano del proceso del primer plano.<!-- END REF-->

**Nota:** este comando es equivalente a usar [Form event code](form-event-code.md) y probar si devuelve el evento On Activate.

**ATENCIÓN:** no ubique un comando como [TRACE](trace.md) o [ALERT](alert.md)en la fase **Activated** del formulario, ya que esto produce un bucle infinito.

**Nota:** para que el ciclo de ejecución **Activated** se genere, asegúrese de que la propiedad del evento On Activate del formulario se haya seleccionado en el entorno Diseño.

#### Ver también 

[Deactivated](deactivated.md)  
[Form event code](form-event-code.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 346 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


