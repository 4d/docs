---
id: web-form
title: Web Form
slug: /commands/web-form
displayed_sidebar: docs
---

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->
<div class="no-index">

|Parameter|Type| |Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|&#8592;|New `Web Form` proxy object|
</div>
<!-- END REF -->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 |Added|

</details>
</div>


## Description

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` proxy object, providing a means to work with and effectively emulates the Page's properties and functions<!-- END REF -->.


:::info

Keep in mind that a `4D.WebForm` object  is a **proxy object**, and not a direct reference to the web form object itself. As a consequence for example, the `4D.WebForm` object does not expose all Page properties in the Debugger. 

:::

Each property of the returned object is an object of the [4D.WebFormItem](../../API/WebFormItemClass.md) class.

The command returns `null` if it is called in a request that does not originate from Qodly Studio.


## See also 

[Web Event](../commands/web-event)</br>
[WebForm class](../../API/WebFormClass.md)</br>
[WebFormItem class](../../API/WebFormItemClass.md)

## Properties

|  |  |
| --- | --- |
| Command number | 1735 |
| Thread safe | no |




