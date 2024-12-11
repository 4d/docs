---
id: version-type
title: Version type
slug: /commands/version-type
displayed_sidebar: docs
---

<!--REF #_command_.Version type.Syntax-->**Version type**  : Integer<!-- END REF-->
<!--REF #_command_.Version type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | バージョンのタイプに関する情報(ビットフィールド形式) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Version type.Summary-->**Version type** コマンドは、現在実行している4Dや4D Server環境のバージョンタイプを示す数値を返します。<!-- END REF-->4Dでは *4D Environment*テーマ内にある以下の定義済み定数が用意されています。

| 定数                 | 型    | 値 | コメント                                           |
| ------------------ | ---- | - | ---------------------------------------------- |
| 64 bit version     | 倍長整数 | 1 |                                                |
| Demo version       | 倍長整数 | 0 |                                                |
| Merged application | 倍長整数 | 2 | バージョンは 4D Volume Desktopを使用して組み込まれたアプリケーションです。 |

**注:** カレントバージョンの4Dでは、デモモードは使用することが出来ません。

**注**: **Version type** は*ビットフィールド*の形式で値を返します。ビットワイズ演算子を使用してそれを解析しなければなりません (例題参照)。

#### 例題 

以下の例によって、あるバージョンが4Dによってビルドされたアプリなのか4Dサーバーによって開かれたデータベースなのかを判別し、それに応じて違うコードを実行する、ということが出来るようになります:

```4d
 If(Version type?? Merged application)
  // ここにビルドされたアプリ用のコードを書きます。
 Else
  // ここに4Dによって実行されたデータベース用のコードを書きます。
 End if
```

#### 参照 

[Application type](application-type.md)  
[Application version](application-version.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 495 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


