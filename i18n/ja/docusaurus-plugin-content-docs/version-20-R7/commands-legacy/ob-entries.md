---
id: ob-entries
title: OB Entries
slug: /commands/ob-entries
displayed_sidebar: docs
---

<!--REF #_command_.OB Entries.Syntax-->**OB Entries** ( *object* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Entries.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | コンテンツを返すオブジェクト |
| 戻り値 | Collection | &#8592; | キー/値プロパティを格納したオブジェクトのコレクション |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OB Entries.Summary-->**OB Entries** コマンドは*object* 引数で指定したオブジェクトのコンテンツを、キー/値のペアとして格納したオブジェクトのコレクションを返します。<!-- END REF-->

返されたコレクション内のそれぞれのオブジェクトには以下のプロパティが格納されています:

| **プロパティ** | **型** | **詳細**              |
| --------- | ----- | ------------------- |
| key       | 文字列   | オブジェクト内の列挙可能なプロパティ名 |
| value     | バリアント | オブジェクト内の列挙可能なプロパティ値 |

返されるのは第1レベルのプロパティのみです(オブジェクト内にあるオブジェクトのプロパティは返されません)。返されるコレクション内のプロパティの順番は、プロパティの定義順に対応します。

#### 例題 

オブジェクトをハッシュマップ()として使用することで、ちょうどインデックスを使用するように、データへ素早く直接的にアクセスすることができるようになります(例: Maryの年齢を知りたいとき、$persons\["Mary"\]と書くことができるようになります)。

```4d
 var $individual;$persons : Object
 var $names;$ages : Collection
 
 $persons:=New object
 $persons["John"]:=42
 $persons["Andy"]:=24
 $persons["Mary"]:=30
 $persons["Paul"]:=50
 
 ALERT("The average age is "+String(OB Values($persons).average()))
 ALERT("There are "+String(OB Keys($persons).length)+" persons")
 
 $ages:=OB Entries($persons).query("value>:1";25)
 ALERT("There are "+String($ages.length)+" persons who are over 25")
 
 ALERT("Their names are: "+$ages.extract("key").join("-"))
```

#### 参照 

[OB Keys](ob-keys.md)  
[OB Values](ob-values.md)  