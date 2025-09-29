---
id: components
title: コンポーネント
---

4D のコンポーネントとは、プロジェクトにインストール可能な、1つ以上の機能を持つ 4Dコードやフォームの一式です。 たとえば、[4D SVG コンポーネント](https://github.com/4d/4D-SVG) は、SVGファイルの表示するための高度なコマンドと統合されたレンダリングエンジンを追加します。

## コンポーネントのインストール

Installation and loading of components in your 4D projects are handled through the [4D Dependency manager](../Project/components.md).

Several components are [developed by 4D](../Extensions/overview.md#components-developed-by-4d), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component&type=Repositories). また、[独自の 4Dコンポーネントを開発](../Extensions/develop-components.md) することもできます。

## コンポーネントの使い方

公開されているコンポーネントコード (メソッドや関数) とフォームは、4D開発において標準の要素として使用できます。

インストールされたコンポーネントにメソッドやクラス、関数が含まれている場合、それらはエクスプローラーのメソッドページの **コンポーネントメソッド** テーマに表示されます。

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

コンポーネントがコンパイルされている場合、その [名前空間](../Extensions/develop-components.md#コンポーネント名前空間の宣言) はコンポーネント名の後に括弧で表示されます。 この名前空間を使用して、コンポーネントの関数にアクセスします。

:::

コンポーネントの [プロジェクトメソッド](methods.md) または [クラス](classes.md) を選択し、エクスプローラーの **ドキュメント** ボタンをクリックすると、そのメソッドに関する情報が得られます ([あれば](Project/documentation.md))。

![alt-text](../assets/en/Project/compDoc.png)

:::note

インタープリタ版のコンポーネントのコードは、コンテキストがサポートされていれば、[ホストプロジェクトから直接編集する](../Extensions/develop-components.md#コンポーネントをホストから編集する) ことが可能です。

:::