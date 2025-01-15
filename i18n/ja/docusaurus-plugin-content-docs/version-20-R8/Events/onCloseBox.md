---
id: onCloseBox
title: On Close Box
---

| コード | 呼び出し元 | 定義                     |
| --- | ----- | ---------------------- |
| 22  | フォーム  | ウィンドウのクローズボックスがクリックされた |

## 説明

`On Close Box` イベントは、ユーザーがウィンドウのクローズボックスをクリックすると生成されます。

### 例題

この例題では、レコードのデータ入力に使われるフォームで、ウィンドウを閉じるイベントを処理する方法を示します:

```4d
  // 入力フォームのメソッド
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("レコードが変更されました。 変更を保存しますか？")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       Else
          CANCEL
       End if
  //...
 End case
```
