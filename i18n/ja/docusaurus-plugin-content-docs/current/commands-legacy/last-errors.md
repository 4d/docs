---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors**  -> 戻り値<!-- END REF-->
<!--REF #_command_.Last errors.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Collection | &larr; | エラーオブジェクトのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Last errors.Summary-->**Last errors** コマンドは4D アプリケーションのエラーのカレントのスタックを、エラーオブジェクトのコレクションとして返します。<!-- END REF-->エラーが発生していない場合には**null** を返します。

各エラーオブジェクトには以下の属性が格納されています:

| **プロパティ**          | **型** | **詳細**              |
| ------------------ | ----- | ------------------- |
| errCode            | 数値    | エラーコード              |
| message            | テキスト  | エラーの詳細              |
| componentSignature | テキスト  | エラーを返した内部コンポーネントの署名 |

このコマンドは、[ON ERR CALL](on-err-call.md) コマンドでインストールされたエラー処理メソッド内から呼び出されている必要があります。

**注意:** 同様の情報を配列として返す、[GET LAST ERROR STACK](get-last-error-stack.md) 旧式コマンドの説明も参照してください。

#### 参照 

[GET LAST ERROR STACK](get-last-error-stack.md)  
[ON ERR CALL](on-err-call.md)  
[throw](throw.md)  