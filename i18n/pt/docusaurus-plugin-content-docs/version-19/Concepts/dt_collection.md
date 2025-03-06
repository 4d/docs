---
id: collection
title: Collection
---

Coleções são listas ordenadas de valores de tipos diferentes ou não (texto, número, objeto, booleano, coleção ou null).

Para gerenciar as variáveis de tipo Coleção se deve utilizar a notação de objetos (ver  [Syntax basics](Concepts/dt_object.md#syntax-basics)).

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

## Inicialização

Coleções devem ter sido inicializadas, por exemplo, usando o comando `New collection`, caso contrário, tentar ler ou modificar seus elementos gerará um erro de sintaxe.

Exemplo:

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```

### Coleção regular ou partilhada

Pode criar dois tipos de coleções:

- coleções regulares (não compartilhadas) usando o comando [`New collection`](API/CollectionClass.md#new-collection). Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- coleções compartidas, utilizando o comando `New shared collection`. Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by [`Use... End use`](Concepts/shared.md#useend-use) structures.

Para saber mais, consulte a seção [Objetos e coleções compartidos](Concepts/shared.md).

## Funções de Collection

As referências a coleções 4D se beneficiam de métodos especiais (as vezes chamados *funções membro*). As funções de coleção estão listadas na seção [Class API Reference](API/CollectionClass.md).

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

**Advertência:** ao usar funções e parâmetros propertyPath, não se pode usar ".", "[ ]", ou espaços nos nomes das propriedades, dado que isso impedirá que 4D analise corretamente o caminho:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //erro
```