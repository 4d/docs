---
id: compatibility
title: 互換性ページ
---

互換性ページには、以前の 4Dバージョンとの互換性を管理するためのパラメーターがまとめられています。

> The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.\
> This page lists the compatibility options available for database/projects converted from 4D v18 onwards. For older compatibility options, refer to the [Compatibility page](https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.en.html) on **doc.4d.com**.

- **Use legacy network layer**: Starting with 4D v15, 4D applications propose a new network layer, named _ServerNet_, to handle communications between 4D Server and remote 4D machines (clients). 以前のネットワークレイヤーは廃止予定となりますが、既存のデータベースとの互換性を保つために保持されます。 このオプションを使用すると、4D Serverアプリケーションにおいて、必要に応じていつでも以前のネットワークレイヤーを有効化することができます。 _ServerNet_ is used automatically for new databases and databases converted from a v15 release or later. この設定を変更する場合、変更を反映するにはアプリケーションを再起動する必要があります。 接続していたクライアントアプリケーションも、新しいネットワークレイヤーで接続するため再起動しなければなりません。
  **Note:** This option can also be managed by programming using the `SET DATABASE PARAMETER` command.

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to v18 R3, and checked for databases created with 4D v18 R3 and higher. v18 R3 以降、4D の XPath 実装は、より多くの述語に対応しサポートするために変更されました。 結果的に、以前の標準でない一部の機能は動作しなくなります。 これには以下のような機能が含まれます:

  - 最初の "/" はルートノードに限らない - "/" を XPath 式の最初の文字として使用しても、ルートノードからの絶対パスの宣言にはなりません。
  - 暗示的なカレントノードはなし - カレントノードは XPath 式の中に含められていなければなりません。
  - 繰り返された構造内の再帰的な検索は不可 - 最初の要素のみが解析されます。

  Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option _unchecked_. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [`DOM Find XML element`](https://doc.4d.com/4dv20/help/command/en/page864.html) command), make sure the **Use standard XPath** option is _checked_.

- **Use LF for end of line on macOS:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. 以前の 4D のバージョンから変換されたデータベースにおいてこの新しい振る舞いを利用したい場合には、このオプションをチェックしてください。 See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. 以前のバージョンでは、テキストファイルはデフォルトでBOM 付きで書き込まれていました。 変換されたプロジェクトでこの新しい振る舞いを有効化するには、このオプションを選択します。 See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv20/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Map NULL values to blank values unchecked by default a field creation**: For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by [ORDA](../ORDA/overview.md).

- **Non-blocking printing**: Starting with 4D v20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or databases converted from binary mode to project mode. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call `CLOSE PRINTING JOB` for the printer to be available for the next print job (check previous 4D documentations for more information).
