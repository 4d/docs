---
id: shared
title: Objetos e coleções compartilhados
---

## Visão Geral
**Os objectos partilhados** e as coleções partilhadas **** são objectos específicos [](Concepts/dt_object.md) e coleções [](Concepts/dt_collection.md) cujos conteúdos são partilhados entre processos. Ao contrário das [variáveis interprocessos](Concepts/variables.md#interprocess-variables), os objetos partilhados e as coleções partilhadas têm a vantagem de serem compatíveis com **processos 4D preemptivos**: podem ser passados por referência como parâmetros de comandos como `New process` ou `CALL WORKER`.

Os objetos partilhados e as coleções partilhadas podem ser armazenados em variáveis de tipo normalizadas `Object` e `Collection` , mas têm de ser instanciados utilizando comandos específicos:

- para criar um objeto compartilhado, use o comando `New shared object`,
- Para criar uma coleção compartilhada, use o comando `New shared collection (Nova coleção compartilhada` ).

**Nota:** Objetos e coleções compartilhadas podem ser definidas como propriedades de objetos padrão (não compartilhados) ou coleções.

Para modificar um objeto/coleção partilhado, é necessário chamar a estrutura **Use...End use** . A leitura de um valor de objeto/coleção partilhado não requer **Use...End use**.

Um catálogo único e global retornado pelo comando `Storage` está sempre disponível em todo o banco de dados e em seus componentes e pode ser usado para armazenar todos os objetos e coleções compartilhados.

## Utilização de objetos ou coleções compartidos
Depois de instanciados com os comandos `Novo objeto compartilh` ado ou `Nova coleção compartilhada`, as propriedades e os elementos do objeto/coleção compartilhados podem ser modificados ou lidos em qualquer processo do aplicativo.

### Modificação
As modificações podem ser aplicadas a objetos partilhados e coleções partilhadas:

- adicionar ou remover propriedades de objectos,
- adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou coleções (que criam um grupo partilhado, ver abaixo).

No entanto, todas as instruções de modificação em um objeto ou coleção compartilhada devem estar cercadas pelo `Use...End use` palavras-chave, caso contrário, um erro será gerado.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

Um objeto/coleção partilhado só pode ser modificado por um processo de cada vez. `Use` bloqueia o objeto/coleção compartilhado de outros threads, enquanto o último `End use` desbloqueia todos os objetos e coleções. A tentativa de modificar um objeto/coleção partilhado sem pelo menos um `Use...End use` gera um erro. Quando um processo chama `Use...End use` num objeto/coleção partilhado que já está a ser utilizado por outro processo, este é simplesmente colocado em espera até que o `End use` o desbloqueie (não é gerado qualquer erro). Consequentemente, as instruções em `Use... End use` estruturas devem ser executadas rapidamente e desbloquear os elementos o mais rapidamente possível. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma coleção diretamente a partir da interface, por exemplo, através de uma caixa de diálogo.

A atribuição de objectos/colecções partilhados a propriedades ou elementos de outros objectos/colecções partilhados é permitida e cria **grupos partilhados**. Um grupo partilhado é criado automaticamente quando um objeto/coleção partilhado é definido como valor de propriedade ou elemento de outro objeto/coleção partilhado. Os grupos partilhados permitem o aninhamento de objectos e colecções partilhados, mas impõem regras adicionais:

- Chamar `Use` em um objeto/coleção compartilhado de um grupo bloqueará propriedades/elementos de todos os objetos/coleções compartilhados pertencentes ao mesmo grupo.
- Um objeto/coleção partilhado só pode pertencer a um grupo partilhado. É devolvido um erro se tentar definir um objeto/coleção partilhado já agrupado para um grupo diferente.
- Os objetos/coleções partilhados agrupados não podem ser desagrupados. Uma vez incluído num grupo partilhado, um objeto/coleção partilhado está permanentemente ligado a esse grupo durante toda a sessão. Mesmo que todas as referências de um objeto/coleção sejam removidas do objeto/coleção pai, permanecerão linkadas.

Consulte o exemplo 2 para ver uma ilustração das regras de grupos partilhados.

### Leitura
Ao chamar a `Use` em um objeto/colección compartido de um grupo se bloquearão as propriedades/elementos de todos os objetos/coleções compartidos que pertençam ao mesmo grupo.

No entanto, é necessário ler um objeto/coleção partilhado em `Use...End use` quando vários valores estão ligados entre si e devem ser lidos de uma só vez, por razões de coerência.

### Duplicação
É possível chamar `OB Copy` com um objeto partilhado (ou com um objeto que contenha objetos partilhados como propriedades), mas devolverá um objeto padrão (não partilhado), incluindo os objetos nele contidos (se existirem).

### Armazenamento
**Armazenamento** é um objeto partilhado único, automaticamente disponível em cada aplicação e máquina. Esse objeto compartilhado é retornado pelo comando `Storage`. É possível utilizar este objeto para fazer referência a todos os objetos/coleções partilhados definidos durante a sessão que se pretende que estejam disponíveis a partir de quaisquer processos preemptivos ou padrão.

Note-se que, ao contrário dos objetos partilhados padrão, o objeto `storage` não cria um grupo partilhado quando são adicionados objetos/coleções partilhados como suas propriedades. Esta exceção permite que o objeto **Storage** seja utilizado sem bloquear todos os objectos partilhados ou colecções ligados.

Para mais informações, consulte a descrição do comando `Storage` .

## Use... End use
A sintaxe formal da estrutura `Use...End use` é a seguinte:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

A estrutura `Use...End use` define uma sequência de instruções que executarão tarefas no parâmetro *Shared_object_or_Shared_collection* sob a proteção de um semáforo interno. *Shared_object_or_Shared_collection* pode ser qualquer objeto partilhado ou coleção partilhada válida.

Os objectos partilhados e as colecções partilhadas são concebidos para permitir a comunicação entre processos, em particular, **processos 4D preemptivos**. Podem ser passados por referência como parâmetros de um processo para outro. Para obter informações detalhadas sobre objetos compartilhados ou coleções compartilhadas, consulte a página **Objetos compartilhados e coleções compartilh** adas. É obrigatório rodear as modificações em objectos partilhados ou colecções partilhadas pelas palavras-chave `Use...End use` para impedir o acesso simultâneo entre processos.

- Quando a linha **Use** é executada com êxito, todas as propriedades/elementos de _Shared_object_or_Shared_collection_ são bloqueados para todos os outros processos com acesso de escrita até que a linha correspondente `End use` seja executada.
- As declarações __ sequência podem executar qualquer modificação nas propriedades/elementos Shared_object_or_Shared_collection sem risco de acesso simultâneo.
- Se outro objeto ou coleção compartilhada for adicionado como uma propriedade do parâmetro _Shared_object_or_Shared_collection_, eles se tornarão conectados dentro do mesmo grupo compartilhado (consulte **Uso de objetos ou coleções compartilh**adas).
- Se outro processo tentar acessar a uma das propriedades _Shared_object_or_Shared_collection_ ou propriedades ligadas enquanto uma sequência **Use...End use** estiver sendo executada, é automaticamente colocado em espera e aguarda até que a sequência atual seja terminada.
- A linha **End use** desbloqueia as propriedades _Shared_object_or_Shared_collection_ e todos os objetos que compartilham o mesmo identificador de bloqueio.
- Várias estruturas **Use...End use** podem ser aninhadas no código 4D. Nesse caso, todos os bloqueios são empilhados e as propriedades/elementos serão liberados somente quando a última chamada End use for executada.

**Nota:** Se um método de coleta modificar uma coleção compartilhada, um **interno Use** é automaticamente chamado para esta coleção compartilhada enquanto a função é executada.


## Exemplo 1

Se quiser lançar vários processos que executem uma tarefa de inventário em diferentes produtos e atualizem o mesmo objeto partilhado. O processo principal instancia um objeto partilhado vazio e, em seguida, lança os outros processos, passando o objeto partilhado e os produtos a contar como parâmetros:

```4d
 ARRAY TEXT($_items;0)
 ... //preencher o array com itens para contar
 $nbItems:=Size of array($_items)
 C_OBJECT($inventory)
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Criar processos
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0; "HowMany_"+$_items{$i};$_items{$i};$inventory)
  //objeto $inventory  enviado por referência
 End for
```

No método "HowMany", o inventário é efetuado e o objeto partilhado $inventory é atualizado o mais rapidamente possível:

```4d
 C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 //para melhor legibilidade
 $inventory:=$2

 $count:=CountMethod($what) //método para contar produtos
 Use($inventory) //use o objeto compartilhado
    $inventory[$what]:=$count  //salve os resultados desse item
 End use
```

## Exemplo 2

Os exemplos seguintes destacam regras específicas para o tratamento de grupos partilhados:

```4d
 $ob1:=Novo objeto partilhado
 $ob2:=Novo objeto partilhado
 Use($ob1)
    $ob1.a:=$ob2  //grupo 1 é criado
 End use

 $ob3:=Novo objeto partilhado
 $ob4:=Novo objeto partilhado
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
