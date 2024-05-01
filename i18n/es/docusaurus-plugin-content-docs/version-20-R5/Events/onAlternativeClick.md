---
id: onAlternativeClick
title: On Alternative Click
---

| Code | Puede ser llamado por                                                                                                                                        | Definición                                                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38   | [Button](FormObjects/button_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | <li>Buttons: The "arrow" area of a button is clicked</li><li>List boxes: In a column of an object array, an ellipsis button ("alternateButton" attribute) is clicked</li> |

## Descripción

### Botones

Some button styles can be [linked to a pop-up menu](FormObjects/properties_TextAndPicture.md#with-pop-up-menu) and display an triangle. Al hacer clic en este triángulo, aparece una ventana emergente de selección que brinda un conjunto de acciones alternativas en relación con la acción del botón principal.

4D allows you to manage this type of button using the `On Alternative Click` event. Este evento se genera cuando el usuario hace clic en el triángulo (en cuanto se mantiene presionado el botón del ratón):

- If the pop-up menu is **separated**, the event is only generated when a click occurs on the portion of the button with the arrow. Note that the [standard action](https://doc.4d.com/4Dv19R7/4D/19-R7/Standard-actions.300-6013479.en.html) assigned to the button (if any) is not executed in this case.
- If the pop-up menu is **linked**, the event is generated when a click occurs on any part of the button. Note that the [`On Long Click`](onLongClick.md) event cannot be generated with this type of button.

![](../assets/en/Events/clickevents.png)

### List box

This event is generated in columns of [object array type list boxes](FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro), when the user clicks on a widget ellipsis button ("alternateButton" attribute).

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

See the [description of the "alternateButton" attribute](FormObjects/listbox_overview.md#alternatebutton).
