---
id: ldap-search-all
title: LDAP SEARCH ALL
slug: /commands/ldap-search-all
displayed_sidebar: docs
---

<!--REF #_command_.LDAP SEARCH ALL.Syntax-->**LDAP SEARCH ALL** ( *dnRootEntry* ; *arrResult* ; *filter* {; *scope* {; *attributes* {; *attributesAsArray*}}} )<!-- END REF-->
<!--REF #_command_.LDAP SEARCH ALL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | 検索を開始するルートエントリーの識別名 |
| arrResult | Object array | &#8592; | 検索の結果 |
| filter | Text | &#8594;  | LDAP検索フィルター |
| scope | Text | &#8594;  | 検索のスコープ: "base" (デフォルト)、"one"、または"sub" |
| attributes | Text array | &#8594;  | 取得する属性 |
| attributesAsArray | Boolean array | &#8594;  | True = 属性を配列として返す; false = 属性を単純な変数として返す |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LDAP SEARCH ALL.Summary-->**LDAP SEARCH ALL** コマンドは、ターゲットとなるLDAPサーバー内のオカレンスのうち、定義された条件に合致するものを全て検索します。<!-- END REF-->このコマンドは*LDAP LOGIN*によって開かれたLDAPサーバーへの接続の中で実行される必要があります(それ以外の場合にはエラー1003が返されます)。

LDAPサーバーには通常、検索のために受け付けられるエントリー数には上限設定されているという点に注意して下さい。例えば、Microsoft Active director は、デフォルトではエントリー数を1000に制限しています。

*dnRootEntry* 引数には、LDAPサーバールートエントリーの*識別名*を渡します。検索はここのエントリーから開始されます。

*tabResult* 引数には、全ての合致したエントリーを受け入れるためのオブジェクト配列を渡します。この配列内には、それぞれの要素に、合致したエントリーの属性/値のペアが格納されています。*attributes* 引数を使用することによって返される属性を定義することもできます。

*filter* 引数には、実行するLDAP検索フィルターを渡します。フィルター文字列は[rfc2225](http://tools.ietf.org/search/rfc2254) に準拠している必要があります。空の文字列("")を渡すことに寄って検索にフィルターをかけないこともできます。"\*"は部分列の検索をサポートします。

*scope* 引数には、以下の"LDAP"テーマのどれか一つを渡します:

| **定数**             | **型** | **値**  | **詳細**                                                        |
| ------------------ | ----- | ------ | ------------------------------------------------------------- |
| LDAP root only     | テキスト  | "base" | *dnRootEntry* によって定義されたルートエントリーレベルのみを検索します(省略された場合のデフォルト)     |
| LDAP root and next | テキスト  | "one"  | *dnRootEntry* によって定義されたルートエントリーレベルと、その１階層下のレベルにあるエントリーを検索します。 |
| LDAP all levels    | テキスト  | "sub"  | *dnRootEntry* によって定義されたルートエントリーレベルと、その下にある階層全てのエントリーを検索します。   |

*attributes* 引数には適合したエントリーから取得する全てのLDAP属性を一覧を格納するためのテキスト配列を渡します。デフォルトではこの引数が省略された場合、全ての属性が取得されます。

**注:** LDAP 属性名は大文字/小文字を区別するという点に注意して下さい。LDAP 属性についてのより詳細な譲歩運関しては、MS Active directory用の全ての属性をまとめてある[こちらのページ](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) を参照して下さい。

デフォルトではコマンドは、複数の結果が見つかった場合には属性を配列として返し、単一の結果が見つかった場合には単純な変数として返します。*attributesAsArray* 引数を使用すると、定義したそれぞれの属性に対し、返される属性のフォーマットを指定することができます:

* 要素に**true**を渡した場合、対応する要素の*attributes* 引数は配列として返されます。単一のエントリーが見つかった場合、コマンドは単一の要素を含む配列を返します。
* 要素に**false** を渡した場合、対応する要素の*attributes* 引数は単純な変数として返されます。複数のエントリーが見つかった場合、コマンドは最初の要素のみを返します。

#### 例題 1 

カンパニーディレクトリから、"smith"という名前を持つ全てのユーザーの電話番号を取得したい場合を考えます:

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"telephoneNumber")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 ARRAY OBJECT($_entry;0)
 
 LDAP LOGIN($url;$myLogin;$pwd)
 $filter:="cn=*smith*"
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
 
 
  //$_entry には、例えば以下のような値が返されます
  // $_entry{1} = {"cn":"John Smith","telephoneNumber":"01 40 87 00 00"}
  // $_entry{2} = {"cn":"Adele Smith","telephoneNumber":"01 40 87 00 01"}
  // $_entry{3} = {"cn":"Adrian Smith","telephoneNumber":"01 23 45 67 89"}
  // ...
```

#### 例題 2 

以下の例は*attributesAsArray* 引数の使用方について説明しています:

```4d
 ARRAY OBJECT($_entry;0)
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($_entry{1};"memberOf";$_arrMemberOf)
  // $_arrMemberOf 内には、エントリーのグループを全て格納した配列が返されます。
```

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 $memberOf:=OB Get($_entry{1};"memberOf")
  // $memberOf には、エントリーの最初のグループのみを格納した変数が返されます。
```

#### 参照 

*LDAP*  
[LDAP Search](ldap-search.md)  