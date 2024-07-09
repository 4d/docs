---
id: onOpenExternalLink
title: On Open External Link
---

| コード | 呼び出し元                                      | 定義                |
| --- | ------------------------------------------ | ----------------- |
| 52  | [Web エリア](FormObjects/webArea_overview.md) | 外部URL がブラウザーで開かれた |

## 説明

このイベントは、`WA SET EXTERNAL LINKS FILTERS` コマンドで設定されたフィルターにより、URL のロードが Webエリアによってブロックされ、URL がカレントのシステムブラウザーで開かれると生成されます。

`WA Get last filtered URL` コマンドコマンドを使用してブロックされた URL を知ることができます。

### 参照

[`On URL Filtering`](onUrlFiltering.md)
