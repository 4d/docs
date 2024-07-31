---
id: onDisplayDetail
title: On Display Detail
---

| Code | Puede ser llamado por                                    | Definición                                                                                                                               |
| ---- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 8    | Formulario - [List Box](FormObjects/listbox_overview.md) | Un registro está a punto de ser mostrado en un formulario lista o una línea está a punto de ser mostrada en un list box. |

## Descripción

El evento `On Display Detail` puede utilizarse en los siguientes contextos:

### Formulario de salida

Un registro está a punto de ser visualizado en un formulario de lista que se muestra vía `DISPLAY SELECTION` y `MODIFY SELECTION`.

> Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.

En este contexto, se desencadena la siguiente secuencia de llamadas a métodos y eventos de formulario:

- Para cada registro:
  - Para cada objeto en el área detallada:
    - Método objeto con el evento `On Display Detail`
  - Método formulario con el evento `On Display Detail`

> El área del encabezado se maneja utilizando el evento [`On Header`](onHeader.md).

Llamar a un comando 4D que muestra una caja de diálogo desde el evento `On Display Detail` no está permitido y provocará un error de sintaxis. Más concretamente, los comandos en cuestión son: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION` y `MODIFY SELECTION`.

### List box selección

Este evento se genera cuando se muestra una fila de un list box de [**tipo selección**](FormObjects/listbox_overview.md#selección-list-boxes).

### Número de línea mostrado

El comando 4D `Número de línea mostrado` funciona con el evento formulario `On Display Detail`. Devuelve el número de la línea que se está procesando mientras se visualiza en pantalla una lista de registros o de líneas de list box.
