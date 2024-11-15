---
id: character-code
title: Character code
slug: /commands/character-code
displayed_sidebar: docs
---

<!--REF #_command_.Character code.Syntax-->**Character code** ( *character* ) : Integer<!-- END REF-->
<!--REF #_command_.Character code.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| character | Text | &#8594;  | 取得したい文字を得るためのコード |
| 戻り値 | Integer | &#8592; | 文字コード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Character code.Summary-->**Character code** コマンドは、*character* のUnicode UTF-16 コード(1から65535の間)を返します。<!-- END REF-->

characterが1文字より多い場合、 **Character code** は最初の文字だけをコードに変換します。

**Character code** の逆の変換を実行する関数が [Char](char.md) コマンドです。UTF-16コードが示す文字を返します。

#### 例題 1 

通常、大文字と小文字は同じものとして扱われますが、Character codeを使用すれば大文字と小文字を区別できます。以下の結果はTrueになります。  
  
```4d
 ("A"="a")
```

一方、以下の結果はFalseになります。  
  
```4d
 (Character code("A")=Character code("a"))
```

#### 例題 2 

以下の例は、文字列"ABC"の最初の文字Aのコードを返します。  

```4d
 GetCode:=Character code("ABC") //GetCodeには 65が返されます。これは“A”の文字コードです
```

#### 例題 3 

以下の例は、キャリッジリターンとタブを検査します。   

```4d
 For($vlChar;1;Length(vtText))
    Case of
       :(vtText[[$vlChar]]=Char(Carriage return))
  // 何らかの処理
       :(vtText[[$vlChar]]=Char(Tab))
  // 何らかの処理
       :(...)
  // ...
    End case
 End for
```

サイズの大きなテキストに対して何度も実行する場合、以下のように記述した後コンパイルすると、この検査は高速に処理されます。

```4d
 For($vlChar;1;Length(vtText))
    $vlCode:=Character code(vtText[[$vlChar]])
    Case of
       :($vlCode=Carriage return)
  // 何らかの処理
       :($vlCode=Tab)
  // 何らかの処理
       :(...)
  // ...
    End case
 End for
```

2 番目の例題が高速に処理される理由は2つあります。ループでは1文字だけが参照され、キャリッジリターンやタブを検査する際に、文字列の比較ではなく倍長整数による比較が行われています。CRやTAB等の一般的なコードを使用して作業する場合には、この手法を利用してください。

#### 参照 

[Char](char.md)  
*文字参照記号*  