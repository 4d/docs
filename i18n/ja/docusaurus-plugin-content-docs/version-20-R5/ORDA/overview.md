---
id: overview
title: ORDA
---

ORDA stands for **Object Relational Data Access**. これは、オブジェクトを介してデータベースのモデルとデータにアクセスできるようにする革新的なテクノロジーです。

Relations are transparently included in the concept, in combination with [lazy loading](glossary.md#lazy-loading), to remove all the typical hassles of data selection or transfer from the developer.

With ORDA, data is accessed through an abstraction layer, the [datastore](dsMapping.md#datastore). データストアとは、データベースモデルとデータへの、オブジェクトやクラスを介したインターフェースを提供するオブジェクトです。 For example, a table is mapped to a [dataclass](dsMapping.md#dataclass) object, a field is an [attribute](dsMapping.md##attribute) of a dataclass, and records are accessed through [entities](dsMapping.md#entity) and [entity selections](dsMapping.md#entity-selection).

## ORDAを使う理由

テーブル、フィールド、レコードとして情報を表示する代わりに、ORDA では、より正確に現実世界の概念にデータをマップする、別のアプローチを使用します。

効率に影響することなく、リレーショナルストラクチャーを非正規化する能力を想像してみてください。 リレーショナルなストラクチャーを完全に理解する必要がなく、単純かつ分かりやすくデータを使用できるよう、アプリケーション内のすべてのビジネスオブジェクトを定義することを想像してみてください。

ORDA のデータモデルでは、単一のデータクラスだけで旧来のリレーショナルデータベーステーブルを構成していた要素のすべてを取り込むことができるうえに、リレートされた親エンティティの値や、リレートされたエンティティとエンティティセレクションへの直接参照も含めることができます。

クエリは、エンティティセレクションと呼ばれるエンティティのリストを返し、これは SQL のクエリの行セットの役割を果たします。 違いは、各エンティティは自身がどこに所属するかを "知っている" うえ、他のすべてのエンティティとのリレーションを "理解している" ということです。 これはつまり、クエリ内において様々な情報の断片をどのようにリレートさせたらいいか、あるいは、変更された値をリレーショナルストラクチャーに書き込む際にどのようにそれを更新したらいいかを、デベロッパーは説明する必要がないということです。

これに加えて、エンティティセレクションあるいはエンティティなどの ORDA オブジェクトは、リストボックスや変数などのユーザーインターフェース (UI) オブジェクトに簡単に割り当てることができます。 Combined with powerful features such as the `This` and `Form` commands, they allow the building modern and modular interfaces based upon objects and collections.

## ORDAの使い方

原則として、ORDA はオブジェクト型を扱います。 ORDA では、データストア自身を含めすべての主要な概念は、オブジェクトを通して利用可能です。 In 4D, the datastore is automatically [mapped upon the 4D structure](dsMapping.md).

ORDA のオブジェクトは 4D の標準オブジェクトと同様に扱えますが、どれだけでなく特定のプロパティおよびメソッドの恩恵を自動的に享受することができます。

ORDA オブジェクトは 4D メソッドによって必要なときに作成・インスタンス化されます (別途作成する必要はありません)。 However, ORDA data model objects are associated with [classes where you can add custom functions](ordaClasses.md).
