---
id: get-default-user
title: Get default user
slug: /commands/get-default-user
displayed_sidebar: docs
---

<!--REF #_command_.Get default user.Syntax-->**Get default user**  -> 戻り値<!-- END REF-->
<!--REF #_command_.Get default user.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#x1F850; | ユニークなユーザーID番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get default user.Summary-->Get default user コマンドは、データベース設定において "デフォルトユーザー" として定義されたユーザーのユニークなユーザーIDを返します。<!-- END REF-->

![](../assets/en/commands/pict36789.en.png)

デフォルトユーザーが設定されていない場合、コマンドは0を返します。
