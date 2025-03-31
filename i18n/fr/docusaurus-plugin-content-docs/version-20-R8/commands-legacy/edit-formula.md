---
id: edit-formula
title: EDIT FORMULA
slug: /commands/edit-formula
displayed_sidebar: docs
---

<!--REF #_command_.EDIT FORMULA.Syntax-->**EDIT FORMULA** ( *laTable* ; *formule* )<!-- END REF-->
<!--REF #_command_.EDIT FORMULA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à afficher par défaut dans l’éditeur de formules |
| formule | Text | &#8594;  | Variable contenant la formule à afficher dans l’éditeur de formules ou "" pour uniquement afficher l’éditeur |
| &#8592; | Formule validée par l’utilisateur |

<!-- END REF-->

#### Description 

<!--REF #_command_.EDIT FORMULA.Summary-->La commande **EDIT FORMULA** affiche l’éditeur de formules afin de permettre à l’utilisateur d’écrire ou de modifier une formule.<!-- END REF--> L’éditeur contient à l'ouverture :

* dans la liste de gauche, les champs de la table désignée par le paramètre *laTable*,
* dans la zone de formule, la formule contenue dans la variable *formule*. Si vous avez passé une chaîne vide dans *formule*, l’éditeur est affiché sans formule.

L’utilisateur peut modifier la *formule* affichée et la sauvegarder. Il peut également en écrire ou en charger une nouvelle. Dans tous les cas, lorsque l’utilisateur valide la boîte de dialogue, la variable système OK prend la valeur 1 et la variable *formule* contient la formule définie. Si l’utilisateur annule la boîte de dialogue, la variable système OK prend la valeur 0 et *formule* est inchangée.

**Notes :**

* Par défaut, l'accès aux méthodes et aux commandes est restreint dans l'éditeur de formules pour tous les utilisateurs (sauf, dans les bases de données créées avec 4D 2004.4 et suivantes, pour le Super\_Utilisateur et l’Administrateur). Lorsque ce mécanisme est actif, vous devez explicitement désigner les éléments accessibles aux utilisateurs à l’aide de la commande [SET ALLOWED METHODS](../commands/set-allowed-methods.md). Si la formule fait appel à des méthodes qui n’ont pas été préalablement autorisées, une erreur de syntaxe est générée et il n’est pas possible de valider la boîte de dialogue.
* L'éditeur de formules n'est associé à aucune barre de menus par défaut. L'équivalent d'un menu **Edition** standard doit être installé dans le process appelant si vous souhaitez que l'utilisateur bénéficie des raccourcis couper / copier / coller dans l'éditeur de formules.
* La structure virtuelle éventuellement définie par les commandes [FIXER TITRES TABLES](set-table-titles.md) et FIXER TITRES CHAMPS(set-field-titles.md) ne doit pas être utilisée dans la variable *formule* - elle ne sera pas non plus utilisée par 4D dans la variable retournée. La structure virtuelle n'est utilisée que dans la boîte de dialogue de l'éditeur de formules. 


A noter qu’au moment de la validation de la boîte de dialogue, la commande n’exécute pas la *formule*, seul le contenu de la variable est validé et mis à jour. Si vous voulez exécuter la *formule*, vous devez utiliser la commande [EXECUTE FORMULA](execute-formula.md).

#### Exemple 

Affichage de l’éditeur avec la table \[Salaires\] et sans formule pré-saisie puis exécution de la formule sur la sélection courante :

```4d
 $maFormule:=""
 EDIT FORMULA([Salaires];$maFormule)
 If(OK=1)
    APPLY TO SELECTION([Salaires];EXECUTE FORMULA($maFormule))
 End if
```

#### Variables et ensembles système 

Si l’utilisateur valide la boîte de dialogue, la variable système OK prend la valeur 1\. Si l’utilisateur annule la boîte de dialogue, la variable système OK prend la valeur 0.

#### Voir aussi 

[APPLY TO SELECTION](apply-to-selection.md)  
[EXECUTE FORMULA](execute-formula.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 806 |
| Thread safe | &cross; |
| Modifie les variables | OK |


