---
id: soap-request
title: SOAP Request
slug: /commands/soap-request
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Request.Syntax-->**SOAP Request**  : Boolean<!-- END REF-->
<!--REF #_command_.SOAP Request.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if the request is SOAP; otherwise, False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Renamed|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SOAP Request.Summary-->The **SOAP Request** command returns **[True](true.md "True")** if the code being executed is part of a SOAP request.<!-- END REF--> 

This command can be used for security reasons in the *On Web Authentication Database Method* in order to determine the nature of the received requests.

## See also 

[SOAP DECLARATION](soap-declaration.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 783 |
| Thread safe | yes |


