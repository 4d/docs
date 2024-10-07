---
id: this
title: This
slug: /commands/this
displayed_sidebar: docs
---

<!--REF #_command_.This.Syntax-->**This**  -> Resultado<!-- END REF-->
<!--REF #_command_.This.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &larr; | O elemento atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.This.Summary-->**O comando This**  retorna uma referência ao objeto atualmente sendo processado.<!-- END REF-->

O comando foi criado principalmente para ser usado no contexto abaixo:

* uma list box associada à uma coleção ou uma seleção de entidades, durante os eventos On Display Detail ou o On Data Change  
Nesse contexto, o comando retorna uma referência ao elemento da coleção ou entidade acessada pela list box para exibir a linha atual  
**Nota:** se usar uma coleção de valores escalares em uma list box, 4D cria um objeto para isso com uma única propriedade **valor**. Assim, o valor do elemento é retornado através da expressão não-atribuível **This.value**.
* a execução do objeto de fórmula criada pelos comandos [Formula](formula.md) ou [Formula from string](formula-from-string.md)  
Nesse contexto, o comando retorna uma referência ao objeto atualmente processado pela fórmula

Em qualquer outro contexto, o comando retorna **Null**  

Dentro de contextos compatíveis, deve acessar propriedades de elementos de objeto/coleção ou atributos de entidade através de **This.<*propertyPath*\>**. Por exemplo, This.name ou *This.Customers.lastName* são rotas válidas para objetos, elementos ou propriedades de entidade.

#### Exemplo 1 

```undefined
{  
<p>"ID": 1234
"name": "Xavier",  
"revenues": 47300,  
"employees": [  
             "Allan",  
             "Bob", 
             "Charlie"  
            ] 
},{  
"ID": 2563
"name": "Carla",  
"revenues": 55000,  
"isFemale": true
"employees": [  
             "Igor",  
             "Jane"  
            ] 
},...
 
```

#### Exemplo 2 

Se quiser exibir entidades da estrutura abaixo em uma list box:

![](../assets/en/commands/pict3872836.en.png)

Pode construir uma list box do tipo "Collection ou entity selection" com a definição abaixo:

![](../assets/en/commands/pict3872844.en.png)

Note que:

* *This.ID*, *This.Title* e *This.Date* referem diretamente aos atributos correspondentes na dataclasse ds.Event.
* *This.meetings* é um atributo relacionado (baseado no nome de relação One To Many) que retorna uma seleção de entidades na dataclasse ds.Meeting.
* **Form.eventList** é a seleção de entidade que é anexada ao list box. O código de inicalização pode ser colocado no evento de formulário on load:  
```4d  
 Case of  
    :(FORM Event=On Load)  
       Form.eventList:=ds.Event.all() //retorna uma seleção de entidade com todas as entidades  
 End case  
```

Quando o formulário tiver sido executado, a list box é preenchida automaticamente com a seleção de entidades:

![](../assets/en/commands/pict3872875.en.png)

#### Exemplo 3 

Se quiser usa um método de projeto como uma fórmula encapsulada em um objeto:

```4d
 var $person : Object
 $person:=New object
 $person.firstName:="John"
 $person.lastName:="Smith"
 $person.greeting:=New formula(Greeting)
 $g:=$person.greeting("hello") // retorna "hello John Smith"
 $g:=$person.greeting("hi") // retorna "hi John Smith"
```

Com o método de projeto Greeting:

```4d
 var $0;$1 : Text
 $0:=$1+" "+This.firstName+" "+This.lastName
```

#### Ver também 

[Self](self.md)  
[Super](super.md)  