---
id: web-get-current-session-id
title: WEB Get current session ID
slug: /commands/web-get-current-session-id
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get current session ID.Syntax-->**WEB Get current session ID**  : Text<!-- END REF-->
<!--REF #_command_.WEB Get current session ID.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Session UUID |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.WEB Get current session ID.Summary-->The **WEB Get current session ID** command returns the ID of the session open for the Web request.<!-- END REF--> This ID is generated automatically by 4D as an UUID. 

If this command is called outside of the context of a Web session, it returns an empty string "". 

## See also 

[WEB LEGACY GET SESSION EXPIRATION](../commands/web-legacy-get-session-expiration)  
*Web Sessions Management (Legacy)*  

## Properties

|  |  |
| --- | --- |
| Command number | 1162 |
| Thread safe | yes |


