---
id: reload-external-data
title: RELOAD EXTERNAL DATA
slug: /commands/reload-external-data
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD EXTERNAL DATA.Syntax-->**RELOAD EXTERNAL DATA** ( *aField* )<!-- END REF-->
<!--REF #_command_.RELOAD EXTERNAL DATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Text, Blob, Picture, Object | &#8594;  | Field for which to set the storage location |

<!-- END REF-->

#### Description 

<!--REF #_command_.RELOAD EXTERNAL DATA.Summary-->The **RELOAD EXTERNAL DATA** command reloads the contents in memory of an external storage file associated with a BLOB, Picture, or Text type field.<!-- END REF-->

This command is useful when the field of a record already loaded in memory is modified on the disk by another application (external storage files for fields are always writable). For example, a picture used in a Picture field can be modified by a graphic editor then saved on disk.

You then need to reload the data using the **RELOAD EXTERNAL DATA** command to update the contents of the field if it displayed in a form.

**Note:** The **RELOAD EXTERNAL DATA** command only works on a local 4D or on 4D Server. You cannot reload a field individually with 4D in remote mode. In this context, you have to reload all the records (using the [LOAD RECORD](load-record.md) command for example).

#### See also 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  