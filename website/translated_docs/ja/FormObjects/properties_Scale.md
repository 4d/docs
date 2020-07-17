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

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

* * *

## Graduation step

Scale display measurement.

#### JSON 文法

|       名        | データタイプ  | とりうる値  |
|:--------------:|:-------:| ------ |
| graduationStep | integer | 最小値: 0 |


#### 対象オブジェクト

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

* * *

## Label Location

Specifies the location of an object's displayed text.

* None - no label is displayed
* Top - Displays labels to the left of or above an indicator
* Bottom - Displays labels to the right of or below an indicator

#### JSON 文法

|        名        | データタイプ | とりうる値                                    |
|:---------------:|:------:| ---------------------------------------- |
| labelsPlacement | string | "none", "top", "bottom", "left", "right" |


#### 対象オブジェクト

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler)

* * *

## Maximum

Maximum value of an indicator.

- For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.
- To enable [Barber shop thermometers](progressIndicator.md#barber-shop), this property must be omitted. 

#### JSON 文法

|  名  |     データタイプ      | とりうる値                               |
|:---:|:---------------:| ----------------------------------- |
| max | string / number | minimum: 0 (for numeric data types) |


#### 対象オブジェクト

[Thermometer](progressIndicator.md#thermometer) - [Ruler](ruler.md#ruler) - [Stepper](stepper.md#stepper)

* * *

## Minimum

Minimum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.

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