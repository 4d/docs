---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->

<!--REF #_command_.Compile project.Params-->

| 引数          | 型                       |   | 説明                                     |
| ----------- | ----------------------- | - | -------------------------------------- |
| projectFile | 4D.File | → | コンパイルする.4DProject ファイル |
| options     | Object                  | → | コンパイルオプションを指定するオブジェクト                  |
| 戻り値         | Object                  | ← | コンパイルのステータスの情報を格納したオブジェクト              |

<!-- END REF-->

*このコマンドはスレッドセーフではないので、プリエンプティブなコードでは使用できません。*

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R8 | "formObjectExpression" `型` のサポート |

</details>

#### 説明

**Compile project** は、<!--REF #_command_.Compile project.Summary-->
カレントのホストプロジェクト、または*projectFile* 引数で指定したプロジェクトをコンパイルします。<!-- END REF-->コンパイルについてのより詳細な情報については、[コンパイルページ](../Project/compiler.md) を参照してください。

デフォルトでは、このコマンドはストラクチャー設定で定義されているコンパイラオプションを使用します。 任意の*options* 引数を渡すことで、それらを上書きすることができます。 以下のシンタックスがサポートされています: 任意の*options* 引数を渡すことで、それらを上書きすることができます。 以下のシンタックスがサポートされています:

- **Compile project**(): 現在開かれているプロジェクトを、ストラクチャー設定で定義されているオプションを使用してコンパイルします。
- **Compile project**(*options*): 現在開かれているプロジェクトをコンパイルします。 *options* 引数で定義されたオプションでストラクチャー設定を上書きします。 *options* 引数で定義されたオプションでストラクチャー設定を上書きします。 *options* 引数で定義されたオプションでストラクチャー設定を上書きします。
- **Compile project**(*projectFile*): *projectFile* 引数で指定された4DProject ファイルを、ストラクチャー設定で定義されているオプションを使用してコンパイルします。
- **Compile project**(*projectFile*; *options*): *projectFile* 引数で指定された4DProject ファイルを、*options* 引数で定義されたオプションでストラクチャー設定を上書きしてコンパイルします。

**注:** このコマンドを使用してバイナリーデータベースをコンパイルすることはできません。

コンパイラウィンドウとは異なり、このコマンドではコンパイルするコンポーネントを明示的に指定する必要があります。 **Compile project** でプロジェクトをコンパイルする場合、*options* 引数の*components* プロパティを使用してそのコンポーネントを宣言する必要があります。 なお、そのコンポーネントは既にコンパイルされている必要があるという点に注意してください(バイナリーコンポーネントはサポートされます)。 **Compile project** でプロジェクトをコンパイルする場合、*options* 引数の*components* プロパティを使用してそのコンポーネントを宣言する必要があります。 なお、そのコンポーネントは既にコンパイルされている必要があるという点に注意してください(バイナリーコンポーネントはサポートされます)。 **Compile project** でプロジェクトをコンパイルする場合、*options* 引数の*components* プロパティを使用してそのコンポーネントを宣言する必要があります。 なお、そのコンポーネントは既にコンパイルされている必要があるという点に注意してください(バイナリーコンポーネントはサポートされます)。

コンパイルされたコードは、*options* 引数の*targets* プロパティでの指定によって、DerivedData または Libraries フォルダに格納されています。 コンパイルされたコードは、*options* 引数の*targets* プロパティでの指定によって、DerivedData または Libraries フォルダに格納されています。 .4dz ファイルを作成したい場合でも、コンパイルされたプロジェクトを手動でZIP圧縮するか、[ビルドアプリケーション](../Desktop/building.md) 機能を使用する必要があります。

*targets* プロパティに空のコレクションを渡した場合、**Compile project** コマンドはコンパイルせずにシンタックスチェックを実行します。

コンパイルエラーがもしあれば、*errors* コレクション内にオブジェクトとして返されます。

**注:** 他のコンパイルの実行中に、このコマンドを呼び出すことはできません(例えば、コンパイルウィンドウからローンチしたコンパイルが実行中である場合など)。

##### options 引数

*options* 引数はオブジェクト型です。 利用可能なコンパイルオプションは次のとおりです: 利用可能なコンパイルオプションは次のとおりです:

| **プロパティ**                                                                          | **型**                            | **説明**                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| components                                                                         | Collection                       | 依存したコンポーネントへの4D.File オブジェクトのコレクション(コンポーネントは既にコンパイルされている必要があります)。                                                                                                                                                                                                                                                                                  |
| defaultTypeForButtons                                                              | Integer                          | 取り得る値: Is real または Is longint                                                                                                                                                                                                                                                                                                                                        |
| defaultTypeForNumerics                                                             | Integer                          | 取り得る値: Is real または Is longint                                                                                                                                                                                                                                                                                                                                        |
| generateSymbols                                                                    | Boolean                          | 返された.symbol オブジェクト内にsymbol 情報を生成するためにはTrue                                                                                                                                                                                                                                                                                                                           |
| generateSyntaxFile                                                                 | Boolean                          | プロジェクトの\\Resources\\en.lproj フォルダに [コード補完用のシンタックスファイルを生成する](../settings/general.md#%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E6%99%82%E3%81%AB%E3%82%B3%E3%83%BC%E3%83%89%E8%A3%9C%E5%AE%8C%E7%94%A8%E3%81%AE%E3%82%B7%E3%83%B3%E3%82%BF%E3%83%83%E3%82%AF%E3%82%B9%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B) ためにはTrue |
| generateTypingMethods                                                              | Text                             | 型指定メソッドを生成する際にリセット("reset") するか追加("append") するかを選択します。 値が"append" だった場合、既存の変数宣言は変更されません(コンパイラウィンドウの振る舞い)。 値が"reset" だった場合、既存の変数宣言は事前に削除されます。                                                                                                                                                                                |
| plugins                                                                            | 4D.Folder object | [Plugins folder of the current project](../Project/architecture.md#plugins) ではなく、独自に使用したいプラグインのフォルダ。 このプロパティは、*projectFile* シンタックスを使用した場合にのみ利用可能です。 このプロパティは、*projectFile* シンタックスを使用した場合にのみ利用可能です。 このプロパティは、*projectFile* シンタックスを使用した場合にのみ利用可能です。                                                                                                                                    |
| targets                                                                            | String の Collection              | 取り得る値: "x86_64_generic"、"arm64_macOS_lib"。 また空のコレクションを渡すことでシンタックスチェックのみを実行させることもできます。 また空のコレクションを渡すことでシンタックスチェックのみを実行させることもできます。 また空のコレクションを渡すことでシンタックスチェックのみを実行させることもできます。                                                                                                      |
| typeInference                                                                      | Text                             | "all": コンパイラは、明示的に宣言されていない全ての変数の型を類推します。 "locals": コンパイラは、明示的に宣言されていないローカル変数の型を類推します。 "none": 自動変数定義は行いません。全ての変数はコード内で明示的に宣言されている必要があります(旧式モード)。"direct": 全ての変数はコード内で明示的に宣言されている必要があります([直接型指定](../Project/compiler.md#enabling-direct-typing))。                               |
| warnings                                                                           | Object の Collection              | 警告の有効化状態を定義します                                                                                                                                                                                                                                                                                                                                                                       |
| \[\].major   | Number                           | 指定する警告のメインの番号、ドットの前                                                                                                                                                                                                                                                                                                                                                                  |
| \[\].minor   | Number                           | 指定する警告の2つ目の番号、ドットの後                                                                                                                                                                                                                                                                                                                                                                  |
| \[\].enabled | Boolean                          | 警告の有効化状態                                                                                                                                                                                                                                                                                                                                                                             |

**Note:** *options* オブジェクト内において*warnings* 属性が定義されていない場合、**Compile project** コマンドはストラクチャー設定内で定義されているデフォルトの警告生成ステータスを使用します。

##### 戻り値

**Compile project** によって返されるオブジェクトには、以下のプロパティが格納されています(最大で3つ):

| **プロパティ**                                                                                                              | **型**               | **説明**                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------- |
| success                                                                                                                | Boolean             | 保存に成功した場合には true、それ以外は false                                                                    |
| errors                                                                                                                 | Object の Collection | **以下はerror または warningの場合にのみ返されます**。 コンパイルのエラーまたは警告の詳細を格納したオブジェクトのコレクションです。                     |
| \[\].isError                                     | Boolean             | エラーならTrue、それ以外の場合は警告                                                                            |
| \[\].message                                     | Text                | エラーメッセージ                                                                                        |
| \[\].code                                        | Object              | [コードオブジェクト](#code-object)                                                                       |
| \[\].line                                        | Number              | コード内でのエラーが発生した行番号。 コード内でのエラーが発生した行番号。 コード内でのエラーが発生した行番号。 クラスメソッドに対しては、ファンクション内の行番号              |
| \[\].lineInFile                                  | Number              | ファイル内での行番号(クラスメソッドの"line"とは異なります、また%attributes プリフィックス行を考慮に入れます)             |
| symbols                                                                                                                | Object              | **generateSymbols オプションがTrue に設定されている場合にのみ返されます:**                              |
| symbols.interprocessVariables                                                                          | Object              | 全てのインタープロセス変数の一覧                                                                                |
| symbols.interprocessVariables.variables                                                | Collection          | [変数オブジェクト](#%E5%A4%89%E6%95%B0%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88) のコレクション   |
| symbols.interprocessVariables.size                                                     | Number              |                                                                                                 |
| symbols.processVariables                                                                               | Object              | 全てのプロセス変数の一覧                                                                                    |
| symbols.processVariables.variables                                                     | Collection          | [変数オブジェクト](#%E5%A4%89%E6%95%B0%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88) のコレクション   |
| symbols.processVariables.size                                                          | Number              |                                                                                                 |
| symbols.localVariables                                                                                 | Object の Collection | メソッドごとのローカル変数の一覧                                                                                |
| symbols.localVariables[].code      | Object              | [コードオブジェクト](#code-object)                                                                       |
| symbols.localVariables[].variables | Collection          | [変数オブジェクト](#%E5%A4%89%E6%95%B0%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88) のコレクション   |
| symbols.methods                                                                                        | Object の Collection | メソッドの一覧                                                                                         |
| symbols.methods\[\].code         | Object              | [コードオブジェクト](#%E3%82%B3%E3%83%BC%E3%83%89%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88) |
| symbols.methods\[\].callCount    | Number              | このメソッドが呼び出された回数                                                                                 |
| symbols.methods\[\].params       | Collection          | 引数タイプのコレクション(Value Type の数値コード)                                              |
| symbols.methods\[\]. threadSafe  | Boolean             | このメソッドがスレッドセーフであるかを示します。                                                                        |

より詳細な情報については、[コンパイルツール](../Project/compiler.md#%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%83%84%E3%83%BC%E3%83%AB) を参照してください。

###### 変数オブジェクト

`interprocessVariables.variables` および `processVariables.variables` には以下の構造を持ったオブジェクトが格納されます:

| **プロパティ**      | **型**  | **説明**                                               |
| -------------- | ------ | ---------------------------------------------------- |
| name           | Text   | 変数名                                                  |
| type           | number | 変数の型(Value type コマンドで返される値)       |
| arrayDimension | number | 配列のみ: 1 は1次元配列を、2 は2次元配列を意味します       |
| code           | Object | プロセス変数とインタープロセス変数のみ: 変数がどこで定義されたかの詳細 |

###### コードオブジェクト

`methods.code` および `errors.code` 内の`code` プロパティは、以下のプロパティを持ったオブジェクトです:

| **プロパティ**      | **型**                   | **説明**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | Text                    | "projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the *Execute on Server attribute*), "executeFormula" (when executing a formula via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) or evaluation of a formula in a 4D Write Pro document), "class", "classFunction", "formObjectExpression" (for errors occuring in expressions associated to form objects) |
| path           | Text                    | Method path (same format as [METHOD OPEN PATH](../commands-legacy/method-open-path.md))                                                                                                                                                                                                                                                                                                                                                                                                                |
| file           | 4D.File | メソッドファイル                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                |                         | **以下は`type` プロパティの値に応じて返されます:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| methodName     | Text                    | プロジェクトメソッド                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| table          | Number                  | テーブル番号(トリガ、テーブルフォームメソッドまたはテーブルフォームオブジェクトメソッドに対して返されます)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| formName       | Text                    | フォーム名(フォームメソッドに対して返されます)                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| objectName     | Text                    | フォームオブジェクト名(オブジェクトメソッドに対して返されます)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| propertyName   | Text                    | フォームオブジェクトプロパティ名(フォームオブジェクトの式に対して返されます)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| className      | Text                    | クラス名                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| functionName   | Text                    | クラス関数名                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| databaseMethod | Number                  | データベースメソッドのインデックス                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### 例題

シンタックスチェックのみを実行したいので、空のコレクションをtargets 引数に渡す場合を考えます:

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection // 空のコレクションを渡してシンタックスチェックを行う
 $status:=Compile project($options)
```

ストラクチャー設定のコンパイラオプションのみを使用してカレントのプロジェクトをコンパイルする:

```4d
 var $status : Object
 $status:=Compile project
```

Silicon Mac 上にて、カレントのプロジェクトをARM 用にのみコンパイルする:

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

カレントのプロジェクト以外のプロジェクトをコンパイルする:

```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

プロジェクトをコンパイルし、そのコンポーネントを宣言する:

```4d
 var $status : Object
 var $component : 4D.File
 var $options:={}
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

プロジェクトのコンパイル時に、518.1 および 518.2 の警告を無効化する:

```4d
var $options:={}
$options.warnings:=[]$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

#### 参照

[BUILD APPLICATION](../commands-legacy/build-application.md)
