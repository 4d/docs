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

In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the [focusable](FormObjects/properties_Entry.md#focusable) property). 