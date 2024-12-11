---
id: ldap-search
title: LDAP Search
slug: /commands/ldap-search
displayed_sidebar: docs
---

<!--REF #_command_.LDAP Search.Syntax-->**LDAP Search** ( *dnRootEntry* ; *filter* {; *scope* {; *attributes* {; *attributesAsArray*}}} ) : Object<!-- END REF-->
<!--REF #_command_.LDAP Search.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | 検索を開始するルートエントリーの識別名 |
| filter | Text | &#8594;  | LDAP検索フィルター |
| scope | Text | &#8594;  | 検索のスコープ: "base" (デフォルト)、"one"、または"sub" |
| attributes | Text array | &#8594;  | 取得する属性 |
| attributesAsArray | Boolean array | &#8594;  | True = 属性を強制的に配列として返す;<br/>False = 属性を強制的に単純な変数として返す |
| 戻り値 | Object | &#8592; | キー/値 属性 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LDAP Search.Summary-->**LDAP Search** コマンドはターゲットとなるLDAPサーバー内にて、定義された条件に合致する最初のオカレンスを検索します。<!-- END REF-->このコマンドは*RuntimeVLIncludeIt* によって開かれたLDAPサーバーへの接続の中で実行される必要があります(それ以外の場合にはエラー1003が返されます)。

*dnRootEntry* 引数には、LDAPサーバールートエントリーの*識別名*を渡します。検索はここのエントリーから開始されます。

*filter* 引数には、実行するLDAP検索フィルターを渡します。フィルター文字列は[rfc2225](http://tools.ietf.org/search/rfc2254) に準拠している必要があります。空の文字列("")を渡すことに寄って検索にフィルターをかけないこともできます。"\*"は部分列の検索をサポートします。

*scope* 引数には、以下の"LDAP"テーマのどれか一つを渡します:

| 定数                 | 型   | 値    | コメント                                               |
| ------------------ | --- | ---- | -------------------------------------------------- |
| LDAP all levels    | 文字列 | sub  | *dnRootEntry* で定義されたルートエントリーレベルと、それ以下の全てのエントリー内を検索 |
| LDAP root and next | 文字列 | one  | *dnRootEntry* で定義されたルートエントリーレベルと、その一つ下のエントリー内を検索   |
| LDAP root only     | 文字列 | base | *dnRootEntry* で定義されたルートエントリーレベル内のみを検索              |

*attributes* 引数には適合したエントリーから取得する全てのLDAP属性を一覧を格納するためのテキスト配列を渡します。デフォルトではこの引数が省略された場合、全ての属性が取得されます。

**注:** LDAP 属性名は大文字/小文字を区別するという点に注意して下さい。LDAP 属性についてのより詳細な譲歩運関しては、MS Active directory用の全ての属性をまとめてある[こちらのページ](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) を参照して下さい。

デフォルトではコマンドは、複数の結果が見つかった場合には属性をコレクションとして返し、単一の結果が見つかった場合には単純な変数として返します。*attributesAsArray* 引数を使用すると、定義したそれぞれの属性に対し、返される属性のフォーマットを、コレクションまたは変数に指定することができます:

* 要素に**true**を渡した場合、対応する要素の*attributes* 引数はコレクションとして返されます。単一のエントリーが見つかった場合、コマンドは単一の要素を含むコレクションを返します。
* 要素に**false** を渡した場合、対応する要素の*attributes* 引数は単純な変数として返されます。複数のエントリーが見つかった場合、コマンドは最初の要素のみを返します。

#### 例題 1 

カンパニーディレクトリ内から、"smith"というユーザーの電話番号を取得したい場合を考えます:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN($url;$dn;$pwd)
 $filter:="cn=*smith*"
 $vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
```

#### 例題 2 

"memberOf"属性で見つかった全てのエントリーを格納した配列を取得したい場合を考えます:

```4d
 var $entry : Object
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 $entry:=LDAP Search($dnSearchRootEntry;"cn=adrien*";LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($entry;"memberOf";$_arrMemberOf)
  // $_arrMemberOf 内には、全てのエントリーグループを格納した配列が入っています
```

#### 参照 

*LDAP*  
[LDAP SEARCH ALL](ldap-search-all.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1328 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


