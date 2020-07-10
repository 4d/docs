---
id: licenses
title: Managing 4D Licenses
---

ディスクへのインストール終了後、4D 製品を利用するためにはアクティベーションをおこないます。 Usually, the activation is automatic if you [sign in using your 4D account](GettingStarted/Installation.md) in the Welcome Wizard.

However, in specific cases you could need to activate your licenses manually, for example if:

- your configuration does not allow the automatic activation,
- you have purchased additional licenses. 

以下の利用モードの場合には、アクティベーションは必要はありません:

- リモートモードで利用される 4D (4D Serverへの接続)
- インタープリターモードのデータベースを開く場合で、デザインモードへはアクセスしないローカルモードの4D

## First activation

With 4D, select the **License Manager...** command from the **Help** menu of the application. With 4D Server, just launch the 4D Server application. [アクティベーションモード](#アクティベーションモード) を選択するダイアログボックスが表示されます。

![](assets/en/getStart/server1.png)

4D は 3つのアクティベーションモードを用意しています。 推奨されるのは **オンラインアクティベーション** です。

### オンラインアクティベーション

ユーザーID (メールアドレスまたは 4Dアカウント) とパスワードを入力します。 既存のユーザーアカウントが無い場合、まず以下のアドレスから作成する必要があります:

<https://account.4d.com/us/login.shtml>

![](assets/en/getStart/activ1.png)

その後、アクティベーションする製品のプロダクト番号を入力します。 このプロダクト番号は製品購入後にメールまたは郵送で提供されています。

![](assets/en/getStart/activ2.png)

### オフラインアクティベーション

コンピューターからインターネットへのアクセスがないために [オンラインアクティベーション](#オンラインアクティベーション) が出来ない場合、以下の手順を踏んでオフラインアクティベーションへと進んで下さい。

1. **ヘルプ** メニューから "ライセンスマネージャー" を開き、**オフラインアクティベーション** タブを選択します。
2. ライセンス番号とメールアドレスを入力し、**ファイルを生成** をクリックして IDファイル (*reg.txt*) を作成します。

![](assets/en/getStart/activ3.png)

3. 生成された *reg.txt* ファイルを USBドライブへと保存し、インターネット環境があるコンピューターへと移動させます。
4. インターネット環境のあるマシンから、<https://store.4d.com/jp/activation.shtml> にログインします。
5. Web ページ上にて、**ファイルを選択...** ボタンをクリックし、手順3と4で生成した *reg.txt* ファイルを選択し、**Activate** ボタンをクリックします。
6. シリアルファイルをダウンロードします。

![](assets/en/getStart/activ4.png)

7. *license4d* ファイルを、何らかの共有メディアに保存し、手順1で使用している4Dマシンへと移動させます。
8. **"オフラインアクティベーション"** 画面のままになっている、4D をインストールしたマシン上にて、画面上の **次へ** をクリックし、次に **読み込み...** ボタンをクリックして、手順7の共有メディアにある *license4d* ファイルを選択します。

![](assets/en/getStart/activ5.png)

ライセンスファイルが読み込まれた状態で、**次へ** をクリックします。

![](assets/en/getStart/activ6.png)

9. 他のライセンスを追加するためには **番号追加** ボタンをクリックします。 これらの手順を、手順6のライセンスがすべて追加されるまで繰り返します。

これで、お使いの4Dアプリケーションのアクティベーションが完了しました。

### 緊急アクティベーション

このモードは、特別に一時的な4Dのアクティベーションをおこなうために使用します。このアクティベーションを行うと、4Dインターネットサイトに接続せずに、最大5日間4Dを利用できます。 このアクティベーションは一回のみ使用することができます。

## ライセンスの追加

アプリケーションの拡張ライセンスは、いつでも追加することができます。

4D または 4D Server アプリケーションの **ヘルプ** メニューから **ライセンスマネージャー...** を選択し、**更新** ボタンをクリックしてください:

![](assets/en/getStart/licens1.png)

このボタンを押すと 4D カスタマーデータベースに接続し、利用中のライセンスに紐付いている新しい、あるいは更新されたライセンスの自動アクティベーションがおこなわれます (利用中のライセンスは "有効なライセンス" 一覧内で **太字** で表示されているものです)。 その際、4D アカウントとパスワードの入力が必要です。

- 4D Server に追加のエクスパンションを購入した場合、ライセンス番号は一切入力する必要がありません。**更新** ボタンをクリックすれば、すべて完了します。
- At the first activation of a 4D Server, you just need to enter the server number and all the purchased expansions are automatically assigned.

You can use the **Refresh** button in the following contexts:

- When you have purchased an additional expansion and want to activate it,
- When you need to update an expired temporary number (Partners or evolutions).

## 4D Online Store

In 4D Store, you can order, upgrade, extend, and/or manage 4D products. You can reach the store at the following address: <https://store.4d.com/us/> (you will need to select your country).

Click **Login** to sign in using your existing account or **New Account** to create a new one, then follow the on-screen instructions.

### License Management

After you log in, you can click on **License list** at the top right of the page:

![](assets/en/getStart/licens2.png)

Here you can manage your licenses by assigning them to projects.

Select the appropriate license from the list then click **Link to a project... >**:

![](assets/en/getStart/licens3.png)

You can either select an existing project or create a new one:

![](assets/en/getStart/licens4.png)

![](assets/en/getStart/licens5.png)

You can use projects to organize your licenses according to your needs:

![](assets/en/getStart/licens6.png)

## Troubleshooting

If the installation or activation process fails, please check the following table, which gives the most common causes of malfunctioning:

| Symptoms                                                      | Possible causes                                            | Solution(s)                                                                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Impossible to download product from 4D Internet site          | Internet site unavailable, antivirus application, firewall | 1- Try again later OR 2- Temporarily disable your antivirus application or your firewall.                                                       |
| Impossible to install product on disk (installation refused). | Insufficient user access rights                            | Open a session with access rights allowing you to install applications (administrator access)                                                   |
| Failure of on-line activation                                 | Antivirus application, firewall, proxy                     | 1- Temporarily disable your antivirus application or your firewall OR 2- Use deferred activation (not available with licenses for "R" versions) |


If this information does not help you resolve your problem, please contact 4D or your local distributor.

## Contacts

For any questions about the installation or activation of your product, please contact 4D, Inc. or your local distributor.

For the US:

- Web: <https://us.4d.com/4d-technical-support>
- Telephone: 1-408-557-4600

For the UK:

- Web: <https://uk.4d.com/4d-technical-support>
- Telephone: 01625 536178