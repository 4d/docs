---
id: wa-set-external-links-filters
title: WA SET EXTERNAL LINKS FILTERS
slug: /commands/wa-set-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Syntax-->**WA SET EXTERNAL LINKS FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| filtersArr | Text array | &#8594;  | フィルタ配列 |
| allowDenyArr | Boolean array | &#8594;  | 許可-拒否配列 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Summary-->WA SET EXTERNAL LINKS FILTERS コマンドを使用して、*\** と *object* 引数で指定したWebエリアの外部リンクフィルタを設定できます。<!-- END REF-->外部リンクフィルタは、リンクを使用して現在のページに関連付けられているURLをWebエリアで開くか、マシンのデフォルトWebブラウザで開くかどうか決定するために使用されます。

ユーザが現在のページでリンクをクリックすると、4D は外部リンクフィルタのリストを照会し、リクエストされたURL をマシンのブラウザで開くかチェックします。開く場合、URL に対応するページがWeb ブラウザで開かれ、On Open External Linkフォームイベントが生成されます。そうでなければ ( デフォルト動作)、URL に対応するページはWeb エリア内に表示されます。URL の判定は*filtersArr*と*allowDenyArr* 配列の内容に基づき行われます。

*filtersArr* と *allowDenyArr* 配列は同期されていなければなりません。

* *filtersArr* 配列のそれぞれの要素には、フィルタするURL が含まれます。1つ以上の文字を表すワイルドカードとして \* を使用できます。
* *allowDenyArr*配列のそれぞれ対応する要素には、URL をWeb エリアで表示する ([True](true.md "True")) かWeb ブラウザで表示する ([False](false.md "False")) かを示すブール値が含まれます。

同じURL が許可および拒否されているなど、設定レベルで矛盾がある場合、最後の設定が考慮されます。

フィルタを無効にするには、コマンドを呼び出す際に空の配列を渡すか、配列の最後の要素で、*filtersArr* 配列に"*\**" を、*allowDenyArr*配列に[True](true.md "True")を渡します。

**重要**: [WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS")コマンドで設定されたフィルタが、WA SET EXTERNAL LINKS FILTERSコマンドよりも前に評価されます。つまりURLが[WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS")コマンドフィルタの設定により拒否されると、WA SET EXTERNAL LINKS FILTERSコマンドで受け入れていても、そのURL をブラウザで開くことはできません (例2 参照)。

#### 例題 1 

この例はサイトを外部ブラウザで開きます: 

```4d
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*www.google.*") //Select "google"
 APPEND TO ARRAY($AllowDeny;False)
  //False: このリンクは外部ブラウザで開かれる
 APPEND TO ARRAY($filters;"*www.apple.*")
 APPEND TO ARRAY($AllowDeny;False)
  //False: このリンクは外部ブラウザで開かれる
 WA SET EXTERNAL LINKS FILTERS(MyWArea;$filters;$AllowDeny)
```

#### 例題 2 

この例はサイトと外部リンク両方のフィルタを使用します: 

```4d
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*www.google.*") //Select "google"
 APPEND TO ARRAY($AllowDeny;False) //Deny this link
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
 
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*www.google.*") //Select "google"
 APPEND TO ARRAY($AllowDeny;False)
  //False: このリンクは外部ブラウザで開かれるべきだが、この設定は
  //URL フィルタによりブロックされ、無効となる。
 WA SET EXTERNAL LINKS FILTERS(MyWArea;$filters;$AllowDeny)
```

#### 参照 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  