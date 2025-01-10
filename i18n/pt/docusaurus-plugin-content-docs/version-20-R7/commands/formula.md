---
id: formula
title: Formula
slug: /commands/formula
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças                                              |
| ------- | ----------------------------------------------------- |
| 17 R6   | Renomeado (New formula -> Formula) |
| 17 R3   | Adicionado                                            |

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->

| Parâmetro  | Tipo                         |     | Descrição                            |
| ---------- | ---------------------------- | :-: | ------------------------------------ |
| formulaExp | Expression                   |  →  | Fórmula a ser retornada como objeto  |
| Resultados | 4D. Function |  ←  | Função nativa encapsulando a fórmula |

<!-- END REF -->

#### Descrição

The `Formula` command <!-- REF #_command_.Formula.Summary -->creates a `4D Function` object based upon the *formulaExp* expression<!-- END REF -->. *formulaExp* can be as simple as a single value or complex, such as a project method with parameters.

Ter uma fórmula como se fosse um objeto permite que seja passada como um parâmetro (atributo calculado) para comandos ou métodos, ou para ser executado a partir de vários componentes, sem precisar declará-los como "partilhados por componentes e database host". Quando chamado, o objeto fórmula é avaliado sem o contexto do banco de dados ou componente que o criou.

A fórmula retornada pode ser chamada com:

- os métodos [`.call()`](#call) ou [`.apply()`](#apply),
- a sintaxe de notação de objeto (consulte [objeto formula](#formula-object)).

```4d
 var $f : 4D. Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //três formas diferentes de chamar a fórmula
 $f.call($o) //retorna 3
 $f.apply($o) //retorna 3
 $o.myFormula() //retorna 3
```

Você pode passar [parâmetros](#passing-parameters) para `Formula`, como visto abaixo no [exemplo 4](#exemplo-4).

Você pode especificar o objeto no qual a fórmula é executada, como visto em [exemplo 5](#exemplo-5). As propriedades do objeto podem ser acessadas via o comando `This`.

If *formulaExp* uses local variables, their values are copied and stored in the returned formula object when it is created. Quando executados, a fórmula usa esses valores copiados ao invés do valor atual da variável local. Note que usar arrays como variáveis locais não são compatíveis.

The object created by `Formula` can be saved, for example, in a database field or in a blob document.

#### Exemplo 1

Uma fórmula simples:

```4d
 var $f : 4D. Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // devoluções 3
```

#### Exemplo 2

Uma fórmula usando um método projeto com parâmetros:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // retorna 10
```

#### Exemplo 3

Uma fórmula usando variáveis locais:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //retorna 30
```

#### Exemplo

Uma fórmula simples usando parâmetros:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```

#### Exemplo 2

Usando `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //retorna "John Smith"
```

#### Exemplo 6

Chamar uma fórmula usando notação de objeto:

```4d
 var $feta; $robot : Object
 var $calc : 4D. Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //estabelece a fórmula às propriedades objeto
 $feta.calc:=$calc
 $robot.calc:=$calc

  //chame a fórmula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

#### Veja também

[4D Blog - Formula: More power behind simplicity](https://blog.4d.com/new-formula-more-power-behind-simplicity/)\
[4D Blog - Formula: Think outside the box](https://blog.4d.com/new-formula-think-outside-the-box/)\
[4D Blog - Write your own methods for objects](https://blog.4d.com/write-your-own-methods-for-objects/)\
[Formula from string](formula-from-string.md)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1597                            |
| Thread safe    | &amp;check; |
