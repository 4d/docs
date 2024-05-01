---
id: WebFormClass
title: WebForm
---

The `WebForm` class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R2       | Añadidos       |

</details>

### Comandos y funciones

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary --> |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->            |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->      |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->      |
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.Web Form.Summary -->                      |
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.Web Event.Summary -->                   |

### _.componentName_

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Descripción

The components of webforms are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these webforms.

For more information, please refer to the [`.componentName` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#componentname).

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->

**.setError**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| Parámetros | Tipo   |     | Descripción                                     |
| ---------- | ------ | :-: | ----------------------------------------------- |
| msg        | string |  -> | Mensaje de error a mostrar en el formulario web |

<!-- END REF -->

#### Descripción

The `.setError()` function <!-- REF #WebFormClass.setError().Summary -->sends _msg_ as an error message to the web form<!-- END REF -->.

For more information, please refer to the [`.setError()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#seterror).

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->

**.setMessage**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| Parámetros | Tipo   |     | Descripción                                           |
| ---------- | ------ | :-: | ----------------------------------------------------- |
| msg        | string |  -> | Mensaje de información a mostrar en el formulario web |

<!-- END REF -->

#### Descripción

The `.setMessage()` function <!-- REF #WebFormClass.setMessage().Summary -->sends _msg_ as an information message to the web form<!-- END REF -->.

For more information, please refer to the [`.setMessage()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setmessage).

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->

**.setWarning**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| Parámetros | Tipo   |     | Descripción                                              |
| ---------- | ------ | :-: | -------------------------------------------------------- |
| msg        | string |  -> | Mensaje de advertencia para mostrar en el formulario web |

<!-- END REF -->

#### Descripción

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends _msg_ as a warning message to the web form<!-- END REF -->.

For more information, please refer to the [`.setWarning()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setwarning).

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Parámetros | Tipo                       |     | Descripción                |
| ---------- | -------------------------- | :-: | -------------------------- |
| Result     | 4D.WebForm |  <- | New `WebForm` proxy object |

<!-- END REF -->

#### Descripción

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` proxy object that allows you to interact with the web form<!-- END REF -->.

For more information, please refer to the [`webForm` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webform).

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Parámetros | Tipo   |     | Descripción |
| ---------- | ------ | :-: | ----------- |
| Result     | object |  <- | object      |

<!-- END REF -->

#### Descripción

The `Web Event` command <!-- REF #_command_.Web Event.Summary -->returns an object with information on a triggered event linked to a webform component<!-- END REF -->.

For more information, please refer to the [`webEvent` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webevent).
