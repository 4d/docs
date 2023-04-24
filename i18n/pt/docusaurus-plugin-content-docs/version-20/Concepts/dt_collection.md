---
id: collection
title: Collection
---

As colecções são listas ordenadas de valores de tipos semelhantes ou mistos (texto, número, data, objecto, booleano, colecção, ou nulo).

As variáveis de tipo de colecção são geridas utilizando notação de objectos (ver [Syntax basics](Concepts/dt_object.md#syntax-basics)).

Para acessar a um elemento de coleção, é necessário passar o número do elemento dentro de parênteses rectos:

```4d
collectionRef[expression]
```

Pode passar qualquer expressão 4D válida que devolva um número inteiro positivo na expressão **. Exemplos:

```4d
 myCollection[5]  //aceso ao 6º elemento da coleção
 myCollection[$var]
```

**Atenção:** os elementos da coleção estão numerados desde 0.

Pode atribuir um valor a um elemento de colecção ou obter um valor de um elemento de colecção:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Se atribuir um índice de elemento que ultrapasse o último elemento existente da coleção, a coleção se redimensiona automaticamente e a todos os novos elementos intermediários se lhes atribui um valor nulo:

```4d
 var myCol : Collection
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Instantiation

Collections must have been instantiated, otherwise trying to read or modify their elements will generate a syntax error.

Collection instantiation can be done in one of the following ways:

- using the [`New collection`](../API/CollectionClass.md#new-collection) command,
- using the `[]` operator.

:::info

Several 4D commands and functions return collections, for example [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) or [`collection.copy`](../API/CollectionClass.md#copy). In this case, it is not necessary to instantiate explicitely the collection, the 4D language does it for you.

:::

### `New collection` command

The [`New collection`](../API/CollectionClass.md#new-collection) command creates a new empty or prefilled collection and returns its reference.

Exemplos:

```4d
 var $colVar : Collection //declaration of a collection type 4D variable
 $colVar:=New collection //instantiation of the collection and assignment to the 4D variable

 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection
```

### `[]` operator

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). When you create a collection using a collection literal, it is instantiated with the specified values as its elements, and its length is set to the number of arguments specified.

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

If an element is undefined, it will appear as Null in the collection.

Exemplos:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //empty collection
$col2:=[1;2;3;4;5;6] //collection of numbers
//collection of objects
$users:=[{name: "Alice"; \
    height: 183; \
    eyecolor: "hazel"; \
    id: $col2[5]\
    }; \
    {name: "Bob"; \
    height: 172; \
    eyecolor: "blue"\
    }]
```

:::note

If you create a collection literal containing a single element, make sure you do not use a name corresponding to an existing table name, otherwise the table syntax `[tableName]` will take priority.

:::



### Coleção regular ou partilhada

Pode criar dois tipos de coleções:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command or collection literal syntax (`[]`). Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- colecções partilhadas, utilizando o comando [`Nova colecção partilhada`](API/CollectionClass.md#new-shared-collection) . Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by [`Use... End use`](Concepts/shared.md#useend-use) structures.

For more information, refer to the [Shared objects and collections](shared.md) section.

## Funções de Collection

As referências de colecção 4D beneficiam de funções de classe especiais (por vezes nomeadas *funções de membro*). Collection functions are listed in the [Class API Reference](../API/CollectionClass.md) section.

Por exemplo:

```4d
$newCol:=$col.copy() //cópia de $col a $newCol
$col.push(10;100) //adiciona 10 e 100 para a coleção
```

Algumas funções devolvem a colecção original após modificação, para que se possa executar as chamadas numa sequência:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### Parâmetro rotaPropriedade


Várias funções aceitam um _propertyPath_ como parâmetro. Este parâmetro significa:

- um nome de objeto propriedade por exemplo "Sobrenome"
- ou uma rota de propriedades de objeto, ou seja, uma sequência hierárquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".

**Warning:** When using functions and *propertyPath* parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //erro
```