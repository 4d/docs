---
id: create-alias
title: CREATE ALIAS
slug: /commands/create-alias
displayed_sidebar: docs
---

<!--REF #_command_.CREATE ALIAS.Syntax-->**CREATE ALIAS** ( *cheminCible* ; *cheminAlias* )<!-- END REF-->
<!--REF #_command_.CREATE ALIAS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminCible | Text | &#8594;  | Nom ou chemin d’accès de la cible de l’alias/du raccourci |
| cheminAlias | Text | &#8594;  | Nom ou chemin d’accès complet de l’alias/du raccourci à créer |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE ALIAS.Summary-->La commande **CREATE ALIAS** crée un alias (appelé “raccourci” sous Windows) du fichier ou dossier cible désigné par le paramètre *cheminCible*, avec le nom et l’emplacement définis dans le paramètre *cheminAlias*.<!-- END REF--> 

Vous pouvez créer un alias de tout type de document ou de dossier. L’icône de l’alias sera identique à celle de l’élément cible. Elle comportera en outre une petite flèche et, sous Mac OS, le libellé de l’alias apparaîtra en caractères italiques. 

La commande n’affecte pas de libellé par défaut à l’alias, vous devez passer un nom dans le paramètre *cheminAlias*. Si vous passez uniquement un nom dans ce paramètre, l’alias est créé dans le dossier actif courant (généralement, le dossier contenant le fichier de structure de la base). 

**Note :** Sous Windows, les raccourcis sont des fichiers dont l’extension est “.LNK”. Si vous ne passez pas cette extension, la commande l’ajoute automatiquement. 

Si vous passez une chaîne vide dans *cheminCible*, la commande ne fait rien.

#### Exemple 

Votre base génère des fichiers texte intitulés “RapportNuméro”, stockés dans le dossier de la base. Vous souhaitez permettre à l’utilisateur de créer des raccourcis vers ces rapports et de les stocker où il le souhaite :

```4d
  //Méthode CREER_RAPPORT
 var $vtRapport : Text
 C_STRING(250;$vtChemin)
 C_STRING(80;$vaNom)
 var vDoc : Time
 C_INTEGER($NumRapport)
 
 $vTRapport:=... //Edition du rapport
 $NumRapport:=... //Calcul du numéro du rapport
 $vaNom:="Rapport"+String($NumRapport)+".txt" //Nom du fichier
 vDoc:=Create document($vaNom)
 If(OK=1)
    SEND PACKET(vDoc;$vTRapport)
    CLOSE DOCUMENT(vDoc)
  //Ajout de l’alias
    CONFIRM("Créer un alias pour ce rapport ?)
    If(OK=1)
       $vtChemin:=Select folder("Où souhaitez-vous créer l’alias ?")
       If(OK=1)
          CREATE ALIAS($vaNom;$vtChemin+$vaNom)
          If(OK=1)
             SHOW ON DISK($vtChemin+$vaNom)
  //Visualisation de l'emplacement de l'alias
          End if
       End if
    End if
 End if
```

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la commande a été correctement exécutée, sinon elle prend la valeur 0.

#### Voir aussi 

[RESOLVE ALIAS](resolve-alias.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 694 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


