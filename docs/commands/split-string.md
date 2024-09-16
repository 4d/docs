---
id: split-string
title: Split string
displayed_sidebar: docs
---

<!--REF #_command_.Split string.Syntax-->**Split string** ( *stringToSplit* ; *separator* {; *options*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Split string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| stringToSplit | Text | -> | String value |
| separator | Text | -> | String at which stringToSplit splits. If empty string (""), each character of stringToSplit is a substring |
| options | Longint | -> | Option(s) regarding empty strings and spaces |
| Function result | Collection | <- | Collection of substrings |

<!-- END REF-->

#### Description 

<!--REF #_command_.Split string.Summary-->The **Split string** command returns a collection of strings, created by splitting *stringToSplit* into substrings at the boundaries specified by the *separator* parameter.<!-- END REF--> The substrings in the returned collection do not include *separator* itself.

If no *separator* is found in *stringToSplit*, **Split string** returns a collection containing a single element, *stringToSplit*. If you passed an empty string in *separator*, **Split string** returns a collection of each character of *stringToSplit*.

In the *options* parameter, you can pass one or a combination of the following constants from the [Strings](/4Dv20R6/4D/20-R6/Strings.302-6958511.en.html) theme:

| Constant                | Type    | Value | Comment                                                               |
| ----------------------- | ------- | ----- | --------------------------------------------------------------------- |
| sk ignore empty strings | Longint | 1     | Remove empty strings from the resulting collection (they are ignored) |
| sk trim spaces          | Longint | 2     | Trim space characters at the beginning and end of substrings          |

#### Example 1 

```4d
 C_TEXT($vt)

 C_COLLECTION($col)

 $col:=New collection
 

 $vt:="John;Doe;120 jefferson st.;Riverside;; NJ; 08075"

 $col:=Split string($vt;";") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]

 $col:=Split string($vt;";";sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]

 $col:=Split string($vt;";";sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
```

#### Example 2 

The *separator* parameter can be a multiple-character string: 

```4d
 C_TEXT($vt)

 C_COLLECTION($col)

 $vt:="Name<tab>Smith<tab>age<tab>40"

 $col:=Split string($vt;"<tab>")

  //$col=["Name","Smith","age","40"]
```

#### See also 
[TEXT TO ARRAY](text-to-array.md)  