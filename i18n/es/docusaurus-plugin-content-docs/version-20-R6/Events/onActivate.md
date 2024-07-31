---
id: onActivate
title: On Activate
---

| Code | Puede ser llamado por | Definición                                                                                                                           |
| ---- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 11   | Formulario            | La ventana del formulario se convierte en la ventana que se encuentra más adelante o el contenedor del subformulario obtiene el foco |

## Descripción

Si la ventana de un formulario fue enviada al fondo, este evento es llamado cuando la ventana se convierte en la ventana activa.

Este evento se aplica al formulario en su conjunto y no a un objeto en particular. Por lo tanto, si se selecciona la propiedad de evento formulario `On Activate`, sólo se llamará al método formulario.

En el caso de un subformulario, este evento se pasa al subformulario cuando el contenedor obtiene el foco (si tiene la propiedad [focusable](FormObjects/properties_Entry.md#focusable)).
