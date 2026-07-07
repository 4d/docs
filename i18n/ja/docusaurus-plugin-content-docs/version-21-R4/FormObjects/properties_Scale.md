---
id: propertiesScale
title: スケール
---

## バーバーショップ

このプロパティは、サーモメーターの "バーバーショップ" バリエーションを有効にします。

#### JSON 文法

|     名称     | データタイプ | とりうる値                                                         |
| :--------: | :----: | ------------------------------------------------------------- |
| [max](#最大) | number | プロパティが存在しない = 有効; 存在する = 無効 (デフォルトサーモメーター) |

#### 対象オブジェクト

[バーバーショップ](progressIndicator.md#バーバーショップ)

#### コマンド

[OBJECT Get format](../commands/object-get-format) - [OBJECT Get indicator type](../commands/object-get-indicator-type) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET INDICATOR TYPE](../commands/object-set-indicator-type)

---

## 目盛りを表示

ラベルの隣に目盛を表示、または非表示にします。

#### JSON 文法

|        名称       |  データタイプ | とりうる値           |
| :-------------: | :-----: | --------------- |
| showGraduations | boolean | "true", "false" |

#### 対象オブジェクト

[サーモメーター](progressIndicator.md#サーモメーター) - [ルーラー](ruler.md)

#### コマンド

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## 目盛りのステップ

目盛の表示単位です。

#### JSON 文法

|       名称       |  データタイプ | とりうる値                  |
| :------------: | :-----: | ---------------------- |
| graduationStep | integer | 最小値: 0 |

#### 対象オブジェクト

[サーモメーター](progressIndicator.md#サーモメーター) - [ルーラー](ruler.md)

#### コマンド

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## ラベル位置

ラベルが表示される際の位置です。

- なし - ラベルは表示されません。
- 上 - インジケーターの上または左にラベルを表示します。
- 下 - インジケーターの下または右にラベルを表示します。

#### JSON 文法

|        名称       | データタイプ | とりうる値                                    |
| :-------------: | :----: | ---------------------------------------- |
| labelsPlacement | string | "none", "top", "bottom", "left", "right" |

#### 対象オブジェクト

[サーモメーター](progressIndicator.md#サーモメーター) - [ルーラー](ruler.md)

#### コマンド

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

---

## 最大

インジケーターの最大値です。

- 時間型のステッパーの場合、値は秒を表します。日付型のステッパーでは、最小および最大プロパティは無視されます。
- [バーバーショップサーモメーター](progressIndicator.md#バーバーショップ) を有効にするには、このプロパティを取り除きます。

#### JSON 文法

|  名称 | データタイプ | とりうる値 |
| :-: | :----: | ----- |
| max | number | 数値    |

#### 対象オブジェクト

[サーモメーター](progressIndicator.md#default-thermometer) - [ルーラー](ruler.md) - [ステッパー](stepper.md)

#### コマンド

[OBJECT Get format](../commands/object-get-format) [OBJECT Get maximum-value](../commands/object-get-maximum-value) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value)

---

## 最小

インジケーターの最小値です。 時間型のステッパーの場合、値は秒を表します。日付型のステッパーでは、最小および最大プロパティは無視されます。

#### JSON 文法

|  名称 | データタイプ | とりうる値 |
| :-: | :----: | ----- |
| min | number | 数値    |

#### 対象オブジェクト

[サーモメーター](progressIndicator.md#default-thermometer) - [ルーラー](ruler.md) - [ステッパー](stepper.md)

#### コマンド

[OBJECT Get format](../commands/object-get-format) - [OBJECT Get minimum-value](../commands/object-get-minimum-value) - [OBJECT SET FORMAT](../commands/object-set-format) - [OBJECT SET MINIMUM VALUE](../commands/object-set-minimum-value)

---

## ステップ

使用時に各値の間にあけることができる最小の間隔です。 時間型のステッパーの場合、このプロパティは秒を表します。日付型のステッパーでは日数を表します。

#### JSON 文法

|  名称  |  データタイプ | とりうる値                  |
| :--: | :-----: | ---------------------- |
| step | integer | 最小値: 1 |

#### 対象オブジェクト

[サーモメーター](progressIndicator.md#default-thermometer) - [ルーラー](ruler.md) - [ステッパー](stepper.md)

#### コマンド

[OBJECT Get format](../commands/object-get-format) - [OBJECT SET FORMAT](../commands/object-set-format)

