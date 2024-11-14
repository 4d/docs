---
id: vp-copy-to-object
title: VP Copy to object
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R4|Added
</details>

<!-- REF #_method_.VP Copy to object.Syntax -->
**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj|Object|->|Range object|
|options|Object|->|Additional options|
|Result|Object|<-|Object returned. Contains the copied data|<!-- END REF -->


#### Description

The `VP Copy to object` command <!-- REF #_method_.VP Copy to object.Summary -->copies the contents, style and formulas from *rangeObj* to an object<!-- END REF -->.

In *rangeObj*, pass the cell range with the values, formatting, and formulas to copy. If *rangeObj* is a combined range, only the first one is used.

You can pass an optional *options* parameter with the following properties:

|Property|Type|Description|
|---|---|---|
|copy|Boolean|*True* (default) to keep the copied values, formatting and formulas after the command executes. *False* to remove them.|
|copyOptions|Integer|Specifies what is copied or moved. Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Copies all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copies only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copies only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copies the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Copies only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copies the values and formatting.</td></tr></table></p>|

The paste options defined in the [workbook options](vp-set-workbook-options.md) are taken into account.

The command returns an object that contains the copied data.

#### Example

This code sample first stores the contents, values, formatting and formulas from a range to an object, and then pastes them in another range:

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

#### See also

[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)

