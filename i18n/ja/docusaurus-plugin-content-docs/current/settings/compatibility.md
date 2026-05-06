---
id: compatibility
title: 互換性ページ
---

互換性ページには、以前の 4Dバージョンとの互換性を管理するためのパラメーターがまとめられています。

:::note

- 表示されるオプションの数は、元のデータベース/プロジェクトが作成されたバージョンや、そのデータベース/プロジェクトでおこなわれた設定の変更により異なります。
- This page lists the compatibility options available for database/projects converted from 4D 18 onwards. それ以前のバージョンから引引き継がれる互換性オプションについては **doc.4d.com** の [互換性ページ](https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.ja.html) を参照ください。

:::

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to 18 R3, and checked for databases created with 4D 18 R3 and higher. Starting with 18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. 結果的に、以前の標準でない一部の機能は動作しなくなります。 これには以下のような機能が含まれます:

  - 最初の "/" はルートノードに限らない - "/" を XPath 式の最初の文字として使用しても、ルートノードからの絶対パスの宣言にはなりません。
  - 暗示的なカレントノードはなし - カレントノードは XPath 式の中に含められていなければなりません。
  - 繰り返された構造内の再帰的な検索は不可 - 最初の要素のみが解析されます。

  標準的なものでなくとも、コードが以前と同じように動くように以前の機能を保ちたい場合もあるかもしれません。その場合、この *チェックを外して* ください。 標準的なものでなくとも、コードが以前と同じように動くように以前の機能を保ちたい場合もあるかもしれません。その場合、この *チェックを外して* ください。 その一方で、これらの非標準の実装をコード内で使用しておらず、拡張された XPath 機能 ([DOM Find XML element](../commands/dom-find-xml-element) コマンドの説明参照) をデータベース内で利用したい場合、この **標準のXPathを使用** オプションが *チェックされている* ことを確認してください。

- **Use LF for end of line on macOS:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. 以前の 4D のバージョンから変換されたデータベースにおいてこの新しい振る舞いを利用したい場合には、このオプションをチェックしてください。 [`TEXT TO DOCUMENT`](../commands/text-to-document)、[`Document to text`](../commands/document-to-text)、および [XML SET OPTIONS](../commands/xml-set-options) コマンドの詳細を参照してください。

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. 以前のバージョンでは、テキストファイルはデフォルトでBOM 付きで書き込まれていました。 変換されたプロジェクトでこの新しい振る舞いを有効化するには、このオプションを選択します。 [`TEXT TO DOCUMENT`](../commands/text-to-document)、[`Document to text`](../commands/document-to-text)、および [XML SET OPTIONS](../commands/xml-set-options) コマンドの詳細を参照してください。

- **Map NULL values to blank values unchecked by default at field creation**: For better compliance with ORDA specifications, in databases created with 4D 19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. このオプションにチェックを入れることで、変換されたデータベースにおいてもこのデフォルトの振る舞いを適用することができます ([ORDA](../ORDA/overview.md) で NULL値がサポートされるようになったため、今後は空値ではなく NULL値の使用が推奨されます)。

- **Non-blocking printing**: Starting with 4D 20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or your databases converted from binary mode to project mode. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call [`CLOSE PRINTING JOB`](../commands/close-printing-job) for the printer to be available for the next print job (check previous 4D documentations for more information).

- **Save structure color and coordinates in separate catalog_editor.json file**: Starting with 4D 20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) に加えた変更は、catalog_editor.json という個別ファイルに保存されます。このファイルはプロジェクトの [Sourcesフォルダー](../Project/architecture.md#sources) に保存されます。 この新しいファイルアーキテクチャーにより、`catalog.4DCatalog` ファイルは重要なデータベースストラクチャーの変更のみを含むようになるため、VCSアプリケーションでマージの競合を管理しやすくなります。 互換性のため、この機能は以前の 4Dバージョンから変換されたプロジェクトではデフォルトで有効になっていません。有効にするには、このオプションをチェックする必要があります。 この機能が有効になっている場合、ストラクチャーエディターで初めて編集した時に `catalog_editor.json` ファイルが作成されます。

- **Use legacy print rendering**: Starting with 4D 21 R3, 4D uses a new, unified print rendering engine to print forms on macOS and Windows. To make sure forms designed with the [legacy screen-based print renderer](../FormEditor/forms.md#legacy-print-renderer) continue to be printed as expected, this option is checked by default in converted projects or databases created with 4D 21 R2 and before. You can uncheck this option to benefit from the [modern print rendering engine](../FormEditor/forms.md#print-rendering-engine). Note that when forms are rendered under Liquid Glass (macOS) or Fluent UI (Windows) interfaces, this option is ignored: in such contexts forms are always printed using the modern print renderer (see [this section](../../FormEditor/forms.md#legacy-print-rendering)).