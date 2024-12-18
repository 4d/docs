---
id: character-code
title: Character code
slug: /commands/character-code
displayed_sidebar: docs
---

<!--REF #_command_.Character code.Syntax-->**Character code** ( *character* ) : Integer<!-- END REF-->
<!--REF #_command_.Character code.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| character | Text | &#8594;  | Character for which you want to get the code |
| Function result | Integer | &#8592; | Character code |

<!-- END REF-->

#### Description 

<!--REF #_command_.Character code.Summary-->The **Character code** command returns the Unicode UTF-16 code (included between 1 and 65535) of *character*.<!-- END REF-->

If there is more than one character in the string, **Character code** returns only the code of the first character.

The [Char](char.md) function is the counterpart of **Character code**. It returns the character that the UTF-16 code represents. 

#### Example 1 

Uppercase and lowercase characters are considered equal within a comparison. You can use Character code to differentiate between uppercase and lowercase characters. Thus, this line returns True:

```4d
 ("A"="a")
```

On the other hand, this line returns False:

```4d
 (Character code("A")=Character code("a"))
```

#### Example 2 

This example returns the code of the first character of the string *"ABC"*:

```4d
 GetCode:=Character code("ABC") // GetCode gets 65, the character code of A
```

#### Example 3 

The following example tests for carriage returns and tabs:

```4d
 For($vlChar;1;Length(vtText))
    Case of
       :(vtText[[$vlChar]]=Char(Carriage return))
  // Do something
       :(vtText[[$vlChar]]=Char(Tab))
  // Do something else
       :(...)
  // ...
    End case
 End for
```

When executed multiple times on large texts, this test will run faster when compiled if it is written this way:

```4d
 For($vlChar;1;Length(vtText))
    $vlCode:=Character code(vtText[[$vlChar]])
    Case of
       :($vlCode=Carriage return)
  // Do something
       :($vlCode=Tab)
  // Do something else
       :(...)
  // ...
    End case
 End for
```

The second piece of code runs faster for two reasons: it does only one character reference by iteration and uses LongInt comparisons instead of string comparisons to test for carriage returns and tabs. Use this technique when working with common codes such as CR and TAB.

#### See also 

[Char](char.md)  
*Character Reference Symbols*  

#### Properties

|  |  |
| --- | --- |
| Command number | 91 |
| Thread safe | &check; |


