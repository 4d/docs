---
id: get-serial-information
title: GET SERIAL INFORMATION
slug: /commands/get-serial-information
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL INFORMATION.Syntax-->**GET SERIAL INFORMATION** ( *key* ; *user* ; *company* ; *connected* ; *maxUser* )<!-- END REF-->
<!--REF #_command_.GET SERIAL INFORMATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| key | Integer | &#x1F858; | ユニークな製品キー (暗号化) |
| user | Text | &#x1F858; | 登録名 |
| company | Text | &#x1F858; | 登録された会社名 |
| connected | Integer | &#x1F858; | 接続ユーザ数 |
| maxUser | Integer | &#x1F858; | 最大接続ユーザ数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET SERIAL INFORMATION.Summary-->GET SERIAL INFORMATIONコマンドは、4Dのカレントバージョンのシリアル番号に関する各種情報を返します。<!-- END REF-->

* *key*: インストールされた製品のユニークなID。固有の番号がマシンにインストールされた4Dアプリケーション（4D Server、ローカルモードの4D、4D Desktop等）に関連付けられます。もちろん、この番号は暗号化されています。
* *user*: インストール時に定義された、アプリケーションのユーザ名
* *company*: インストール時に定義された、ユーザの会社名または組織名
* *connected*: コマンド実行時の接続ユーザ数
* *maxUsers*: 同時接続最大ユーザ数

**Note:** 最後の2つの引数は、シングルユーザの4Dでは常に1を返し、例外としてデモバージョンでは0が返されます。

GET SERIAL INFORMATION コマンドは、4Dで採用された包括的なコンポーネント保護機構の一部です。コンポーネントの開発者は、違法コピーを防ぐため、自分の製品のコピーとインストールした所定の4Dアプリケーションとを関連付けることができます。

シリアル確認は以下のように動作します。コンポーネントを必要とするユーザは、GET SERIAL INFORMATION コマンドが返すユニークkey値をコンポーネントの開発者へ送ります。これはコンポーネントのデモバージョンに含まれる注文書を通して行われます。  
コンポーネント開発者は、ユーザから送られてきた"key"値と何らかの暗号値を組み合わせて独自のシリアル番号を生成し、その番号をコンポーネントを購入したいユーザへ送ります。配付してあるコンポーネント（デモ版）にはデベロッパーより発行されたシリアル番号とGET SERIAL INFORMATIONコマンドが返す"key"値の適合性を検査する機能を盛り込んでおきます。この機能を実行し入力したシリアル番号が正しいものであればコンポーネントの機能を利用可能にします。

**Note:** プラグインの開発者も、この保護機構を使用することができます。詳細は[4D Plugin AP](http://sources.4d.com/trac/4d%5F4dpluginapi#no1)Iリファレンスを参照してください。
