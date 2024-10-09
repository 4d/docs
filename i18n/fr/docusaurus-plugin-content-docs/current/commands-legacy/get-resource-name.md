---
id: get-resource-name
title: Get resource name
slug: /commands/get-resource-name
displayed_sidebar: docs
---

<!--REF #_command_.Get resource name.Syntax-->**Get resource name** ( *resType* ; *resNum* {; *resFichier*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.Get resource name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resType | Text | &srarr; | Type de ressource (4 caractères) |
| resNum | Integer | &srarr; | Numéro de référence de ressource (ID) |
| resFichier | Time | &srarr; | Numéro de référence du fichier de ressource ou Tous les fichiers de ressources ouverts si omis |
| Résultat | Text | &larr; | Nom de la ressource |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get resource name.Summary-->**Get resource name** retourne le nom de la ressource dont le type est passé dans *resType* et le numéro de référence (ID) dans *resNum*.<!-- END REF-->

Si vous ne passez pas le paramètre *resFichier*, la ressource est recherchée dans tous les fichiers de ressources ouverts. Si vous passez un numéro de référence de fichier de ressource dans le paramètre *resFichier*, la ressource n'est recherchée que dans ce fichier. 

Si la ressource n'existe pas, **Get resource name** retourne une chaîne vide.
