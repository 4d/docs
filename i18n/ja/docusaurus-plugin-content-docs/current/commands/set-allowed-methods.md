---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->

<!--REF #_command_.SET ALLOWED METHODS.Params-->

| 引数           | 型      |   | 説明       |
| ------------ | ------ | - | -------- |
| methodsArray | テキスト配列 | → | メソッド名の配列 |

<!-- END REF-->

*このコマンドはスレッドセーフではないので、プリエンプティブなコードでは使用できません。*

#### 説明

<!--REF #_command_.SET ALLOWED METHODS.Summary-->The **SET ALLOWED METHODS** command designates the project methods that can be entered via the application.<!-- END REF-->

4Dには、以下のコンテキストからの呼び出し可能なプロジェクトメソッドをフィルターするセキュリティ機構が含まれています:

- フォーミュラーエディター - 許可されたメソッドはデフォルトコマンドの一覧の最後に表示され、フォーミュラー内で使用することができます(*フォーミュラエディター* の章を参照してください)。
- ラベルエディター - 許可されたメソッドがコンポーネントとも共有されていた場合、メソッドは**許可**メニュー内に表示されます(*ラベルエディターの詳細* の章を参照してください)。
- [ST INSERT EXPRESSION](../commands-legacy/st-insert-expression.md) コマンドを通してスタイル付きテキストエリアまたは4D Write Pro ドキュメントに挿入されたフォーミュラ - 許可されていないメソッドは自動的に排除されます。
- 4D View Pro ドキュメント - デフォルトで、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドがセッション中に一度も実行されていない場合、4D View Pro フォーミュラーは**SET ALLOWED METHODS** で許可されたメソッドは使用できます。 ですが、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドの使用が推奨されます。 [許可されたメソッドの宣言](../ViewPro/formulas.md#許可されたメソッドの宣言) を参照してください。 ですが、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドの使用が推奨されます。 [許可されたメソッドの宣言](../ViewPro/formulas.md#許可されたメソッドの宣言) を参照してください。 ですが、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドの使用が推奨されます。 [許可されたメソッドの宣言](../ViewPro/formulas.md#許可されたメソッドの宣言) を参照してください。 ですが、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドの使用が推奨されます。 [許可されたメソッドの宣言](../ViewPro/formulas.md#許可されたメソッドの宣言) を参照してください。 ですが、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドの使用が推奨されます。 [許可されたメソッドの宣言](../ViewPro/formulas.md#許可されたメソッドの宣言) を参照してください。 ですが、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドの使用が推奨されます。 [許可されたメソッドの宣言](../ViewPro/formulas.md#許可されたメソッドの宣言) を参照してください。 ですが、[`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) コマンドの使用が推奨されます。 [許可されたメソッドの宣言](../ViewPro/formulas.md#許可されたメソッドの宣言) を参照してください。

デフォルトでは、**SET ALLOWED METHODS** コマンドを使用しない場合、入力可能なメソッドはありません (許可されていないメソッドを式の中で使用するとエラーが発生します)。

*methodsArray* 引数には、許可したいメソッドの一覧を格納した名前の配列を渡します。 この配列は事前に定義しておかなければなりません。 この配列は事前に定義しておかなければなりません。 この配列は事前に定義しておかなければなりません。 この配列は事前に定義しておかなければなりません。 この配列は事前に定義しておかなければなりません。 この配列は事前に定義しておかなければなりません。 この配列は事前に定義しておかなければなりません。

メソッド名にワイルドカード記号 (@) を使用し、許可されるメソッドグループを複数定義することができます。

デフォルトとして許可されていない4Dコマンドやプラグインコマンドをユーザーが呼び出せるようにしたい場合、これらのコマンドを取り扱う特定のメソッドを使用しなくてはなりません。

**注**: [データベース設定の"セキュリティ"ページのオプション](../settings/security.md#オプション) によって、すべてのユーザーまたはDesignerとAdministratorに対し、フォーミュラーでのフィルタリングアクセスを無効にすることができるようになりました。 "すべてのユーザーを制限する"オプションが チェックされていると、**SET ALLOWED METHODS** コマンドは効果がありません。 "すべてのユーザーを制限する"オプションが チェックされていると、**SET ALLOWED METHODS** コマンドは効果がありません。 "すべてのユーザーを制限する"オプションが チェックされていると、**SET ALLOWED METHODS** コマンドは効果がありません。 "すべてのユーザーを制限する"オプションが チェックされていると、**SET ALLOWED METHODS** コマンドは効果がありません。 "すべてのユーザーを制限する"オプションが チェックされていると、**SET ALLOWED METHODS** コマンドは効果がありません。 "すべてのユーザーを制限する"オプションが チェックされていると、**SET ALLOWED METHODS** コマンドは効果がありません。 "すべてのユーザーを制限する"オプションが チェックされていると、**SET ALLOWED METHODS** コマンドは効果がありません。

:::warning

このコマンドはメソッドの**入力** を制限するもので、**実行** を制限するものではありません。 これはアプリケーション外で作成されたフォーミュラの実行は管理しません。

:::

#### 例題

この例は、名前が“formula”で始まるすべてのメソッドと、“Total\_general” メソッドを、保護されたコンテキスト下においてユーザーによって入力できるようにします:

```4d
 ARRAY TEXT(methodsArray;2)
 methodsArray{1}:="formula@"
 methodsArray{2}:="Total_general"
 SET ALLOWED METHODS(methodsArray)
```

#### 参照

[EDIT FORMULA](../commands-legacy/edit-formula.md)\
[GET ALLOWED METHODS](../commands-legacy/get-allowed-methods.md)
