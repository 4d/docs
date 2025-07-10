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
| [<!-- INCLUDE #VectorClass.dotSimilarity().Syntax -->](#dotsimilarity)<br/><!-- INCLUDE #VectorClass.dotSimilarity().Summary -->             |
| [<!-- INCLUDE #VectorClass.euclideanDistance().Syntax -->](#euclideandistance)<br/><!-- INCLUDE #VectorClass.euclideanDistance().Summary --> |
| [<!-- INCLUDE #VectorClass.length.Syntax -->](#length)<br/><!-- INCLUDE #VectorClass.length.Summary -->                                      |
| [<!-- INCLUDE #VectorClass.toCollection().Syntax -->](#tocollection)<br/><!-- INCLUDE #VectorClass.toCollection().Summary -->                |

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

`4D.Vector.new()` 関数は、<!-- REF #4D.Vector.new().Summary -->新しい`4D.Vector`型のオブジェクト作成して返します<!-- END REF -->。

*parameter* 引数には、作成したベクトルを表す実数値のコレクションを渡します。 これらの値は人工知能によって提供されるものであり、単語やデータなどのオブジェクトを数学的に表します。

#### 例題

ベクトルを作成します:

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
```

ここのベクトル成分にアクセスすることや、あるいはベクトル全体をコレクションに戻すこともできます:

```4d
var $firstComponent := $vector[0]
var $collection := $vector.toCollection()
```

## .cosineSimilarity()

<!--REF #VectorClass.cosineSimilarity().Syntax -->**.cosineSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.cosineSimilarity().Params -->

| 引数     | 型                         |                             | 説明       |
| ------ | ------------------------- | --------------------------- | -------- |
| vector | 4D.Vector | ->                          | 比較するベクトル |
| 戻り値    | Real                      | <- | ベクトル感の距離 |

<!-- END REF -->

#### 説明

`.cosineSimilarity()` 関数は、<!-- REF #VectorClass.cosineSimilarity().Summary -->現在の4D ベクトルと*vector* 引数に渡したベクトルとの間のコサイン類似度を計算します<!-- END REF -->。 両ベクトルはサイズが同じである必要があります。

この計算は**ベクトル間の角度** を計算し、一般的にはテキスト間の意味的類似度を決定するために使用されます。 これはテキスト埋め込み、ドキュメント、文章など、データの**方向性** の方が**大きさ** より重要なデータ(例: 意味検索やテキスト分類など)に対して推奨されます。

**戻り値**

- 範囲: -1 (反対) 〜 1 (同一)
- 返された値が高ければ高いほど、二つのベクトルは類似しているということになります。

#### 例題 1

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $similarity := $vector.cosineSimilarity($anotherVector)
```

#### 例題 2

:::info

以下の例題では埋め込みを生成するのに[4D AIKit 拡張機能](../aikit/overview.md)
を使用します.

:::

```4d

var $model:="text-embedding-ada-002"
var $people:=ds.People.get(1)

$prompt:=String($people.Firstname)+" "+String($people.Lastname)+" was born on "+\
String($people.Birthday)+" and lives in "+String($people.Address)+", "+\
String($people.ZipCode)+", "+String($people.City)+", "+String($people.Country)+\
". Contact: "+String($people.email)+", "+String($people.Cell)+", "+\
String($people.Phone)+". Family IDs - Father: "+String($people.FatherID)+\
", Mother : "+String($people.MotherID)+", Partner: "+String($people.PartnerID)+"."

var $clientAI:=cs.AIKit.OpenAI.new(getAIKey())

// 4D AIKit でベクトル計算をする
var $result:=$clientAI.embeddings.create($prompt; $model)

// 4D.vector オブジェクト作成
var $vector:=$result.vector

var $question:="I'm looking for John who lives in USA"

// 4D AIKit コンポーネントを使用してベクトル計算をする
var $questionVector:=$clientAI.embeddings.create($question; $model).vector

// コサイン類似度の計算
If ($vector.cosineSimilarity($questionVector)>0.9)
  ALERT("Interesting result")
End if

//実際の結果: 0,7360136465949


```

## .dotSimilarity()

<!--REF #VectorClass.dotSimilarity().Syntax -->**.dotSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.dotSimilarity().Params -->

| 引数     | 型                         |                             | 説明       |
| ------ | ------------------------- | --------------------------- | -------- |
| vector | 4D.Vector | ->                          | 比較するベクトル |
| 戻り値    | Real                      | <- | ベクトル感の距離 |

<!-- END REF -->

#### 説明

`.dotSimilarity()` 関数は、<!-- REF #VectorClass.dotSimilarity().Summary -->現在の4D ベクトルと*vector* 引数に渡したベクトルとの間のドット積を計算します<!-- END REF -->。 両ベクトルはサイズが同じである必要があります。

この計算は**類似度** と **大きさ** の両方を反映し、一般的にはベクトルのノルム(大きさ)が異なるモデルで使用されます。 これは、埋め込みが大きさを考慮して微調整されているようなシナリオ(例: 推薦エンジン、関連性スコアづけ)などに推奨されます。

**戻り値**

- ベクトルの大きさと方向性に依存します
- 返された値が高ければ高いほど、二つのベクトルは類似しているということになります。

#### 例題

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $score := $vector.dotSimilarity($anotherVector)

```

#### 例題 2

:::info

以下の例題では埋め込みを生成するのに[4D AIKit 拡張機能](../aikit/overview.md)
を使用します.

:::

```4d
var $model:="text-embedding-ada-002"
var $clientAI:=cs.AIKit.OpenAI.new(getAIKey())

$documents:=[{text: "How to bake a chocolate cake"; similarity: 0}; \
{text: "Best hiking trails in the Alps"; similarity: 0}; \
{text: "Tips for learning 4D programming"; similarity: 0}; \
{text: "Top 10 sci-fi movies of all time"; similarity: 0}]

$question:="4D coding tutorials"

// Vector calculation with 4D AIKit component
$questionVector:=$clientAI.embeddings.create($question; $model).vector

For each ($document; $documents)
        // Vector calculation with 4D AIKit component
    $vector:=$clientAI.embeddings.create($document.text; $model).vector
        // similarity
    $document.similarity:=$vector.dotSimilarity($questionVector)
End for each

$documents:=$documents.orderBy("similarity desc")
ALERT("Best answer: "+$documents[0].text)

//$documents:
//{text:Tips for learning 4D programming,similarity:0.90409492325102}
//{text:Top 10 sci-fi movies of all time,similarity:0.75362527646035}
//{text:How to bake a chocolate cake,similarity:0.73664833336323}
//{text:Best hiking trails in the Alps,similarity:0.73138600461065}
 
```

## .euclideanDistance()

<!--REF #VectorClass.euclideanDistance().Syntax -->**.euclideanDistance**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.euclideanDistance().Params -->

| 引数     | 型                         |                             | 説明       |
| ------ | ------------------------- | --------------------------- | -------- |
| vector | 4D.Vector | ->                          | 比較するベクトル |
| 戻り値    | Real                      | <- | ベクトル感の距離 |

<!-- END REF -->

#### 説明

`.euclideanDistance()` 関数は、<!-- REF #VectorClass.euclideanDistance().Summary -->現在の4D ベクトルと*vector* 引数に渡したベクトルとの間のユークリッド距離を計算します<!-- END REF -->。 両ベクトルはサイズが同じである必要があります。

この計算はベクトル空間内での直線距離を計算します。 これは、数値または構造化されたデータ埋め込みや、生の空間での近似性が類似性に直接相関するモデルを使用する場合に推奨されます。

**戻り値**

- 戻り値 >= 0
- 返された値が低ければ低いほど、二つのベクトルは類似しているということになります。

#### 例題 1

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $distance := $vector.euclideanDistance($anotherVector)

```

#### 例題 2

```4d
$places:=[\
{name: "Eiffel Tower"; coord: [48.8584; 200.2945]; similarity: 0}; \
{name: "Louvre Museum"; coord: [48.8606; 200.3376]; similarity: 0}; \
{name: "Notre-Dame"; coord: [48.8529; 200.35]; similarity: 0}; \
{name: "Montmartre"; coord: [48.8867; 200.3431]; similarity: 0}\
]

$userLocation:=[8.8566; 20.3522]
var $vector:=4D.Vector.new($userLocation)

For each ($place; $places)
  $place.similarity:=$vector.euclideanDistance(4D.Vector.new($place.coord))
End for each

$places:=$places.orderBy("similarity asc")
ALERT("Nearest monument: "+$places[0].name)
```

## .length

<!-- REF #VectorClass.length.Syntax -->**length** : Integer<!-- END REF -->

#### 説明

The `.length` property contains <!-- REF #VectorClass.length.Summary -->the number of vector components<!-- END REF -->.

<!-- END REF -->

## .toCollection()

<!--REF #VectorClass.toCollection().Syntax -->**.toCollection**() : Collection<!-- END REF -->

<!--REF #VectorClass.toCollection().Params -->

| 引数  | 型          |                             | 説明                  |
| --- | ---------- | --------------------------- | ------------------- |
| 戻り値 | Collection | <- | ベクトル成分を表す実数値のコレクション |

<!-- END REF -->

`.toCollection()` 関数は、<!-- REF #VectorClass.toCollection().Summary -->ベクトル成分を実数値のコレクションとして返します<!-- END REF -->。


