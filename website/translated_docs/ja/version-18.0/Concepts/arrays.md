---
id: version-18.0-arrays
title: 配列
original_id: arrays
---

**配列** とは、同じタイプの **変数** を番号付きで並べたものです。 各変数は、配列の **要素** といいます。 配列のサイズとは、配列が持つ要素の数を指します。配列は作成時にサイズが与えられ、要素の追加・挿入・削除によって、または作成時に使用したコマンドの再使用によって、何度でもサイズを変更することができます。 配列要素には、1 から N の番号が付けられます (N は配列のサイズ)。 配列は必ず、特別な [要素ゼロ](#using-the-element-zero-of-an-array) を持ちます。 配列は 4D の変数です。 他の変数と同様、配列にもスコープがあり、4D ランゲージの規則に従いますが、他と異なるところがいくつかあります。

> ほとんどの場合において、**配列** より **コレクション** の利用が推奨されます。 コレクションは配列より柔軟なだけでなく、たくさんの専用メソッドを持ちます。 詳細については、[コレクション](Concepts/dt_collection.md) を参照してください。

## 配列の作成

配列は、"配列" テーマの配列宣言コマンドのいずれかを使用して作成します。 配列宣言コマンドは、1次元または 2次元の配列の作成やサイズ変更をすることができます。 2次元配列の詳細については [2次元配列](#two-dimensional-arrays) を参照してください。

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

配列は必ず、要素ゼロを持ちます。 ドロップダウンメニューなどのフォームオブジェクトに配列が設定されていた場合、要素ゼロが表示されることはありませんが、ランゲージでの使用に制限はありません (*)。

たとえば、現在選択中の要素以外をクリックした場合にのみ、特定の動作をさせたいとします。 そのためには、選択されている要素を記憶しておく必要があります。 これを実現するひとつの方法は、選択された要素の要素番号を保持するプロセス変数を使用することです。 もうひとつの方法は、次のように配列の要素ゼロを使用する方法です:

```4d
  // ドロップダウンメニューなどのオブジェクトメソッド
 Case of
    :(Form event=On Load)
  // 配列を初期化します
       ARRAY TEXT(atNames;5)
  // ...
  // Initialize the element zero with the number
  // of the current selected element in its string form
  // Here you start with no selected element
       atNames{0}:="0"

    :(Form event=On Unload)
  // We no longer need the array
       CLEAR VARIABLE(atNames)

    :(Form event=On Clicked)
       If(atNames#0)
          If(atNames#Num(atNames{0}))
             vtInfo:="You clicked on: "+atNames{atNames}+" and it was not selected before."
             atNames{0}:=String(atNames)
          End if
       End if
    :(Form event=On Double Clicked)
       If(atNames#0)
          ALERT("You double clicked on: "+atNames{atNames}
       End if
 End case
```

(*) ひとつだけ例外があります。配列タイプのリストボックスでは、編集中の元の値を保持するため、内部的に配列の要素ゼロが使用されます。この特別なケースでは、開発者は 0番目の要素を使用できません。

## Two-dimensional Arrays

Each of the array declaration commands can create or resize one-dimensional or two-dimensional arrays. 例: 

```4d
 ARRAY TEXT(atTopics;100;50) // Creates a text array composed of 100 rows of 50 columns
```

Two-dimensional arrays are essentially language objects; you can neither display nor print them.

In the previous example:

- atTopics is a two-dimensional array
- atTopics{8}{5} is the 5th element (5th column...) of the 8th row
- atTopics{20} is the 20th row and is itself a one-dimensional array
- (atTopics) returns 100, which is the number of rows
- (atTopics{17}) returns 50, which the number of columns for the 17th row

In the following example, a pointer to each field of each table in the database is stored in a two-dimensional array:

```4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // Create as many rows (empty and without columns) as there are tables
 $vlLastTable:=Get last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns
  // For each table
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Get last field number($vlTable)
  // Give value of elements
       $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  //Insert a column in a row of the table underway
             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  //Assign the "cell" with the pointer
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

Provided that this two-dimensional array has been initialized, you can obtain the pointers to the fields for a particular table in the following way:

```4d
  // Get the pointers to the fields for the table currently displayed at the screen:
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // Initialize Boolean and Date fields
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**Note:** As this example suggests, rows of a two-dimensional arrays can be the same size or different sizes.

## Arrays and Memory

Unlike the data you store on disk using tables and records, an array is always held in memory in its entirety.

For example, if all US zip codes were entered in the [Zip Codes] table, it would contain about 100,000 records. In addition, that table would include several fields: the zip code itself and the corresponding city, county, and state. If you select only the zip codes from California, the 4D database engine creates the corresponding selection of records within the [Zip Codes] table, and then loads the records only when they are needed (i.e., when they are displayed or printed). In order words, you work with an ordered series of values (of the same type for each field) that is partially loaded from the disk into the memory by the database engine of 4D.

Doing the same thing with arrays would be prohibitive for the following reasons:

- In order to maintain the four information types (zip code, city, county, state), you would have to maintain four large arrays in memory.
- Because an array is always held in memory in its entirety, you would have to keep all the zip codes information in memory throughout the whole working session, even though the data is not always in use.
- Again, because an array is always held in memory in its entirety, each time the database is started and then quit, the four arrays would have to be loaded and then saved on the disk, even though the data is not used or modified during the working session.

**Conclusion:** Arrays are intended to hold reasonable amounts of data for a short period of time. On the other hand, because arrays are held in memory, they are easy to handle and quick to manipulate.

However, in some circumstances, you may need to work with arrays holding hundreds or thousands of elements. The following table lists the formulas used to calculate the amount of memory used for each array type:

| Array Type      | Formula for determining Memory Usage in Bytes                        |
| --------------- | -------------------------------------------------------------------- |
| BLOB            | (1+number of elements) * 12 + Sum of the size of each blob           |
| ブール             | (31+number of elements)\8                                           |
| 日付              | (1+number of elements) * 6                                           |
| 整数              | (1+number of elements) * 2                                           |
| Long Integer    | (1+number of elements) * 4                                           |
| オブジェクト          | (1+number of elements) * 8 + Sum of the size of each object          |
| ピクチャー           | (1+number of elements) * 8 + Sum of the size of each picture         |
| ポインター           | (1+number of elements) * 8 + Sum of the size of each pointer         |
| 実数              | (1+number of elements) * 8                                           |
| テキスト            | (1+number of elements) * 20 + (Sum of the length of each text) * 2 |
| 時間              | (1+number of elements) * 4                                           |
| Two-dimensional | (1+number of elements) * 16 + Sum of the size of each array          |


**Notes:**

- The size of a text in memory is calculated using this formula: ((Length + 1) * 2)
- A few additional bytes are required to keep track of the selected element, the number of elements, and the array itself.