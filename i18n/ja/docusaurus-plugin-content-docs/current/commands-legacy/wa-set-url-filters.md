---
id: wa-set-url-filters
title: WA SET URL FILTERS
slug: /commands/wa-set-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET URL FILTERS.Syntax-->**WA SET URL FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA SET URL FILTERS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| filtersArr | Text array | &#8594;  | フィルタ配列 |
| allowDenyArr | Boolean array | &#8594;  | 許可-拒否配列 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WA SET URL FILTERS.Summary-->WA SET URL FILTERS コマンドは、*\** と *object* 引数で指定したWebエリアで、1 つ以上のフィルタを設定するために使用します。<!-- END REF--> 

リクエストされたページをロードする前に、4D はフィルタのリストを照会し、ターゲットのURL に接続が許可されているかどうかを調べます。URLの判定は*filtersArr* と*allowDenyArr* 配列の内容に基づき行われます。

リクエストされたURL が許可されない場合、ページはロードされず、On URL Filtering フォームイベントが生成されます。

*filtersArr* と *allowDenyArr* 配列は同期されていなければなりません。

* *filtersArr* 配列のそれぞれの要素には、フィルタするURL が含まれます。1 つ以上の文字を表すワイルドカードとして *\** を使用できます。
* *allowDenyArr* 配列のそれぞれ対応する要素には、URL を許可 ([True](true.md "True")) するか拒否 ([False](false.md "False")) するかを示すブール値が含まれます。

同じURL が許可および拒否されているなど、設定レベルで矛盾がある場合、最後の設定が考慮されます。

フィルタを無効にするには、コマンドを呼び出す際に空の配列を渡すか、配列の最後の要素で、*filtersArr* 配列に"*\**" を、*allowDenyArr* 配列に[True](true.md "True")を渡します。

コマンドが実行されると、フィルタはWeb エリアのプロパティとなります。*filtersArr* と*allowDenyArr* が削除されたり初期化されたりしても、コマンドが再実行されるまでフィルタは有効です。エリアで有効になっているフィルタを取得するには、[WA GET URL FILTERS](wa-get-url-filters.md) コマンドを使用しなければなりません。

**重要**: このコマンドによって実行されるURLフィルタリングは、[WA OPEN URL](wa-open-url.md) コマンドと"javascript:"で始まるURLを除き、ページの主URLを変更するリクエストであればユーザーからのリクエストであってもjavascriptコードであっても4Dコードであっても、どのようなリクエストに対しても適用されます。

#### 例題 1 

.org, .net そして .fr Web サイトへのアクセスを禁止したい場合:   

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*.org")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.net")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.fr")
 APPEND TO ARRAY($AllowDeny;False)
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### 例題 2 

日本のサイト以外へのアクセスを禁止したい場合(.jp):   

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*") //Select all
 APPEND TO ARRAY($AllowDeny;False) //Deny all
 APPEND TO ARRAY($filters;"www.*.jp") //Select *.jp
 APPEND TO ARRAY($AllowDeny;True) //Allow
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### 例題 3 

4D のWeb サイトにのみアクセスを許可する場合 (.com, .fr, .es, etc.):   

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*") //Select all
 APPEND TO ARRAY($AllowDeny;False) //Deny all
 APPEND TO ARRAY($filters;"www.4D.*") //Select 4d.fr, 4d.com...
 APPEND TO ARRAY($AllowDeny;True) //Allow
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### 例題 4 

ローカルのドキュメントにのみアクセスを許可 (C://doc フォルダ内):   

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*") //Select all
 APPEND TO ARRAY($AllowDeny;False) //Deny all
 APPEND TO ARRAY($filters;"file://C:/doc/*")
  //Select the path file:// allowed
 APPEND TO ARRAY($AllowDeny;True) //Allow
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### 例題 5 

特定のキーワードを含むサイトを除いて許可する場合: 

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*")
 APPEND TO ARRAY($AllowDeny;True) //Allow all
 APPEND TO ARRAY($filters;"*elcaro*") //Deny all that contain elcaro
 APPEND TO ARRAY($AllowDeny;False)
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### 例題 6 

特定のIP アドレスへのアクセスを拒否する場合:   

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*") //Select all
 
 APPEND TO ARRAY($AllowDeny;True) //Allow all
 APPEND TO ARRAY($filters;86.83.*")  //Select IP addresses beginning with 86.83.
 APPEND TO ARRAY($AllowDeny;False) //Deny
 APPEND TO ARRAY($filters;86.1*")  //Select IP addresses beginning with 86.1 (86.10, 86.135 etc.)
 APPEND TO ARRAY($AllowDeny;False) //Deny
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
  //(Note that the IP address of a domain may vary).
```

#### 参照 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  