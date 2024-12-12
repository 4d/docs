---
id: blob-to-users
title: BLOB TO USERS
slug: /commands/blob-to-users
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO USERS.Syntax-->**BLOB TO USERS** ( *utilisateurs* )<!-- END REF-->
<!--REF #_command_.BLOB TO USERS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| utilisateurs | Blob | &#8594;  | BLOB (crypté) contenant des comptes utilisateurs créés et sauvegardés par l'Administrateur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.BLOB TO USERS.Summary-->La commande **BLOB TO USERS** remplace les comptes utilisateurs et les groupes présents dans le BLOB *utilisateurs* dans la base courante.<!-- END REF--> Le BLOB *utilisateurs* est crypté et doit impérativement avoir été créé par la commande [USERS TO BLOB](users-to-blob.md).

Seuls l’Administrateur et le Super\_Utilisateur de la base peuvent exécuter cette commande. Si un autre utilisateur tente de l’exécuter, la commande ne fait rien et une erreur de privilège (-9949) est générée.

Les conséquences de cette commande sont différentes, selon qu'elle est exécutée depuis une base binaire ou une base projet :

**Base projet**

Cette commande est utilisée à des fins de compatibilité, pour déplacer les utilisateurs et groupes sauvegardés antérieurement d'un fichier BLOB vers le fichier *directory.json* de la base. Tous les utilisateurs et groupes déjà définis dans le fichier *directory.json* sont remplacés par le contenu du BLOB *utilisateurs*, à l'exception du "Super\_Utilisateur" et de l'"Administrateur".

**Base binaire**

Cette commande provoque le remplacement des comptes et groupes créés par l'Administrateur éventuellement existant dans la base. Si le BLOB *utilisateurs* contient des données valide, la commande effectue les opérations suivantes :

* tous les groupes et utilisateurs définis dans la base dont le numéro de référence est négatif (groupes et utilisateurs créés par l'Administrateur) sont supprimés de la structure,
* tous les groupes et utilisateurs présents dans le BLOB *utilisateurs* sont ajoutés dans la structure.

**Note de compatibilité :** Les fichiers d’utilisateurs et groupes (extension .4UG) créés par la commande de menu **Enregistrer les groupes & utilisateurs...** dans une version de 4D antérieure peuvent être chargés dans 4D via ces instructions (une version trop ancienne peut toutefois nécessiter de passer par des versions intermédiaires) :

```4d
 DOCUMENT TO BLOB(mondoc;blob)
 BLOB TO USERS(blob)
```

#### Variables et ensembles système 

Si la commande est exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0.

#### Voir aussi 

[USERS TO BLOB](users-to-blob.md)  