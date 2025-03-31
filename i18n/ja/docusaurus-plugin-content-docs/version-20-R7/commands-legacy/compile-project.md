---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->
<!--REF #_command_.Compile project.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| projectFile | 4D.File | &#8594;  | コンパイルするプロジェクトの.4DProject ファイル |
| options | Object | &#8594;  | コンパイルオプションを指定するオブジェクト |
| 戻り値 | Object | &#8592; | コンパイルのステータスの情報を格納したオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Compile project.Summary-->**Compile project** は、カレントのホストプロジェクト、または*projectFile* 引数で指定したプロジェクトをコンパイルします。<!-- END REF-->コンパイルについてのより詳細な情報については、*Compilation page on developer.4d.com* を参照してください。

デフォルトで、このコマンドはストラクチャー設定で定義されているコンパイラオプションを使用します。任意の*options* 引数を渡すことで、それらを上書きすることができます。以下のシンタックスがサポートされています:

* **Compile project()**: 現在開かれているプロジェクトを、ストラクチャー設定で定義されているオプションを使用してコンパイルします。
* **Compile project** (*options*): 現在開かれているプロジェクトをコンパイルします。*options* 引数で定義されたオプションでストラクチャー設定を上書きします。
* **Compile project** (*projectFile*): *projectFile* 引数で指定された4DProject ファイルを、ストラクチャー設定で定義されているオプションを使用してコンパイルします。
* **Compile project** (*projectFile*; *options*): 引数で指定された4DProject ファイルを、*options* 引数で定義されたオプションでストラクチャー設定を上書きします。

**注:** このコマンドを使用してバイナリーデータベースをコンパイルすることはできません。

コンパイラウィンドウとは異なり、このコマンドではコンパイルするコンポーネントを明示的に指定する必要があります。**Compile project** でプロジェクトをコンパイルする場合、*options* 引数の*components* プロパティを使用してそのコンポーネントを宣言する必要があります。なお、そのコンポーネントは既にコンパイルされている必要があるという点に注意してください(バイナリーコンポーネントはサポートされません)。

コンパイルされたコードは、*options* 引数の*targets* プロパティでの指定によって、DerivedData または Libraries フォルダに格納されています。.4dz ファイルを作成したい場合、コンパイルされたプロジェクトを手動でZIP圧縮するか、*プロジェクトパッケージのビルド* 機能を使用する必要があります。

プロパティに空のコレクションを渡した場合、**Compile project** はコンパイルせずにシンタックスチェックを実行します。

コンパイルエラーがもしあれば、*errors* コレクション内にオブジェクトとして返されます。

**注:** 他のコンパイルの実行中に、このコマンドを呼び出すことはできません(例えば、コンパイルウィンドウからローンチしたコンパイルが実行中である場合など)。

##### options 引数 

*options* 引数はオブジェクト型です。利用可能なコンパイルオプションは以下の通りです。

| **プロパティ**              | **型**            | **詳細**                                                                                                                                                         |
| ---------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components             | コレクション           | 依存したコンポーネントへの4D.File オブジェクトのコレクション(コンポーネントは既にコンパイルされている必要があります)。                                                                                               |
| defaultTypeForButtons  | 整数               | 取り得る値: Is real または Is longint                                                                                                                                  |
| defaultTypeForNumerics | 整数               | 取り得る値: Is real または Is longint                                                                                                                                  |
| generateSymbols        | ブール              | 返された.symbol オブジェクト内にsymbol 情報を生成するためにはTrue                                                                                                                     |
| generateSyntaxFile     | ブール              | プロジェクトの\\Resources\\en.lproj フォルダに *コード補完のためのシンタックスファイル* を生成するためにはTrue                                                                                         |
| generateTypingMethods  | 文字列              | 型指定メソッドを生成する際にリセット(Reset)するか追加(append)するかを選択します。値が"append"だった場合、既存の変数宣言は変更されません(コンパイラウィンドウの振る舞い)。値が"reset" だった場合、既存の変数宣言は事前に削除されます。                            |
| plugins                | 4D.Folder オブジェクト | [カレントのプロジェクトのPlugins フォルダ](../Project/architecture.md#plugins) ではなく、使用したいプラグインのフォルダ。このプロパティは、*projectFile* シンタックスを使用した場合にのみ利用可能です。 |
| targets                | 文字列のコレクション       | 取り得る値: "x86\_64\_generic"、"arm64\_macOS\_lib"。また空のコレクションを渡すことでシンタックスチェックのみを実行させることもできます。                                                                       |
| typeInference          | 文字列              | "all": 全ての変数を定義させる "locals": ローカル変数のみ自動定義させる "none": 自動変数定義は行わない                                                                                               |
| warnings               | オブジェクトのコレクション    | 警告の有効化状態を定義します                                                                                                                                                 |
| \[\].major             | 数値               | 指定する警告のメインの番号、ドットの前                                                                                                                                            |
| \[\].minor             | 数値               | 指定する警告の2つ目の番号、ドットの後                                                                                                                                            |
| \[\].enabled           | ブール              | 警告の有効化状態                                                                                                                                                       |

##### 戻り値 

**Compile project** によって返されるオブジェクトには、最大で以下3つのプロパティが格納されています:

| **プロパティ**                                           | **型**         | **詳細**                                                           |
| --------------------------------------------------- | ------------- | ---------------------------------------------------------------- |
| success                                             | ブール           | 保存アクションが成功した場合にはTrue、それ以外の場合にはFalse                              |
| **以下は** **error または warningの場合にのみ返されます:**           |               |                                                                  |
| errors                                              | オブジェクトのコレクション | コンパイルエラーまたは警告の詳細を格納したオブジェクトのコレクション                               |
| isError                                             | ブール           | エラーであればTrue、それ以外の場合にはwarning                                     |
| message                                             | 文字列           | エラーメッセージ                                                         |
| code                                                | オブジェクト        | *コードオブジェクト*                                                      |
| line                                                | 数値            | コード内でのエラーが発生した行番号。クラスメソッドについては、ファンクション内の行番号                      |
| lineInFile                                          | 数値            | ファイル内での行番号(クラスメソッドの"line"とは異なります、また%attributes プリフィックス行を考慮に入れます) |
| ***generateSymbols オプションがTrue に設定されている場合にのみ返されます:** |               |                                                                  |
| symbol                                              | オブジェクト        |                                                                  |
| interprocessVariables                               | オブジェクト        | 全てのインタープロセス変数の一覧                                                 |
| variables                                           | コレクション        | *変数オブジェクト* のコレクション                                               |
| size                                                | 数値            |                                                                  |
| processVariables                                    | オブジェクト        | 全てのプロセス変数の一覧                                                     |
| variables                                           | コレクション        | *変数オブジェクト* のコレクション                                               |
| size                                                | 数値            |                                                                  |
| localVariables                                      | オブジェクトのコレクション | メソッドごとのローカル変数の一覧                                                 |
| code                                                | オブジェクト        | *コードオブジェクト*                                                      |
| variables                                           | コレクション        | *変数オブジェクト* のコレクション                                               |
| methods                                             | オブジェクトのコレクション | メソッドの一覧                                                          |
| code                                                | オブジェクト        | *コードオブジェクト*                                                      |
| callCount                                           | 数値            | このメソッドが呼び出された回数                                                  |
| params                                              | コレクション        | 引数タイプのコレクション(Value Type の数値コード)                                  |
| threadSafe                                          | ブール           | このメソッドがスレッドセーフであるかを示します                                          |

詳細な情報については、*Compilation tools* を参照してください。

###### 変数オブジェクト 

interprocessVariables.variables および processVariables.variables には以下の構造を持ったオブジェクトが格納されます:

| **プロパティ**      | **型**  | **詳細**                               |
| -------------- | ------ | ------------------------------------ |
| name           | 文字列    | 変数名                                  |
| type           | 数値     | 変数の型(Value type コマンドで返される型)          |
| arrayDimension | 数値     | 配列のみ: 1 は1次元配列を、2 は2次元配列を意味します       |
| code           | Object | プロセス変数とインタープロセス変数のみ: 変数がどこで定義されたかの詳細 |

###### コードオブジェクト 

**methods\[ \].code** および **errors\[ \].code** 内の*code* プロパティは、以下のプロパティを持ったオブジェクトです:

| **プロパティ**                                                 | **型**   | **詳細**                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                      | 文字列     | "projectMethod", "formObjectMethod", "formmethod","databaseMethod", "triggerMethod", "executeOnServer" (*サーバー上で実行属性* をつけてプロジェクトメソッドを呼び出した場合), "executeFormula" (フォーミュラを[PROCESS 4D TAGS](process-4d-tags.md) 経由で実行した、または4D Write Pro ドキュメント内でフォーミュラを評価した),"class", "classFunction"|
| path                                                      | 文字列     | メソッドパス([METHOD OPEN PATH](method-open-path.md) と同じフォーマット)                                                                                                                                                                                                                                                        |
| file                                                      | 4D.File | メソッドファイル                                                                                                                                                                                                                                                                                                         |
| **Returned depending on the value of the type property:** |         |                                                                                                                                                                                                                                                                                                                  |
| methodName                                                | 文字列     | プロジェクトメソッド                                                                                                                                                                                                                                                                                                       |
| table                                                     | Number  | テーブル数(トリガ、テーブルフォームメソッドまたはテーブルフォームオブジェクトメソッドに対して返されます)                                                                                                                                                                                                                                                            |
| formName                                                  | 文字列     | フォーム名(フォームメソッドに対して返されます)                                                                                                                                                                                                                                                                                         |
| objectName                                                | 文字列     | フォームオブジェクト名(オブジェクトメソッドに対して返されます)                                                                                                                                                                                                                                                                                 |
| className                                                 | 文字列     | クラス名                                                                                                                                                                                                                                                                                                             |
| functionName                                              | 文字列     | クラスのファンクション名                                                                                                                                                                                                                                                                                                     |
| databaseMethod                                            | Number  | データベースメソッドのインデックス                                                                                                                                                                                                                                                                                                |

#### 警告 

 シンタックスチェックのみを実行したい場合、targets 引数には空のコレクションを渡します:  
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection // シンタックスチェックのために空のコレクションを渡す
 $status:=Compile project($options)
```

カレントのプロジェクトを、ストラクチャー設定のコンパイルオプションだけを使用してコンパイルする場合:  
  
```4d
 var $status : Object
 $status:=Compile project
```

Silicon Mac 上において、カレントのプロジェクトをARM のみに対してコンパイルする場合:  
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

カレントプロジェクトでないプロジェクトをコンパイルする場合:  
  
```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

プロジェクトをコンパイルし、そのコンポーネントを宣言する場合:  
  
```4d
 var $options;$status : Object
 var $component : 4D.File
 $options:=New object
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

プロジェクトをコンパイルするときに、518.1と518.2の警告を無効化してコンパイルする場合:  
  
```4d
var $options:={}
$options.warnings:=[]
$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

#### 参照 

[BUILD APPLICATION](build-application.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1760 |
| スレッドセーフである | &cross; |


