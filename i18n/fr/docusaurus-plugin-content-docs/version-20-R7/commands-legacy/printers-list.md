---
id: printers-list
title: PRINTERS LIST
slug: /commands/printers-list
displayed_sidebar: docs
---

<!--REF #_command_.PRINTERS LIST.Syntax-->**PRINTERS LIST** ( *tabNoms* {; *tabNomsAlt* {; *tabModèles*}} )<!-- END REF-->
<!--REF #_command_.PRINTERS LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabNoms | Text array | &#8592; | Noms des imprimantes |
| tabNomsAlt | Text array | &#8592; | Windows : Emplacements des imprimantes, macOS : Noms personnalisés des imprimantes |
| tabModèles | Text array | &#8592; | Modèles des imprimantes |

<!-- END REF-->

#### Description 

<!--REF #_command_.PRINTERS LIST.Summary-->La commande **PRINTERS LIST** remplit le ou les tableau(x) passé(s) en paramètre(s) avec les noms ainsi que, facultativement, les emplacements ou les noms personnalisés et les modèles des imprimantes disponibles pour le poste.<!-- END REF-->

Passez dans le paramètre *tabNoms* le nom d’un tableau texte. Après l’exécution de la commande, ce tableau contiendra la liste des noms d’imprimantes disponibles. Sous Mac OS, il s'agit des noms “système” fixes.

**Note :** Si les imprimantes sont gérées via un serveur d’impression (“spouleur”), le chemin d’accès complet (sous Windows) ou le nom du spouleur (sous macOS) est retourné.

Vous pouvez passer un deuxième tableau facultatif, *tabNomsAlt*. Le contenu de ce tableau dépend de la plate-forme :

* Sous Windows, vous récupérez pour chaque imprimante son emplacement réseau (ou son port local).
* Sous macOS, vous récupérez pour chaque imprimante son nom personnalisé, modifiable par l'utilisateur. Ce nom peut être utilisé par exemple dans des boîtes de dialogue.

Le paramètre facultatif *tabModèles* permet de récupérer le modèle de chaque imprimante.

Utilisez les commandes [SET CURRENT PRINTER](set-current-printer.md) et [Get current printer](get-current-printer.md) pour modifier ou connaître l’imprimante sélectionnée dans 4D. Vous devez leur passer les noms retournés dans le premier tableau (*tabNoms*).

Sous Windows, le nom d’une imprimante peut être modifié manuellement au niveau du système d’exploitation. En revanche, son emplacement et son modèle sont liés à ses caractéristiques physiques. Vous pouvez donc utiliser les valeurs des tableaux optionnels pour vérifier les caractéristiques de l’imprimante sélectionnée — typiquement, vous pouvez vérifier que tous les clients utilisent la même imprimante.  
Sous macOS, cette vérification peut s’effectuer sur le nom de l’imprimante (nom du serveur d’impression), qui est le même pour chaque poste connecté.

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la commande a été exécutée correctement, sinon elle prend la valeur 0 et les tableaux sont retournés vides. 

#### Voir aussi 

[Get current printer](get-current-printer.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 789 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


