---
id: action
title: 動作
---


## メソッド

フォームに関連づけられたメソッドへの参照。 フォームメソッドを使用してデータとオブジェクトを管理することができます。ただし、これら目的には、オブジェクトメソッドを使用する方が通常は簡単であり、より効果的です。 [特化されたメソッド](Concepts/methods.md#特化されたメソッド) 参照。

メソッドが関連づけられているフォームに関わるイベントが発生した場合、4D は自動的にフォームメソッドを呼び出します。

メソッド参照にはいくつかのタイプが利用可能です:

- 標準のプロジェクトメソッドファイルパス:   
  `method.4dm`  
  このタイプの参照は、当該メソッドファイルがデフォルトの場所 ("sources/{TableForms/*numTable*} | {Forms}/*formName*/") にあることを示します。 この場合、エディター上でフォームメソッドに対して操作 (名称変更、複製、コピー/ペーストなど) がおこなわれると、4D はこれらの変更を自動的にフォームメソッドに反映させます。

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for form operations.

- a custom method file path including the .4dm extension, e.g.:  
  `MyMethods/myFormMethod.4dm` You can also use a filesystem:  
  `/RESOURCES/Forms/FormMethod.4dm` In this case, 4D does not provide automatic support for object operations.


#### JSON 文法

| 名称     | データタイプ | とりうる値                                    |
| ------ | ------ | ---------------------------------------- |
| method | text   | フォームメソッドの標準またはカスタムのファイルパス、またはプロジェクトメソッド名 |

