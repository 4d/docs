---
id: get-text-keywords
title: GET TEXT KEYWORDS
slug: /commands/get-text-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET TEXT KEYWORDS.Syntax-->**GET TEXT KEYWORDS** ( *text* ; *arrKeywords* {; *} )<!-- END REF-->
<!--REF #_command_.GET TEXT KEYWORDS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| text | Text | &#8594;  | Original text |
| arrKeywords | Text array | &#8592; | Array containing keywords |
| * | Operator | &#8594;  | If passed = unique words |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET TEXT KEYWORDS.Summary-->The **GET TEXT KEYWORDS** command splits all the *text* into individual words and creates an item in the *arrKeywords* text array for each word.<!-- END REF-->

4D uses the same algorithm to break up text into individual words that it does to build a *Keywords index*. It is based on the ICU library. For more information about how text is separated into words, refer to the following address: <http://userguide.icu-project.org/boundaryanalysis>. 

**Note:** At the request of users, we introduced an exception for French and Italian: the apostrophe (') followed by either a vowel or the letter "h" is considered as a word separator. For example, the strings "L'homme" or "l'arbre" are split into "L’"+"homme" and "l'"+"arbre".

The algorithm used differs according to whether or not the **Consider only non-alphanumeric chars for keywords** option is checked in the [Database settings](https://developer.4d.com/docs/settings/database#text-comparison).

In the *text* parameter, pass the original text to be split into words. This can be styled text, in which case style tags are ignored. 

For the *arrKeywords* parameter, the command fills this text array with the words extracted from the text. 

If you pass the optional *\** parameter, the command only stores each different keyword once in *arrKeywords*. By default, if this parameter is omitted, all the words extracted from the text are stored in the array, even when they appear more than once.

This command gives you a simple way to search records containing large amounts of text with the assurance of using the same keywords as 4D. For example, imagine you have a text containing "10,000 Jean-Pierre BC45". If this text is split into the keywords "10,000" + "Jean" + "Pierre" + "BC45", then the array contains 4 elements. Then it is easy to loop through this array by programming to find records containing one or more of these keywords using the % operator (see examples).

#### Example 1 

In a form with a search area, users can enter one or more word(s). When a user validates this form, we look for records where the *MyField* field contains at least one of the words entered by the user. 

```4d
  // vSearch is the variable of the search area in the form
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
  //* in case a user enters the same word more than once
 CREATE SET([MyTable];"Totalfound")
 $n:=Size of array(arrSearch)
 For($i;1;$n)
    QUERY([MyTable];[MyTable]MyField % arrSearch{$i})
    CREATE SET(([MyTable];"found")
    UNION("Totalfound";"found";"Totalfound")
 End for
 USE SET("Totalfound")
```

#### Example 2 

In the same form as before, we look for records where the *MyField* field contains all the words entered by the user.

```4d
  // vSearch is the variable of the search area in the form
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
 $n:=Size of array(arrSearch)
 QUERY([MyTable];[MyTable]MyField >=0;*)
  // initializing search = all records
 For($i;1;$n)
    QUERY([MyTable];&;[MyTable]MyField % arrSearch{$i};*)
  // add criterion
 End for
 QUERY([MyTable]) //search
```

#### Example 3 

To count words in a text:

```4d
 GET TEXT KEYWORDS(vText;arrWords) // all words
 $n:=Size of array(arrWords)
 GET TEXT KEYWORDS(vText;arrWords;*) // different words
 $m:=Size of array(arrWords)
 ALERT("This text contains "+String($n)+" separate words among "+String($m))
```

#### See also 

[DISTINCT VALUES](distinct-values.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1141 |
| Thread safe | &check; |
| Forbidden on the server ||


