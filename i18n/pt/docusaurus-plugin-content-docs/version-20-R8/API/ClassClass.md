---
id: ClassClass
title: Class
---

Quando uma classe de usuário é [defined] (Concepts/classes.md#class-definition) no projeto, ela é carregada no ambiente de linguagem 4D. Uma classe é um objeto em si mesmo, da classe "Class", que tem propriedades e uma função.

### Resumo

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.isSessionSingleton.Syntax -->](#issessionsingleton)<br/><!-- INCLUDE #ClassClass.isSessionSingleton.Summary --> |
| [<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)<br/><!-- INCLUDE #ClassClass.isShared.Summary -->                               |
| [<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)<br/><!-- INCLUDE #ClassClass.isSingleton.Summary -->                      |
| [<!-- INCLUDE #ClassClass.me.Syntax -->](#me)<br/><!-- INCLUDE #ClassClass.me.Summary -->                                                 |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)<br/><!-- INCLUDE #ClassClass.name.Summary -->                                           |
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #ClassClass.new().Summary -->                                          |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)<br/><!-- INCLUDE #ClassClass.superclass.Summary -->                         |

<!-- REF ClassClass.isSessionSingleton.Desc -->

## .isSessionSingleton

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R7   | Adicionado |

</details>

<!-- REF #ClassClass.isSessionSingleton.Syntax -->**.isSessionSingleton** : Boolean<!-- END REF -->

#### Descrição

The `.isSessionSingleton` property <!-- REF #ClassClass.isSessionSingleton.Summary -->returns `true` if the user class has been defined as a [session singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, and `false` otherwise.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF ClassClass.isShared.Desc -->

## .isShared

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isShared` <!-- REF #ClassClass.isShared.Summary -->retorna `true` se a classe do usuário tiver sido definida como [shared class](../Concepts/classes.md#shared-classes)<!-- END REF -->, e `false` caso contrário.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF ClassClass.isSingleton.Desc -->

## .isSingleton

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #ClassClass.isSingleton.Syntax -->**.isSingleton** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.isSingleton` <!-- REF #ClassClass.isSingleton.Summary -->retorna `true` se a classe do usuário tiver sido definida como uma [singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, e `false` caso contrário.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF ClassClass.me.Desc -->

## .me

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R5   | Adicionado |

</details>

<!-- REF #ClassClass.me.Syntax -->**.me** : 4D.Class<!-- END REF -->

#### Descrição

A propriedade `.me` <!-- REF #ClassClass.me.Summary -->retorna a instância singleton da classe singleton `cs.className`<!-- END REF -->. Se a classe singleton nunca tiver sido instanciada anteriormente, essa propriedade chamará o construtor da classe sem parâmetros e criará a instância. Caso contrário, ele retorna a instância singleton existente.

Se `cs.className` não for uma [classe singleton](../Concepts/classes.md#singleton-classes), `.me` será **indefinido** por padrão.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF ClassClass.name.Desc -->

## .name

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` <!-- REF #ClassClass.name.Summary -->contém o nome do objeto `4D.Class`<!-- END REF -->. Nomes de classe diferenciam minúsculas de maiúsculas.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF ClassClass.new().Desc -->

## .new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->

| Parâmetro  | Tipo                      |                             | Descrição                                |
| ---------- | ------------------------- | :-------------------------: | ---------------------------------------- |
| param      | any                       |              ->             | Parâmetros a passar à função constructor |
| Resultados | 4D. Class | <- | Novo objeto da classe                    |

<!-- END REF -->

#### Descrição

A função `.new()` <!-- REF #ClassClass.new().Summary -->cria e retorna um objeto `cs.className` que é uma nova instância da classe na qual ela é chamada<!-- END REF -->. Essa função está automaticamente disponível em todas as classes do armazenamento de classes [`cs`] (Concepts/classes.md#cs).

Você pode passar um ou mais parâmetros *param* opcionais, que serão passados para a função [class constructor](Concepts/classes.md#class-constructor) (se houver) na definição da classe *className*. Na função do construtor, o [`This`] (Concepts/classes.md#this) é vinculado ao novo objeto que está sendo construído.

:::note Notas

- Se `.new()` for chamado em uma [singleton class](../Concepts/classes.md#singleton-classes) que já tenha sido instanciada, a instância singleton será retornada, e não uma nova instância.
- Se `.new()` for chamado em uma classe inexistente, será retornado um erro.

:::

#### Exemplos

Para criar uma nova instância da classe Person com parâmetros:

```4d
var $person : cs. Person  
$person:=cs. Person.new() //create the new instance  
//$person contains functions of the class
```

Para criar uma nova instância da classe Person:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

#### Descrição

A propriedade `.superclass` <!-- REF #ClassClass.superclass.Summary -->retorna a classe pai da classe<!-- END REF -->. Uma superclasse pode ser um objeto `4D.Class` ou um objeto `cs.className`. Se a classe não tiver uma classe pai, a propriedade retorna null\*\*.

Uma superclasse de uma classe de usuário é declarada em uma classe usando a palavra-chave [`Class extends <superclass>`] (Concepts/classes.md#class-extends-classname).

Essa propriedade é **somente leitura**.

#### Exemplos

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// Se você criou uma classe MyFile
// com `Class extends File`
$ sup:=cs.MyFile.superclass //File

```

**Veja também:** [Super](Concepts/classes.md#super)

<!-- END REF -->
