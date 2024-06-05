---
id: onUrlFiltering
title: On URL Filtering
---

| コード | 呼び出し元                                      | 定義                  |
| --- | ------------------------------------------ | ------------------- |
| 51  | [Web エリア](FormObjects/webArea_overview.md) | Webエリアが URL をブロックした |

## 説明

このイベントは、`WA SET URL FILTERS` コマンドで設定されたフィルターにより、Webエリアによって URL のロードがブロックされると生成されます。

`WA Get last filtered URL` コマンドコマンドを使用してブロックされた URL を知ることができます。

### 参照

[`On Open External Link`](onOpenExternalLink.md)
