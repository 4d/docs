---
id: collection
title: Collection
---

Coleções são listas ordenadas de valores de tipos diferentes ou não (texto, número, objeto, booleano, coleção ou null).

As variáveis de tipo ollection são gerenciadas usando a [notação de objeto](dt_object.md#properties).

Para acessar a um elemento de coleção, é necessário passar o número do elemento dentro de parênteses rectos:

```4d
collectionRef[expression]
```

Pode passar toda expressão 4D válida que devolva um inteiro positivo na expressão. Exemplos:

```4d
 myCollection[5]  //aceso ao 6º elemento da coleção
 myCollection[$var]
```

**Atenção:** os elementos da coleção estão numerados desde 0.

Pode atribuir um valor a um elemento da coleção ou obter o valor de um elemento da coleção utilizando a notação de objetos:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Se atribuir um índice de elemento que ultrapasse o último elemento existente da coleção, a coleção se redimensiona automaticamente e a todos os novos elementos intermediários se lhes atribui um valor nulo:

```4d
 C_COLLECTION(myCol)
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Instanciação

As coleções devem ter sido inicializadas, por exemplo utilizando o comando `New collection`, do contrário ao tentar ler ou modificar seus elementos se gerará um erro de sintaxe.

A instanciação da colecção pode ser feita de uma das seguintes formas:

- utilizando o comando [`New collection`](../API/CollectionClass.md#new-collection),
- utilizando o operador `[]`.

:::info

Vários comandos e funções 4D retornam colecções, por exemplo [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) ou [`collection.copy`](../API/CollectionClass.md#copy). Neste caso, não é necessário instanciar explicitamente a coleção, a linguagem 4D fá-lo por si.

:::

### comando `New collection`

O comando [`New collection`](../API/CollectionClass.md#new-collection) cria uma nova colecção vazia ou pré-preenchida e devolve a sua referência.

Exemplos:

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```

### operador `[]`

O operador `[]` permite-lhe criar uma colecção **literal**. Um literal de coleção é uma lista de zero ou mais expressões, cada uma das quais representa um elemento de coleção, entre colchetes (`[]`). Quando cria uma coleção utilizando um literal de coleção, esta é instanciada com os valores especificados como seus elementos e o seu comprimento é definido para o número de argumentos especificados.

Já que qualquer elemento é considerado uma expressão, pode criar sub-coleções utilizando `[]` em elementos.  Também é possível criar e referenciar literais de objectos ****.

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

Se criar um literal de coleção que contenha um único elemento, certifique-se de que não utiliza um nome correspondente a um nome de tabela existente, caso contrário a sintaxe da tabela `[tableName]` terá prioridade.

:::



### Coleção regular ou partilhada

Pode criar dois tipos de coleções:

- colecções regulares (não partilhadas), utilizando o comando [`Nova colecção`](API/CollectionClass.md#new-collection) . Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- coleções compartidas, utilizando o comando `New shared collection`. Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by [`Use... End use`](Concepts/shared.md#useend-use) structures.

Para saber mais, consulte a seção [Objetos e coleções compartidos](Concepts/shared.md).

## Funções de Collection

As referências a coleções 4D se beneficiam de métodos especiais (as vezes chamados *funções membro*). As funções de recolhimento estão listadas na seção [Class API Reference](API/CollectionClass.md) .

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


### parâmetro propertyPath


Vários métodos aceitam uma _propertyPath_ como parâmetro. Este parâmetro significa:

- um nome de objeto propriedade por exemplo "Sobrenome"
- ou uma rota de propriedades de objeto, ou seja, uma sequência hierárquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".

**Advertência:** Ao usar funções e parâmetros de propriedadePath, não se pode usar ".", "[ ]", ou espaços nos nomes das propriedades, uma vez que isso impedirá que 4D analise correctamente o caminho:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //erro
```

## Indefinido

Lendo a propriedade de **comprimento** de uma coleção indefinida produz 0:

```4d
     C_COLLECTION($c) //variable criada, mas nenhuma coleção é definida
     $size:=$c.length //$size = 0
```