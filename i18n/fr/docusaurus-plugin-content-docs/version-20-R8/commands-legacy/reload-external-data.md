---
id: reload-external-data
title: RELOAD EXTERNAL DATA
slug: /commands/reload-external-data
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD EXTERNAL DATA.Syntax-->**RELOAD EXTERNAL DATA** ( *leChamp* )<!-- END REF-->
<!--REF #_command_.RELOAD EXTERNAL DATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leChamp | Text, Blob, Picture, Object | &#8594;  | Champ pour lequel recharger les données |

<!-- END REF-->

#### Description 

<!--REF #_command_.RELOAD EXTERNAL DATA.Summary-->La commande **RELOAD EXTERNAL DATA** vous permet de recharger en mémoire le contenu d’un fichier de stockage externe associé à un champ de type Blob, Image ou Texte.<!-- END REF-->

Cette commande est utile dans le cas où le champ d’un enregistrement déjà chargé en mémoire est modifié sur le disque par une autre application (les fichiers de stockage externe des champs sont toujours accessibles en écriture). Par exemple, une image utilisée dans un champ image est modifiée par un éditeur graphique puis sauvegardée sur disque.

Il est alors nécessaire de demander le rechargement des données à l'aide de la commande **RELOAD EXTERNAL DATA** pour mettre à jour le contenu du champ s’il est affiché dans un formulaire.

**Note :** La commande **RELOAD EXTERNAL DATA** fonctionne uniquement sur 4D local ou 4D Server. Il n’est pas possible de recharger individuellement un champ avec 4D en mode distant. Il est nécessaire dans ce contexte de recharger l’ensemble de l’enregistrement (à l’aide de la commande [LOAD RECORD](load-record.md) par exemple).

#### Voir aussi 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1135 |
| Thread safe | &check; |


