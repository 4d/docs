---
id: form-load
title: FORM LOAD
displayed_sidebar: docs
---

<!--REF #_command_.FORM LOAD.Syntax-->**FORM LOAD** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.FORM LOAD.Params-->

| 引数       | 型            |   | 説明                                                                                                                                                                      |
| -------- | ------------ | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable   | テーブル         | → | ロードするテーブルフォーム(省略時はプロジェクトフォームをロード)                                                                                                                    |
| form     | Text, Object | → | (プロジェクトまたはテーブル)フォーム名(文字列)、&#xA;あるいはフォームを定義した.jsonファイルへのPOSIXパス(文字列)、&#xA;あるいは開くフォームを定義したオブジェクト |
| formData | Object       | → | フォームに関連づけるデータ                                                                                                                                                           |
| \*       | 演算子          | → | 指定時、コマンドはコンポーネントから実行した場合にホストのデータベースコマンドが適応されます(それ以外の場合は無視されます)。                                                                                      |

<!-- END REF-->

*このコマンドはスレッドセーフではないので、プリエンプティブなコードでは使用できません。*

#### 説明

<!--REF #_command_.FORM LOAD.Summary-->The **FORM LOAD** command is used to load the *form* in memory in the current process along with *formData* (optional) in order to print its data or parse its contents.<!-- END REF-->**FORM LOAD** コマンドを使用してデータ印刷・コンテンツ解析のために *form* 引数で指定したフォームをカレントプロセスにおいて*formData* 引数のデータ(オプション)とともにメモリーにロードします。 1つのプロセスにつきカレントフォームは1つしか指定できません。

*form* 引数には、以下のいづれかを渡すことができます:

- フォーム名
- 使用するフォームの詳細を格納している有効な.josn ファイルへのパス(POSIX シンタックス)
- フォームの詳細を格納しているオブジェクト

コマンドがコンポーネントから呼び出された場合、デフォルトではコマンドはコンポーネントのフォームをロードします。 *\** 引数を渡した場合、メソッドはホストデータベースのフォームをロードします。

##### formData

オプションとして、*form* 引数のフォームに、*formData* オブジェクトを使用してパラメーターを渡すことができます。あるいは、[フォームにユーザークラスを割り当てる](../FormEditor/properties_FormProperties.md#form-class) ことをしていた場合に4D によって自動的にインスタンス化されるフォームクラスオブジェクトを使うこともできます。 form data オブジェクト内のプロパティであればどれも[Form](form.md) コマンドを使用することでフォームコンテキストから利用可能になります。
formData オブジェクトは、[`On Load` form event](../Events/onLoad.md)フォームイベント内で利用可能です。

form data オブジェクトについての詳細な情報については、[`DIALOG`](dialog.md) コマンドを参照してください。

##### データの印刷

このコマンドを実行するためには、[OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) コマンドを使って印刷ジョブを事前に開いておく必要があります。 [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) は [FORM UNLOAD](../commands-legacy/form-unload.md) を暗示的に呼び出すため、このコンテキストでは改めて**FORM LOAD** コマンドを使用する必要があります。 ロードされた*form* はカレントの印刷フォームとなります。 [Print object](../commands-legacy/print-object.md) コマンドを含む、すべてのオブジェクト管理コマンドはこのフォームに対して動作します。

**FORM LOAD** コマンドを呼び出す前に、別の印刷フォームがロードされていた場合には、そのフォームは閉じられ、*form* に置き換えられます。 ひとつの印刷セッション内で複数のプロジェクトフォームを開いたり閉じたりすることができます。 **FORM LOAD** で印刷フォームを変更してもページブレークは生成されません。 ページブレークは開発者が別途指定する必要があります。

プロジェクトフォーム (またはフォームのオブジェクトメソッド) を開く際には、[`On Load` form event](../Events/onLoad.md) フォームイベントのみが実行されます。 他のフォームイベントは無視されます。 印刷の終わりには[`On Unload` form event](../Events/onUnload.md) フォームイベントが実行されます。

フォームのグラフィックな一貫性を保持するために、プラットフォームにかかわらず"印刷"アピアランスプロパティを適用することをお勧めします。

[CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) コマンドが呼び出されると、カレント印刷フォームは自動で閉じられます。

##### フォームコンテンツの解析

データ解析のためにスクリーン外にフォームをロードするには、 印刷ジョブ外のコンテキストで**FORM LOAD** を呼び出します。 この場合、フォームイベントは実行されません。

**FORM LOAD** を[FORM GET OBJECTS](../commands-legacy/form-get-objects.md) や[OBJECT Get type](../commands-legacy/object-get-type.md) コマンドと併せて使用して、フォームコンテンツを任意に処理することができます。 その後、フォームをメモリから解放するために[FORM UNLOAD](../commands-legacy/form-unload.md) コマンドを呼び出す必要があります。

いずれの場合においても、スクリーン上のフォームはロードされたままであるため(**FORM LOAD** コマンドに影響されない)、[FORM UNLOAD](../commands-legacy/form-unload.md)コマンドを呼び出した後にこれらをリロードする必要はありません。

**注:** メモリオーバーフローのリスクを回避するため、スクリーン外でフォームを使用した場合には[FORM UNLOAD](../commands-legacy/form-unload.md) を必ずコールしてください。

#### 例題 1

印刷ジョブにプロジェクトフォームを呼び出す場合:

```4d
 OPEN PRINTING JOB
 FORM LOAD("print_form")
  // イベントとオブジェクトメソッドの実行
```

#### 例題 2

印刷ジョブにテーブルフォームを呼び出す場合:

```4d
 OPEN PRINTING JOB
 FORM LOAD([People];"print_form")
  // イベントとオブジェクトメソッドの実行
```

#### 例題 3

フォームの内容を解析してテキスト入力エリアに何らかの処理をする場合:

```4d
 FORM LOAD([People];"my_form")
  // イベントやメソッドを実行することなくフォームを選択
 FORM GET OBJECTS(arrObjNames;arrObjPtrs;arrPages;*)
 For($i;1;Size of array(arrObjNames))
    If(OBJECT Get type(*;arrObjNames{$i})=Object type text input)
  //… 処理
    End if
 End for
 FORM UNLOAD // フォームをunloadするのを忘れないこと
```

#### 例題 4

以下の例では、JSON ファイルで定義されたフォーム上にあるオブジェクトの数を返します:

```4d
 ARRAY TEXT(objectsArray;0) // フォームのオブジェクトを並べ替えて入れる配列
 ARRAY POINTER(variablesArray;0)
 ARRAY INTEGER(pagesArray;0)
 
 FORM LOAD("/RESOURCES/OutputForm.json") // フォームを読み込む
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
 
 ALERT("The form contains "+String(size of array(objectsArray))+" objects") // オブジェクトの数を返す
```

結果は以下のように表示されます:

![](../assets/en/commands/pict3688480.en.png)

#### 例題 5

リストボックスを格納しているフォームを印刷したい場合を考えます。 *on load* イベント中に、リストボックスのコンテンツを変更したいとします。

1\. 印刷メソッド内に、以下のように書きます:

```4d
 var $formData : Object
 var $over : Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:=New object
 $formData.LBcollection:=New collection()
 ... // コレクションにデータを入れます
 
 FORM LOAD("GlobalForm";$formData) // $formData 経由でコレクションをフォームに渡します
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // この"LB" はリストボックスで、Form.LBcollectionをデータソースとして持つとします。
    LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)
    If(Not($over))
       PAGE BREAK
    End if
 Until($over)
 FORM UNLOAD
 CLOSE PRINTING JOB
```

2\. フォームメソッド内には以下のように書きます:

```4d
 var $o : Object
 Case of
    :(Form event code=On Load)
       For each($o;Form.LBcollection) // ここでForm.LBcollection は利用可能です
          $o.reference:=Uppercase($o.reference)
       End for each
 End case
```

#### 参照

[Current form name](../commands-legacy/current-form-name.md)\
[FORM UNLOAD](../commands-legacy/form-unload.md)\
[LISTBOX GET OBJECTS](../commands-legacy/listbox-get-objects.md)\
[OBJECT Get type](../commands-legacy/object-get-type.md)\
[Print object](../commands-legacy/print-object.md)
