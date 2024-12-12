---
id: compare-strings
title: Compare strings
slug: /commands/compare-strings
displayed_sidebar: docs
---

<!--REF #_command_.Compare strings.Syntax-->**Compare strings** ( *aString* ; *bString* {; *options*} ) : Integer<!-- END REF-->
<!--REF #_command_.Compare strings.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aText | Text | &#8594;  | String to compare |
| bText | Text | &#8594;  | String to compare |
| options | Integer | &#8594;  | Comparison rule(s) |
| Function result | Integer | &#8592; | Result of string comparison |

<!-- END REF-->

#### Description 

<!--REF #_command_.Compare strings.Summary-->The **Compare strings** command returns a negative, zero, or positive value depending on if *aString* is evaluated as lower, equal, or higher than *bString*.<!-- END REF--> 

In the *aString* parameter, pass a text value. 

In the *bString* parameter, pass a text value to be compared to *aString*. 

By default, **Compare strings** functions as if the "<" (less than) operator is used. (See *String operators*). This can be modified with the *options* parameter. You can pass one or a combination of the following constants from the *Strings* theme: 

| Constant                 | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sk case insensitive      | 2     | Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however "a" is not considered the same as "à" . By default, 4D string comparison is case insensitive. Can be combined with: sk char codes OR sk diacritic insensitive sk whole word ([Position](position.md) command only) This constant implies the use of the following constants (which can also be combined for improved readability): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| sk char codes            | 1     | Strings are compared according to character codes. Current data language settings are not taken into account during the comparison. Can be combined with: sk case insensitive Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| sk diacritic insensitive | 4     | Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "à". Can be combined with: sk case insensitive sk whole word ([Position](position.md) command only) This constant implies the use of the following constants (which can also be combined for improved readability): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| sk kana insensitive      | 8     | For Japanese language. Controls the distinction between Hiragana and Katakana syllables. From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in 4D is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア". The sk strict option performs a kana sensitive comparison. sk kana insensitive can be used to partially relax the rule to be kana insensitive. **Note:** The data language must be set to Japanese to use this option. For all other languages, the option is ignored and [Compare strings](compare-strings.md) will work as if sk strict was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect). Can be combined with: sk case insensitive sk diacritic insensitive This constant implies the use of the following constants (which can also be combined for improved readability): sk width insensitive sk strict                                                                                                                               |
| sk strict                | 0     | Strings are compared for exact matches according to the current data language. In most cases, capitalization and diacritical marks of letters are taken into account during the comparison. Can be combined with: sk case insensitive sk diacritic insensitive sk kana insensitive This constant implies the use of the following constant (which can also be combined for improved readability): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| sk width insensitive     | 16    | For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in [Unicode Standard Annex #11](http://www.unicode.org/reports/tr11/). From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in 4D. For example, "ｱ" is considered the same as "ア". The sk strict option performs a width sensitive comparison. **Notes:** The data language must be set to Japanese to use this option. For all other languages, the option is ignored and [Compare strings](compare-strings.md) will work as if sk strict was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect). This option is ignored by the [Position](position.md) function. Unicode width insensitive collation is asymmetric and impossible to locate by position or length. Can be combined with: sk case insensitive sk diacritic insensitive sk kana insensitive This constant implies the use of the following constant (which can also be combined for improved readability): sk strict |

For information about defining the data language, see the section in the *Design Reference*.

**Warning:** You cannot use the @ wildcard character with **Compare strings**. For example, if you pass *"abc@"* in *aString* or *bString* the command will actually evaluate the *"abc@"* string and not an "abc" string plus any character.

**Returned value**

The command returns the following longint values:

| **Value** | **Description**                   |
| --------- | --------------------------------- |
| \-1       | *aString* is lower than *bString* |
| 0         | *aString* is equal to *bString*   |
| 1         | *aString* is higher *bString*     |

#### Example 1 

You want to compare the following strings: 

```4d
 $string1:="alpha Bravo charlie Delta Echo Fox-Trot"
 $string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"
 
  //compare the strings using the character code
 $result:=Compare strings($string1;$string2;sk char codes)
  // $result = 1
 
  //compare the strings using the character code but ignoring any capitalization
 $result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)
  // $result = 0
```

#### Example 2 

The following examples illustrate the specific impact of options in **Japanese data language context**:

```4d
  //default is kana insensitive
 $result:=Compare strings("イロハ";"いろは") // equal
 $result:=Compare strings("イロハ";"いろは";sk strict) // not equal
 $result:=Compare strings("イロハ";"いろは";sk kana insensitive) // equal
```

```4d
  //default is case insensitive
 $result:=Compare strings("さつき";"さっき") // equal
 $result:=Compare strings("さつき";"さっき";sk strict) // not equal
 $result:=Compare strings("さつき";"さっき";sk case insensitive) // equal
```

```4d
  //default is diacritic sensitive when the data language is set to Japanese (different to all other languages)
 $result:=Compare strings("ete";"été") // equal in non-Japanese data language
 $result:=Compare strings("ete";"été") // not equal in Japanese data language
 $result:=Compare strings("うがい";"うかい") // not equal
 $result:=Compare strings("うがい";"うかい";sk strict) // not equal
 $result:=Compare strings("うがい";"うかい";sk diacritic insensitive) // equal
```

**Note:** The "Sorting order appropriate for searching" setting (see ) has an impact on the **Compare strings** command. In particular, the "Katakana-Hiragana Prolonged Sound Mark" or "長音記号" will be interpreted differently. The setting also has an impact on "Japanese Iteration Marks" such as "ゝ" or "ゞ". For example:

```4d
 $result:=Compare strings("いすず";"いすゞ") // equal if setting is disabled
 $result:=Compare strings("いすず";"いすゞ") // not equal if setting is enabled
 $result:=Compare strings("ラーメン";"ﾗｰﾒﾝ") // equal if setting is enabled
 $result:=Compare strings("ラーメン";&NBSP;"ﾗｰﾒﾝ") // not equal if setting is disabled
```

#### See also 

[Position](position.md)  