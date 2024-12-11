---
id: method-set-attributes
title: METHOD SET ATTRIBUTES
slug: /commands/method-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTES.Syntax-->**METHOD SET ATTRIBUTES** ( *path* ; *attributes* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text, Text配列 | &#8594;  | メソッドのパス |
| attributes | Object, Object array | &#8594;  | メソッドに対して設定する属性 |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントから実行された場合、コマンドをホストデータベースに適用する<br/>(このコンテキスト外ではこの引数は無視されます) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.METHOD SET ATTRIBUTES.Summary-->**METHOD SET ATTRIBUTES** コマンドは、*path* 引数で指定したメソッドの、*attributes* 引数で指定した値を設定することができます。<!-- END REF-->

*path* 引数にはメソッドパスを含んだテキストか、パスの配列を含んだテキスト配列を渡す事ができます。属性を適切に設定するため、*attributes* にも対応した形 (パスが配列なら属性も配列) で引数を渡す必要があります。このコマンドはプロジェクトメソッドに対してのみ使用できます。*path* 引数に無効なパスを渡した場合、エラーが生成されます。

*attributes* 引数には、メソッドに対して設定したい属性をすべて含んだオブジェクト、またはオブジェクトの配列を渡します (渡した*path* 引数の種類によります)。

メソッドの属性は[OB SET](ob-set.md) または [OB SET ARRAY](ob-set-array.md) コマンドを使用して設定する必要があります。ブール型の属性に対してTrueまたはFalseの値を、拡張された属性に対しては特定の値(例えば4D Mobile Property において"scope":"table" など)を設定します。*attributes* 引数に存在する属性のみがメソッド属性内で更新されます。

コマンドがコンポーネントから実行された場合、デフォルトではコンポーネントメソッドに対して適用されます。*\** 引数を渡した場合、コマンドはホストデータベースのメソッドに適用されます。

##### 

サポートされる属性は以下の通りです:

```RAW
{    "invisible" : false, // 表示状態であればtrue    "preemptive" : "capable" // または "incapable" あるいは "indifferent"    "publishedWeb" : false,  // 4D tags と URLを通して使用可能であればtrue    "publishedSoap": false,  // Webサービスとして提供されていればtrue    "publishedWsdl": false,  // WSDLで公開されていればtrue    "shared" : false,  // コンポーネントとホストデータベースで共有されていればtrue    "publishedSql" : false,  // SQLを通して利用可能であればtrue    "executedOnServer" : false, // サーバー側で実行されていればtrue}
```

**注:** "published4DMobile" 属性については、4D v18 において廃止予定となりました。

#### 例題 

属性を一つだけ設定したい場合を考えます:

```4d
 var $attributes : Object
 OB SET($attributes;"executedOnServer";True)
 METHOD SET ATTRIBUTES("aMethod";$attributes) //"executedOnServer" 属性のみが変更されます
```

#### 参照 

[METHOD GET ATTRIBUTES](method-get-attributes.md)  
[METHOD SET ATTRIBUTE](method-set-attribute.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1335 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


