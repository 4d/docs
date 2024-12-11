---
id: get-edited-text
title: Get edited text
slug: /commands/get-edited-text
displayed_sidebar: docs
---

<!--REF #_command_.Get edited text.Syntax-->**Get edited text**  : Text<!-- END REF-->
<!--REF #_command_.Get edited text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Texte en cours de saisie |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get edited text.Summary-->La commande **Get edited text** retourne le texte en cours de saisie dans un objet de formulaire.<!-- END REF--> 

Cette commande est principalement destinée à être utilisée avec l'événement formulaire On After Keystroke pour récupérer le texte au fur et à mesure de la frappe. Elle peut également être utilisée avec l’événement formulaire On After Keystroke.

La combinaison de cette commande avec les événements formulaire On Before Keystroke et On After Keystroke fonctionne de la manière suivante : 

* Dès qu’un caractère est tapé au clavier, l’événement On Before Keystroke est généré. Dans cet événement, la fonction **Get edited text** retourne le contenu de la zone avant la dernière frappe clavier. Par exemple, si la zone contient “PA” et que l’utilisateur tape “R”, **Get edited text** retourne “PA” dans l’événement On Before Keystroke. Si la zone ne contient rien au départ, **Get edited text** retourne une chaîne vide.
* Ensuite, l'événement formulaire On After Keystroke est généré. Dans cet événement, la fonction **Get edited text** retourne le contenu de la zone y compris le dernier caractère entré au clavier. Par exemple, si la zone contient “PA” et que l’utilisateur tape “R”, **Get edited text** retourne “PAR” dans l’événement On After Keystroke.

Ces deux événements ne sont générés que dans les méthodes des objets concernés. 

Dans un contexte autre que la saisie dans un formulaire, cette fonction retourne une chaîne vide.

#### Exemple 1 

Dans un formulaire entrée, vous souhaitez que les caractères saisis soient automatiquement mis en majuscules : 

```4d
 If(Form event code=On After Edit)
    [Voyages]Agences:=Uppercase(Get edited text)
 End if
```

#### Exemple 2 

Voici un exemple de traitement à la volée des caractères saisis dans un champ texte. Le principe consiste à placer dans un autre champ texte (appelé “Mots”) la décomposition en mots de la phrase en cours de saisie. Pour cela, écrivez dans la méthode objet du champ de saisie :

```4d
 If(FORM Event=On After Keystroke)
    $SaisieTempsRéel:=Get edited text
    PLATFORM PROPERTIES($plate_forme)
    If($plate_forme#3) // Macintosh ou Power Macintosh
       Repeat
          $PhraseDécomposée:=Replace string($SaisieTempsRéel;Char(32);Char(13))
       Until(Position(" ";$PhraseDécomposée)=0)
    Else // Windows
       Repeat
          $PhraseDécomposée:=Replace string($SaisieTempsRéel;Char(32);
          Char(13)+Char(10))
       Until(Position(" ";$PhraseDécomposée)=0)
    End if
    [Exemple]Mots:=$PhraseDécomposée
 End if
```

**Note :** Cet exemple n’est pas exhaustif puisque l’on considère que les mots sont séparés par des espaces uniquement ([Char](char.md)(32)). La mise au point d’un système complet nécessiterait l’ajout d’autres filtres afin de repérer tous les mots (point-virgules, virgules, apostrophes, etc...).

#### Voir aussi 

[Form event code](../commands/form-event-code.md)  
[Is editing text](is-editing-text.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 655 |
| Thread safe | &check; |
| Interdite sur le serveur ||


