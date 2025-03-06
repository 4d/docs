---
id: find-in-sorted-array
title: Find in sorted array
slug: /commands/find-in-sorted-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in sorted array.Syntax-->**Find in sorted array** ( *array* ; *value* ; > or < {; *posFirst* {; *posLast*}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Find in sorted array.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | 検索する配列 |
| value | Expression | &#8594;  | 配列内で検索する値(配列と同じ型) |
| > or < | 演算子 | &#8594;  | 配列が昇順になっている場合には>、降順になっている場合には< |
| posFirst | Integer | &#8592; | 値が見つかった場合にはそれが見つかった最初の位置/そうでない場合には値が挿入されるべき位置 |
| posLast | Integer | &#8592; | 値が見つかった場合にはそれが見つかった最後の位置/そうでない場合にはposFirstと同じ |
| 戻り値 | Boolean | &#8592; | 配列内にて値と合致する要素が少なくとも一つある場合にはTrue、そうでない場合にはFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Find in sorted array.Summary-->**Find in sorted array** コマンドは *array* 引数で指定した配列内に、*value* 引数で指定した値と合致する要素が少なくとも一つある場合には**true**を返します。<!-- END REF-->また、合致した要素の位置を返す事もできます(任意)。[Find in array](find-in-array.md) コマンドとは異なり、*array* 引数で指定した配列が既にソート済みで、値の順番(位置)についての情報がある場合にのみ有効です(これにより、必要であればその個所に値を挿入することも可能です)。

*array* 引数で指定した配列は既にソート済みであり、*\> or <* 引数で指定された順番と合致している必要があります(">"の記号は配列が昇順であることを、"<"の記号は配列が降順であることを意味します)。**Find in sorted array** コマンドはソートされている利点を生かして*バイナリ―サーチアルゴリズム*を使用します。これは大きな配列においてはより効率的なアルゴリズムです(詳細な情報に関しては、Wikipediaの[二分探索のページ](http://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2)を参照して下さい)。しかしながら配列が適切にソートされていない場合には、結果が不正確になることがあります。

**注意:** このコマンドをソートされたオブジェクト型の配列に対して使用する場合、*value* 引数にはオブジェクト参照のみ渡すことができます。

以下のいずれかに該当する場合、このコマンドはソートの指示を無視し、標準的な[Find in array](find-in-array.md)と同じように振る舞います(シーケンシャル探索を行い、*value* 引数で指定した値が見つからない場合には*posFirst* と *posLast* 引数にそれぞれ-1が返されます):

* 配列の型がソートできない場合(例:ポインター配列)。
* 配列の型がブール型の場合(結果が正確ではありません)。
* 配列が文字列配列またはテキスト配列であり、データベースがUnicodeモード(互換性モード)でない場合。
* テキスト配列の中を、ワイルドカード('@')が文字列の先頭もしくは途中に来ている文字列を検索する場合(そのようなワイルドカードを使用してバイナリ―サーチしようとした場合、検索結果が配列内で不連続である場合があるため、使用できません)。

コマンドが**False** を返した場合、*posFirst* 引数に返された値を[INSERT IN ARRAY](insert-in-array.md)コマンドに渡すことによって、配列のソートを乱すことなく*value* 引数の値を配列内に挿入することができます。この方法の方が、新しい項目を配列の最後に挿入し、その後でその項目を正しい場所に移動させるために[SORT ARRAY](sort-array.md)コマンドを呼び出す方法より早いです。

*posLast* 引数に返された値と*posFirst* 引数に返された値を組み合わせることによって、*value* 引数と合致する配列内のそれぞれの要素に対して([ARRAY TO LIST](array-to-list.md) ループを使用して)繰り返したり、同じ値が何個合致するかを探す事もできます([Count in array](count-in-array.md)コマンドと同じですが、こちらの方が速いです)。

#### 例題 1 

配列のソートを崩さないまま、必要であれば値を挿入したいという場合を考えます:

```4d
 var $pos : Integer
 If(Find in sorted array($array ;$value ;>;$pos)
    ALERT("Found at pos "+String($pos))
 Else
    INSERT IN ARRAY($array ;$pos)
    $array{$pos}:=$value
 End if
```

#### 例題 2 

 "test"で始まる文字列の合致件数を探し、それらを全て連鎖させた文字列を作成したい場合を考えます:

```4d
 var $posFirst ;$posLast : Integer
 var $output : Text
 If(Find in sorted array($array ;"test@";>;$posFirst ;$posLast))
    $output:="Found "+String($posLast-$posFirst+1)+" results :\n"
 End if
 For($i ;$posFirst ;$posLast)
    $output:=$output+$array{$i}+"\n"
 End for
```

#### 参照 

[Count in array](count-in-array.md)  
[Find in array](find-in-array.md)  
[SORT ARRAY](sort-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1333 |
| スレッドセーフである | &check; |


