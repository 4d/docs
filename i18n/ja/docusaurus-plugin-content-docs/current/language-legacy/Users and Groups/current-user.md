---
id: current-user
title: Current user
slug: /commands/current-user
displayed_sidebar: docs
---

<!--REF #_command_.Current user.Syntax-->**Current user** ( *user* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Current user.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| user | Integer | &#8594; | ユーザーエイリアスまたは4Dユーザーアカウント |
| 戻り値 | Text | &#8592; | カレントユーザのユーザ名 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|17 R5|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Current user.Summary-->Current user コマンドは、カレントユーザのエイリアス、またはユーザ名を返します。<!-- END REF-->引数が省略されていた場合、デフォルトで、セッション中に[SET USER ALIAS](../commands/set-user-alias) コマンドでユーザーに対してエイリアスが定義されていた場合には、コマンドはユーザーエイリアスを返します。そうでない場合、コマンドは4D ユーザーアカウント名を返します。

任意の引数には、返される情報を指定する、以下の定数を渡すことができます:

| 定数                       | 値 | コメント                                                                                                        |
| ------------------------ | - | ----------------------------------------------------------------------------------------------------------- |
| 4D user account          | 1 | 4D ユーザーアカウント名                                                                                               |
| 4D user alias            | 2 | [SET USER ALIAS](../commands/set-user-alias) コマンドで定義されている場合には4D ユーザーアカウントの別名、あるいは4D ユーザーにエイリアスが定義されていない場合は空の文字列("")。 |
| 4D user alias or account | 0 | [SET USER ALIAS](../commands/set-user-alias) コマンドで定義されたユーザーアカウントの別名、またはエイリアスが定義されていない場合には通常の4D ユーザーアカウント名。           |

## 例題 

[User in group](user-in-group.md "User in group") コマンドの例題を参照してください。

## 参照 

[CHANGE CURRENT USER](../commands/change-current-user)  
[CHANGE PASSWORD](../commands/change-password)  
[SET USER ALIAS](../commands/set-user-alias)  
[User in group](../commands/user-in-group)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 182 |
| スレッドセーフである | yes |


