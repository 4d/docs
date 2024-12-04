---
id: WebFormClass
title: WebForm
---

La clase `WebForm` contiene funciones y propiedades que permiten manejar sus componentes de webforms Qodly. Esta clase se detalla en la [documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                  |
| ----------- | ------------------------------------------------------------------------------- |
| 20 R6       | Adición de enableState() y disableState() |
| 20 R2       | Añadidos                                                                        |

</details>

### Comandos y funciones

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)<br/><!-- INCLUDE #WebFormClass.componentName.Summary -->  |
| [<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)<br/><!-- INCLUDE #WebFormClass.disableState().Summary --> |
| [<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)<br/><!-- INCLUDE #WebFormClass.enableState().Summary -->    |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)<br/><!-- INCLUDE #WebFormClass.setError().Summary -->             |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)<br/><!-- INCLUDE #WebFormClass.setMessage().Summary -->       |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)<br/><!-- INCLUDE #WebFormClass.setWarning().Summary -->       |
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)<br/><!-- INCLUDE #_command_.Web Form.Summary -->                       |
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)<br/><!-- INCLUDE #_command_.Web Event.Summary -->                    |

### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Descripción

Los componentes de los webforms son los <!-- REF #WebFormClass.componentName.Summary -->objetos disponibles directamente como propiedades<!-- END REF --> de estos webforms.

Para más información, consulte la [descripción de `.componentName` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#componentname).

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| Parámetros | Tipo   |     | Descripción                                         |
| ---------- | ------ | :-: | --------------------------------------------------- |
| state      | string |  -> | Nombre del estado a desactivar en el formulario web |

<!-- END REF -->

#### Descripción

La función `.disableState()` <!-- REF #WebFormClass.disableState().Summary -->desactiva la renderización del *estado* en el formulario web actual<!-- END REF -->.

Esta función no hace nada si:

- el *estado* no está habilitado actualmente en el formulario web,
- el *estado* no existe para el formulario web.

Si [activa](#enablestate) o desactiva varios estados en la misma función usuario, todas las modificaciones se envían al mismo tiempo al cliente una vez finalizada la función.

Para más información sobre los estados de los formularios web, consulte [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| Parámetros | Tipo   |     | Descripción                                      |
| ---------- | ------ | :-: | ------------------------------------------------ |
| state      | string |  -> | Nombre del estado a activar en el formulario web |

<!-- END REF -->

#### Descripción

La función `.enableState()` <!-- REF #WebFormClass.enableState().Summary -->activa la renderización del *estado* en el formulario web actual<!-- END REF -->.

Esta función no hace nada si:

- el *estado* ya ha sido activado en el formulario web,
- el *estado* no existe para el formulario web.

Si activa o [desactiva](#disablestate) varios estados dentro de la misma función usuario, todas las modificaciones se envían al mismo tiempo al cliente una vez que la función termina.

Para más información sobre los estados de los formularios web, consulte [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

#### Ejemplo

Usted activa un estado específico llamado "wrongCredentials" en caso de error en su página de conexión:

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| Parámetros | Tipo   |     | Descripción                                     |
| ---------- | ------ | :-: | ----------------------------------------------- |
| msg        | string |  -> | Mensaje de error a mostrar en el formulario web |

<!-- END REF -->

#### Descripción

La función `.setError()` <!-- REF #WebFormClass.setError().Summary -->envía *msg* como mensaje de error al formulario web<!-- END REF -->.

Para más información, consulte la [descripción de `.setError()` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#seterror).

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| Parámetros | Tipo   |     | Descripción                                           |
| ---------- | ------ | :-: | ----------------------------------------------------- |
| msg        | string |  -> | Mensaje de información a mostrar en el formulario web |

<!-- END REF -->

#### Descripción

La función `.setMessage()` <!-- REF #WebFormClass.setMessage().Summary -->envía *msg* como mensaje de información al formulario web<!-- END REF -->.

Para más información, consulte la [descripción de `.setMessage()` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setmessage).

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| Parámetros | Tipo   |     | Descripción                                              |
| ---------- | ------ | :-: | -------------------------------------------------------- |
| msg        | string |  -> | Mensaje de advertencia para mostrar en el formulario web |

<!-- END REF -->

#### Descripción

La función `.setWarning()` <!-- REF #WebFormClass.setWarning().Summary -->envía *msg* como mensaje de advertencia al formulario web<!-- END REF -->.

Para más información, consulte la [descripción de `.setWarning()` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setwarning).

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Parámetros | Tipo                       |                             | Descripción                  |
| ---------- | -------------------------- | :-------------------------: | ---------------------------- |
| Result     | 4D.WebForm | <- | Nuevo objeto proxy `WebForm` |

<!-- END REF -->

#### Descripción

El comando `Web Form` <!-- REF #_command_.Web Form.Summary --> devuelve un objeto proxy `4D.WebForm` que permite interactuar con el formulario web<!-- END REF -->.

Para más información, consulte la [descripción de `webForm` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webform).

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : Object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Parámetros | Tipo   |                             | Descripción |
| ---------- | ------ | :-------------------------: | ----------- |
| Result     | object | <- | object      |

<!-- END REF -->

#### Descripción

El comando `Web Event` <!-- REF #_command_.Web Event.Summary -->devuelve un objeto con información sobre un evento desencadenado vinculado a un componente de formulario web<!-- END REF -->.

Para más información, consulte la [descripción de `webEvent` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webevent).
