---
id: spell-checking
title: SPELL CHECKING
slug: /commands/spell-checking
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECKING.Syntax-->**SPELL CHECKING**<!-- END REF-->
<!--REF #_command_.SPELL CHECKING.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.SPELL CHECKING.Summary-->La commande **SPELL CHECKING** déclenche la vérification de l’orthographe du champ ou de la variable ayant le focus dans le formulaire affiché à l’écran.<!-- END REF--> L’objet vérifié doit être de type Alpha ou Texte.

**Note :** Si vous souhaitez déclencher la correction orthographique à partir d’un bouton dans le formulaire, assurez-vous qu’il ne dispose pas de la propriété “Focusable”.

La vérification débute par le premier mot du champ ou de la variable. Si un mot inconnu est détecté, la boîte de dialogue de correction apparaît (pour plus d’informations, reportez-vous au manuel Mode Développement de 4D). 4D utilise le dictionnaire courant (correspondant à la langue de l’application) sauf si vous avez utilisé la commande [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).

**Attention :** La commande **SPELL CHECKING** agit sur le texte en cours de saisie dans le formulaire, et non sur sa source de données associée (variable ou champ). Ce principe implique que si la commande est appelée depuis les événements formulaire On Data Change ou On Losing Focus (non recommandé), elle n'aura pas d'effet sur le texte stocké car à ce moment, 4D a déjà assigné le texte saisi à la source de données. Dans ce cas, vous devez alors assigner vous-même le résultat modifié à la source de données, via la commande [Get edited text](get-edited-text.md). Par exemple :  

```4d
 If(Form event code=Sur données modifiées)
    SPELL CHECKING
    theVariable:=Get edited text
 End if
```

#### Voir aussi 

[SPELL CHECK TEXT](spell-check-text.md)  
[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 900 |
| Thread safe | &check; |
| Interdite sur le serveur ||


