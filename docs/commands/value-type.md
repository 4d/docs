---
id: value-type
title: Value type
displayed_sidebar: docs
---

<!--REF #_command_.Value type.Syntax-->**Value type** ( *expression* ) -> Function result<!-- END REF-->
<!--REF #_command_.Value type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| expression | Expression | -> | Expression whose resulting value to be tested |
| Function result | Longint | <- | Data type number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Value type.Summary-->The Value type command returns the type of the value resulting from the evaluation of the *expression* you passed as parameter.<!-- END REF-->

The command returns a numeric value that can be compared with one of the following constants of the [Field and Variable Types](/4Dv20R6/4D/20-R6/Field-and-Variable-Types.302-6958439.en.html) theme: 

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| \_o\_Is float | Longint | 35    |
| Is BLOB       | Longint | 30    |
| Is Boolean    | Longint | 6     |
| Is collection | Longint | 42    |
| Is date       | Longint | 4     |
| Is longint    | Longint | 9     |
| Is null       | Longint | 255   |
| Is object     | Longint | 38    |
| Is picture    | Longint | 3     |
| Is pointer    | Longint | 23    |
| Is real       | Longint | 1     |
| Is text       | Longint | 2     |
| Is time       | Longint | 11    |
| Is undefined  | Longint | 5     |
| Is variant    | Longint | 12    |
| Object array  | Longint | 39    |

This command is designed to return the type of a scalar expression, *i.e.* the value stored in or returned by the *expression* parameter. In particular, it can be applied to the following 4D expressions:

* object properties (*emp.name*),
* collection elements (*myCol\[5\]*).

**Note:** Numerical object properties are always considered real values:

```4d
 var $o : Object
 $o:=New object("value";42)
 $vType:=Value type($o.value) //$vType=Is real
```

**Value type** can be applied to any valid 4D expression, including fields, variables, and parameters. In this case, unlike the [Type](type.md) command, **Value type** returns the *internal* type of the value resulting from the evaluation of *expression*, and not its *declared* type. Since the 4D language converts some value types internally, the **Value type** result can differ from the declared type. For example, 4D internally converts the "[Integer 64 bits](/4Dv20R6/4D/20-R6/4D-field-types.300-7003399.en.html#105997)" type field values. This provides the following results:

```4d
 $vType1:=Type([myTable]Long64field) //$vType=Is integer 64 bits
 $vType2:=Value type([myTable]Long64field) //$vType=Is real (in interpreted mode)
```

Other differences are related to arrays (evaluation of an array returns the current element index) and compiled mode. The following table lists these differences:

| **Declared type**                                                                    | [Type](type.md) **result** | **Value type result (interpreted)** | **Value type result (compiled)** | **Comment**                                                                                 |
| ------------------------------------------------------------------------------------ | -------------------------- | ----------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| ARRAY TEXT($t;1)                                                                     | Text array                 | Is real                             | Is longint                       | $t contains the current element index, which is a number                                    |
| [Alpha](/4Dv20R6/4D/20-R6/4D-field-types.300-7003399.en.html#1373333) field          | Is alpha field             | Is text                             | Is text                          | 4D internally handles all strings as texts                                                  |
| [Integer](/4Dv20R6/4D/20-R6/4D-field-types.300-7003399.en.html#105987) field         | Is integer                 | Is real                             | Is longint                       | For optimization reasons, in interpreted mode all numeric values are considered real and... |
| [Long Integer](/4Dv20R6/4D/20-R6/4D-field-types.300-7003399.en.html#105992) field    | Is longint                 | Is real                             | Is longint                       | ... in compiled mode, all integer values are considered longint(\*)                         |
| [Integer 64 bits](/4Dv20R6/4D/20-R6/4D-field-types.300-7003399.en.html#105997) field | Is integer 64 bits         | Is real                             | Is longint                       |                                                                                             |

(\*)If you want to write a test for a numeric type value that is valid for both compiled and interpreted modes, you may consider using a code such as:

```4d
 If(Value type($myValue)=Is longint)|(Value type($myValue)=Is real)
```

**Compatibility Note:** Starting with 4D v16 R6, dates are stored in object properties either with date type or as text in ISO date format. For more information, please refer to the Dates inside objects selector of the [SET DATABASE PARAMETER](set-database-parameter.md) command.

#### Example 1 

You want to handle the various possible types of an object property value:

```4d
 Case of
    :(Value type($o.value)=Is real)
  //handle a numeric value
    :(Value type($o.value)=Is text)
  //handle a text
    :(Value type($o.value)=Is object)
  //handle a sub-object
       ...
 End case
```

#### Example 2 

You want to sum up all numeric values in a collection:

```4d
 var $col : Collection
 var $sum : Real
 $col:=New collection("Hello";20;"World2";15;50;Current date;True;10)
 For($i;0;$col.length-1) //-1 since collections start at 0
    If(Value type($col[$i])=Is real)
       $sum:=$sum+$col[$i]
    End if
 End for
 ALERT(String($sum)) //95
```

#### See also 

[OB Get type](ob-get-type.md)  
[Type](type.md)  