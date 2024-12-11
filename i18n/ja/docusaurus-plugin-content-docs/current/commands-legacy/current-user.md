---
id: current-user
title: Current user
slug: /commands/current-user
displayed_sidebar: docs
---

<!--REF #_command_.Current user.Syntax-->**Current user** {( *user* )} : Text<!-- END REF-->
<!--REF #_command_.Current user.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| user | Integer | &#8594;  | ユーザーエイリアスまたは4Dユーザーアカウント |
| 戻り値 | Text | &#8592; | カレントユーザのユーザ名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current user.Summary-->Current user コマンドは、カレントユーザのエイリアス、またはユーザ名を返します。<!-- END REF-->引数が省略されていた場合、デフォルトで、セッション中に[SET USER ALIAS](set-user-alias.md) コマンドでユーザーに対してエイリアスが定義されていた場合には、コマンドはユーザーエイリアスを返します。そうでない場合、コマンドは4D ユーザーアカウント名を返します。

任意の引数には、返される情報を指定する、以下の定数を渡すことができます:

| 定数                       | 値 | コメント                                                                                                        |
| ------------------------ | - | ----------------------------------------------------------------------------------------------------------- |
| 4D user account          | 1 | 4D ユーザーアカウント名                                                                                               |
| 4D user alias            | 2 | [SET USER ALIAS](set-user-alias.md) コマンドで定義されている場合には4D ユーザーアカウントの別名、あるいは4D ユーザーにエイリアスが定義されていない場合は空の文字列("")。 |
| 4D user alias or account | 0 | [SET USER ALIAS](set-user-alias.md) コマンドで定義されたユーザーアカウントの別名、またはエイリアスが定義されていない場合には通常の4D ユーザーアカウント名。           |

#### 例題 

[User in group](user-in-group.md "User in group") コマンドの例題を参照してください。

#### 参照 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  
[User in group](user-in-group.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 182 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


