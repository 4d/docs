---
id: overview
title: 4D アプリケーションの拡張
---

4D アーキテクチャーはオープンで、様々な方法で拡張可能です。 4D でネイティブに利用できない機能が必要な場合、以下のような様々な方法でアプリケーションに統合することができます:

- [**System workers**](../API/SystemWorkerClass.md) を使用すると、4D コードからどんな外部プロセス(シェルコマンド、PHP、任意のスクリプト、など) でも呼び出すことができます。 またその実行をモニターすることもできます。
- [**SQL コマンド**](../commands/theme/SQL) を使用すると、様々なSQL データソースに接続して、それらを使用することができます。
- [**ビルトイン HTTP クライアント**](../API/HTTPRequestClass.md) はあらゆるHTTP サーバーへとリクエストを送り、データを処理することができます。
- [**Web Areas**](../FormObjects/webArea_overview.md) can give access to web pages or various HTML contents within your forms.
- [**Components**](Concepts/components.md). Components are made of 4D code. 4D は、デフォルトで[ビルトイン4D コンポーネントのセット](../Project/components.md#インストール済みの4dコンポーネント) が含まれています。 You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic).
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. プラグインは、4D がネイティブにおこなっていないこと (例: 特定のプラットフォーム技術など) や、4D だけでは困難なことを実現します。 [このページ](develop-plug-ins.md) で説明しているように、独自のプラグインを開発することができます。 多くの機能は、既存の 4Dプラグインでカバーされています。 [`4d-plugin`](https://github.com/topics/4d-plugin) のトピックで公開されている 4Dプラグインの一覧を Github で閲覧することができます。
