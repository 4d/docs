---
id: propertiesHelp
title: Ayuda
---

---
## Mensaje de ayuda

Esta propiedad permite asociar los mensajes de ayuda a los objetos activos de sus formularios. Se pueden mostrar en ejecución:

![](assets/en/FormObjects/property_helpTip.png)

> - El retardo de la visualización y la duración máxima de los mensajes de ayuda pueden controlarse utilizando los selectores `Tips delay` y `Tips duration` del comando **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)**.
> - Los mensajes de ayuda se pueden deshabilitar o habilitar globalmente para la aplicación utilizando el selector del comando [**SET DATABASE PARAMETER**](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html).

Puede:

- designar un mensajes de ayuda existente, previamente especificado en el editor de [mensajes de ayuda](https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html) de 4D.
- o introducir el mensaje de ayuda directamente como una cadena. Esto le permite aprovechar la arquitectura XLIFF. Aquí puede introducir una referencia XLIFF para mostrar un mensaje en el lenguaje de la aplicación (para más información sobre XLIFF, consulte [Anexo B: Arquitectura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html). También puede utilizar referencias 4D ([ver Uso de referencias en texto estático](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).
> En macOS, no se soporta la visualización de mensajes de ayuda en ventanas de tipo emergente.


#### Gramática JSON

| Nombre  | Tipos de datos | Valores posibles                             |
|:-------:|:--------------:| -------------------------------------------- |
| tooltip |     texto      | información adicional para ayudar al usuario |

#### Objetos soportados

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md)  - [Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up menu](picturePopupMenu_overview.md) - [Radio Button](radio_overview.md)


#### Otras funcionalidades de ayuda

You can also associate help messages with form objects in two other ways:

- at the level of the database structure (fields only). In this case, the help tip of the field is displayed in every form where it appears. For more information, refer to “Help Tips” in [Field properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- using the **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command, for the current process.

When different tips are associated with the same object in several locations, the following priority order is applied:

1. structure level (lowest priority)
2. editor de formulario
3. **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command (highest priority)


#### Ver también

[Placeholder](properties_Entry.md#placeholder)
