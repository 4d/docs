---
id: commands-n
title: N
---

> **Warning**: The commands on this page are not thread-safe.


### VP Name

<!-- REF #_method_.VP Name.Syntax -->
**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *sheet* : Integer }  ) : Object <!-- END REF -->

<!-- REF #_method_.VP Name.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName|Text|->|4D View Pro area form object name|
|rangeName|Text|->|Existing range name|
|sheet|Integer|->|Range location (current sheet if omitted)|
|Result|Object|<-|Range object of name|<!-- END REF -->

#### Description

The `VP Name` command <!-- REF #_method_.VP Name.Summary -->returns a new range object referencing a named range<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *rangeName* parameter specifies an existing named cell range.

In the optional *sheet* parameter, you can designate a specific spreadsheet where *rangeName* is defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet or the entire workbook with the following constants:

* `vk current sheet`
* `vk workbook`  

#### Example

You want to give a value to the "Total" named range.

```4d
// name the B5 cell as Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";" Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

#### See also

[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP ALL](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Get names](#vp-get-names)<br/>[VP REMOVE NAME](#vp-remove-name)<br/>[VP Row](#vp-row)

### VP NEW DOCUMENT

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->
**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|<!-- END REF -->



#### Description

The `VP NEW DOCUMENT` command <!-- REF #_method_.VP NEW DOCUMENT.Summary -->loads and display a new, default document in the 4D View Pro form area object *vpAreaName*<!-- END REF -->. The new empty document replaces any data already inserted in the area.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.  

#### Example

You want to display an empty document in the "myVPArea" form object:

```4d
VP NEW DOCUMENT("myVPArea")
```

#### See also

[VP IMPORT DOCUMENT](#vp-import-document)

---
