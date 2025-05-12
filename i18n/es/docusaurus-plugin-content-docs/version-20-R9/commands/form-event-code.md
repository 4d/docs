---
id: form-event-code
title: Form event code
slug: /commands/form-event-code
displayed_sidebar: docs
---

<!--REF #_command_.Form event code.Syntax-->**Form event code**  : Integer<!-- END REF-->

<!--REF #_command_.Form event code.Params-->

| Parámetros | Tipo    |                             | Descripción                 |
| ---------- | ------- | --------------------------- | --------------------------- |
| Resultado  | Integer | &#8592; | Número de evento formulário |

<!-- END REF-->

## Descripción

**Form event code** returns a numeric value identifying the type of form event that has just occurred. Usually, you will use **Form event code** from within a form or object method.

4D provides predefined constants (found in the *Form Events* theme) in order to compare the values returned by the **Form event code** command. Certain events are generic (generated for any type of object) and others are specific to a particular type of object.

For a description of events, please refer to the [**Form Events**](../Events/overview.md) section.

## Ejemplo 1

This example shows the On Validate event being used to automatically assign (to a field) the date that the record is modified:

```4d
  //Method of a form
 Case of
  // ...
    :(Form event code=On Validate)
       [aTable]Last Modified On:=Current date
 End case
```

## Ejemplo 2

In this example, the complete handling of a drop-down list (initialization, user clicks, and object release) is encapsulated in the method of the object:

```4d
  //Método Objeto lista desplegable asBurgerSize 
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asBurgerSize;3)
       asBurgerSize{1}:="Small"
       asBurgerSize{1}:="Medium"
       asBurgerSize{1}:="Large"
    :(Form event code=On Clicked)
       If(asBurgerSize#0)
          ALERT("You chose a "+asBurgerSize{asBurgerSize}+" burger.")
       End if
    :(Form event code=On Unload)
       CLEAR VARIABLE(asBurgerSize)
 End case
```

## Ejemplo 3

Este ejemplo es un método formulario genérico. Muestra cada uno de los posibles eventos que pueden ocurrir cuando un formulario se utiliza como formulario de salida:

```4d
  //Método de un formulario utilizado como formulario de salida para un informe resumen
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Header)
  //Un área de encabezado está a punto de imprimirse
       Case of
          :(Before selection($vpFormTable->))
  //El código para la primera ruptura de encabezado va aquí
          :(Level=1)
  //El código para la ruptura de encabezado nivel 1 debe ser pasado aquí
          :(Level=2)
  //El código para la ruptura de encabezado nivel 2 debe ser pasado aquí
  //...
       End case
    :(Form event code=On Printing Detail)
  //Un registro está a punto de imprimirse
  //El código para cada registro va aquí
    :(Form event code=On Printing Break)
  //Un área de ruptura está a punto de imprimirse
       Case of
          :(Level=0)
  //El código para un nivel de ruptura 0 va aquí
          :(Level=1)
  //El código para un nivel de ruptura 1 va aquí
  //...
       End case
    :(Form event code=On Printing Footer)
       If(End selection($vpFormTable->))
  //El código para el último pie de página va aquí
       Else
  //Código par un pie va aquí
       End if
 End case
```

## Ejemplo 4

Este ejemplo muestra la plantilla de un método de formulario que maneja los eventos que pueden ocurrir para un formulario mostrado usando los comandos [DISPLAY SELECTION](../commands-legacy/display-selection.md) o [MODIFY SELECTION](../commands-legacy/modify-selection.md). For didactic purposes, it displays the nature of the event in the title bar of the form window.

```4d
  ////Método formulario
 Case of
    :(Form event code=On Load)
       $vsTheEvent:="The form is about to be displayed"
    :(Form event code=On Unload)
       $vsTheEvent:="The output form has been exited and is about to disappear from the screen"
    :(Form event code=On Display Detail)
       $vsTheEvent:="Displaying record #"+String(Selected record number([TheTable]))
    :(Form event code=On Menu Selected)
       $vsTheEvent:="A menu item has been selected"
    :(Form event code=On Header")
       $vsTheEvent:="The header area is about to be drawn"
    :(Form event code=On Clicked")
       $vsTheEvent:="A record has been clicked"
    :(Form event code=On Double Clicked")
       $vsTheEvent:="A record has been double clicked"
    :(Form event code=On Open Detail)
       $vsTheEvent:="The record #"+String(Selected record number([TheTable]))+" is double-clicked"
    :(Form event code=On Close Detail)
       $vsTheEvent:="Going back to the output form"
    :(Form event code=On Activate)
       $vsTheEvent:="The form's window has just become the frontmost window"
    :(Form event code=On Deactivate)
       $vsTheEvent:="The form's window is no longer the frontmost window"
    :(Form event code=On Menu Selected)
       $vsTheEvent:="A menu item has been chosen"
    :(Form event code=On Outside Call)
       $vsTheEvent:="A call from another has been received"
    Else
       $vsTheEvent:="What's going on? Event #"+String(Form event)
 End case
 SET WINDOW TITLE($vsTheEvent)
```

## Ejemplo 5

For examples on how to handle [`On Before Keystroke`](../Events/onBeforeKeystroke.md) and [`On After Keystroke`](../Events/onAfterKeystroke.md) events, see examples for the [Get edited text](../commands-legacy/get-edited-text.md), [Keystroke](../commands-legacy/keystroke.md) and [FILTER KEYSTROKE](../commands-legacy/filter-keystroke.md) commands.

## Ejemplo 6

This example shows how to treat clicks and double clicks in the same way in a scrollable area:

```4d
  //Método objeto para el área de desplazamiento asChoices
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices;...)
  //...
       asChoices:=0
    :((Form event code=On Clicked)|(Form event code=On Double Clicked))
       If(asChoices#0)
  //Al hacer clic en un elemento, hacer algo aquí
  //...
       End if
  //...
 End case
```

## Ejemplo 7

This example shows how to treat clicks and double clicks using a different response. Note the use of the element zero for keeping track of the selected element:

```4d
//Método objeto área de desplazamiento asChoices
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices;...)
  // ...
       asChoices:=0
       asChoices{0}:="0"
    :(Form event code=On Clicked)
       If(asChoices#0)
          If(asChoices#Num(asChoices))
//Un nuevo elemento ha sido presionado, hacer algo aquí
//...
//Guardar el nuevo elemento seleccionado para la próxima vez
asChoices{0}:=String(asChoices)
End if
other
Choices:=Num(asChoices{0})
End if
:(Form event code=On Double Clicked)
Sif(asChoices#0)
//Se hizo doble clic en un elemento, hacer algo diferente aquí
       End if
  // ...
 End case
```

## Ejemplo 8

This example shows how to maintain a status text information area from within a form method, using the [`On Getting Focus`](../Events/onGettingFocus.md) and [`On Losing Focus`](../Events/onLosingFocus.md) events:

```4d
//Método formulario [Contacts];"Data Entry"
 Case of
    :(Form event code=On Load)
       var vtStatusArea : Text
       vtStatusArea:=""
    :(Form event code=On Getting Focus)
       RESOLVE POINTER(Focus object;$vsVarName;$vlTableNum;$vlFieldNum)
       If(($vlTableNum#0)&($vlFieldNum#0))
          Case of
             :($vlFieldNum=1) //Campo Apellido
                vtStatusArea:="Enter the Last name of the Contact; it will be capitalized automatically"
  //...
             :($vlFieldNum=10) //Campo Código postal
                vtStatusArea:="Enter a 5-digit zip code; it will be checked and validated automatically"
  //...
          End case
       End if
    :(Form event code=On Losing Focus)
       vtStatusArea:=""
  //...
 End case
```

## Ejemplo 9

Este ejemplo muestra cómo responder a un evento de cierre de ventana con un formulario utilizado para la entrada de datos de registro:

```4d
  //Method for an input form
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("This record has been modified. Save Changes?")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       Else
          CANCEL
       End if
  //...
 End case
```

## Ejemplo 10

This example shows how to capitalize a text or alphanumeric field each time its data source value is modified:

```4d
  //[Contacts]First Name Object method
 Case of
  //...
    :(Form event code=On Data Change)
       [Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))
  //...
 End case
```

## Ejemplo 11

The following example illustrates how to manage a deletion action in a hierarchical list:

```4d
 ... //method of hierarchical list
:(Form event code=On Delete Action)
 ARRAY LONGINT($itemsArray;0)
 $Ref:=Selected list items(<>HL;$itemsArray;*)
 $n:=Size of array($itemsArray)
 
 Case of
    :($n=0)
       ALERT("No item selected")
       OK:=0
    :($n=1)
       CONFIRM("Do you want to delete this item?")
    :($n>1)
       CONFIRM("Do you want to delete these items?")
 End case
 
 If(OK=1)
    For($i;1;$n)
       DELETE FROM LIST(<>HL;$itemsArray{$i};*)
    End for
 End if
```

## Ejemplo 12

In this example, the [`On Scroll`](../Events/onScroll.md) form event allows us to synchronize the display of two pictures in a form. The following code is added in the "satellite" object method (picture field or variable):

```4d
 Case of
    :(Form event code=On Scroll)
  // we take the position of the left picture
       OBJECT GET SCROLL POSITION(*;"satellite";vPos;hPos)
  // and we apply it to the right picture
       OBJECT SET SCROLL POSITION(*;"plan";vPos;hPos;*)
 End case
```

Result: https://www.youtube.com/watch?v=YIRfsW1BmHE

## Ejemplo 13

You want to draw a red rectangle around the selected cell of a list box, and you want the rectangle to move along with the list box if it is scrolled vertically by the user. En el método objeto del list box, puedes escribir:

```4d
 Case of
 
    :(Form event code=On Clicked)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT SET VISIBLE(*;"RedRect";True) //initialize a red rectangle
       OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
 
    :(Form event code=On Scroll)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT GET COORDINATES(*;"LB1";$xlb1;$ylb1;$xlb2;$ylb2)
       $toAdd:=LISTBOX Get headers height(*;"LB1") //height of the header so as not to overlap it
       If($ylb1+$toAdd<$y1)&($ylb2>$y2) //if we are inside the list box
  //to keep it simple, we only handle headers
  //but we should handle horizontal clipping
  //as well as scroll bars
          OBJECT SET VISIBLE(*;"RedRect";True)
          OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
       Else
          OBJECT SET VISIBLE(*;"RedRect";False)
       End if
 
 End case
```

As a result, the red rectangle follows the scrolling of the list box:

![](../assets/en/commands/pict1900395.en.png)

## Ver también

[Form Events](../Events/overview.md)
[CALL SUBFORM CONTAINER](../commands-legacy/call-subform-container.md)\
[Current form table](../commands-legacy/current-form-table.md)\
[FILTER KEYSTROKE](../commands-legacy/filter-keystroke.md)\
[FORM Event](form-event.md)\
[Get edited text](../commands-legacy/get-edited-text.md)\
[Keystroke](../commands-legacy/keystroke.md)\
[POST OUTSIDE CALL](../commands-legacy/post-outside-call.md)\
[SET TIMER](../commands-legacy/set-timer.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 388                         |
| Hilo seguro       | &cross; |


