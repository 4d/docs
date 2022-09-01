---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| コード | 呼び出し元                                     | 定義                       |
| --- | ----------------------------------------- | ------------------------ |
| 47  | [Webエリア](FormObjects/webArea_overview.md) | 新しい URL が Web エリアにロードされた |


## 詳細

このイベントは、Webエリアに新しい URL のロードを開始した時に生成されます。 Webエリアに関連付けられた `URL` 変数を使用してロード中の URL を知ることができます。

> ロード中の URL は [カレントURL](FormObjects/properties_WebArea.md#url変数と-wa-open-url-コマンド) とは異なります (`WA Get current URL` コマンドの説明参照)。