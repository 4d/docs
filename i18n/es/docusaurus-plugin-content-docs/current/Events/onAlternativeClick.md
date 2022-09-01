---
id: onAlternativeClick
title: On Alternative Click
---

| Code | Puede ser llamado por                                                                                                                                            | Definición                                         |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 38   | [Botón](FormObjects/button_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) | <li>Botones: el área "flecha" de un botón se presiona</li><li>List box: en una columna de un array, se hace clic en un botón de selección (atributo "alternateButton")</li> |

## Descripción

### Botones

Algunos estilos de botón pueden ser [vinculados a un menú emergente](FormObjects/properties_TextAndPicture.md#with-pop-up-menu) y mostrar un triángulo. Al hacer clic en este triángulo, aparece una ventana emergente de selección que brinda un conjunto de acciones alternativas en relación con la acción del botón principal.

4D permite gestionar este tipo de botones utilizando el evento `On Alternative Click`. Este evento se genera cuando el usuario hace clic en el triángulo (en cuanto se mantiene presionado el botón del ratón):

- Si el menú emergente está **separado**, el evento sólo se genera cuando se hace clic en la parte del botón con la flecha.
- Si el menú emergente está **asociado**, el evento se genera cuando se hace clic en cualquier parte del botón. Tenga en cuenta que el evento [`On Long Click`](onLongClick.md) no se puede generar con este tipo de botón.

![](../assets/en/Events/clickevents.png)

### List box

Este evento se genera en las columnas de [list box de tipo array objeto](FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro), cuando el usuario hace clic en un botón de selección de widget (atributo "alternateButton").

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

Ver la [descripción del atributo "alternateButton"](FormObjects/listbox_overview.md#alternatebutton).
