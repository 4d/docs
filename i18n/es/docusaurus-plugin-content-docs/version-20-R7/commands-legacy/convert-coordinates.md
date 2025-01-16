---
id: convert-coordinates
title: CONVERT COORDINATES
slug: /commands/convert-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT COORDINATES.Syntax-->**CONVERT COORDINATES** ( *coordX* ; *coordY* ; *de* ; *a* )<!-- END REF-->
<!--REF #_command_.CONVERT COORDINATES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| coordX | Integer | &#8594;  | Coordenada horizontal de un punto (inicial) |
| &#8592; | Coordenada horizontal de un punto (convertido) |
| coordY | Integer | &#8594;  | Coordenada vertical de un punto(inicial) |
| &#8592; | Coordenada vertical de un punto (convertido) |
| de | Integer | &#8594;  | Sistema de coordenadas de origen |
| a | Integer | &#8594;  | Sistema de coordenadas a convertir el punto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CONVERT COORDINATES.Summary-->El comando **CONVERT COORDINATES**convierte las coordenadas (x,y) de un punto de un sistema de coordenadas a otro.<!-- END REF--> Los sistemas de coordenadas de entrada y salida soportados son los formularios (y subformularios), las ventanas y la pantalla. Por ejemplo, puede utilizar este comando para obtener las coordenadas en el formulario principal de un objeto perteneciente a un subformulario. Este principio facilita la creación de menús contextuales en cualquier posición personalizada.

En *coordX* y c*oordY*, pase las variables que contienen las coordenadas (x,y) del punto que desea convertir. Después de ejecutar el comando, estas variables contendrán los valores convertidos.

En el parámetro *de*, pase el sistema de coordenadas inicial del punto de entrada y en el parámetro *a*, pase el sistema de coordenadas al que se debe convertir. Ambos parámetros pueden tomar el valor de una de las siguientes constantes, añadidas al tema "*Ventana*":

| Constante         | Tipo         | Valor | Comentario                                                                                                                                                            |
| ----------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XY Current form   | Entero largo | 1     | El origen es la esquina superior izquierda del formulario actual                                                                                                      |
| XY Current window | Entero largo | 2     | El origen es la esquina superior izquierda de la ventana actual                                                                                                       |
| XY Main window    | Entero largo | 4     | En Windows: origen es la esquina superior izquierda de la ventana principal; en OS X: igual que XY Screen                                                             |
| XY Screen         | Entero largo | 3     | El origen es la esquina superior izquierda de la pantalla principal (igual que para el comando [SCREEN COORDINATES](screen-coordinates.md))<br/><br/> |

Cuando este comando se llama desde el método de un subformulario o un objeto de un subformulario, y si uno de los selectores es XY Current form, a continuación, las coordenadas son relativas al subformulario en sí, no a su formulario padre.

Al convertir desde/hacia la posición de una ventana de formulario (por ejemplo, una conversión desde los resultados de [GET WINDOW RECT](get-window-rect.md), o con los valores pasados ​​a [Open form window](open-form-window.md)), XY Main window debe ser utilizado, ya que es el sistema de coordenadas utilizado por los comandos de la ventana en Windows. También se puede utilizar para este propósito en OS X, donde es equivalente a XY Screen.

Cuando *de* es XY Current form y el punto se encuentra en la sección del cuerpo de un formulario listado, el resultado depende del contexto de llamada del comando:

* Si el comando se llama en el evento On Display Detail, el punto resultante se encuentra en el perímetro de visualización del registro mostrado en la pantalla.
* Si el comando se llama fuera de un evento On Display Detail pero mientras se está editando un registro, el punto resultante se encuentra en el perímetro de visualización del registro que se está editando.
* De lo contrario, el punto resultante se encuentra en la pantalla del primer registro.

#### Ejemplo 1 

Usted quiere abrir un menú emergente situado en la esquina inferior izquierda del objeto "MyObject".  
  
```4d
  // OBJECT GET COORDINATES trabaja en el sistema de coordenadas del formulario actual
  // El menú emergente dinámico utiliza el sistema de coordenadas de la ventana actual
  // Tenemos que convertir los valores
 var $left;$top;$right;$bottom : Integer
 var $menu : Text
 OBJECT GET COORDINATES(*;"MyObject";$left;$top;$right;$bottom)
 CONVERT COORDINATES($left;$bottom;XY Current form;XY Current window)
 $menu:=Create menu
 APPEND MENU ITEM($menu;"Right here")
 APPEND MENU ITEM($menu;"Right now")
 Dynamic pop up menu($menu;"";$left;$bottom)
 RELEASE MENU($menu)
```

![](../assets/en/commands/pict2678144.en.png)

#### Ejemplo 2 

Usted quiere abrir una ventana emergente en la posición del cursor del ratón. En Windows, es necesario convertir las coordenadas desde [MOUSE POSITION](mouse-position.md) (con el parámetro \*) devolviendo valores basados en la posición de la ventana MDI:

```4d
 var $mouseX;$mouseY;$mouseButtons : Integer
 var $window : Integer
 MOUSE POSITION($mouseX;$mouseY;$mouseButtons)
 CONVERT COORDINATES($mouseX;$mouseY;XY Current window;XY Main window)
 $window:=Open form window("PopupWindowForm";Pop up form window;$mouseX;$mouseY)
 DIALOG("PopupWindowForm")
 CLOSE WINDOW($window)
```

#### Ver también 

[GET WINDOW RECT](get-window-rect.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  
[SET WINDOW RECT](set-window-rect.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1365 |
| Hilo seguro | &cross; |


