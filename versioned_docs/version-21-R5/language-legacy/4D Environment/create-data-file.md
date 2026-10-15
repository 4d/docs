---
id: create-data-file
title: CREATE DATA FILE
slug: /commands/create-data-file
displayed_sidebar: docs
---

<!--REF #_command_.CREATE DATA FILE.Syntax-->**CREATE DATA FILE** ( *accessPath* : Text )<!-- END REF-->
<!--REF #_command_.CREATE DATA FILE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| accessPath | Text | &#8594;  | Name or complete access path of the data file to create |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Modified|
|6.8|Created|

</details>
</div>

## Description 

<!--REF #_command_.CREATE DATA FILE.Summary-->The **CREATE DATA FILE** command creates a new data file to disk and replaces the data file opened by the 4D application on-the-fly.<!-- END REF-->

The general functioning of this command is identical to that of the [OPEN DATA FILE](../commands/open-data-file) command; the only difference is that the new data file set by the *accessPath* parameter is created just after the structure is re-opened.

Before launching the operation, the command verifies that the specified access path does not correspond to an existing file.

**4D Server:** Beginning with 4D v13, this command can be executed with 4D Server. In this context, it performs an internal call to [QUIT 4D](../commands/quit-4d) on the server (which causes a dialog box to appear on each remote machine, indicating that the server is in the process of quitting) before creating the designated file. 

## See also 

[OPEN DATA FILE](../commands/open-data-file)  

## Properties

|  |  |
| --- | --- |
| Command number | 313 |
| Thread safe | yes |


