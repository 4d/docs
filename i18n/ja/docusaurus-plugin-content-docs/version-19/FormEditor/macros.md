---
id: macros
title: フォームエディターマクロ
---


4D のフォームエディターはマクロをサポートしています。 1つ以上のアクションを実行するための指示をマクロと呼びます。 呼び出されると、マクロは登録された指示を実行し、自動的に指定のアクションをおこないます。

たとえば、定期レポートに特定のフォーマットが指定されている場合 (例: テキストによってフォントカラーが赤や緑であるなど)、マクロを作成してフォントカラーの設定を自動でおこなうことができます。 4Dフォームエディターのマクロでは、次のことがおこなえます:

* 4Dコードを作成・実行する
* ダイアログを表示する
* オブジェクトを選択する
* フォームやフォームオブジェクトおよびそれらのプロパティを追加・編集・削除する
* プロジェクトファイルを編集する (更新・削除)

フォームエディター用のカスタム機能を定義するため、マクロコードは [クラス関数](Concepts/classes.md) と [JSON のフォームオブジェクトプロパティ](FormObjects/properties_Reference.md) を使用できます。

ホストプロジェクトおよび、プロジェクト内のコンポーネントにてマクロを定義することができます。 通常は開発用のコンポーネントにマクロをインストールして使用します。

マクロが呼び出されると、指定されている既存の動作はマクロによってオーバーライドされます。

## 例題

フォームの左上に "Hello World" アラートボタンを追加するマクロを作成します。

1. プロジェクトの `Sources` フォルダー内に配置された `formMacros.json` ファイルに、次のように書きます:

```js
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. 次に、`AddButton` という名前の 4Dクラスを作成します。

3. `AddButton` クラスに次の関数を定義します:

```4d
Function onInvoke($editor : Object)->$result : Object

 var $btnHello : Object

 // "Hello" ボタンを作成します
 $btnHello:=New object("type"; "button"; \
 "text"; "Hello World!"; \
 "method"; New object("source"; "ALERT(\"Hello World!\")"); \
 "events"; New collection("onClick"); \
 "width"; 120; \
 "height"; 20; \
 "top"; 0; \
 "left"; 0)  

 // 現在のページにボタンを追加します
 $editor.editor.currentPage.objects.btnHello:=$btnHello  

 // フォームエディター上で新規作成したボタンを選択します
 $editor.editor.currentSelection.clear() //unselect elements
 $editor.editor.currentSelection.push("btnHello")    

 // 4D に変更内容を通知します
 $result:=New object("currentSelection"; $editor.editor.currentSelection;\  
  "currentPage"; $editor.editor.currentPage)
```

マクロを呼び出します: ![](../assets/en/FormEditor/macroex1.png) ![](../assets/en/FormEditor/macroex2.png)

## フォームエディターでマクロを呼び出す

4Dプロジェクトにマクロが定義されていると、フォームエディターのコンテキストメニューを使ってマクロを呼び出すことができます:

![](../assets/en/FormEditor/macroSelect.png)

このメニューは `formMacros.json` [マクロ定義ファイル](#マクロファイルの場所) をもとに作成されています。 マクロメニュー項目は ABC順に表示されます。

このメニューは、フォームエディター内で右クリックにより開くことができます。 選択オブジェクトがある状態や、フォームオブジェクトの上でマクロを呼び出した場合は、それらのオブジェクト名がマクロの [`onInvoke`](#oninvoke) 関数の `$editor.currentSelection` や `$editor.target` パラメーターに受け渡されます。

1つのマクロによって複数の処理を実行することができます。 マクロで実行した処理は、フォームエディターの **取り消し** 機能でもとに戻すことができます。

## マクロファイルの場所

4Dフォームエディターマクロは、プロジェクトあるいはコンポーネントごとに 1つの JSONファイルによって定義されます: `FormMacros.json`。

このファイルは、ホストまたはコンポーネントプロジェクトの **Project** > **Sources** フィルダーに配置しなければなりません:

![](../assets/en/FormEditor/macroStructure.png)

## マクロの宣言

`formMacros.json` ファイルの構造は次の通りです:

```js
{
    "macros": {
            <macroName>: {
                "class": <className>,
                <customProperty> : <value>
        }
    }
}
```

JSONファイルの説明です:

| 属性     |                     |                          | 型      | 説明                         |
| ------ | ------------------- | ------------------------ | ------ | -------------------------- |
| macros |                     |                          | object | 定義されたマクロのリスト               |
|        | `<macroName>` |                          | object | マクロ定義                      |
|        |                     | class                    | string | マクロクラス名                    |
|        |                     | `<customProperty>` | any    | (任意) コンストラクターによって取得するカスタム値 |

カスタムプロパティはマクロの [constructor](#class-constructor) 関数に受け渡されます。

### 例題

```js
{
   "macros": {
     "Open Macros file": {
       "class": "OpenMacro"
     },
     "Align to Right on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "right"
     },
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

## マクロのインスタンス化

プロジェクトおよびコンポーネントにおいてインスタンス化するマクロは、それぞれ [4Dクラス](Concepts/classes.md) として宣言する必要があります。

クラスの名称は、`formMacros.json` ファイルで [class](#マクロの宣言) 属性に定義した名前と同一でなくてはなりません。

マクロは、アプリケーションの起動時にインスタンス化されます。 そのため、関数の追加やパラメーターの編集など、マクロクラスになんらかの変更を加えた場合には、それらを反映するにはアプリケーションを再起動する必要があります。

## マクロ関数

マクロクラスは、1つの `Class constructor` のほかに、`onInvoke()` および `onError()` という 2つの関数を持つことができます。

### Class constructor

#### Class constructor($macro : Object)

| 引数     | 型      | 説明                                 |
| ------ | ------ | ---------------------------------- |
| $macro | Object | `formMacros.json` ファイルのマクロ宣言オブジェクト |

[Class constructor](Concepts/classes.md#class-constructor) 関数が定義されている場合、マクロはそれによってインスタンス化されます。

アプリケーションの起動時にクラスがインスタンス化される際に、このコンストラクターが呼び出されます。

[マクロの宣言](#マクロの宣言) に追加したカスタムプロパティは、クラスコンストラクターが引数として受け取ります。

#### 例題

`formMacros.json` ファイルに次のようなマクロ宣言をした場合:

```js
{
   "macros": {
     "最後に選択したオブジェクトを基準に左揃え": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

以下のように書くことができます:

```4d  
// クラス "AlignOnTarget"
Class constructor($macro : Object)
    This.myParameter:=$macro.myParam // left    ...
```

### onInvoke()

#### onInvoke($editor : Object) -> $result : Object

| 引数      | 型      | 説明                                            |
| ------- | ------ | --------------------------------------------- |
| $editor | Object | フォームプロパティを格納する Form Editor Macro Proxy オブジェクト |
| $result | Object | マクロによって変更されたフォームプロパティ (任意)                    |

マクロが呼び出されるたびに、`onInvoke` 関数が自動的に実行されます。

呼び出しの際、関数は `$editor.editor` プロパティに、フォームの全要素とそれらの現在値のコピーを受け取ります。 つまり、これらのプロパティに対して、任意の処理を実行することができます。

マクロによってオブジェクトを変更・追加・削除した場合、操作を反映させるには最後に結果のプロパティを `$result` に返します。 返されたプロパティは解析され、フォームに対して変更が適用されます。 戻り値に含まれるプロパティが少ないほど、この処理にかかる時間も削減されます。

*$editor* 引数にて渡されるプロパティは次の通りです:

| プロパティ                            | 型          | 説明                               |
| -------------------------------- | ---------- | -------------------------------- |
| $editor.editor.form              | Object     | フォーム全体                           |
| $editor.editor.file              | File       | フォームファイルの Fileオブジェクト             |
| $editor.editor.name              | Text       | フォームの名称                          |
| $editor.editor.table             | number     | フォームのテーブル番号。プロジェクトフォームの場合は 0。    |
| $editor.editor.currentPageNumber | number     | 現在のページの番号                        |
| $editor.editor.currentPage       | Object     | 現在のページ (フォームオブジェクトおよび入力順序を格納)    |
| $editor.editor.currentSelection  | Collection | 選択されているオブジェクトの名称のコレクション          |
| $editor.editor.formProperties    | Object     | カレントフォームのプロパティ                   |
| $editor.editor.target            | string     | マクロ呼び出し時にマウスカーソルが置かれているオブジェクトの名称 |

マクロによる変更をフォームに反映させたい場合に、`$result` オブジェクトに渡せるプロパティの一覧です。 いずれのプロパティも任意です:

| プロパティ             | 型          | 説明                                |
| ----------------- | ---------- | --------------------------------- |
| currentPage       | Object     | マクロによって変更されたオブジェクトを含む currentPage |
| currentSelection  | Collection | マクロによって変更された currentSelection     |
| formProperties    | Object     | マクロによって変更された formProperties       |
| editor.groups     | Object     | マクロによって変更されたグループ情報                |
| editor.views      | Object     | マクロによって変更されたビュー情報                 |
| editor.activeView | Text       | 有効なビュー名                           |

たとえば、currentPage と editor.groups の内容が変わった場合には、戻り値を次のように設定します:

```4d
 $result:=New object("currentPage"; $editor.editor.currentPage ; \ 
   "editor"; New object("groups"; $editor.editor.form.editor.groups))

```

#### `method` 属性

フォームオブジェクトの `method` 属性を操作する場合、属性値は2通りの方法で定義できます:

* [メソッドファイル名あるいはパスを指定する文字列](FormObjects/properties_Action.md#メソッド) の使用

* 次の構造を持つオブジェクトの使用:

| プロパティ | 型 | 説明 |
| ----- | - | -- |
|       |   |    |
 source|Text|method code|

後者の場合、4D は "objectMethods" フォルダー内に当該オブジェクト名を冠したファイルを作成し、`source` 属性に指定したメソッドコードを格納します。 この機能はマクロコードの場合にのみ有効です。

#### `currentPage.objects` の `$4dId` プロパティ

`$4dId` プロパティは、現在のページにある各オブジェクトについて一意のIDを定義します。 このキーは`$result.currentPage` の変更を反映させるのに使用されます:

* フォーム上および `$result` 内のオブジェクトの両方で `$4dId` キーが存在しない場合、そのオブジェクトは作成されます。
* フォーム上で存在する `$4dId` キーが、`$result` 内には存在しない場合、当該オブジェクトは削除されます。
* フォーム上および `$result` 内のオブジェクトの両方で `$4dId` キーが存在する場合、そのオブジェクトは変更されます。

#### 例題

選択されているオブジェクトに対して、フォントカラーを赤に、フォントスタイルをイタリックに変更するマクロ関数を定義します。

```4d
Function onInvoke($editor : Object)->$result : Object
 var $name : Text

 If ($editor.editor.currentSelection.length>0)  
  // 選択されている各オブジェクトの stroke 属性を red に、style 属性を italic に設定します
  For each ($name; $editor.editor.currentSelection)
   $editor.editor.currentPage.objects[$name].stroke:="red"
   $editor.editor.currentPage.objects[$name].fontStyle:="italic"

  End for each 

 Else 
  ALERT("フォームオブジェクトを選択してください。")
 End if 

 // 4Dに変更を通知します
 $result:=New object("currentPage"; $editor.editor.currentPage)
```

### onError()

#### onError($editor : Object; $resultMacro : Object ; $error : Collection)

| 引数           |                       | 型          | 説明                                   |
| ------------ | --------------------- | ---------- | ------------------------------------ |
| $editor      |                       | Object     | [onInvoke](#oninvoke) に渡されたオブジェクト    |
| $resultMacro |                       | Object     | [onInvoke](#oninvoke) によって返されたオブジェクト |
| $error       |                       | Collection | エラースタック                              |
|              | [].errCode            | Number     | エラーコード                               |
|              | [].message            | Text       | エラーの詳細                               |
|              | [].componentSignature | Text       | 内部コンポーネントのシグネチャー                     |

マクロの実行時にエラーが発生した場合、`onError` 関数が実行されます。

マクロの実行時に発生したエラーが、マクロの取り消しを不可能にする内容の場合、マクロは実行されません。 たとえば次のような場合が該当します:

* 読み取り専用ファイルのスクリプトを変更・削除しようとしたとき
* 同じ内部ID を持つオブジェクトを複数作成しようとしたとき

#### 例題

マクロクラス定義に、次のような汎用的なエラーコードを書くことができます:

```4d
Function onError($editor : Object; $resultMacro : Object; $error : Collection)
 var $obj : Object
 var $txt : Text
 $txt:=""

 For each ($obj; $error)
  $txt:=$txt+$obj.message+" \n"
 End for each 

 ALERT($txt)
```
