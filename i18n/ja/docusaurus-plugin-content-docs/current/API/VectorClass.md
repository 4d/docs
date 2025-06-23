---
id: VectorClass
title: Vector
---

`Vector` クラスを使用すると、**ベクトル** を扱うことができるようになり、それらの距離や類似性を計算することができます。 このクラスは `4D` クラスストアより提供されます。

AI の世界では、ベクトルとは、機会が複雑なデータを理解し、操作することを可能にする、一連の数字です。 AI におけるベクトルの役割の詳細な概要については、[こちらのページ](https://aiforsocialgood.ca/blog/understanding-the-role-of-vectors-in-artificial-intelligence-a-comprehensive-guide) を参照してください。

### 様々なベクトル計算を理解する

`4D.Vector` クラスは、3種類のベクター計算を提供します。 以下の表はそれぞれの計算の主な特徴をまとめたものです:

|       | cosineSimilarity                                                                                                                                                                                                                                                                                                                                                                                            | dotSimilarity                                                                                                                                                                                                                                                                                                                               | euclideanDistance                                                                                                                                                                                                                                                                                                                            |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 定義    | ベクトルとして表現された2つのテキストの向きを比較します。 2つが指している方向が同じであればあるほど、その2つは近いことを意味します。                                                                                                                                                                                                                                                                                                                                        | それぞれのベクトル次元の積の合計。 加重互換性スコアのようなものと考えることができます。                                                                                                                                                                                                                                                                                                | 定規で測ったかのような2つのベクトル感の実際の距離。                                                                                                                                                                                                                                                                                                                   |
| 単純な例え | 私たちは同じ話題について話していますか？                                                                                                                                                                                                                                                                                                                                                                                        | あなたは同じ主題について何度も何度も話をしていますか？                                                                                                                                                                                                                                                                                                                 | あなたは私の言っている事から本当にそんなに離れていますか？                                                                                                                                                                                                                                                                                                                |
| 例題    | 例えば、あなたが動画オンデマンドストリーミングサービス上で次に見る映画を探している場合を考えます。 コサイン類似性は、あなたの嗜好(例えば、若干のコメディが入ったアクション映画が好きである、など)とデータベース内にある映画の説明とを比較するために使用されます。 ここではあなたが映画の"ライトな"ファンである(映画を月一回見る)か、あるいは"大"ファンである(映画を週に10本見る)かは関係ありません。大事なのは、映画の特徴があなたの好み(例:アクション+コメディ)と類似しているかどうかです。 ストリーミングサービスはこのコサイン類似性を使用して、あなたの嗜好と"同じ方向を向いている"映画を推奨します。 | 検索エンジを考えてみてください。 あなたが"チョコレートケーキのレシピ"と入力すると、アルゴリズムはあなたのクエリをWebページと比較します。 ドット積は、あるページがチョコレートケーキについて説明しているかどうか(あなたの検索と似た方向かどうか)をチェックするために使用されるだけではなく、より関連性のあるページにより重みをつけるために使用されます(例えば、チョコレートケーキについてのより詳細なコンテンツがたくさんあるページはより大きな"長さ"を与えられ、結果としてより高いスコアがつけられます)。 検索した内容について1行しか触れていないようなページは、低いスコアがつけられます。 | マッチングアプリを想像してみてください。 アルゴリズムはユークリッド距離を使用して、あなたのプロフィール(趣味、年齢、居住地など)と 他のユーザーのプロフィールを比較します。 もし二人のプロフィールがとても似通っている(例えば二人ともハイキングが趣味で、ポップミュージックが好き、そして住んでいるところが5kmしか離れていない)のであれば、二人のプロフィールのユークリッド距離は低くなり、アプリはこの人物をより"マッチしている"とサジェストしてきます。 ここでは、二人の嗜好の一般的な方向だけでなく、すべての違いも(どれだけ小さくても)考慮されます。 |

いずれの場合においても、さまざまなベクトルをテストしてどれがあなたの用途とデータに合致するか判断するのが良いと言えるでしょう。

### ベクトルオブジェクト

ベクターオブジェクトは、変更不可で、ストリーム可能な共有オブジェクトです。

|                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #VectorClass.cosineSimilarity().Syntax -->](#cosinesimilarity)<br/><!-- INCLUDE #VectorClass.cosineSimilarity().Summary -->    |
| [<!-- INCLUDE #VectorClass.dotSimilarity().Syntax -->](#dotsimilarity)<br/><!-- INCLUDE #VectorClass.dotSimilarity.Summary -->               |
| [<!-- INCLUDE #VectorClass.euclideanDistance().Syntax -->](#euclideandistance)<br/><!-- INCLUDE #VectorClass.euclideanDistance().Summary --> |
| [<!-- INCLUDE #VectorClass.length.Syntax -->](#length)<br/><!-- INCLUDE #VectorClass.length.Summary -->                                      |
| [<!-- INCLUDE #VectorClass.toCollection().Syntax -->](#tocollection)<br/><!-- INCLUDE #VectorClass.toCollection.Summary -->                  |

## 4D.Vector.new()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| 20 R10 | 追加 |

</details>

<!-- REF #4D.Vector.new().Syntax -->

**4D.Vector.new** ( *parameter* : Collection ) : 4D.Vector<!-- END REF -->

<!--REF #4D.Vector.new().Params -->

| 引数  | 型                         |                             | 説明                 |
| --- | ------------------------- | --------------------------- | ------------------ |
| 引数  | 実数のCollection             | ->                          | ベクトルを表せる実数値のコレクション |
| 戻り値 | 4D.Vector | <- | 新規ベクトルオブジェクト       |

<!-- END REF -->

#### 説明

The `4D.Vector.new()` function <!-- REF #4D.Vector.new().Summary -->creates and returns a new object of the `4D.Vector` type<!-- END REF -->.

In *parameter*, pass a collection of real numbers representing the vector to create. These values are provided by artifical intelligences and represent mathematically objects like words or data.

#### 例題

To create a vector:

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
```

You can access individual components or convert the entire vector back to a collection:

```4d
var $firstComponent := $vector[0]
var $collection := $vector.toCollection()
```

## .cosineSimilarity()

<!--REF #VectorClass.cosineSimilarity().Syntax -->**.cosineSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.cosineSimilarity().Params -->

| 引数     | 型                         |                             | 説明                       |
| ------ | ------------------------- | --------------------------- | ------------------------ |
| vector | 4D.Vector | ->                          | Vector to compare with   |
| 戻り値    | Real                      | <- | Distance between vectors |

<!-- END REF -->

#### 説明

The `.cosineSimilarity()` function <!-- REF #VectorClass.cosineSimilarity().Summary -->calculates the cosine similarity between the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Both vectors must have the same size.

This metric measures the **angle between vectors** and is commonly used to determine semantic similarity between texts. It is recommended for text embeddings, documents, sentences, and any data where **direction** matters more than **magnitude** (e.g. for semantic search or text classification).

**戻り値**

- Range: -1 (opposite) to 1 (identical).
- The higher the returned value is, more similar vectors are.

#### 例題

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $similarity := $vector.cosineSimilarity($anotherVector)
```

## .dotSimilarity()

<!--REF #VectorClass.dotSimilarity().Syntax -->**.dotSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.dotSimilarity().Params -->

| 引数     | 型                         |                             | 説明                       |
| ------ | ------------------------- | --------------------------- | ------------------------ |
| vector | 4D.Vector | ->                          | Vector to compare with   |
| 戻り値    | Real                      | <- | Distance between vectors |

<!-- END REF -->

#### 説明

The `.dotSimilarity()` function <!-- REF #VectorClass.dotSimilarity().Summary -->calculates the dot product of the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Both vectors must have the same size.

This metric reflects both **similarity** and **magnitude**, and is generally used in models where vector norms (magnitudes) vary. It is recommended for scenarios where embeddings have been fine-tuned with magnitude in mind (e.g., recommendation engines, scoring relevance).

**戻り値**

- Depends on vector magnitudes and directions
- The higher the returned value is, more similar vectors are.

#### 例題

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $score := $vector.dotSimilarity($anotherVector)

```

## .euclideanDistance()

<!--REF #VectorClass.euclideanDistance().Syntax -->**.euclideanDistance**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.euclideanDistance().Params -->

| 引数     | 型                         |                             | 説明                       |
| ------ | ------------------------- | --------------------------- | ------------------------ |
| vector | 4D.Vector | ->                          | Vector to compare with   |
| 戻り値    | Real                      | <- | Distance between vectors |

<!-- END REF -->

#### 説明

The `.euclideanDistance()` function <!-- REF #VectorClass.euclideanDistance().Summary -->calculates the Euclidean distance between the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Both vectors must have the same size.

This measures the straight-line distance in the vector space. It is recommended for numeric or structured data embeddings, or when using models where proximity in raw space directly correlates with similarity.

**戻り値**

- returned value >= 0
- The lower the returned value is, more similar vectors are.

#### 例題

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $distance := $vector.euclideanDistance($anotherVector)

```

## .length

<!-- REF #VectorClass.length.Syntax -->**length** : Integer<!-- END REF -->

#### 説明

The `.length` property contains <!-- REF #VectorClass.params.Summary -->the number of vector components<!-- END REF -->.

<!-- END REF -->

## .toCollection()

<!--REF #VectorClass.toCollection().Syntax -->**.toCollection**() : Collection<!-- END REF -->

<!--REF #VectorClass.toCollection().Params -->

| 引数  | 型          |                             | 説明                                                            |
| --- | ---------- | --------------------------- | ------------------------------------------------------------- |
| 戻り値 | Collection | <- | Collection of real numbers representing the vector components |

<!-- END REF -->

The `.toCollection()` function <!-- REF #VectorClass.toCollection().Summary -->returns the vector components as a collection of reals<!-- END REF -->.


