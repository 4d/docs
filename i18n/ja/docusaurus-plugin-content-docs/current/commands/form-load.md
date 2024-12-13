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

Only the [`On Load` form event](../Events/onLoad.md) is executed during the opening of the project form, as well as any object methods of the form. Other form events are ignored. The [`On Unload` form event](../Events/onUnload.md) is executed at the end of printing.

To preserve the graphic consistency of forms, it is recommended to apply the "Printing" appearance property regardless of the platform.

The current printing form is automatically closed when the [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) command is called.

##### Parsing form contents

This consists in loading an off-screen form for parsing purposes. To do this, just call **FORM LOAD** outside the context of a print job. In this case, form events are not executed.

**FORM LOAD** can be used with the [FORM GET OBJECTS](../commands-legacy/form-get-objects.md) and [OBJECT Get type](../commands-legacy/object-get-type.md) commands in order to perform any type of processing on the form contents. You must then call the [FORM UNLOAD](../commands-legacy/form-unload.md) command in order to release the form from memory.

Note that in all cases, the form on screen remains loaded (it is not affected by the **FORM LOAD** command) so it is not necessary to reload it after calling [FORM UNLOAD](../commands-legacy/form-unload.md).

**Reminder:** In the off-screen context, do not forget to call [FORM UNLOAD](../commands-legacy/form-unload.md) to avoid any risk of memory overflow.

#### 例題 1

Calling a project form in a print job:

```4d
 OPEN PRINTING JOB
 FORM LOAD("print_form")
  // execution of events and object methods
```

#### 例題 2

Calling a table form in a print job:

```4d
 OPEN PRINTING JOB
 FORM LOAD([People];"print_form")
  // execution of events and object methods
```

#### 例題 3

Parsing of form contents to carry out processing on text input areas:

```4d
 FORM LOAD([People];"my_form")
  // selection of form without execution of events or methods
 FORM GET OBJECTS(arrObjNames;arrObjPtrs;arrPages;*)
 For($i;1;Size of array(arrObjNames))
    If(OBJECT Get type(*;arrObjNames{$i})=Object type text input)
  //… processing
    End if
 End for
 FORM UNLOAD //do not forget to unload the form
```

#### 例題 4

The following example returns the number of objects on a JSON form:

```4d
 ARRAY TEXT(objectsArray;0) //sort form items into arrays
 ARRAY POINTER(variablesArray;0)
 ARRAY INTEGER(pagesArray;0)
 
 FORM LOAD("/RESOURCES/OutputForm.json") //load the form
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
 
 ALERT("The form contains "+String(size of array(objectsArray))+" objects") //return the object count
```

the result shown is:

![](../assets/en/commands/pict3688480.en.png)

#### 例題 5

You want to print a form containing a list box. During the *on load* event, you want the contents of the list box to be modified.

1\. In the printing method, you write:

```4d
 var $formData : Object
 var $over : Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:=New object
 $formData.LBcollection:=New collection()
 ... //fill the collection with data
 
 FORM LOAD("GlobalForm";$formData) //store the collection in $formData
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // the datasource of this "LB" listbox is Form.LBcollection
    LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)
    If(Not($over))
       PAGE BREAK
    End if
 Until($over)
 FORM UNLOAD
 CLOSE PRINTING JOB
```

2\. In the form method, you can write:

```4d
 var $o : Object
 Case of
    :(Form event code=On Load)
       For each($o;Form.LBcollection) //LBcollection is available
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
