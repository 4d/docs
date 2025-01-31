---
id: vp-get-names
title: VP Get names
---

<!-- REF #_method_.VP Get names.Syntax -->
**VP Get names** ( vpAreaName : Text { ; scope : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get names.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|scope  |Integer|->|Target scope (default= current sheet)|
|Result  |Collection|<-|Existing names in the defined scope|<!-- END REF -->

#### Description

The `VP Get names` command <!-- REF #_method_.VP Get names.Summary -->returns a collection of all defined "names" in the current sheet or in the scope designated by the *scope* parameter<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

You can define where to get the names in *scope* using either the sheet index (counting begins at 0) or the following constants:

* `vk current sheet`
* `vk workbook`

##### Returned collection

The returned collection contains one object per name. The following object properties can be returned:

|Property| Type| Description|
|---|---|---|
|result\[ ].name| Text| cell or range name|
|result\[ ].formula| Text| formula|
|result\[ ].comment| Text| Comment associated to the name|

Available properties depend on the type of the named element (named cell, named range, or named formula).

#### Example

```4d
var $list : Collection


$list:=VP Get names("ViewProArea";2) //names in 3rd sheet
```

#### See also

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Name](vp-name.md)
