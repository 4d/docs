---
id: datastores
title: Utilizar um datastore remoto
---

Um [datastore](dsMapping.md#datastore) exposto em uma aplicação 4D pode ser acessado simultaneamente através de diferentes clientes:

- As aplicações 4D remotas usando ORDA para acessar o datastore principal com o comando `ds`. Note que a aplicação 4D remota ainda pode acessar o banco de dados no modo clássico. Esses acessos são tratados pelo **servidor de aplicações 4D**.
- Outras aplicações 4D (4D remote, 4D Server) abrindo uma sessão no banco de dados remoto através do comando [`Open datastore`](../API/DataStoreClass.md#open-datastore). Esses acessos são transmitidos pelo servidor **HTTP REST**.
- 4D for iOS queries for updating iOS applications. Esses acessos são transmitidos pelo **servidor HTTP**.



## Abertura de sessões

Quando você trabalha com um datastore remoto referenciado por chamadas para o comando `Open datastore`, a conexão entre os processos solicitantes e o datastore remoto é tratada por sessões.

Uma sessão criada no datastore remoto para lidar com a conexão. Esta sessão é identificada usando um ID de sessão interno associado ao `localID` no lado da aplicação 4D. Essa sessão gerencia automaticamente o acesso a dados, seleções de entidades ou entidades.

O `localID` é local para a máquina que conecta ao datastore remoto, o que significa:

*   Se outros processos da mesma aplicação precisam acessar o mesmo datastore remoto, eles podem usar o mesmo `localID` e, assim, compartilhar a mesma sessão.
*   Se outro processo da mesma aplicação abrir o mesmo datastore remoto, mas com outro `localID`, ele criará uma sessão no datastore remoto.
*   Se outra máquina se conectar ao mesmo datastore remoto com o mesmo `localID`, ela criará outra sessão com outro cookie.

Estes princípios são ilustrados nos gráficos seguintes:

![](../assets/en/ORDA/sessions.png)

> Para sessões abertas por solicitações REST, consulte [Usuários e sessões](REST/authUsers.md).

### Visionamento de sessões

Os processos que gerenciam sessões para acesso ao armazenamento de dados são mostrados na janela de administração do 4D Server:

*   nome: "REST Handler: \<process name\>"
*   type: type Worker Server HTTP
*   session: session name is the user name passed to the Open datastore command.

No exemplo a seguir, dois processos estão sendo executados na mesma sessão:

![](../assets/en/ORDA/sessionAdmin.png)

### Bloqueio e transacções

Os recursos do ORDA relacionados ao bloqueio de entidades e à transação são gerenciados no nível do processo em repositórios de dados remotos, assim como no modo cliente/servidor do ORDA:

*   Se um processo bloqueia uma entidade de um repositório de dados remoto, a entidade é bloqueada para todos os outros processos, mesmo quando esses processos compartilham a mesma sessão (consulte [Bloqueio de entidades](entities.md#entity-locking)). Se várias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas deverão ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio será removido quando não houver mais referência a essa entidade na memória.
*   As transações podem ser iniciadas, validadas ou canceladas separadamente em cada datastore remoto usando as funções `dataStore.startTransaction()`, `dataStore.cancelTransaction()`e `dataStore.validateTransaction()` . Não têm impacto noutros datastores.
*   Os comandos clássicos da linguagem 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) só se aplicam ao datastore principal (retornado por `ds`). Se uma entidade de um datastore remoto é segurada por uma transação em um processo, outros processos não podem atualizá-lo, mesmo que esses processos compartilhem a mesma sessão.
*   Os bloqueios nas entidades são removidos e as transações são anuladas:
    *   quando o processo é eliminado.
    *   quando a sessão é encerrada no servidor
    *   quando a sessão é encerrada na janela de administração do servidor.

### Fechamento das sessões

Uma sessão é automaticamente encerrada por 4D quando não há atividade durante seu período de tempo limite. O tempo limite padrão é de 60 minutos, mas esse valor pode ser modificado usando o parâmetro *connectionInfo* do comando `Open datastore` .

Se uma solicitação for enviada ao repositório de dados remoto depois que a sessão tiver sido fechada, ela será recriada automaticamente, se possível (licença disponível, servidor não parado...). No entanto, lembre-se de que o contexto da sessão em relação a bloqueios e transações é perdido (veja acima).

## Otimização cliente/servidor

4D oferece otimizações para solicitações ORDA que usam seleções de entidades ou carregam entidades em configurações de cliente/servidor (datastore acessado remotamente por meio de `ds` ou via `Open datastore`). Essas otimizações aceleram a execução de seu aplicativo 4D ao reduzir drasticamente o volume de informações transmitidas pela rede. Estes incluem:
* o **contexto de otimização**
* a **cache ORDA**

### Contexto

O contexto de otimização é baseado nas seguintes implementações:

* Quando um cliente solicita uma seleção de entidade do servidor, 4D "aprende" automaticamente quais atributos da seleção de entidade são realmente usados no lado do cliente durante a execução do código e constrói um "contexto de otimização" correspondente. Esse contexto é anexado à seleção da entidade e armazena os atributos usados. Será atualizado dinamicamente se outros atributos forem usados depois. Os seguintes métodos e funções accionam a fase de aprendizagem:
  * [`Criar uma seleção de entidades (entity selection)`](../API/EntitySelectionClass.md#create-entity-selection)
  * [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  * [`dataClass.all()`](../API/DataClassClass.md#all)
  * [`dataClass.get()`](../API/DataClassClass.md#get)
  * [`dataClass.query()`](../API/DataClassClass.md#query)
  * [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

* As solicitações subsequentes enviadas ao servidor sobre a mesma seleção de entidade reutilizam automaticamente o contexto de otimização e obtêm apenas os atributos necessários do servidor, o que acelera o processamento. Por exemplo, em uma caixa de listagem baseada em seleção de entidade [](#entity-selection-based-list-box), a fase de aprendizado ocorre durante a exibição da primeira linha. a visualização das linhas seguintes é optimizada. As funções a seguir associam automaticamente o contexto de otimização da seleção da entidade de origem à seleção da entidade retornada:
    *   [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
    *   [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
    *   [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
    *   [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby)
    *   [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
    *   [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

* Um contexto de otimização existente pode ser passado como uma propriedade para outra seleção de entidade da mesma classe de dados, ignorando assim a fase de aprendizado e acelerando o aplicativo (consulte [Usando a propriedade de contexto](#reusing-the-context-property) abaixo).

* Você pode criar contextos de otimização manualmente usando a função [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) (consulte [Preconfiguring contexts](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::warning Nota de compatibilidade

Os contextos tratados em conexões estabelecidas por meio do [`Open datastore`](../API/DataStoreClass.md#open-datastore) só podem ser usados entre versões principais semelhantes de 4D. Por exemplo, um aplicativo remoto 4D v20.x só pode usar contextos de um datastore 4D Server v20.x.

:::


#### Exemplo

Dado o seguinte código:

```4d
 $sel:=$ds. Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Graças à otimização, essa solicitação só obterá dados dos atributos usados (firstname, lastname, employer, employer.name) em *$sel* a partir da segunda iteração do loop.

#### Reutilizar a propriedade context

Você pode aumentar os benefícios da otimização usando a propriedade **context** . Essa propriedade faz referência a um contexto de otimização "aprendido" para uma seleção de entidade. Ele pode ser passado como parâmetro para funções ORDA que retornam novas seleções de entidades, de modo que as seleções de entidades solicitem diretamente os atributos usados ao servidor e ignorem a fase de aprendizado.
> Você também pode criar contextos usando a função [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo).

A mesma propriedade de contexto de otimização pode ser passada para um número ilimitado de seleções de entidades na mesma classe de dados. Todas as funções ORDA que lidam com seleções de entidades suportam a propriedade **context** (por exemplo, [`dataClass.query()`](../API/DataClassClass.md#query) ou [`dataClass.all()`](../API/DataClassClass.md#all)). No entanto, lembre-se de que um contexto é atualizado automaticamente quando novos atributos são usados em outras partes do código. A reutilização do mesmo contexto em códigos diferentes pode resultar em sobrecarga do contexto e, portanto, reduzir sua eficiência.
> Um mecanismo semelhante é implementado para entidades que são carregadas, de modo que somente os atributos usados são solicitados (consulte a função [`dataClass.get()`](../API/DataClassClass.md#get)).

**Exemplo com `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds. Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered   
 // and associated to context "shortList"

 $sel2:=ds. Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated   
 // to context "shortList" is applied

 $sel3:=ds. Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  
 // is triggered and associated to context "longList"

 $sel4:=ds. Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  
 // associated to context "longList" is applied
```

#### List box baseado em uma seleção de entidades

A otimização da seleção de entidades é aplicada automaticamente a caixas de listagem baseadas em seleção de entidades em configurações de cliente/servidor, ao exibir e rolar o conteúdo de uma caixa de listagem: somente os atributos exibidos na caixa de listagem são solicitados ao servidor.

Um contexto "modo de página" específico também é fornecido ao carregar a entidade atual através do item **Atual** expressão de propriedade da caixa de lista (consulte [coleção ou caixas de lista de tipos de seleção de entidade](FormObjects/listbox_overview.md#list-box-types)). Esse recurso permite que você não sobrecarregue o contexto inicial da caixa de lista neste caso, especialmente se a "página" solicitar atributos adicionais. Observe que somente o uso da expressão **Current item** criará/usará o contexto da página (o acesso por meio de `entitySelection\[index]` alterará o contexto de seleção da entidade).

As solicitações subsequentes ao servidor enviadas pelas funções de navegação da entidade também darão suporte a essa otimização. As funções a seguir associam automaticamente o contexto de otimização da entidade de origem à entidade retornada:

*   [`entity.next()`](../API/EntityClass.md#next)
*   [`entity.first()`](../API/EntityClass.md#first)
*   [`entity.last()`](../API/EntityClass.md#last)
*   [`entity.previous()`](../API/EntityClass.md#previous)

Por exemplo, o código a seguir carrega a entidade selecionada e permite a navegação na seleção da entidade. As entidades são carregadas em um contexto separado e o contexto inicial da caixa de listagem não é alterado:

```4d
 $myEntity:=Form.currentElement //expressão do item atual
  //... fazer algo
 $myEntity:=$myEntity.next() //carrega a próxima entidade usando o mesmo contexto
```

#### Pré-configuração de contextos

Um contexto de otimização deve ser definido para cada recurso ou algoritmo do seu aplicativo, a fim de obter os melhores desempenhos. Por exemplo, um contexto pode ser usado para consultas sobre clientes, outro contexto para consultas sobre produtos, etc.

Se quiser fornecer aplicativos finais com o mais alto nível de otimização, você pode pré-configurar seus contextos e, assim, economizar fases de aprendizado, seguindo estas etapas:

1. Projete seus algoritmos.
2. Execute seu aplicativo e deixe que o mecanismo de aprendizado automático preencha os contextos de otimização.
3. Chame a função [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) ou [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) para coletar contextos. Você pode usar as funções [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) e [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) para analisar como seus algoritmos usam atributos.
4. Na etapa final, chame [`dataStore. etRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) função para criar contextos na inicialização do aplicativo e [usá-los](#reusing-the-context-property) em seus algoritmos.


### Cache ORDA

Por motivos de otimização, os dados solicitados do servidor por meio do ORDA são carregados no cache remoto do ORDA (que é diferente do cache 4D). O cache do ORDA é organizado por classe de dados e expira após 30 segundos.

Os dados contidos no cache são considerados expirados quando o tempo limite é atingido. Qualquer acesso a dados expirados enviará um pedido ao servidor. Os dados expirados permanecem na cache até que seja necessário espaço.

Por padrão, o cache ORDA é tratado de forma transparente pelo 4D. No entanto, você pode controlar seu conteúdo usando as seguintes funções da classe ORDA:

* [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
* [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
* [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)