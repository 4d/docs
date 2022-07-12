---
id: ClassClass
title: Classe
---


When a user class is [defined](Concepts/classes.md#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of "Class" class, which has properties and a function.



### Resumo


|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |

</details>

<!-- REF #ClassClass.name.Syntax -->
**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` property<!-- REF #ClassClass.name. Summary -->contém o nome do objeto `4D. Class`<!-- END REF -->. Class names are case sensitive.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |
</details>

<!-- REF #ClassClass.new().Syntax -->
**.new**( *param* : any { *;...paramN* } ) : 4D. Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->
| Parameter | Type      |    | Descrição                                |
| --------- | --------- |:--:| ---------------------------------------- |
| param     | any       | -> | Parâmetros a passar à função constructor |
| Resultado | 4D. Class | <- | Novo objeto da classe                    |
<!-- END REF -->


#### Descrição

A função `.new()`<!-- REF #ClassClass.new(). Summary -->cria e retorna um objeto `cs.className` que é uma nova instância da classe da qual é chamada<!-- END REF -->. Essa função está disponível automaticamente para todas as classes da classe store [`cs`](Concepts/classes.md#cs).

Pode passar um ou mais parâmetros opcionais *param*, que serão passados para a função [class constructor](Concepts/classes.md#class-constructor)  (se houver) na definição de classe className. Dentro da função constructor, [`This`](Concepts/classes.md#this) é conectado ao novo objeto sendo construído.

Se `.new()` for chamado em uma classe não existente, um erro é retornado.

#### Exemplos

Para criar uma nova instância da classe Person:

```4d
var $person : cs. Person  
$person:=cs. Person.new() //create the new instance  
//$person contains functions of the class
```

Para criar uma nova instância da classe Person com parâmetros:

```4d
//Class: Person.4dm Class constructor($firstname : Text; $lastname : Text; $age : Integer)
    This.firstName:=$firstname
    This.lastName:=$lastname
    This.age:=$age
```

```4d
//In a method
var $person : cs. Person  
$person:=cs. Person.new("John";"Doe";40)  
//$person.firstName = "John"
//$person.lastName = "Doe"
//$person.age = 40
```


<!-- END REF -->



<!-- REF ClassClass.superclass.Desc -->
## .superclass

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |

</details>

<!-- REF #ClassClass.superclass.Syntax -->
**.superclass** : 4D. Class<!-- END REF -->

#### Descrição

A propriedade `.superclass`<!-- REF #ClassClass.superclass. Summary -->retorna a classe pai da classe<!-- END REF -->. Uma superclasse pode ser um `4D. Class` objeto ou um objeto `cs.className`. Se a classe não tiver uma classe pai, a propriedade retorna **null**.

Uma superclasse de uma classe de usuário é declarada em uma classe usando a palavra chave [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname).

Essa propriedade é**apenas leitura**.

#### Exemplos

```4d
$sup:=4D. File.superclass //Document
$sup:=4D. Document.superclass //Object
$sup:=4D. Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
$sup:=cs. MyFile.superclass //File 

```



**Ver também:** [Super](Concepts/classes.md#super)
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
