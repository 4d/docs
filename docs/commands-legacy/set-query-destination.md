---
id: set-query-destination
title: SET QUERY DESTINATION
slug: /commands/set-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY DESTINATION.Syntax-->**SET QUERY DESTINATION** ( *destinationType* {; *destinationObject* {; *destinationPtr*}} )<!-- END REF-->
<!--REF #_command_.SET QUERY DESTINATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| destinationType | Integer | &#8594;  | 0 = current selection, 1 = set, 2 = named selection, 3 = variable |
| destinationObject | Text, Variable | &#8594;  | Name of the set, or Name of the named selection, or Variable |
| destinationPtr | Pointer | &#8594;  | Pointer to local variable if destinationType=3 |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET QUERY DESTINATION.Summary-->**SET QUERY DESTINATION** enables you to tell 4D where to put the result of any subsequent query for the current process.<!-- END REF-->

You specify the type of the destination in the parameter *destinationType*. 4D provides the following predefined constants, found in the "*Queries*" theme:

| Constant               | Type    | Value |
| ---------------------- | ------- | ----- |
| Into current selection | Integer | 0     |
| Into named selection   | Integer | 2     |
| Into set               | Integer | 1     |
| Into variable          | Integer | 3     |

You specify the destination of the query itself in the optional *destinationObject* parameter according to the following table:

| **destinationType**   | **destinationObject**                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| **parameter**         | **parameter**                                                                                      |
| 0 (current selection) | You omit the parameter                                                                             |
| 1 (set)               | You pass the name of a set (existing or to be created)                                             |
| 2 (named selection)   | You pass the name of a named selection (existing or to be created)                                 |
| 3 (variable)          | You pass a numeric variable (existing) or an empty string "" to use the *destinationPtr* parameter |

 With:  

```4d
 SET QUERY DESTINATION(Into current selection)
```

The records found by any subsequent query will end up in a new current selection for the table involved by the query.

 With:  

```4d
 SET QUERY DESTINATION(Into set;"mySet")
```

The records found by any subsequent query will end up in the set *"mySet"*. The current selection and the current record for the table involved by the query are left unchanged.

With:

```4d
 SET QUERY DESTINATION(Into named selection;"myNamedSel")
```

The records found by any subsequent query will end up in the named selection *"myNamedSel"*. The current selection and the current record for the table involved by the query are left unchanged.

**Notes:** 

* If the named selection does not exist beforehand, it will be created automatically at the end of the query.
* This command manages named selections like the [CUT NAMED SELECTION](cut-named-selection.md) command: only references are kept. Once the named selection is used, it no longer exists.
With:  

```4d
 SET QUERY DESTINATION(Into variable;$vlResult)
```

**Note:** With this syntax, the *$vlResult* variable must have been defined, otherwise an error is returned. 

Or:

```4d
 SET QUERY DESTINATION(Into variable;"";->$vlResult)
```

**Note:** This second syntax facilitates the joint use of the command with [GET QUERY DESTINATION](get-query-destination.md). 

The number of records found by any subsequent query will end up in the variable *$vlResult*. The current selection and the current record for the table involved by the query are left unchanged.

**Warning:** **SET QUERY DESTINATION** affects all subsequent queries made within the current process. REMEMBER to always counterbalance a call to **SET QUERY DESTINATION** (where *destinationType#0*) with a call to **SET QUERY DESTINATION**(0) in order to restore normal query mode.

**SET QUERY DESTINATION** changes the behavior of the query commands only:

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

On the other hand, **SET QUERY DESTINATION** does not affect other commands that may change the current selection of a table such as [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md) and so on.

#### Example 1 

You create a form that will display the records from a *\[Phone Book\]* table. You create a Tab Control named *asRolodex* (with the 26 letters of the alphabet) and a subform displaying the *\[Phone Book\]* records. Choosing one Tab from the Tab Control displays the records whose names start with the corresponding letter. 

In your application, the *\[Phone Book\]* table contains a set of quite static data, so you do not want to (or need to) perform a query each time you select a Tab. In this way, you can save precious database engine time. 

To do so, you can redirect your queries into named selections that you reuse as needed. You write the object method of the Tab Control *asRolodex* as follows:

```4d
  // asRolodex object method
 Case of
    :(FORM Event=On Load)
  // Before the form appears on the screen,
  // initialize the rolodex and an array of Booleans that
  // will tell us if a query for the corresponding letter
  // has been performed or not
       ARRAY STRING(1;asRolodex;26)
       ARRAY BOOLEAN(abQueryDone;26)
       For($vlElem;1;26)
          asRolodex{$vlElem}:=Char(64+$vlElem)
          abQueryDone{$vlElem}:=False
       End for
 
    :(FORM Event=On Clicked)
  // When a click on the Tab control occurs, check whether the corresponding query
  // has been performed or not
       If(Not(abQueryDone{asRolodex}))
  // If not, redirect the next query(ies) toward a named selection
          SET QUERY DESTINATION(Into named selection;"temp")
  // Perform the query
          QUERY([Phone Book];[Phone Book]Last name=asRolodex{asRolodex}+"@")
  // Restore normal query mode
          SET QUERY DESTINATION(Into current selection)
  // Use the records found
          USE NAMED SELECTION("temp")
          COPY NAMED SELECTION([Phone book];"Rolodex+asRolodex{asRolodex})
  // Next time we choose that letter, we won't perform the query again
          abQueryDone{asRolodex}:=True
       Else
  // Use the existing named selection for displaying the records corresponding to the chosen letter
          USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex}
       End if
 
    :(FORM Event=On Unload)
  // After the form disappeared from the screen
  // Clear the named selections we created
       For($vlElem;1;26)
          If(abQueryDone{$vlElem})
             CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElem})
          End if
       End for
  // Clear the two arrays we no longer need
       CLEAR VARIABLE(asRolodex)
       CLEAR VARIABLE(abQueryDone)
 End case
```

#### Example 2 

The Unique values project method in this example allows you to verify the uniqueness of the values for any number of fields in a table. The current record can be an existing or a newly created record.

```4d
  //Unique values project method
  //Unique values ( Pointer ; Pointer { ; Pointer... } ) -> Boolean
  //Unique values ( ->Table ; ->Field { ; ->Field2... } ) -> Yes or No
 
 var $0 : Boolean
 var ${1} : Pointer
 var $vlField;$vlNbFields;$vlFound;$vlCurrentRecord : Integer
 $vlNbFields:=Count parameters-1
 $vlCurrentRecord:=Record number($1->)
 If($vlNbFields>0)
    If($vlCurrentRecord#-1)
       If($vlCurrentRecord<0)
  //The current record is an unsaved new record (record number is -3);
  //therefore we can stop the query as soon as at least one record is found
          SET QUERY LIMIT(1)
       Else
  //The current record is an existing record;
  //therefore we can stop the query as soon as at least two records are found
          SET QUERY LIMIT(2)
       End if
  //The query will return its result in $vlFound
  //without changing the current record nor the current selection
       SET QUERY DESTINATION(Into variable;$vlFound)
  //Make the query according to the number of fields that are specified
       Case of
          :($vlNbFields=1)
             QUERY($1->;$2->=$2->)
          :($vlNbFields=2)
             QUERY($1->;$2->=$2->;*)
             QUERY($1->;&;$3->=$3->)
          Else
             QUERY($1->;$2->=$2->;*)
             For($vlField;2;$vlNbFields-1)
                QUERY($1->;&;${1+$vlField}->=${1+$vlField}->;*)
             End for
             QUERY($1->;&;${1+$vlNbFields}->=${1+$vlNbFields}->)
       End case
       SET QUERY DESTINATION(Into current selection) //Restore normal query mode
       SET QUERY LIMIT(0) //No longer limit queries
  //Process query result
       Case of
          :($vlFound=0)
             $0:=True //No duplicated values
          :($vlFound=1)
             If($vlCurrentRecord<0)
                $0:=False //Found an existing record with the same values as the unsaved new record
             Else
                $0:=True //No duplicated values; just found the very same record
             End if
          :($vlFound=2)
             $0:=False //Whatever the case is, the values are duplicated
       End case
    Else
       If(◊DebugOn) //Does not make sense; signal it if development version
          TRACE //WARNING! Unique values is called with NO current record
       End if
       $0:=False //Can't guarantee the result
    End if
 Else
    If(◊DebugOn) //Does not make sense; signal it if development version
       TRACE //WARNING! Unique values is called with NO query condition
    End if
    $0:=False //Can't guarantee the result
 End if
```

After this project method is implemented in your application, you can write:

```4d
  //...
 If(Unique values(->[Contacts];->[Contacts]Company);->[Contacts]Last name;->[Contacts]First name)
  //Do appropriate actions for that record which has unique values
 Else
    ALERT("There is already a Contact with this name for this Company.")
 End if
  //...
```

#### See also 

[GET QUERY DESTINATION](get-query-destination.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY LIMIT](set-query-limit.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 396 |
| Thread safe | &check; |
| Forbidden on the server ||


