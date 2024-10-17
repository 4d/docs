---
id: client-server-optimization
title: Optimisation client/serveur
---

4D optimise automatiquement les requêtes ORDA qui utilisent des entity selections ou chargent des entités dans l'architecture client/serveur. Ces optimisations accélèrent l'exécution de votre application 4D en réduisant drastiquement le volume d'informations transmises sur le réseau. Elles incluent :

- le **contexte d'optimisation**
- le **Cache ORDA**

## Architectures prises en charge

Les architectures client/serveur de l'ORDA qui prennent en charge l'optimisation sont :

- Server datastores accessed by 4D remote desktop applications through [**`ds`**](../commands/ds.md),
- [Remote datastores](remoteDatastores.md), accessed via [**`Open datastore`**](../commands/open-datastore.md) (client REST requests).

## Contexte d'optimisation

Le contexte d'optimisation est fondé sur ce qui suit :

- Lorsqu'un client requête une entity selection au serveur, 4D "apprend" automatiquement quels attributs de l'entity selection sont réellement utilisés côté client lors de l'exécution du code, et génère un "contexte d'optimisation" correspondant. Ce contexte est lié à l'entity selection et stocke les attributs utilisés. Il sera mis à jour dynamiquement si d'autres attributs sont utilisés par la suite. Les commandes et fonctions suivantes déclenchent la phase d'apprentissage :
  - [`Create entity selection`](../commands/create-entity-selection.md)
  - [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  - [`dataClass.all()`](../API/DataClassClass.md#all)
  - [`dataClass.get()`](../API/DataClassClass.md#get)
  - [`dataClass.query()`](../API/DataClassClass.md#query)
  - [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

- Les requêtes ultérieures envoyées au serveur sur la même entity selection réutilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs nécessaires depuis le serveur, ce qui accélère le traitement. Par exemple, dans une [list box de type entity selection](#entity-selection-based-list-box), la phase d'apprentissage a lieu pendant l'affichage de la première ligne. L'affichage des lignes suivantes est optimisé. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine à l'entity selection retournée :
  - [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
  - [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
  - [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
  - [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
  - [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
  - [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

- An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Reusing the context property](#reusing-the-context-property) below).

- Vous pouvez créer des contextes d'optimisation manuellement à l'aide de la fonction [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) (voir [Préconfiguration des contextes](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::note Note de compatibilité

Contexts handled in connections established through [`Open datastore`](../commands/open-datastore.md) can only be used between similar main versions of 4D. Par exemple, une application distante 4D 20.x ne peut utiliser que les contextes d'un datastore 4D Server 20.x.

:::

### Exemple

Considérons le code suivant :

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie à la table Company 
 End for each
```

Grâce à l'optimisation, cette requête récupérera uniquement les données des attributs utilisés (firstname, lastname, employer, employer.name) dans _$sel_ à partir de la deuxième itération de la boucle.

### Réutilisation de la propriété `context`

Vous pouvez augmenter les avantages de l'optimisation en utilisant la propriété **context**. Cette propriété référence un contexte d'optimisation "appris" pour une entity selection. Elle peut être passée comme paramètre aux fonctions ORDA qui retournent de nouvelles entity selections, afin que les entity selections demandent directement au serveur les attributs utilisés, sans passer par la phase d'apprentissage.

> Vous pouvez également créer des contextes en utilisant la fonction [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo).

Une même propriété de contexte d'optimisation peut être passée à un nombre illimité d"entity selections de la même dataclass. Toutes les fonctions ORDA qui gèrent les entity selections prennent en charge la propriété **context** (par exemple [`dataClass.query()`](../API/DataClassClass.md#query) ou [`dataClass.all()`](../API/DataClassClass.md#all)). Il est toutefois important de garder à l'esprit qu'un contexte est automatiquement mis à jour lorsque de nouveaux attributs sont utilisés dans d'autres parties du code. Si le même contexte est réutilisé dans différents codes, il risque d'être surchargé et de perdre en efficacité.

> Un mécanisme similaire est implémenté pour les entités qui sont chargées, de sorte que seuls les attributs utilisés sont demandés (voir la fonction [`dataClass.get()`](../API/DataClassClass.md#get)).

**Exemple avec `dataClass.query()`:**

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

L'optimisation d'entity selection s'applique automatiquement aux listbox basées sur une entity selection dans les applications desktop client/serveur, au moment d'afficher et de dérouler le contenu d'une listbox : seuls les attributs affichés dans la listbox sont demandés au serveur.

Un contexte spécifique nommé "page mode" est également fourni lorsque l'entité courante de la sélection est chargée à l'aide de l'expression de la propriété **Elément courant** de la list box (voir [List box de type collection ou entity selection](FormObjects/listbox_overview.md#list-box-types)). Cette fonctionnalité vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas précis, notamment si la "page" requiert des attributs supplémentaires. A noter que seule l'utilisation de l'expression **Elément courant** permettra de créer/utiliser le contexte de la page (l'accès via `entitySelection[index]` modifiera le contexte de l'entity selection).

Les requêtes ultérieures adressées au serveur par les fonctions de navigation parmi les entités prendront également en charge cette optimisation. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entité source à l'entité retournée :

- [`entity.next()`](../API/EntityClass.md#next)
- [`entity.first()`](../API/EntityClass.md#first)
- [`entity.last()`](../API/EntityClass.md#last)
- [`entity.previous()`](../API/EntityClass.md#previous)

Par exemple, le code suivant charge l'entité sélectionnée et permet de naviguer dans l'entity selection. Les entités sont chargées dans un contexte séparé et le contexte initial de la listbox demeure inchangé :

```4d
 $myEntity:=Form.currentElement //expression de l'élément courant 
  //... faire quelque chose
 $myEntity:=$myEntity.next() //charge l'entité suivante à l'aide du même contexte
```

### Préconfiguration des contextes

Un contexte d'optimisation doit être défini pour chaque fonctionnalité ou algorithme de votre application, afin d'obtenir les meilleures performances. Par exemple, un contexte peut être utilisé pour les requêtes sur les clients, un autre contexte pour les requêtes sur les produits, etc.

Si vous souhaitez livrer des applications finales avec le plus haut niveau d'optimisation, vous pouvez préconfigurer vos contextes et ainsi économiser des phases d'apprentissage en suivant ces étapes :

1. Concevez vos algorithmes.
2. Exécutez votre application et laissez le mécanisme d'apprentissage automatique remplir les contextes d'optimisation.
3. Appelez la fonction [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) ou [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontextinfo) pour collecter les contextes. Vous pouvez utiliser les fonctions [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) et [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) pour analyser comment vos algorithmes utilisent les attributs.
4. Dans la dernière étape, appelez la fonction [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) pour construire des contextes au démarrage de l'application et [utilisez-les](#reutilisation-de-la-propriete-context) dans vos algorithmes.

## Cache ORDA

Pour des raisons d'optimisation, les données demandées au serveur via ORDA sont chargées dans le cache distant ORDA (qui est différent du cache 4D). Le cache ORDA est organisé par dataclass et expire au bout de 30 secondes.

Les données contenues dans le cache sont considérées comme expirées lorsque le délai d'attente est atteint. Tout accès à des données périmées provoquera l'envoi d'une requête au serveur. Les données périmées restent dans le cache jusqu'à ce que l'on ait besoin d'espace.

You can force entity selection data in the ORDA cache to expire at any moment by using the [`refresh()`](../API/EntitySelectionClass.md#refresh) function.

Par défaut, le cache ORDA est géré de manière transparente par 4D. Cependant, vous pouvez contrôler son contenu en utilisant les fonctions ORDA suivantes :

- [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
- [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
- [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)
