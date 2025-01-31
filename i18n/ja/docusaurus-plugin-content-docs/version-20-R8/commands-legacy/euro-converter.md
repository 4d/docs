---
id: euro-converter
title: Euro converter
slug: /commands/euro-converter
displayed_sidebar: docs
---

<!--REF #_command_.Euro converter.Syntax-->**Euro converter** ( *value* ; *fromCurrency* ; *toCurrency* ) : Real<!-- END REF-->
<!--REF #_command_.Euro converter.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| value | Real | &#8594;  | 変換する値 |
| fromCurrency | Text | &#8594;  | valueの通貨コード |
| toCurrency | Text | &#8594;  | 変換先通貨コード |
| 戻り値 | Real | &#8592; | 変換された値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Euro converter.Summary-->コマンドは"ユーロ"に所属するユーロ通貨の元と先の異なった通貨の値を変換します。<!-- END REF-->

変換できるものは:

* 各国通貨からユーロ
* ユーロから各国通貨
* 各国通貨から他の各国通貨。この場合変換はユーロを仲介して計算されます。例えば、ベルギーフランをドイツマルクに変換すると、4Ｄは以下の計算を実行します:

ベルギーフラン -> ユーロ -> ドイツマルク

最初の引数を変換する値とします。  
2番目の引数は第一引数の通貨コードを示します。  
3番目の引数は変換後の通貨コードを示します。

通貨コードを指定するために、4Dは “” の定義済み定数を提供します:

| 定数                  | 型   | 値   |
| ------------------- | --- | --- |
| Austrian Schilling  | 文字列 | ATS |
| Belgian Franc       | 文字列 | BEF |
| Deutsche Mark       | 文字列 | DEM |
| Euro                | 文字列 | EUR |
| Finnish Markka      | 文字列 | FIM |
| French Franc        | 文字列 | FRF |
| Greek Drachma       | 文字列 | GRD |
| Irish Pound         | 文字列 | IEP |
| Italian Lira        | 文字列 | ITL |
| Luxembourg Franc    | 文字列 | LUF |
| Netherlands Guilder | 文字列 | NLG |
| Portuguese Escudo   | 文字列 | PTE |
| Spanish Peseta      | 文字列 | ESP |

必要な場合、4Dは変換した結果が小数点2位となるよう自動的に四捨五入します。例外としてイタリアリラ、ベルギーフラン、ルクセンブルグフラン、スペインペセタへの変換時、4Ｄは結果が整数値となるようにします。

ユーロと11の参加メンバー国の通貨の変換レートは固定されています:

| **通貨**              | **1ユーロの値** |
| ------------------- | ---------- |
| Austrian Schilling  | 13.7603    |
| Belgian Franc       | 40.3399    |
| Deutschemark        | 1.95583    |
| Finnish Markka      | 5.94573    |
| French Franc        | 6.55957    |
| Greek drachma       | 340.750    |
| Irish Pound         | 0.787564   |
| Italian Lire        | 1936.27    |
| Luxembourg Franc    | 40.3399    |
| Netherlands Guilder | 2.20371    |
| Portuguese Escudo   | 200.482    |
| Spanish Peseta      | 166.386    |

#### 例題 

以下の例題はこのコマンドを使用して変換したものです:

```4d
 $value:=10000 //フランスフラン値
  //ユーロ値に変換
 $InEuros:=Euro converter($value;French Franc;Euro)
  //イタリアリラに変換
 $InLires:=Euro converter($value;French Franc;Italian Lire)
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 676 |
| スレッドセーフである | &check; |


