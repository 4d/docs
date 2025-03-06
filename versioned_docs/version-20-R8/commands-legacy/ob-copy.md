---
id: ob-copy
title: OB Copy
slug: /commands/ob-copy
displayed_sidebar: docs
---

<!--REF #_command_.OB Copy.Syntax-->**OB Copy** ( *object* {; resolvePtrs | {; *option* {; *groupWith*}}} )  : Object<!-- END REF-->
<!--REF #_command_.OB Copy.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | Structured object |
| resolvePtrs | Boolean | &#8594;  | True = resolve pointers, False or omitted = do not resolve pointers |
| option | Integer | &#8594;  | ck shared: return a shared object,ck resolve pointers: resolve pointers before copying |
| groupWith | Collection, Object | &#8594;  | Shared collection or object to be grouped with the resulting object |
| Function result | Object | &#8592; | Deep copy of object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Copy.Summary-->The **OB Copy** command returns an object containing a complete (deep) copy of the properties, sub-objects and values for the *object*.<!-- END REF-->
If *object* contains pointer type values, by default the copy also contains the pointers. However, you can resolve pointers when copying by passing **True** in the *resolvePtrs* parameter. In this case, each pointer present as a value in *object* is evaluated when copying and its dereferenced value is used. 

**Note:** If properties of *object* are shared objects or shared collections, they become regular (not shared) objects or collections in the returned copy. Use the second syntax if you want to return shared elements (see below).

* Second syntax: **OB Copy(object{; option{; groupWith}})**

If passed, the *option* parameter can contain one or both of the following constants:

| **option**          | **Description**                                                                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ck resolve pointers | If the original object contains pointer type values, by default the copy also contains the pointers. However, you can resolve pointers when copying by passing the ck resolve pointers constant. In this case, each pointer present in the object is evaluated when copying and its dereferenced value is used. |
| ck shared           | By default, **OB Copy** returns a regular (not shared) object, even if the command is applied to a shared object. Pass the ck shared constant to create a shared object. In this case, you can use the *groupWith* parameter to associate the shared object with another collection or object (see below).      |

The *groupWith* parameter allows you to designate a collection or an object with which the resulting object should be associated. 

**Notes:** 

* **OB Copy** can be used with an entity selection object. By default if ck shared is omitted, a *non-shareable* entity selection is returned. If ck shared is passed, a *shareable* entity selection is returned. In this context, the *groupWith* option is useless since an entity selection does not have a *locking identifier*.
* The same principle applies to entity selections stored inside properties of *object*. However, the command is optimized when ck shared is passed and a nested entity selection is *shareable*: the same entity selection reference is returned in the resulting object.
* Datastore, dataclass, and entity objects are not copiable. If **OB Copy** command is called with them, a Null value is returned

#### Example 1 

You want to duplicate an object containing simple values:

```4d
 var $Object : Object
 var $JsonString : Text
 
 ARRAY OBJECT($arraySel;0)
 ALL RECORDS([Product])
 While(Not(End selection([Product])))
    OB SET($Object;"id";[Product]ID_Product)
    OB SET($Object;"Product Name";[Product]Product_Name)
    OB SET($Object;"Price";[Product]Price)
    OB SET($Object;"Tax rate";[Product]Tax_rate)
    $ref_value:=OB Copy($Object) //direct copy
    APPEND TO ARRAY($arraySel;$ref_value)
  //the contents of $ref_value are identical to those of $Object
    NEXT RECORD([Product])
 End while
  //the contents of $ref_value
 $JsonString:=JSON Stringify array($arraySel)
```

#### Example 2 

You duplicate an object containing pointers (first syntax):

```4d
 var $ref : Object
 
 OB SET($ref;"name";->[Company]name) //object with pointers
 OB SET($ref;"country";->[Company]country)
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 
 ALL RECORDS([Company])
 
 While(Not(End selection([Company])))
    $ref_comp:=OB Copy($ref) // copy without evaluating pointers
  // $ref_comp={"name":"->[Company]name","country":"->[Company]Country"}
    $ref_comp2:=OB Copy($ref;True) //copy with evaluation of pointers
  // $ref_comp={"name":"4D SAS","country":"France"}
    APPEND TO ARRAY($sel;$ref_comp)
    APPEND TO ARRAY($sel2;$ref_comp2)
    NEXT RECORD([Company])
 End while
 
 $Object:=JSON Stringify array($sel)
 $Object2:=JSON Stringify array($sel2)
 
  // $Object = [{"name":"","country":""},{"name":"","country":""},...]
  // $Object2 = [{"name":"4D SAS","country":"France"},{"name":"4D, Inc","country":"USA"},{"name":"Catalan","country":"France"}...]
```

#### Example 3 

We want to copy the regular (non shared) *$person* object into the *$sharedObject* shared object. To do this, we must create a shared copy of the object (*$sharedObject*).

```4d
 var $person;$copy;$sharedObject : Object
 var $text : Text
 
 $text:=Document to text(Get 4D folder(Current resources folder)+"person.txt")
 $person:=JSON Parse($text) //$person is a standard object
 $sharedObject:=New shared object()
 $copy:=OB Copy($person;ck shared) //$copy is a shared object
 
  //So it can be put in $sharedObject
 Use($sharedObject)
    $sharedObject.person:=$copy
 End use
```

#### Example 4 

*$obj* contains a pointer ("name" property) on the current record "name" field.

```4d
 var $obj;$objWithPtr;$sharedObjWithPtr : Object
 $obj:=New object()
 
  //$obj is an object with a pointer
 OB SET($obj;"name";->[Persons]name)
 
 ALL RECORDS([Persons])
  //Now there is a current record on [Persons] table so [Persons]name is filled
  //
  // If we want to copy $obj as a standard object with evaluation of pointers
  // We do this:
 $objWithPtr:=OB Copy($obj;True)
  //
  // If we want to copy $obj as a shared object with evaluation of pointers
  // We do this:
 $sharedObjWithPtr:=OB Copy($obj;ck resolve pointers+ck shared)
```

#### Example 5 

We want to copy *$sharedObj* in *$sharedColl* but since they belong to different shared groups, a direct copy would result in an error. We must make a copy of *$sharedObj* and designate *$sharedColl* as shared group for the copy. 

```4d
 var $sharedObj;$objCopy : Object
 var $sharedColl : Collection
 
  //$sharedObj belongs to a shared group
 $sharedObj:=New shared object("lastname";"Smith";"address";New shared object("city";"New York"))
  //$sharedColl belongs to another shared group
 $sharedColl:=New shared collection(New shared object("lastname";"Brown"))
 
 $objCopy:=OB Copy($sharedObj;ck shared;$sharedColl)
  //$objCopy is now in the same shared group as $sharedColl
 
  //So $objCopy can be put in $sharedColl without error
 Use($sharedColl)
    $sharedColl.push($objCopy)
 End use
```

#### See also 

[OB Get](ob-get.md)  
*Shared objects and shared collections*  

#### Properties

|  |  |
| --- | --- |
| Command number | 1225 |
| Thread safe | &check; |


