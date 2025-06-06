---
id: arrays
title: 配列
---

**配列** とは、同じタイプの **変数** を番号付きで並べたものです。 各変数は、配列の **要素** といいます。 配列のサイズとは、配列が持つ要素の数を指します。配列は作成時にサイズが与えられ、要素の追加・挿入・削除によって、または作成時に使用したコマンドの再使用によって、何度でもサイズを変更することができます。 配列要素には、1 から N の番号が付けられます (N は配列のサイズ)。 配列は必ず、特別な [要素ゼロ](#配列の要素ゼロ) を持ちます。 配列は 4D の変数です。 他の変数と同様、配列にもスコープがあり、4D ランゲージの規則に従いますが、他と異なるところがいくつかあります。

> ほとんどの場合において、**配列** より **コレクション** の利用が推奨されます。 コレクションは配列より柔軟なだけでなく、たくさんの専用メソッドを持ちます。 詳細については、[コレクション](Concepts/dt_collection.md) を参照してください。


## 配列の作成

配列は、"配列" テーマの配列宣言コマンドのいずれかを使用して作成します。 配列宣言コマンドは、1次元または 2次元の配列の作成やサイズ変更をすることができます。 2次元配列の詳細については [二次元配列](#二次元配列) を参照してください。

次のコードは、10個の要素からなる整数配列を作成 (宣言) します:

```4d
 ARRAY INTEGER(aiAnArray;10)
```

次のコードは、さきほど作成した配列を20要素にサイズ変更します:
```4d
ARRAY INTEGER(aiAnArray;20)
```

次のコードは、この配列を要素なしにサイズ変更します:
```4d
ARRAY INTEGER(aiAnArray;0)
```

## 配列要素への値の代入

配列中の要素は中カッコ ({…}) を使用して参照します。 中カッコの中には数字を入れて特定の要素を指定します。この数字を要素番号といいます。 次のコードは、5つの名前を atNames という配列に入れ、それらを警告ウィンドウに表示します:

```4d
 ARRAY TEXT(atNames;5)
 atNames{1}:="Richard"
 atNames{2}:="Sarah"
 atNames{3}:="Sam"
 atNames{4}:="Jane"
 atNames{5}:="John"
 For($vlElem;1;5)
    ALERT("要素番号 #"+String($vlElem)+" の値は "+atNames{$vlElem}+" です。")
 End for
```
atNames{$vlElem} というシンタックスに注目してください。 atNames{3} のように数値リテラルを使うだけでなく、数値変数によって配列の要素番号を指定することができます。 ループ構造による反復を使用すると (`For...End for`, `Repeat...Until` または `While...End while`)、短いコードで配列の全要素、または一部の要素を対象とした処理をおこなうことができます。

**重要:** 代入演算子 (:=) と比較演算子 (=) とを混同しないように注意してください。 代入と比較は、まったく異なった性質の処理です。


### 配列への配列の代入
文字列やテキスト変数と違って、配列に配列を代入することはできません。 配列をそっくりそのまま別の配列にコピーするには `COPY ARRAY` コマンドを使います。


## 配列の要素ゼロ

配列は必ず、要素ゼロを持ちます。 ドロップダウンリストなどのフォームオブジェクトに配列が設定されていた場合、要素ゼロが表示されることはありませんが、ランゲージでの利用に制限はありません (*)。

例として、デフォルト値を指定せずにフォームオブジェクトを初期化したいとします。 このような場合に配列の要素ゼロが利用できます:

```4d
  // atName 配列と紐づいているコンボボックスまたはドロップダウンリストの 
  // フォームオブジェクトメソッドです
 Case of
    :(Form event code=On Load)
  // 要素ゼロを含め
  // 配列を初期化します
        ARRAY TEXT(atName;5)
        atName{0}:=選択してください"
        atName{1}:="Text1"
        atName{2}:="Text2"
        atName{3}:="Text3"
        atName{4}:="Text4"
        atName{5}:="Text5"
    // 配列の選択要素を要素ゼロに設定します
        atName:=0
 End case
```

(*) ひとつだけ例外があります。配列タイプのリストボックスでは、編集中の元の値を保持するため、内部的に配列の要素ゼロが使用されます。この特別なケースでは、開発者は 0番目の要素を利用できません。


## 二次元配列

配列宣言コマンドはそれぞれ、1次元および 2次元の配列を作成、またはサイズ変更ができます。 例:

```4d
 ARRAY TEXT(atTopics;100;50) // 100行と 50列からなるテキスト配列を作成します
```

2次元配列は、本質的にはランゲージオブジェクトであり、表示や印刷することはできません。

上のコードで作成した atTopics 配列について、次のことが言えます:

- atTopics は、2次元配列です。
- atTopics{8}{5} は、8行5列目の要素です。
- atTopics{20} は 20行目を指し、それ自体が 1次元の配列です。
- `Size of array(atTopics)` は、行数の 100を返します。
- `Size of array(atTopics{17})` は、17行目の列数である50を返します。

以下の例では、データベースの各テーブルの各フィールドへのポインターが 2次元配列に格納されます:

```4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // テーブルと同じ数の空行 (つまり、列なし) を持つ配列作成します
 $vlLastTable:=Get last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) // X行 0列の 2D配列
  // テーブル毎に
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Get last field number($vlTable)
  // 全フィールドをチェックします
       $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  // 当該テーブルの行にフィールドに対応する列を挿入していきます
             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  // 作成した "セル" にポインターを割り当てます
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

このように初期化された 2次元配列を使って、以下の方法で特定のテーブルが持つ全フィールドへのポインターを取得できます:

```4d
  // 現在選択されているテーブルの、フィールドへのポインターを取得します:
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // ブールと日付フィールドを初期化します
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**注:** この例でわかるように、2次元配列の行の列数はそれぞれが同じサイズでも異なるサイズでも構いません。

## 配列とメモリ

テーブルやレコードを使用してディスク上に格納するデータと異なり、配列は常に全体がメモリに保持されます。

たとえば、米国内の郵便番号がすべて [Zip Codes] テーブルに入力されている場合、約100,000件のレコードになります。 加えて、そのテーブルには郵便番号のほかに、対応する市・郡・州という複数のフィールドがあるとします。 カリフォルニアの郵便番号を選択した場合、4D データベースエンジンは [Zip Codes] テーブルから該当するレコードセレクションを作成して、必要な場合にのみ各レコードをロードします (たとえば表示や印刷時)。 つまり、4Dのデータベースエンジンによってディスクからメモリに部分的にロードされた (フィールドごとに同じタイプの) 順序づけられた一連の値で作業するということです。

同じことを配列で実行するのは、次の理由で禁止すべきです:

- 4つの情報タイプ (郵便番号、市、郡、州) を維持するためには、4つの大きな配列をメモリ内で維持する必要があります。
- 配列は、常に全体がメモリ内に維持されるため、常時使用しない場合でも、作業セッションの間すべてのデータをメモリに置いておく必要があります。
- 配列全体が常にメモリ内に維持されることから、アプリケーションが開始されるたびに 4つの配列をディスクからロードして、終了時にはディスクに保存する必要があります。当該データが作業セッション中に使用・変更されない場合もこれを省略することができません。

**結論:** 配列は、ほどよい量のデータを短時間維持するためのものです。 他方、配列はメモリ内に置かれるため、扱いやすく高速操作が可能です。

しかし、状況によっては何百、何千という要素を持った配列で作業する必要があります。 次の表に、各配列タイプがメモリ上に占めるバイト数を求めるための計算式を示します:

| 配列タイプ        | メモリ使用量の計算式 (バイト単位)                 |
| ------------ | ---------------------------------- |
| BLOB         | (1+要素数) * 12 + 全BLOB要素の合計サイズ       |
| Boolean      | (31+要素数) \ 8                      |
| Date         | (1+要素数) * 6                        |
| Integer      | (1+要素数) * 2                        |
| Long Integer | (1+要素数) * 4                        |
| Object       | (1+要素数) * 8 + 全オブジェクトの合計サイズ        |
| Picture      | (1+要素数) * 8 + 全ピクチャーの合計サイズ         |
| Pointer      | (1+要素数) * 8 + 全ポインターの合計サイズ         |
| Real         | (1+要素数) * 8                        |
| Text         | (1+要素数) * 20 + (全テキストの合計サイズ) * 2 |
| Time         | (1+要素数) * 4                        |
| 2次元          | (1+要素数) * 16 + 配列サイズの合計            |

**注:**

- メモリ中のテキストサイズは以下の式で計算されます: ((Length + 1) * 2)
- 選択した要素や要素数、配列自体の情報を保持するため、さらに数バイトを要します。