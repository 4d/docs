---
id: convert-from-text
title: CONVERT FROM TEXT
slug: /commands/convert-from-text
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT FROM TEXT.Syntax-->**CONVERT FROM TEXT** ( *4Dtext* ; *charSet* ; *convertedBLOB* )<!-- END REF-->
<!--REF #_command_.CONVERT FROM TEXT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 4Dtext | Text | &#8594;  | 現在の4Dの文字セットで記述されているテキスト |
| charSet | Text, Integer | &#8594;  | 文字セットの番号または名前 |
| convertedBlob | Blob | &#8592; | 変換されたテキストを含むBLOB |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CONVERT FROM TEXT.Summary-->CONVERT FROM TEXTコマンドは、現在の4Dの文字セットで記述されているテキストを、他の文字セットで記述されているテキストへ変換するために使用できます。<!-- END REF-->

*4Dtext* 引数には変換するテキストを渡します。このテキストは、4Dが使用する文字セットで記述されています。4Dのバージョン11では、デフォルトでUnicode 文字セットが使用されています。

*charSet* には変換に使用する文字セットを渡します。セットの標準名 (例えば、"ISO-8859-1" や "UTF-8" ) 、またはMIBEnum識別子を渡すことができます。

CONVERT FROM TEXTと[Convert to text](convert-to-text.md "Convert to text")コマンドでサポートされる文字セットのリストは以下のとおりです:

| **MIBEnum** | 名前                 |
| ----------- | ------------------ |
| 1017        | UTF-32             |
| 1018        | UTF-32BE           |
| 1019        | UTF-32LE           |
| 1015        | UTF-16             |
| 1013        | UTF-16BE           |
| 1014        | UTF-16LE           |
| 106         | UTF-8              |
| 1012        | UTF-7              |
| 3           | US-ASCII           |
| 3           | ANSI\_X3.4-1968    |
| 3           | ANSI\_X3.4-1986    |
| 3           | ASCII              |
| 3           | cp367              |
| 3           | csASCII            |
| 3           | IBM367             |
| 3           | iso-ir-6           |
| 3           | ISO\_646.irv:1991  |
| 3           | ISO646-US          |
| 3           | us                 |
| 2011        | IBM437             |
| 2011        | cp437              |
| 2011        | 437                |
| 2011        | csPC8CodePage437   |
| 2028        | ebcdic-cp-us       |
| 2028        | cp037              |
| 2028        | csIBM037           |
| 2028        | ebcdic-cp-ca       |
| 2028        | ebcdic-cp-n        |
| 2028        | ebcdic-cp-wt       |
| 2028        | IBM037             |
| 2027        | MacRoman           |
| 2027        | x-mac-roman        |
| 2027        | mac                |
| 2027        | macintosh          |
| 2027        | csMacintosh        |
| 2252        | windows-1252       |
| 1250        | MacCE              |
| 1250        | x-mac-ce           |
| 2250        | windows-1250       |
| 1251        | x-mac-cyrillic     |
| 2251        | windows-1251       |
| 1253        | x-mac-greek        |
| 2253        | windows-1253       |
| 1254        | x-mac-turkish      |
| 2254        | windows-1254       |
| 1256        | x-mac-arabic       |
| 2256        | windows-1256       |
| 1255        | x-mac-hebrew       |
| 2255        | windows-1255       |
| 1257        | x-mac-ce           |
| 2257        | windows-1257       |
| 17          | Shift\_JIS         |
| 17          | csShiftJIS         |
| 17          | MS\_Kanji          |
| 17          | Shift-JIS          |
| 39          | ISO-2022-JP        |
| 39          | csISO2022JP        |
| 2024        | Windows-31J        |
| 2026        | Big5               |
| 2026        | csBig5             |
| 38          | EUC-KR             |
| 38          | csEUCKR            |
| 2084        | KOI8-R             |
| 2084        | csKOI8R            |
| 4           | ISO-8859-1         |
| 4           | CP819              |
| 4           | csISOLatin1        |
| 4           | IBM819             |
| 4           | iso-ir-100         |
| 4           | ISO\_8859-1        |
| 4           | ISO\_8859-1:1987   |
| 4           | l1                 |
| 4           | latin1             |
| 5           | ISO-8859-2         |
| 5           | csISOLatin2        |
| 5           | iso-ir-101         |
| 5           | ISO\_8859-2        |
| 5           | ISO\_8859-2:1987   |
| 5           | l2                 |
| 5           | latin2             |
| 6           | ISO-8859-3         |
| 6           | csISOLatin3        |
| 6           | ISO-8859-3:1988    |
| 6           | iso-ir-109         |
| 6           | ISO\_8859-3        |
| 6           | l3                 |
| 6           | latin3             |
| 7           | ISO-8859-4         |
| 7           | csISOLatin4        |
| 7           | ISO-8859-4:1988    |
| 7           | iso-ir-110         |
| 7           | ISO\_8859-4        |
| 7           | l4                 |
| 7           | latin4             |
| 8           | ISO-8859-5         |
| 8           | csISOLatinCyrillic |
| 8           | cyrillic           |
| 8           | ISO-8859-5:1988    |
| 8           | iso-ir-144         |
| 8           | ISO\_8859-5        |
| 9           | ISO-8859-6         |
| 9           | arabic             |
| 9           | ASMO-708           |
| 9           | csISOLatinArabic   |
| 9           | ECMA-114           |
| 9           | ISO-8859-6:1987    |
| 9           | iso-ir-127         |
| 9           | ISO\_8859-6        |
| 10          | ISO-8859-7         |
| 10          | csISOLatinGreek    |
| 10          | ECMA-118           |
| 10          | ELOT\_928          |
| 10          | greek              |
| 10          | greek8             |
| 10          | iso-ir-126         |
| 10          | ISO\_8859-7        |
| 10          | ISO\_8859-7:1987   |
| 11          | ISO-8859-8         |
| 11          | csISOLatinHebrew   |
| 11          | hebrew             |
| 11          | iso-ir-138         |
| 11          | ISO\_8859-8        |
| 11          | ISO\_8859-8:1988   |
| 12          | ISO-8859-9         |
| 12          | csISOLatin5        |
| 12          | iso-ir-148         |
| 12          | ISO\_8859-9        |
| 12          | ISO\_8859-9:1989   |
| 12          | l5                 |
| 12          | latin5             |
| 13          | ISO-8859-10        |
| 13          | csISOLatin6        |
| 13          | iso-ir-157         |
| 13          | ISO\_8859-10       |
| 13          | ISO\_8859-10:1992  |
| 13          | l6                 |
| 13          | latin6             |
| 109         | ISO-8859-13        |
| 111         | ISO-8859-15        |
| 111         | Latin-9            |
| 113         | GBK                |
| 2025        | GB2312             |
| 2025        | csGB2312           |
| 2025        | x-mac-chinesesimp  |
| 2025        | x-mac-chinesesimp  |
| 57          | GB\_2312-80        |
| 57          | csISO58GB231280    |

  
**注:** いくつかの行は同じMIBEnum識別子を持っています。これは文字セットが1つ以上の名前 (エイリアス) を持つためです。

文字セットの名前についての詳細は、以下のアドレスを参照してください:  
*<http://www.iana.org/assignments/character-sets>*

コマンドを実行した後、*convertedBLOB* BLOBには変換されたテキストが返されます。このBLOBは、[Convert to text](convert-to-text.md "Convert to text")コマンドで読み込むことができます。

**注:** IANAに定義されていない特別な文字セット (1258=x-mac-japanese) を使用することができます。これはWindows上ではコードページ10001に、Mac上ではkTextEncodingMacJapaneseにマッ プされています。 

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されます。

#### 参照 

[Convert to text](convert-to-text.md)  