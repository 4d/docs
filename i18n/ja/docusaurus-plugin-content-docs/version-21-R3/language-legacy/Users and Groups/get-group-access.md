---
id: get-group-access
title: Get group access
slug: /commands/get-group-access
displayed_sidebar: docs
---

<!--REF #_command_.Get group access.Syntax-->**Get group access** : Collection<!-- END REF-->
<!--REF #_command_.Get group access.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Collection | &#8592; | ユーザーが所属するグループ名のコレクション |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|18 R4|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get group access.Summary-->**Get group access** コマンドはカレントセッションにおける4D ユーザーアカウントの所属情報を返します。<!-- END REF-->ユーザーがセッション内においてどのグループにも所属していない場合、空のコレクションが返されます。

**返される値**

文字列のコレクション: 4D ユーザーアカウントが所属しているグループの名前

## 例題 

カレントのユーザーが"plugins" グループに所属しているかどうかをチェックしたい場合を考えます:

```4d
 $groups:=Get group access
 If($groups.countValues("plugins")#0) // ユーザーがplugins グループに所属している
    ... //
 End if
```

## 参照 

[SET GROUP ACCESS](../commands/set-group-access)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1738 |
| スレッドセーフである | yes |


