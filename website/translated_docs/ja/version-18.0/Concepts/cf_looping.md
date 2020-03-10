---
id: version-18.0-looping
title: ループ構造
original_id: looping
---

## While...End while

`While...End while` による制御フロー構造の正式な構文は以下のようになります:

```4d
 While(Boolean_Expression)
    statement(s)
 End while
```

`While...End while` ループは、ブール式が TRUE である限り、ループ内のステートメントを実行し続けます。 ループの始めにブール式を評価し、ブール式が FALSE の場合にはループをおこないません。

一般に、`While...End while` ループに入る手前で、ブール式で判定する値を初期化しておきます。 通常はブール式が TRUE になるように設定してからループに入ります。

ブール式は、ループ内の要素を使って設定されなければなりません。そうでなければ、ループは永久に続くでしょう。 以下の例では、*NeverStop* がいつも TRUE であるので、ループは永久に続きます。

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

このようにメソッドの実行が制御不能になった場合には、トレース機能を使用し、ループを止めて、問題点を追跡することができます。 メソッドのトレース方法については、[エラーハンドリング](error-handling.md) の章を見てください。

### 例題

```4d
 CONFIRM("新規にレコード追加しますか？") // ユーザーに確認します
 While(OK=1) // 利用者が望む限りループします
    ADD RECORD([aTable]) // 新規にレコードを追加します
 End while // ループは必ず End while によって終わります
```

この例では、まずループに入る前に `CONFIRM` コマンドによりシステム変数 `OK` がセットされます。 ユーザーがダイアログボックスで **OK** ボタンをクリックすると、システム変数 `OK` に1がセットされ、ループを開始します。 それ以外の場合はシステム変数 `OK` に0が設定され、ループをスキップします。 ループに入ると、`ADD RECORD` コマンドはループを続けます。これは、ユーザーがレコードを保存した時点で、システム変数 `OK` に1が設定されるからです。 ユーザーが最後のレコードを取り消した (保存しない) 時点で、システム変数 `OK` に0がセットされ、ループは終了します。

## Repeat...Until

`Repeat...Until` による制御フロー構造の正式な構文は以下のようになります:

```4d
 Repeat
    statement(s)
 Until(Boolean_Expression)
```

`Repeat...Until` ループは、[While...End while](flow-control#whileend-while) ループと似ていますが、まずループの後でブール式を判定する点が異なります。 つまり、`Repeat...Until` ループは最低でも1回は必ずループを実行しますが、`While...End while` ループは最初のブール式が FALSE である場合には、ループを1回も実行しません。

もう一つの `While...End while` ループとの相違点は、 `Repeat...Until` はブール式が TRUE になるまでループを続行することです。

### 例題

以下の例を、`While...End while` ループの例と比較してください。 ブール式を、初期化しておく必要がない点に注目してください。システム変数　`OK` を初期化する `CONFIRM` コマンドはありません。

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

`For...End for` による制御フロー構造の正式な構文は以下のようになります:

```4d
 For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
    statement(s)
 End for
```

`For...End for` ループは、カウンター変数によりループを制御します:

- カウンター変数 *Counter_Variable* は、数値変数 (実数または倍長整数) で、*Start_Expression* に指定した値に初期化されます。
- ループを実行するたびに、任意の引数である *Increment_Expression* の値がカウンター変数に加算されます。 *Increment_Expression* を指定しない場合、増分値は1になります。
- カウンターが *End_Expression* の値を超えた時点で、ループを停止します。

**重要:** *Start_Expression*、*End_Expression*、*Increment_Expression* の値は、ループの始めに一度だけ評価されます。 これらの数値が変数で指定されている場合、ループ内でその変数の値を変更してもループは影響を受けません。

**Tip:** 特別な目的のために、カウンター変数 *Counter_Variable* の値を変更することができます。ループ内でカウンター変数を変更すると、ループはその影響を受けます。

- 通常、*Start_Expression* は *End_Expression* より小さい。
- *Start_Expression* と *End_Expression* が等しい場合、1回だけループがおこなわれます。
- *Start_Expression* が *End_Expression* より大きい場合、*Increment_Expression* に負の値を指定しない限り、ループはおこなわれません。 次に例を示します。

### 基本的な使用例

1. 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;1;100)
  // なんらかの処理
 End for
```

2. 以下の例は、配列 anArray の全要素に対して処理をおこないます:

```4d
 For($vlElem;1;Size of array(anArray))
  // 各配列要素に対する処理
    anArray{$vlElem}:=...
 End for
```

3. テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```4d
 For($vlChar;1;Length(vtSomeText))
    // 文字がタブであれば
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        // なんらかの処理をします
    End if
 End for
```

4. 以下の例は、テーブル [aTable] のカレントセクションの各レコードについて処理をおこないます:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  // 各レコードに対する処理
    SEND RECORD([aTable])
  //...
  // 次レコードへ移動します
    NEXT RECORD([aTable])
 End for
```

データベースで作成する大部分の `For...End for` ループは、上記例題のいずれかの形式になるでしょう。

### カウンター変数の減算

ループに際してカウンター変数を増加させるのではなく、減少させたい場合があります。 その場合、*Start_Expression* に *End_Expression* より大きい値を設定し、*Increment_Expression* に負の数を指定する必要があります。 次に挙げる例題は、前述の例と同じ処理を逆の順序でおこないます:

5. 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;100;1;-1)
  // なんらかの処理
 End for
```

6. 以下の例は、配列 anArray の全要素に対して処理をおこないます:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  // 各配列要素に対する処理
    anArray{$vlElem}:=...
 End for
```

7. テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
    // 文字がタブであれば
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        // なんらかの処理をします
    End if
 End for
```

8. 以下の例は、テーブル [aTable] のカレントセクションの各レコードについて処理をおこないます:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  // 各レコードに対する処理
    SEND RECORD([aTable])
  //...
  // 前レコードへ移動します
    PREVIOUS RECORD([aTable])
 End for
```

### 1より大きな値によるカウンター変数の増加

必要に応じて、*Increment_Expression* (正または負の値) に、その絶対値が1より大きな値を指定できます。

9. 以下の例は、配列 anArray の偶数要素について処理を行います:

```4d
 For($vlElem;2;Size of array(anArray);2)
  // 偶数要素 #2,#4...#2n に対する処理
    anArray{$vlElem}:=...
 End for
```

### ループ構造の比較

`For...End for` ループの例をもう一度見てみましょう。 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;1;100)
  // なんらかの処理
 End for
```

`While...End while` ループと `Repeat...Until` ループで、同じ処理を実行する方法を調べてみましょう。 以下は、同じ処理を実行する `While...End while` ループです:

```4d
 $i:=1 // カウンターの初期化
 While($i<=100) // 100回のループ
  // なんらかの処理
    $i:=$i+1 // カウンターの増分が必要
 End while
```

同じことを `Repeat...Until` ループで記述すると以下のようになります:

```4d
 $i:=1 // カウンターの初期化
 Repeat
  // なんらかの処理
    $i:=$i+1 // カウンターの増分が必要
 Until($i=100) // 100回のループ
```

**Tip:** `For...End for` ループは、`While...End while` や `Repeat...Until` ループよりも高速です。これは4Dが内部的にカウンター変数のテストおよび増加を行うからです。 したがって、可能な限り `For...End for` ループの使用が推奨されます。

### For...End for ループの最適化

カウンター変数 (インタープロセス、プロセス、ローカル変数) には実数、または倍長整数タイプを使用します。 数多く繰り返されるループの場合、とくにコンパイルモードでは、倍長整数タイプのローカル変数を使用してください。

10. 次に例を示します:

```4d
 C_LONGINT($vlCounter) // 倍長整数型のローカル変数を使用します
 For($vlCounter;1;10000)
  // なんらかの処理
 End for
```

### For...End for の入れ子構造

制御構造は、必要に応じて入れ子にする (ネストする) ことができます。 `For...End for` ループも同じです。 誤りを避けるため、各ループ構造ごとに別のカウンター変数を使用してください。

次に例を示します:

11. 以下の例は二次元配列の全要素への処理です:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  // 各行に対する処理
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  // 各要素に対する処理
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

12. 以下の例は、データベースのすべての日付フィールドに対するポインターの配列を作成します:

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Get last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Get last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each...End for each

`For each...End for each` による制御フロー構造の正式な構文は以下のようになります:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
 End for each
```

`For each...End for each` 構造は、*Expression* に含まれるすべての*Current_item* に対して処理を繰り返します。 *Current_item* の型は *Expression* の型に依存します。 `For each...End for each` ループは3種類の *Expression * を対象に反復処理をおこなうことができます:

- コレクション: コレクションの各要素をループします
- エンティティセレクション: 各エンティティをループします
- オブジェクト: 各オブジェクトプロパティをループします

以下の表は、`For each...End for each` の3つのタイプを比較したものです:

|                         | コレクション内をループ        | エンティティセレクション内をループ | オブジェクト内をループ   |
| ----------------------- | ------------------ | ----------------- | ------------- |
| Current_Item の型         | コレクション要素と同じ型の変数    | エンティティ            | テキスト変数        |
| Expression の型           | (同じ型の要素を持つ) コレクション | エンティティセレクション      | オブジェクト        |
| ループ数 (デフォルト)            | コレクションの要素数         | セレクション内のエンティティ数   | オブジェクトのプロパティ数 |
| begin / end パラメーターのサポート | ◯                  | ◯                 | ×             |


- ループの数は開始時に評価され、処理中に変化することはありません。 ループ中に項目を追加・削除することは、繰り返しの不足・重複を引き起こすことがあるため、一般的には推奨されません。
- デフォルトでは、内部の *statement(s)* 部の処理は、*Expression* の各項目に対して実行されます。 しかしながら、ループの先頭 (`While`) あるいはループの終わり (`Until`) で条件をテストすることで、ループを抜け出すことは可能です。
- 任意の *begin* および *end* パラメーターを指定することで、コレクションおよびエンティティセレクションに対してループの範囲を定義することができます。
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords: 
    - before entering the loop, if items should be modified together for integrity reasons, or
    - within the loop when only some elements/properties need to be modified and no integrity management is required. 

### コレクション内をループ

When `For each...End for each` is used with an *Expression* of the *Collection* type, the *Current_Item* parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the *Current_Item* variable is assigned the first mismatched value type.

At each loop iteration, the *Current_Item* variable is automatically filled with the matching element of the collection. The following points must be taken into account:

- If the *Current_Item* variable is of the object type or collection type (i.e. if *Expression* is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The *Current_Item* variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the *Current_Item* variable type does not support **Null** values (such as longint variables).

#### 例題

You want to compute some statistics for a collection of numbers:

```4d
 C_COLLECTION($nums)
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### エンティティセレクション内をループ

When `For each...End for each` is used with an *Expression* of the *Entity selection* type, the *Current_Item* parameter is the entity that is currently processed.

The number of loops is based on the number of entities in the entity selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save( )`.

#### 例題

You want to raise the salary of all British employees in an entity selection:

```4d
 C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loop through object properties

When `For each...End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property.

The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.

#### 例題

You want to switch the names to uppercase in the following object:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

You can write:

```4d
 For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
    End if
 End for each
```

    {
        "firstname": "GREGORY",
        "lastname": "BADIKORA",
        "age": 20
    }
    

### begin / end parameters

You can define bounds to the iteration using the optional begin and end parameters.

**Note:** The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded). 

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included). If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*. If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0. **Note:** Even if begin is negative, the iteration is still performed in the standard order. If *end* is a negative value, it is recalculed as `end:=end+Expression size`

たとえば:

- a collection contains 10 elements (numbered from 0 to 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element. 

#### 例題

```4d
 C_COLLECTION($col;$col2)
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 C_TEXT($item)
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Until and While conditions

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` or a `While(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to True.

You can pass either keyword depending on your needs:

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### 例題

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)

 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)

 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```