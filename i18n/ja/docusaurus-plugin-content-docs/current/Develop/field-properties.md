---
id: structure-fields
title: フィールド
---

<!-- INCLUDE my.section.id.Desc -->

### Class

![](../assets/en/Develop/inspector-class.png)

このプロパティは**オブジェクト**型のフィールドにおいてのみ利用可能です(プロジェクトモードのみ)。これを使用すると**クラス型のオブジェクトフィールド**を定義することができ、これによってコード保管、シンタックスチェック、そしてオブジェクトフィールドに絡んだコードを打ち込んでいる際のランタイム評価などを改善することができます。

ここには有効なクラス名であればなんでも入力することができます。これには以下のものも含まれます:

- ユーザークラス(例: `cs.MyClass`)
- ビルトイン4D クラス(例: `4D.File`、`4D.Folder`)
- [公開された](../Extensions/develop-components.md#クラスの共有) コンポーネントで定義されたクラス(例: `cs.MyComponent.MyClass`)

無効なクラス名を入力した場合、警告がトリガーされ、入力が拒否されます。

:::note

[ORDA データモデルクラス](../ORDA/ordaClasses.md)、[ファイルハンドラー](../API/FileHandleClass.md)、[Web サーバー](../API/WebServerClass.md)...などの[**ストリーム不可のクラス**](../Concepts/dt_object.md#ストリーミングサポート)はオブジェクトフィールドに代入することはできません。

:::

コード内において、値をクラス型のオブジェクトフィールドに代入する場合、4D はその値が宣言されたクラスに所属しているかどうかを検証します。クラスに所属していない場合、あるいはオブジェクトがどのクラスにも属していない場合、エラーがトリガーされます。不明な属性へのアクセスもまたシンタックスエラーを発生させます。

ランタイムにおいて関連づけられたクラス名を取得するためには、[`classID`](../API/DataClassClass.md#attributename) プロパティを使用してください。例: `ds.MyTable.MyField.classID` 。

:::tip 関連したblog 記事

[Stricter class-based typing for objects](https://blog.4d.com/stricter-class-based-typing-for-objects/)

:::

### `4D.Vector` class

If you assign `4D.Vector` as the class of an Object type field, you define a **vector field**. Such fields store embessings and can be used to query data using AI features. See the [`4D.Vector` class](../API/VectorClass.md) documentation to see how to query with vectors.

Note that the [**4D Embedding Studio** component](corner.4d.com/component/4d-embedding-studio) can help you configuring and updating your 4D.Vector fields.

When you assign `4D.Vector` as the class of an Object type field, a specific icon is displayed as field type in the Structure editor: ![](../assets/en/Develop/ai-icon.png)

:::tip 関連したblog 記事

[Vector Indexing in 4D: Faster Similarity Search for 4D.Vector Fields](https://blog.4d.com/vector-indexing-in-4d-faster-similarity-search-for-4d-vector-fields)

:::

