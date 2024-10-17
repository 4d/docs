---
id: onVpRangeChanged
title: On VP Range Changed
---

| コード | 呼び出し元                                                  | 定義                                                      |
| --- | ------------------------------------------------------ | ------------------------------------------------------- |
| 61  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) | 4D Vierw Pro のセルレンジが変更された (例: フォーミュラの計算、値がセルから削除された、など) |

## 説明

このイベントは、4D View Pro ドキュメント内でセルレンジが変更されたときに生成されます。

FORM Event によって返されるオブジェクトには以下のプロパティが格納されます:

| プロパティ        | 型       | 説明                                                                                                                                                                                             |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text    | 4D View Pro エリア名                                                                                                                                                                               |
| code         | longint | On VP Range Changed                                                                                                                                                                            |
| description  | text    | "On VP Range Changed"                                                                                                                                                                          |
| sheetName    | text    | イベントが発生したシート名                                                                                                                                                                                  |
| range        | object  | 変化したセルレンジ                                                                                                                                                                                      |
| changedCells | object  | 変化したセルのみを格納したレンジ。 レンジが組み合わされたものである可能性もあります。                                                                                                                                                    |
| action       | text    | イベント生成した操作のタイプ:<li>"clear" - レンジの値をクリア操作</li><li>"dragDrop" - ドラッグドロップ操作</li><li>"dragFill" - ドラッグによるフィル操作</li><li>"evaluateFormula" - 特定のセルレンジにフォーミュラを設定した</li><li>"paste" - ペースト操作</li><li>"setArrayFormula" - 特定のセルレンジにフォーミュラを設定した</li><li>"sort" - セルのレンジを並べ替えた</li> |
> [On After Edit](onAfterEdit.md) も参照ください。 
