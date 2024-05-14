---
id: onAlternativeClick
title: On Alternative Click
---

| Code | Puede ser llamado por                                                                                                                                            | Definición                                                                                                                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38   | [Botón](FormObjects/button_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) | <li>Buttons: The "arrow" area of a button is clicked</li><li>List boxes: In a column of an object array, an ellipsis button ("alternateButton" attribute) is clicked</li> |

## Descripción

### Botones

Algunos estilos de botón pueden ser [vinculados a un menú emergente](FormObjects/properties_TextAndPicture.md#with-pop-up-menu) y mostrar un triángulo. Al hacer clic en este triángulo, aparece una ventana emergente de selección que brinda un conjunto de acciones alternativas en relación con la acción del botón principal.

4D permite gestionar este tipo de botones utilizando el evento `On Alternative Click`. Este evento se genera cuando el usuario hace clic en el triángulo (en cuanto se mantiene presionado el botón del ratón):

- Si el menú emergente está **separado**, el evento sólo se genera cuando se hace clic en la parte del botón con la flecha. Tenga en cuenta que la [acción estándar](https://doc.4d.com/4Dv19R7/4D/19-R7/Standard-actions.300-6013479.en.html) asignada al botón (si existe) no se ejecuta en este caso.
- Si el menú emergente está **asociado**, el evento se genera cuando se hace clic en cualquier parte del botón. Note that the [`On Long Click`](onLongClick.md) event cannot be generated with this type of button.

![](../assets/en/Events/clickevents.png)

### List box

Este evento se genera en las columnas de [list box de tipo array objeto](FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro), cuando el usuario hace clic en un botón de selección de widget (atributo "alternateButton").

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

Ver la [descripción del atributo "alternateButton"](FormObjects/listbox_overview.md#alternatebutton).
