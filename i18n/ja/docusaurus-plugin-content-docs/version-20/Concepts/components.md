---
id: components
title: コンポーネント
---

4D のコンポーネントとは、プロジェクトにインストール可能な、1つ以上の機能を持つ 4Dコードやフォームの一式です。 たとえば、[4D SVGコンポーネント](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.ja.html) は、SVGファイルの表示するための高度なコマンドと統合されたレンダリングエンジンを追加します。

## コンポーネントの見つけ方

いくつかのコンポーネントは [4D開発環境にプリインストール](Extensions/overview.md) されていますが、4Dコミュニティによる多くの 4Dコンポーネントが [GitHub 上に公開](https://github.com/search?q=4d-component&type=Repositories) されています。 また、[独自の 4Dコンポーネントを開発](Extensions/develop-components.md) することもできます。


## コンポーネントのインストール

To install a component, you simply need to copy the component package folder into the [`Components` folder of the project](Project/architecture.md). エイリアスまたはショートカットも使用できます。

インタープリターモードで動作するホストプロジェクトは、インタープリターまたはコンパイル済みどちらのコンポーネントも使用できます。 コンパイルモードで実行されるホストデータベースでは、インタープリターのコンポーネントを使用できません。 この場合、コンパイル済みコンポーネントのみが利用可能です。

:::note

Interpreted component package folder name must be suffixed ".4dbase".

:::

## コンポーネントの使い方

公開されているコンポーネントコード (メソッドや関数) とフォームは、4D開発において標準の要素として使用できます。

インストールされたコンポーネントにメソッドやクラス、関数が含まれている場合、それらはエクスプローラーのメソッドページの **コンポーネントメソッド** テーマに表示されます。

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

コンポーネントがコンパイルされている場合、その [名前空間](../Extensions/develop-components.md#コンポーネント名前空間の宣言) はコンポーネント名の後に括弧で表示されます。 この名前空間を使用して、コンポーネントの関数にアクセスします。

:::

コンポーネントの [プロジェクトメソッド](methods.md) または [クラス](classes.md) を選択し、エクスプローラーの **ドキュメント** ボタンをクリックすると、そのメソッドに関する情報が得られます ([あれば](Project/documentation.md))。

![alt-text](../assets/en/Project/compDoc.png)
