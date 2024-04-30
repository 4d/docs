---
id: compatibility
title: 互換性ページ
---

互換性ページには、以前の 4Dバージョンとの互換性を管理するためのパラメーターがまとめられています。

> 表示されるオプションの数は、元のデータベース/プロジェクトが作成されたバージョンや、そのデータベース/プロジェクトでおこなわれた設定の変更により異なります。\
> このページでは、v18以降のバージョンから変換された 4Dデータベース/プロジェクトで利用可能な互換性オプションのみを説明します。 それ以前のバージョンから引引き継がれる互換性オプションについては **doc.4d.com** の [互換性ページ](https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.ja.html) を参照ください。

- **旧式ネットワークレイヤーを使用する**: 4D v15 のリリース以降、4Dアプリケーションは 4D Server とリモートの 4Dマシン (クライアント) 間の通信に、_ServerNet_ という新しいネットワークレイヤーを使い始めました。 以前のネットワークレイヤーは廃止予定となりますが、既存のデータベースとの互換性を保つために保持されます。 このオプションを使用すると、4D Serverアプリケーションにおいて、必要に応じていつでも以前のネットワークレイヤーを有効化することができます。 _ServerNet_ は新規に作成されたデータベースおよび v15 以降から変換されたデータベースにおいては自動的に使用されます (このオプションがチェックされます)。 この設定を変更する場合、変更を反映するにはアプリケーションを再起動する必要があります。 接続していたクライアントアプリケーションも、新しいネットワークレイヤーで接続するため再起動しなければなりません。
  **注:** このオプションは、`SET DATABASE PARAMETER` コマンドを使い、プログラミングによって管理することもできます。

- **標準のXPathを使用:** デフォルトでは、v18 R3 より前のバージョンの 4D から変換されたデータベースではチェックが外されており、4D v18 R3 以降で作成されたデータベースではチェックされています。 v18 R3 以降、4D の XPath 実装は、より多くの述語に対応しサポートするために変更されました。 結果的に、以前の標準でない一部の機能は動作しなくなります。 これには以下のような機能が含まれます:

  - 最初の "/" はルートノードに限らない - "/" を XPath 式の最初の文字として使用しても、ルートノードからの絶対パスの宣言にはなりません。
  - 暗示的なカレントノードはなし - カレントノードは XPath 式の中に含められていなければなりません。
  - 繰り返された構造内の再帰的な検索は不可 - 最初の要素のみが解析されます。

  標準的なものでなくとも、コードが以前と同じように動くように以前の機能を保ちたい場合もあるかもしれません。その場合、この _チェックを外して_ ください。 その一方で、これらの非標準の実装をコード内で使用しておらず、拡張された XPath 機能 ([DOM Find XML element](https://doc.4d.com/4dv19R/help/command/ja/page864.html) コマンドの説明参照) をデータベース内で利用したい場合、この **標準のXPathを使用** オプションが _チェックされている_ ことを確認してください。

- **macOSにて改行コードとしてLFを使用する:** 4D v19 R2 以降 (XMLファイルについては 4D v19 R3 以降) の新規プロジェクトにおいて、4D は macOS でデフォルトの改行コード (EOL) として CR (xml SAX では CRLF) ではなくラインフィード (LF) をテキストファイルに書き込みます。 以前の 4D のバージョンから変換されたデータベースにおいてこの新しい振る舞いを利用したい場合には、このオプションをチェックしてください。 詳細については [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv19R/help/command/ja/page1237.html)、[`Document to text`](https://doc.4d.com/4dv19R/help/command/ja/page1236.html) および [`XML SET OPTIONS`](https://doc.4d.com/4dv19R/help/command/ja/page1090.html) を参照ください。

- **Unicodeテキストファイルに書き込んでいる際にデフォルトでBOMを追加しない:** 4D v19 R2 以降 (XMLファイルについては 4D v19 R3 以降)、4D はデフォルトでバイトオーダーマーク (BOM) なしでテキストファイルに書き込みます。 以前のバージョンでは、テキストファイルはデフォルトでBOM 付きで書き込まれていました。 変換されたプロジェクトでこの新しい振る舞いを有効化するには、このオプションを選択します。 詳細については [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv19R/help/command/ja/page1237.html)、[`Document to text`](https://doc.4d.com/4dv19R/help/command/ja/page1236.html) および [`XML SET OPTIONS`](https://doc.4d.com/4dv19R/help/command/ja/page1090.html) を参照ください。

- **フィールド作成時にデフォルトで"ヌル値を空値にマップ"オプションのチェックを外す:** ORDA の仕様により合致するために、4D v19 R4 以降で作成されたデータベースにおいては、フィールド作成時に **ヌル値を空値にマップ** フィールドプロパティがデフォルトでチェックされなくなります。 このオプションにチェックを入れることで、変換されたデータベースにおいてもこのデフォルトの振る舞いを適用することができます ([ORDA](../ORDA/overview.md) で NULL値がサポートされるようになったため、今後は空値ではなく NULL値の使用が推奨されます)。

- **ノンブロッキング印刷**: 4D v20 R4以降、各プロセスには独自の印刷設定 (印刷オプション、カレントプリンターなど) を持つようになりました。これにより、複数の印刷ジョブを同時に実行できます。 このオプションをチェックすると、アップグレード変換された 4Dプロジェクトや、バイナリモードから変換されたプロジェクトデータベースで、この新しい機能を有効化できます。 **チェックしない場合**、以前の実装が適用されます: カレントの 4D印刷設定がグローバルに適用され、印刷ジョブ実行中はプリンターが "ビジー" 状態になります。次の印刷ジョブのためにプリンターを利用可能にするには、`CLOSE PRINTING JOB` を呼び出す必要があります (詳細は以前の4Dドキュメントを参照ください)。

- **Save structure color and coordinates in separate catalog_editor.json file**: Starting with 4D v20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are saved in a separate file named `catalog_editor.json`, stored in the project's [Sources folder](../Project/architecture.md#sources). This new file architecture makes it easier to manage merge conflicts in VCS applications since the `catalog.4DCatalog` file now contains only crucial database structure changes. 互換性のため、この機能は以前の 4Dバージョンから変換されたプロジェクトではデフォルトで有効になっていません。有効にするには、このオプションをチェックする必要があります。 When the feature is enabled, the `catalog_editor.json` file is created at the first modification in the Structure editor.
