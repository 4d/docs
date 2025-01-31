---
id: import-data
title: IMPORT DATA
slug: /commands/import-data
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT DATA.Syntax-->**IMPORT DATA** ( *nomFichier* {; *projet* {; *}} )<!-- END REF-->
<!--REF #_command_.IMPORT DATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Chemin d’accès et nom du fichier à importer |
| projet | Text, Blob | &#8594;  | Contenu du projet d’import (XML ou référence d'élément DOM ou BLOB) |
| &#8592; | Nouveau contenu du projet d’import (si le paramètre * a été passé) |
| * | Opérateur | &#8594;  | Affichage de la boîte de dialogue d’import et mise à jour du projet |

<!-- END REF-->

#### Description 

<!--REF #_command_.IMPORT DATA.Summary-->La commande **IMPORT DATA** permet d’importer des données depuis le fichier *nomFichier*.<!-- END REF--> 4D peut importer des données au format Texte, Texte de longueur fixe, XML, SYLK, DIF, DBF (dBase), et 4D. 

Si vous passez une chaîne vide dans le *nomFichier*, **IMPORT DATA** provoque l’affichage d’une boîte de dialogue standard d’ouverture de fichiers, permettant à l’utilisateur de sélectionner le fichier d’import. Une fois la boîte de dialogue validée, la variable système Document contient le chemin d’accès et le nom du fichier d’import. Si l’utilisateur clique sur le bouton **Annuler**, l’exécution est stoppée et la variable système **OK** prend la valeur 0.

Le paramètre optionnel *projet* vous permet d'utiliser un projet pour l'import des données. Lorsque vous passez ce paramètre, l’import s’effectue directement, sans intervention de l’utilisateur (sauf si vous utilisez l'option *\**, cf. ci-dessous). Si vous ne passez pas ce paramètre, la boîte de dialogue de paramétrage d’import s’affiche, permettant à l’utilisateur de définir ses paramètres d’import ou de charger un projet d’import existant. 

Un projet d’import contient tous les paramètres de l’import, tels que les tables et champs utilisés, les délimiteurs, etc. Vous pouvez passer dans *projet* soit une variable texte contenant du XML, soit une variable texte contenant la référence à un élément DOM préexistant, soit un BLOB. Les projets peuvent avoir été créés par programmation (projets au format XML uniquement) ou être issus du chargement de paramètres préalablement définis dans la boîte de dialogue d’import. Dans ce dernier cas, vous disposez de deux solutions :

* utiliser la commande **IMPORT DATA** avec un paramètre *projet* vide et le paramètre optionnel *\** (cf. ci-dessous), puis stocker le paramètre *projet* résultant dans un champ Texte ou BLOB. Cette solution permet notamment de conserver le projet avec le fichier de données.
* sauvegarder le projet sur disque, puis le charger par exemple à l’aide de la commande [DOM Parse XML source](dom-parse-xml-source.md) et passer sa référence dans le paramètre *projet*.

**Note de compatibilité :** A compter de la version 12 de 4D, les projets d'import sont encodés en XML. 4D peut ouvrir les projets d'import générés avec des versions précédentes de 4D (format BLOB), mais les projets créés à compter de la v12 ne peuvent plus être rouverts avec une v11 ou antérieure. Il est désormais conseillé d'utiliser des variables Texte pour manipuler les fichiers d'import. 

Le paramètre optionnel *\**, s’il est est spécifié, provoque l’affichage de la boîte de dialogue de paramétrage d’import avec les paramétrages définis dans le projet. Ce fonctionnement permet d’utiliser un projet prédéfini, tout en ayant la possibilité de modifier un ou plusieurs paramètres. En outre, le paramètre *projet* contient, après la fermeture de la boîte de dialogue d’import, les paramètres du “nouveau” projet au format XML. Vous pouvez alors le stocker dans un champ Texte, sur disque, etc.

**Note :** Reportez-vous à la commande [EXPORT DATA](export-data.md) pour un exemple de définition de projet vide. 

#### Variables et ensembles système 

Si l'utilisateur clique sur **Annuler** dans une des boîtes de dialogue (de sélection de projet ou de paramétrage d'import), la variable système OK prend la valeur 0\. Si l’import se déroule correctement, la variable système OK prend la valeur 1.

#### Voir aussi 

[EXPORT DATA](export-data.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 665 |
| Thread safe | &check; |
| Modifie les variables | OK |


