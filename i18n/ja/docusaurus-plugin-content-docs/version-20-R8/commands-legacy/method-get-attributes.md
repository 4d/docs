---
id: method-get-attributes
title: METHOD GET ATTRIBUTES
slug: /commands/method-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET ATTRIBUTES.Syntax-->**METHOD GET ATTRIBUTES** ( *path* ; *attributes* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET ATTRIBUTES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text, Text配列 | &#8594;  | メソッドのパス |
| attributes | Object, Object array | &#8592; | 選択したメソッドの属性 |
| * | 演算子 | &#8594;  | 指定すると、コマンドはコンポーネントから実行されたときにホストデータベースへと適用されます<br/>(このコンテキスト外ではこの引数は無視されます) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.METHOD GET ATTRIBUTES.Summary-->**METHOD GET ATTRIBUTES** コマンドは、*path* で指定されたメソッドのすべての属性のカレント値を *attributes* に返します。<!-- END REF-->

このコマンドはプロジェクトメソッドに対してのみ使用できます。*path* に無効なパスを渡した場合、エラーが生成されます。

*path* にはメソッドパスを含んだテキストか、パスの配列を含んだテキスト配列を渡す事ができます。*attributes* には、属性を適切に取得するために、同様の引数 (文字列または配列) を渡す必要があります。

*attributes* には、*path* に渡した引数の種類に応じて、オブジェクトまたはオブジェクトの配列を渡します。すべてのメソッドの属性はオブジェクトプロパティとして返され、その内部は "true"/"false" 値を持つブール型の属性ですが、必要に応じてテキストなどの追加の値が渡されます (例えば "scope":"table" 4D Mobile property など)。

このコマンドがコンポーネントから実行された場合、デフォルトではコンポーネントメソッドに対して適用されます。*\** 引数を渡した場合、ホストデータベースのメソッドへとアクセスします。

**注:** 既存の [METHOD Get attribute](method-get-attribute.md) コマンドは引き続きサポートはされますが、ブール型の値しか返せないため、4D Mobileプロパティのような拡張された属性に対しては使用はできません。

**互換性に関する注記:** 4D v18 以降、*published4DMobile* プロパティは廃止予定です。

#### 例題 

*sendMail* プロジェクトメソッドの属性を取得したい場合を考えます。以下の用にコードを書くことができます:

```4d
 var $att : Object
 METHOD GET ATTRIBUTES("sendMail";$att)
```

実行後、$att には例えば以下のような値が含まれます:

```json
{
    "invisible":false,
    "preemptive":"capable",
    "publishedWeb":false,
    "publishedSoap":false,
    "publishedWsdl":false,
    "shared":false,
    "publishedSql":false,
    "executedOnServer":false,
    "published4DMobile":{
        "scope":"table",
        "table":"Table_1"
    }
}
```

#### 参照 

[METHOD SET ATTRIBUTES](method-set-attributes.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1334 |
| スレッドセーフである | &check; |


