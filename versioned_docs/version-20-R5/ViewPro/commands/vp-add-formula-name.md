---
id: vp-add-formula-name
title: VP ADD FORMULA NAME
---

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|vpFormula|Text|-> |4D View Pro formula
|name|Text|->|Name for the formula|
|options|Object|->|Options for the named formula|<!-- END REF -->

#### Description

The `VP ADD FORMULA NAME` command <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->creates or modifies a named formula in the open document<!-- END REF -->.

>Named formulas created by this command are saved with the document.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the 4D View Pro formula that you want to name in *vpFormula*. For detailed information about formula syntax, see [Formulas and Functions](../formulas.md) page.

Pass the new name for the formula in *name*. If the name is already used within the same scope, the new named formula replaces the existing one. Note that you can use the same name for different scopes (see below).

You can pass an object with additional properties for the named formula in *options*. The following properties are supported:

|Property |Type|Description|
|---|---|---|
|scope| Number| Scope for the formula. You can pass the sheet index (counting begins at 0) or use the following constants: <li>`vk current sheet`</li><li>`vk workbook`</li>The scope determines whether a formula name is local to a given worksheet (*scope*=sheet index or `vk current sheet`), or global across the entire workbook (*scope*=`vk workbook`).|
|comment|Text|Comment associated to named formula

#### Example  

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### See also

[Cell references](../formulas.md#cell-references)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Get names](vp-get-names.md)

