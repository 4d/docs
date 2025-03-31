---
id: shared
title: Objetos e coleções compartilhados
---

**Shared objects** and **shared collections** are specific [objects](./dt_object.md) and [collections](./dt_collection.md) whose contents are shared between processes. In contrast to [interprocess variables](./variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as [`New process`](../commands-legacy/new-process.md) or [`CALL WORKER`](../commands-legacy/call-worker.md).

Shared objects and shared collections are stored in standard [`Object`](./dt_object.md) and [`Collection`](./dt_collection.md) type variables, but must be instantiated using specific commands:

- to create a shared object, use the [`New shared object`](../commands-legacy/new-shared-object.md) command or call the [`new()`](../API/ClassClass.md#new) function of a [shared class](./classes.md#shared-classes),
- para criar uma coleção compartilhada, use o comando [`New shared collection`](../commands/new-shared-collection.md).

Shared objects and collections can only contain scalar values or other shared objects and collections. However, shared objects and collections can be set as properties of standard (not shared) objects or collections.

Para modificar um objeto/coleção compartilhada, a estrutura **Usar... Uso final** deve ser chamada. A leitura de um valor de objeto/coleção compartilhado não requer **Uso...Uso final**.

A unique, global catalog returned by the [`Storage`](../commands-legacy/storage.md) command is always available throughout the application and its components, and can be used to store all shared objects and collections.

## Utilização de objetos ou coleções compartidos

Depois de instanciados com os comandos `New shared object` ou `New shared collection`, as propriedades e os elementos do objeto/coleção compartilhados podem ser modificados ou lidos em qualquer processo do aplicativo, sob determinadas condições.

### Modificação

As modificações podem ser aplicadas a objetos partilhados e coleções partilhadas:

- adicionar ou remover propriedades de objectos,
- adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou coleções (que criam um grupo partilhado, ver abaixo).

:::note

Keep in mind that objects or collections set as the content of a shared object or collection must themselves be shared.

:::

All modification instructions in a shared object or collection require to be protected inside a [`Use...End use`](#useend-use) block, otherwise an error is generated.

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

Se precisar executar várias modificações na mesma coleção, você poderá proteger todas as modificações com um único `Use...End use` para que as modificações sejam executadas atomicamente.

```4d
$col:=Storage.mySharedCollection
Use($col)
	$col[0]:="omega" //modificar um elemento tem de ser efetuado dentro de Use/End use
	$col.push("alpha") //.push() desencadeia internamente Use/End use, mas queremos fazer ambas as modificações atomicamente
End Use
```

Um objeto/coleção partilhado só pode ser modificado por um processo de cada vez. `Usar` bloqueia o objeto/coleção compartilhada de outros tópicos, enquanto `Finalizar uso` desbloqueia o objeto/coleção compartilhada (se o contador de bloqueio estiver em 0, veja abaixo). . A tentativa de modificar um objeto/coleção compartilhado sem pelo menos um `Use...End use` gera um erro. Quando um processo chama `Use...End use` em um objeto/coleção compartilhado que já está em uso por outro processo, ele simplesmente fica em espera até que o `End use` o desbloqueie (nenhum erro é gerado). Consequentemente, as instruções dentro das estruturas `Use...End use` devem ser executadas rapidamente e desbloquear os elementos o mais rápido possível. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma coleção diretamente a partir da interface, por exemplo, através de uma caixa de diálogo.

A atribuição de objectos/colecções partilhados a propriedades ou elementos de outros objectos/colecções partilhados é permitida e cria grupos partilhados\*\*. Um grupo partilhado é criado automaticamente quando um objeto/coleção partilhado é definido como valor de propriedade ou elemento de outro objeto/coleção partilhado. Os grupos partilhados permitem o aninhamento de objectos e colecções partilhados, mas impõem regras adicionais:

- Chamar `Use` em um objeto/coleta compartilhado pertencente a um grupo bloqueia propriedades/elementos de todos os objetos/coletas compartilhados do grupo e incrementa seu contador de bloqueio. Chamando `Fim uso` diminui o contador de bloqueio do grupo e quando o contador está em 0, todos os objetos/coleções compartilhadas vinculadas são desbloqueados.
- Um objeto/coleção partilhado só pode pertencer a um grupo partilhado. É devolvido um erro se tentar definir um objeto/coleção partilhado já agrupado para um grupo diferente.
- Os objetos/coleções partilhados agrupados não podem ser desagrupados. Uma vez incluído num grupo partilhado, um objeto/coleção partilhado está permanentemente ligado a esse grupo durante toda a sessão. Mesmo que todas as referências de um objeto/coleção sejam removidas do objeto/coleção pai, permanecerão linkadas.

Consulte o exemplo 2 para ver uma ilustração das regras de grupos partilhados.

### Leitura

A leitura de propriedades ou elementos de um objeto/coleção compartilhado é permitida sem a necessidade de chamar a estrutura `Use...End use`, mesmo que o objeto/coleção compartilhado esteja sendo usado por outro processo.

No entanto, é necessário ler um objeto/coleção partilhado dentro de `Use...End use` quando vários valores estão ligados entre si e devem ser lidos de uma só vez, por razões de coerência.

### Duplicação

Chamar `OB Copy` com um objeto partilhado (ou com um objeto que contenha objeto(s) partilhados como propriedades) é possível, mas irá retornar um objeto padrão (não partilhado) incluindo os objetos contidos nele (se houver).

### Armazenamento

**Armazenamento** é um objeto partilhado único, automaticamente disponível em cada aplicação e máquina. This shared object is returned by the [`Storage`](../commands-legacy/storage.md) command. É possível utilizar este objeto para fazer referência a todos os objetos/coleções partilhados definidos durante a sessão que se pretende que estejam disponíveis a partir de quaisquer processos preemptivos ou padrão.

Observe que, diferentemente dos objetos compartilhados padrão, o objeto `storage` não cria um grupo compartilhado quando objetos/coleções compartilhados são adicionados como suas propriedades. Esta exceção permite que o objeto **Storage** seja usado sem bloquear todos os objetos compartilhados ou coleções conectadas.

For more information, refer to the [`Storage`](../commands-legacy/storage.md) command description.

## Use... End use

A sintaxe formal da estrutura `Use...End use` é a seguinte:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

A estrutura `Use...End use` define uma sequência de instruções que executarão tarefas no parâmetro *Shared_object_or_Shared_collection* sob a proteção de um semáforo interno. O *Shared_object_or_Shared_collection* pode ser qualquer objeto compartilhado ou coleção compartilhada válida.

Objetos compartilhados e coleções compartilhadas são projetados para permitir a comunicação entre processos, em particular, **processos 4D preemptivos**. Podem ser passados por referência como parâmetros de um processo para outro. É obrigatório envolver as modificações em objetos compartilhados ou coleções compartilhadas com as palavras-chave `Use...End use` para evitar o acesso simultâneo entre processos.

- Quando a linha **Use** é executada com sucesso, todas as propriedades/elementos *Shared_object_or_Shared_collection* são bloqueados para todos os outros processos com acesso de gravação até que a linha `End use` correspondente seja executada.
- A sequência de *declarações* pode executar qualquer modificação nas propriedades/elementos do *Shared_object_or_Shared_collection* sem risco de acesso simultâneo.
- Se outro objeto ou coleção compartilhada for adicionado como uma propriedade do parâmetro *Shared_object_or_Shared_collection*, eles se tornarão conectados dentro do mesmo grupo compartilhado.
- Se outro processo tentar acessar uma das propriedades *Shared_object_or_Shared_collection* ou propriedades conectadas enquanto um **Use. .Fim de uso** a sequência está sendo executada, ela é automaticamente colocada em espera e aguarda até que a sequência atual seja encerrada.
- A linha **End use** desbloqueia as propriedades *Shared_object_or_Shared_collection* e todos os objetos do mesmo grupo.
- Várias estruturas de **Uso...Uso final** podem ser aninhadas no código 4D. No caso de um grupo, cada **Uso** incrementa o contador de bloqueio do grupo e cada **uso final** decreta ele; todas as propriedades/elementos serão liberadas somente quando a última chamada **Final** define o contador de bloqueio como 0.

### Automatic Use...End use calls

The following features automatically trigger an internal **Use/End use**, making an explicit call to the structure unnecessary when it is executed:

- [collection functions](../API/CollectionClass.md) that modify shared collections,
- [`ARRAY TO COLLECTION`](../commands-legacy/array-to-collection.md) command,
- [`OB REMOVE`](../commands-legacy/ob-remove.md) command,
- [funções compartilhadas](classes.md#shared-functions) (definida em [classes compartilhadas](classes.md#shared-classes)).

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
