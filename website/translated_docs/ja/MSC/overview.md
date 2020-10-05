---
id: overview
title: 概要
sidebar_label: 概要
---

Maintenance & Security Center (MSC) は、データとストラクチャーファイルを検証、保守、バックアップそして圧縮および暗号化するツールを提供します。 MSC ウィンドウは、すべての 4Dアプリケーション (4Dシングルユーザー、4D Server、4D Desktop) から利用できます。

**注**: MSC は 4Dリモート接続ではご利用いただけません。

MSCウィンドウを開く方法は幾つかあります。 The way it is accessed also determines the way the application project is opened: in “maintenance” mode or “standard” mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. In standard mode, the project is opened by 4D.


## メンテナンスモードでの表示

In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see [Feature availability](#feature-availability)).

次の 2つの場所から、MSC をメインテナンスモードで開くことができます:

- **From the standard project opening dialog box** The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)  
  ![](assets/en/MSC/mscicon.png)   
  When you call this function, a standard Open file dialog appears so that you can select the *.4DProject* or *.4dz* file of the to be examined. The project will not be opened by 4D.

## 標準モードでの表示

In standard mode, a project is open. このモードでは、特定の保守機能を使用できません。 この場合に MSCウィンドウを開く方法は幾つかあります。

- **ヘルプ＞メンテナンス＆セキュリティセンター (MSC)** メニュー、または、ツールバーの **MSC** ボタンの使用。  
  ![](assets/en/MSC/mscicon.png)
- Use the “msc” standard action that it is possible to associate with a menu command or a form object.
- `OPEN SECURITY CENTER` ランゲージコマンドを使用する。

## アクセス権

特定の MSC機能は、MSC が開かれたモードによっては利用できません:

- Backup function is only available when the project is open (the MSC must have been opened in standard mode).
- データの圧縮、ロールバック、復元、修復、および暗号化の機能は、開いていないデータファイルでのみ使用できます (MSC はメインテナンスモードで開かれていなければなりません) 。 If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode.
- 暗号化されたデータベースにおいては、暗号化されたデータまたは .journal ファイルへのアクセスには有効なデータキーが提供されている必要があります ([暗号化ページ](encrypt.md) 参照)。 提供されていない場合、暗号化されたデータは見ることができません。 
