---
id: parse-formula
title: Parse formula
slug: /commands/parse-formula
displayed_sidebar: docs
---

<!--REF #_command_.Parse formula.Syntax-->**Parse formula** ( *formula* {; *options*}{; *errorMessage*} ) : Text<!-- END REF-->
<!--REF #_command_.Parse formula.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| formula | Text | &#8594;  | Plain text formula |
| options | Integer | &#8594;  | Instructions for input / output |
| errorMessage | Text | &#8592; | Error message (empty string if no error) |
| Function result | Text | &#8592; | Transformed formula (plain text) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Parse formula.Summary-->The **Parse formula** function analyzes the 4D *formula*, checks its syntax, and returns its normalized form.<!-- END REF--> This allows the formula to remain valid in the event that a 4D language or structure element (command, constant, table, field, or 4D Plugin) is renamed. 

**Parse formula** can be used to evaluate and translate formulas in the following manner: 

* "Real" table/field names can be converted to "virtual" structure\* names (custom names) or tokenized equivalents\*\*
* Tokenized table/field equivalents can be converted to virtual structure names or real table/field names
* Virtual structures can be converted to real table/field names or tokenized equivalents
* 4D language elements can be converted to tokenized 4D language equivalents
* Tokenized 4D language equivalents can be converted to 4D language elements

**\** Virtual structures are defined using the [SET TABLE TITLES](set-table-titles.md) and [SET FIELD TITLES](set-field-titles.md) commands (\* parameter required).* 

**\*\*** *Tokenized equivalents are 4D language and structure elements in plain text* **expressed with token syntax as shown below (* *see also Using tokens in formulas):* 

```RAW
[Table:1]Field:1+String:C10(1)
```

In *formula*, pass a formula in plain text. It can use real or virtual structure names, as well as tokenized equivalents. 

No matter the name types used in *formula*, by default **Parse formula** returns the actual 4D language or structure element names without text tokens.

The optional *options* parameter allows you to specify how *formula* is expressed and/or returned using the following constants from the *Formulas* theme. You can combine constants to designate both the input and output format of the returned formula.

  
| Constant                           | Value | Comment                                                                                    |
| ---------------------------------- | ----- | ------------------------------------------------------------------------------------------ |
| Formula in with virtual structure  | 1     | Formula contains custom (virtual) names. By default, returned formula contains real names. |
| Formula out with virtual structure | 2     | Returned formula must contain custom (virtual) names.                                      |
| Formula out with tokens            | 4     | Returned formula must contain text tokens (e.g. :Cxx).                                     |

  
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

#### See also 

[Formula from string](../commands/formula-from-string.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
*Using tokens in formulas*  