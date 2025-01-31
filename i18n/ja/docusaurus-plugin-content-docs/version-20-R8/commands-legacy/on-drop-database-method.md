---
id: on-drop-database-method
title: On Drop database method
slug: /commands/on-drop-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Drop database method.Syntax-->**On Dropデータベースメソッド**<!-- END REF-->
<!--REF #_command_.On Drop database method.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Drop database method.Summary-->**On Dropデータベースメソッド**はローカルおよびリモートモードの4Dで使用できます。<!-- END REF-->

このデータベースメソッドは、オブジェクトが4Dアプリケーションのフォームやウィンドウコンテキストの外にドロップされると自動で実行されます。プラットフォームとアプリケーションタイプに応じて、異なるドロップアクションがサポートされています:

| **アクション**               | **プラットフォーム**        | **補足**                                                                                                                                                                                                    |
| ----------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MDIウィンドウの空のエリアへのドロップ    | Windows             | データベースがSDIモードの場合にはMDIウィンドウが存在しないため、利用できません(*SDI mode on Windows* の章を参照してください)。                                                                                                                            |
| Dockの4Dアイコンへのドロップ       | macOS               |                                                                                                                                                                                                           |
| システムデスクトップの4Dアイコンへのドロップ | Windows(\*) & macOS | **On Dropデータベースメソッド** は、4Dアプリケーションがすでに起動している場合にのみ呼び出されます(ただし4D Desktopに組み込まれているアプリケーションの場合を除く)。4D Desktopに組み込まれているアプリケーションの場合、アプリケーションが起動していなくてもこのデータベースメソッドが呼び出されます。これはつまりカスタムのドキュメント署名を定義することが可能ということです |

(\*) Windows用64-bit版4D Developerではサポートされません。この場合、このアクションでは新しいアプリケーションインスタンスを起動してしまうからです(システム機能)。

Macでは、このデータベースメソッドが呼び出されるためにはドロップ中**Option**+**Command** キーを押さえておく必要があります。

#### 例題 

この例題は、フォーム外側にドロップされた4D Writeドキュメントを開きます:

```4d
  //On Drop database method
 droppedFile:=Get file from pasteboard(1)
 If(Position(".4W7";droppedFile)=Length(droppedFile)-3)
    externalArea:=Open external window(100;100;500;500;0;droppedFile;"_4D Write")
    WR OPEN DOCUMENT(externalArea;droppedFile)
 End if
```

#### 参照 

*ドラッグ＆ドロップ*  