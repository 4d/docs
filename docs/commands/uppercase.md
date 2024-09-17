---
id: uppercase
title: Uppercase
displayed_sidebar: docs
---

<!--REF #_command_.Uppercase.Syntax-->**Uppercase** ( *aString* {; *} ) -> Function result<!-- END REF-->
<!--REF #_command_.Uppercase.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aString | String | -> | String to convert to uppercase |
| * | Operator | -> | If passed: keep accents |
| Function result | String | <- | String in uppercase |

<!-- END REF-->

#### Description 

<!--REF #_command_.Uppercase.Summary-->Uppercase takes *aString* and returns the string with all alphabetic characters in uppercase.<!-- END REF-->

The optional *\** parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented uppercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out. 

#### Example 1 

This example compares the results obtained according to whether or not the *\** parameter has been passed:

```4d
 $thestring:=Uppercase("hélène") // $thestring is "HELENE"
 $thestring:=Uppercase("hélène";*) // $thestring is "HÉLÈNE"
```

#### Example 2 

See the example for [Lowercase](lowercase.md).

#### See also 

[Lowercase](lowercase.md)  