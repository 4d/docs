---
id: shared
title: Objetos e coleções compartilhados
---

**Los objetos compartidos** y **las colecciones compartidas** son [objetos](Concepts/dt_object.md) y [colecciones](Concepts/dt_collection.md) específicas cuyo contenido se comparte entre procesos. In contrast to [interprocess variables](Concepts/variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html) or [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html).

Shared objects and shared collections are stored in standard [`Object`](dt_object.md) and [`Collection`](dt_collection.md) type variables, but must be instantiated using specific commands:

- to create a shared object, use the [`New shared object`](https://doc.4d.com/4dv20/help/command/en/page1471.html) command or call the [`new()`](../API/ClassClass.md#new) function of a [shared class](classes.md#shared-classes),
- to create a shared collection, use the [`New shared collection`](../API/CollectionClass.md#new-shared-collection) command.

Shared objects and collections can only contain scalar values or other shared objects and collections. However, shared objects and collections can be set as properties of standard (not shared) objects or collections.

Para modificar un objeto/colección compartido, se debe llamar a la estructura **Use...End use**. La lectura de un valor de objeto/colección compartido no requiere **Use...End use**.

A unique, global catalog returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command is always available throughout the application and its components, and can be used to store all shared objects and collections.

## Utilização de objetos ou coleções compartidos

Una vez instanciado con los comandos `Nuevo objeto compartido` o `Nueva colección compartida`, las propiedades y elementos del objeto compartido/colección pueden ser modificados o leídos desde cualquier proceso de la aplicación, bajo ciertas condiciones.

### Modificação

As modificações podem ser aplicadas a objetos partilhados e coleções partilhadas:

- adicionar ou remover propriedades de objectos,
- adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou coleções (que criam um grupo partilhado, ver abaixo).

:::note

Keep in mind that objects or collections set as the content of a shared object or collection must themselves be shared.

:::

All modification instructions in a shared object or collection require to be protected inside a [`Use...End use`](#use-end-use) block, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

Por comodidad, todas las [funciones colección](../API/CollectionClass.md) que modifican el objeto compartido o la colección insertan un bloque interno `Use...End use` para que no tenga que codificarlo usted mismo. Por exemplo:

```4d
$col:=New shared collection()
$col.push("alpha") //.push() desencadeia internamente a utilização Use/End, pelo que não é necessário fazê-lo você mesmo
```

Si necesita ejecutar varias modificaciones en la misma colección, puede proteger todas las modificaciones con un único `Use...End use` para que las modificaciones se realicen de forma atómica.

```4d
$col:=Storage.mySharedCollection
Use($col)
	$col[0]:="omega" //modifying an element requires to be performed inside Use/End use
	$col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically
End Use
```

Um objeto/coleção partilhado só pode ser modificado por um processo de cada vez. Un objeto/una colección compartido(a) sólo puede modificarse por un proceso a la vez. . Intentar modificar un objeto/colección compartido sin al menos un `Use...End use` genera un error. Cuando un proceso llama a `Use...End use` en un objeto/colección compartido que ya está en uso por otro proceso, simplemente se pone en espera hasta que el `End use` lo desbloquee (no se genera ningún error). En consecuencia, las instrucciones dentro de las estructuras `Use...End use` deben ejecutarse rápidamente y desbloquear los elementos lo antes posible. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma coleção diretamente a partir da interface, por exemplo, através de uma caixa de diálogo.

La asignación de objetos/colecciones compartidos a propiedades o elementos de otros objetos/colecciones compartidos está permitida y crea **grupos compartidos**. Um grupo partilhado é criado automaticamente quando um objeto/coleção partilhado é definido como valor de propriedade ou elemento de outro objeto/coleção partilhado. Os grupos partilhados permitem o aninhamento de objectos e colecções partilhados, mas impõem regras adicionais:

- Al llamar a `Use` en un objeto/colección compartido que pertenece a un grupo se bloquean las propiedades/elementos de todos los objetos/colecciones del grupo y se incrementa su conteo de bloqueo. La llamada a `End use` disminuye el contador de bloqueo del grupo y cuando el contador está a 0, todos los objetos/colecciones compartidos vinculados se desbloquean.
- Um objeto/coleção partilhado só pode pertencer a um grupo partilhado. É devolvido um erro se tentar definir um objeto/coleção partilhado já agrupado para um grupo diferente.
- Os objetos/coleções partilhados agrupados não podem ser desagrupados. Uma vez incluído num grupo partilhado, um objeto/coleção partilhado está permanentemente ligado a esse grupo durante toda a sessão. Mesmo que todas as referências de um objeto/coleção sejam removidas do objeto/coleção pai, permanecerão linkadas.

Consulte o exemplo 2 para ver uma ilustração das regras de grupos partilhados.

**Nota:** Los grupos compartidos se gestionan a través de una propiedad interna llamada _locking identifier_. Para obter informações detalhadas sobre este valor, consulte a Referência da Linguagem 4D.

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

La estructura `Use...End use` define una secuencia de instrucciones que ejecutarán tareas sobre el parámetro _Shared_object_or_Shared_collection_ bajo la protección de un semáforo interno. _Shared_object_or_Shared_collection_ puede ser cualquier objeto o colección compartido válido.

Los objetos compartidos y las colecciones compartidas están diseñados para permitir la comunicación entre procesos, en particular, **procesos 4D preferentes**. Podem ser passados por referência como parâmetros de um processo para outro. Es obligatorio rodear las modificaciones en los objetos o colecciones compartidas con las palabras clave `Use...End use` para evitar el acceso concurrente entre procesos.

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group.
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **End use** line unlocks the _Shared_object_or_Shared_collection_ properties and all objects of the same group.
- En el código 4D se pueden anidar varias estructuras **Use...End use**. Para modificar un objeto/colección compartido, se debe llamar a la estructura **Use...End use**.

:::note

Las siguientes funciones activan automáticamente un **Use/End use** interno, haciendo innecesaria una llamada explícita a la estructura cuando se ejecuta la función:

- [collection functions](../API/CollectionClass.md) that modify shared collections
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

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## Exemplo 2

Os exemplos seguintes destacam regras específicas para o tratamento de grupos partilhados:

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //group 1 is created
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //group 2 is created
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 already belongs to another group
  //assignment is not allowed
 End use

 Use($ob3)
    $ob3.a:=Null //remove any reference to $ob4 from group 2
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 still belongs to group 2
  //assignment is not allowed
 End use
```
