---
id: clear-variable
title: CLEAR VARIABLE
slug: /commands/clear-variable
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR VARIABLE.Syntax-->**CLEAR VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.CLEAR VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Nom de la variable à effacer |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR VARIABLE.Summary-->**CLEAR VARIABLE** réinitialise *variable* à la valeur par défaut de son type (par exemple chaîne vide pour les types Texte, 0 — zéro — pour les variables numériques, aucun élément pour un tableau etc.).<!-- END REF--> La variable existe toujours en mémoire.

**Note :** Pour plus d'informations sur les valeurs par défaut du type, veuillez consulter le paragraphe *Valeurs par défaut*.

La variable passée dans *variable* peut être une variable locale, process ou interprocess.

**Note :** Il n'est pas nécessaire d'effacer les variables process à la fin de l'exécution d'un process, 4D s'en charge automatiquement. De même, chaque variable locale est automatiquement effacée à la fin de l'exécution de la méthode dans laquelle elle a été créée.

#### Exemple 

Dans un formulaire, vous utilisez une liste déroulante appelée *asMalListeD* n'ayant qu'un rôle d'interface utilisateur. Autrement dit, vous exploitez ce tableau lors de la saisie de données, mais une fois que le formulaire est refermé, vous n'en avez plus besoin. Par conséquent, lors de l'événement On Unload, vous effacez simplement le tableau :

```4d
  // Méthode objet liste déroulante asMalListeD
 Case of
    :(Form event code=On Load)
  // Initialiser le tableau comme vous le souhaitez...
       ARRAY TEXT(63;asMalListeD;...)
  // ...
    :(Form event code=Sur libération)
  // Vous n'avez plus besoin du tableau
       CLEAR VARIABLE(asMalListeD)
  // ...
 End case
```

#### Voir aussi 

[Undefined](undefined.md)  