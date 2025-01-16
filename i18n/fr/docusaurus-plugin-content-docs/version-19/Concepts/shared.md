---
id: shared
title: Objets et collections partagés
---

**Les objets partagés** et **les collections partagées** sont des [objets](Concepts/dt_object.md) et des [collections](Concepts/dt_collection.md) spécifiques dont le contenu est partagé entre les process. Comparés aux [Variables interprocess](Concepts/variables.md#interprocess-variables), les objets partagés et les collections partagées ont l'avantage d'être compatibles avec les **process 4D préemptifs** : il peuvent être passés en paramètres (par référence) aux commandes telles que `New process` ou `CALL WORKER`.

Les objets et les collections partagés peuvent être stockés dans des variables de type `Object` et `Collection` standard, mais doivent être instanciés à l'aide de commandes spécifiques :

- pour créer un objet partagé, utilisez la commande [`New shared object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html),
- pour créer une collection partagée, utilisez la commande [`New shared collection`](../API/CollectionClass.md#new-shared-collection).

:::note

Les objets et collections partagés peuvent être définis comme des propriétés d'objets ou de collections standard (non partagés).

:::

Toute modification d'un objet/d'une collection partagé(e) doit s'effectuer à l'intérieur d'une structure **Use...End use**. La lecture d'une valeur d'objet/collection ne nécessite pas de structure **Use...End use**.

Un catalogue unique et global, retourné par la commande `Storage`, est disponible à tout moment et depuis tout process de l'application et de ses composants.

## Utilisation des objets et collections partagés

Une fois instanciés à l'aide des commandes `New shared object` ou `New shared collection`, les objets partagés et les collections partagées peuvent être modifiés et lus depuis n'importe quel process de l'application, sous certaines conditions.

### Modification

Les modifications suivantes peuvent être effectuées sur les objets partagés et les collections partagées :

- ajout ou suppression de propriétés d'objets,
- ajout ou modification de valeurs (prises en charge par les objets/collections partagé(e) s), y compris d'autres objets et collections partagé(s) (ce qui crée un groupe partagé, cf. ci-dessous).

Toute instruction de modification dans un objet partagé ou une collection partagée doit être protégée à l'intérieur d'un bloc \[`Use...End use`\](#use-end-use), sinon une erreur est générée.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
End Use
```

Pour plus de commodité, toutes les \[fonctions de collection\](../API/CollectionClass.md) qui modifient l'objet partagé ou la collection partagée insèrent un bloc interne `Use...End use` afin que vous n'ayez pas à le coder vous-même. Par exemple :

```4d
$col:=New shared collection()
$col.push("alpha") //.push() déclenche automatiquement Use/End use, donc pas besoin de le faire vous-même
```

Si vous avez besoin d'exécuter plusieurs modifications sur la même collection, vous pouvez protéger toutes les modifications avec un unique `Use...End use` afin que les modifications soient effectuées de manière atomique.

```4d
$col:=Storage.mySharedCollection
Use($col)
	$col[0]:="omega" //La modification d'un élément nécessite d'être effectuée dans Use/End use
	$col.push("alpha") //.push() déclenche en interne Use/End use, mais nous voulons faire les deux modifications de façon atomique
End use
```

Un objet/une collection partagé(e) ne peut être modifié(e) que par un seul process à la fois. `Use` verrouille l'objet/la collection partagé(e) pour les autres threads, tandis que `End use` déverrouille l'objet/la collection partagé(e) (si le compteur de verrouillage est à 0, voir ci-dessous). . Toute tentative de modification d'un objet/d'une collection partagé(e) sans au moins un appel à `Use...End use` génère une erreur. Lorsqu'un process appelle `Use...End use` avec un objet/une collection partagé(e) qui est déjà "utilisé(e)" par un autre process, il est simplement mis en attente jusqu'à ce qu'il soit déverrouillé par l'appel à `End use` (aucune erreur n'est générée). En conséquence, les instructions situées à l'intérieur des structures `Use...End use` doivent toujours s'exécuter rapidement et déverrouiller les éléments dès que possible. Il est donc fortement déconseillé de modifier un objet ou une collection partagé(e) directement depuis l'interface, par exemple depuis une boîte de dialogue.

L'assignation d'objets/collections partagé(e) s à des propriétés ou éléments d'autres objets/collections partagé(e) s est autorisée et entraîne la création de **groupes partagés**. Un groupe partagé est automatiquement créé lorsqu'un objet ou une collection partagé(e) est assigné(e) en tant que valeur de propriété ou élément à un autre objet ou collection partagé(e). Les groupes partagés permettent d'imbriquer des objets et collections partagé(e)s mais nécessitent d'observer des règles supplémentaires :

- L'appel de `Use` avec un(e) objet/collection partagé(e) appartenant à un groupe provoquera le verrouillage des propriétés/éléments de tous/toutes les objets/collections partagé(e) s du groupe et incrémente son compteur de verrouillage. L'appel à `End use` décrémente le compteur de verrouillage du groupe et lorsque le compteur est à 0, tous les objets ou collections partagés partagés sont déverrouillés.
- Un objet ou une collection partagé(e) peut appartenir à un seul groupe partagé. Une erreur est générée si vous tentez d'assigner un objet ou une collection appartenant déjà à un groupe à un groupe différent.
- Les objets/collections groupé(e)s ne peuvent plus être dégroupé(e)s. Une fois inclus dans un groupe partagé, un objet ou une collection partagé(e) est lié(e) définitivement au groupe pendant toute la durée de la session. Même si toutes les références de l'objet/la collection sont supprimé(e)s des objets/collections parent(e)s, ils resteront liés.

Reportez-vous à l'exemple 2 pour l'illustration des règles des groupes partagés.

### Lecture

La lecture de propriétés ou d'éléments d'un objet ou d'une collection partagé(e) est possible sans appel de la structure `Use...End use`, même si l'objet ou la collection partagé(e) est "utilisé(e)" par un autre process.

Cependant, lorsque plusieurs valeurs sont interdépendantes et doivent être lues simultanément, il est nécessaire d'encadrer l'accès en lecture par une structure `Use...End use` pour des raisons de cohérence.

### Duplication

Appeler `OB Copy` avec un objet partagé (ou avec un objet dont des propriétés sont des objets partagés) est possible, mais dans ce cas un objet standard (non partagé) est retourné.

### Storage

**Storage** est un objet partagé unique, disponible automatiquement pour chaque application et machine. Cet objet partagé est renvoyé par la commande [`Storage`](https://doc.4d.com/4dv19R/help/command/en/page1525.html) . Il est destiné à référencer les objets ou collections partagé(e)s défini(e)s durant la session que vous souhaitez rendre accessibles à tous les process, préemptifs ou standard.

A noter que, à la différence de objets partagés standard, l'objet `Storage` ne crée par de groupe partagé lorsque des objets/collection lui sont assigné(e)s en tant que propriétés. Cette exception permet à l'objet **Storage** d'être utilisé sans verrouiller les objets/collections partagé(e)s connecté(e)s.

Pour plus d'informations, reportez-vous à la description de la commande `Storage`.

## Use...End use

La syntaxe de la structure `Use...End use` est la suivante :

```4d
 Use(Shared_object_or_Shared_collection)
    instruction(s)
 End use
```

La structure `Use...End use` définit une séquence d'instructions qui exécutera des tâches sur le paramètre *Shared_object_or_Shared_collection* sous la protection d'un sémaphore interne. *Shared_object_or_Shared_collection* peut être tout objet partagé ou collection partagée valide.

Les objets partagés et les collections partagées permettent d'établir des communications entre les process, en particulier les **process 4D préemptifs**. Ils peuvent être passés par référence en paramètre d'un process à un autre. Encadrer les modifications d'objets partagés et de collections partagées à l'aide des mots-clés `Use...End use` est obligatoire pour empêcher les accès concurrents entre les process.

- Une fois que la ligne **Use** est exécutée avec succès, toutes les propriétés/éléments de _Shared_object_or_Shared_collection_ sont verrouillé(e)s en écriture pour tous les autres process jusqu'à ce que la ligne `End use` correspondante soit exécutée.
- La séquence d'_instructions_ peut alors effectuer toute modification dans les propriétés/éléments de Shared_object_or_Shared_collection sans risque d'accès concurrent.
- Si un autre objet ou une autre collection partagé(e) est ajouté(e) en tant que propriété du paramètre _Shared_object_or_Shared_collection_, ils deviennent connectés au sein du même groupe partagé.
- Si un autre process tente d'accéder à une propriété de _Shared_object_or_Shared_collection_ ou une propriété connectée alors qu'une séquence **Use...End use** est en cours d'exécution sur le même Shared_object_or_Shared_collection, il est automatiquement placé en attente et attendra jusqu'à ce que la séquence courante soit terminée.
- La ligne **End use** déverrouille les propriétés de _Shared_object_or_Shared_collection_ et tous les objets du même groupe.
- Plusieurs structures **Use...End use** peuvent être imbriquées dans le code 4D. Toute modification d'un objet/d'une collection partagé(e) doit s'effectuer à l'intérieur d'une structure **Use...End use**.

:::note

N'oubliez pas que les [fonctions de collection](../API/CollectionClass.md) qui modifient les collections partagées déclenchent automatiquement un **Use** interne pour cette collection partagée pendant l'exécution de la fonction.

:::

## Exemple 1

Vous souhaitez lancer plusieurs process qui vont effectuer des tâches d'inventaire parmi différents produits et mettre à jour le même objet partagé. Le process principal instancie un objet partagé vide et ensuite lance les autres process, passant en paramètre l'objet partagé et les produits à comptabiliser :

```4d
 ARRAY TEXT($_items;0)
 ... //remplir le tableau avec les éléments à compter
 $nbItems:=Size of array($_items)
  var $inventory : Object
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Créer des process
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  // objet $inventory envoyé par référence
 End for
```

Dans la méthode "HowMany", l'inventaire est effectué et l'objet partagé $inventory est mis à jour dès que possible :

```4d
    	//HowMany
 #DECLARE ($what : Text ; $inventory : Object)

 $count:=CountMethod($what) //méthode pour compter les produits
 Use($inventory) //utiliser l'objet partagé
    $inventory[$what]:=$count  //sauvegarder les résultats pour cet élément
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
