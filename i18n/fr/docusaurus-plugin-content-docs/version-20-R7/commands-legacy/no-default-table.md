---
id: no-default-table
title: NO DEFAULT TABLE
slug: /commands/no-default-table
displayed_sidebar: docs
---

<!--REF #_command_.NO DEFAULT TABLE.Syntax-->**NO DEFAULT TABLE**<!-- END REF-->
<!--REF #_command_.NO DEFAULT TABLE.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.NO DEFAULT TABLE.Summary-->La commande **NO DEFAULT TABLE** permet d’annuler l’effet de la commande [DEFAULT TABLE](default-table.md).<!-- END REF--> Après l’exécution de cette commande, il n’y a plus de table par défaut définie pour le process.   
Si la commande [DEFAULT TABLE](default-table.md) n’avait pas été appelée au préalable, cette commande ne fait rien.

Cette commande est liée à l'utilisation de formulaires projets (formulaires non liés à des tables) : la plupart des commandes relatives aux formulaires (hors formulaires utilisateurs) acceptent un paramètre facultatif de type table comme premier paramètre. C’est par exemple le cas des commandes *\_o\_FORM GET PARAMETER*, [Open form window](open-form-window.md) ou [DIALOG](dialog.md). Comme un formulaire projet et un formulaire table peuvent avoir le même nom, ce paramètre permet de déterminer le formulaire à utiliser : passez le paramètre lorsque vous souhaitez adresser un formulaire table et ne le passez pas dans le cas d’un formulaire projet.  
Dans une base contenant un formulaire projet nommé “LeForm” et un formulaire table du même nom pour la table \[Table1\] :

```4d
 DIALOG([Table1];"LeForm") //4D utilise le formulaire table
 DIALOG("LeForm") //4D utilise le formulaire projet
```

Ce principe est toutefois caduc lorsque la commande [DEFAULT TABLE](default-table.md) a été exécutée et que la base contient un formulaire projet et un formulaire table du même nom. En effet, dans ce cas 4D utilisera le formulaire table de la table par défaut, même si le paramètre *laTable* n’est pas passé. Dans ce cas, pour permettre l’utilisation de formulaires projet, il suffit d’exécuter la commande **NO DEFAULT TABLE**. 

#### Exemple 

Dans une base contenant un formulaire projet nommé “LeForm” et un formulaire table du même nom pour la table \[Table1\] : 

```4d
 DEFAULT TABLE([Table1])
 DIALOG("LeForm") //4D utilise le formulaire table
 NO DEFAULT TABLE
 DIALOG("LeForm") //4D utilise le formulaire projet
```

#### Voir aussi 

[DEFAULT TABLE](default-table.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 993 |
| Thread safe | &check; |
| Interdite sur le serveur ||


