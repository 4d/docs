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

効率に影響することなく、リレーショナルストラクチャーを非正規化する能力を想像してみてください。 リレーショナルなストラクチャーを完全に理解する必要がなく、単純かつ分かりやすくデータを使用できるよう、アプリケーション内のすべてのビジネスオブジェクトを定義することを想像してみてください。

ORDA のデータモデルでは、単一のデータクラスだけで旧来のリレーショナルデータベーステーブルを構成していた要素のすべてを取り込むことができるうえに、リレートされた親エンティティの値や、リレートされたエンティティとエンティティセレクションへの直接参照も含めることができます。

クエリは、エンティティセレクションと呼ばれるエンティティのリストを返し、これは SQL のクエリの行セットの役割を果たします。 違いは、各エンティティは自身がどこに所属するかを "知っている" うえ、他のすべてのエンティティとのリレーションを "理解している" ということです。 これはつまり、クエリ内において様々な情報の断片をどのようにリレートさせたらいいか、あるいは、変更された値をリレーショナルストラクチャーに書き込む際にどのようにそれを更新したらいいかを、デベロッパーは説明する必要がないということです。

In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combined with powerful features such as the `This` and `Form` commands, they allow the building modern and modular interfaces based upon objects and collections.

## How to use ORDA?

Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically [mapped upon the 4D structure](dsMapping.md).

ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods.

ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with [classes where you can add custom functions](ordaClasses.md).



