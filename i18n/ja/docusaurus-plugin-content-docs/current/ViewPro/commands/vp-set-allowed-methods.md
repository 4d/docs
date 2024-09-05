---
id: vp-set-allowed-methods
title: VP SET ALLOWED METHODS
---

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->

**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->

| 引数        | 型      |    | 説明                           |                  |
| --------- | ------ | -- | ---------------------------- | ---------------- |
| methodObj | オブジェクト | -> | 4D View Pro エリアでの実行を許可するメソッド | <!-- END REF --> |

> **互換性**

> より高い柔軟性のため、4D View Pro エリアから呼び出せる 4Dフォーミュラを指定できる [`VP SET CUSTOM FUNCTIONS`](vp-set-custom-functions.md) コマンドの使用が推奨されます。 `VP SET CUSTOM FUNCTIONS` が呼び出された場合、`VP SET ALLOWED METHODS` の呼び出しは無視されます。 `VP SET CUSTOM FUNCTIONS` と `VP SET ALLOWED METHODS` のどちらも呼び出されていない場合、4D View Pro は 4D の汎用コマンド `SET ALLOWED METHODS` もサポートしますが、汎用コマンドの使用は推奨されません。

#### 説明

`VP SET ALLOWED METHODS` コマンドは、<!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->4D View Pro フォーミュラから呼び出し可能なプロジェクトメソッドを指定します<!-- END REF -->。 このコマンドは、呼び出し後のセッション中に初期化される 4D View Pro エリアすべてに対して適用されます。 同じセッション中において異なる設定で初期化をするために、複数回呼び出すこともできます。

セキュリティ上の理由により、 `VP SET ALLOWED METHODS` コマンドを実行していない場合のデフォルトでは、4D View Pro エリアにおいてはメソッドの呼び出しは許可されません (ただし、4D の汎用的な `SET ALLOWED METHODS` コマンドが呼び出されていた場合を除きます (前述の互換性に関する注記参照)。 許可されていないのメソッドをフォーミュラ内で使用した場合には、4D View Pro エリアに #NAME? エラーが表示されます。

*methodObj* には、4D View Pro エリア内で定義したいファンクションの名前をプロパティとして格納しているオブジェクトを渡します:

| プロパティ            |            |                                                                                | 型                   | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ---------- | ------------------------------------------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<functionName>` |            |                                                                                | オブジェクト              | カスタムファンクションの名前。 `<functionName>` プロパティ名は、4D View Pro フォーミュラで表示するカスタムファンクションの名前を定義します (スペースは使用できません)                                                                                                                                                                                                                                                                                                                           |
|                  | method     |                                                                                | テキスト                | (必須) 許可する既存の 4D プロジェクトメソッドの名前                                                                                                                                                                                                                                                                                                                                                                                                 |
|                  | parameters |                                                                                | Object の Collection | 引数のコレクション (メソッド内で定義されている順) 詳細については [引数](../formulas.md#引数) の章を参照ください。                                                                                                                                                                                                                                                                                                                                                         |
|                  |            | \[ ].name | テキスト                | `<functionName>` 用に表示する引数の名前。**注**: 引数の名前にスペースを含めることはできません。                                                                                                                                                                                                                                                                                                                                                                      |
|                  |            | \[ ].type | Number              | 引数の型。 サポートされている型:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>*type* は省略することができます (ただし、コレクション型の引数が 1つでも存在する場合は、引数の型宣言は必須です)。 <br/>*type* を省略した場合、値は型と一緒に渡されますが、日付と時間の値に関してはオブジェクトとして送られます。  *type* が `Is object` の場合、オブジェクト引数は `.value` プロパティに格納されて渡されます。 [引数](../formulas.md#引数) の章を参照ください。 |
|                  | summary    |                                                                                | テキスト                | 4D View Pro に表示するファンクションの説明                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | minParams  |                                                                                | Number              | 引数の最小の数                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                  | maxParams  |                                                                                | Number              | 引数の最大の数。 ここに parameters の length より大きな値を渡すことによって、デフォルトの型を持つ "任意の" 引数を宣言することができるようになります。                                                                                                                                                                                                                                                                                                                                                          |

#### 例題

4D View Pro エリアにおいて、2つのメソッドを許可します:

```4d
C_OBJECT($allowed)
$allowed:=New object // コマンドに渡す引数

$allowed.Hello:=New object // "Hello" という名前の 1つ目の簡単なファンクションを作成します
$allowed.Hello.method:="My_Hello_Method" // 4Dメソッドを設定します
$allowed.Hello.summary:="Hello prints hello world"

$allowed.Byebye:=New object // "Byebye" という名前の、引数を受け付ける 2つ目のファンクションを作成
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3

VP SET ALLOWED METHODS($allowed)
```

このコードが実行されたあと、定義されたファンクションは 4D View Pro フォーミュラで使用することができるようになります:

![](../../assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)

> インデックスは 0 起点です。

#### 参照

[4D ファンクション](../formulas.md#4dファンクション)<br/>
[VP SET CUSTOM FUNCTIONS](vp-set-custom-functions.md)
