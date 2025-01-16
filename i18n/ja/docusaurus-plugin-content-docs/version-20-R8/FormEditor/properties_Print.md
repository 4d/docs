---
id: print
title: 印刷
---

## Settings

フォーム毎に用紙設定をおこなうことができます。 この機能は、フォームエディターで印刷ページの境界を表示するのに便利です。

> **互換性に関する注意:** アプリケーションモードでフォームを印刷するときにこれらの設定が考慮されたとしても、プラットフォームおよびドライバー依存性に関する制約から、フォームの印刷設定を保存するのにこの機能を使用することは推奨されません。 より強力な `Print settings to BLOB` / `BLOB to print settings` を使用することが強く推奨されています。

次の印刷設定が変更できます:

- 用紙サイズ
- 用紙の向き
- 拡大縮小

> 利用可能なオプションはシステムの設定により異なります。

#### JSON 文法

| 名称          | データタイプ | とりうる値                                                                              |
| ----------- | ------ | ---------------------------------------------------------------------------------- |
| pageFormat  | object | 利用可能なプロパティ: paperName, paperWidth, paperHeight, orientation, scale |
| paperName   | string | "A4", "レター"...                     |
| paperWidth  | string | paperName という名前の用紙が見つからなかった場合に使用されます。 単位の明記が必要です: pt, in, mm, cm。  |
| paperHeight | string | paperName という名前の用紙が見つからなかった場合に使用されます。 単位の明記が必要です: pt, in, mm, cm。  |
| orientation | string | "landscape" (デフォルトは "portrait")                                 |
| scale       | number | 最小値: 0                                                             |

---
