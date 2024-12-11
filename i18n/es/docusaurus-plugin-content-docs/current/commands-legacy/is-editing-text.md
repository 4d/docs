---
id: is-editing-text
title: Is editing text
slug: /commands/is-editing-text
displayed_sidebar: docs
---

<!--REF #_command_.Is editing text.Syntax-->**Is editing text**  : Boolean<!-- END REF-->
<!--REF #_command_.Is editing text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si texto está siendo introducido, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is editing text.Summary-->El comando **Is editing text** devuelve **True** si el usuario está ingresando valores en un objeto de formulario de entrada, y **False** en todos los demás casos.<!-- END REF-->

Este comando se utiliza principalmente para distinguir, dentro del código activado por el evento de formulario On Before Keystroke, entre la entrada de datos de usuario real y el uso de teclas de acceso directo. Por ejemplo, es posible que desee ejecutar un código diferente si el usuario está presionando una tecla para ingresar texto en una celda o para desplazarse por el listbox.

El comando **Is editing text** solo se puede utilizar con los siguientes objetos de formulario:

* entrada
* listbox (editable y no editable)
* combo box

Con otros objetos, el comando siempre devuelve **False**. En particular, no se puede utilizar con las áreas 4D Write Pro y 4D View Pro.

#### Ejemplo 

Desea permitir que el usuario seleccione una línea que comience con la letra o el número ingresado en un listbox editable:

```4d
 Case of
    :(FORM Event.code=On Before Keystroke) //se presiona una tecla
       If(Is editing text) //el texto es ingresado
  // no permites algunos caracteres
          If(Keystroke="+")|(Keystroke="-")|(Keystroke="/")|(Keystroke="*")
             FILTER KEYSTROKE("")
          End if
       Else
  //no se ingresa nada, es la funcionalidad de desplazamiento con atajo
          $charCode:=Keystroke
          $char:=Uppercase($charCode) // elimina los acentos
          Case of
             :((($char>="A")&($char<="Z"))|(($char>="0")&($char<="9")))
                ... //Seleccione una línea que comience con la letra o número digitado
             :($charCode>=Left arrow key)&($charCode<=Down arrow key) // flechas izquierda/derecha/arriba/abajo
                FILTER KEYSTROKE("") // deshabilitar acciones de flechas
          End case
       End if
 End case
```

#### Ver también 

  
[FILTER KEYSTROKE](filter-keystroke.md)  
[Get edited text](get-edited-text.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1744 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


