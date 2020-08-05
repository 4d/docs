---
id: shared
title: Objets et collections partagés
---

## Aperçu
**Shared objects** and **shared collections** are specific [objects](Concepts/dt_object.md) and [collections](Concepts/dt_collection.md) whose contents are shared between processes. In contrast to [interprocess variables](Concepts/variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as `New process` or `CALL WORKER`.

Les objets partagés et les collections partagées peuvent être stockés dans des variables déclarées à l'aide des commandes standard `C_OBJECT` et `C_COLLECTION`, mais doivent être instanciées à l'aide de commandes spécifiques :

- pour créer un objet partagé, utilisez la commande `New shared object`,
- pour créer une collection partagée, utilisez la commande `New shared collection`.

**Note:** Shared objects and collections can be set as properties of standard (not shared) objects or collections.

In order to modify a shared object/collection, the **Use...End use** structure must be called. Reading a shared object/collection value does not require **Use...End use**.

Un catalogue unique et global, retourné par la commande `Storage`, est disponible à tout moment et depuis tout process de la base et de ses composants.

## Utilisation des objets et collections partagés
Une fois instanciés à l'aide des commandes `Creer objet partage` ou `Creer collection partagee`, les objets partagés et les collections partagées peuvent être modifiés et lus depuis n'importe quel process.

### Modification
Les modifications suivantes peuvent être effectuées sur les objets partagés et les collections partagées :

- ajout ou suppression de propriétés d'objets,
- ajout ou modification de valeurs (prises en charge par les objets/collections partagé(e) s), y compris d'autres objets et collections partagé(s) (ce qui crée un groupe partagé, cf. ci-dessous).

Toute instruction de modification d'objet ou de collection partagé(e) doit être encadrée par les mots-clés `Use...End use`, sinon une erreur est générée.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
End Use
```

Un objet/une collection partagé(e) ne peut être modifié(e) que par un seul process à la fois. `Use` verrouille les propriétés de l'objet/la collection pour les autres threads (process), alors que le `End use` utiliser final déverrouille tous les objets et collections. Toute tentative de modification d'un objet/d'une collection partagé(e) sans au moins un appel à `Use...End use` génère une erreur. Lorsqu'un process appelle `Use...End use` avec un objet/une collection partagé(e) qui est déjà "utilisé(e)" par un autre process, il est simplement mis en attente jusqu'à ce qu'il soit déverrouillé par l'appel à `End use` (aucune erreur n'est générée). En conséquence, les instructions situées à l'intérieur des structures `Use...End use` doivent toujours s'exécuter rapidement et déverrouiller les éléments dès que possible. Il est donc fortement déconseillé de modifier un objet ou une collection partagé(e) directement depuis l'interface, par exemple depuis une boîte de dialogue.

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. Un groupe partagé est automatiquement créé lorsqu'un objet ou une collection partagé(e) est assigné(e) en tant que valeur de propriété ou élément à un autre objet ou collection partagé(e). Les groupes partagés permettent d'imbriquer des objets et collections partagé(e)s mais nécessitent d'observer des règles supplémentaires :

- L'appel de `Use` avec un objet/une collection partagé(e) appartenant à un groupe provoquera le verrouillage des propriétés/éléments de tous les objets/collections du groupe.
- Un objet ou une collection partagé(e) peut appartenir à un seul groupe partagé. Une erreur est générée si vous tentez d'assigner un objet ou une collection appartenant déjà à un groupe à un groupe différent.
- Les objets/collections groupé(e) s ne peuvent plus être dégroupé(e) s. Une fois inclus dans un groupe partagé, un objet ou une collection partagé(e) est lié(e) définitivement au groupe pendant toute la durée de la session. Même si toutes les références de l'objet/la collection sont supprimé(e) s des objets/collections parent(e) s, ils resteront liés.

Reportez-vous à l'exemple 2 pour l'illustration des règles des groupes partagés.

**Note:** Shared groups are managed through an internal property named *locking identifier*. Si vous avez besoin de plus d'informations sur les mécanismes utilisés, reportez-vous au Guide du développeur de 4D.

### Lecture
La lecture de propriétés ou d'éléments d'un objet ou d'une collection partagé(e) est possible sans appel de la structure `Use...End use`, même si l'objet ou la collection partagé(e) est "utilisé(e)" par un autre process.

Cependant, lorsque plusieurs valeurs sont interdépendantes et doivent être lues simultanément, il est nécessaire d'encadrer l'accès en lecture par une structure `Use...End use` pour des raisons de cohérence.

### Duplication
Appeler `OB Copier` avec un objet partagé (ou avec un objet dont des propriétés sont des objets partagés) est possible, mais dans ce cas un objet standard (non partagé) est retourné.

### Storage
**Storage** is a unique shared object, automatically available on each application and machine. Cet objet partagé est retourné par la commande `Storage`. Il est destiné à référencer les objets ou collections partagé(e)s défini(e)s durant la session que vous souhaitez rendre accessibles à tous les process, préemptifs ou standard.

A noter que, à la différence de objets partagés standard, l'objet `Storage` ne crée par de groupe partagé lorsque des objets/collection lui sont assigné(e) s en tant que propriétés. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

Pour plus d'informations, reportez-vous à la description de la commande `Storage`.

## Utiliser...Fin utiliser
La syntaxe de la structure `Use...End use` est la suivante :

```4d
 Use(Shared_object_or_Shared_collection)
    instruction(s)
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. Ils peuvent être passés par référence en paramètre d'un process à un autre. For detailed information on shared objects or shared collections, refer to the **Shared objects and shared collections** page. Encadrer les modifications sur les objets partagés et les collections partagées à l'aide des mots-clés `Use...End use` est obligatoire pour empêcher les accès concurrents entre les process.

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group (see **Using shared objects or collections**).
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **End use** line unlocks the _Shared_object_or_Shared_collection_ properties and all objects sharing the same locking identifier.
- Several **Use...End use** structures can be nested in the 4D code. Dans ce cas, tous les verrouillages sont empilés et les propriétés/éléments ne seront déverrouillé(e) s que lorsque le dernier appel de End use/Fin utiliser sera exécuté.

**Note:** If a collection method modifies a shared collection, an internal **Use** is automatically called for this shared collection while the function is executed.


## Exemple 1

Vous souhaitez lancer plusieurs process qui vont effectuer des tâches d'inventaire parmi différents produits et mettre à jour le même objet partagé. Le process principal instancie un objet partagé vide et ensuite lance les autres process, passant en paramètre l'objet partagé et les produits à comptabiliser :

```4d
 ARRAY TEXT($_items;0)
 ... //fill the array with items to count
 $nbItems:=Size of array($_items)
 C_OBJECT($inventory)
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Create processes
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory object sent by reference
 End for
```

Dans la méthode "HowMany", l'inventaire est effectué et l'objet partagé $inventory est mis à jour dès que possible :

```4d
 C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 //pour une meilleure lisibilité
 $inventory:=$2
 
 $count:=CountMethod($what) //méthode de comptage des produits
 Use($inventory) //Utiliser l'objet partagé
    $inventory[$what]:=$count  //stockage des résultats pour cet article
End use
```

## Exemple 2

Les exemples suivants illustrent les règles spécifiques à observer lorsque vous utilisez des groupes partagés :

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //un premier groupe est créé
  End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //un 2e groupe est créé
 End use

 Use($ob1) //Utilisation d'un objet du groupe 1
    $ob1.b:=$ob4  //ERREUR
  //$ob4 appartient déjà à un autre groupe
  //son assignation n'est pas permise
End use

 Use($ob3)
    $ob3.a:=Null //on enlève la référence de $ob4 du groupe 2
 End use

 Use($ob1) //Utilisation d'un objet du groupe 1
    $ob1.b:=$ob4  //ERREUR
  //$ob4 appartient toujours au groupe 2
  //son assignation n'est pas permise
 End use
```
