---
id: vp-new-document
title: VP NEW DOCUMENT
---


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

[VP IMPORT DOCUMENT](vp-import-document.md)

---
