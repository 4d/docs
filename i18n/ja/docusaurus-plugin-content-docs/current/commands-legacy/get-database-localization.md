---
id: get-database-localization
title: Get database localization
slug: /commands/get-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.Get database localization.Syntax-->**Get database localization** {( {*languageType*}{;}{*} )} : Text<!-- END REF-->
<!--REF #_command_.Get database localization.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| languageType | Integer | &#8594;  | ランゲージの種類 |
| * | 演算子 | &#8594;  | ホストデータベースについての情報を返す |
| 戻り値 | Text | &#8592; | データベースのカレントランゲージ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get database localization.Summary-->**Get database localization**コマンドは、データベースのデフォルトランゲージ、または*languageType*で指定されたデータベースの言語を、RFC 3066で定義された標準で返します。<!-- END REF-->例えばコマンドは英語の場合“en”を、日本語の場合“ja”を返します。この標準およびコマンドから返される値の情報については、*Design Reference*マニュアルの*付録 B: XLIFFアーキテクチャー*を参照してください。

アプリケーション内では同時に複数の異なる言語設定を使用できます。取得する設定を指定するには、*languageType*に*4D Environment*テーマの以下の定数を渡します。

| 定数                       | 型    | 値 | コメント                                                                                              |
| ------------------------ | ---- | - | ------------------------------------------------------------------------------------------------- |
| Current localization     | 倍長整数 | 1 | アプリケーションのカレント言語: デフォルト言語または[SET DATABASE LOCALIZATION](set-database-localization.md)コマンドで設定された言語。 |
| Default localization     | 倍長整数 | 0 | Resourcesフォルダとシステム環境に基づき、4Dが起動時に自動で設定する言語 (変更不可)。                                                 |
| Internal 4D localization | 倍長整数 | 3 | 並び替えやテキスト比較で4Dが使用する言語 (アプリケーションの環境設定で設定)。                                                         |
| User system localization | 倍長整数 | 2 | システムのカレントユーザーが設定した言語                                                                              |

*languageType*を省略するとデフォルトでコマンドはデフォルトランゲージ (0) を返します。

任意の *\** 引数は、コンポーネントを使用しているアーキテクチャーの場合に有用です。これを使用することで、言語を調べたいデータベース(ホストまたはコンポーネント)を指定することができます。

* コマンドがコンポーネントから呼び出されているとき:  
   * *\** 引数が渡された場合、コマンドはホストデータベースの言語設定を返します。  
   * *\** 引数が渡されなかった場合、コマンドはコンポーネントデータベースの言語設定を返します。
* コマンドがホストデータベースのメソッドから呼ばれている場合、コマンドは常にホストデータベースの言語設定を返します(*\** 引数は無視されます)。

データベースのカレントランゲージは、ローカライズされたアイテムをプログラムが検索する.lprojフォルダを指定するために使用されます。4Dは自動で、データベースの開始時に、システム環境と**Resources**フォルダの内容で、カレントのランゲージを決定します。4Dは以下のような優先順位で、参照ランゲージに対応する.lprojフォルダを読み込みます:

1. システムランゲージ (Mac OSでは、環境設定で複数のランゲージの順番を設定できます。4Dはこの設定を使用します)。
2. 4Dアプリケーションのランゲージ
3. English
4. **Resources**フォルダで最初に見つかったフォルダ

**Note**: データベースに.lprojフォルダがない場合、4Dは以下の優先順位を適用します。1\. システムランゲージ、2\. English (システムランゲージを決定できなかった場合)

#### 参照 

[Localized document path](localized-document-path.md)  
[SET DATABASE LOCALIZATION](set-database-localization.md)  