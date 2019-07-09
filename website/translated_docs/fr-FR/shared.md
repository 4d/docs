---
id: shared
title: Objets et collections partagés
---

## Aperçu

**Les objets partagés** et **les collections partagées** sont des [objets](Concepts/dt_object.md) et des [collections](Concepts/dt_collection.md) spécifiques dont le contenu est partagé entre les process. Comparés aux [Variables interprocess](Concepts/variables.md#interprocess-variables), les objets partagés et les collections partagées ont l'avantage d'être compatibles avec les **Process 4D préemptifs** : il peuvent être passés en paramètres (par référence) aux commandes telles que `Nouveau process` ou `APPELER WORKER`.

Les objets partagés et les collections partagées peuvent être stockés dans des variables déclarées à l'aide des commandes standard `C_OBJET` et `C_COLLECTION`, mais doivent être instanciées à l'aide de commandes spécifiques :

- pour créer un objet partagé, utilisez la commande `Creer objet partage`,
- pour créer une collection partagée, utilisez la commande `Creer collection partagee`.

**Note :** Des objets partagés et des collections partagées peuvent être définis comme propriétés d'objets/éléments de collections standard (non partagés).

Toute modification d'un objet/d'une collection partagé(e) doit s'effectuer à l'intérieur d'une structure **Utiliser...Fin utiliser**. La lecture d'une valeur d'objet/collection ne nécessite pas de structure **Utiliser...Fin utiliser**.

Un catalogue unique et global, retourné par la commande `Storage`, est disponible à tout moment et depuis tout process de la base et de ses composants.

## Utilisation des objets et collections partagés

Une fois instanciés à l'aide des commandes `Creer objet partage` ou `Creer collection partagee`, les objets partagés et les collections partagées peuvent être modifiés et lus depuis n'importe quel process.

### Modification

Les modifications suivantes peuvent être effectuées sur les objets partagés et les collections partagées :

- ajout ou suppression de propriétés d'objets,
- ajout ou modification de valeurs (prises en charge par les objets/collections partagé(e) s), y compris d'autres objets et collections partagé(s) (ce qui crée un groupe partagé, cf. ci-dessous).

Toute instruction de modification d'objet ou de collection partagé(e) doit être encadrée par les mots-clés `Utiliser...Fin utiliser`, sinon une erreur est générée.

```code4d
 $s_obj:=Creer objet partage("prop1";"alpha")
 Utiliser($s_obj)
    $s_obj.prop1:="omega"
 Fin utiliser
```

Un objet/une collection partagé(e) ne peut être modifié(e) que par un seul process à la fois. `Use/Utiliser` verrouille les propriétés de l'objet/la collection pour les autres threads (process), alors que le `End use/Fin` utiliser final déverrouille tous les objets et collections. Toute tentative de modification d'un objet/d'une collection partagé(e) sans au moins un appel à `Utiliser...Fin utiliser` génère une erreur. Lorsqu'un process appelle `Utiliser...Fin utiliser` avec un objet/une collection partagé(e) qui est déjà "utilisé(e)" par un autre process, il est simplement mis en attente jusqu'à ce qu'il soit déverrouillé par l'appel à `End use/Fin utiliser` (aucune erreur n'est générée). En conséquence, les instructions situées à l'intérieur des structures `Utiliser...Fin utiliser` doivent toujours s'exécuter rapidement et déverrouiller les éléments dès que possible. Il est donc fortement déconseillé de modifier un objet ou une collection partagé(e) directement depuis l'interface, par exemple depuis une boîte de dialogue.

L'assignation d'objets/collections partagé(e) s à des propriétés ou éléments d'autres objets/collections partagé(e) s est autorisée et entraîne la création de **groupes partagés**. Un groupe partagé est automatiquement créé lorsqu'un objet ou une collection partagé(e) est assigné(e) en tant que valeur de propriété ou élément à un autre objet ou collection partagé(e). Les groupes partagés permettent d'imbriquer des objets et collections partagé(e)s mais nécessitent d'observer des règles supplémentaires :

- L'appel de `Utiliser/Use` avec un objet/une collection partagé(e) appartenant à un groupe provoquera le verrouillage des propriétés/éléments de tous les objets/collections du groupe.
- Un objet ou une collection partagé(e) peut appartenir à un seul groupe partagé. Une erreur est générée si vous tentez d'assigner un objet ou une collection appartenant déjà à un groupe à un groupe différent.
- Les objets/collections groupé(e) s ne peuvent plus être dégroupé(e) s. Une fois inclus dans un groupe partagé, un objet ou une collection partagé(e) est lié(e) définitivement au groupe pendant toute la durée de la session. Même si toutes les références de l'objet/la collection sont supprimé(e) s des objets/collections parent(e) s, ils resteront liés. 

Reportez-vous à l'exemple 2 pour l'illustration des règles des groupes partagés.

**Note :** Les groupes partagés sont gérés via une propriété interne nommée *locking identifier*. Si vous avez besoin de plus d'informations sur les mécanismes utilisés, reportez-vous au manuel Mode Développement de 4D.

### Lecture

La lecture de propriétés ou d'éléments d'un objet ou d'une collection partagé(e) est possible sans appel de la structure `Utiliser...Fin utiliser`, même si l'objet ou la collection partagé(e) est "utilisé(e)" par un autre process.

Cependant, lorsque plusieurs valeurs sont interdépendantes et doivent être lues simultanément, il est nécessaire d'encadrer l'accès en lecture par une structure `Utiliser...Fin utiliser` pour des raisons de cohérence.

### Duplication

Appeler `OB Copier` avec un objet partagé (ou avec un objet dont des propriétés sont des objets partagés) est possible, mais dans ce cas un objet standard (non partagé) est retourné.

### Storage

**Storage** est un objet partagé unique, disponible automatiquement pour chaque application et machine. Cet objet partagé est retourné par la commande `Storage`. Il est destiné à référencer les objets ou collections partagé(e)s défini(e)s durant la session que vous souhaitez rendre accessibles à tous les process, préemptifs ou standard. 

A noter que, à la différence de objets partagés standard, l'objet `Storage` ne crée par de groupe partagé lorsque des objets/collection lui sont assigné(e) s en tant que propriétés. Cette exception permet à l'objet **Storage** d'être utilisé sans verrouiller les objets/collections partagé(e) s connecté(e) s.

Pour plus d'informations, reportez-vous à la description de la commande `Storage`.

## Utiliser...Fin utiliser

La syntaxe de la structure `Utiliser...Fin utiliser` est la suivante :

```code4d
 Utiliser(Objet_partagé_ou_Collection_partagée)
    instruction(s)
 Fin utiliser
```

La structure `Utiliser...Fin utiliser` définit une séquence d'instructions qui exécutera des tâches sur le paramètre *Objet_partagé_ou_Collection_partagée* sous la protection d'un sémaphore interne. *Objet_partagé_ou_Collection_partagée* peut être tout objet partagé ou collection partagée valide.

Les objets partagés et les collections partagées permettent d'établir des communications entre les process, en particulier les **Process 4D préemptifs**. Ils peuvent être passés par référence en paramètre d'un process à un autre. Pour plus de détails sur les objets partagés et les collections partagées, reportez-vous à la page **Objets et collections partagés**. Encadrer les modifications sur les objets partagés et les collections partagées à l'aide des mots-clés `Utiliser...Fin utiliser` est obligatoire pour empêcher les accès concurrents entre les process.

- Une fois que la ligne **Use/Utiliser** est exécutée avec succès, toutes les propriétés/éléments de *Objet_partagé_ou_Collection_partagée* sont verrouillé(e) s en écriture pour tous les autres process jusqu'à ce que la ligne `End use/Fin` utiliser correspondante soit éxécutée.
- La séquence *d'instructions* peut alors effectuer toute modification dans les propriétés/éléments de Objet_partagé_ou_Collection_partagée sans risque d'accès concurrent.
- Si un autre objet ou collection partagé(e) est ajouté(e) en tant que propriété du paramètre *Objet_partagé_ou_Collection_partagée*, il ou elle devient connecté(e) et appartiennent au même groupe partagé (cf.** Utilisation des objets et collections partagés**).
- Si un autre process tente d'accéder à une propriété de *Objet_partagé_ou_Collection_partagée* ou une propriété connectée alors qu'une séquence **Utiliser...Fin** utiliser est en cours d'exécution sur le même Objet_partagé_ou_Collection_partagée, il est automatiquement placé en attente et attendra jusqu'à ce que la séquence courante soit terminée. 
- La ligne **End use/Fin** utiliser déverrouille les propriétés de *Objet_partagé_ou_Collection_partagée* et tous les objets qui partagent le même locking identifier.
- Plusieurs structures **Utiliser...Fin** utiliser peuvent être imbriquées dans le code 4D. Dans ce cas, tous les verrouillages sont empilés et les propriétés/éléments ne seront déverrouillé(e) s que lorsque le dernier appel de End use/Fin utiliser sera exécuté. 

**Note :** Si une fonction membre d'une collection modifie une collection partagée, un **Utiliser** interne est automatiquement mis en place pour cette collection partagée durant l'exécution de la fonction.

## Exemple 1

Vous souhaitez lancer plusieurs process qui vont effectuer des tâches d'inventaire parmi différents produits et mettre à jour le même objet partagé. Le process principal instancie un objet partagé vide et ensuite lance les autres process, passant en paramètre l'objet partagé et les produits à comptabiliser :

```code4d
 TABLEAU TEXTE($_items;0)
 ... //remplit le tableau avec les éléments à compter
 $nbItems:=Taille tableau($_items)
 C_OBJET($inventory)
 $inventory:=Creer objet partage
 Utiliser($inventory)
    $inventory.nbItems:=$nbItems
 Fin utiliser
 
  //Créer process
 Boucle($i;1;$nbItems)
    $ps:=Nouveau process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  //l'objet partagé $inventory est passé par référence
 Fin de boucle
```

Dans la méthode "HowMany", l'inventaire est effectué et l'objet partagé $inventory est mis à jour dès que possible :

```code4d
 C_TEXTE($1)
 C_TEXTE($what)
 C_OBJET($2)
 C_OBJET($inventory)
 $what:=$1 //pour une meilleure lisibilité
 $inventory:=$2
 
 $count:=CountMethod($what) //méthode de comptage des produits
 Utiliser($inventory) //Utiliser l'objet partagé
    $inventory[$what]:=$count  //stockage des résultats pour cet article
 Fin utiliser
```

## Exemple 2

Les exemples suivants illustrent les règles spécifiques à observer lorsque vous utilisez des groupes partagés :

```code4d
 $ob1:=Creer objet partage
 $ob2:=Creer objet partage
 Utiliser($ob1)
    $ob1.a:=$ob2  //un premier groupe est créé
 Fin utiliser
 
 $ob3:=Creer objet partage
 $ob4:=Creer objet partage
 Utiliser($ob3)
    $ob3.a:=$ob4  //un 2e groupe est créé
 Fin utiliser
 
 Utiliser($ob1) //Utilisation d'un objet du groupe 1
    $ob1.b:=$ob4  //ERREUR
  //$ob4 appartient déjà à un autre groupe
  //son assignation n'est pas permise
 Fin utiliser
 
 Utiliser($ob3)
    $ob3.a:=Null //on enlève la référence de $ob4 du groupe 2
 Fin utiliser
 
 Utiliser($ob1) //Utilisation d'un objet du groupe 1
    $ob1.b:=$ob4  //ERREUR
  //$ob4 appartient toujours au groupe 2
  //son assignation n'est pas permise
 Fin utiliser
```