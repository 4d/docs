---
id: formulaClass
title: Formulas
---

## Overview

4D's language includes a unique *tokenization* system for all object names of the language that are used in the code (constants, commands, tables, fields and keywords). 

By default, the token mechanism is not implemented automatically in 4D formulas (as well as contexts where 4D code is expressed as raw text, see above). As a result, for named elements contains in expressions, 4D offers a special syntax you can use to reference the tokens directly: you just need to add a specific suffix after the element name to indicate its type (command, field, etc.), followed by its reference. The **token syntax** is detailed in this table:

|Element|	Example (standard syntax)|	Suffix	|Example (token syntax)	|Comments|
|---|---|---|---|---|
|4D Command|	String(a)|	:Cxx|	String:C10(a)|	xx is the command number|
|Table	|[Employees]|	:xx	|[Employees:1]|	xx is the table number|
|Field|	[Employees]Name|	:xx|	[Employees:1]Name:2|	xx is the field number|
|4D Plugin	|PV PRINT(area)|	:Pxx:yy	|PV PRINT:P13000:229(area)|	xx is the plug-in ID and yy is the index of the command|

>Uppercase letters (C, P) must be used in the suffixes; otherwise, they will not be interpreted correctly.

When you use this syntax, you guarantee that your formulas will be interpreted correctly even in the case of renaming or when the database is executed in a different language.

>Constants are also tokenized in the language however in formulas you can just pass their value in order make them independent of the context. 

This syntax is accepted in all 4D formulas (or 4D expressions) regardless of the calling context:

*	4D formulas executed using the Formula editor or using commands such as `EXECUTE FORMULA`, `APPLY TO SELECTION`, `QUERY BY FORMULA`, `LISTBOX INSERT COLUMN FORMULA`, etc.
*	expressions inserted in rich text areas (see `ST INSERT EXPRESSION` and **Supported tags**),
*	expressions calculated in transformation tags (see **4D HTML Tags**),
*	expressions inserted in plug-in areas,
*	expressions inserted in 4D Write Pro areas.

Where to find the element numbers:  

*	**4D commands**<br>  
Command numbers can be found in this Language Reference manual ("Properties" area) as well as on the Commands page of the Explorer.
*	**Tables and fields**<br>  
Table and field numbers can be obtained using the Table and Field commands. They are also displayed in the Inspector palette of the Structure editor.
*	**4D plug-in commands** <br>
To know what the tokens are for 4D plug-in commands, the trick is to enter the desired code in the Method editor and then restart 4D after disabling the plug-in (for example, by moving its folder). This means that only tokens will be displayed in the Method editor, and you can then copy the ones you need.

## Formula Object

Formula objects are handled with the following commands:

*	[Formula](#formula) 
*	[Formula from string](#formula-from-string) 
*	[Parse formula](#parse-formula)


## Summary


||
|---|
|[<!-- INCLUDE #formulaClass.apply().Syntax -->](#apply-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #formulaClass.apply().Summary -->|
|[<!-- INCLUDE #formulaClass.call().Syntax -->](#call-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #formulaClass.call().Summary --> |
|[<!-- INCLUDE #formulaClass.source.Syntax -->](#source)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #formulaClass.source.Summary --> |


---

<!-- REF formulaClass.Formula.Desc -->
## Formula 

Number: 1597

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R6|Renamed|
|v17 R3|Added|
</details>

<!-- REF formulaClass.Formula.Syntax -->
**Formula** ( *expression* ) -> object<!-- END REF -->

<!-- REF formulaClass.Formula.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaExp|expression|->|Formula to be returned as object|
|Result|object|<-|Native object encapsulating the formula|
<!-- END REF -->


#### Description
The `Formula` command <!-- REF formulaClass.Formula.Summary -->creates a formula object based upon the *formulaExp* expression<!-- END REF -->. *formulaExp* can be as simple as a single value or complex, such as a project method with parameters.

Having a formula as an object allows it to be passed as a parameter (calculated attribute) to commands or methods or to be executed from various components without needing to declare them as "shared by components and host database". When called, the formula object is evaluated within the context of the database or component that created it.

The returned formula can be called with the:

*	`.call( )` or `.apply( )` methods, or the
*	object notation syntax (see **Encapsulating methods in objects**).

```4d
 C_OBJECT($f)
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)
 
  //three different ways to call the formula
 $f.call($o) //returns 3
 $f.apply($o) //returns 3
 $o.myFormula() //returns 3
```

You can specify the object on which the formula is executed, as seen below in Example 5. The properties of the object can then be accessed via the `This` command.

If *formulaExp* uses local variables, their values are copied and stored in the returned formula object when it is created. When executed, the formula uses these copied values rather than the current value of the local variables. Note that using arrays as local variables is not supported.

The object created by `Formula` can be saved, for example, in a database field or in a blob document.

#### Passing parameters  

You can pass parameters to the formula using the standard $1, $2...,$n mechanism. For example, you can write:

```4d
 C_OBJECT($f)
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2019" (for example)
```

For more convenience, parameters can be omitted in the formula object initialization when the formula is made of a single project method. They can just be passed when the formula is called. For example:

```4d
 C_OBJECT($f)
 $f:=Formula(myMethod)
  //Writing Formula(myMethod($1;$2) is not necessary
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call() //returns "How are you?"
 
  //myMethod
 C_TEXT($0;$1;$2)
 If(Count parameters=2)
    $0:=$1+" "+$2
 Else
    $0:="How are you?"
 End if
```

Parameters are received in $1, $2... within the method, in the order they are specified in the call.

>Do not confuse the $n parameters used in the formula and $n parameters received in the method called in the formula.


#### Example 1

A simple formula:

```4d
 C_OBJECT($f)
 $f:=Formula(1+2)
 
 C_OBJECT($o)
 $o:=New object("f";$f)
 
 $result:=$o.f() // returns 3
```

#### Example 2

A formula using local variables:

```4d
$value:=10
 $o:=New object("f";Formula($value))
 $value:=20
 
 $result:=$o.f() // returns 10
```


#### Example 3

A simple formula using parameters:

```4d
$o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //returns 30
```


#### Example 4

A formula using a project method with parameters:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```


#### Example 5

Using `This`:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```

#### Example 6

Calling a formula using object notation:

```4d
C_OBJECT($calc;$feta;$robot)
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)
 
 $calc:=Formula(This.total:=This.price*This.quantity)
 
  //sets the formula to object properties
 $feta.calc:=$calc
 $robot.calc:=$calc
 
  //call the formula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```


<!-- END REF -->

---

<!-- REF formulaClass.Formula from string.Desc -->
## Formula from string 

Number: 1601

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R6|Renamed|
|v17 R3|Added|
</details>

<!-- REF formulaClass.Formula from string.Syntax -->
**Formula from string**( *formulaString* ) -> object<!-- END REF -->

<!-- REF formulaClass.Formula from string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaExp|expression|->|Formula to be returned as object|
|Result|object|<-|Native object encapsulating the formula|
<!-- END REF -->


#### Description
The `Formula from string` command <!-- REF formulaClass.Formula from string.Summary -->creates a formula object based upon the *formulaString*<!-- END REF -->.  *formulaString* can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to `Formula`, except that it handles a text-based formula. In most cases, it is recommended to use the `Formula` command. `Formula from string` should only be used when the original formula was expressed as text (e.g., stored externally in a JSON file). In this context, using token syntax is highly advised (see the [Overview](#overview) section and the Parse formula command).

>Because local variable contents can not be accessed by name in compiled mode, they can not be used in *formulaString*. An attempt to access a local variable with `Formula from string` will result in an error (-10737).


#### Example

The following code:

```4d
C_TEXT($textFormula)
 C_OBJECT($f)
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

will create a dialog accepting a formula in text format,


![](/assets/en/API/formulaDialog.png)


and execute the formula:


![](/assets/en/API/formulaAlert.png)



<!-- END REF -->

---

<!-- REF formulaClass.Parse formula.Desc -->
## Parse formula  

Number: 1576

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R2|Added|

</details>

<!-- REF formulaClass.Parse formula.Syntax -->
**Parse formula**( *formula* { ; *options* } { ; *errorMessage* } ) -> text<!-- END REF -->

<!-- REF formulaClass.Parse formula.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|text|->|Plain text formula|
|options|longint|->|Instructions for input / output|
|errorMessage|text|->|Error message (empty string if no error)|
|Result|text|<-|Transformed formula (plain text)|
<!-- END REF -->


#### Description
The `Parse formula ` command <!-- REF formulaClass.Parse formula.Summary -->analyzes the 4D formula, checks its syntax, and returns its normalized form<!-- END REF -->. This allows the formula to remain valid in the event that a 4D language or structure element (command, constant, table, field, or 4D Plugin) is renamed.

`Parse formula` can be used to evaluate and translate formulas in the following manner:

*	"Real" table/field names can be converted to "virtual" structure* names (custom names) or tokenized equivalents\**
*	Tokenized table/field equivalents can be converted to virtual structure names or real table/field names
*	Virtual structures can be converted to real table/field names or tokenized equivalents
*	4D language elements can be converted to tokenized 4D language equivalents
*	Tokenized 4D language equivalents can be converted to 4D language elements

\* *Virtual structures are defined using the `SET TABLE TITLES` and `SET FIELD TITLES` commands (* parameter required).*

\** *Tokenized equivalents are 4D language and structure elements in plain text expressed with token syntax as shown below:*

```4d
[Table:1]Field:1+String:C10(1)
```

In *formula*, pass a formula in plain text. It can use real or virtual structure names, as well as tokenized equivalents.

No matter the name types used in *formula*, by default `Parse formula` returns the actual 4D language or structure element names without text tokens.

The optional *options* parameter allows you to specify how *formula* is expressed and/or returned using the following constants from the **Formulas** theme. You can combine constants to designate both the input and output format of the returned formula.

|Constant|	Value|	Comment|
|---|---|---|
|Formula in with virtual structure|	1	|Formula contains custom (virtual) names. By default, returned formula contains real names.|
|Formula out with virtual structure|	2|	Returned formula must contain custom (virtual) names.|
|Formula out with tokens|	4|	Returned formula must contain text tokens (e.g. :Cxx). |

The optional *errorMessage* parameter will receive an error message if there is a syntax error in *formula*. If there is no error, an empty string will be returned.


#### Example 1

```4d
 ARRAY TEXT($t1;1)
 ARRAY LONGINT($t2;1)
 $t1{1}:="Virtual table"
 $t2{1}:=1
 SET TABLE TITLES($t1;$t2;*)
 
 ARRAY TEXT($tf1;1)
 ARRAY LONGINT($tf2;1)
 $tf1{1}:="Virtual field"
 $tf2{1}:=2
 SET FIELD TITLES([Table_1];$tf1;$tf2;*)
 
  //Virtual structure to table and field name equivalent
 $parsedFormula:=Parse formula("[Virtual table]Virtual field";Formula in with virtual structure;$errorMessage)
  //return [Table_1]Field_2
 
  //Table and field name to virtual structure equivalent
 $parsedFormula:=Parse formula("[Table_1]Field_2";Formula out with virtual structure;$errorMessage)
  //return [Virtual table]Virtual field
 
  //Table and field name to the tokenized form equivalent
 $parsedFormula:=Parse formula("String([Table_1]Field_2)";Formula out with tokens;$errorMessage)
  //return String:C10([Table_1:1]Field_2:2)
```


#### Example 2

```4d
 //ask the user to type their favorite formula
 $formula:=""
 EDIT FORMULA([Table_1];$formula)
 
  //save user's formula for later use
 CREATE RECORD([users_preferences])
 $persistentFormula:=Parse formula($formula;Formula out with tokens)
 [users_preferences]formula:=$persistentFormula
 SAVE RECORD([users_preferences])
 
  //later: execute the previously saved formula
 CREATE RECORD([Table_1])
 EXECUTE FORMULA([users_preferences]formula)
```

<!-- END REF -->

---

<!-- REF formulaClass.apply().Desc -->
## .apply( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R3|Added|
</details>

<!-- REF #formulaClass.apply().Syntax -->
**.apply**( { *thisObj* { ; *formulaParams* } } ) -> mixed<!-- END REF -->

<!-- REF #formulaClass.apply().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|thisObj|object|->|Object to be returned by the This command in the formula|
|formulaParams |collection|->|Collection of values to be passed as $1...$n when formula is executed|
|Result|mixed|<-|Value from formula execution|
<!-- END REF -->


#### Description
The `.apply( )` function <!-- REF #formulaClass.apply().Summary -->executes the formula object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional *formulaParams* parameter.

Note that `.apply( )` is similar to `.call( )` except that parameters are passed as a collection. This can be useful for passing calculated results.


#### Example 1

```4d
$f:=Formula($1+$2+$3)
 
 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // returns 60
``` 


#### Example 2

```4d
C_OBJECT($calc;$feta;$robot)
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)
 
 $calc:=Formula(This.total:=This.price*This.quantity)
 
 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
``` 

<!-- END REF -->

---

<!-- REF formulaClass.call().Desc -->
## .call( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R3|Added|
</details>

<!-- REF #formulaClass.call().Syntax -->
**.call**( { *thisObj* { ; *params* } { ; *params2* ; ... ; *paramsN* } } ) -> mixed <!-- END REF -->

<!-- REF #formulaClass.call().Params -->
|Parameter|ype||Description|
|thisObj|object|->|Object to be returned by the This command in the formula|
|params |mixed|->|Collection of values to be passed as $1...$n when formula is executed|
|Result|mixed|<-|Value from formula execution|
<!-- END REF -->


#### Description
The `.call( )` function <!-- REF #formulaClass.call().Summary -->executes the formula object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass values to be used as *$1...$n* parameters in the formula using the optional *params* parameter(s).

Note that `.call( )` is similar to `.apply( )` except that parameters are passed directly.

#### Example 1

```4d
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
``` 

#### Example 2

To stop the database web server:

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // returns 100
``` 

<!-- END REF -->


---

<!-- REF formulaClass.source.Desc -->
## .source

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF #formulaClass.source.Syntax -->
**.source** -> text <!-- END REF -->


#### Description
The `.source` property <!-- REF #formulaClass.source.Summary -->contains the source expression of the formula as text<!-- END REF -->. 

This property is **read-only**. 

#### Example

```4d
 C_OBJECT($of)
 C_TEXT($tf)
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
``` 


<!-- END REF -->