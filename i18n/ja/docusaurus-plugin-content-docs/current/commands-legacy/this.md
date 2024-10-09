---
id: this
title: This
slug: /commands/this
displayed_sidebar: docs
---

<!--REF #_command_.This.Syntax-->**This** -> 戻り値<!-- END REF-->
<!--REF #_command_.This.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &larr; | カレントの要素 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.This.Summary-->**This** コマンドは、現在処理中のオブジェクトへの参照を返します。<!-- END REF-->

このコマンドは、以下のようなコンテキストで使用されることを想定しています:

* On Display Detail あるいは On Data Change イベント中における、コレクションあるいはエンティティセレクションに割り当てられたリストボックス。  
このコンテキストにおいては、コマンドはリストボックスによってアクセスされるコレクション要素、あるいはエンティティへの参照を返し、それがリストボックスのカレントの行に表示されます。  
**注:** リストボックスでスカラー値のコレクションを使用した場合、4D は単一の**value** プロパティを持つオブジェクトを各要素に対して作成します。そのため、要素の値は**This.value** という代入不可の式によって返されます。
* [Formula](formula.md) あるいは [Formula from string](formula-from-string.md) コマンドによって作成されたフォーミュラオブジェクトの実行。  
このコンテキストにおいては、コマンドは、フォーミュラによって現在処理されているオブジェクトへの参照を返します。

それ以外のコンテキストにおいては、このコマンドは**Null** を返します。

サポートされているコンテキスト下であれば、**This.<*propertyPath*\>** を使用することで、オブジェクト/コレクション要素プロパティあるいはエンティティ属性にアクセスすることができます。例えば、*This.name* あるいは *This.employer.lastName* などは要素あるいはオブジェクト、要素、あるいはエンティティプロパティなどへの有効なパスです。

#### 例題 1 

以下のようなストラクチャーを持つオブジェクトのコレクションについて考えます:

```undefined
{  
"ID": 1234
"name": "Xavier",  
"revenues": 47300,  
"employees": [  
             "Allan",  
             "Bob", 
             "Charlie"  
            ] 
},{  
"ID": 2563
"name": "Carla",  
"revenues": 55000,  
"isFemale": true
"employees": [  
             "Igor",  
             "Jane"  
            ] 
},...
 
```

リストボックス内では、各カラムがオブジェクトのどれか一つのプロパティを参照します。参照は直接的に(This.name)、あるいは間接的に(This.employees.length)、あるいは式を通して(*getPicture*)行います。なお式での参照は直接参照することも可能です。リストボックスは以下のようになります:

![](../assets/en/commands/pict3776706.en.png)

*GetPicture* プロジェクトメソッドは**On display detail** イベント中に自動的に実行されます:

```4d
  //GetPicture メソッド
 var $0 : Picture
 If(This.isFemale)
    $0:=Form.genericFemaleImage
 Else
    $0:=Form.genericMaleImage
 End if
```

フォームが実行されると、以下のように結果を見ることができます:

![](../assets/en/commands/pict3783169.en.png)

#### 例題 2 

以下のストラクチャーからのエンティティを、リストボックス内に表示したい場合を考えます:

![](../assets/en/commands/pict3872836.en.png)

以下の定義で"コレクションあるいはエンティティセレクション"型のリストボックスをビルドしたとします:

![](../assets/en/commands/pict3872844.en.png)

以下の点に注意して下さい:

* *This.ID*, *This.Title* および *This.Date* はds.Event データクラス内の、対応する属性を直接参照します。
* *This.meetings* は、ds.Meeting データクラスのエンティティセレクションを返すリレートされた属性です(1対Nリレーション名に基づいています)。
* **Form.eventList** がリストボックスに割り当てられているエンティティセレクションです。以下の初期化コードをOn load form イベントに書くことができます:  
```4d  
 Case of  
    :(Form event code=On Load)  
       Form.eventList:=ds.Event.all() //全てのエンティティを持ったエンティティセレクションを返す  
 End case  
```

フォームが実行されると、リストボックスにはエンティティセレクションが自動的に入ります:

![](../assets/en/commands/pict3872875.en.png)

#### 例題 3 

オブジェクト内に設定されたフォーミュラをプロジェクトメソッドとして使用したい場合を考えます:

```4d
 var $person : Object
 $person:=New object
 $person.firstName:="John"
 $person.lastName:="Smith"
 $person.greeting:=Formula(Greeting)
 $g:=$person.greeting("hello") // "hello John Smith" を返す
 $g:=$person.greeting("hi") // "hi John Smith" を返す
```

このとき、Greeting プロジェクトメソッドの内部は以下のようになっています:

```4d
 var $0;$1 : Text
 $0:=$1+" "+This.firstName+" "+This.lastName
```

#### 参照 

[Self](self.md)  
[Super](super.md)  