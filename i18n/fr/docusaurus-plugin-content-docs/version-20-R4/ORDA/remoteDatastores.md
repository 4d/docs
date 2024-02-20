---
id: datastores
title: Using a remote datastore
---

Un [datastore](dsMapping.md#datastore) exposé sur une application 4D Server est accessible simultanément via différents clients :

- Les applications 4D distantes utilisant ORDA pour accéder au datastore principal à l’aide de la commande `ds`. A noter que l'application 4D distante peut toujours accéder à la base de données en mode classique. Ces accès sont gérés par le **serveur d'applications 4D**.
- D'autres applications 4D (4D Remote, 4D Server) ouvrant une session sur le datastore distant via la commande [`Open datastore`](../API/DataStoreClass.md#open-datastore). Ces accès sont transmis par le **serveur HTTP REST**.
- Les requêtes [4D for iOS ou 4D for Android](https://developer.4d.com/go-mobile/) pour la mise à jour des applications mobiles. Ces accès sont remis par le **serveur HTTP**.



## Ouverture des sessions

Lorsque vous travaillez avec un datastore distant référencé par des appels à la commande `Open datastore`, la connexion entre les process qui effectuent la requête et le datastore distant est gérée par des sessions.

Une session est créée sur le datastore distant pour gérer la connexion. Cette session est identifiée à l'aide d'un ID de session interne, associé au `localID` de l'application 4D. Cette session gère automatiquement l'accès aux données, aux sélections d'entités ou aux entités.

Le `localID` est local à la machine qui se connecte au datastore distant, ce qui signifie :

*   Que si d'autres process de la même application doivent accéder au même datastore distant, ils peuvent utiliser le même `localID` et partager alors la même session.
*   Que si un autre process de la même application ouvre le même datastore distant, mais avec un autre `localID`, il créera une nouvelle session sur le datastore distant.
*   Que si un autre poste se connecte au même datastore distant avec le même `localID`, il créera une autre session avec un autre cookie.

Ces principes sont illustrés dans les graphiques suivants :

![](../assets/en/ORDA/sessions.png)

> Pour les sessions ouvertes par des requêtes REST, veuillez consulter la page [Utilisateurs et sessions](REST/authUsers.md).

### Visualiser les sessions

Les process qui gèrent les sessions d'accès aux datastore apparaissent dans la fenêtre d'administration de 4D Server :

*   nom : "REST Handler : \<nom du process\>"
*   type : type Worker Server HTTP
*   session : le nom de session est le nom d'utilisateur passé à la commande `Open datastore`.

Dans l'exemple suivant, deux process sont en cours d'exécution pour la même session :

![](../assets/en/ORDA/sessionAdmin.png)

### Verrouillage et transactions

Les fonctionnalités ORDA relatives au verrouillage d'entité et aux transactions sont gérées au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :

*   Si un process verrouille une entité à partir d'un datastore distant, l'entité est verrouillée pour tous les autres process, même lorsque ces process partagent la même session (voir [Verrouillage d'entités](entities.md#entity-locking)). Si plusieurs entités pointant vers le même enregistrement ont été verrouillées dans un process, elles doivent toutes être déverrouillées dans le process pour supprimer le verrou. Si un verrou a été mis sur une entité, il est supprimé lorsqu'il n'existe plus de référence à cette entité en mémoire.
*   Les transactions peuvent être lancées, validées ou annulées séparément sur chaque datastore distant à l'aide des méthodes `dataStore.startTransaction( )`, `dataStore.cancelTransaction( )`, et `dataStore.validateTransaction( )`. Elles n’ont pas d’incidences sur les autres datastore.
*   Les commandes classiques du langage 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) s'appliquent uniquement au datastore principal (renvoyé par `ds`). Si une entité d'un datastore distant est verrouillée par une transaction dans un process, les autres process ne peuvent pas la mettre à jour, même si ces process partagent la même session.
*   Les verrous sur les entités sont supprimés et les transactions sont annulées :
    *   lorsque le process est tué.
    *   quand la session est fermée sur le serveur
    *   lorsque la session est arrêtée à partir de la fenêtre d’administration du serveur.

### Fermeture des sessions

Une session est automatiquement fermée par 4D lorsqu'il n'y a pas eu d'activité durant son timeout. Le timeout par défaut est de 60 mn mais cette valeur peut être paramétrée à l'aide du paramètre *connectionInfo* de la commande `Open datastore`.

Si une demande est envoyée au datastore distant après la fermeture de la session, elle est automatiquement recréée si possible (licence disponible, serveur non arrêté, etc.). A noter cependant que le contexte de la session des verrous et des transactions est perdu (voir ci-dessus).

## Optimisation client/serveur

4D optimise automatiquement les requêtes ORDA qui utilisent des entity selections ou qui chargent des entités dans des configurations client/serveur (datastore accessible à distance à l'aide de `ds` ou de `Open datastore`). Ces optimisations accélèrent l'exécution de votre application 4D en réduisant drastiquement le volume d'informations transmises sur le réseau. Elles incluent :
* le **contexte d'optimisation**
* le **cache ORDA**

### Contexte

Le contexte d'optimisation est fondé sur ce qui suit :

* Lorsqu'un client demande une sélection d'entité au serveur, 4D "apprend" automatiquement attributs de la sélection d'entité sont réellement utilisés côté client lors de l'exécution du code, et génère un "contexte d'optimisation" correspondant. Ce contexte est relié à la sélection d'entité et stocke les attributs utilisés. Il sera mis à jour dynamiquement si d'autres attributs sont utilisés par la suite. Les méthodes et fonctions suivantes déclenchent la phase d'apprentissage :
  * [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection)
  * [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  * [`dataClass.all()`](../API/DataClassClass.md#all)
  * [`dataClass.get()`](../API/DataClassClass.md#get)
  * [`dataClass.query()`](../API/DataClassClass.md#query)
  * [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

* Les requêtes ultérieures envoyées au serveur sur la même sélection d'entité réutilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs nécessaires depuis le serveur, ce qui accélère le traitement. Par exemple, dans une [list box de type entity selection](#entity-selection-based-list-box), la phase d'apprentissage a lieu pendant l'affichage de la première ligne. L'affichage des lignes suivantes est optimisé. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine à l'entity selection retournée :
    *   [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
    *   [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
    *   [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
    *   [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
    *   [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
    *   [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

* Un contexte d'optimisation existant peut être passé en tant que propriété à une autre sélection d'entité de la même dataclass, ce qui permet d'éviter la phase d'apprentissage et d'accélérer l'application (voir [Utilisation de la propriété context](#reusing-the-context-property) ci-dessous).

* Vous pouvez créer des contextes d'optimisation manuellement à l'aide de la fonction [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) (voir [Préconfiguration des contextes](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)


:::warning Compatibility Note

Contexts handled in connections established through [`Open datastore`](../API/DataStoreClass.md#open-datastore) can only be used between similar main versions of 4D. For example, a 4D v20.x remote application can only use contexts of a 4D Server v20.x datastore.

:::


#### Exemple

Considérons le code suivant :

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie à la table Company 
 End for each
```

Grâce à l'optimisation, cette requête récupérera uniquement les données des attributs utilisés (firstname, lastname, employer, employer.name) dans *$sel* à partir de la deuxième itération de la boucle.

#### Réutiliser la propriété context

Vous pouvez tirer un meilleur parti de l'optimisation en utilisant la propriété **context**. Cette propriété référence un contexte d'optimisation "appris" pour une sélection d'entités. Elle peut être passée comme paramètre aux fonctions ORDA qui retournent de nouvelles sélections d'entités, afin que les sélections d'entités demandent directement au serveur les attributs utilisés, sans passer par la phase d'apprentissage.
> Vous pouvez également créer des contextes à l'aide de la fonction [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo).

All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. Il est toutefois important de garder à l'esprit qu'un contexte est automatiquement mis à jour lorsque de nouveaux attributs sont utilisés dans d'autres parties du code. Si le même contexte est réutilisé dans différents codes, il risque d'être surchargé et de perdre en efficacité.
> Un mécanisme similaire est mis en œuvre pour les entités chargées, de sorte que seuls les attributs utilisés sont demandés (voir la fonction [`dataClass.get()`](../API/DataClassClass.md#get)).

**Exemple avec `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context" ; "shortList")
 $querysettings2:=New object("context" ; "longList")

 $sel1:=ds.Employee.query("lastname = S@" ;$querysettings)
 $data:=extractData($sel1) // Dans la méthode extractData, une optimisation est 
 // déclenchée et associée au contexte "shortList"

 $sel2:=ds.Employee.query("lastname = Sm@" ;$querysettings)
 $data:=extractData($sel2) // Dans la méthode extractData l'optimisation associée   
 // au contexte "shortList" est appliquée

 $sel3:=ds.Employee.query("lastname = Smith" ;$querysettings2)
 $data:=extractDetailedData($sel3) // Dans la méthode extractDetailedData une 
 // optimisation est déclenchée et associée au contexte "longList"

 $sel4:=ds.Employee.query("lastname = Brown" ;$querysettings2)
 $data:=extractDetailedData($sel4) // Dans la méthode extractDetailedData l'optimisation  
 // associée au contexte "longList" est appliquée
```

#### List box de type entity selection

L'optimisation d'entity selection s'applique automatiquement aux listbox basées sur une entity selection dans les configurations client/serveur, au moment d'afficher et de dérouler le contenu d'une listbox : seuls les attributs affichés dans la listbox sont demandés depuis le serveur.

Un contexte spécifique nommé "mode page" est également proposé lorsque l'entité courante de la sélection est chargée à l'aide de l'expression **élément courant** de la listbox (voir [List box de type collection ou entity selection](FormObjects/listbox_overview.md#list-box-types)). Cette fonctionnalité vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas précis, notamment si la "page" requiert des attributs supplémentaires. A noter que seule l'utilisation de l'expression **Current item** permettra de créer/utiliser le contexte de la page (l'accès via `entitySelection[index]` modifiera le contexte de l'entity selection).

Les requêtes ultérieures adressées au serveur par les fonctions de navigation parmi les entités prendront également en charge cette optimisation. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entité source à l'entité retournée :

*   [`entity.next()`](../API/EntityClass.md#next)
*   [`entity.first()`](../API/EntityClass.md#first)
*   [`entity.last()`](../API/EntityClass.md#last)
*   [`entity.previous()`](../API/EntityClass.md#previous)

Par exemple, le code suivant charge l'entité sélectionnée et permet de naviguer dans l'entity selection. Les entités sont chargées dans un contexte séparé et le contexte initial de la listbox demeure inchangé :

```4d
 $myEntity:=Form.currentElement //expression de l'élément courant 
  //... faire quelque chose
 $myEntity:=$myEntity.next() //charge la prochaine entité à l'aide du même contexte
```

#### Préconfiguration des contextes

Un contexte d'optimisation doit être défini pour chaque fonctionnalité ou algorithme de votre application, afin d'obtenir les meilleures performances. Par exemple, un contexte peut être utilisé pour les requêtes sur les clients, un autre contexte pour les requêtes sur les produits, etc.

Si vous souhaitez livrer des applications finales avec le plus haut niveau d'optimisation, vous pouvez préconfigurer vos contextes et ainsi économiser des phases d'apprentissage en suivant ces étapes :

1. Concevez vos algorithmes.
2. Exécutez votre application et laissez le mécanisme d'apprentissage automatique remplir les contextes d'optimisation.
3. Appelez la fonction [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) ou [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) pour collecter les contextes. Vous pouvez utiliser les fonctions [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) et [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) pour analyser la manière dont vos algorithmes utilisent les attributs.
4. Dans la dernière étape, appelez la fonction [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) pour créer des contextes au démarrage de l'application et [les utiliser](#reusing-the-context-property) dans vos algorithmes.


### Cache ORDA

Pour des raisons d'optimisation, les données demandées au serveur via ORDA sont chargées dans le cache distant ORDA (qui est différent du cache 4D). Le cache ORDA est organisé par dataclass et expire au bout de 30 secondes.

Les données contenues dans le cache sont considérées comme expirées lorsque le délai d'attente est atteint. Tout accès à des données périmées provoquera l'envoi d'une requête au serveur. Les données périmées restent dans le cache jusqu'à ce que l'on ait besoin d'espace.

Par défaut, le cache ORDA est géré de manière transparente par 4D. Cependant, vous pouvez contrôler son contenu en utilisant les fonctions ORDA suivantes :

* [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
* [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
* [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)