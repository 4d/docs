---
id: installation
title: インストールとアクティベーション
---

4D へようこそ！ このページでは、4D 製品のインストールとアクティベーションについて必要な情報をまとめています。


## 最低動作環境

4D 製品の macOS / Windows における最小動作環境については、4D Webサイトの [製品ダウンロード](https://jp.4d.com/product-download) ページを参照してください。

追加の情報は 4D Webサイトの [リソースページ](https://jp.4d.com/resources/) にてご確認いただけます。


## ディスクへのインストール

4D 製品のインストーラーは 4D の Web サイトから入手していただけます:

1. 4D Web サイトに接続し、[製品ダウンロード](https://jp.4d.com/product-download) ページを開きます。
2. 必要な製品バージョンのダウンロードリンクをクリックして、インストーラーをダウンロードします。インストールにあたっては、画面に表示される指示に従ってください。


## 製品のアクティベーション

ディスクへのインストール終了後、4D 製品を利用するためにはアクティベーションをおこないます。 また、追加のライセンスを入手した際にもアクティベーションをおこなう必要があります。

以下の利用モードの場合には、アクティベーションは必要はありません:

- リモートモードで利用される 4D (4D Serverへの接続)
- インタープリターモードのデータベースを開く場合で、デザインモードへはアクセスしないローカルモードの4D

**Important:** You must have an Internet connection and an e-mail account in order to activate your products.

### 4D のアクティベーション

1. 4D アプリケーションを起動します。
2. Select the **License Manager...** command from the **Help** menu.

![](assets/en/getStart/helpMenu.png)

The **License Manager** dialog box is displayed (Instant Activation page is selected by default). 次のアクティベーションモードの章を参照してください。

> アクティベーションされていない 4D Developer Edition を使って、インタープリターモードのローカルデータベースを開く、または新規作成すると、自動アクティベーション機構が作動します。 ダイアログボックスが表示され、お使いの 4D が私たちのカスタマーデータベースに接続し、ライセンスをアクティベーションすることを知らせます (ご利用の 4Dアカウントのパスワードを入力する必要があります)。

### 4D Server のアクティベーション

1. 4D Server アプリケーションを起動します。 [アクティベーションモード](#アクティベーションモード) を選択するダイアログボックスが表示されます。

![](assets/en/getStart/helpMenu.png)


## アクティベーションモード

4D は 3つのアクティベーションモードを用意しています。 We recommend **Instant Activation**.

### オンラインアクティベーション

ユーザーID (メールアドレスまたは 4Dアカウント) とパスワードを入力します。 既存のユーザーアカウントが無い場合、まず以下のアドレスから作成する必要があります:

[https://account.4d.com/us/login.shtml](https://account.4d.com/us/login.shtml)

![](assets/en/getStart/activ1.png)

その後、アクティベーションする製品のプロダクト番号を入力します。 このプロダクト番号は製品購入後にメールまたは郵送で提供されています。

![](assets/en/getStart/activ2.png)


### オフラインアクティベーション

コンピューターからインターネットへのアクセスがないために [オンラインアクティベーション](#オンラインアクティベーション) が出来ない場合、以下の手順を踏んでオフラインアクティベーションへと進んで下さい。

1. In the License Manager window, select the **Deferred Activation** tab.
2. Enter the License Number and your e-mail address, then click **Generate file** to create the ID file (*reg.txt*).

![](assets/en/getStart/activ3.png)

3. Save the *reg.txt* file to a USB drive and take it to a computer that has internet access.
4. インターネット環境のあるマシンから、[https://store.4d.com/jp/activation.shtml](https://store.4d.com/jp/activation.shtml) にログインします。
5. On the Web page, click on the **Choose File...** button and select the *reg.txt* file from steps 3 and 4; then click on the **Activate** button.
6. シリアルファイルをダウンロードします。

![](assets/en/getStart/activ4.png)

7. Save the *license4d* file(s) on a shared media and transfer them back to the 4D machine from step 1.
8. Now back on the machine with 4D, still on the **Deferred Activation** page, click **Next**; then click the **Load...** button and select a *license4d* file from the shared media from step 7.

![](assets/en/getStart/activ5.png)

With the license file loaded, click on **Next**.

![](assets/en/getStart/activ6.png)

9. Click on the **Add N°** button to add another license. これらの手順を、手順6のライセンスがすべて追加されるまで繰り返します。

これで、お使いの4Dアプリケーションのアクティベーションが完了しました。

### 緊急アクティベーション

このモードは、特別に一時的な4Dのアクティベーションをおこなうために使用します。このアクティベーションを行うと、4Dインターネットサイトに接続せずに、最大5日間4Dを利用できます。 このアクティベーションは一回のみ使用することができます。


## ライセンスの追加

アプリケーションの拡張ライセンスは、いつでも追加することができます。

Choose the **License Manager...** command from the **Help** menu of the 4D or 4D Server application, then click on the **Refresh** button:

![](assets/en/getStart/licens1.png)

This button connects you to our customer database and automatically activates any new or updated licenses related to the current license (the current license is displayed in **bold** in the "Active Licenses" list). その際、4D アカウントとパスワードの入力が必要です。

- If you purchased additional expansions for a 4D Server, you do not need to enter any license number -- just click **Refresh**.
- 4D Server の初回アクティベーション時のみ、サーバーのライセンス番号を入力すれば、購入した他のエクスパンションもすべて自動的に有効化されます。

You can use the **Refresh** button in the following contexts:

- 追加のエクスパンションを購入したとき、またはそれをアクティベートしたいとき。
- パートナーなどの失効した有限ライセンスを更新するとき。



## 4D オンラインストア

4D ストアでは、4D製品の注文、アップグレード、延長、管理等をおこなうことができます。 ストアは以下のアドレスからアクセス可能です: [https://store.4d.com/jp/](https://store.4d.com/jp/)

Click **Login** to sign in using your existing account or **New Account** to create a new one, then follow the on-screen instructions.

### ライセンス管理

After you log in, you can click on **License list** at the top right of the page:

![](assets/en/getStart/licens2.png)

ここでは、ライセンスをプロジェクト単位でグループ化して管理することができます。

Select the appropriate license from the list then click **Link to a project... >**:

![](assets/en/getStart/licens3.png)

既存プロジェクトを選択、または新規プロジェクトを作成します:

![](assets/en/getStart/licens4.png)

![](assets/en/getStart/licens5.png)

プロジェクトを利用することで、必要に応じてライセンスを整理することができます:

![](assets/en/getStart/licens6.png)


## トラブルシューティング

インストールやアクティベーションに失敗する場合は以下の表を参照してください。ほとんどの問題はこれらのケースに当てはまります:

| 症状                                  | 考えられる原因                              | 解決法                                                                                             |
| ----------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 4D社のサイトからインストーラーをダウンロードできません。       | サイトがダウンしている、またはアンチウィルスやファイアウォールなどの影響 | 1- 時間を空けて再度試してください、または 2- 一時的にアンチウィルスソフトやファイアウォールを無効にしてください。                                    |
| ディスクに製品をインストールできません (インストールが拒否される)。 | アプリケーションのインストール権限がない                 | アプリケーションをインストールする権限を持ったセッションを開いてください (管理者アクセス)。                                                 |
| オンラインアクティベーションに失敗します。               | アンチウィルス、ファイアーウォール、プロキシ               | 1- 一時的にアンチウィルスソフトやファイアウォールを無効にしてください、または 2- オフラインアクティベーションを試してください。(ただし "R" バージョン用のライセンスでは利用不可) |

この情報で問題が解決しない場合は、お問い合わせください。


## 連絡先

For any questions about the installation or activation of your product, please contact 4D, Inc. or your local distributor.

日本にお住まいの方:

- Web: [https://jp.4d.com/technical-support](https://jp.4d.com/technical-support)
- Tel: 03-4400-1789

-
-


4Dデベロッパーのオンラインコミュニティは以下のWeb サイトで見つけることができます: [https://discuss.4d.com](https://discuss.4d.com)

