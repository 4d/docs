---
id: onCloseBox
title: On Close Box
---

| Code | Puede ser llamado por | Definición                                       |
| ---- | --------------------- | ------------------------------------------------ |
| 22   | Formulario            | Se ha presionado la caja de cierre de la ventana |

## Descripción

El evento `On Close Box` se genera cuando el usuario hace clic en una caja de cierre de la ventana.

### Ejemplo

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
