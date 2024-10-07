---
id: super
title: Super
slug: /commands/super
displayed_sidebar: docs
---

<!--REF #_command_.Super.Syntax-->**Super** {( *param* {; *param2* ; ... ; *paramN*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.Super.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| param | any | &#x1F852; | Parâmetros a passar ao constructor pai |
| Resultado | Object | &#x1F850; | Pai do objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Super.Summary-->O comando **Super** faz chamadas à superclasse.<!-- END REF--> 

**Super** foi introduzido para servir dois propósitos:

* dentro de um **constructor code**, **Super** é um documento que permite chamar o constructor da superclasse. Quando usado em um constructor, o comando **Super** aparece sozinho e deve ser usado antes da palavra chave [This ](this.md) ser usada.
   * Se todos os constructores da classe na árvore de herança não forem chamados adequadamente, o erro -10748 é gerado. O desenvolvedor 4D tem que verificar se as chamadas são válidas.
   * Se o comando [This ](this.md) for chamado em um objeto cujas superclasses não foram construidas, o erro -10743 é gerado.
   * Se **Super** for chamado fora do escopo de um objeto, ou em um objeto cujo constructor de superclasse ainda não foi chamado, o erro-10746 é gerado.

```4d
  // dentro do constructor myClass
 var $1;$2 : Text
 Super($1) //chama o constructor de superclass com um parâmetro texto
 This.param:=$2 // usa o segundo parâmetro
```

* Dentro de uma **função classe membro**, **Super** determina o protótipo da superclasse e permite chamar a função da hierarquia superclasse.

```4d
 Super.doSomething(42) //chama a função "façaAlgo"  declarada em superclasses
```

#### Exemplo 1 

Este exemplo ilustra o uso de **Super** em um class constructor. O comando é chamado para evitar duplicar as partes do constructor que são comuns entre as classes Rectangle e Square.

```4d
  //Classe: Rectangle
 
 Class constructor
 var $1;$2 : Integer
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2
 
 Function sayName
 ALERT("Hi, I am a "+This.name+".")
 
 Function getArea
 var $0 : Integer
 $0:=This.height*This.width
```

```4d
  //Class: Square
 
 Class extends Rectangle
 
 Class constructor
 var $1 : Integer
 
  // Chama o construtor da classe pai com as dimensões
  // fornecidas para a largura e latura do  Rectangle
 Super($1;$1)
 
  // Em classes derivadas, Super deve ser chamado antes
  // de usar  'This'
 This.name:="Square"
```

#### Exemplo 2 

Este exemplo ilustra o uso de **Super** no método class member. 

Crie um a classe Rectangle com uma função:

```4d
  //Class: Rectangle
 
 Function nbSides
 var $0 : Text
 $0:="I have 4 sides"
```

Também crie uma classe Square com uma função chamando uma função superclasse:

```4d
  //Class: Square
 
 Class extends Rectangle
 
 Function description
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

Agora pode escrever em um método projeto:

```4d
 var $square : Object
 var $message : Text
 $square:=cs.Square.new()
 $message:=$square.description() //I have 4 sides which are all equal
```

#### Ver também 

[cs](cs.md)  
[This ](this.md)  