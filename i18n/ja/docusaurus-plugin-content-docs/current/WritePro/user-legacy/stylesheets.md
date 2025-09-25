---
id: stylesheets
title: スタイルシート
displayed_sidebar: docs
slug: /WritePro/stylesheets
---


スタイルシートとは、定義された属性設定のセットのオブジェクトであり、4D Write Pro ドキュメントの見た目をコントロールすることができます。これらの設定は段落または文字に適用することができます（例: は表示するフォント、フォントのサイズ、カラー、ウェイトなどです）。スタイルシートを定義すると、それはオブジェクトとして 4D Write Pro ドキュメントに保存されるため、再利用することができます。スタイルシートを使用することで、文書に独自性を持たせつつ、時間を節約することもできます。

## デフォルト スタイル

すべての 4D Write Pro ドキュメントにはデフォルトの段落スタイルシート「Normal」が含まれます。新しいスタイルシートは、[WP New style sheet](../commands-legacy/wp-new-style-sheet) コマンドで作成すると、自動的にこの標準スタイルを継承します。スタイルシートによって変更された属性は、そのスタイルシートが適用されている段落にのみ影響し、ドキュメントの残りの部分はデフォルトの Normal 設定を保持します。スタイルシートを削除すると、変更された属性は Normal スタイルに戻されます。

通常スタイル Normal は、4D Write Pro ドキュメント内のすべてのスタイル属性のデフォルト値を定義します。これは [WP Get style sheet](../commands-legacy/wp-get-style-sheet) コマンドで取得することができます。通常スタイルは [WP SET ATTRIBUTES](../commands/wp-set-attributes) コマンドで編集可能ですが（ただし名前の変更はできません）。[WP New style sheet](../commands-legacy/wp-new-style-sheet) コマンドで作成されたスタイルシートは [WP DELETE STYLE SHEET](../commands-legacy/wp-delete-style-sheet) コマンドで削除できますが、Normal スタイルシートは削除することができません。

## 段落スタイルシートと文字スタイルシートの属性

スタイルシートには次の属性があり、段落または文字の属性を定義することができます:

- **段落** - 段落の大部分の属性は段落にのみ適用されます。段落スタイルシートは文字スタイル属性も含み、かつ段落にのみ適用可能なフォーマット属性（例:余白、境界線、タブなど）に対しての適用可能なフォーマット属性も含んでいます。
- **文字** - 文字スタイルシートは、文字スタイル属性のみを使用して、段落スタイルと区別するテキスト（1文字または複数）の形式（例: 見出し、強調、下線など）を定義します。

段落スタイルは段落全体に適用されることに注意してください。段落の特定の一部にのみ適用したい場合は、文字スタイルシートを使用する必要があります。

## スタイルシート優先順位

1つの 4D Write Pro ドキュメントに複数の段落スタイル/文字スタイルシートの優先順位が存在し、それが適用された順番によって決定されるという点に注意してください。

- 例えば、最初に段落スタイルシートを適用し、その後で文字スタイルシートを適用すると、文字スタイルシートが優先されます。例えば、段落スタイルシートをドキュメントの本文に適用し、その後に「太字」文字スタイルシートを作成し、特定の単語の箇所に対してのみ適用することができます。段落スタイルシートは他の箇所に対して引き続き適用されますが、指定された単語には文字スタイルシートが優先されます。
- 反対に、先に文字スタイルシートを適用し、その後に段落スタイルシートを適用すると、段落スタイルシートがすべてのテキストに適用され、文字スタイルシートのスタイルは削除されます。

## スタイルシートの適用

スタイルシートは [WP SET ATTRIBUTES](../commands/wp-set-attributes) コマンドに `wk style sheet` または `wk new line style sheet` 定数を使うことで適用されます（オブジェクト記法を使っても適用されます）。

## スタイルシートの取得

[WP Get style sheets](../commands-legacy/wp-get-style-sheets) コマンドを使うと、指定されたタイプに基づいてすべてのスタイルシートを取得することができます。[WP Get style sheet](../commands-legacy/wp-get-style-sheet) コマンドを使用するとスタイルシート名を指定して取得することができます。

## スタイルシートの読み込みと書き出し

スタイルシートはオブジェクトとして保存されるので、他の 4D Write Pro ドキュメントへ簡単に読み込んだり、書き出しても容易に維持できます。

- 書き込み – [WP IMPORT STYLE SHEETS](../commands-legacy/wp-import-style-sheets) コマンドを使用すれば、指定4Dドキュメントのスタイルシートオブジェクトを取得し、新規ドキュメントで使用することが可能です。
- 書き出し – [WP EXPORT DOCUMENT](../commands/wp-export-document) または [WP EXPORT VARIABLE](../commands/wp-export-variable.md) コマンドでスタイル付きの文書をエクスポートすることができます。

## スタイルシート属性

以下の属性はスタイルシートにより変更可能で、[WP SET ATTRIBUTES](../commands/wp-set-attributes) および [WP RESET ATTRIBUTES](../commands/wp-reset-attributes) コマンドで保存すること、[WP GET ATTRIBUTES](../commands/wp-get-attributes) コマンドで取得することが可能です。

:::note

注: 一部の属性はリンクされています。そのため、これらのうち一つの属性を追加すると、リンクされた他の属性もデフォルト値で作成されます。リンクされた属性については、デフォルトの値は通常スタイルシートで定義された値とは異なる場合があります。例えば、赤の左境界線だけを定義した場合、他の境界線はたとえ通常スタイルが紫で事前に定義されていたとしても黒でデフォルト値が設定されます。

:::


| 属性                        | 段落 | 文字 | 	リンクして連動する属性 |
|----------------------------------|-----------|-----------|-------------|
| `wk avoid widows and orphans`    | X         |           |             |
| `wk background clip`             | X         |           |             |
| `wk background color`            | X         | X         |             |
| `wk background height`           | X         |           | `wk background width` |
| `wk background image`            | X         |           |             |
| `wk background image url`        | X         |           |             |
| `wk background origin`           | X         |           |             |
| `wk background position horizontal` | X      |           | `wk background position vertical` |
| `wk background position vertical`   | X      |           | `wk background position horizontal` |
| `wk background repeat`           | X         |           |             |
| `wk background width`            | X         |           | `wk background height` |
| `wk border color`                | X         |           | `wk border color bottom`, `wk border color left`, `wk border color right`, `wk border color top` |
| `wk border color bottom`         | X         |           | `wk border color`, `wk border color left`, `wk border color right`, `wk border color top` |
| `wk border color left`           | X         |           | `wk border color`, `wk border color bottom`, `wk border color right`, `wk border color top` |
| `wk border color right`          | X         |           | `wk border color`, `wk border color bottom`, `wk border color left`, `wk border color top` |
| `wk border color top`            | X         |           | `wk border color`, `wk border color bottom`, `wk border color left`, `wk border color right` |
| `wk border radius`               | X         |           |             |
| `wk border style`                | X         |           | `wk border style bottom`, `wk border style left`, `wk border style right`, `wk border style top` |
| `wk border style bottom`         | X         |           | `wk border style`, `wk border style left`, `wk border style right`, `wk border style top` |
| `wk border style left`           | X         |           | `wk border style`, `wk border style bottom`, `wk border style right`, `wk border style top` |
| `wk border style right`          | X         |           | `wk border style`, `wk border style bottom`, `wk border style left`, `wk border style top` |
| `wk border style top`            | X         |           | `wk border style`, `wk border style bottom`, `wk border style left` |
| `wk border width`                | X         |           | `wk border width bottom`, `wk border width left`, `wk border width right`, `wk border width top` |
| `wk border width bottom`         | X         |           | `wk border width`, `wk border width left`, `wk border width right`, `wk border width top` |
| `wk border width left`           | X         |           | `wk border width`, `wk border width bottom`, `wk border width right`, `wk border width top` |
| `wk border width right`          | X         |           | `wk border width`, `wk border width bottom`, `wk border width left`, `wk border width top` |
| `wk border width top`            | X         |           | `wk border width`, `wk border width bottom`, `wk border width left`, `wk border width right` |
| `wk direction`                   | X         |           |             |
| `wk font`                        | X         | X         | `wk font bold`, `wk font italic`, `wk font size` |
| `wk font bold`                   | X         | X         | `wk font`, `wk font family`, `wk font italic`, `wk font size` |
| `wk font family`                 | X         | X         | `wk font`, `wk font bold`, `wk font italic`, `wk font size` |
| `wk font italic`                 | X         | X         | `wk font`, `wk font bold`, `wk font family`, `wk font size` |
| `wk font size`                   | X         | X         | `wk font`, `wk font bold`, `wk font family`, `wk font italic` |
| `wk line height`                 | X         |           |             |
| `wk list font`                   | X         |           |             |
| `wk list string format LTR`      | X         |           |             |
| `wk list string format RTL`      | X         |           |             |
| `wk list style image`            | X         |           |             |
| `wk list style image height`     | X         |           |             |
| `wk list style image url`        | X         |           |             |
| `wk list style type`             | X         |           |             |
| `wk margin`                      | X         |           | `wk margin bottom`, `wk margin left`, `wk margin right`, `wk margin top` |
| `wk margin bottom`               | X         |           | `wk margin`, `wk margin left`, `wk margin right`, `wk margin top` |
| `wk margin left`                 | X         |           | `wk margin`, `wk margin bottom`, `wk margin right`, `wk margin top` |
| `wk margin right`                | X         |           | `wk margin`, `wk margin bottom`, `wk margin left`, `wk margin top` |
| `wk margin top`                  | X         |           | `wk margin`, `wk margin bottom`, `wk margin left`, `wk margin right` |
| `wk min height`                  | X         |           |             |
| `wk min width`                   | X         |           |             |
| `wk name`                        | X         | X         |             |
| `wk new line style sheet`        | X         |           |             |
| `wk owner`                       | X         | X         |             |
| `wk padding`                     | X         |           | `wk padding bottom`, `wk padding left`, `wk padding right`, `wk padding top` |
| `wk padding bottom`              | X         |           | `wk padding`, `wk padding left`, `wk padding right`, `wk padding top` |
| `wk padding box`                 | X         |           |             |
| `wk padding left`                | X         |           | `wk padding`, `wk padding bottom`, `wk padding right`, `wk padding top` |
| `wk padding right`               | X         |           | `wk padding`, `wk padding bottom`, `wk padding left`, `wk padding top` |
| `wk padding top`                 | X         |           | `wk padding`, `wk padding bottom`, `wk padding left`, `wk padding right` |
| `_o_wk page break inside`        | X         |           |             |
| `wk tab default`                 | X         |           | `wk tabs`, `wk tab stop offsets`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tabs`                        | X         |           | `wk tab default`, `wk tab stop offsets`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tab stop offsets`            | X         |           | `wk tabs`, `wk tab default`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tab stop types`              | X         |           | `wk tabs`, `wk tab default`, `wk tab stop offsets`, `wk tab stop leadings` |
| `wk tab stop leadings`           | X         |           | `wk tabs`, `wk tab default`, `wk tab stop offsets`, `wk tab stop types` |
| `wk text align`                  | X         |           |             |
| `wk text color`                  | X         | X         |             |
| `wk text indent`                 | X         |           |             |
| `wk text linethrough color`      | X         | X         |             |
| `wk text linethrough style`      | X         | X         | `wk text underline style` |
| `wk text shadow color`           | X         | X         | `wk text shadow offset` |
| `wk text shadow offset`          | X         | X         | `wk text shadow color` |
| `wk text transform`              | X         | X         |             |
| `wk text underline color`        | X         | X         |             |
| `wk text underline style`        | X         | X         | `wk text linethrough style` |
| `wk type`                        | X (read only) | X (read only) |             |
| `wk vertical align`              | X         | X         |             |
| `wk width`                       | X         |           |             |


