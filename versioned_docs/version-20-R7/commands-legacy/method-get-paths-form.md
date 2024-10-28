---
id: method-get-paths-form
title: METHOD GET PATHS FORM
slug: /commands/method-get-paths-form
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS FORM.Syntax-->**METHOD GET PATHS FORM** ( {*aTable* ;} *arrPaths* {; *filter*}{; *stamp*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS FORM.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table reference |
| arrPaths | Text array | &#8592; | Array of method paths and names |
| filter | Text | &#8594;  | Name filter |
| stamp | Real | &#8594;  | Minimum value of stamp |
| &#8592; | New current value |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.METHOD GET PATHS FORM.Summary-->The **METHOD GET PATHS FORM** command fills the *arrPaths* array with the internal pathnames and names of the methods for all form objects as well as form methods.<!-- END REF--> Form methods are labeled {formMethod}.

Only objects containing code are listed. For example, buttons that are only associated with a standard action are not returned. 

If you pass the *aTable* parameter, the command returns the objects of the table forms associated with this table. If you omit this parameter, the command returns objects of the database project forms. 

You can limit this list of forms by passing a comparison string in the *filter* parameter: in this case, only forms whose names match the filter are returned. You can use the @ character in order to specify "starts with", "ends with" or "contains" type filters. If you pass an empty string, the *filter* parameter is ignored.

The *stamp* parameter lets you only get the paths of methods modified after a specific point in time. As part of a version control system, this means that you can update only methods that were modified since the last backup.   
Here is how it works: 4D maintains a counter of method modifications. Each time a method is created or saved again, this counter is incremented and its current value is stored in the internal stamp of the method.   
If you pass the *stamp* parameter, the command only returns methods whose stamp is greater than or equal to the value passed in this parameter. Moreover, the command returns, in *stamp*, the new current value of the modification counter, i.e. the highest value. If you save this value, you can pass it the next time this command is called so that you only get new or modified methods.

If the command is executed from a component, it returns by default the paths of the component methods. If you pass the *\** parameter, the array contains the paths of the methods of the host database.

**Note:** The command does not list objects of inherited forms or of subforms. 

If the command detects a duplicated method name, the error -9802 is generated ("Object path not unique"). In this case, it is advisable to use the MSC in order to verify the database structure. 

#### Example 1 

List of all objects of the "input" form for the \[Employees\] table. Note that table form methods (and project form methods) are processed as objects belonging to the form:

```4d
 METHOD GET PATHS FORM([Employees];arrPaths;"input")
  // Contents of arrPaths (for example)
  // [tableForm]/input/{formMethod} -> Form method
  // [tableForm]/input/bOK -> Object method
  // [tableForm]/input/bCancel -> Object method
```

#### Example 2 

List of objects of the "dial" project form:

```4d
 METHOD GET PATHS FORM(arrPaths;"dial")
```

#### Example 3 

List of all objects of the "input" form for the \[Employees\] table from a component:

```4d
 METHOD GET PATHS FORM(([Employees];arrPaths;"input@";*)
```

#### See also 

[FORM GET NAMES](form-get-names.md)  