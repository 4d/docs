---
id: overview
title: 概要
---

## ORDAとは何か

ORDA とは **オブジェクト・リレーショナル・データアクセス (Object Relational Data Access)** の意味です。 これは、オブジェクトを介してデータベースのモデルとデータにアクセスできるようにする革新的なテクノロジーです。

この概念には、[レイジーローディング](glossary.md#レイジーローディング) と合わせてリレーションが暗示的に織り込まれており、デベロッパーはありがちなデータセレクションや転送の煩わしさから解放されます。

ORDA では、[データストア](dsMapping.md#データストア) と呼ばれる抽象化レイヤーを通してデータにアクセスします。 データストアとは、データベースモデルとデータへの、オブジェクトやクラスを介したインターフェースを提供するオブジェクトです。 たとえば、テーブルは [データクラス](dsMapping.md#データクラス) オブジェクトにマップされ、フィールドはデータクラスの [属性](dsMapping.md#属性)で、レコードは [エンティティ](dsMapping.md#entity) および [エンティティセレクション](dsMapping.md#エンティティセレクション) を介してアクセスされます。


## ORDAを使う理由

テーブル、フィールド、レコードとして情報を表示する代わりに、ORDA では、より正確に現実世界の概念にデータをマップする、別のアプローチを使用します。

効率に影響することなく、リレーショナルストラクチャーを非正規化する能力を想像してみてください。 Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure.

In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections.

A query returns a list of entities called an entity selection, which fulfills the role of a SQL query’s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.

In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combined with powerful features such as the `This` and `Form` commands, they allow the building modern and modular interfaces based upon objects and collections.

## How to use ORDA?

Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically [mapped upon the 4D structure](dsMapping.md).

ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods.

ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with [classes where you can add custom functions](ordaClasses.md).



