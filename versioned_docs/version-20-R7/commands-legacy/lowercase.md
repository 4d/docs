---
id: lowercase
title: Lowercase
slug: /commands/lowercase
displayed_sidebar: docs
---

<!--REF #_command_.Lowercase.Syntax-->**Lowercase** ( *aString* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Lowercase.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aText | Text | &#8594;  | String to convert to lowercase |
| * | Operator | &#8594;  | If passed: keep accents |
| Function result | Text | &#8592; | String in lowercase |

<!-- END REF-->

#### Description 

<!--REF #_command_.Lowercase.Summary-->**Lowercase** takes *aString* and returns the string with all alphabetic characters in lowercase.<!-- END REF-->

The optional *\** parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out. 

#### Example 1 

The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".

```4d
  //Caps project method
  //Caps ( String ) -> String
  //Caps ( Any text or string ) -> Capitalized text
 
 $0:=Lowercase($1)
 If(Length($0)>0)
    $0[[1]]:=Uppercase($0[[1]])
 End if
```

#### Example 2 

This example compares the results obtained according to whether or not the *\** parameter has been passed:

```4d
 $thestring:=Lowercase("DÉJÀ VU") // $thestring is "deja vu"
 $thestring:=Lowercase("DÉJÀ VU";*) // $thestring is "déjà vu"
```

#### See also 

[Uppercase](uppercase.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 14 |
| Thread safe | &check; |
| Forbidden on the server ||


