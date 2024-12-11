---
id: is-waiting-mouse-up
title: Is waiting mouse up
slug: /commands/is-waiting-mouse-up
displayed_sidebar: docs
---

<!--REF #_command_.Is waiting mouse up.Syntax-->**Is waiting mouse up**  : Boolean<!-- END REF-->
<!--REF #_command_.Is waiting mouse up.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si el objeto está esperando por un evento mouse up, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is waiting mouse up.Summary-->**Tema:** Eventos formulario

El comando **Is waiting mouse up** devuelve **True** después de que el objeto actual haya hecho clic y el botón del ratón no se ha liberado, y cuando el diálogo aún tiene el foco.<!-- END REF--> Debe llamarse desde el método de objeto del objeto actual. 

El comando devuelve **False** en los siguientes casos:

* no se llama a partir de un método de objeto
* o no se disparó el evento On Clicked en el objeto
* o la caja de diálogo ha perdido el foco.

Este comando debe ser utilizado junto con . Le permite sincronizar el estado interno del objeto de formulario con la aplicación global. Básicamente, permite a su código manejar el caso donde el usuario hizo clic y empezó a mover algo dentro de una imagen objeto de formulario, y esta acción es interrumpida por un evento externo, como un cuadro de diálogo de alerta. En este caso, el estado interno del objeto puede ser suspendido de forma indefinida debido a que se espera un evento mouse up que no ocurrirá. Para abordar este problema, debe proteger el código de movimiento del ratón con un comando **Is waiting mouse up** lo que le asegura que es ejecutado en un contexto válido.

#### Ejemplo 

El siguiente código se puede utilizar para administrar una función de seguimiento del ratón en un objeto imagen:

```4d
  //Método de objeto del objeto imagen
 var vLtracking : Integer //indicador para el modo de seguimiento 

Case of
:(Form event code=On Clicked)
 If(Is waiting mouse up) //el botón del ratón aún no se suelta
    vLtracking:=1 //estamos en modo de seguimiento
  //... Escriba aquí el código de inicialización para la función de seguimiento
 End if
:(Form event code=On Mouse Move)
 If(vLtracking=1) //estamos en modo de seguimiento
    If(Not(Is waiting mouse up)) //nunca tendremos el ratón hacia arriba
       vLtracking:=0 //detiene el modo de seguimiento
  //... Escriba aquí el código para manejar o cancelar la acción de seguimiento del usuario
    Else //el objeto todavía está esperando un ratón hacia arriba
  //... Escriba aquí el código para el seguimiento
    End if
 End if
:(Form event code=On Mouse Up) //se soltó el botón del ratón
  //... Escriba aquí el código para completar la acción de seguimiento
 vLtracking:=0 //fin del modo de seguimiento
End case


```

#### Ver también 

[Form event code](form-event-code.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1422 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


