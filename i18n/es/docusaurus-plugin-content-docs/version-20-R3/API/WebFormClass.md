---
id: WebFormClass
title: WebForm
---


La clase `WebForm` contiene funciones y propiedades que permiten manejar sus componentes de webforms Qodly. Esta clase se detalla en la [documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20 R2  | Añadidos       |

</details>




### Comandos y funciones

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->|
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->|
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->|
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->|
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Form.Summary -->|
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Event.Summary -->|



### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Descripción

Los componentes de los webforms son <!-- REF #WebFormClass.componentName.Summary -->objetos que están disponibles directamente como propiedades<!-- END REF --> de estos webforms.

Para más información, consulte la descripción de [`.componentName` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#componentname).



### .setError()

<!-- REF #WebFormClass.setError().Syntax -->
**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->
| Parámetros | Tipo   |    | Descripción                                     |
| ---------- | ------ |:--:| ----------------------------------------------- |
| msg        | string | -> | Mensaje de error a mostrar en el formulario web |
<!-- END REF -->

#### Descripción

La función `.setError()` <!-- REF #WebFormClass.setError().Summary -->envía *msg* como mensaje de error al formulario web<!-- END REF -->.

Para más información, consulte la descripción de [`.setError()` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#seterror).



### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->
**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->
| Parámetros | Tipo   |    | Descripción                                           |
| ---------- | ------ |:--:| ----------------------------------------------------- |
| msg        | string | -> | Mensaje de información a mostrar en el formulario web |
<!-- END REF -->

#### Descripción

La función `.setMessage()` <!-- REF #WebFormClass.setMessage().Summary -->envía *msg* como mensaje de información al formulario web<!-- END REF -->.

Para más información, consulte la descripción de [`.setMessage()` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setmessage).


### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->
**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->
| Parámetros | Tipo   |    | Descripción                                              |
| ---------- | ------ |:--:| -------------------------------------------------------- |
| msg        | string | -> | Mensaje de advertencia para mostrar en el formulario web |
<!-- END REF -->

#### Descripción

La función `.setWarning()`  <!-- REF #WebFormClass.setWarning().Summary -->envía *msg* como mensaje de advertencia al formulario web<!-- END REF -->.

Para más información, consulte la descripción de [`.setWarning()` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setwarning).


## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->
| Parámetros | Tipo       |    | Descripción                  |
| ---------- | ---------- |:--:| ---------------------------- |
| Result     | 4D.WebForm | <- | Nuevo objeto proxy `WebForm` |
<!-- END REF -->

#### Descripción

El comando `Web Form` <!-- REF #_command_.Web Form.Summary --> devuelve un objeto proxy `4D.WebForm` que permite interactuar con el formulario web<!-- END REF -->.

Para más información, consulte la descripción del comando [`webForm` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webform).


## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->
| Parámetros | Tipo   |    | Descripción |
| ---------- | ------ |:--:| ----------- |
| Result     | object | <- | object      |
<!-- END REF -->

#### Descripción

El comando `Web Event` <!-- REF #_command_.Web Event.Summary -->devuelve un objeto con información sobre un evento desencadenado vinculado a un componente webform<!-- END REF -->.

Para más información, consulte la descripción del comando [`webEvent` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webevent). 