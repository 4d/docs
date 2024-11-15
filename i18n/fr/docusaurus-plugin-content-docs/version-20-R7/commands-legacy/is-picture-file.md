---
id: is-picture-file
title: Is picture file
slug: /commands/is-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.Is picture file.Syntax-->**Is picture file** ( *cheminFichier* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.Is picture file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminFichier | Text | &#8594;  | Chemin d’accès de fichier |
| * | Opérateur | &#8594;  | Valider les données |
| Résultat | Boolean | &#8592; | Vrai = cheminFichier désigne un fichier image, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is picture file.Summary-->La commande **Is picture file** teste le fichier désigné par le paramètre *cheminFichier* et retourne Vrai s’il s’agit d’un fichier image valide.<!-- END REF--> La commande retourne Faux si le fichier n’est pas de type image ou s’il n’a pas été trouvé. 

Passez dans le paramètre *cheminFichier* le chemin d’accès du fichier image à tester. Ce chemin doit être exprimé avec la syntaxe système. Vous pouvez passer un chemin d’accès absolu ou relatif au fichier de structure de la base. Si vous passez une chaîne vide (""), la commande retourne Faux. 

Si vous ne passez pas le paramètre *\**, la commande teste le fichier en recherchant son extension parmi la liste des codecs disponibles. Si vous souhaitez pouvoir tester des fichiers sans extension ou effectuer une vérification plus complète, passez le paramètre *\**. Dans ce cas, la commande effectue des analyses supplémentaires : elle charge et inspecte l’en-tête du fichier et interroge les codecs afin de valider l’image. Cette syntaxe ralentit l’exécution de la commande.

**Note :** La commande retourne Vrai pour les fichiers PDF sous Windows et les fichiers EMF sous Mac OS. 

#### Voir aussi 

[PICTURE CODEC LIST](picture-codec-list.md)  