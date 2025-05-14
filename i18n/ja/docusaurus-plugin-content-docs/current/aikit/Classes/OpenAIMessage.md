---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

`OpenAIMessage` クラスはロール、コンテンツ、そしてオプションとしてユーザーを格納した構造化されたメッセージを表します。 このクラスはメッセージのテキストや他のコンテンツを操作・取得するメソッドを提供します。

## プロパティ

| プロパティ  | 型       | 説明                                                                   |
| ------ | ------- | -------------------------------------------------------------------- |
| `role` | Text    | メッセージのロール(例: "user"、"assistant")。 |
| `内容`   | Variant | メッセージのコンテンツ。テキスト、またはオブジェクトのコレクションのいずれかです。                            |
| `user` | Text    | メッセージに割り当てられたユーザーを表すオプションのプロパティ。                                     |

## 計算プロパティ

| プロパティ  | 型    | 説明                 |
| ------ | ---- | ------------------ |
| `テキスト` | Text | テキストメッセージを表すプロパティ。 |

## 関数

### addImageURL()

**addImageURL**(*imageURL* : Text; *detail* : Text)

| 引数         | 型    | 説明                |
| ---------- | ---- | ----------------- |
| *imageURL* | Text | メッセージに追加する画像のURL。 |
| *detail*   | Text | 画像に関する追加の詳細情報。    |

メッセージのコンテンツに画像URL を追加します。

## 使用例

```4d
// OpenAIMessage のインスタンスを作成します。
var $message:=OpenAIMessage({role: "user"; content: "Hello!"})

// 詳細な情報の画像URL を追加します。
$message.addImageURL("http://example.com/image.jpg"; "high")
```