---
id: WebFormClass
title: WebForm
---


The `WebForm` class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v20 R2|Added|

</details>




### Commands and functions

||
|---|
|[<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->|
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