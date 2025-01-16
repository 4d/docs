---
id: onOutsideCall
title: On Outside Call
---

| コード | 呼び出し元 | 定義                                    |
| --- | ----- | ------------------------------------- |
| 10  | フォーム  | フォームが `POST OUTSIDE CALL` による呼び出しを受けた |

## 説明

このイベントは、`POST OUTSIDE CALL` コマンドによって他のプロセスからフォームが呼び出されたときに生成されます。

> `On Outside Call` イベントは、受信した入力フォームの入力コンテキストを変更します。 特に、フィールドが編集されていた場合には、[`On Data Change`](onDataChange.md) イベントが生成されます。
