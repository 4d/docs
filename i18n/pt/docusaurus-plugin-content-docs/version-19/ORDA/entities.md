---
id: entities
title: Trabalhar com dados
---

No ORDA, acede-se aos dados através das [entidades](dsMapping.md#entity) e das [selecções de entidades](dsMapping.md#entity-selection). Estes objectos permitem-lhe criar, atualizar, consultar ou ordenar os dados do datastore.

## Criar uma entidade

Existem duas maneiras de criar uma nova entidade numa dataclass:

* Como as entidades são referências a registros do banco de dados, é possível criar entidades criando registros usando a linguagem 4D "clássica" e, em seguida, referenciá-los com métodos ORDA, como `entity.next( )` ou `entitySelection.first( )`.
* Você também pode criar uma entidade usando o método `dataClass.new()`.

Tenha em atenção que a entidade só é criada na memória. Se você quiser adicioná-lo ao armazenamento de dados, deverá chamar o método `entity.save( )`.

Os atributos da entidade estão diretamente disponíveis como propriedades do objeto entidade. Para obter mais informações, consulte [Usando atributos de entidade](#using-entity-attributes).

Por exemplo, se quisermos criar uma nova entidade na classe de dados "Employee" no repositório de dados atual com "John" e "Dupont" atribuídos aos atributos firstname e name:

```4d
var $myEntity : cs. EmployeeEntity
$myEntity:=ds. Employee.new() //Create a new object of the entity type
$myEntity.name:="Dupont" //assign 'Dupont' to the 'name' attribute
$myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
$myEntity.save() //save the entity
```
> Uma entidade é definida apenas no processo em que foi criada. Não é possível, por exemplo, armazenar uma referência a uma entidade em uma variável interprocessos e usá-la em outro processo.

## Entidades e referências

Uma entidade contém uma referência a um registo 4D. Entidades diferentes podem fazer referência ao mesmo registo 4D. Além disso, como uma entidade pode ser armazenada em uma variável de objeto 4D, diferentes variáveis podem conter uma referência à mesma entidade.

Se executar o seguinte código:

```4d
 var $e1; $e2 : cs. EmployeeEntity
 $e1:=ds. Employee.get(1) //access the employee with ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //both variables $e1 and $e2 share the reference to the same entity
  //$e2.name contains "Hammer"
```

Este facto é ilustrado pelo gráfico seguinte:

![](../assets/en/ORDA/entityRef1.png)

Agora, se executar:

```4d
 var $e1; $e2 : cs. EmployeeEntity
 $e1:=ds. Employee.get(1)
 $e2:=ds. Employee.get(1)
 $e1.name:="Hammer"
  //variable $e1 contains a reference to an entity
  //variable $e2 contains another reference to another entity
  //$e2.name contains "smith"
```

Este facto é ilustrado pelo gráfico seguinte:

![](../assets/en/ORDA/entityRef2.png)

Note-se, no entanto, que as entidades se referem ao mesmo registo. Em todos os casos, se você chamar o método `entity.save( )` , o registro será atualizado (exceto em caso de conflito, consulte [Bloqueio de entidades](#entity-locking)).

De fato, `$e1` e `$e2` não são a entidade em si, mas uma referência à entidade. Isso significa que você pode passá-los diretamente para qualquer função ou método, e ele funcionará como um ponteiro, e mais rápido do que um ponteiro 4D. Por exemplo:

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

E o método é:

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

Você pode lidar com entidades como qualquer outro objeto em 4D e passar suas referências diretamente como  [parâmetros](Concepts/parameters.md).
> Com as entidades, não há o conceito de "registro atual" como na linguagem clássica 4D. Pode utilizar tantas entidades quantas as necessárias, em simultâneo. Também não há bloqueio automático em uma entidade (consulte [Bloqueio de entidades](#entity-locking)). Quando uma entidade é carregada, ela usa o mecanismo [lazy loading](glossary.md#lazy-loading) , o que significa que somente as informações necessárias são carregadas. No entanto, no cliente/servidor, a entidade pode ser carregada automaticamente de forma direta, se necessário.

## Utilização de atributos de entidades

Os atributos de entidade armazenam dados e mapeiam os campos correspondentes na tabela correspondente. Os atributos de entidade do tipo armazenamento podem ser definidos ou obtidos como propriedades simples do objeto de entidade, enquanto a entidade do tipo **relatedEntity** ou **relatedEntities** retornará uma entidade ou uma seleção de entidades.
> Para obter mais informações sobre o tipo de atributo, consulte o parágrafo [Atributos de armazenamento e de relação](dsMapping.md#storage-and-relation-attributes).

Por exemplo, para definir um atributo de armazenamento:

```4d
 $entity:=ds. Employee.get(1) //obter atributo de funcionário com ID 1
 $name:=$entity.lastname //obter o nome do funcionário, por exemplo, "Smith"
 $entity.lastname:="Jones" //definir o nome do funcionário
```
> Os atributos de imagens não podem ser atribuídos diretamente com um caminho fornecido em uma entidade.

O acesso a um atributo relacionado depende do tipo de atributo. Por exemplo, com a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes.png)

É possível aceder aos dados através do(s) objeto(s) relacionado(s):

```4d
 $entity:=ds. Project.all().first().theClient //get the Company entity associated to the project
 $EntitySel:=ds. Company.all().first().companyProjects //get the selection of projects for the company
```

Observe que tanto *theClient* quanto *companyProjects* no exemplo acima são atributos de relação primária e representam uma relação direta entre as duas classes de dados. No entanto, os atributos de relação também podem ser criados com base em caminhos através de relações em vários níveis, incluindo referências circulares. Por exemplo, considere a seguinte estrutura:

![](../assets/en/ORDA/entityAttributes2.png)

Cada trabalhador pode ser um gestor e pode ter um gestor. Para obter o gerente do gerente de um funcionário, você pode simplesmente escrever:

```4d
 $myEmp:=ds. Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

## Atribuição de valores a atributos de relação

Na arquitetura ORDA, os atributos de relação contêm diretamente dados relacionados a entidades:

* Um atributo de relação do tipo N->1 (**relatedEntity** kind) contém uma entidade
* Um atributo de relação do tipo 1->N (**relatedEntities** kind) contém uma seleção de entidade

Vejamos a seguinte estrutura (simplificada):

![](../assets/en/ORDA/entityAttributes3.png)

Neste exemplo, uma entidade na classe de dados "Employee" contém um objeto do tipo Entity no atributo "employer" (ou um valor nulo). Uma entidade na classe de dados "Company" contém um objeto do tipo EntitySelection no atributo "staff" (ou um valor nulo).
> Na ORDA, a propriedade Automática ou Manual das relações não tem efeito.

Para atribuir um valor diretamente ao atributo "employer", você deve passar uma entidade existente da classe de dados "Company". Por exemplo:

```4d
 $emp:=ds. Employee.new() // crie um funcionário
 $emp.lastname:="Smith" // atribua um valor a um atributo
 $emp. mployer:=ds. Company.query("nome =:1";"4D")[0]  //atribuir uma entidade da empresa
 $emp.save()
```

Você também pode obter diretamente a entidade relacionada através de sua chave primária (Número ou texto). Por exemplo:

```4d
 $emp:=ds. Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=ds. Company.get(2)
  //obtém a entidade Company com o valor de chave primária 2
  //atribui ao funcionário
 $emp.save()
```

Isso é particularmente útil quando você está importando grandes quantidades de dados de um banco de dados relacional. Este tipo de importação geralmente contém uma coluna "ID", que faz referência a uma chave primária que você pode atribuir diretamente a um atributo de relação.


Você pode atribuir ou modificar o valor de um "1" atributo da entidade relacionada a partir do dataclass "N" diretamente através do atributo relacionado. Por exemplo, se você deseja modificar o atributo de nome de uma entidade relacionada da Empresa de uma entidade funcional, você pode escrever:

```code4d
 $emp:=ds. //modificar o atributo name da empresa relacionada
 $emp.employer.save() //salvar o atributo relacionado
  //a entidade relacionada é atualizada
```

## Criar uma selecção de entidade

Você pode criar um objeto de tipo [seleção de entidade](dsMapping.md#entity-selection) da seguinte forma:

* Consultando as entidades [em um dataclass](API/DataClassClass.md#query) ou em um [existente seleção de entidade](API/EntitySelectionClass.md#query);
* Usando a função [`.all()`](API/DataClassClass.md#all) de dataclass para selecionar todas as entidades em um dataclass;
* Usando o comando `Create entity selection` ou o método [`.newSelection()`](API/DataClassClass.md#newselection) para criar uma seleção de entidade em branco;
* Usando a função [`.copy()`](API/EntitySelectionClass.md#copy) para duplicar uma seleção de entidade existente;
* a nova seleção de entidade resulta de uma das várias funções de classe ORDA aplicadas a uma seleção de entidade existente ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
* Utilizando um atributo de relação do tipo "entidades relacionadas" (ver abaixo).

Você pode criar e usar simultaneamente tantas seleções de entidades diferentes quanto desejar para uma classe de dados. Lembre-se de que uma seleção de entidade contém apenas referências a entidades. Seleções diferentes de entidades podem conter referências para as mesmas entidades.

### Entity selections partilháveis ou alteráveis

Uma seleção de entidade pode ser **compartilhável** (pode ser lida por vários processos, mas não pode ser alterada após a criação) ou **alterável** (suporta a função [`.add()`](API/EntitySelectionClass.md#add) , mas só pode ser usada pelo processo atual).

#### Propriedades

Uma seleção de entidade **compartilhável** tem as seguintes características:

* ele pode ser armazenado em um objeto compartilhado ou em uma coleção compartilhada e pode ser passado como parâmetro entre vários processos ou trabalhadores;
* it can be stored in several shared objects or collections, or in a shared object or collection which already belongs to a group;
* não permite a adição de novas entidades. A tentativa de adicionar uma entidade a uma seleção de entidade compartilhável acionará um erro (1637 - Esta seleção de entidade não pode ser alterada). Para adicionar uma entidade a uma seleção de entidade compartilhável, você deve primeiro transformá-la em uma seleção de entidade não compartilhável usando a função [`.copy()`](API/EntitySelectionClass.md#copy) , antes de chamar [`.add()`](API/EntitySelectionClass.md#add).

> A maioria das funções de seleção de entidades (como [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) suporta seleções de entidades compartilháveis, pois não precisam alterar a seleção de entidades original (elas retornam uma nova).

Uma seleção **alternável** da entidade tem as seguintes características:

* não pode ser compartilhado entre processos, nem armazenado em um objeto ou coleção compartilhada. A tentativa de armazenar uma seleção de entidade não compartilhável em um objeto ou coleção compartilhada acionará um erro (-10721 - Tipo de valor não suportado em um objeto compartilhado ou coleção compartilhada);
* aceita a adição de novas entidades, ou seja, é compatível com a função [`.add()`](API/EntitySelectionClass.md#add) .

#### Como é que são definidos?

A natureza **compartilhável** ou **alterável** de uma seleção de entidade é definida quando a seleção de entidade é criada (ela não pode ser modificada posteriormente). Você pode conhecer a seleção de uma entidade usando a função [.isAlterable()](API/EntitySelectionClass.md#isalterable) ou o comando `OB Is shared`.

Uma nova seleção de entidade é **partilhável** nos seguintes casos:

* a nova seleção de entidade resulta de uma função de classe ORDA aplicada a uma dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
* a nova seleção de entidade é baseada em uma relação [entity.*attributeName*](API/EntityClass.md#attributename) (por exemplo, "company.employees") quando *attributeName* é um atributo relacionado um-para-muitos, mas a entidade não pertence a uma seleção de entidade.
* a nova seleção de entidade é explicitamente copiada como compartilhável com [entitySeletion.copy()](API/EntitySelectionClass.md#copy) ou `Copy` (ou seja, com a opção `ck shared`).

Exemplo:

```4d
$myComp:=ds. Company.get(2) //$myComp does not belong to an entity selection
$employees:=$myComp.employees //$employees is shareable
```

Uma nova seleção de entidade é **alterável** nos seguintes casos:

* a nova seleção de entidade criada em branco usando a função [dataClass.newSelection()](API/DataClassClass.md#newselection) ou o comando `Create entity selection`,
* a nova seleção de entidade é explicitamente copiada como alterável com [entitySelection.copy()](API/EntitySelectionClass.md#copy) ou `OB Copy` (ou seja, sem a opção `ck shared`).

Exemplo:

```4d
$toModify:=ds. Company.all().copy() //$toModify é alterável
```

Uma nova seleção de entidade **herda** da natureza da seleção de entidade original nos seguintes casos:

* Usando uma das várias funções da classe [Entity selection](API/EntitySelectionClass.md) que retorna uma nova entidade selecionada, tais como`. .
* a nova entity selection é baseada numa relação:
  * [entity.*attributeName*](API/EntityClass.md#attributename) (por exemplo, "company.employees") quando *attributeName* é um atributo relacionado um-para-muitos e a entidade pertence a uma seleção de entidade (mesma natureza da seleção de entidade [.getSelection()](API/EntityClass.md#getselection)),
  * [entitySeletion.*attributeName*](API/EntitySelectionClass.md#attributename) (por exemplo, "employees.employer") quando *attributeName* é um atributo relacionado (mesma natureza que a seleção da entidade),
  * [.extract()](API/EntitySelectionClass.md#extract) quando a coleção resultante contém seleções de entidade (mesma natureza que a seleção da entidade).

Exemplos:

```4d
Employee.query("salary >= :1"; 1000000)   
 //$highSal é compartilhável por causa da consulta em dataClass
$comp:=$highSal.employer //$compé compartilhável porque $highSal é compartilhável

$lowSal:=ds. Employee.query("salary <= :1"; 10000).copy() 
 //$lowSal é alterável por causa da copy()
$comp2:=$lowSal.employer //$comp2 é alterável porque $lowSal é alterável
`</pre>

<p spaces-before="2">:::note Seleções de entidades devolvidas pelo servidor</p>

<p spaces-before="2">Na arquitetura cliente/servidor, as seleções de entidades retornadas do servidor são sempre compartilháveis no cliente, mesmo que <a href="API/EntitySelectionClass.md#copy"><code>copy()</code></a> tenha sido chamado no servidor.
```

:::note Seleções de entidades devolvidas pelo servidor

Na arquitetura cliente/servidor, as seleções de entidades retornadas do servidor são sempre compartilháveis no cliente, mesmo que [`copy()`](API/EntitySelectionClass.md#copy) tenha sido chamado no servidor. Para tornar essa seleção de entidade alterável no cliente, você precisa executar [`copy()`](API/EntitySelectionClass.md#copy) no lado do cliente. Exemplo:

```4d
    //uma função é sempre executada no servidor
exposed Function getSome() : cs. MembersSelection
    return This.query("ID >= :1"; 15).orderBy("ID ASC")

    //em um método, é executado no lado remoto
var $result : cs. MembersSelection
var $alterable : Boolean
$result:=ds. Members.getSome() //$result é compartilhável
$alterable:=$result.isAlterable() //False

$result:=ds. Members.getSome().copy() // $result agora é alterável
$alterable:=$result.isAlterable() // True
```

:::


#### Partilhar uma seleção de entidade entre processos (exemplo)

Você trabalha com duas seleções de entidades que deseja passar para um processo de trabalho para ele poder enviar correios eletrônicos para as pessoas apropriadas:

```4d

var $paid; $unpaid : cs. InvoicesSelection
//We get entity selections for paid and unpaid invoices
$paid:=ds. Invoices.query("status=:1"; "Paid")
$unpaid:=ds. Invoices.query("status=:1"; "Unpaid")

//We pass entity selection references as parameters to the worker CALL WORKER("mailing"; "sendMails"; $paid; $unpaid)

```

O método `sendMails`:

```4d

 #DECLARE ($paid : cs. InvoicesSelection, $unpaid : cs. InvoicesSelection)
 var $invoice : cs. InvoicesEntity

 var $server; $transporter; $email; $status : Objeto

  //Prepare e-mails
 $server:=New object()
 $server.host:="exchange.company.com"
 $server.user:="myName@company.com"
 $server.password:="my!!password"
 $transporter:=SMTP New transporter($server)
 $email:=New object()
 $email.from:="myName@company.com"

  //Loops em entity selections
 For each($invoice;$paid)
    $email.to:=$invoice.customer.address // endereço de e-mail do cliente
    $email.subject:="Payment OK for invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each

 For each($invoice;$unpaid)
    $email.to:=$invoice.customer.address // endereço de e-mail do cliente
    $email.subject:="Please pay invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each
```

### Selecções de entidades e atributos de armazenamento

Todos os atributos de armazenamento (texto, número, booleano, data) estão disponíveis como propriedades de seleções de entidades, bem como de entidades. Quando usado em conjunto com uma seleção de entidade, um atributo escalar retorna uma coleção de valores escalares. Por exemplo:

```4d
 $locals:=ds. Person.query("city = :1";"San Jose") //entity selection of people
 $localEmails:=$locals.emailAddress //collection of email addresses (strings)
```

Esse código retorna em *$localEmails* uma coleção de endereços de correio eletrônico como cadeias de caracteres.

### Selecções de entidades e atributos de relações

Além da variedade de maneiras que você pode consultar, você também pode usar atributos de relação como propriedades das seleções das entidades para retornar as novas seleções da entidade. Por exemplo, considere a seguinte estrutura:

![](../assets/en/ORDA/entitySelectionRelationAttributes.png)

```4d
 $myParts:=ds. Part.query("ID < 100") //Return parts with ID less than 100
 $myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
```

A última linha retornará em $myInvoices uma seleção de entidade de todas as faturas que tenham pelo menos um item de fatura relacionado a uma peça na seleção de entidade myParts. Quando se utiliza um atributo de relação como propriedade de uma seleção de entidades, o resultado é sempre outra seleção de entidades, mesmo que só se devolva uma entidade. Quando se utiliza um atributo de relação como propriedade de uma seleção de entidades, o resultado é sempre outra seleção de entidades, mesmo que só se devolva uma entidade.

## Bloqueio de entidades

Você frequentemente precisa gerenciar possíveis conflitos que podem surgir quando vários usuários ou processos carregam e tentam modificar as mesmas entidades em simultâneo. Bloqueio de registros é uma metodologia usada em bancos de dados relacionais, para evitar atualizações inconsistentes de dados. O conceito é bloquear um registro após a leitura para que nenhum outro processo possa atualizá-lo, ou alternativamente. para verificar ao salvar um registro para verificar se algum outro processo não modificou desde que foi lido. O primeiro é chamado **bloqueio de registro pessimista** e garante que um registro modificado possa ser gravado à custa do bloqueio de registros para outros usuários. Esse último é chamado **bloqueio otimista de registro** e troca a garantia de privilégios de gravação no registro pela flexibilidade de decidir privilégios de gravação somente se o registro precisar ser atualizado. No bloqueio do recorde pessimista, o registro está bloqueado, mesmo que não haja necessidade de o atualizar. Em bloqueio de registro otimista, a validade da modificação de um registro é decidida no momento de atualização.

ORDA fornece-lhe dois modos de bloqueio de entidades:

* um modo automático "otimista", adequado à maioria das aplicações,
* um modo "pessimista" que permite bloquear as entidades antes do seu acesso.

### Bloqueio optimista automático

Esse mecanismo automático baseia-se no conceito de "bloqueio otimista", sendo particularmente adequado aos problemas das aplicações Web. Este conceito é caracterizado pelos seguintes princípios de funcionamento:

* Todas as entidades sempre podem ser carregadas para leitura e gravação; não há "bloqueio" *_a priori_* das entidades.
* Cada entidade tem um carimbo de bloqueio interno incrementado sempre que é guardado.
* Quando um usuário ou processo tenta salvar uma entidade usando o método `entity.save( )`, 4D compara o valor do carimbo da entidade a ser salva com o da entidade encontrada nos dados (no caso de uma modificação):
  * Quando os valores correspondem, a entidade é salva e o valor do marcador interno é aumentado.
  * Quando os valores não correspondem, significa que outro usuário modificou esta entidade nesse meio tempo. A gravação não é efetuada e é devolvido um erro.

O diagrama seguinte ilustra o bloqueio otimista:

1. Dois processos carregam a mesma entidade.<br/><br/>![](../assets/en/ORDA/optimisticLock1.png)

2. O primeiro processo modifica a entidade e valida a alteração. É chamado o método `entity.save( )`. O mecanismo 4D compara automaticamente o valor do carimbo interno da entidade modificada com o da entidade armazenada nos dados. Se coincidirem, a entidade é guardada e o seu valor de carimbo é incrementado.<br/><br/>![](../assets/en/ORDA/optimisticLock2.png)

3. O segundo processo também modifica a entidade carregada e valida as suas alterações. É chamado o método `entity.save( )`. Uma vez que o valor do carimbo da entidade modificada não corresponde ao da entidade armazenada nos dados, a gravação não é efetuada e é devolvido um erro.<br/><br/>![](../assets/en/ORDA/optimisticLock3.png)

Isto também pode ser ilustrado pelo seguinte código:

```4d
 $person1:=ds. Person.get(1) //Reference to entity
 $person2:=ds. Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
```

Neste exemplo, atribuímos a $person1 uma referência à entidade pessoa com uma chave de 1. De seguida, atribuímos outra referência da mesma entidade à variável $person2. Utilizando $person1, alteramos o primeiro nome da pessoa e guardamos a entidade. Quando tentamos fazer a mesma coisa com $person2, 4D verifica se a entidade no disco é a mesma de quando a referência em $person1 foi atribuída pela primeira vez. Como não é a mesma coisa, ele retorna false na propriedade success e não salva a segunda modificação.

Quando essa situação ocorre, você pode, por exemplo, recarregar a entidade do disco usando o método `entity.reload()` para poder tentar fazer a modificação novamente. O método `entity.save()` também propõe uma opção "automerge" para salvar a entidade caso os processos modifiquem atributos que não sejam os mesmos.

> Os carimbos de registro não são usados em **transações** porque, nesse contexto, existe apenas uma única cópia de um registro. Seja qual for o número de entidades que referenciam um registro, a mesma cópia é modificada, portanto, as operações `entity.save()` nunca gerarão erros de carimbo.

### Bloqueio pessimista

É possível bloquear e desbloquear entidades a pedido quando se acede aos dados. Quando uma entidade está sendo bloqueada por um processo, ela é carregada em leitura/gravação nesse processo, mas é bloqueada para todos os outros processos. A entidade só pode ser carregada no modo somente leitura nesses processos; seus valores não podem ser editados ou salvos.

Esse recurso é baseado em dois métodos da classe `Entity`:

* `entity.lock()`
* `entity.unlock()`

Para mais informações, consulte as descrições destas funções.

> Os bloqueios pessimistas também podem ser tratados através da API [REST](../REST/$lock.md).

### Utilização simultânea de bloqueios clássicos 4D e bloqueios pessimistas ORDA

Usando comandos clássicos e da ORDA para bloquear os registros é baseado nos seguintes princípios:

* Um bloqueio definido com um comando clássico 4D em um registro impede a ORDA de bloquear a entidade correspondente ao registro.
* Um bloqueio com ORDA em uma entidade impede comandos 4D clássicos para bloquear o registro correspondente à entidade.

Estes princípios são apresentados no diagrama seguinte:

![](../assets/en/ORDA/concurrent1.png)

Os **bloqueios de transação** também se aplicam aos comandos clássicos e ORDA. Em um processo multiusuário ou um aplicativo multiusuário, um bloqueio definido dentro de uma transação em um registro por um comando clássico resultará na prevenção de quaisquer outros processos para bloquear entidades relacionadas a este registro (ou inversamente), até que a transação seja validada ou cancelada.

* Exemplo com um bloqueio definido por um comando clássico:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
* Exemplo com um bloqueio definido por um método ORDA:<br/><br/>![](../assets/en/ORDA/concurrent3.png)

## Otimização cliente/servidor

4D fornece uma otimização automática para solicitações da ORDA que usam seleções de entidade ou carregam entidades em configurações de cliente/servidor. Esta otimização acelera a execução de sua aplicação 4D, reduzindo drasticamente o volume de informações transmitidas pela rede.

São implementados os seguintes mecanismos de otimização:

* Quando um cliente solicita uma seleção de entidade do servidor, 4D "aprende" automaticamente quais atributos da seleção de entidade são realmente usados no lado do cliente durante a execução do código e constrói um "contexto de otimização" correspondente. Esse contexto é anexado à seleção da entidade e armazena os atributos usados. Será atualizado dinamicamente se outros atributos forem usados depois.

* As solicitações subsequentes enviadas ao servidor sobre a mesma seleção de entidade reutilizam automaticamente o contexto de otimização e obtêm apenas os atributos necessários do servidor, o que acelera o processamento. Por exemplo, em um list box baseado em uma seleção de entidades a fase de aprendizagem ocorre durante a exibição das primeiras linhas, a exibição de linhas seguintes é muito otimizada.

* Um contexto de otimização existente pode ser passado como uma propriedade para outra seleção de entidade da mesma classe de dados, ignorando assim a fase de aprendizado e acelerando o aplicativo (consulte [Usando a propriedade de contexto](#using-the-context-property) abaixo).

Os seguintes métodos associam automaticamente o contexto de otimização da seleção da entidade de origem à seleção da entidade retornada:

* `entitySelection.and()`
* `entitySelection.minus()`
* `entitySelection.or()`
* `entitySelection.orderBy()`
* `entitySelection.slice()`
* `entitySelection.drop()`

**Exemplo**

Dado o seguinte código:

```4d
 $sel:=$ds. Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Graças à otimização, esta solicitação obterá apenas dados de atributos usados (firstname, lastname, employer, employer.name) em *$sel* após uma fase de aprendizagem.

### Utilizar a propriedade context

Você pode aumentar os benefícios da otimização usando a propriedade **context** . Essa propriedade faz referência a um contexto de otimização "aprendido" para uma seleção de entidade. Pode ser passado como parâmetro para os métodos ORDA que devolvem novas selecções de entidades, de modo a que as selecções de entidades solicitem diretamente ao servidor os atributos utilizados e contornem a fase de aprendizagem.

Uma mesma propriedade no contexto de otimização pode ser passada para um número ilimitado de seleções de entidade nos mesmos dataclass. Todos os métodos ORDA que manipulam seleções de entidades suportam a propriedade **context** (por exemplo, os métodos, `dataClass.query( )` ou `dataClass.all( )`). No entanto, lembre-se de que um contexto é atualizado automaticamente quando novos atributos são usados em outras partes do código. A reutilização do mesmo contexto em códigos diferentes pode resultar em sobrecarga do contexto e, portanto, reduzir sua eficiência.
> Um mecanismo semelhante é implementado para as entidades carregadas, de modo que apenas atributos usados são requisitados (veja o método `dataClass.get( )`).

**Exemplo com o método `dataClass.query( )`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Objeto
 var $data : Coleção
 $querysettings:=Novo objeto("contexto"; shortList")
 $querysettings2:=Novo objeto("contexto";"longList")

 $sel1:=ds. Colaborador. uery("Sobrenome = S@";$querysettings)
 $data:=extractData($sel1) // No método extractData uma otimização é acionada 
e associada ao contexto "shortList"

 $sel2:=ds. Colaborador. uery("Sobrenome = Sm@";$querysettings)
 $data:=extractData($sel2) // No método extractData a otimização associada ao contexto "shortList" é aplicada

 $sel3:=ds. Colaborador. uery("Sobrenome = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // No método extractDetailedData uma otimização 
 é acionada e associada ao contexto "longList"

 $sel4:=ds. Colaborador. uery("Sobrenome = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // No método extractDetailedData a otimização 
 associada ao contexto "longList" é aplicada
```

### List box baseado em uma seleção de entidades

A otimização da seleção de entidades é aplicada automaticamente a caixas de listagem baseadas em seleção de entidades em configurações de cliente/servidor, ao exibir e rolar o conteúdo de uma caixa de listagem: somente os atributos exibidos na caixa de listagem são solicitados ao servidor.

Um contexto "modo de página" específico também é fornecido ao carregar a entidade atual através do item **Atual** expressão de propriedade da caixa de lista (consulte [coleção ou caixas de lista de tipos de seleção de entidade](FormObjects/listbox_overview.md#list-box-types)). Esse recurso permite que você não sobrecarregue o contexto inicial da caixa de lista neste caso, especialmente se a "página" solicitar atributos adicionais. Observe que somente o uso da expressão **Current item** criará/usará o contexto da página (o acesso por meio de `entitySelection\[index]` alterará o contexto de seleção da entidade).

As solicitações subsequentes ao servidor enviadas pelos métodos de navegação da entidade também darão suporte a essa otimização. Os seguintes métodos associam automaticamente o contexto de otimização da entidade de origem à entidade retornada:

* `entity.next( )`
* `entity.first( )`
* `entity.last( )`
* `entity.previous( )`

Por exemplo, o código a seguir carrega a entidade selecionada e permite a navegação na seleção da entidade. As entidades são carregadas em um contexto separado e o contexto inicial da caixa de listagem não é alterado:

```4d
 $myEntity:=Form.currentElement //expressão do item atual
  //... fazer algo
 $myEntity:=$myEntity.next() //carrega a próxima entidade usando o mesmo contexto
```
