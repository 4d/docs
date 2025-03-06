---
id: display-record
title: DISPLAY RECORD
slug: /commands/display-record
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY RECORD.Syntax-->**DISPLAY RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.DISPLAY RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle afficher l'enregistrement courant ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISPLAY RECORD.Summary-->**DISPLAY RECORD** affiche l'enregistrement courant de *laTable* dans le formulaire entrée courant.<!-- END REF--> L'enregistrement reste affiché jusqu'à ce qu'un événement provoque un redessinement de la fenêtre. Cet événement peut être l'exécution d'un [ADD RECORD](add-record.md), le retour au formulaire entrée ou à la barre de menus. **DISPLAY RECORD** ne fait rien s'il n'y a pas d'enregistrement courant.

**DISPLAY RECORD** est souvent utilisé pour afficher des messages de progression personnalisés. Cette commande peut également servir à générer un "slide show" automatique. 

Si une méthode formulaire existe, un événement On Load est généré.

#### Exemple 

L'exemple suivant affiche une série d'enregistrements sous forme de slide show :

```4d
 ALL RECORDS([Démo]) // Sélection de tous les enregistrements
 FORM SET INPUT([Démo];"Affichage") // Désignation du formulaire à utiliser
 For($i;1;Records in selection([Démo])) // Boucle sur tous les enregistrements
    DISPLAY RECORD([Démo]) // Afficher un enregistrement
    DELAY PROCESS(Current process;180) // 3 secondes de pause
    NEXT RECORD([Démo]) // Passage à l'enregistrement suivant
 End for
```

#### Voir aussi 

[MESSAGE](message.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 105 |
| Thread safe | &cross; |


