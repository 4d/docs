---
id: onCloseBox
title: On Close Box
---

| Code | Puede ser llamado por | Definición                              |
| ---- | --------------------- | --------------------------------------- |
| 22   | Formulario            | The window’s close box has been clicked |


## Descripción

The `On Close Box` event is generated when the user clicks on the clos box of the window.

### Ejemplo

This example shows how to respond to a close window event with a form used for record data entry:

```4d
  //Method for an input form
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("This record has been modified. Save Changes?")
          Save Changes?")
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