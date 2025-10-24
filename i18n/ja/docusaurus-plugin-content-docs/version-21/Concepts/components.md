---
id: components
title: コンポーネント
---

4D のコンポーネントとは、プロジェクトにインストール可能な、1つ以上の機能を持つ 4Dコードやフォームの一式です。 たとえば、[4D SVG コンポーネント](https://github.com/4d/4D-SVG) は、SVGファイルの表示するための高度なコマンドと統合されたレンダリングエンジンを追加します。

## コンポーネントのインストール

4D プロジェクト内へのコンポーネントのインストールとロードは、[4D 依存関係マネージャー](../Project/components.md) を通して管理されます。

いくつかのコンポーネントが[4D によって開発](../Extensions/overview.md#components-developed-by-4d)されていますが、それ以外にも4D コミュニティによるたくさんの4D コンポーネントが[GitHub 上で公開されています](https://github.com/topics/4d-component)。 また、[独自の 4Dコンポーネントを開発](../Extensions/develop-components.md) することもできます。

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