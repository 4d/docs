---
id: query
title: QUERY
slug: /commands/query
displayed_sidebar: docs
---

<!--REF #_command_.QUERY.Syntax-->**QUERY** ( {*aTable* }{;}{ *queryArgument* {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records, or Default table, if omitted |
| queryArgument | Expression | &#8594;  | Query argument |
| * | Operator | &#8594;  | Continue query flag |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY.Summary-->**QUERY** looks for records matching the criteria specified in *queryArgument* and returns a selection of records for *aTable*.<!-- END REF-->changes the current selection of *aTable* for the current process and makes the first record of the new selection the current record.

If the *aTable* parameter is omitted, the command applies to the default table. If no default table has been set, an error occurs.

If you do not specify *queryArgument* or the *\** parameters, **QUERY** displays the Query editor for *aTable* (except when it is the last row of a multiple query, see example 2):

![](../assets/en/commands/pict1581957.en.png)

For more information about using the Query Editor, refer to the 4D Design Reference manual.

The user builds the query, then clicks the Query button or chooses Query in selection to perform the query. If the query is performed without interruption, the OK variable is set to 1\. If the user clicks Cancel, the **QUERY** terminates with no query actually performed, and sets the OK variable to *0* (zero). 

#### Example 1 

The following line displays the Query editor for the \[Products\] table:

```4d
 QUERY([Products])
```

#### Example 2 

The following line displays the Query editor for the default table (if it has been set)

```4d
 QUERY
```

If you specify the *queryArgument* parameter, the standard Query editor is not presented and the query is defined programmatically. For simple queries (search on only one field) you call QUERY once with *queryArgument*. For multiple queries (search on multiple fields or with multiple conditions), you call QUERY as many times as necessary with *queryArgument*, and you specify the optional \* parameter, except for the last QUERY call, which starts the actual query operation. The *queryArgument* parameter is described further in this section.

#### Example 3 

The following line looks for the \[People\] whose name starts with an “a”:

```4d
 QUERY([People];[People]Last name="a@")
```

#### Example 4 

The following line looks for the \[People\] whose name starts with “a” or “b”:

```4d
 QUERY([People];[People]Name="a@";*) // * indicates that there are further search criteria
 QUERY([People];|;[People]Name="b@") // No * ends the query definition and starts the actual query operation
```

**Note:** The interpretation of @ characters in queries can be modified via an option in the Preferences. For more information, please refer to the *Comparison Operators* section.

#### Specifying the Query Argument 

The *queryArgument* parameter uses the following syntax:

*{ conjunction ; } field comparator value*

 The conjunction is used to join QUERY calls when defining multiple queries. The conjunctions available are the same as those in the Query editor:

| **Conjunction** | **Symbol to use with QUERY** |
| --------------- | ---------------------------- |
| AND             | &                            |
| OR              | \|                           |
| Except          | #                            |

The *conjunction* is optional and not used for the first QUERY call of a multiple query, or if the query is a simple query. If you omit it within a multiply query, AND (&) is used by default.

 The *field* is the field to query. The *field* may belong to another table if it belongs to a One table related to *aTable* with an automatic or manual relation.  
  
The *comparator* is the comparison that is made between *field* and *value*. The *comparator* is one of the symbols shown here:

| **Comparison**           | **Symbol to use with QUERY** |
| ------------------------ | ---------------------------- |
| Equal to                 | \=                           |
| Not equal to             | #                            |
| Less than                | <                            |
| Greater than             | \>                           |
| Less than or equal to    | <=                           |
| Greater than or equal to | \>=                          |
| Contains keyword         | %                            |

**Note:** It is also possible to specify the comparison operator as an alphanumeric expression instead of a symbol. In this case, it is mandatory to use semi-colons in order to separate the items of the query string. This means that it is possible, for example, to create configurable query sequences by varying the comparison operator, or to build custom user query interfaces. Please refer to example 21.

The *value* is the data against which *field* will be compared. The value can be any expression that evaluates to the same data type as *field*. The value is evaluated once, at the beginning of the query. The value is not evaluated for each record. To query for a string contained in a string (a “contains” query), use the wildcard symbol (@) in *value* to isolate the string to be searched for as shown in this example "@Smith@". Note that in this case, the search only partially benefits from the index (compactness of data storage).

Searching by keywords is only available with Alpha or Text type fields. For more information about this type of query, please refer to the *Comparison Operators* section. 

Here are the rules for building multiple queries:

* The first query argument must not contain a conjunction.
* Each successive query argument can begin with a conjunction. If you omit it, the AND (&) operator is used by default.
* The first query and every other query, except the last, must use the \* parameter.
* To perform the query, do not specify the \* parameter in the last QUERY command. Alternatively, you may execute the QUERY command without any parameters other than the table (the Query editor is not shown; instead, the multiple query you just defined is performed).

**Note:** Each table maintains its own current built query. This means that you can create multiple built queries simultaneously, one for each table. You must use the *aTable* parameter or set the default table to specify which table to use.

No matter which way a query has been defined:

* If the actual query operation is going to take some time to be performed, 4D automatically displays a message containing a progress thermometer. These messages can be turned on and off by using the [MESSAGES ON](messages-on.md) and [MESSAGES OFF](messages-off.md) commands. If the progress thermometer is displayed, the user can click on the Stop button to interrupt the query. If the query is completed, OK is set to 1\. Otherwise, if the query is interrupted, OK is set to 0 (zero).
* If any indexed fields are specified, the query is optimized every time that it is possible (indexed fields are searched first) resulting in a query that takes the least amount of time possible. The command makes use of composite indexes for queries using the AND (&).

#### Example 5 

The following command finds the records for all the people named Smith:

```4d
 QUERY([People];[People]Last Name="Smith")
```

**Note:** If the Last Name field were indexed, the QUERY command would automatically use the index for a fast query.

**Reminder:** This query will find records like “Smith”, “smith”,“SMITH”, etc. To distinguish lowercase from uppercase, perform additional queries using the character codes.

#### Example 6 

The following example finds the records for all people named John Smith. The Last Name field is indexed. The First Name field is not indexed. 

```4d
 QUERY([People];[People]Last Name="smith";*) // Find every person named Smith
 QUERY([People]; & ;[People]First Name="john") // with John as first name
```

When the query is performed, it quickly does an indexed search on Last Name and reduces the selection of records to those of people named Smith. The query then sequentially searches on First Name in this selection of records.

#### Example 7 

The following example will automatically take advantage of a composite index of the *\[People\]First Name*+*\[People\]Last Name* fields (if it exists) to find the records for all people named John Smith.

```4d
 QUERY([People];[People]First Name="john";*) // Find every person named John
 QUERY([People];&;[People]Last Name="smith") // with Smith as last name
```

For more information, see *Composite indexes*.

#### Example 8 

The following example finds the records of people named Smith or Jones. The Last Name field is indexed.

```4d
 QUERY([People];[People]Last Name="smith";*) // Find every person named Smith…
 QUERY([People];|;[People]Last Name="jones") // ...or Jones
```

The QUERY command uses the Last Name index for both queries. The two queries are performed, and their results put into internal sets that are eventually combined using a union.

#### Example 9 

The following example finds the records for people who do not have a company name. It does this by finding entries with empty fields (the empty string).

```4d
 QUERY([People];[People]Company="") // Find every person with no company
```

#### Example 10 

The following example finds the record for every person whose last name is Smith and who works for a company based in New York. The second query uses a field from another table. This query can be done because the \[People\] table is related to the \[Company\] table with a many to one relation:

```4d
 QUERY([People];[People]Last Name="smith";*) // Find every person named Smith…
 QUERY([People];&;[Company]State="NY") // ... who works for a company based in NY
```

#### Example 11 

The following example finds the record for every person whose name falls between A (included) and M (included):

```4d
 QUERY([People];[People]Name<"n") // Find every person from A to M
```

#### Example 12 

The following example finds the records for all the people living in the San Francisco or Los Angeles areas (ZIP codes beginning with 94 or 90):

```4d
 QUERY([People];[People]ZIP Code ="94@";*) // Find every person in the SF…
 QUERY([People];|;[People]ZIP Code ="90@") // ...or Los Angeles areas
```

#### Example 13 

Searching by keyword: the following example searches the \[Products\] table for records where the Description field contains the word “easy”: 

```4d
 QUERY([Products];[Products]Description%"easy")
  // Find products whose description contains the keyword easy
```

#### Example 14 

The following example finds the record that matches the invoice reference entered in the request dialog box:

```4d
 vFind:=Request("Find invoice reference:") // Get an invoice reference from the user
 If(OK=1) // If the user pressed OK
    QUERY([Invoice];[Invoice]Ref=vFind) // Find the invoice reference that matches vFind
 End if
```

#### Example 15 

The following example finds the records for the invoices entered in 1996\. It does this by finding all records entered after 12/31/95 and before 1/1/97:

```4d
 QUERY([Invoice];[Invoice]In Date>!12/31/95!;*) // Find invoices after 12/31/95…
 QUERY([Invoice];&;[Invoice]In Date
```

#### Example 16 

The following example finds the record for each employee whose salary is between $10,000 and $50,000\. The query includes the employees who make $10,000, but excludes those who make $50,000:

```4d
 QUERY([Employee];[Employee]Salary >=10000;*) // Find employees who make between…
 QUERY([Employee];&;[Employee]Salary <50000) // ...$10,000 and $50,000
```

#### Example 17 

The following example finds the records for the employees in the marketing department who have salaries over $20,000\. The Salary field is queried first because it is indexed. Notice that the second query uses a field from another table. It can do this because the \[Dept\] table is related to the \[Employee\] table with an automatic many to one relation:

```4d
 QUERY([Employee];[Employee]Salary >20000;*) // Find employees with salaries over $20,000 and...
 QUERY([Employee];&;[Dept]Name="marketing") // ...who are in the marketing department
```

#### Example 18 

Given three tables related by Many-to-One relations: \[City\] -> \[Department\] -> \[Region\]. The following query finds all the regions with cities whose names begin with "Saint":

```4d
 QUERY([Region];[City]Name="Saint@") // Find all the regions with cities beginning with "Saint"
```

#### Example 19 

The following example queries for information that was entered into the variable *myVar*.

```4d
 QUERY([Laws];[Laws]Text =myVar) // Find all laws that match myVar
```

The query could have many different results, depending on the value of *myVar*. The query will also be performed differently. For example:

* If *myVar* equals *"Copyright@"*, the selection contains all laws with texts beginning with Copyright.
* If *myVar* equals *"@Copyright@"*, the selection contains all laws with texts containing at least one occurrence of Copyright.

#### Example 20 

The following example adds or does not add lines to a complex query depending on the value of the variables. This way, only valid criteria are taken into account for the query: 

```4d
 QUERY([Invoice];[Invoice]Paid=False;*)
 If($city#"") // if a city name has been specified
    QUERY([Invoice];[Invoice]Delivery_city=$city;*)
 End if
 If($zipcode#"") // If a zip code has been specified
    QUERY([Invoice];[Invoice]ZipCode=$zipcode;*)
 End if
 QUERY([Invoice]) // Execution of query on the criteria
```

#### Example 21 

This example illustrates the use of a comparison operator as an alphanumeric expression. The value of the comparison operator is specified using a pop-up menu placed in a custom query dialog box:

```4d
 var $oper : Text
 $oper:=_popup_operator{_popup_operator} //$oper equals for example "#" or "="
 If(OK=1)
    QUERY(Invoice];[Invoice]Amount;$oper;$amount)
 End if
```

#### Example 22 

Using picture keyword indexes can greatly increase the speed of your applications.

```4d
 QUERY([PICTURES];[PICTURES]Photos %"cats") // look for photos associated with the "cats" keyword
```

#### System variables and sets 

If the query is carried out correctly, the OK system variable is set to 1.  
The OK variable is set to 0 if:

* the user clicks on the **Cancel**/**Stop** button,
* in 'query and lock' mode (see the [SET QUERY AND LOCK](set-query-and-lock.md) command), the query has found at least one locked record. In this case as well, the LockedSet system set is updated.

#### See also 

[QUERY SELECTION](query-selection.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 277 |
| Thread safe | &check; |
| Modifies variables | OK |
| Changes current record ||
| Changes current selection ||


