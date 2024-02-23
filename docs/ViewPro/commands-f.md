---
id: commands-f
title: F
---

> **Warning**: The commands on this page are not thread-safe.


### VP Find

<!-- REF #_method_.VP Find.Syntax -->
**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|searchValue |Text|->|Search value|
|searchCondition |Object|->|Object containing search condition(s)|
|replaceValue  |Text|->|Replacement value|
|Result|Object|<-|Range object|<!-- END REF -->

#### Description

The `VP Find` command <!-- REF #_method_.VP Find.Summary -->searches the *rangeObj* for the *searchValue*<!-- END REF -->. Optional parameters can be used to refine the search and/or replace any results found.  

In the *rangeObj* parameter, pass an object containing a range to search.  

The *searchValue* parameter lets you pass the text to search for within the *rangeObj*.  

You can pass the optional *searchCondition* parameter to specify how the search is performed. The following properties are supported:  

|Property| Type| Description|
|---|---|---
|afterColumn|Integer|The number of the column just before the starting column of the search. If the *rangeObj* is a combined range, the column number given must be from the first range. Default value: -1 (beginning of the *rangeObj*)|
|afterRow|Integer|The number of the row just before the starting row of the search. If the *rangeObj* is a combined range, the row number given must be from the first range. Default value: -1 (beginning of the *rangeObj*) |
|all|Boolean |<li>True - All cells in *rangeObj* corresponding to *searchValue* are returned</li><li>False - (default value) Only the first cell in *rangeObj* corresponding to *searchValue* is returned</li>|
|flags| Integer|<table><tr><td>`vk find flag exact match`</td><td>The entire content of the cell must completely match the search value</td></tr><tr><td>`vk find flag ignore case`</td><td>Capital and lower-case letters are considered the same. Ex: "a" is the same as "A".</td></tr><tr><td>`vk find flag none`</td><td>no search flags are considered (default)</td></tr><tr><td>`vk find flag use wild cards`</td><td>Wildcard characters (\*,?) can be used in the search string. Wildcard characters can be used in any string comparison to match any number of characters:<li>\* for zero or multiple characters (for example, searching for "bl*"  can find "bl", "black", or "blob")</li><li>? for a single character (for example, searching for "h?t" can find "hot", or "hit"</li></td></tr></table>These flags can be combined. For example: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code>|
|order| Integer |<table><tr><td>`vk find order by columns`</td><td>The search is performed by columns. Each row of a column is searched before the search continues to the next column.</td></tr><tr><td>`vk find order by rows`</td><td>The search is performed by rows. Each column of a row is searched before the search continues to the next row (default)</td></tr></table> |
|target|Integer|<table><tr><td>`vk find target formula`</td><td>The search is performed in the cell formula</td></tr><tr><td>`vk find target tag`</td><td>The search is performed in the cell tag</td></tr><tr><td>`vk find target text`</td><td>The search is performed in the cell text (default)</td></tr></table><p>These flags can be combined. For example:<code>$search.target:=vk find target formula+vk find target text</code></p>|

In the optional *replaceValue* parameter, you can pass text to take the place of any instance of the text in *searchValue* found in the *rangeObj*.

#### Returned Object

The function returns a range object describing each search value that was found or replaced. An empty range object is returned if no results are found.

#### Example 1

To find the first cell containing the word "Total":

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```

#### Example 2

To find "Total" and replace it with "Grand Total":  

```4d
var $range;$condition;$result : Object
 
$range:=VP All("ViewProArea")
 
$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Search entire document
$condition.flags:=vk find flag exact match
 
  // Replace the cells containing only 'Total' in the current sheet with "Grand Total"


$result:=VP Find($range;"Total";$condition;"Grand Total")
 
  // Check for empty range object 
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```


### VP Find table

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R7|Added
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

[VP Get table range](#vp-get-table-range)




### VP FLUSH COMMANDS

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->
**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|<!-- END REF -->

#### Description

The `VP FLUSH COMMANDS` command <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->immediately executes stored commands and clears the command buffer<!-- END REF -->.  

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In order to increase performance and reduce the number of requests sent, the 4D View Pro commands called by the developer are stored in a command buffer. When called, `VP FLUSH COMMANDS` executes the commands as a batch when leaving the method and empties the contents of the command buffer.

#### Example

You want to trace the execution of the commands and empty the command buffer:

```4d

 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")
 
 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```

### VP Font to object

<!-- REF #_method_.VP Font to object.Syntax -->
**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->


<!-- REF #_method_.VP Font to object.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|font  |Text|->|Font shorthand string|  
|Result  |Object|<-|Font object|
<!-- END REF -->


#### Description

The `VP Font to object` utility command <!-- REF #_method_.VP Font to object.Summary -->returns an object from a font shorthand string<!-- END REF -->. This object can then be used to set or get font property settings via object notation.

In the *font* parameter, pass a font shorthand string to specify the different properties of a font (e.g., "12 pt Arial"). You can learn more about font shorthand strings [in this page](https://www.w3schools.com/cssref/pr_font_font.asp) for example.

The returned object contains defined font attributes as properties. For more information about the available properties, see the [VP Object to font](#vp-object-to-font) command.

#### Example 1

This code:

```4d
$font:=VP Font to object("16pt arial")
```

will return the following $font object:

```4d
{

family:arial
size:16pt
}
```

#### Example 2  

See example for [`VP Object to font`](#vp-object-to-font).

#### See also

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)
