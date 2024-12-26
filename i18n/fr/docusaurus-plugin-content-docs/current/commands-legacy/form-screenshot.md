---
id: form-screenshot
title: FORM SCREENSHOT
slug: /commands/form-screenshot
displayed_sidebar: docs
---

<!--REF #_command_.FORM SCREENSHOT.Syntax-->**FORM SCREENSHOT** ( {{*laTable* ;} *nomFormulaire* ;} *imageForm* {; *pageNum*} )<!-- END REF-->
<!--REF #_command_.FORM SCREENSHOT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table du formulaire |
| nomFormulaire | Text | &#8594;  | Nom du formulaire |
| imageForm | Picture | &#8592; | Image du formulaire en exécution si premier(s) paramètre(s) omis, ou <br/>Image du formulaire dans l'éditeur de formulaires si un nom de formulaire est passé |
| pageNum | Integer | &#8594;  | Numéro de page du formulaire |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM SCREENSHOT.Summary-->La commande **FORM SCREENSHOT** retourne un formulaire sous forme d'image.<!-- END REF--> Cette commande admet deux syntaxes différentes : en fonction de la syntaxe utilisée, vous pouvez obtenir soit l'image d'un formulaire exécuté, soit l'image du formulaire dans l'éditeur de formulaires.

* FORM SCREENSHOT ( *imageForm* )  
Cette syntaxe vous permet d'obtenir une capture écran de la page courante du formulaire en cours d'exécution ou chargé via la commande [FORM LOAD](../commands/form-load.md) : l'image retournée dans le paramètre *imageForm* contient la totalité des objets visibles du formulaire avec les valeurs courantes des champs et des variables du formulaire, les sous-formulaires, etc. Le formulaire est retourné intégralement, sans tenir compte de la taille de la fenêtre qui le contient.  
A noter que cette syntaxe ne fonctionne qu'avec les formulaires d'entrée.
* FORM SCREENSHOT ( {*laTable* ;} *nomFormulaire* ; *imageForm* {; *pageNum*} )  
Cette syntaxe vous permet d'obtenir une  capture écran d'un "modèle" de formulaire tel qu'affiché dans l'éditeur de formulaires. Tous les objets visibles sont dessinés comme dans l'éditeur ; la commande tient compte des formulaires hérités et des objets placés sur la page 0\.  
Si vous souhaitez capturer un formulaire table, passez la table du formulaire dans le paramètre *laTable* puis son nom sous forme de chaîne dans *nomFormulaire*. Pour un formulaire projet, passez directement le nom du formulaire dans *nomFormulaire*.  
Par défaut, la commande capture la page 1 du formulaire. Si vous souhaitez capturer uniquement la page 0 ou une autre page du formulaire, passez son numéro dans le paramètre *pageNum*.

**Notes :** 

* Les zones Web ne sont pas dessinées dans la capture écran retournée par la commande.
* Les deux premiers paramètres de cette commande étant optionnels, il n'est pas possible de passer directement comme argument une fonction retournant un pointeur telle que [Current form table](current-form-table.md)\-> ou [Table](table.md)\->. Cette syntaxe fonctionnera en mode interprété mais sera rejetée lors de la compilation. Il est nécessaire dans ce cas d'utiliser une variable pointeur intermédiaire. Pour plus d'informations, reportez-vous au paragraphe "*Utilisation directe de commandes retournant des pointeurs*".

#### Voir aussi 

[FORM LOAD](../commands/form-load.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 940 |
| Thread safe | &cross; |


