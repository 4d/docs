---
id: change-password
title: CHANGE PASSWORD
slug: /commands/change-password
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE PASSWORD.Syntax-->**CHANGE PASSWORD** ( *password* )<!-- END REF-->
<!--REF #_command_.CHANGE PASSWORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| password | Text | &#8594;  | 新しいパスワード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CHANGE PASSWORD.Summary-->CHANGE PASSWORD コマンドを使用して、カレントユーザのパスワードを変更できます。<!-- END REF-->このコマンドは現在のパスワードを、引数 *password* に渡した新しいパスワードに置き換えます。 

**警告:** パスワードでは大文字小文字が区別されます。

#### 例題 

以下の例題を使用して、ユーザがパスワードの変更を行います。

```4d
 CHANGE CURRENT USER //ユーザにパスワードダイアログを表示する
 If(OK=1)
    $pw1:=Request("Enter new password for "+Current user)
  //パスワードは少なくとも5文字以上にする
    If(((OK=1)&($pw1#""))&(Length($pw1)>5))
  //パスワードが正確に入力されたことを確認する
       $pw2:=Request("Enter password again")
       If((OK=1)&($pw1=$pw2))
          CHANGE PASSWORD($pw2) //パスワードの変更
       End if
    End if
 End if
```

#### 参照 

[CHANGE CURRENT USER](change-current-user.md)  
[OBJECT SET FONT](object-set-font.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 186 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


