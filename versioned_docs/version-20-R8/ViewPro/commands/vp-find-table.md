---
id: vp-find-table
title: VP Find table
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R7|Added
</details>

<!-- REF #_method_.VP Find table.Syntax -->
**VP Find table** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj |Object|->|Cell range|
|Result  |Text|<-|Table name|<!-- END REF -->

#### Description

The `VP Find table` command <!-- REF #_method_.VP Find table.Summary -->returns the name of the table to which to the *rangeObj* cell belongs<!-- END REF -->.

In *rangeObj*, pass a cell range object. If the designated cells do not belong to a table, the command returns an empty string.

If *rangeObj* is not a cell range or contains multiple ranges, the first cell of the first range is used.

#### Example

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("The "+$tableName+" table has been modified.")
     End if 
End if
```


#### See also

[VP Get table range](vp-get-table-range.md)




