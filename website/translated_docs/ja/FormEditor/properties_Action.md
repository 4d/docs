---
id: action
title: 動作
---


## メソッド

Reference of a method attached to the form. フォームメソッドを使用してデータとオブジェクトを管理することができます。ただし、これら目的には、オブジェクトメソッドを使用する方が通常は簡単であり、より効果的です。 See [Specialized methods](Concepts/methods.md#specialized-methods).

You do not call a form method—4D calls it automatically when an event involves the form to which the method is attached.

Several types of method references are supported:

- a standard project method file path, i.e. that uses the following pattern:  
  `method.4dm`  
  This type of reference indicates that the method file is located at the default location ("sources/{TableForms/*numTable*} | {Forms}/*formName*/"). In this case, 4D automatically handles the form method when operations are executed on the form (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for form operations.

- a custom method file path including the .4dm extension, e.g.:  
  `MyMethods/myFormMethod.4dm` You can also use a filesystem:  
  `/RESOURCES/Forms/FormMethod.4dm` In this case, 4D does not provide automatic support for object operations.


#### JSON 文法

| 名      | データタイプ | とりうる値                                                            |
| ------ | ------ | ---------------------------------------------------------------- |
| method | text   | Form method standard or custom file path, or project method name |

