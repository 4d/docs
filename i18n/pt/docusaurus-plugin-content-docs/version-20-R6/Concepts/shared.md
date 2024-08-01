---
id: shared
title: Objetos e coleções compartilhados
---

**Objetos compartilhados** e **coleções compartilhadas** são específicos [objects](Conceps/dt_object.md) e [collections](Concepts/dt_collection.md) cujo conteúdo é compartilhado entre processos. Em contraste com [variáveis de interprocesso](Concepts/variáveis. d#interprocess-variáveis), objetos compartilhados e coleções compartilhadas têm a vantagem de ser compatíveis com **processos 4D preemptivos**: eles podem ser passados por referência para comandos como [`Novo processo`](https://doc. d.com/4dv20/help/command/en/page317.html) ou [`TODO WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html).

Objetos compartilhados e coleções compartilhadas são armazenados em variáveis padrão [`Object`](dt_object.md) e [`Collection`](dt_collection.md) do tipo, mas devem ser instanciados usando comandos específicos:

- para criar um objeto compartilhado, use o comando [`Novo objeto compartilhado`](https://doc.4d.com/4dv20/help/command/en/page1471.html) ou chame a função [`new()`](../API/ClassClass.md#new) de uma [classe compartilhada](classes.md#shared-classes),
- para criar uma coleção compartilhada, use o comando [`Nova coleção compartilhada`](../API/CollectionClass.md#new-shared-collecation).

Shared objects and collections can only contain scalar values or other shared objects and collections. However, shared objects and collections can be set as properties of standard (not shared) objects or collections.

Para modificar um objeto/coleção compartilhada, a estrutura **Usar... Uso final** deve ser chamada. A leitura de um valor de objeto/coleção compartilhado não requer **Uso...Uso final**.

Um catálogo único e global retornado pelo [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525. o comando tml) está sempre disponível em todo o aplicativo e seus componentes, e pode ser usado para armazenar todos os objetos e coleções compartilhadas.

## Utilização de objetos ou coleções compartidos

Depois de instanciados com os comandos `New shared object` ou `New shared collection`, as propriedades e os elementos do objeto/coleção compartilhados podem ser modificados ou lidos em qualquer processo do aplicativo, sob determinadas condições.

### Modificação

As modificações podem ser aplicadas a objetos partilhados e coleções partilhadas:

- adicionar ou remover propriedades de objectos,
- adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou coleções (que criam um grupo partilhado, ver abaixo).

:::note

Keep in mind that objects or collections set as the content of a shared object or collection must themselves be shared.

:::

Todas as instruções de modificação em um objeto compartilhado ou coleção requerem ser protegidas dentro de um bloco [`Use...End use`](#use-end-use-use), caso contrário um erro é gerado.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

Por conveniência, todas as funções de coleção  que modificam o objeto partilhado ou a coleção inserem um bloco interno Use...End use para que não tenha de o codificar. Por exemplo:

```4d
$col:=New shared collection()
$col.push("alpha") //.push() desencadeia internamente a utilização Use/End, pelo que não é necessário fazê-lo você mesmo
```

Si necesita ejecutar varias modificaciones en la misma colección, puede proteger todas las modificaciones con un único `Use...End use` para que las modificaciones se realicen de forma atómica.

```4d
$col:=Storage.mySharedCollection
Use($col)
	$col[0]:="omega" //modificar um elemento tem de ser efetuado dentro de Use/End use
	$col.push("alpha") //.push() desencadeia internamente Use/End use, mas queremos fazer ambas as modificações atomicamente
End Use
```

Um objeto/coleção partilhado só pode ser modificado por um processo de cada vez. Un objeto/una colección compartido(a) sólo puede modificarse por un proceso a la vez. . Intentar modificar un objeto/colección compartido sin al menos un `Use...End use` genera un error. Cuando un proceso llama a `Use...End use` en un objeto/colección compartido que ya está en uso por otro proceso, simplemente se pone en espera hasta que el `End use` lo desbloquee (no se genera ningún error). En consecuencia, las instrucciones dentro de las estructuras `Use...End use` deben ejecutarse rápidamente y desbloquear los elementos lo antes posible. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma coleção diretamente a partir da interface, por exemplo, através de uma caixa de diálogo.

La asignación de objetos/colecciones compartidos a propiedades o elementos de otros objetos/colecciones compartidos está permitida y crea **grupos compartidos**. Um grupo partilhado é criado automaticamente quando um objeto/coleção partilhado é definido como valor de propriedade ou elemento de outro objeto/coleção partilhado. Os grupos partilhados permitem o aninhamento de objectos e colecções partilhados, mas impõem regras adicionais:

- Al llamar a `Use` en un objeto/colección compartido que pertenece a un grupo se bloquean las propiedades/elementos de todos los objetos/colecciones del grupo y se incrementa su conteo de bloqueo. La llamada a `End use` disminuye el contador de bloqueo del grupo y cuando el contador está a 0, todos los objetos/colecciones compartidos vinculados se desbloquean.
- Um objeto/coleção partilhado só pode pertencer a um grupo partilhado. É devolvido um erro se tentar definir um objeto/coleção partilhado já agrupado para um grupo diferente.
- Os objetos/coleções partilhados agrupados não podem ser desagrupados. Uma vez incluído num grupo partilhado, um objeto/coleção partilhado está permanentemente ligado a esse grupo durante toda a sessão. Mesmo que todas as referências de um objeto/coleção sejam removidas do objeto/coleção pai, permanecerão linkadas.

Consulte o exemplo 2 para ver uma ilustração das regras de grupos partilhados.

**Nota:** Los grupos compartidos se gestionan a través de una propiedad interna llamada *locking identifier*. Para obter informações detalhadas sobre este valor, consulte a Referência da Linguagem 4D.

### Leitura

Se permite la lectura de propiedades o elementos de un objeto/colección compartida sin tener que llamar a la estructura `Use...End use`, incluso si el objeto/colección compartida está en uso por otro proceso.

Sin embargo, cuando varios valores son interdependientes y deben ser leídos simultáneamente, es necesario enmarcar el acceso de lectura con una estructura `Use...End use` por coherencia.

### Duplicação

Llamar a `OB Copy` con un objeto compartido (o con un objeto cuyas propiedades son objetos compartidos) es posible, pero en este caso se devuelve un objeto estándar (no compartido).

### Armazenamento

**Storage** es un objeto compartido único, disponible automáticamente en cada aplicación y máquina. This shared object is returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command. É possível utilizar este objeto para fazer referência a todos os objetos/coleções partilhados definidos durante a sessão que se pretende que estejam disponíveis a partir de quaisquer processos preemptivos ou padrão.

Tenga en cuenta que, a diferencia de los objetos compartidos estándar, el objeto `Storage` no crea un grupo compartido cuando se añaden objetos/colecciones compartidos como sus propiedades. Esta excepción permite utilizar el objeto **Storage** sin bloquear todos los objetos o colecciones compartidos conectados.

Para mais informações, consulte a descrição do comando [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html).

## Use... End use

La sintaxis de la estructura `Use...End use` es:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

La estructura `Use...End use` define una secuencia de instrucciones que ejecutarán tareas sobre el parámetro *Shared_object_or_Shared_collection* bajo la protección de un semáforo interno. *Shared_object_or_Shared_collection* puede ser cualquier objeto o colección compartido válido.

Los objetos compartidos y las colecciones compartidas están diseñados para permitir la comunicación entre procesos, en particular, **procesos 4D preferentes**. Podem ser passados por referência como parâmetros de um processo para outro. Es obligatorio rodear las modificaciones en los objetos o colecciones compartidas con las palabras clave `Use...End use` para evitar el acceso concurrente entre procesos.

- Once the **Use** line is successfully executed, all *Shared_object_or_Shared_collection* properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The *statement(s)* sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the *Shared_object_or_Shared_collection* parameter, they become connected within the same shared group.
- If another process tries to access one of the *Shared_object_or_Shared_collection* properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **End use** line unlocks the *Shared_object_or_Shared_collection* properties and all objects of the same group.
- En el código 4D se pueden anidar varias estructuras **Use...End use**. Para modificar un objeto/colección compartido, se debe llamar a la estructura **Use...End use**.

:::note

Las siguientes funciones activan automáticamente un **Use/End use** interno, haciendo innecesaria una llamada explícita a la estructura cuando se ejecuta la función:

- [funções de coleção](../API/CollectionClass.md) que modificam as coleções compartilhadas
- [funciones compartidas](classes.md#shared-functions) (definidas en [clases compartidas](classes.md#shared-classes)).

:::

## Exemplo 1

Se quiser lançar vários processos que executem uma tarefa de inventário em diferentes produtos e atualizem o mesmo objeto partilhado. O processo principal instancia um objeto partilhado vazio e, em seguida, lança os outros processos, passando o objeto partilhado e os produtos a contar como parâmetros:

```4d
 ARRAY TEXT($_items;0)
 ... //preencher o array com itens para contar
 $nbItems:=Tamanho do array($_items)
 var $inventory : Object
 $inventory:=Novo objeto partilhado
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Criar processos
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0; "HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory objeto enviado por referência
 End for
```

No método "HowMany", o inventário é efetuado e o objeto partilhado $inventory é atualizado o mais rapidamente possível:

```4d
	//HowMany
 #DECLARE ($what : Text ; $inventory : Object)

 $count:=CountMethod($what) //método para contar produtos
 Use($inventory) //utilizar objeto partilhado
    $inventory[$what]:=$count  //guardar os resultados para este item
 End use
```

## Exemplo 2

Os exemplos seguintes destacam regras específicas para o tratamento de grupos partilhados:

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //grupo 1 é criado
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //grupo 2 é criado
 End use

 Use($ob1) //utilize um objeto do grupo 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 já pertence a outro grupo
  //atribuição não é permitida
 End use

 Use($ob3)
    $ob3.a:=Null //remover qualquer referência a $ob4 do grupo 2
 End use

 Use($ob1) //utilizar um objeto do grupo 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 ainda pertence ao grupo 2
  //atribuição não é permitida
 End use
```
