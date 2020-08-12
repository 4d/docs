---
id: entities
title: Travailler avec des données
---

Dans ORDA, vous accédez aux données via des [entités](dsMapping.md#entity) (entities) et des [sélections d'entités](dsMapping.md#entity-selection) (entity selections). Ces objets vous permettent de créer, mettre à jour, rechercher ou trier les données du datastore.


## Créer une entité

Il existe deux façons de créer une nouvelle entité dans une dataclass :

*   Les entités étant des références à des enregistrements de base de données, vous pouvez créer des entités en créant des enregistrements en utilisant le langage 4D "classique", puis les référencer avec des méthodes ORDA telles que `entity.next()` ou `entitySelection.first()`.
*   Vous pouvez également créer une entité à l'aide de la méthode `dataClass.new()`.

Gardez à l'esprit que l'entité est créée uniquement en mémoire. Si vous souhaitez l'ajouter à la banque de données, vous devez appeler la méthode `entity.save ()`.

Les attributs de l'entité sont directement disponibles en tant que propriétés de l'objet entité. Pour plus d'informations, reportez-vous à [Utilisation des attributs d'entité](#using-entity-attributes).

Par exemple, nous voulons créer une nouvelle entité dans la dataclass "Employee" dans le datastore courant avec "John" et "Dupont" affectés aux attributs de prénom et de nom :

```4d
var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Créer un nouvel objet de type entité
$myEntity.name:="Dupont" //assigner 'Dupont' à l'attribut 'name'
$myEntity.firstname:="John" //assigner 'John' à l'attribut 'firstname' 
$myEntity.save() //sauvegarder l'entité
```
> Une entité est définie uniquement dans le processus où elle a été créée. Vous ne pouvez pas, par exemple, stocker une référence à une entité dans une variable interprocess et l'utiliser dans un autre processus.

## Entités et références

Une entité contient une référence à un enregistrement 4D. Différentes entités peuvent référencer le même enregistrement 4D. De plus, comme une entité peut être stockée dans une variable objet 4D, différentes variables peuvent contenir une référence à la même entité.

Si vous exécutez le code suivant :

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) //accéder à l'employé avec ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //les variables $e1 et $e2 partagent la référence à la même entité
  //$e2.name contient "Hammer"
```

Ceci est illustré par le graphique suivant :

![](assets/en/Orda/entityRef1.png)

Maintenant, si vous exécutez :

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //la variable $e1 contient une référence vers une entité
  //variable $e2 contient une autre référence vers une autre entité
  //$e2.name contient "smith"
```

Ceci est illustré par le graphique suivant :

![](assets/en/Orda/entityRef2.png)

A noter cependant que les entités font référence au même enregistrement. Dans tous les cas, si vous appelez la méthode `entity.save()`, l'enregistrement sera mis à jour (sauf en cas de conflit, voir [Verrouillage d'entité](#entity-locking)).

In fact, `$e1` and `$e2` are not the entity itself, but a reference to the entity. It means that you can pass them directly to any function or method, and it will act like a pointer, and faster than a 4D pointer. Par exemple:

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

Et la méthode est :

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

Vous pouvez gérer les entités comme n'importe quel autre objet dans 4D et passer leurs références directement en tant que [paramètres](Concepts/parameters.md).
> Avec les entités, il n'y a pas de notion de "enregistrement courant" comme dans le langage classique de 4D. Vous pouvez utiliser autant d'entités que nécessaire, en même temps. Il n'existe pas non plus de verrouillage automatique d'une entité (voir [Verrouillage d'une entité](#entity-locking)). When an entity is loaded, it uses the [lazy loading](glossary.md#lazy-loading) mechanism, which means that only the needed information is loaded. Néanmoins, en mode client/serveur, l'entité peut être automatiquement chargée directement si nécessaire.


## Utilisation des attributs d'entités

Les attributs d'entité stockent les données et mappent les champs correspondants dans la table correspondante. Les attributs d'entité du type de stockage peuvent être définis ou obtenus sous forme de propriétés simples de l'objet entité, tandis que l'entité de type **relatedEntity** ou **relatedEntities** renverra une entité ou une sélection d'entité.
> Pour plus d'informations sur le type d'attribut, reportez-vous au paragraphe [Attributs de stockage et de relation](dsMapping.md#storage-and-relation-attributes).

Par exemple, pour définir un attribut de stockage :

```4d
 $entity:=ds.Employee.get(1) //get employee attribute with ID 1
 $name:=$entity.lastname //get the employee name, e.g. "Smith"
 $entity.lastname:="Jones" //set the employee name
```
> Les attributs d'images ne peuvent pas être assignés directement à un chemin donné dans une entité.

L'accès à un attribut associé dépend du type d'attribut. Par exemple, avec la structure suivante :

![](assets/en/Orda/entityAttributes.png)

Vous pouvez accéder aux données via le ou les objets associé(s) :

```4d
 $entity:=ds.Project.all().first().theClient //récupérer l'entité Company associée au projet
 $EntitySel:=ds.Company.all().first().companyProjects //récupère la sélection de projets pour l'entreprise(Company)
```

Notez que dans l'exemple ci-dessus, *theClient* et *companyProjects* sont des attributs de relation et représentent une relation directe entre les deux dataclasses. Cependant, les attributs de relation peuvent également être créés sur des chemins via des relations à plusieurs niveaux, y compris des références circulaires. Par exemple, considérons la structure suivante :

![](assets/en/Orda/entityAttributes2.png)

Chaque employé peut être un manager et peut avoir un manager. Pour obtenir le manager du manager d'un employé, vous pouvez simplement écrire :

```4d
 $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

## Assigner des valeurs aux attributs de relation

Dans l'architecture ORDA, les attributs de relation contiennent directement des données liées aux entités :

*   Un attribut de relation de type N-> 1 (type **relatedEntity**) contient une entité
*   Un attribut de relation de type 1-> N (type **relatedEntities**) contient une sélection d'entité

Regardons la structure (simplifiée) suivante :

![](assets/en/Orda/entityAttributes3.png)

Dans cet exemple, une entité de la dataclass "Employee" contient un objet de type Entité dans l'attribut "employer" (ou une valeur nulle). Une entité de la dataclass "Company" contient un objet de type EntitySelection dans l'attribut "staff" (ou une valeur nulle).
> Dans ORDA, la propriété Automatic ou Manual des relations ne produit aucun effet.

Pour attribuer une valeur directement à l'attribut "employer", vous devez passer une entité existante de la dataclass "Company". Par exemple:

```4d
 $emp:=ds.Employee.new() // créer un employé
 $emp.lastname:="Smith" // attribuer une valeur à un attribut
 $emp.employer:=ds.Company.query("name =:1";"4D")[0]  //attribuer une entité de "company"
 $emp.save()
```

4D fournit une fonctionnalité supplémentaire pour saisir un attribut de relation pour une entité N liée à une entité "1": vous passez directement la clé primaire de l'entité "1" lors de l'attribution d'une valeur à l'attribut de relation. Pour que cela fonctionne, passez des données de type Numérique ou Texte (la valeur de la clé primaire) à l'attribut de relation. 4D se charge alors automatiquement de rechercher l'entité correspondante dans la dataclass. Par exemple:

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=2 // attribuer une clé primaire à l'attribut relation
  //4D recherche l'entreprise dont la clé primaire (dans ce cas, son ID) est 2
  //et l'attribue à l'employé
 $emp.save()
```

Ceci est particulièrement utile lorsque vous importez un grand nombre de données à partir d'une base de données relationnelle. Ce type d'import contient généralement une colonne "ID", qui référence une clé primaire que vous pouvez ensuite affecter directement à un attribut de relation.

Cela signifie également que vous pouvez attribuer des clés primaires dans les N entités sans que les entités correspondantes aient déjà été créées dans la 1e classe de datastore. Si vous affectez une clé primaire qui n'existe pas dans la classe de datastore associée, elle est néanmoins stockée et affectée par 4D dès que cette entité "1" est créée.

Vous pouvez attribuer ou modifier la valeur d'un attribut d'entité associé "1" à partir de la dataclass "N" directement via l'attribut associé. Par exemple, si vous souhaitez modifier l'attribut de nom d'une entité "Company" associée d'une entité "Employee", vous pouvez écrire :

```code4d
 $emp:=ds.Employee.get(2) // charge l'entité Employee avec la clé primaire 2
 $emp.employer.name:="4D, Inc." //modifier l'attribut de nom de la société associée
 $emp.employer.save() //sauvegarder l'attribut associé
  //l'entité associée est mise à jour
```

## Créer une sélection d'entité (entity selection)

Vous pouvez créer un objet de type sélection d'entité comme suit :

*   Recherchez les entités d'une dataclass (voir la méthode `dataClass.query()`);
*   Utilisez la méthode `dataClass.all()` pour sélectionner toutes les entités d'une dataclass;
*   Utilisez la commande `Create entity selection` ou la méthode `dataClass.newSelection()` pour créer un objet de collection d'entités (entity collection) vide;

*   Utilisez l'une des diverses méthodes du thème **ORDA - EntitySelection** qui retourne une nouvelle sélection d'entité, telle que `entitySelection.or()`;

*   Utilisez un attribut de relation de type "related entities" ("entités liées") (voir ci-dessous).

Vous pouvez créer et utiliser simultanément autant de sélections d'entités différentes que vous le souhaitez pour une dataclass. A noter qu'une sélection d'entité ne contient que des références à des entités. Différentes sélections d'entités peuvent contenir des références vers les mêmes entités.
> Une sélection d'entité n'est définie que dans le process où elle a été créée. Vous ne pouvez pas, par exemple, stocker une référence à une sélection d'entité dans une variable interprocess et l'utiliser dans un autre process.

## Sélections d'entités et attributs

### Sélections d'entités et attributs de stockage

Tous les attributs de stockage (texte, numérique, booléen, date) sont disponibles en tant que propriétés des sélections d'entités et en tant qu'entités. Lorsqu'il est utilisé avec une sélection d'entité, un attribut scalaire retourne une collection de valeurs scalaires. Par exemple:

```4d
 $locals:=ds.Person.query("city = :1";"San Jose") //entity selection of people
 $localEmails:=$locals.emailAddress //collection of email addresses (strings)
```

This code returns in *$localEmails* a collection of email addresses as strings.

### Sélections d'entités et attributs de relation

Outre la variété de méthodes de recherche, vous pouvez également utiliser des attributs de relation comme propriétés des sélections d'entités pour retourner de nouvelles sélections d'entités. Par exemple, considérons la structure suivante :

![](assets/en/Orda/entitySelectionRelationAttributes.png)

```4d
 $myParts:=ds.Part.query("ID < 100") //Return parts with ID less than 100
 $myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
```

La dernière ligne renverra, dans $myInvoices, une sélection d'entité de toutes les factures qui ont au moins un poste de facture lié à une partie de la sélection d'entités myParts. Lorsqu'un attribut de relation est utilisé comme propriété d'une sélection d'entité, le résultat est toujours une autre sélection d'entité, même si une seule entité est retournée. Lorsqu'un attribut de relation est utilisé comme propriété d'une sélection d'entité et qu'aucune entité n'est retournée, le résultat est une sélection d'entité vide et non nulle.


## Verrouillage d'une entité

Vous devez souvent gérer d'éventuels conflits pouvant survenir lorsque plusieurs utilisateurs ou process se chargent et tentent de modifier les mêmes entités en même temps. Le verrouillage des enregistrements est une méthodologie utilisée dans les bases de données relationnelles pour éviter les mises à jour incohérentes des données. Le concept consiste soit à verrouiller un enregistrement lors de sa lecture afin qu'aucun autre processus ne puisse le mettre à jour, soit à vérifier lors de la sauvegarde d'un enregistrement qu'un autre processus ne l'a pas modifié depuis sa lecture. Le premier est appelé **verrouillage d'enregistrement pessimiste** et garantit qu'un enregistrement modifié peut être écrit au détriment du verrouillage des enregistrements pour d'autres utilisateurs. Ce dernier est appelé **verrouillage d'enregistrement optimiste** et il échange la garantie des privilèges d'écriture sur l'enregistrement contre la flexibilité de décider des privilèges d'écriture uniquement si l'enregistrement doit être mis à jour. Dans le verrouillage d'enregistrement pessimiste, l'enregistrement est verrouillé même s'il n'est pas nécessaire de le mettre à jour. Dans le verrouillage d'enregistrement optimiste, la validité de la modification d'un enregistrement est fixée au moment de la mise à jour.

ORDA vous propose deux modes de verrouillage d'entité :

- un mode automatique "optimiste", adapté à la plupart des applications,
- un mode "pessimiste" permettant de verrouiller les entités avant d'y accéder.

### Verrouillage optimiste automatique

Ce mécanisme automatique est basé sur le concept de "verrouillage optimiste" qui est particulièrement adapté aux problématiques des applications web. Ce concept se caractérise par les principes de fonctionnement suivants :

*   Toutes les entités peuvent toujours être chargées en lecture-écriture; il n'y a pas de «verrouillage» *a priori* des entités.
*   Chaque entité possède un marqueur de verrouillage interne qui est incrémenté à chaque fois qu'il est enregistré.
*   Lorsqu'un utilisateur ou un process tente de sauvegarder une entité à l'aide de la méthode `entity.save()`, 4D compare la valeur du marqueur de l'entité à sauvegarder avec celle de l'entité trouvée dans les données (en cas de modification) :
    *   Lorsque les valeurs correspondent, l'entité est enregistrée et la valeur du marqueur interne est incrémentée.
    *   Lorsque les valeurs ne correspondent pas, cela signifie qu'un autre utilisateur a modifié cette entité entre-temps. La sauvegarde n'est pas effectuée et une erreur est retournée.

Le diagramme suivant illustre le verrouillage optimiste :

1. Deux process chargent la même entité.<br><br>![](assets/en/Orda/optimisticLock1.png)

2. Le premier process modifie l'entité et valide le changement. La méthode `entity.save()` est appelée. Le moteur 4D compare automatiquement la valeur du marqueur interne de l'entité modifiée avec celle de l'entité stockée dans les données. Puisqu'ils correspondent, l'entité est enregistrée et la valeur de son marqueur est incrémentée.<br><br>![](assets/en/Orda/optimisticLock2.png)

3. Le deuxième process modifie également l'entité chargée et valide ses modifications. La méthode `entity.save()` est appelée. Etant donné que la valeur de marqueur de l'entité modifiée ne correspond pas à celle de l'entité stockée dans les données, la sauvegarde n'est pas effectuée et une erreur est retournée.<br><br>![](assets/en/Orda/optimisticLock3.png)


Cela peut également être illustré par le code suivant :

```4d
 $person1:=ds.Person.get(1) //Référence à l'entité
 $person2:=ds.Person.get(1) //Autre référence à la même entité
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, modification enregistrée
 $person2.name:="William"
```

Dans cet exemple, nous attribuons à $person1 une référence à l'entité "person" avec une clé de 1. Nous attribuons ensuite une autre référence de la même entité à la variable $person2. Avec $person1, nous modifions le prénom de la personne et sauvegardons l'entité. Lorsque nous essayons de faire de même avec $person2, 4D vérifie que l'entité sur le disque est la même que lors de la première attribution de la référence dans $person1. Puisqu'elles ne sont pas identiques, 4D retourne "faux" dans la propriété "success" et ne sauvegarde pas la deuxième modification.

Lorsque cette situation se produit, vous pouvez, par exemple, recharger l'entité à partir du disque à l'aide de la méthode `entity.reload()` afin de réessayer d'effectuer la modification. La méthode `entity.save()` propose également une option «auto-fusion» ("automerge") pour enregistrer l'entité au cas où les process auraient modifié des attributs non identiques.

### Verrouillage pessimiste

Vous pouvez verrouiller et déverrouiller des entités à la demande lorsque vous accédez aux données. Lorsqu'une entité est verrouillée par un process, elle est chargée en lecture/écriture dans ce process mais elle est verrouillée pour tous les autres process. L'entité peut être chargée uniquement en mode lecture seule dans ces process; ses valeurs ne peuvent pas être modifiées ou enregistrées.

This feature is based upon two methods of the `Entity` class:

*   `entity.lock()`
*   `entity.unlock()`

Pour plus d'informations, reportez-vous aux descriptions de ces méthodes.


### Utilisation simultanée des verrouillages classiques 4D et des verrouillages pessimistes ORDA

L'utilisation des commandes classiques et ORDA pour le verrouillage des enregistrements est basé sur les principes suivants :

*   Un verrouillage défini avec une commande 4D classique sur un enregistrement empêche ORDA de verrouiller l'entité correspondant à l'enregistrement.
*   Un verrouillage défini avec ORDA sur une entité empêche les commandes 4D classiques de verrouiller l'enregistrement correspondant à l'entité.

Ces principes sont illustrés dans le diagramme suivant :

![](assets/en/Orda/concurrent1.png)

Les **verrouillages de transaction** s'appliquent également aux commandes classiques et aux commandes ORDA. Dans une application multiprocess ou multi-utilisateurs, un verrouillage défini dans une transaction sur un enregistrement par une commande classique aura pour effet d'empêcher tout autre process de verrouiller les entités liées à cet enregistrement (ou inversement), jusqu'à ce que la transaction soit validée ou annulée.

*   Exemple avec un verrouillage défini par une commande classique :<br><br>![](assets/en/Orda/concurrent2.png)
*   Exemple avec un verrouillage défini par une méthode ORDA :<br><br>![](assets/en/Orda/concurrent3.png)



## Optimisation client/serveur

4D optimise automatiquement les requêtes ORDA qui utilisent des sélections d'entités ou qui chargent des entités en configuration client/serveur. Cette optimisation accélère l'exécution de votre application 4D en réduisant drastiquement le volume d'informations transmises sur le réseau.

Les mécanismes d'optimisation suivants sont mis en œuvre :

*   Lorsqu'un client demande une sélection d'entité au serveur, 4D "apprend" automatiquement attributs de la sélection d'entité sont réellement utilisés côté client lors de l'exécution du code, et génère un "contexte d'optimisation" correspondant. Ce contexte est relié à la sélection d'entité et stocke les attributs utilisés. Il sera mis à jour dynamiquement si d'autres attributs sont utilisés par la suite.

*   Les requêtes ultérieures envoyées au serveur sur la même sélection d'entité réutilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs nécessaires depuis le serveur, ce qui accélère le traitement. Par exemple, dans une list box basée sur une sélection d'entités, la phase d'apprentissage a lieu durant l'affichage des premières lignes et l'affichage des lignes suivantes est fortement optimisé.

*   Un contexte d'optimisation existant peut être passé en tant que propriété à une autre sélection d'entité de la même dataclass, ce qui permet d'éviter la phase d'apprentissage et d'accélérer l'application (voir [Utilisation de la propriété context](#using-the-context-property) ci-dessous).

Les méthodes suivantes associent automatiquement le contexte d'optimisation de la sélection d'entité d'origine à la sélection d'entité retournée :

*   `entitySelection.and()`
*   `entitySelection.minus()`
*   `entitySelection.or()`
*   `entitySelection.orderBy()`
*   `entitySelection.slice()`
*   `entitySelection.drop()`


**Exemple**

Considérons le code suivant :

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie à la table Company 
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in *$sel* after a learning phase.



### Utilisation de la propriété context

Vous pouvez tirer un meilleur parti de l'optimisation en utilisant la propriété **context**. Cette propriété référence un contexte d'optimisation "appris" pour une sélection d'entités. Elle peut être passée comme paramètre aux méthodes ORDA qui retournent de nouvelles sélections d'entités, afin que les sélections d'entités demandent directement au serveur les attributs utilisés, sans passer par la phase d'apprentissage.

Une même propriété de contexte d'optimisation peut être passée à un nombre illimité de sélections d'entités de la même dataclass. Toutes les méthodes ORDA qui gèrent les sélections d'entités prennent en charge la propriété **context** (par exemple les méthodes `dataClass.query( )` ou `dataClass.all( )`). Il est toutefois important de garder à l'esprit qu'un contexte est automatiquement mis à jour lorsque de nouveaux attributs sont utilisés dans d'autres parties du code. Si le même contexte est réutilisé dans différents codes, il risque d'être surchargé et de perdre en efficacité.
> Un mécanisme similaire est mis en place pour des entités qui sont chargées, afin que seuls les attributs utilisés soient demandés (voir la méthode `dataClass.get( )`).



**Exemple avec la méthode `dataClass.query( )` :**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered and associated to context "shortList"

 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated to context "shortList" is applied

 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization is triggered and associated to context "longList"

 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization associated to context "longList" is applied
```

### Listbox basée sur une sélection d'entités

L'optimisation d'une sélection d'entités s'applique automatiquement aux listbox basées sur une sélection d'entités dans les configurations client/serveur, au moment d'afficher et de dérouler le contenu d'une listbox : seuls les attributs affichés dans la listbox sont demandés depuis le serveur.

Un contexte spécifique nommé "mode page" est également proposé lorsque l'entité courante de la sélection est chargée à l'aide de l'expression **élément courant** de la listbox (voir [List box de type collection ou entity selection](FormObjects/listbox_overview.md#list-box-types)). Cette fonctionnalité vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas précis, notamment si la "page" requiert des attributs supplémentaires. A noter que seule l'utilisation de l'expression **Élément courant** permettra de créer/utiliser le contexte de la page (l'accès via `entitySelection[index]` modifiera le contexte de la sélection d'entité).

Cette optimisation sera également prise en charge par les requêtes ultérieures envoyées au serveur via les méthodes de navigation des entités. Les méthodes suivantes associeront automatiquement le contexte d'optimisation de l'entité source à l'entité retournée :

*   `entity.next( )`
*   `entity.first( )`
*   `entity.last( )`
*   `entity.previous( )`

Par exemple, le code suivant charge l'entité sélectionnée et permet de naviguer dans la sélection d'entités. Les entités sont chargées dans un contexte séparé et le contexte initial de la listbox demeure inchangé :

```4d
 $myEntity:=Form.currentElement //expression de l'élément courant 
  //... faire quelque chose
 $myEntity:=$myEntity.next() //charge la prochaine entité à l'aide du même contexte
```
