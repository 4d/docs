---
id: equal-pictures
title: Equal pictures
slug: /commands/equal-pictures
displayed_sidebar: docs
---

<!--REF #_command_.Equal pictures.Syntax-->**Equal pictures** ( *picture1* ; *picture2* ; *mask* ) : Boolean<!-- END REF-->
<!--REF #_command_.Equal pictures.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture1 | Picture, Picture | &#8594;  | 元のソースピクチャー |
| picture2 | Picture, Picture | &#8594;  | 比較するピクチャー |
| mask | Picture, Picture | &#8592; | 結果のマスク |
| 戻り値 | Boolean | &#8592; | 2つのピクチャーが同じ場合True、そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Equal pictures.Summary-->**Equal pictures**コマンドは2つのピクチャーの寸法と内容を厳密に比較します。<!-- END REF-->には元のピクチャーを、*picture2* には比較したいピクチャーを渡します。 

* ピクチャーの寸法が異なる場合、コマンドは**False**を返し、*mask* 引数には空のピクチャーが返されます。
* ピクチャーの寸法が同じで内容が異なる場合、コマンドは**False**を返し、*mask* 引数には2つのピクチャーを比較したピクチャーマスクの結果が返されます。この比較はピクセルごとに行われ、黒の背景上に、一致しないピクセルが白で表されます。
* 両ピクチャーがまったく同じ場合、コマンドは**True**を返し、*mask* 引数には黒のピクチャーが返されます。

#### システム変数およびセット 

コマンドが正しく実行（２つのピクチャが比較）されると、システム変数OKは1に設定されます。そうでなければOKに0が設定されます。具体例として、片方のピクチャが初期化されていない（空のピクチャ）であると、システム変数OKは0に設定されます。

#### 例題 

この例題では2つのピクチャー (pict1 と pict2) を比較し、結果のマスクを取得します:

![](../assets/en/commands/pict847365.fr.png)

以下は比較を実行するコードです:

```4d
 $equal :=Equal pictures($pict1;$pict2;$mask)
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1196 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


