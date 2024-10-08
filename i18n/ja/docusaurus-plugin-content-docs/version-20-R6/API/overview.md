---
id: overview
title: クラス関数について
---

この章では、ビルトインの 4D クラス関数および関連するコンストラクターコマンドを説明します。 4Dクラス関数およびプロパティは、クラスインスタンス オブジェクトによって提供されます。

- 関数は、インスタンスに対し、`()` 演算子を使って呼び出します。 例: `collection.sort()`。
- プロパティにアクセスする場合は、カッコを使いません。 例: `file.creationTime`。 また、\[] シンタックスも使用可能です。 例: `file["creationTime"]`。
- コマンドは独立して、引数付きあるいは引数なしで呼び出すことができます。 例: `Folder(fk database folder)`。

## 表記規則

関数シンタックスでは、次の表記が使われています:

- 中カッコ `{ }` は、任意のパラメーターを示します。 たとえば、`.delete( { option : Integer } )` という表記の場合、関数を呼び出す際に *option* パラメーターを省略することができます。
- `{ ; ...param }` という表記は、パラメーターの数に制限がないことを示します。 たとえば、`.concat( value : any { ;...valueN } ) : Collection` という表記の場合、データ型および数に制限なく関数に引数を渡すことができます。
- `any` キーワードは、属性として保存可能な範囲 (数値、テキスト、ブール、日付、時間、オブジェクト、コレクション) でデータ型に制限のないパラメーターを示すのに使用されます。

## 参照

[4Dランゲージのクラス](../Concepts/classes.md)。
