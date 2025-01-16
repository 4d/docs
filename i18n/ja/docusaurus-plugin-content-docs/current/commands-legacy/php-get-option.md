---
id: php-get-option
title: PHP GET OPTION
slug: /commands/php-get-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET OPTION.Syntax-->**PHP GET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.PHP GET OPTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | 取得するオプション |
| value | Boolean | &#8592; | オプションの現在値 |

<!-- END REF-->

:::info 互換性

**4D のビルトインPHPインタープリターは削除されました**。[`4D.SystemWorkerクラス`](../API/SystemWorkerClass.md) を使用して外部PHPインタープリターをご利用ください。

:::

#### 説明 

<!--REF #_command_.PHP GET OPTION.Summary-->PHP GET OPTION コマンドを使用して、PHPスクリプトの実行に関連するオプションの現在値を取得できます。<!-- END REF-->

*option*引数には読み出したいオプションを指定する"*PHP*"テーマの定数を渡します。コマンドは*value*引数にオプションのカレントの値を返します。以下のいずれかの定数を渡すことができます:

| 定数             | 型    | 値 | コメント                                                                                                                                                       |
| -------------- | ---- | - | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | 倍長整数 | 2 | 結果がテキスト型のときに実行結果中にPHPから返されるHTTPヘッダに関する処理モードの定義 (結果がBLOB型のときヘッダは常に保持されます)。<br/>**とりうる値**: ブール。False (デフォルト値) = HTTPヘッダを結果から取り除く、True = HTTPヘッダを保持する |

#### 参照 

[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1060 |
| スレッドセーフである | &cross; |


