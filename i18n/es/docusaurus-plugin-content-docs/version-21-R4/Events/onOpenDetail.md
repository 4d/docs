---
id: onOpenDetail
title: On Open Detail
---

| Code | Puede ser llamado por                                    | Definición                                                                                                      |
| ---- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 25   | Formulario - [List Box](FormObjects/listbox_overview.md) | El formulario detallado asociado al formulario de salida o al list box está a punto de abrirse. |

## Descripción

El evento `On Open Detail` puede utilizarse en los siguientes contextos:

- **Formularios de salida**: un registro está a punto de ser mostrado en el formulario detallado asociado al formulario de salida. Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.
- List box de [**tipo de selección**](FormObjects/listbox_overview.md#selection-list-boxes): este evento se genera cuando un registro está a punto de ser mostrado en el formulario detallado asociado a un list box de tipo de selección (y antes de que este formulario se abra).

### Número de línea mostrado

El comando 4D `Número de línea mostrado` funciona con el evento formulario `On Open Detail`. Devuelve el número de la línea que se está procesando mientras se visualiza en pantalla una lista de registros o de líneas de list box.
