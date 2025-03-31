---
id: spell-add-to-user-dictionary
title: SPELL ADD TO USER DICTIONARY
slug: /commands/spell-add-to-user-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Syntax-->**SPELL ADD TO USER DICTIONARY** ( *mots* )<!-- END REF-->
<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| mots | Text, Text array | &#8594;  | Mot ou liste de mots à ajouter au dictionnaire utilisateur |

<!-- END REF-->

#### Description 

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Summary-->La commande **SPELL ADD TO USER DICTIONARY** permet d’ajouter un ou plusieurs mot(s) au dictionnaire utilisateur courant.<!-- END REF--> 

Le dictionnaire utilisateur est un dictionnaire contenant les mots ajoutés par l’utilisateur au dictionnaire courant. Ce dictionnaire est un fichier nommé *UserDictionaryxxx.dic* (ou xxx représente l’ID du dictionnaire courant) et automatiquement créé dans le dossier 4D courant. Il existe un dictionnaire utilisateur par dictionnaire courant utilisé. 

Vous pouvez passer dans *mots* une chaîne texte ou un tableau texte contenant le ou les mot(s) à ajouter dans le dictionnaire utilisateur. Si un mot est déjà présent dans le dictionnaire, il est ignoré par la commande. 

#### Exemple 

Ajout de noms propres au dictionnaire utilisateur :

```4d
 ARRAY TEXT($tTwords;0)
 APPEND TO ARRAY($tTwords;"4D")
 APPEND TO ARRAY($tTwords;"Wakanda")
 APPEND TO ARRAY($tTwords;"Clichy")
 SPELL ADD TO USER DICTIONARY($tTwords)
```

#### Voir aussi 

[SPELL CHECK TEXT](spell-check-text.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1214 |
| Thread safe | &cross; |


