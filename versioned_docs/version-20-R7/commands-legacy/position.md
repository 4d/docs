---
id: position
title: Position
slug: /commands/position
displayed_sidebar: docs
---

<!--REF #_command_.Position.Syntax-->**Position** ( *find* ; *aString* {; *start* {; *lengthFound*}}{; *} ) -> Function result <br/>
**Position** ( *find* ; *aString* ; *start* ; *lengthFound* ; *options* ) -> Function result<!-- END REF-->
<!--REF #_command_.Position.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| find | Text | &#8594;  | String to find |
| aText | Text | &#8594;  | String in which to search |
| start | Integer | &#8594;  | Position in string where search will start |
| lengthFound | Integer | &#8592; | Length of string found |
| * | Operator | &#8594;  | If passed: evaluation based on character codes |
| Function result | Integer | &#8592; | Position of first occurrence |
| Position ( find ; aString ; start ; lengthFound ; options ) -> Function result |
| Parameter | Type | Description |
| find | Text | &#8594;  | String to find |
| aText | Text | &#8594;  | String in which to search |
| start | Integer | &#8594;  | Position in string where search will start |
| lengthFound | Integer | &#8594;  | Length of string found |
| options | Integer | &#8594;  | Search condition(s) |
| Function result | Integer | &#8592; | Position of first occurrence |

<!-- END REF-->

#### Description 

<!--REF #_command_.Position.Summary-->**Position** returns the position of the first occurrence of *find* in *aString*.<!-- END REF--> 

If *aString* does not contain *find*, it returns a zero (0). 

If **Position** locates an occurrence of *find*, it returns the position of the first character of the occurrence in *aString*.

If you ask for the position of an empty string within an empty string, **Position** returns zero (0). 

By default, the search begins at the first character of *aString*. The *start* parameter can be used to specify the character where the search will begin in *aString*. 

The *lengthFound* parameter, returns the length of the string actually found by the search. This parameter is necessary to be able to correctly manage letters that can be written using one or more characters (e.g.: æ and ae, ß and ss, etc.).   
If the *\** parameter is passed (see below), these letters are not considered as equivalent (æ # ae); in this mode, *lengthFound* is always equal to the length of *find* (if an occurrence is found). 

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters into account (Unicode specification). Ignorable characters include all characters in unicode *C0 Control* subset (U+0000 to U+001F, ascii character control set) except printable ones (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF and U+0013 CR). 

To modify this functioning, you can pass: 

* (**first syntax - \* parameter**) the asterisk *\** as the last parameter. In this case, comparisons will be based on character codes. You must pass the *\** parameter:  
   * If you want to take special characters into account, used for example as delimiters (**Char**(1), etc.),  
   * If the evaluation of characters must be case sensitive and take accented characters into account (a#A, a#à and so on).  
   Note that in this mode, the evaluation does not handle variations in the way words are written.  
         
   **Note:** In certain cases, using the *\** parameter can significantly accelerate the execution of the command.
* (**second syntax - options parameter**) one or a combination of the following constants from the *Strings* theme:  
    
| Constant                 | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| ------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| sk case insensitive      | 2     | Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however "a" is not considered the same as "à" . By default, 4D string comparison is case insensitive. Can be combined with: sk char codes OR sk diacritic insensitive sk whole word ([Position](position.md) command only) This constant implies the use of the following constants (which can also be combined for improved readability): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| sk char codes            | 1     | Strings are compared according to character codes. Current data language settings are not taken into account during the comparison. Can be combined with: sk case insensitive Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |  
| sk diacritic insensitive | 4     | Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "à". Can be combined with: sk case insensitive sk whole word ([Position](position.md) command only) This constant implies the use of the following constants (which can also be combined for improved readability): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| sk kana insensitive      | 8     | For Japanese language. Controls the distinction between Hiragana and Katakana syllables. From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in 4D is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア". The sk strict option performs a kana sensitive comparison. sk kana insensitive can be used to partially relax the rule to be kana insensitive. **Note:** The data language must be set to Japanese to use this option. For all other languages, the option is ignored and [Compare strings](compare-strings.md) will work as if sk strict was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect). Can be combined with: sk case insensitive sk diacritic insensitive This constant implies the use of the following constants (which can also be combined for improved readability): sk width insensitive sk strict                                                                                                                               |  
| sk strict                | 0     | Strings are compared for exact matches according to the current data language. In most cases, capitalization and diacritical marks of letters are taken into account during the comparison. Can be combined with: sk case insensitive sk diacritic insensitive sk kana insensitive This constant implies the use of the following constant (which can also be combined for improved readability): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |  
| sk whole word            | 32    | Strings are compared according to the current data language. Only strings that are complete words are considered. Matching strings within other strings are not considered. For example, "where" is not considered when found within "somewhere". Can be combined with: sk case insensitive ([Position](position.md) command only) sk diacritic insensitive ([Position](position.md) command only)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |  
| sk width insensitive     | 16    | For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in [Unicode Standard Annex #11](http://www.unicode.org/reports/tr11/). From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in 4D. For example, "ｱ" is considered the same as "ア". The sk strict option performs a width sensitive comparison. **Notes:** The data language must be set to Japanese to use this option. For all other languages, the option is ignored and [Compare strings](compare-strings.md) will work as if sk strict was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect). This option is ignored by the [Position](position.md) function. Unicode width insensitive collation is asymmetric and impossible to locate by position or length. Can be combined with: sk case insensitive sk diacritic insensitive sk kana insensitive This constant implies the use of the following constant (which can also be combined for improved readability): sk strict |

For information about defining the data language, see the section in the *Design Reference*.

**Warning:** You cannot use the @ wildcard character with **Position**. For example, if you pass *"abc@"* in *find*, the command will actually look for *"abc@"* and not for "abc" plus any character.

#### Example 1 

This example illustrates the use of **Position**. The results, described in the comments, are assigned to the variable *vlResult*.

```4d
 vlResult:=Position("ll";"Willow") // vlResult gets 3
 vlResult:=Position(vtText1;vtText2) // Returns first occurrence of vtText1 in vtText2
 vlResult:=Position("day";"Today is the first day";1) // vlResult gets 3
 vlResult:=Position("day";"Today is the first day";4) // vlResult gets 20
 vlResult:=Position("DAY";"Today is the first day";1;*) // vlResult gets 0
 
 vlResult:=Position("œ";"Bœuf";1;$length) // vlResult =2, $length = 1
```

#### Example 2 

In the following example, the *lengthFound* parameter can be used to search for all the occurrences of "aegis" in a text, regardless of how it is written:

```4d
 $start:=1
 Repeat
    vlResult:=Position("aegis";$text;$start;$lengthfound)
    $start:=$start+$lengthfound
 Until(vlResult=0)
```

#### Example 3 

In the following example, you want to find all instances of a string and replace it:

```4d
 var $lengthFound : Integer
 
 $string:="Hello Joelle et joel!"
 $find:="joel"
 $replace:="Joël"
 $option:=sk case insensitive+sk diacritic insensitive
 
 $p:=0
 Repeat
    $p:=Position($find;$string;$p+1;$lengthFound;$option)
    If($p>0)
       $string:=Substring($string;1;$p-1)+$replace+Substring($string;$p+$lengthFound)
    End if
 Until($p<=0) //result: $string -> Hello Joëlle and Joël!
```

#### See also 

[Compare strings](compare-strings.md)  
[Substring](substring.md)  