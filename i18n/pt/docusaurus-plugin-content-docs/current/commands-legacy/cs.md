---
id: cs
title: cs
slug: /commands/cs
displayed_sidebar: docs
---

<!--REF #_command_.cs.Syntax-->**cs** -> Resultado<!-- END REF-->
<!--REF #_command_.cs.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#x1F850; | Class Store que contém todas as classes do banco de dados atual. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.cs.Summary-->O comando **cs** retorna um objeto a *Class Store* contendo todas as classes de usuário definidas no banco de dados atual ou componentes.<!-- END REF--> Esse comando é necessário para instanciar um objeto de uma classe de usuário. 

**Nota:** Esse comando funciona apenas em bancos de dados projeto. Em bancos de dados binários , **cs** retorna uma Class Store vazia.

#### Exemplo 

Crie a classe Polygon:

```4d
  //Class: Polygon
 
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Depois, em um método, pode escrever:

```4d
 var $poly : Object
 $poly:=cs.Polygon.new(4;3)
  // {area:12}
```

#### Ver também 

[4D](4d.md)  
[Super](super.md)  