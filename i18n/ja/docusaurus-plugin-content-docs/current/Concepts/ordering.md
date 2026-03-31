---
id: ordering
title: コレクションとオブジェクトの並び替え
---

一連のデータをソートするために、4D はデータの型に応じて定義された比較条件を適用することで、それぞれの値を他の値と比較します([並べ替えルール](#並べ替えルール) を参照してください)。 このプロセスは全ての要素に渡って総合的な並べ替えを確立するためのソートアルゴリズムに依存しています。 全てのデータが同じ [データ型](./data-types.md) に所属している場合、比較ルールは単純で正確に定義されています。

しかしながら、[コレクション](./dt_collection.md) および [entity selections](../ORDA/dsMapping.md#エンティティセレクション) も含めた [オブジェクト](./dt_object.md) は異種の型の要素や属性を格納することが可能です: これにはスカラー型(テキスト、数値、ブール、日付、) あるいは複雑型(オブジェクト、Blob、コレクション) が含まれます。 異なる種類の値を格納しているコレクションやオブジェクトの並べ替えをする場合、4D は戦略的な並べ替えスキームを適用します。まず最初に要素を型ごとに並べ替えし、その次に各型ごとの中で比較ルールを適用します。

## 並べ替え機能

4D ランゲージには、コレクション要素、オブジェクト属性をソートしたり、あるいは順序づけされた結果のためのソートを作成することに依存する複数の機構を提供します:

- **コレクションの並べ替え用関数**: [`collection.multiSort()`](../API/CollectionClass.md#multisort) (明示的なキーと並べ替え指定を使用した複数条件並べ替え)、[`collection.orderBy()`](../API/CollectionClass.md#orderby) (各要素に対して式を評価することによる並べ替え)、 [`collection.sort()`](../API/CollectionClass.md#sort) (自然な並べかリレーションによるインプレースなソート)
- **エンティティセレクションの並べ替え用関数**: [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby)、コレクションと同じ並べ替えルールを適用します。
- **並べ替え付きのクエリ関数**: [`entitySelection.query()`](../API/EntitySelectionClass.md#query)、 [`dataClass.query()`](../API/DataClassClass.md#query) に対して `order by attributePath` キーワードを使用すると決定的な順序で結果を返します。
- **順序依存の統計関数**: [`collection.max()`](../API/CollectionClass.md#max)、 [`collection.min()`](../API/CollectionClass.md#min)、 [`entitySelection.max()`](../API/EntitySelectionClass.md#max)、 [`entitySelection.min()`](../API/EntitySelectionClass.md#min)、 これらは極値を識別するために順序関係に依存します。
- [**`ORDER BY ATTRIBUTE`**](../commands/order-by-attribute) コマンドを使用すると、オブジェクトフィールドに基づいてデータベースのテーブルを並べ替えることができます。

## 並べ替えルール

異なる型の要素を格納しているコレクションやエンティティセレクションをソートする場合、以下のアルゴリズムに従って、**型ベースの階層化** が適用されます:

1. **分割フェーズ**: 要素はそれらのベースの型に基づいて同じクラスへとグループ分けされます。 このフェーズは要素の集合全体の型ごとの分割を確立します。
2. **クラス内の並べ替えフェーズ**: 各クラスの中で、それぞれの要素は型特有の比較ルールに基づいてソートされます。 デフォルトの順序は**昇順**です。

型は以下の順序に従って並び、それぞれの比較関係は昇順になります:

| ランク | 型              | 以下のものも含まれます                                                               | 比較ルール                                                                                              |
| --- | -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | **null**       | ポインター (ヌルポインターはコレクションのみ)                               | 適用できる比較条件はありません                                                                                    |
| 2   | **boolean**    |                                                                           | 論理順: false がtrue の**前**になります                                                       |
| 3   | **string**     |                                                                           | 辞書式順序 (例: "a" *の次に* "ab"、 *その次に* "b")                           |
| 4   | **number**     | 時間 (`Time inside objects` データベース設定に応じて、ミリ秒または秒に変換されます) | 標準的な代数的順序 (数値比較)                                                                |
| 5   | **オブジェクト**     | Blob、ピクチャー、ヌルでないポインター(コレクション)                          | 内部的な順序(コレクション関数と同じ、以下参照)                                                        |
| 6   | **collection** |                                                                           | 内部的な順序(コレクション関数と同じ、以下参照)                                                        |
| 7   | **日付**         |                                                                           | 時系列順(古い日付が新しい日付の *前* になります。例:  !1990-01-01! *の次に* !2000-01-01!) |

### Special numeric values

Special floating-point values `+INF` (positive infinity), `-INF` (negative infinity), and `NaN` (Not-a-Number) present in collections and objects are ordered according to the following natural sequence: **NaN < -INF < finite values < +INF**.

### Consistent ordering in collections

Collection sorting functions (see [Ordering functions](#ordering-functions) section above) implement a **consistent sort** for complex types such as objects and collections. By "consistent", we mean that successive calls to the same sorting function (e.g., `collection.orderBy()`) on the same collection produce identical ordering for complex type values. Formally, if a sort expression yields the same comparative result for two elements, the relative order of those elements is preserved.

Other 4D sorting operations do not provide this stability guarantee when comparing complex types.
