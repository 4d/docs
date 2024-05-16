---
id: onDeactivate
title: On Deactivate
---

| Code | Puede ser llamado por | Definición                                              |
| ---- | --------------------- | ------------------------------------------------------- |
| 12   | Formulario            | La ventana del formulario deja de ser la ventana activa |

## Descripción

Si la ventana de un formulario era la ventana del primer plano, este evento es llamado cuando la ventana es enviada al fondo.

Este evento se aplica al formulario en su conjunto y no a un objeto en particular. Por lo tanto, si se selecciona la propiedad de evento formulario `On Deactivate`, sólo se llamará al método formulario.

### Ver también

[On Activate](onActivate.md)
