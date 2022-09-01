---
id: overview
title: 概要
sidebar_label: 概要
---

Maintenance & Security Center (MSC) は、データとストラクチャーファイルを検証、保守、バックアップそして圧縮および暗号化するツールを提供します。 MSC ウィンドウは、すべての 4Dアプリケーション (4Dシングルユーザー、4D Server、4D Desktop) から利用できます。

**注**: MSC は 4Dリモート接続ではご利用いただけません。

MSCウィンドウを開く方法は幾つかあります。 アクセスの方法により、"メンテナンス" モードまたは "標準" モードのいずれによってアプリケーションを開くかが決定されます。 メンテナンスモードの場合、4D はプロジェクトを開かず、その参照だけが MSC に供給されます。 標準モードの場合、4D はプロジェクトを開きます。

## メンテナンスモードでの表示

メンテナンスモードでは、MSCウィンドウだけが表示されます (4Dアプリケーションはプロジェクトを開きません)。 つまり、損傷が激しいため 4D が標準モードで開けないプロジェクトにもアクセスできるということです。 さらに、特定の操作 (圧縮、修復など) はプロジェクトをメンテナンスモードで開くことを要求します ([アクセス権](#アクセス権) 参照)。

次の 2つの場所から、MSC をメインテナンスモードで開くことができます:

- **From the standard project opening dialog box** The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)  
  ![](../assets/en/MSC/mscicon.png) When you call this function, a standard Open file dialog appears so that you can select the *.4DProject* or *.4dz* file of the to be examined. プロジェクトは開かれません。

## 標準モードでの表示

標準モードではプロジェクトが開いています。 このモードでは、特定の保守機能を使用できません。 この場合に MSCウィンドウを開く方法は幾つかあります。

- **ヘルプ＞メンテナンス＆セキュリティセンター (MSC)** メニュー、または、ツールバーの **MSC** ボタンの使用。  
  ![](../assets/en/MSC/mscicon.png)
- メニューコマンドやフォームオブジェクトに割り当てることのできる "msc" 標準アクションを使用する。
- `OPEN SECURITY CENTER` ランゲージコマンドを使用する。

## アクセス権

特定の MSC機能は、MSC が開かれたモードによっては利用できません:

- バックアップ機能は、プロジェクトが開かれている状態でしか利用できません (MSC は標準モードで開かれている必要があります)。
- データの圧縮、ロールバック、復元、修復、および暗号化の機能は、開いていないデータファイルでのみ使用できます (MSC はメインテナンスモードで開かれていなければなりません) 。 プロジェクトが標準モードで開かれている時にこれらの機能を試みた場合は、メインテナンスモードでアプリケーション再起動を促すダイアログボックスが表示されます。
- 暗号化されたデータベースにおいては、暗号化されたデータまたは .journal ファイルへのアクセスには有効なデータキーが提供されている必要があります ([暗号化ページ](encrypt.md) 参照)。 提供されていない場合、暗号化されたデータは見ることができません。
