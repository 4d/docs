---
id: throw
title: throw
slug: /commands/throw
displayed_sidebar: docs
---

<!--REF #_command_.throw.Syntax-->**throw** ( *errorCode* {; *description*} ) 
        
            *throw* {( *errorObj* )}<!-- END REF-->
<!--REF #_command_.throw.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| errorCode | Integer | &#8594;  | エラーコードを表す倍調整数 |
| description | Text | &#8594;  | エラーの説明 (テキスト) |
| throw {( errorObj )} |
| 引数 | 型 | 説明 |
| errorObj | Object | &#8594;  | エラー構築用のプロパティを格納するオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.throw.Summary-->**throw** コマンドは、エラーを作成します。<!-- END REF-->エラーは即座に、あるいはカレントメソッドの終了時に (遅延モード) スローされます。

4Dコード内で例外が発生した場合、**throw** コマンドで明示的にエラーをスローし、独自のエラーメッセージまたはエラー番号を提示することができます。これは、例外的な状態や無効な入力を知らせるのに便利です。

**throw** コマンドを使用してスローされたエラーは、通常のエラーと同様に 4Dランタイムによって管理されます。つまり、[ON ERR CALL](on-err-call.md)コマンドによって割り込みメソッドが実装されていない場合には、標準のエラーダイアログが表示されます。

このコマンドは 3つのシンタックスをサポートしています:

##### **throw(errorCode{; description})**

このシンタックスでは、エラーコードと説明のテキスト (任意) を指定し、エラーは即座にスローされます。  
description 引数を渡さなかった場合には、次の情報が提示されます:

* ホストアプリケーションでは: Error code {errorCode}: (host)
* コンポーネントでは: Error code {errorCode}: (C00x)

##### **throw(errorObj)**

*errorObj* オブジェクト引数を使うことで、エラー情報をより詳細に指定し、エラー処理の管理をさらに強化できます。このオブジェクト引数には以下のプロパティのほか、**message**プロパティのプレースホルダーを置き換えるためのカスタムプロパティを含めることができます。

| **プロパティ**          | **型**   | **説明**                                                                                                                                                                                                                                                                                               |
| ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| componentSignature | text    | エラーの発生源を一意に識別するための 4文字のラテン文字のシグニチャ。 **componentSignature** が渡されない場合、コマンドはホストデータベースには "host"、コンポ ーネントには "C001"、"C002"、...を使用します。                                                                                                                                                                      |
| errCode            | number  | エラーコード。 **errCode** が渡されない場合、コマンドは -1 を使用します。                                                                                                                                                                                                                                                        |
| message            | text    | エラーの説明。<br/> **message** には、errorObj オブジェクト引数に追加されたカスタムプロパティによって置き換えられるプレースホルダーを含めることができます。各プレースホルダーは、置き換えに使用するカスタムプロパティ名を中括弧 {} で囲むことで指定します。 **message** が渡されない場合、または空文字列の場合、コマンドはカレントデータベースの xliff ファイルを検索し、"ERR\_{componentSignature}\_{errCode}" に合致する resname を探します。<br/>を探します。 |
| deferred           | boolean | カレントメソッドの終了時または[Try ブロック](developer.4d.com/docs/Concepts/error-handling#trycatchend-try)の終了時にエラーを延期するかどうかを指定します。デフォルト値は false です。                                                                                                                                                                    |

このシンタックスを使用すると、[Last errors](last-errors.md) で errorObjオブジェクトが返されます。

**注記:** 同じプロジェクトメソッド内でこのコマンドを複数回呼び出して、複数のエラーを生成することができます。遅延モードを使って、これらのエラーを一度にスローできます。

##### **throw** 

このシンタックスは、カレントエラーをすべて**遅延モード**でスローします。つまり、これらのエラーはエラースタックに追加され、カレントメソッド終了時に処理されます。これは通常、[ON ERR CALL](on-err-call.md) コールバック内でおこなわれます。

* **アプリケーションにおいて:** 発生したエラーはエラースタックに追加され、カレントメソッド終了時にアプリケーションの [ON ERR CALL](on-err-call.md) メソッドが呼び出されます。[Last errors](last-errors.md) 関数はエラースタックを返します。
* **コンポーネントにおいて:** エラースタックはホストアプリケーションに送信され、ホストアプリケーションの [ON ERR CALL](on-err-call.md) メソッドが呼び出されます。

#### 例題 1 

```4d
 var $code : Integer
 var $description : text
 $code:=50042 // カスタムコード
 $description:=“”
 throw($code ;$description) // "これはカスタムエラーです" というメッセージと errCode = 50042 でエラーをスローします
```

#### 例題 2 

```4d
throw({errCode: 1; message: "これはエラーです"}) // "これはエラーです" というメッセージと errCode = 1 でエラーをスローします
```

#### 例題 3 

```4d
throw({errCode: 1}) // "Error code: 1 (host)" というメッセージと errCode = 1 でエラーをスローします
```

#### 例題 4 

```4d
throw({message: "これはエラーです"})  // "これはエラーです" というメッセージと errCode = -1 でエラーをスローします
```

#### 例題 5 

```4d
throw({message: "これはエラーです"; deferred: True}) // "これはエラーです" というメッセージと errCode = -1 でエラーを遅延モードでスローします
```

#### 例題 6 

```4d
throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// "ファイル myFileName が見つかりません (myFilePath)" というメッセージのエラーを遅延モードでスローします
```

#### 参照 

[ASSERT](assert.md)  
[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1805 |
| スレッドセーフである | &cross; |


