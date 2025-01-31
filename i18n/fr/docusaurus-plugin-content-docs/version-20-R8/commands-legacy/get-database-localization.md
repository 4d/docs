---
id: get-database-localization
title: Get database localization
slug: /commands/get-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.Get database localization.Syntax-->**Get database localization** {( {*typeLangue*}{;}{*} )} : Text<!-- END REF-->
<!--REF #_command_.Get database localization.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeLangue | Integer | &#8594;  | Type de langue |
| * | Opérateur | &#8594;  | Return information about host database |
| Résultat | Text | &#8592; | Code de la langue utilisée |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get database localization.Summary-->La commande **Get database localization** retourne la langue par défaut de la base ou la langue désignée par *typeLangue*, exprimée dans la norme définie par la RFC 3066\.<!-- END REF--> Typiquement, la commande retourne “fr” pour le français “es” pour l’espagnol, etc. Pour plus d’informations sur cette norme et sur les valeurs retournées par cette commande, reportez-vous à l'*Annexe B : Architecture XLIFF* dans le manuel *Mode Développement*.

Plusieurs paramétrages de langues différents peuvent être utilisés simultanément dans l’application. Pour désigner le paramétrage à obtenir, passez dans *typeLangue* une des constantes suivantes, placées dans le thème *Environnement 4D* :

| Constante                | Type        | Valeur | Comment                                                                                                                                           |
| ------------------------ | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current localization     | Entier long | 1      | Langue courante de l’application : langue par défaut ou langue définie via la commande [SET DATABASE LOCALIZATION](set-database-localization.md). |
| Default localization     | Entier long | 0      | Langue définie automatiquement par 4D au démarrage en fonction du dossier Resources et de l’environnement système (non modifiable).               |
| Internal 4D localization | Entier long | 3      | Langue utilisée par 4D pour les tris et les comparaisons de textes (définie dans les Préférences de l’application).                               |
| User system localization | Entier long | 2      | Langue définie par l’utilisateur courant du système.                                                                                              |

Par défaut, si vous omettez le paramètre *typeLangue*, la commande retourne la langue par défaut (0). 

Le paramètre optionnel \* est utile dans une architecture utilisant des composants : il peut êtr utilisé pour définir la base (hôte ou composante) dont vous souhaitez connaître la langue.

* Lorsque la commande est appelée depuis un composant :
   * Si le paramètre \* est passé, la commande retourne la configuration de la langue de la base hôte.
   * Si le paramètre \* n'est pas passé, la commande retourne la configuration de la langue de la base composante.
* Lorsque la commande est appelée depuis une méthode de la base hôte, elle retourne toujours la configuration de la langue de la base hôte (\* est ignoré).

La langue courante de la base définit le dossier .lproj dans lequel le programme va chercher les éléments localisés de la base de données. 4D détermine automatiquement la langue courante au démarrage de la base en fonction du contenu du dossier **Resources** et de l’environnement système. Le principe est que 4D charge le premier dossier .lproj de la base correspondant à la langue de référence, dans l’ordre de priorité suivant :

1. Langue du système (sous Mac OS, plusieurs langues peuvent être définies avec un ordre de préférence, 4D utilise ce paramétrage).
2. Langue de l’application 4D.
3. Anglais
4. Première langue trouvée dans le dossier **Resources**.

**Note :** Si la base ne contient aucun dossier .lproj, 4D applique l'ordre de priorité suivant : 1\. Langue du système, 2\. Anglais (si la langue du système n'a pas pu être identifiée).

#### Voir aussi 

[Localized document path](localized-document-path.md)  
[SET DATABASE LOCALIZATION](set-database-localization.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1009 |
| Thread safe | &check; |


