---
id: object-set-subform
title: OBJECT SET SUBFORM
slug: /commands/object-set-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM.Syntax-->**OBJECT SET SUBFORM** ( {* ;} *objet* {; *laTable*}; *sousFormDetail* {; *sousFormListe*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| laTable | Table | &#8594;  | Table du formulaire (si formulaire table) |
| sousFormDetail | Text, Object | &#8594;  | Nom (chaîne) du formulaire détail du sous-formulaire, ouChemin POSIX (chaîne) d'un fichier .json décrivant le formulaire détail, ouObjet décrivant le formulaire détail |
| sousFormListe | Text, Object | &#8594;  | Nom (chaîne) du formulaire liste du sous-formulaire, ouChemin POSIX (chaîne) d'un fichier .json décrivant le formulaire liste, ouObjet décrivant le formulaire liste (formulaire table) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET SUBFORM.Summary-->La commande **OBJECT SET SUBFORM** vous permet de modifier dynamiquement le formulaire détaillé ainsi que, optionnellement, le formulaire liste écran associé à l’objet sous-formulaire désigné par les paramètres *objet* et *\**.<!-- END REF--> 

**Note :** Cette commande ne permet pas de changer le type du sous-formulaire lui-même (liste ou page). Cette propriété peut être définie en mode Développement uniquement. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Passez dans le paramètre *laTable* la table des formulaires à utiliser. Ce paramètre est optionnel, vous pouvez l’omettre si vous définissez un formulaire projet comme sous-formulaire détaillé. 

Dans les paramètres *sousFormDetail* et *sousFormListe*, vous pouvez passer :

* le nom d'un formulaire à utiliser,
* le chemin\* (en syntaxe POSIX) d'un fichier .json valide contenant la description du formulaire à utiliser (voir *Chemin d'accès du formulaire*),
* un objet contenant la description du formulaire à utiliser.

\* A la différence des autres commandes liées aux formulaires dynamiques, les chemins de fichier de **OBJECT SET SUBFORM** sont relatifs au formulaire parent du sous-formulaire. 

**Note :** Le paramètre *sousFormListe* ne peut être passé que si vous modifiez un sous-formulaire de type liste. 

Lorsque vous modifiez un sous-formulaire en page, la commande peut être exécutée à tout moment, les éventuelles sélections courantes ne sont pas modifiées. En revanche, si vous modifiez un sous-formulaire en liste, il ne peut être modifié que lorsqu’il affiche la liste. Si la commande est exécutée alors que le formulaire détaillé est affiché à la suite d’un double-clic dans la liste, une erreur est générée. 

#### Voir aussi 

[OBJECT GET SUBFORM](object-get-subform.md)  
[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1138 |
| Thread safe | &cross; |


