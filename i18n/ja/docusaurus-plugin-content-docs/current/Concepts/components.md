---
id: components
title: コンポーネント
---

A 4D component is a set of 4D code and forms representing one or more functionalities that you can install and use in your projects. たとえば、[4D SVGコンポーネント](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.ja.html) は、SVGファイルの表示するための高度なコマンドと統合されたレンダリングエンジンを追加します。

## コンポーネントの見つけ方

いくつかのコンポーネントは [4D開発環境にプリインストール](Extensions/overview.md) されていますが、4Dコミュニティによる多くの 4Dコンポーネントが [GitHub 上に公開](https://github.com/search?q=4d-component&type=Repositories) されています。 また、[独自の 4Dコンポーネントを開発](Extensions/develop-components.md) することもできます。


## コンポーネントのインストール

コンポーネントをインストールするには、[プロジェクトの `Components` フォルダー](Project/architecture.md) にコンポーネントファイルをコピーします。 エイリアスまたはショートカットも使用できます。

インタープリターモードで動作するホストプロジェクトは、インタープリターまたはコンパイル済みどちらのコンポーネントも使用できます。 コンパイルモードで実行されるホストデータベースでは、インタープリターのコンポーネントを使用できません。 この場合、コンパイル済みコンポーネントのみが利用可能です。

## コンポーネントの使い方

Exposed component code (methods and functions) as well as forms can be used as standard elements in your 4D development.

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Use this namespace to access the component's functions.

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
