---
id: ClassStoreClass
title: ClassStore
---

`4D.ClassStore` プロパティはクラスとクラスストアにおいて利用可能です。

4D は二つの[クラスストア](../Concepts/classes.md#class-stores) を公開しています:

- ユーザークラスとコンポーネントクラスストアのための [`cs`](../commands/cs)
- ビルトインクラスのための [`4D`](../commands/4d)

### 概要

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE ClassStoreClass.classClassName.Syntax -->](#classclassname)<br/><!-- INCLUDE ClassStoreClass.classClassName.Summary --> |
| [<!-- INCLUDE ClassStoreClass.classStoreName.Syntax -->](#classstorename)<br/><!-- INCLUDE ClassStoreClass.classStoreName.Summary --> |

## *.classClassName*

<!-- REF ClassStoreClass.classClassName.Syntax -->***.classClassName*** : 4D.Class<!-- END REF -->

#### 説明

<!-- REF ClassStoreClass.classClassName.Summary -->クラス内で公開されたそれぞれの[`4D.Class`](./ClassClass.md) クラス<!-- END REF --> は、クラスストアのプロパティとして利用可能です。

#### 例題

```4d
var $myclass:=cs.EmployeeEntity
	//$myclass はcs クラスストアからのクラス

```

## *.classStoreName*

<!-- REF ClassStoreClass.classStoreName.Syntax -->***.classStoreName*** : 4D.ClassStore<!-- END REF -->

#### 説明

<!-- REF ClassStoreClass.classStoreName.Summary -->コンポーネントによって公開されたそれぞれの`4D.ClassStore`<!-- END REF --> は、クラスストアのプロパティとして利用可能です。

コンポーネントによって公開されるクラスストアの名前は、[コンポーネントの設定ページにおいて宣言されている](../Extensions/develop-components.md#コンポーネント名前空間の宣言) コンポーネントの名前空間です。

#### 例題

```4d
var $classtore:=cs.AiKit
	//$classtore は4D AIKit コンポーネントのクラスストア
```
