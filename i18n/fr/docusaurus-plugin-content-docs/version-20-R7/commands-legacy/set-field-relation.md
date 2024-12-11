---
id: set-field-relation
title: SET FIELD RELATION
slug: /commands/set-field-relation
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD RELATION.Syntax-->**SET FIELD RELATION** ( tableN | champN ; *aller* ; *retour* )<!-- END REF-->
<!--REF #_command_.SET FIELD RELATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableN &#124; champN | Table, Champ | &#8594;  | Table de départ des liens ou Champ de départ du lien |
| aller | Integer | &#8594;  | Statut du lien aller partant du champ ou des liens aller partant de la table |
| retour | Integer | &#8594;  | Statut du lien retour partant du champ ou des liens retour partant de la table |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET FIELD RELATION.Summary-->La commande **SET FIELD RELATION** permet de définir séparément le statut automatique/manuel de chaque lien de la base pour le process courant, quel que soit son statut initial défini en mode Développement dans la fenêtre de paramétrage des liens.<!-- END REF--> 

Passez dans le premier paramètre un nom de table ou de champ :

* si vous passez un nom de champ (*champN*), la commande s’appliquera uniquement au lien partant du champ N désigné.
* si vous passez un nom de table (*tableN*), la commande s’appliquera à tous les liens partant de la table N désignée.
* si aucun lien ne part du champ *champN* ou de la table *tableN*, l’erreur de syntaxe n°16 (“Ce champ ne possède pas de lien”) est générée et la variable système OK prend la valeur 0\.

Passez dans les paramètres *aller* et *retour* des valeurs indiquant la modification du statut automatique/manuel à appliquer respectivement au(x) lien(s) de type N vers 1 — c’est-à-dire au(x) lien(s) aller — et au(x) lien(s) de type 1 vers N — c’est-à-dire au(x) lien(s) retour — désigné(s). Vous pouvez utiliser les constantes du thème “*Liens*” :

* Do not modify (0) = ne pas modifier le statut courant du ou des lien(s).
* Structure configuration (1) = utiliser le paramétrage défini pour le(s) lien(s) dans la fenêtre de Structure de l’application.
* Manual (2) = rendre manuel(s) le(s) lien(s) pour le process courant.
* Automatic (3) = rendre automatique(s) le(s) lien(s) pour le process courant.

**Note :** Les modifications effectuées à l’aide de cette commande s’appliquent au process courant uniquement. Le paramétrage des liens défini à l’aide des options de la fenêtre Inspecteur n’est pas modifié. 

**Note :** Si vous avez passé la valeur Vrai à la commande [SET AUTOMATIC RELATIONS](set-automatic-relations.md) durant la même session, les appels à la commande **SET FIELD RELATION** sont ignorés, qu'ils soient placés avant ou après [SET AUTOMATIC RELATIONS](set-automatic-relations.md). Pour "déverrouiller" le mode automatique et prendre en compte les appels à **SET FIELD RELATION**, passez Faux à [SET AUTOMATIC RELATIONS](set-automatic-relations.md).

#### Exemple 

Le code suivant vous permet uniquement de configurer ls liens utiles comme automatiques dans l'éditeur d'états rapides :

```4d
 SET AUTOMATIC RELATIONS(False;False) // Initialisation des liens
  //Seuls les liens suivants seront utilisés
 SET FIELD RELATION([Factures]ID_Client;Automatic;Automatic)
 SET FIELD RELATION([Ligne_Factures]ID_Factures;Automatic;Automatic)
 QR REPORT([Factures];Char(1))
```

#### Voir aussi 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 919 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


