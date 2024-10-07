---
id: php-set-option
title: PHP SET OPTION
slug: /commands/php-set-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP SET OPTION.Syntax-->**PHP SET OPTION** ( *option* ; *value* {; *} )<!-- END REF-->
<!--REF #_command_.PHP SET OPTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#x1F852; | 設定するオプション |
| value | Boolean | &#x1F852; | オプションの新しい値 |
| * | 演算子 | &#x1F852; | 指定時: 変更は次の呼び出し時にのみ適用 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PHP SET OPTION.Summary-->**PHP SET OPTION** コマンドを使用して、[PHP Execute](php-execute.md) コマンド呼び出し前に、特定のオプションを設定することができます。<!-- END REF-->このコマンドのスコープはカレントプロセスです。

option引数には、変更するオプションを指定する"*PHP*"テーマの定数を渡します。 *value*引数には*option*の新しい値を渡します。

| 定数             | 型    | 値 | コメント                                                                                                                                                       |
| -------------- | ---- | - | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | 倍長整数 | 2 | 結果がテキスト型のときに実行結果中にPHPから返されるHTTPヘッダに関する処理モードの定義 (結果がBLOB型のときヘッダは常に保持されます)。<br/>**とりうる値**: ブール。False (デフォルト値) = HTTPヘッダを結果から取り除く、True = HTTPヘッダを保持する |

デフォルトで**PHP SET OPTION** はプロセス内で後に続くすべての[PHP Execute](php-execute.md) のオプションを設定します。 次の呼び出しにのみ有効なオプションを設定するためには、アスタリスク (*\**) 引数を渡します。

#### 参照 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  