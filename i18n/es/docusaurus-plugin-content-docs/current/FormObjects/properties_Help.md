---
id: propertiesHelp
title: Ayuda
---

## Mensaje de ayuda

Esta propiedad permite asociar los mensajes de ayuda a los objetos activos de sus formularios. Se pueden mostrar en ejecución:

![](../assets/en/FormObjects/property_helpTip.png)

> - The display delay and maximum duration of help tips can be controlled using the `Tips delay` and `Tips duration` selectors of the **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)** command.
> - Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the [**SET DATABASE PARAMETER**](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html) command.

Puede:

- designate an existing help tip, previously specified in the [Help tips](https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html) editor of 4D.
- o introducir el mensaje de ayuda directamente como una cadena. Esto le permite aprovechar la arquitectura XLIFF. You can enter an XLIFF reference here in order to display a message in the application language (for more information about XLIFF, refer to [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html). You can also use 4D references ([see Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).

> \> In macOS, displaying help tips is not supported in pop-up type windows.

#### Gramática JSON

|  Nombre | Tipos de datos | Valores posibles                             |
| :-----: | :------------: | -------------------------------------------- |
| tooltip |      text      | información adicional para ayudar al usuario |

#### Objetos soportados

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md)  - [Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up menu](picturePopupMenu_overview.md) - [Radio Button](radio_overview.md)

#### Otras funcionalidades de ayuda

También puede asociar los mensajes de ayuda a los objetos formulario de otras dos maneras:

- a nivel de la estructura de la base de datos (sólo campos). En este caso, la ayuda del campo se muestra en todos los formularios en los que aparece. For more information, refer to “Help Tips” in [Field properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- using the **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command, for the current process.

Cuando se asocian consejos diferentes a un mismo objeto en varias ubicaciones, se aplica el siguiente orden de prioridad:

1. nivel de estructura (prioridad más baja)
2. editor de formulario
3. **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command (highest priority)

#### Ver también

[Placeholder](properties_Entry.md#placeholder)
