---
id: onDeactivate
title: On Deactivate
---

| コード | 呼び出し元 | 定義                        |
| --- | ----- | ------------------------- |
| 12  | フォーム  | フォームウィンドウが最前面のウィンドウでなくなった |

## 説明

フォームのウィンドウが最前面にあった場合、そのウィンドウが背面に送られたときにこのイベントが呼ばれます。

このイベントは個々のオブジェクトには適用されず、フォーム全体に適用されます。 ゆえに `On Deactivate` フォームイベントプロパティが選択されていれば、そのフォームのメソッドのみが呼び出されます。

### 参照

[On Activate](onActivate.md)