---
id: get-text-keywords
title: GET TEXT KEYWORDS
slug: /commands/get-text-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET TEXT KEYWORDS.Syntax-->**GET TEXT KEYWORDS** ( *text* ; *arrKeywords* {; *} )<!-- END REF-->
<!--REF #_command_.GET TEXT KEYWORDS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| text | Text | &#8594;  | 元のテキスト |
| arrKeywords | Text array | &#8592; | キーワードを受け取る配列 |
| * | 演算子 | &#8594;  | 指定した場合、ユニークキーワード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET TEXT KEYWORDS.Summary-->**GET TEXT KEYWORDS**コマンドは*text*を個々の単語に分割し、*arrKeywords*配列の要素にして返します。<!-- END REF-->

4Dはテキストを個々の単語に分割する際、*キーワードインデックス*を構築するのと同じアルゴリズムを使用します。これはICUライブラリに基づきます。どのようにテキストが単語に分割されるのかに関するより詳しい情報は以下のWebページを参照してください: <http://userguide.icu-project.org/boundaryanalysis>

**注:** ユーザーからのリクエストに基づき、フランス語とイタリア語に関しては例外が設けられました: 母音または"h"が続くアポストロフィ (') は単語区切り文字として扱われます。例えば文字列"L'homme"や"l'arbre"は"L’"+"homme"や"l'"+"arbre"などのように分割されます。

使用されるアルゴリズムはデータベース設定の[**非文字・非数字のみをキーワード区切り文字とする**](https://developer.4d.com/docs/ja/settings/database/#%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E6%AF%94%E8%BC%83)の設定により異なります。

*text* 引数には単語に分割する元のテキストを渡します。スタイル付きテキストを渡すことができ、この場合スタイルタグは無視されます。

*arrKeywords*にはテキストから取り出された単語のリストを受信するテキスト配列を渡します。

オプションの *\** 引数を渡すと、コマンドは*arrKeywords*配列内に重複しない値を返します。引数が省略された場合はデフォルトでテキストから取り出された単語がすべて格納され、複数回出現するものについてはその数だけ要素が作成されます。

このコマンドは、4Dと同じキーワードを使用しつつ、大量のテキストを含むレコードを検索する、簡素な方法を提供します。例えば"10,000 Jean-Pierre BC45"を含むテキストにおいて、このテキストがキーワード"10,000" + "Jean" + "Pierre" + "BC45"に分割されるとき、配列には4要素が含まれます。プログラムでこの配列をループし、%演算子を使用してこれらのキーワードを1つ以上含むレコードを検索することができます (例題参照)。

#### 例題 1 

検索エリアフォームにユーザーは1つ以上の単語を入力できます。ユーザーが検索実行を指示したら、プログラムはユーザーが入力した単語を最低1つ*MyField*フィールドに含むレコードを検索します。 

```4d
  // vSearchはフォーム上の検索エリア変数名
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
  // ユーザーが同じ単語を複数回入力した場合に備え*を渡す
 CREATE SET([MyTable];"Totalfound")
 $n:=Size of array(arrSearch)
 For($i;1;$n)
    QUERY([MyTable];[MyTable]MyField % arrSearch{$i})
    CREATE SET(([MyTable];"found")
    UNION("Totalfound";"found";"Totalfound")
 End for
 USE SET("Totalfound")
```

#### 例題 2 

先の例と同じフォームで、ユーザーが入力した単語を*MyField*フィールドにすべて含むレコードを検索します。

```4d
  // vSearchはフォーム上の検索エリア変数名
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
 $n:=Size of array(arrSearch)
 QUERY([MyTable];[MyTable]ID >=0;*)
  // 検索初期化 = all records
 For($i;1;$n)
    QUERY([MyTable];&;[MyTable]MyField % arrSearch{$i};*)
  // 検索をスタック
 End for
 QUERY([MyTable]) //検索実行
```

#### 例題 3 

テキスト中の単語をカウント:

```4d
 GET TEXT KEYWORDS(vText;arrWords) // 全単語
 $n:=Size of array(arrWords)
 GET TEXT KEYWORDS(vText;arrWords;*) // 重複単語を除く
 $m:=Size of array(arrWords)
 ALERT("このテキストには"+String($n)+"個の単語が含まれ、重複を取り除くと"+String($m)+"個です。")
```

#### 参照 

[DISTINCT VALUES](distinct-values.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1141 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


