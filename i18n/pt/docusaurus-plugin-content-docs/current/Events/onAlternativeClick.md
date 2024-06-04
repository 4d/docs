---
id: onAlternativeClick
title: On Alternative Click
---

| Code | Pode ser chamado por                                                                                                                                             | Definição                                                                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38   | [Botón](FormObjects/button_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) | <li>Buttons: The "arrow" area of a button is clicked</li><li>List boxes: In a column of an object array, an ellipsis button ("alternateButton" attribute) is clicked</li> |

## Descrição

### Botões

Algunos estilos de botón pueden ser [vinculados a un menú emergente](FormObjects/properties_TextAndPicture.md#with-pop-up-menu) y mostrar un triángulo. Clicar neste triângulo faz com que um pop-up de seleção apareça que fornece um conjunto de ações alternativas em relação à ação do botão primário.

4D permite gestionar este tipo de botones utilizando el evento `On Alternative Click`. Este evento é gerado quando o usuário clica no triângulo (assim que o botão do mouse é pressionado):

- Si el menú emergente está **separado**, el evento sólo se genera cuando se hace clic en la parte del botón con la flecha. Tenga en cuenta que la [acción estándar](https://doc.4d.com/4Dv19R7/4D/19-R7/Standard-actions.300-6013479.en.html) asignada al botón (si existe) no se ejecuta en este caso.
- Si el menú emergente está **asociado**, el evento se genera cuando se hace clic en cualquier parte del botón. Note that the [`On Long Click`](onLongClick.md) event cannot be generated with this type of button.

![](../assets/en/Events/clickevents.png)

### List box

Este evento se genera en las columnas de [list box de tipo array objeto](FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro), cuando el usuario hace clic en un botón de selección de widget (atributo "alternateButton").

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

Ver la [descripción del atributo "alternateButton"](FormObjects/listbox_overview.md#alternatebutton).
