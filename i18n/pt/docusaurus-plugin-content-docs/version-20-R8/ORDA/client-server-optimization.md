---
id: client-server-optimization
title: Otimização cliente/servidor
---

4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. Essas otimizações aceleram a execução de seu aplicativo 4D ao reduzir drasticamente o volume de informações transmitidas pela rede. Estes incluem:

- o **contexto de otimização**
- o **Cache ORDA**

## Arquiteturas suportadas

ORDA client/server architectures that support the optimization are:

- Server datastores accessed by 4D remote desktop applications through [**`ds`**](../commands/ds.md),
- [Remote datastores](remoteDatastores.md), accessed via [**`Open datastore`**](../commands/open-datastore.md) (client REST requests).

## Contexto de otimização

O contexto de otimização é baseado nas seguintes implementações:

- Quando um cliente solicita uma seleção de entidade do servidor, 4D "aprende" automaticamente quais atributos da seleção de entidade são realmente usados no lado do cliente durante a execução do código e constrói um "contexto de otimização" correspondente. Esse contexto é anexado à seleção da entidade e armazena os atributos usados. Será atualizado dinamicamente se outros atributos forem usados depois. Os seguintes métodos e funções accionam a fase de aprendizagem:
  - [`Create entity selection`](../commands/create-entity-selection.md)
  - [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  - [`dataClass.all()`](../API/DataClassClass.md#all)
  - [`dataClass.get()`](../API/DataClassClass.md#get)
  - [`dataClass.query()`](../API/DataClassClass.md#query)
  - [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

- As solicitações subsequentes enviadas ao servidor sobre a mesma seleção de entidade reutilizam automaticamente o contexto de otimização e obtêm apenas os atributos necessários do servidor, o que acelera o processamento. For example, in an [entity selection-based list box](#entity-selection-based-list-box), the learning phase takes place during the display of the first row. a visualização das linhas seguintes é optimizada. As funções a seguir associam automaticamente o contexto de otimização da seleção da entidade de origem à seleção da entidade retornada:
  - [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
  - [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
  - [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
  - [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
  - [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
  - [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

- An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Reusing the context property](#reusing-the-context-property) below).

- You can build optimization contexts manually using the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function (see [Preconfiguring contexts](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::note Nota de compatibilidade

Contexts handled in connections established through [`Open datastore`](../commands/open-datastore.md) can only be used between similar main versions of 4D. For example, a 4D 20.x remote application can only use contexts of a 4D Server 20.x datastore.

:::

### Exemplo

Dado o seguinte código:

```4d
 $sel:=$ds. Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in _$sel_ from the second iteration of the loop.

### Reutilizando a propriedade `context`

Você pode aumentar os benefícios da otimização usando a propriedade **context**. Essa propriedade faz referência a um contexto de otimização "aprendido" para uma seleção de entidade. Ele pode ser passado como parâmetro para funções ORDA que retornam novas seleções de entidades, de modo que as seleções de entidades solicitem diretamente os atributos usados ao servidor e ignorem a fase de aprendizado.

> You can also create contexts using the [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function.

A mesma propriedade de contexto de otimização pode ser passada para um número ilimitado de seleções de entidades na mesma classe de dados. All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). No entanto, lembre-se de que um contexto é atualizado automaticamente quando novos atributos são usados em outras partes do código. A reutilização do mesmo contexto em códigos diferentes pode resultar em sobrecarga do contexto e, portanto, reduzir sua eficiência.

> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the [`dataClass.get()`](../API/DataClassClass.md#get) function).

**Exemplo com `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered   
 // and associated to context "shortList"

 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated   
 // to context "shortList" is applied

 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  
 // is triggered and associated to context "longList"

 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  
 // associated to context "longList" is applied
```

### List box baseado em uma seleção de entidades

Entity selection optimization is automatically applied to entity selection-based list boxes in 4D client/server desktop applications, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). Esse recurso permite que você não sobrecarregue o contexto inicial da caixa de lista neste caso, especialmente se a "página" solicitar atributos adicionais. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

As solicitações subsequentes ao servidor enviadas pelas funções de navegação da entidade também darão suporte a essa otimização. As funções a seguir associam automaticamente o contexto de otimização da entidade de origem à entidade retornada:

- [`entity.next()`](../API/EntityClass.md#next)
- [`entity.first()`](../API/EntityClass.md#first)
- [`entity.last()`](../API/EntityClass.md#last)
- [`entity.previous()`](../API/EntityClass.md#previous)

Por exemplo, o código a seguir carrega a entidade selecionada e permite a navegação na seleção da entidade. As entidades são carregadas em um contexto separado e o contexto inicial da caixa de listagem não é alterado:

```4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```

### Pré-configuração de contextos

Um contexto de otimização deve ser definido para cada recurso ou algoritmo do seu aplicativo, a fim de obter os melhores desempenhos. Por exemplo, um contexto pode ser usado para consultas sobre clientes, outro contexto para consultas sobre produtos, etc.

Se quiser fornecer aplicativos finais com o mais alto nível de otimização, você pode pré-configurar seus contextos e, assim, economizar fases de aprendizado, seguindo estas etapas:

1. Projete seus algoritmos.
2. Execute seu aplicativo e deixe que o mecanismo de aprendizado automático preencha os contextos de otimização.
3. Call the [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) or [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) function to collect  contexts. You can use the [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) and [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) functions to analyse how your algorithms use attributes.
4. In the final step, call the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function to build contexts at application startup and [use them](#reusing-the-context-property) in your algorithms.

## Cache ORDA

Por motivos de otimização, os dados solicitados do servidor por meio do ORDA são carregados no cache remoto do ORDA (que é diferente do cache 4D). O cache do ORDA é organizado por classe de dados e expira após 30 segundos.

Os dados contidos no cache são considerados expirados quando o tempo limite é atingido. Qualquer acesso a dados expirados enviará um pedido ao servidor. Os dados expirados permanecem na cache até que seja necessário espaço.

You can force entity selection data in the ORDA cache to expire at any moment by using the [`refresh()`](../API/EntitySelectionClass.md#refresh) function.

Por padrão, o cache ORDA é tratado de forma transparente pelo 4D. No entanto, você pode controlar seu conteúdo usando as seguintes funções da classe ORDA:

- [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
- [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
- [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)
