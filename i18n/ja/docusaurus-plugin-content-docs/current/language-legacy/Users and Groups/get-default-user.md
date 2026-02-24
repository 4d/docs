---
id: get-default-user
title: Get default user
slug: /commands/get-default-user
displayed_sidebar: docs
---

<!--REF #_command_.Get default user.Syntax-->**Get default user**  : Integer<!-- END REF-->
<!--REF #_command_.Get default user.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | ユニークなユーザーID番号 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get default user.Summary-->Get default user コマンドは、データベース設定において "デフォルトユーザー" として定義されたユーザーのユニークなユーザーIDを返します。<!-- END REF-->

![](../../assets/en/commands/pict36789.en.png)

デフォルトユーザーが設定されていない場合、コマンドは0を返します。


## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 826 |
| スレッドセーフである | no |


