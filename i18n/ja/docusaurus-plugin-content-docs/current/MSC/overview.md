---
id: overview
title: メンテナンス＆セキュリティセンター
sidebar_label: メンテナンス＆セキュリティセンター
---

Maintenance & Security Center (MSC) は、データとストラクチャーファイルを検証、保守、バックアップそして圧縮および暗号化するツールを提供します。 MSC ウィンドウは、すべての 4Dアプリケーション (4Dシングルユーザー、4D Server、4D Desktop) から利用できます。

**Note:** The MSC window is not available from a 4D remote connection.

MSCウィンドウを開く方法は幾つかあります。 アクセスの方法により、"メンテナンス" モードまたは "標準" モードのいずれによってアプリケーションを開くかが決定されます。 メンテナンスモードの場合、4D はプロジェクトを開かず、その参照だけが MSC に供給されます。 標準モードの場合、4D はプロジェクトを開きます。

## メンテナンスモードでの表示

メンテナンスモードでは、MSCウィンドウだけが表示されます (4Dアプリケーションはプロジェクトを開きません)。 つまり、損傷が激しいため 4D が標準モードで開けないプロジェクトにもアクセスできるということです。 Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see [Feature availability](#feature-availability)).

次の 2つの場所から、MSC をメインテナンスモードで開くことができます:

- **From the standard project opening dialog box**
  The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button:
  ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)\
  ![](../assets/en/MSC/mscicon.png)\
  When you call this function, a standard Open file dialog appears so that you can select the _.4DProject_ or _.4dz_ file of the to be examined. プロジェクトは開かれません。

## 標準モードでの表示

標準モードではプロジェクトが開いています。 このモードでは、特定の保守機能を使用できません。 この場合に MSCウィンドウを開く方法は幾つかあります。

- Use the **Help/Maintenance Security Center** menu or the **MSC** button in the 4D toolbar:\
  ![](../assets/en/MSC/mscicon.png)
- メニューコマンドやフォームオブジェクトに割り当てることのできる "msc" 標準アクションを使用する。
- Use the `OPEN SECURITY CENTER` language command.

## アクセス権

特定の MSC機能は、MSC が開かれたモードによっては利用できません:

- バックアップ機能は、プロジェクトが開かれている状態でしか利用できません (MSC は標準モードで開かれている必要があります)。
- データの圧縮、ロールバック、復元、修復、および暗号化の機能は、開いていないデータファイルでのみ使用できます (MSC はメンテナンスモードで開かれていなければなりません) 。 プロジェクトが標準モードで開かれている時にこれらの機能を試みた場合は、メンテナンスモードでアプリケーション再起動を促すダイアログボックスが表示されます。
- In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see [Encrypt page](encrypt.md)). 提供されていない場合、暗号化されたデータは見ることができません。
