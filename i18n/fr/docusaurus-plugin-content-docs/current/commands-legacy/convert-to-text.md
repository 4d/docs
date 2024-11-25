---
id: convert-to-text
title: Convert to text
slug: /commands/convert-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Convert to text.Syntax-->**Convert to text** ( *blob* ; *jeuCaractères* ) : Text<!-- END REF-->
<!--REF #_command_.Convert to text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB contenant un texte exprimé dans un jeu de caractères spécifique |
| jeuCaractères | Text, Integer | &#8594;  | Nom ou Numéro du jeu de caractères de blob |
| Résultat | Text | &#8592; | Contenu de blob exprimé dans le jeu de caractères 4D |

<!-- END REF-->

#### Description 

<!--REF #_command_.Convert to text.Summary-->La commande **Convert to text** convertit le texte contenu dans le paramètre *blob* et le retourne en texte exprimé dans le jeu de caractères de 4D.<!-- END REF--> 4D utilise le jeu de caractères UTF-16 par défaut. 

Passez dans *jeuCaractères* le jeu de caractères dans lequel est exprimé le texte contenu dans *blob*, et qui doit être utilisé pour la conversion. Si le conteneur de données contient du texte copié depuis 4D, le jeu de caractères du BLOB sera probablement UTF-16\. Vous pouvez passer une chaîne fournissant le nom standard du jeu ou l'un de ses alias (par exemple “ISO-8859-1” ou “UTF-8”), ou encore son identifiant (entier long). Pour plus d’informations, reportez-vous à la description de la commande [CONVERT FROM TEXT](convert-from-text.md).

**Convert to text** prend en charge les BOM (Byte Order Mark). Si le jeu de caractères spécifié est de type Unicode (UTF-8, UTF-16 ou UTF-32), 4D tente d’identifier une BOM parmi les premiers octets reçus. Si elle est détectée, elle est filtrée du résultat et 4D utilise le jeu de caractères qu’elle définit au lieu du jeu de caractères spécifié.

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable OK prend la valeur 1\. Sinon, elle prend la valeur 0.

#### Voir aussi 

[CONVERT FROM TEXT](convert-from-text.md)  