---
id: propertiesScale
title: Scale
---

* * *

## バーバーショップ

このプロパティは、サーモメーターの "バーバーショップ" バリエーションを有効にします。

#### JSON 文法

|        名        | データタイプ | とりうる値                                      |
|:---------------:|:------:| ------------------------------------------ |
| [max](#maximum) | number | プロパティが存在しない = 有効; 存在する = 無効 (デフォルトサーモメーター) |


#### 対象オブジェクト

[バーバーショップ](progressIndicator.md#barber-shop)

* * *

## 目盛りを表示

ラベルの隣に目盛を表示、または非表示にします。

#### JSON 文法

|        名        | データタイプ  | とりうる値           |
|:---------------:|:-------:| --------------- |
| showGraduations | boolean | "true", "false" |


#### 対象オブジェクト

[デフォルトサーモメーター](progressIndicator.md#デフォルトサーモメーター) - [ルーラー](ruler.md)

* * *

## 目盛りのステップ

目盛の表示単位です。

#### JSON 文法

|       名        | データタイプ  | とりうる値  |
|:--------------:|:-------:| ------ |
| graduationStep | integer | 最小値: 0 |


#### 対象オブジェクト

[デフォルトサーモメーター](progressIndicator.md#デフォルトサーモメーター) - [ルーラー](ruler.md)

* * *

## ラベル位置

ラベルが表示される際の位置です。

* なし - ラベルは表示されません。
* 上 - インジケーターの上または左にラベルを表示します。
* 下 - インジケーターの下または右にラベルを表示します。

#### JSON 文法

|        名        | データタイプ | とりうる値                                    |
|:---------------:|:------:| ---------------------------------------- |
| labelsPlacement | string | "none", "top", "bottom", "left", "right" |


#### 対象オブジェクト

[デフォルトサーモメーター](progressIndicator.md#デフォルトサーモメーター) - [ルーラー](ruler.md)

* * *

## 最大

インジケーターの最大値です。

- 時間型のステッパーの場合、値は秒を表します。日付型のステッパーでは、最小および最大プロパティは無視されます。
- [バーバーショップサーモメーター](progressIndicator.md#バーバーショップ) を有効にするには、このプロパティを取り除きます。 

#### JSON 文法

|  名  |     データタイプ      | とりうる値                               |
|:---:|:---------------:| ----------------------------------- |
| max | string / number | minimum: 0 (for numeric data types) |


#### 対象オブジェクト

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

* * *

## 最小

インジケーターの最小値です。 時間型のステッパーの場合、値は秒を表します。日付型のステッパーでは、最小および最大プロパティは無視されます。

#### JSON 文法

|  名  |     データタイプ      | とりうる値                               |
|:---:|:---------------:| ----------------------------------- |
| min | string / number | minimum: 0 (for numeric data types) |


#### 対象オブジェクト

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

* * *

## Step

Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.

#### JSON 文法

|  名   | データタイプ  | とりうる値  |
|:----:|:-------:| ------ |
| step | integer | 最小値: 1 |


#### 対象オブジェクト

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)