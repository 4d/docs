---
id: ClassClass
title: Class
---


Quando uma classe de usuário for [definida](Concepts/classes.md#class-definition) no projeto, é carregada no ambiente da linguagem 4D. Uma classe é um objeto em si mesmo, da classe "Class", que tem propriedades e uma função.



### Resumo


|                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` <!-- REF #ClassClass.name.Summary -->contains the name of the `4D. Class` object<!-- END REF -->. Nomes de classe diferenciam minúsculas de maiúsculas.

Essa propriedade é **apenas leitura**.

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #ClassClass.new().Syntax -->**.new**() : 4D.Object<br/>**.new**( *param* : any { *;...paramN* } ) : 4D.Object<!-- END REF -->


<!-- REF #ClassClass.new().Params -->
| Parâmetro  | Tipo      |    | Descrição                                        |
| ---------- | --------- |:--:| ------------------------------------------------ |
| param      | any       | -> | Parâmetros a passar à função constructor         |
| Resultados | 4D.Object | <- | Novo objeto da classe|<!-- END REF -->


|


#### Descrição

A função `.new()` <!-- REF #ClassClass.new().Summary -->cria e devolve um objecto `cs.className` que é uma nova instância da classe em que é chamado<!-- END REF -->. Essa função está disponível automaticamente para todas as classes da classe store [`cs`](Concepts/classes.md#cs).

Pode passar um ou mais parâmetros opcionais *param*, que serão passados para a função [class constructor](Concepts/classes.md#class-constructor)  (se houver) na definição de classe className. Dentro da função constructor, [`This`](Concepts/classes.md#this) é conectado ao novo objeto sendo construído.

Se `.new()` for chamado em uma classe não existente, um erro é retornado.

#### Exemplos

Para criar uma nova instância da classe Person com parâmetros:

```4d
var $person : cs. Person  
$person:=cs. Person.new() //create the new instance  
//$person contains functions of the class
```

Para criar uma nova instância da classe Person:

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

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #ClassClass.superclass.Syntax -->|<!-- END REF -->

#### Descrição

A propriedade `.superclass` <!-- REF #ClassClass.superclass.Summary -->devolve a classe pai da classe<!-- END REF -->. A superclass can be a `4D. Class` object, or a `cs.className` object. Se a classe não tiver uma classe pai, a propriedade retorna **null**.

To define a superclass for a user class, use the  [`extends`](Concepts/classes.md#class-extends-classname) keyword like: `Class extends <superclass>`.

Essa propriedade é **apenas leitura**.

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
