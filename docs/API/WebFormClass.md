---
id: WebFormClass
title: WebForm
---


The `WebForm` class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R6|Added enableState() and disableState()|
|20 R2|Added|

</details>




### Commands and functions

||
|---|
|[<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->|
|[<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.disableState().Summary -->|
|[<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.enableState().Summary -->|
|[<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->|
|[<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->|
|[<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->|
|[<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Form.Summary -->|
|[<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Event.Summary -->|



### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Description

The components of webforms are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these webforms.

For more information, please refer to the [`.componentName` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#componentname).



### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->
**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|state|string|->|Name of state to disable from the web form|
<!-- END REF -->

#### Description

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the *state* in the current web form<!-- END REF -->.

This function does nothing if:
- the *state* is currently not enabled in the web form,
- the *state* does not exist for the web form.

If you [enable](#enablestate) or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/design-webforms/states).




### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->
**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|state|string|->|Name of state to enable on the web form|
<!-- END REF -->

#### Description

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the *state* in the current web form<!-- END REF -->.

This function does nothing if:
- the *state* has already been enabled on the web form,
- the *state* does not exist for the web form.

If you enable or [disable](#disablestate) several states within the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/design-webforms/states).


### .setError()

<!-- REF #WebFormClass.setError().Syntax -->
**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Error message to display in the web form|
<!-- END REF -->

#### Description

The `.setError()` function <!-- REF #WebFormClass.setError().Summary -->sends *msg* as an error message to the web form<!-- END REF -->.

For more information, please refer to the [`.setError()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#seterror).



### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->
**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Information message to display in the web form|
<!-- END REF -->

#### Description

The `.setMessage()` function <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the web form<!-- END REF -->.

For more information, please refer to the [`.setMessage()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setmessage).


### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->
**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Warning message to display in the web form|
<!-- END REF -->

#### Description

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends *msg* as a warning message to the web form<!-- END REF -->.

For more information, please refer to the [`.setWarning()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setwarning).


## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|<-|New `WebForm` proxy object
<!-- END REF -->

#### Description

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` proxy object that allows you to interact with the web form<!-- END REF -->.

For more information, please refer to the [`webForm` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webform).


## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-| object
<!-- END REF -->

#### Description

The `Web Event` command <!-- REF #_command_.Web Event.Summary -->returns an object with information on a triggered event linked to a webform component<!-- END REF -->.

For more information, please refer to the [`webEvent` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webevent).
