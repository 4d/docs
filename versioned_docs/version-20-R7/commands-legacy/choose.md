---
id: choose
title: Choose
slug: /commands/choose
displayed_sidebar: docs
---

<!--REF #_command_.Choose.Syntax-->**Choose** ( *criterion* ; *value* {; *value2* ; ... ; *valueN*} )  : Expression<!-- END REF-->
<!--REF #_command_.Choose.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| criterion | Boolean, Integer | &#8594;  | Value to test |
| value | Expression | &#8594;  | Possible values |
| Function result | Expression | &#8592; | Value of criterion |

<!-- END REF-->

#### Description 

<!--REF #_command_.Choose.Summary-->The **Choose** command returns one of the values passed in the *value1*, *value2*, etc.<!-- END REF--> parameters depending on the value of the *criterion* parameter.

You can pass either a Boolean or Number type in the *criterion* parameter:

* If *criterion* is a Boolean, **Choose** returns *value1* if the Boolean equals True and *value2* if the Boolean equals False. In this case, the command expects exactly three parameters: *criterion*, *value1* and *value2*.
* If *criterion* is an integer, **Choose** returns the value whose position corresponds to *criterion*. Be careful, numbering of the values begins with 0 (the position of *value1* is thus 0). In this case, the command expects at least two parameters: *criterion* and *value1*.

The command accepts all types of data for the *value* parameter(s), except for pictures, pointers, BLOBS and arrays. Nevertheless, you need to make sure that all the values passed are of the same type, 4D will not carry out any verification on this point.

If no *value* corresponds to *criterion*, **Choose** returns a “null” value with respect to the type of the *value* parameter (for example, 0 for a Number type, “” for a String type, and so on).

This command can be used to generate concise code that replaces tests of the “Case of” type that take up several lines (see example 2). It is also very useful in places where formulas can be executed: query editor, application of a formula, quick report editor, column calculated in a listbox, and so on.

**Warning:** The **Choose** command evaluates each *value* parameter before its execution. It means that:

* if *value* is a dynamic expression that causes side effects (update of a counter, modification of any kind), these effects will happen in all cases;
* if a value parameter is an invalid expression, **Choose** will return an error in all cases. For example, the following code will return an error:  
```4d  
 $res:=Choose(True;"red1";"blue"+2) //error  
```

#### Example 1 

Here is an example of the typical use of this command with a Boolean type criterion:

```4d
 vTitle:=Choose([Person]Masculine;"Mr";"Ms")
```

This code is strictly equivalent to:

```4d
 If([Person]Masculine)
    vTitle:="Mr"
 Else
    vTitle:="Ms"
 End if
```

#### Example 2 

Here is an example of the typical use of this command with a Number type criterion:

```4d
 vStatus:=Choose([Person]Status;"Single";"Married";"Widowed";"Divorced")
```

This code is strictly equivalent to:

```4d
 Case of
    :([Person]Status=0)
       vStatus:="Single"
    :([Person]Status=1)
       vStatus:="Married"
    :([Person]Status=2)
       vStatus:="Widowed"
    :([Person]Status=3)
       vStatus:="Divorced"
 End case
```


#### Properties

|  |  |
| --- | --- |
| Command number | 955 |
| Thread safe | &check; |


