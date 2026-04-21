---
id: web-set-root-folder
title: WEB SET ROOT FOLDER
slug: /commands/web-set-root-folder
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET ROOT FOLDER.Syntax-->**WEB SET ROOT FOLDER** ( *rootFolder* : Text )<!-- END REF-->
<!--REF #_command_.WEB SET ROOT FOLDER.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| rootFolder | Text | &#8594; | Webサーバルートフォルダのパス名 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|名称変更|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.WEB SET ROOT FOLDER.Summary-->**WEB SET ROOT FOLDER**コマンドを使用して、デフォルトのルートフォルダを変更します。<!-- END REF-->そのなかで4DはWebサーバがリクエストしたHTMLを探します。

このコマンドはデータベース設定に設定されているデフォルトのルートフォルダを考慮にいれません。このフォルダに関する詳細は*接続セキュリティ*を参照してください。

HTMLシンタックス (URLタイプ) 、またはシステムシンタックス (絶対パス) のいずれかでルートフォルダの場所を表します。

* HTMLシンタックス: 使用しているプラットフォームに関係なく、フォルダの名前をスラッシュ ("/") で区切ります。
* システムシンタックス: 現在のプラットフォームのシンタックスを考慮した絶対パス名 ("ロングネーム") 。  
   * (macOS) Disk:Applications:myserv:folder  
   * (Windows) C:\\Applications\\myserv\\folder

**Notes:**

* 新しいルートフォルダを考慮に入れるために、Webサーバの再起動が必要です。
* [Get 4D folder](../commands/get-4d-folder)コマンドを使用すると、何時でも現在のルートフォルダの場所を探すことができます。

無効なパス名を指定すると、OS Fileマネージャエラーが生成されます。[ON ERR CALL](../commands/on-err-call)メソッドでこのエラーを検知できます。エラーメソッド内から警告またはメッセージを表示する場合、ブラウザ側で表示されます。

## 参照 

[Get 4D folder](../commands/get-4d-folder)  
[ON ERR CALL](../commands/on-err-call)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 634 |
| スレッドセーフである | yes |
| システム変数を更新する | error |


