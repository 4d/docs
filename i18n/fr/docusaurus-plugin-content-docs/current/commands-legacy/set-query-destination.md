---
id: set-query-destination
title: SET QUERY DESTINATION
slug: /commands/set-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY DESTINATION.Syntax-->**SET QUERY DESTINATION** ( *destinationType* {; *destinationObjet* {; *destinationPtr*}} )<!-- END REF-->
<!--REF #_command_.SET QUERY DESTINATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| destinationType | Integer | &#8594;  | 0=sélection courante, 1=ensemble, 2=sélection temporaire, 3=variable |
| destinationObjet | Text, Variable | &#8594;  | Nom de l'ensemble ou Nom de la sélection temporaire ou Variable |
| destinationPtr | Pointer | &#8594;  | Pointeur vers la variable locale si destinationType=3 |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET QUERY DESTINATION.Summary-->La commande **SET QUERY DESTINATION** vous permet d'indiquer à 4D où placer les résultats de toutes les recherches qui suivent l'appel de cette commande dans le process courant.<!-- END REF-->

Vous spécifiez le type de la destination dans le paramètre *destinationType*. 4D fournit les constantes prédéfinies suivantes, placées dans le thème *Recherches* :

| Constante              | Type        | Valeur |
| ---------------------- | ----------- | ------ |
| Into current selection | Entier long | 0      |
| Into named selection   | Entier long | 2      |
| Into set               | Entier long | 1      |
| Into variable          | Entier long | 3      |

Vous spécifiez le nom de la destination de la recherche dans le paramètre optionnel *destinationObjet* en fonction du tableau suivant :

| **Paramètre destinationType** | **Paramètre** **destinationObjet**                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 0 (sélection courante)        | Vous ne passez pas de paramètre.                                                                                         |
| 1 (ensemble)                  | Vous passez le nom de l'ensemble (existant ou à créer)                                                                   |
| 2 (sélection temporaire)      | Vous passez le nom de la sélection temporaire (existante ou à créer)                                                     |
| 3 (variable)                  | Vous passez soit une variable numérique (existante), soit une chaîne vide "" pour utiliser le paramètre *destinationPtr* |

Avec

```4d
 SET QUERY DESTINATION(Into current selection)
```

Les enregistrements trouvés par la recherche seront placés dans la sélection courante de la table dans laquelle la recherche est effectuée.

Avec

```4d
 SET QUERY DESTINATION(Into set;"monEnsem")
```

Les enregistrements trouvés par la recherche seront placés dans l'ensemble *monEnsem*. La sélection courante et l'enregistrement courant de la table dans laquelle vous recherchez restent inchangés.

Avec

```4d
 SET QUERY DESTINATION(Into named selection;"maTemp")
```

Les enregistrements trouvés par la recherche seront placés dans la sélection temporaire *maTemp*. La sélection courante et l'enregistrement courant pour la table sur laquelle vous effectuez la recherche restent inchangés.

**Notes** : 

* Si la sélection temporaire n'existe pas avant l'appel, elle est automatiquement créée une fois la recherche effectuée.
* Cette commande gère les sélections temporaires comme la commande \[#cmd id="334"/\] : seules des références sont conservées. Une fois la sélection temporaire utilisée, elle n'existe plus.

Avec

```4d
 SET QUERY DESTINATION(Into variable;$vlRésultatRech)
```

**Note :** Avec cette syntaxe, la variable *$vlRésultatRech* doit avoir été définie préalablement, sinon une erreur est générée. 

Ou

```4d
 SET QUERY DESTINATION(Into variable;"";->$vlRésultatRech)
```

**Note :** Cette seconde syntaxe facilite l'utilisation conjointe de la commande avec [GET QUERY DESTINATION](get-query-destination.md). 

Le **nombre** d'enregistrements trouvés par la recherche sera placé dans la variable *$vlRésultatRech*. La sélection courante et l'enregistrement courant de la table dans laquelle vous effectuez la recherche restent inchangés.

**Attention :** **SET QUERY DESTINATION** affecte toutes les recherches suivantes dans le process courant. N'oubliez pas d'associer toujours un appel à **SET QUERY DESTINATION** (lorsque *destinationType#0*) à un appel à **SET QUERY DESTINATION**(0) ultérieur pour rétablir le mode standard de recherche.

**SET QUERY DESTINATION** modifie uniquement le comportement des commandes de recherche, c'est-à-dire :

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

En revanche, **SET QUERY DESTINATION** n'affecte pas les autres commandes qui modifient la sélection courante telles que [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md) , etc.

#### Exemple 1 

Vous créez un formulaire qui affiche les enregistrements de la table *\[Annuaire\]*. Vous créez un objet de type onglet nommé *asRolodex* (avec un onglet pour chaque lettre de l'alphabet) et un sous-formulaire qui affiche les enregistrements de la table *\[Annuaire\]*. En choisissant un onglet, vous affichez les enregistrements qui correspondent à cette lettre. Puisque, dans cet exemple, la table *\[Annuaire\]* contient des données statiques, vous ne voulez pas effectuer une recherche chaque fois que vous cliquez sur un onglet et donc vous dépensez moins de temps précieux à exécuter ces recherches. Pour faire ceci, vous pouvez placer vos recherches dans les sélections temporaires pour les réutiliser quand il le faut. Vous écrivez la méthode objet de l'onglet *asRolodex* comme indiquée ci-dessous :

```4d
  // Méthode objet de l'onglet asRolodex
 Case of
 
    :(FORM Event=On Load)
  // Avant que le formulaire s'affiche à l'écran,
  // initialiser l'onglet et le tableau de booléens qui nous indiquent
  // si une recherche pour la lettre sur laquelle vous avez cliqué
  // a été exécutée ou pas
       ARRAY STRING(1;asRolodex;26)
       ARRAY BOOLEAN(abRechFini;26)
       For($vlElém;1;26)
          asRolodex{$vlElém}:=Char(64+$vlElém)
          abRechFini{$vlElém}:=False
       End for
 
    :(FORM Event=On Clicked)
  // Lorsque l'utilisateur clique sur un onglet, vérifier si une recherche pour cette lettre
  // a été exécutée ou pas
       If(Not(abRechFini{asRolodex}))
  // Else, fixer la destination de la recherche vers une sélection temporaire
          SET QUERY DESTINATION(Into named selection;"temp")
  // Effectuer la recherche
          QUERY([Phone Book];[Phone Book]Last name=asRolodex{asRolodex}+"@")
  // Restituer le mode standard de recherche
          SET QUERY DESTINATION(Into current selection)
  // Use les enregistrements trouvés
          USE NAMED SELECTION("temp")
          COPY NAMED SELECTION([Phone Book];"Rolodex"+asRolodex{asRolodex})
  // La prochaine fois que cette lettre est choisie, la recherche ne sera pas exécutée
          abRechFini{asRolodex}:=True
       Else
  // Use la sélection temporaire existante pour l'affichage des enregistrements qui correspondent à cette lettre
          USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex})
       End if
 
    :(FORM Event=On Unload)
  // Après que le formulaire disparaît de l 'écran
  // Effacer les sélections temporaires de la mémoire
       For($vlElem;1;26)
          If(abRechFini{$vlElém})
             CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElém})
          End if
       End for
  // Effacer les deux tableaux dont nous n'avons pas besoin
       CLEAR VARIABLE(asRolodex)
       CLEAR VARIABLE(abRechFini)
 
 End case
```

#### Exemple 2 

La méthode ValeursUniques suivante vérifie si les valeurs sont uniques pour des champs dans une table de votre choix. L'enregistrement courant peut déjà exister ou vient d'être créé. 

```4d
  // Méthode projet ValeursUniques
  // ValeursUniques ( Pointeur ; Pointeur { ; Pointeur... } ) -> Booléen
  // ValeursUniques ( ->Table ; ->Champ { ; ->Champ2... } ) -> Oui ou non
 
 var $0 : Boolean
 var ${1} : Pointer
 var $vlChamp;$vlNmbChamps;$vlTrouvé;$vlEnregCour : Integer
 $vlNmbChamps:=Count parameters-1
 $vlEnregCour:=Record number($1->)
 If($vlNmbChamps>0)
    If($vlEnregCour#-1)
       If($vlEnregCour<0)
  // Il s'agit d'un nouvel enregistrement qui n'a pas été sauvegardé (numéro d'enregistrement est
  // égal à -3)
  // donc nous pouvons arrêter la recherche dès que nous avons trouvé un enregistrement
          SET QUERY LIMIT(1)
       Else
  // Il s'agit d'un enregistrement existant, donc nous pouvons arrêter
  // la recherche dès que nous avons trouvé au moins deux enregistrements
          SET QUERY LIMIT(2)
       End if
  // La recherche retournera le résultat dans la variable $vlTrouvé
  // sans changer l'enregistrement courant ni la sélection courante
       SET QUERY DESTINATION(Into variable;$vlTrouvé)
  // Construire la recherche selon le nombre de champs spécifiés
       Case of
          :($vlNmbChamps=1)
             QUERY($1->;$2->=$2->)
          :($vlNmbChamps=2)
             QUERY($1->;$2->=$2->;*)
             QUERY($1->; & ;$3->=$3->)
          Else
             QUERY($1->;$2->=$2->;*)
             For($vlChamp;2;$vlNmbChamps-1)
                QUERY($1->; & ;${1+$vlChamp}->=${1+$vlChamp}->;*)
             End for
             QUERY($1->; & ;${1+$vlNmbChamps}->=${1+$vlNmbChamps}->)
       End case
       SET QUERY DESTINATION(0) // Rétablir le mode standard de recherche
       SET QUERY LIMIT(0) // Enlever la limite sur la recherche
  // Traiter le résultat de la recherche
       Case of
          :($vlTrouvé=0)
             $0:=True  // Pas de valeurs dupliquées
          :($vlTrouvé=1)
             If($vlEnregCour<0)
                $0:=False // Trouvé un enregistrement existant avec les mêmes valeurs que le nouveau
             Else
                $0:=True  // Pas de valeurs dupliquées, nous avons trouvé le même enregistrement
             End if
          :($vlTrouvé=2)
             $0:=False   // Quoi que ce soit, les valeurs sont dupliquées
       End case
    Else
       If(◊Débogage)   // Cela n'a aucun sens, signalez-le pendant le développement de la base
          TRACE   // ATTENTION ! Cette méthode a été appelée sans enregistrement courant
       End if
       $0:=False   // Ne peut pas garantir le résultat
    End if
 Else
    If(◊Débogage)   // Cela n'a aucun sens, signalez-le pendant le développement de la base
       TRACE   // ATTENTION ! Cette méthode a été appelée sans conditions de recherche
    End if
    $0:=False   // Ne peut pas garantir le résultat
 End if
```

Lorsque cette méthode est implémentée dans votre application, vous pouvez écrire le code suivant :

```4d
  // ...
 If(ValeursUniques(->[Contacts];->[Contacts]Société;->[Contacts]Nom;->[Contacts]Prénom))
  // Traitement de l'enregistrement qui a les valeurs uniques
 Else
    ALERT("Il existe déjà un contact avec ce nom pour cette société.")
 End if
  // ...
```

#### Voir aussi 

[GET QUERY DESTINATION](get-query-destination.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY LIMIT](set-query-limit.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 396 |
| Thread safe | &check; |
| Interdite sur le serveur ||


