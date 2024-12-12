---
id: query-by-attribute
title: QUERY BY ATTRIBUTE
slug: /commands/query-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY ATTRIBUTE.Syntax-->**QUERY BY ATTRIBUTE** ( {*aTable*}{;}{*conjOp* ;} *objectField* ; *attributePath* ; *queryOp* ; *value* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY BY ATTRIBUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records, or Default table if omitted |
| conjOp | * | &#8594;  | Conjunction operator to use to join multiple queries (if any) |
| objectField | Field | &#8594;  | Object field to query attributes |
| attributePath | Text | &#8594;  | Name or path of attribute |
| queryOp | Text, * | &#8594;  | Query operator (comparator) |
| value | Text, Number, Date, Time | &#8594;  | Value to compare |
| * | Operator | &#8594;  | Continue query flag |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY BY ATTRIBUTE.Summary-->**QUERY BY ATTRIBUTE** looks for records matching the query string defined using the *objectField*, *attributePath*, *queryOp* and *value* parameters, and returns a selection of records for *aTable*.<!-- END REF-->

**QUERY BY ATTRIBUTE** changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record. If the *aTable* parameter is omitted, the command applies to the default table. If no default table has been set, an error occurs.

The optional *conjOp* parameter is used to join **QUERY BY ATTRIBUTE** calls when defining multiple queries. The conjunction operators available are the same as the ones for the [QUERY](query.md) command:

| **Conjunction** | **Symbol to use with QUERY BY ATTRIBUTE** |
| --------------- | ----------------------------------------- |
| AND             | &                                         |
| OR              | \|                                        |
| Except          | #                                         |

The *conjOp* parameter is not used for the first **QUERY BY ATTRIBUTE** call of a multiple query, or if the query is a simple query. If you omit it within a multiple query, the AND (&) operator is used by default.

 In *objectField*, pass the Object field whose attribute(s) you want to query. It can come from another table if it is table 1 of a table linked to *aTable* by an automatic or manual link. **QUERY BY ATTRIBUTE** supports 4D Write Pro custom attributes when documents are stored in Object fields. For more information about this point, please refer to the *Storing 4D Write Pro documents in 4D Object fields* section.

In *attributePath*, pass the path of the attribute whose values you want to compare for each record, for example "children.girls.age". If you pass a single name, for example "place", you designate the corresponding attribute found at the first level of the object field. If an attribute "x" is an array, **QUERY BY ATTRIBUTE** will search records which contain an attribute "x" in which at least one element matches the criteria. To search in array attributes, it is necessary to indicate to the **QUERY BY ATTRIBUTE** command that attribute "x" is an array by appending "\[\]" to its name in *attributePath* (see example 3). You can add a letter in the brackets (i.e. "\[b\]") to link arguments (see the *Linking array attribute query arguments* paragraph below).

**Notes:** 

* Keep in mind that attribute names are case-sensitive: you can have different "MyAtt" and "myAtt" attribute names in the same record.
* Attribute names are trimmed to eliminate extra spaces. For example, " my first attribute .my second attribute " is interpreted as "my first attribute.my second attribute".
* You cannot query on attributes whose name contains special characters such as "." or "\[ \]", because they will be incorrectly evaluated as tokens in the query string. For more information, please refer to the *Object property identifiers* paragraph.

The *queryOp* parameter is the comparison operator that is applied between *objectField* and *value*. You can pass one of the symbols shown here:

| **Comparison**           | **Symbol to use with** **QUERY BY ATTRIBUTE** |
| ------------------------ | --------------------------------------------- |
| Equal to                 | \=                                            |
| Not equal to(\*)         | #                                             |
| Less than                | <                                             |
| Greater than             | \>                                            |
| Less than or equal to    | <=                                            |
| Greater than or equal to | \>=                                           |

(\*) When used with array elements, the # operator means "does not contain any". 

**Note:** It is also possible to specify the comparison operator as a text expression instead of a symbol. See the [QUERY](query.md) command description for more information. 

*value* is the data against which the *attributePath* will be compared. The value can be any expression that evaluates to the same data type as *attributePath*. The value is evaluated once, at the beginning of the query. The value is not evaluated for each record. To query for a string contained within a string (a "contains" query), use the wildcard symbol (@) in *value* to isolate the string to be searched for as shown in this example: "@Smith@". Note that in this case, the search only partially benefits from the index (compactness of data storage).

Here is the structure of a query by attribute:

```4d
 QUERY BY ATTRIBUTE([Table] ;[Table]ObjectField ;"attribute1.attribute2";=;value)
```

**Note:** An implicit criteria for all operators (except #) is that the Object field contains an attribute. However, for the # operator, it can be undefined (see below). 

##### The # operator and Null values 

When querying by attribute using the **#** operator, you must take into account cases where an attribute may not be present in a record. For example, consider the following statement:

```4d
 QUERY BY ATTRIBUTE([People];[People]Animals;"dog.name";#;"Rex")
```

This query will return records for people who have a dog whose name is not "Rex", but will NOT return records for people who do not have a dog, or who have a dog without a name, *i.e.* records for which the "dog.name" property value is **null**. The underlying concept is: The query engine cannot compare the uncomparable, *i.e.* missing or nonexistent data. Thus, records that cannot be compared to the search criteria are excluded from the query. 

To use a more generic example:

```4d
 QUERY BY ATTRIBUTE([Table];[Table]ObjectField;"attribute1.attribute2";#;value)
```

This query will return all records for which *\[Table\]ObjectField* contains an object with an *attribute1* attribute, which is an object containing an *attribute2* attribute whose value is not *value.* It will NOT return records where:

* the object field does not contain *attribute1*
* the object field does not contain **attribute1.attribute*2
* the object field contains **attribute1.attribute*2=null

This principle also applies to array attributes. For example, the query will return records for people who have one or several address(es), but none of them is in Paris.

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";#;"paris")
```

**Note:** To specifically obtain records where the attribute is undefined, you can use an empty object (see example 2). Note however that searching for NULL values in array elements is not supported.

##### Building multiple queries 

Here are the rules for building multiple queries by attribute:

* The first query argument must not contain a conjunction.
* Each successive query argument can begin with a conjunction. If you omit it, the AND (&) operator is used by default.
* All queries, except the final query, must use the *\** parameter.
* **QUERY BY ATTRIBUTE** can be mixed with [QUERY](query.md) commands (see example).
* To perform the query, do not specify the *\** parameter in the last **QUERY BY ATTRIBUTE** command. Alternatively, you can execute the [QUERY](query.md) command without any parameters other than the table.

**Note:** Each table maintains its own currently-built query. This means that you can create multiple queries simultaneously, one for each table. 

No matter which way a query has been defined:

* If the actual query operation is going to take some time to be performed, 4D automatically displays a message containing a progress meter. These messages can be turned on and off by using the [MESSAGES ON](messages-on.md) and [MESSAGES OFF](messages-off.md)  commands. If a progress meter is displayed, the user can click on the **Stop** button to interrupt the query. If the query is completed, OK is set to 1\. Otherwise, if the query is interrupted, OK is set to 0 (zero).
* If any indexed object fields are specified, the query is optimized every time that it is possible (indexed fields are searched first) resulting in a query that takes the least amount of time possible.

##### Date values in the object 

Dates are stored in objects according to database settings; by default, the time zone is taken into account (see the JSON use local time selector in the [SET DATABASE PARAMETER](set-database-parameter.md) command). 

```json
!1973-05-22! -> "1973-05-21T23:00:00.000Z"
```

This setting is also taken into account during queries, so you do not have to worry about it if you always use your database at the same place and if settings are the same on all machines that access the data. In this case, the following query will correctly return records whose Birthday attribute equals !1973-05-22! (saved as "1973-05-21T23:00:00.00Z"):

```4d
 QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1973-05-22!)
```

If you do not want to use the GMT settings, you can modify these settings using the following instruction:

```4d
 SET DATABASE PARAMETER(JSON use local time;0)
```

Keep in mind that the scope of this setting is the process only. If you execute this instruction, then October 1st, 1965 will be stored "1965-10-01T00:00:00.000Z" but you will need to set the same parameter before launching your queries:

```4d
 SET DATABASE PARAMETER(JSON use local time;0)
 QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1976-11-27!)
```

##### Using the virtual length property 

You can use the virtual "length" property with this command. This property is available automatically for all array type attributes and returns the size of the array, i.e. the number of elements it contains. It can be used in the context of executing the **QUERY BY ATTRIBUTE** command (see example 4).

##### Linking array attribute query arguments 

(New in 4D v16 R2) When searching in array attributes with multiple query arguments joined by the AND operator, you may want to make sure that only records containing elements that match all arguments are returned, and not records where arguments can be found in different elements. To do this, you need to *link* query arguments to array elements, so that only single elements containing linked arguments are found. 

For example, with the following two records:

*Record 1:*  
\[People\]name: "martin"  
\[People\]OB\_Field:   
 "locations" : \[ {  
 "kind":"home",  
 "city":"paris"   
 } \]

*Record 2:*  
\[People\]name: "smith"  
\[People\]OB\_Field:   
 "locations" : \[ {  
 "kind":"home",  
 "city":"lyon"   
 } , {  
 "kind":"office",  
 "city":"paris"   
 } \]

You want to find people with a "home" location kind in the city "paris". If you write: 

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";=;"paris";*)
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].kind";=;"home")
```

... the query will return "martin" and "smith" because "smith" has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even though they are different elements.

 If you want to only get records where matching arguments are in the same element, you need to **link arguments**. To link query arguments:

* Add a letter between the \[\] in the first path to link and repeat the same letter in all linked arguments. For example: **locations\[a\].city** and **locations\[a\].kind**. You can use any letter of the Latin alphabet (not case sensitive).
* To add different linked criteria in the same query, use another letter (see examples below). You can create up to 26 combinations of criteria in a single query.

With the above records, if you write:

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].city";=;"paris";*)
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].kind";=;"home")
```

... the query will only return "martin" because it has a "locations" element whose "kind" is "home" and whose "city" is "paris". The query will not return "smith" because the values "home" and "paris" are not in the same array element. See the examples below for more illustrations of this feature. 

**Note:** Using a linked syntax in a single query line will give the same results as a standard query, except when using the "#" operator: in this case, invalid results may be returned. This specific syntax is therefore not supported. 

#### Example 1 

In this example, the "age" attribute is either a string or an integer and we want to find people whose age is between 20 and 29\. The first two lines query the attribute as an integer (>=20 and < 30) and the last ones query the field as a string (starts with "2" but is different from "2".)

```4d
 QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>=;20;*)
 QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30;*)
 QUERY BY ATTRIBUTE([Persons];|;[Persons]OB_Info;"age";=;"2@";*)
 QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";#;"2") //no final * to launch execution
```

#### Example 2 

The **QUERY BY ATTRIBUTE** command can be used to find records where certain attributes are defined (or are not defined). To do this, you have to use an empty object.

```4d
  //Find records where e-mail is defined in the object field
 var $undefined : Object
 QUERY BY ATTRIBUTE([Persons];[Persons]Info;"e-mail";#;$undefined)
```

```4d
  //Find records where zip code is NOT defined in the object field
 var $undefined : Object
 QUERY BY ATTRIBUTE([Persons];[Persons]Info;"zip code";=;$undefined)
```

**Note:** This specific syntax is not supported with array type attributes. Searching for NULL values in array elements will give invalid results.

#### Example 3 

You want to search a field containing array attributes. With the following two records:

*Record1:*  
\[People\]name: "martin"  
\[People\]OB\_Field:  
 "locations" : \[ {  
 "kind":"office",  
 "city":"paris"   
 } \]

*Record2:* 
\[People\]name: "smith"  
\[People\]OB\_Field:  
 "locations" : \[ {  
 "kind":"home",  
 "city":"lyon"   
 } , {  
 "kind":"office",  
 "city":"paris"   
 } \]

 ... **QUERY BY ATTRIBUTE** will find people with a location in "paris" using this statement:

```4d
  //flag the array attribute with "[]" syntax
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";=;"paris")
  //selects "martin" and "smith"
```

**Note:** If you defined several criteria on the same array attribute, the matched criteria will not necessarily apply to the same array element. In the following example, the query returns "smith" because it has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even if it's not the same element:

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].kind";=;"home";*)
 QUERY BY ATTRIBUTE([People];&;[People]OB_Field;"locations[].city";=;"paris")
  //selects "smith"
```

#### Example 4 

This example illustrates the use of the virtual "length" property. Your database has a \[Customer\]full\_Data object field with the following data:

![](../assets/en/commands/pict2994114.en.png)

You want to get the records for any customers who have two or more children. To do this, you can write:

```4d
 QUERY BY ATTRIBUTE([Customer];[Customer]full_Data;"Children.length";>=;2)
```

#### Example 5 

These examples illustrate the various available combinations of linked query arguments on arrays. Assuming you have the following records:

*Record1:*  
\[Person\]Name: "Sam"  
\[Person\]ObjectField:   
 "Children": \[ {  
 "Name": "Harry",  
 "Age": "15",  
 "Toy": \[ {  
 "Name": "Car",  
 "Color": "Blue"   
 }, {  
 "Name": "Teddy Bear",  
 "Color": "Brown"   
 } \]  
 }, {  
 "Name": "Betty",  
 "Age": "9",  
 "Toy": \[ {  
 "Name": "Car",  
 "Color": "Green"   
 }, {  
 "Name": "Puzzle",  
 "Color": "Blue"   
 } \]  
 } \]

*Record2:*  
\[Person\]Name: "Louis"  
\[Person\]ObjectField:  
 "Children": \[ {  
 "Name": "Harry",  
 "Age": "15",  
 "Toy": \[ {  
 "Name": "Water gun",  
 "Color": "Blue"   
 } \]  
 }, {  
 "Name": "Betty",  
 "Age": "3",  
 "Toy": \[ {  
 "Name": "Car",  
 "Color": "Blue"   
 }, {  
 "Name": "Puzzle",  
 "Color": "Green"   
 } \]  
 } \]

*Record3:*  
\[Person\]Name: "Victor"  
\[Person\]ObjectField:   
 "Children": \[ {  
 "Name": "Harry",  
 "Age": "9",  
 "Toy": \[ {  
 "Name": "Doll",  
 "Color": "Pink"   
 }, {  
 "Name": "Puzzle",  
 "Color": "Blue"   
 } \]  
 }, {  
 "Name": "Betty",  
 "Age": "15",  
 "Toy": \[ {  
 "Name": "Water gun",  
 "Color": "Blue"   
 } \]  
 } \]

To find people who have a child named "Betty" who is 15 years old:

```4d
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15")
  //returns "Victor"
 
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15")
  //returns "Sam", "Louis" and "Victor"
```

To find people who have a child named "Betty", 15 years old, and a child named "Harry" who is 9 years old:

```4d
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[b].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[b].Age";=;"9")
  //returns "Victor"
 
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"9")
  //returns "Sam" and "Victor"
```

To find people who have a 15 year-old child named "Harry" who has a "blue car" toy (searching in an array of arrays):

```4d
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Name";=;"Car";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Color";=;"Blue")
  //returns "Sam"
 
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Name";=;"Car";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Color";=;"Blue")
  //returns "Sam" and "Louis"
```

#### System variables and sets 

If the query is carried out correctly, the OK system variable is set to 1.  
The OK variable is set to 0 if:

* the user clicks on the **Cancel**/**Stop** button,
* in 'query and lock' mode (see the [SET QUERY AND LOCK](set-query-and-lock.md) command), the query has found at least one locked record. In this case as well, the LockedSet system set is updated.

#### See also 

  
[QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)  
*Structure of 4D language objects*  