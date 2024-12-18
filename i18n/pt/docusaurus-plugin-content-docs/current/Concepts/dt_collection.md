---
id: collection
title: Collection
---

Coleções são listas ordenadas de valores de tipos diferentes ou não (texto, número, objeto, booleano, coleção ou null).

Variáveis do tipo de coleção são gerenciadas usando [notação do objeto](dt_object.md#properties).

Para acessar a um elemento de coleção, é necessário passar o número do elemento dentro de parênteses rectos:

```4d
collectionRef[expression]
```

Você pode passar qualquer expressão 4D válida que retorne um inteiro positivo em _expressão_. Exemplos:

```4d
 myCollection[5]  //access ao sexto elemento da coleção
 myCollection[$var]
```

**Warning:** Os elementos da coleção são numerados a partir de 0.

Pode atribuir um valor a um elemento da coleção ou obter o valor de um elemento da coleção utilizando a notação de objetos:

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

## Instanciação

As coleções devem ter sido inicializadas, por exemplo utilizando o comando <code>New collection</code>, do contrário ao tentar ler ou modificar seus elementos se gerará um erro de sintaxe.

A instanciação da colecção pode ser feita de uma das seguintes formas:

- usando o comando [`New collection`](../commands/new-collection.md),
- utilizando o operador [].

:::info

Several 4D commands and functions return collections, for example [`Monitored activity`](../commands-legacy/monitored-activity.md) or [`collection.copy`](../API/CollectionClass.md#copy). Neste caso, não é necessário instanciar explicitamente a coleção, a linguagem 4D fá-lo por si.

:::

### Comando `New object`

The [`New collection`](../commands/new-collection.md) command creates a new empty or prefilled collection and returns its reference.

Exemplos:

```4d
 var $colVar : Collection //declaração de uma variável 4D do tipo coleção
 $colVar:=New collection //instanciação da coleção e atribuição à variável 4D
 
 var $colFilled : Collection
 $colFilled:=New collection("a"; "b";1;42;{}) //instanciação e atribuição de uma coleção pré-preenchida
```

### Operador `[]`

O operador `[]` permite que você crie um **literal da coleção**. Um literal de coleção é uma lista de zero ou mais expressões, cada um dos quais representa um elemento de coleção, entre colchetes quadrados (`[]`). Quando cria uma coleção utilizando um literal de coleção, esta é instanciada com os valores especificados como seus elementos e o seu comprimento é definido para o número de argumentos especificados.

Como qualquer elemento é considerado uma expressão, você pode criar subcoleções usando `[]` em elementos.  Você também pode criar e fazer referência **literais de objeto**.

Se um elemento for indefinido, aparecerá como Nulo na coleção.

Exemplos:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //colecção vazia
$col2:=[1;2;3;4;5;6] //colecção de números
//colecção de objectos
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

Se você criar um literal de coleção contendo um único elemento, certifique-se de não usar um nome que corresponda a um nome de tabela existente, caso contrário, a sintaxe de tabela `[tableName]` terá prioridade.

:::

### Coleção regular ou partilhada

Pode criar dois tipos de coleções:

- regular (non-shared) collections, using the [`New collection`](commands/new-collection.md) command or collection literal syntax (`[]`). Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- shared collections, using the [`New shared collection`](commands/new-shared-collection.md) command. Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. O acesso a essas coleções é controlado pelas estruturas [`Use...End use`] (Concepts/shared.md#useend-use).

Para obter mais informações, consulte a seção [Shared objects and collections] (shared.md).

## Funções de Collection

As referências de coleções 4D se beneficiam de funções de classe especiais (às vezes denominadas _funções de membro_). As funções da coleção estão listadas na seção [Referência de API de classe](../API/CollectionClass.md)

Por exemplo:

```4d
$newCol:=$col.copy() //cópia de $col a $newCol
$col.push(10;100) //adiciona 10 e 100 para a coleção
```

Alguns métodos retornam a coleção original depois de moficiação, para que possa rodar as chamadas em sequência:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```

### parâmetro caminoPropriedade

Várias funções aceitam um _propriedadePath_ como parâmetro. Este parâmetro significa:

- um nome de objeto propriedade por exemplo "Sobrenome"
- ou uma rota de propriedades de objeto, ou seja, uma sequência hierárquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".

**Aviso:** Ao usar funções e parâmetros _propertyPath_, você não pode usar ".", "[ ]" ou espaços nos nomes das propriedades, pois isso impedirá que 4D analise corretamente o caminho:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //erro
```

## Operadores em coleções

You can use comparison operators with **collection references**, which means that you can evaluate if two or more references point to the same instance of a collection.

```4d
var $c1:=["a";42] //reference to an instance
var $c2:=["a";42] //reference to a different instance
var $c3:=$c1 //reference to the same instance
```

Based upon the code above, the comparison table is:

| Operação     | Sintaxe                       | Retorna    | Expression | Valor |
| ------------ | ----------------------------- | ---------- | ---------- | ----- |
| Igual        | collectionRef = collectionRef | Parâmetros | $c1 = $c3  | True  |
|              |                               |            | $c1 = $c2  | False |
| Desigualdade | collectionRef # collectionRef | Parâmetros | $c1 # $c3  | False |
|              |                               |            | $c1 # $c2  | True  |

## Indefinido

A leitura da propriedade **length** de uma coleção indefinida produz 0:

```4d
     var $c : Collection //variável criada, mas nenhuma coleção foi definida
     $size:=$c.length //$size = 0
```
