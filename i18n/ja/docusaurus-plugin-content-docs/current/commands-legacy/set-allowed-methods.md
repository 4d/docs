---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->
<!--REF #_command_.SET ALLOWED METHODS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| methodsArray | Text array | &#x1F852; | メソッド名配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET ALLOWED METHODS.Summary-->SET ALLOWED METHODS コマンドを使用して、アプリケーションから直接呼び出すことができるメソッドを指定することができます。<!-- END REF-->

4Dには、以下のコンテキストからの呼び出し可能なプロジェクトメソッドをフィルターするセキュリティ機構が含まれています:

* フォーミュラーエディター - 許可されたメソッドはデフォルトコマンドの一覧の最後に表示され、フォーミュラー内で使用することができます(*フォーミュラエディター*を参照してください)。
* ラベルエディター - 許可されたメソッドがコンポーネントとも共有されていた場合、メソッドは**許可**メニュー内に表示されます(*ラベルエディターの詳細*を参照してください)。
* [ST INSERT EXPRESSION](st-insert-expression.md) コマンドを通してスタイル付きテキストエリアまたは4D Write Pro ドキュメントに挿入されたフォーミュラ - 許可されていないメソッドは自動的に排除されます。
* 4D View Pro ドキュメント - *VP SET ALLOWED METHODS* コマンドがセッション中に一度も実行されていない場合、4D View Pro フォーミュラーは **SET ALLOWED METHODS** で許可されたメソッドを使用できます。ですが、*VP SET ALLOWED METHODS* コマンドの使用が推奨されます(*プロジェクトメソッド参照*参照)。

デフォルトでは、SET ALLOWED METHODS コマンドを使用しない場合、呼び出し可能なメソッドはありません (許可されていないメソッドを式の中で使用するとエラーが発生します)。

フォーミュラーエディターに提示するメソッドリストを格納した配列の名前を*methodsArray* 引数に渡します。この配列は事前に定義しておかなければなりません。

メソッド名にワイルドカード記号（@）を使用し、許可されるメソッドグループを複数定義することができます。

デフォルトとして許可されていない4Dコマンドやプラグインコマンドをユーザーが呼び出せるようにしたい場合、これらのコマンドを取り扱う特定のメソッドを使用しなくてはなりません。

**注:** データベース設定の"セキュリティ"ページのオプションによって、すべてのユーザーまたはDesignerとAdministratorに対し、フォーミュラーでのフィルタリングアクセスを無効にすることができるようになりました()。"すべてのユーザーを制限する"オプションが チェックされていると、 SET ALLOWED METHODS コマンドは効果がありません。

#### 例題 

この例は、名前が“formula”で始まるすべてのメソッドと、“Total\_general”メソッドを、保護されたコンテキスト下においてユーザーによって実行できるようにします: 

```4d
 ARRAY TEXT(methodsArray;2)
 methodsArray{1}:="formula@"
 methodsArray{2}:="Total_general"
 SET ALLOWED METHODS(methodsArray)
```

#### 参照 

[EDIT FORMULA](edit-formula.md)  
[GET ALLOWED METHODS](get-allowed-methods.md)  