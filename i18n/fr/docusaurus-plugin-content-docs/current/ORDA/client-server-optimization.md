---
id: client-server-optimization
title: Client/Server Optimization
---

4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. Ces optimisations accélèrent l'exécution de votre application 4D en réduisant drastiquement le volume d'informations transmises sur le réseau. Elles incluent :

- the **optimization context**
- the **ORDA cache**

## Supported architectures

ORDA client/server architectures that support the optimization are:

- Server datastores accessed by 4D remote desktop applications through [**`ds`**](../API/DataStoreClass.md#ds),
- [Remote datastores](remoteDatastores.md), accessed via [**`Open datastore`**](../API/DataStoreClass.md#open-datastore) (client REST requests).

## Optimization context

Le contexte d'optimisation est fondé sur ce qui suit :

- Lorsqu'un client demande une sélection d'entité au serveur, 4D "apprend" automatiquement attributs de la sélection d'entité sont réellement utilisés côté client lors de l'exécution du code, et génère un "contexte d'optimisation" correspondant. Ce contexte est relié à la sélection d'entité et stocke les attributs utilisés. Il sera mis à jour dynamiquement si d'autres attributs sont utilisés par la suite. Les méthodes et fonctions suivantes déclenchent la phase d'apprentissage :
  - [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection)
  - [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  - [`dataClass.all()`](../API/DataClassClass.md#all)
  - [`dataClass.get()`](../API/DataClassClass.md#get)
  - [`dataClass.query()`](../API/DataClassClass.md#query)
  - [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

- Les requêtes ultérieures envoyées au serveur sur la même sélection d'entité réutilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs nécessaires depuis le serveur, ce qui accélère le traitement. For example, in an [entity selection-based list box](#entity-selection-based-list-box), the learning phase takes place during the display of the first row. L'affichage des lignes suivantes est optimisé. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine à l'entity selection retournée :
  - [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
  - [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
  - [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
  - [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
  - [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
  - [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

- An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#reusing-the-context-property) below).

- You can build optimization contexts manually using the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function (see [Preconfiguring contexts](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::note Compatibility Note

Contexts handled in connections established through [`Open datastore`](../API/DataStoreClass.md#open-datastore) can only be used between similar main versions of 4D. For example, a 4D 20.x remote application can only use contexts of a 4D Server 20.x datastore.

:::

### Exemple

Considérons le code suivant :

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie à la table Company 
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in _$sel_ from the second iteration of the loop.

### Reusing the `context` property

You can increase the benefits of the optimization by using the **context** property. Cette propriété référence un contexte d'optimisation "appris" pour une sélection d'entités. Elle peut être passée comme paramètre aux fonctions ORDA qui retournent de nouvelles sélections d'entités, afin que les sélections d'entités demandent directement au serveur les attributs utilisés, sans passer par la phase d'apprentissage.

> You can also create contexts using the [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function.

All ORDA functions that handle entity selections support the <strong x-id="1">context</strong> property (for example <a href="../API/DataClassClass.md#query"><code>dataClass.query()</code></a> or <a href="../API/DataClassClass.md#all"><code>dataClass.all()</code></a>). All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). Il est toutefois important de garder à l'esprit qu'un contexte est automatiquement mis à jour lorsque de nouveaux attributs sont utilisés dans d'autres parties du code. Si le même contexte est réutilisé dans différents codes, il risque d'être surchargé et de perdre en efficacité.

> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the [`dataClass.get()`](../API/DataClassClass.md#get) function).

**Example with `dataClass.query()`:**

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

### List box de type entity selection

Entity selection optimization is automatically applied to entity selection-based list boxes in 4D client/server desktop applications, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). Cette fonctionnalité vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas précis, notamment si la "page" requiert des attributs supplémentaires. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Les requêtes ultérieures adressées au serveur par les fonctions de navigation parmi les entités prendront également en charge cette optimisation. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entité source à l'entité retournée :

- [`entity.next()`](../API/EntityClass.md#next)
- [`entity.first()`](../API/EntityClass.md#first)
- [`entity.last()`](../API/EntityClass.md#last)
- [`entity.previous()`](../API/EntityClass.md#previous)

Par exemple, le code suivant charge l'entité sélectionnée et permet de naviguer dans l'entity selection. Les entités sont chargées dans un contexte séparé et le contexte initial de la listbox demeure inchangé :

```4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```

### Préconfiguration des contextes

Un contexte d'optimisation doit être défini pour chaque fonctionnalité ou algorithme de votre application, afin d'obtenir les meilleures performances. Par exemple, un contexte peut être utilisé pour les requêtes sur les clients, un autre contexte pour les requêtes sur les produits, etc.

Si vous souhaitez livrer des applications finales avec le plus haut niveau d'optimisation, vous pouvez préconfigurer vos contextes et ainsi économiser des phases d'apprentissage en suivant ces étapes :

1. Concevez vos algorithmes.
2. Exécutez votre application et laissez le mécanisme d'apprentissage automatique remplir les contextes d'optimisation.
3. Call the [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) or [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) function to collect  contexts. You can use the [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) and [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) functions to analyse how your algorithms use attributes.
4. In the final step, call the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function to build contexts at application startup and [use them](#reusing-the-context-property) in your algorithms.

## Cache ORDA

Pour des raisons d'optimisation, les données demandées au serveur via ORDA sont chargées dans le cache distant ORDA (qui est différent du cache 4D). Le cache ORDA est organisé par dataclass et expire au bout de 30 secondes.

Les données contenues dans le cache sont considérées comme expirées lorsque le délai d'attente est atteint. Tout accès à des données périmées provoquera l'envoi d'une requête au serveur. Les données périmées restent dans le cache jusqu'à ce que l'on ait besoin d'espace.

Par défaut, le cache ORDA est géré de manière transparente par 4D. Cependant, vous pouvez contrôler son contenu en utilisant les fonctions ORDA suivantes :

- [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
- [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
- [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)
