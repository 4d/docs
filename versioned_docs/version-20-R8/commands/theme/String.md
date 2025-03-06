---
id: String
title: String
---
||
|---|
|[**Change string** ( *source* ; *newChars* ; *where* ) : Text](../../commands-legacy/change-string)<br/>Change string changes a group of characters in *source* and returns the resulting string.|
|[**Char** ( *charCode* ) : Text](../../commands-legacy/char)<br/>The **Char** command returns the character whose code is *charCode*.|
|[**Character code** ( *character* ) : Integer](../../commands-legacy/character-code)<br/>The **Character code** command returns the Unicode UTF-16 code (included between 1 and 65535) of *character*.|
|[**Compare strings** ( *aString* ; *bString* {; *options*} ) : Integer](../../commands-legacy/compare-strings)<br/>The **Compare strings** command returns a negative, zero, or positive value depending on if *aString* is evaluated as lower, equal, or higher than *bString*.|
|[**CONVERT FROM TEXT** ( *4Dtext* ; *charSet* ; *convertedBLOB* )](../../commands-legacy/convert-from-text)<br/>The CONVERT FROM TEXT command can be used to convert a text expressed in the current character set of 4D to a text expressed in another character set.|
|[**Convert to text** ( *blob* ; *charSet* ) : Text](../../commands-legacy/convert-to-text)<br/>The **Convert to text** command converts the text contained in the *blob* parameter and returns it in text expressed in the character set of 4D.|
|[**Delete string** ( *source* ; *where* ; *numChars* ) : Text](../../commands-legacy/delete-string)<br/>Delete string deletes *numChars* from *source*, starting at *where*, and returns the resulting string.|
|[**GET TEXT KEYWORDS** ( *text* ; *arrKeywords* {; *} )](../../commands-legacy/get-text-keywords)<br/>The **GET TEXT KEYWORDS** command splits all the *text* into individual words and creates an item in the *arrKeywords* text array for each word.|
|[**Insert string** ( *source* ; *what* ; *where* ) : Text](../../commands-legacy/insert-string)<br/>**Insert string** inserts a string into *source* and returns the resulting string.|
|[**Length** ( *string* ) : Integer](../../commands-legacy/length)<br/>**Length** is used to find the length of *aString*.|
|[**Localized string** ( *resName* ) : Text](../../commands-legacy/localized-string)<br/>The **Localized string** command returns the value of the string designated by the *resName* attribute for the current language.|
|[**Lowercase** ( *aString* {; *} ) : Text](../../commands-legacy/lowercase)<br/>**Lowercase** takes *aString* and returns the string with all alphabetic characters in lowercase.|
|[**Match regex** ( *pattern* ; *aString* ; *start* {; pos_found ; length_found}{; *} ) -> Function result <br/>
**Match regex** ( *pattern* ; *aString* ) -> Function result](../../commands-legacy/match-regex)<br/>The **Match regex** command checks the conformity of a character string with respect to a set of synthesized rules by means of a meta-language called “regular expression” or “rational expression.|
|[**Num** ( *expression* {; *separator*} ) : Real](../../commands-legacy/num)<br/>The Num command returns the numeric form of the String, Boolean or numeric expression you pass in *expression*.|
|[**Position** ( *find* ; *aString* {; *start* {; *lengthFound*}}{; *} ) -> Function result <br/>
**Position** ( *find* ; *aString* ; *start* ; *lengthFound* ; *options* ) -> Function result](../../commands-legacy/position)<br/>**Position** returns the position of the first occurrence of *find* in *aString*.|
|[**Replace string** ( *source* ; *oldString* ; *newString* {; *howMany*}{; *} ) : Text](../../commands-legacy/replace-string)<br/>Replace string replaces *howMany* occurrences of *oldString* in *source* with *newString*.|
|[**Split string** ( *stringToSplit* ; *separator* {; *options*} ) : Collection](../../commands-legacy/split-string)<br/>The **Split string** command returns a collection of strings, created by splitting *stringToSplit* into substrings at the boundaries specified by the *separator* parameter.|
|[**String** ( *expression* {; *format* {; *addTime*}} ) : Text](../../commands-legacy/string)<br/>The String command returns the string form of the numeric, Date, Time, string or Boolean expression you pass in *expression*.|
|[**Substring** ( *source* ; *firstChar* {; *numChars*} ) : Text](../../commands-legacy/substring)<br/>The **Substring** command returns the portion of *source* defined by *firstChar* and *numChars*.|
|[**Uppercase** ( *aString* {; *} ) : Text](../../commands-legacy/uppercase)<br/>Uppercase takes *aString* and returns the string with all alphabetic characters in uppercase.|
