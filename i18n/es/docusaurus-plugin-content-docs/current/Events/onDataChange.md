---
id: onDataChange
title: On Data Change
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Definición                               |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| 20   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Formulario - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Lista](FormObjects/listbox_overview.md) - [Columna de list box](FormObjects/listbox_overview.md#list-box-columns) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progreso](FormObjects/progressIndicator.md) - [Regla](FormObjects/ruler.md) - [Selector](FormObjects/spinner.md) - [Pasos](FormObjects/stepper.md) - [Subformulario](FormObjects/subform_overview.md) | Se han modificado los datos de un objeto |

## Descripción

Cuando se selecciona la propiedad de evento `On Data Change` para un objeto, se puede detectar y manejar el cambio del valor de la fuente de datos, utilizando el comando `FORM Event`.

El evento se genera en cuanto la variable asociada al objeto es actualizada internamente por 4D (es decir, en general, cuando la zona de entrada del objeto pierde el foco).

> Con los [subformularios](FormObjects/subform_overview.md), el evento `On Data Change` se dispara cuando el valor de la variable del objeto subformulario ha sido modificado.
