---
id: form-goto-page
title: FORM GOTO PAGE
slug: /commands/form-goto-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM GOTO PAGE.Syntax-->**FORM GOTO PAGE** ( *numéroPage* {; *} )<!-- END REF-->
<!--REF #_command_.FORM GOTO PAGE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numéroPage | Integer | &#8594;  | Numéro de la page à afficher |
| * | Opérateur | &#8594;  | Changer la page du sous-formulaire courant |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM GOTO PAGE.Summary-->**FORM GOTO PAGE** change la page courante du formulaire pour afficher la page désignée par *numéroPage*.<!-- END REF-->

Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](form-load.md), ou si *numéroPage* correspond à la page courante du formulaire, **FORM GOTO PAGE** ne fait rien. Si *numéroPage* est supérieur au nombre de pages du formulaire, la dernière page est affichée. Si *numéroPage* est inférieur à 1, la première page est affichée.

Le paramètre *\** est utile lorsque la commande est appelée dans le contexte d’un sous-formulaire en page contenant plusieurs pages. Dans ce cas, si vous passez ce paramètre, la commande change la page du sous-formulaire courant (celui qui a appelé la commande). Par défaut, si le paramètre *\** est omis, la commande s’applique toujours au formulaire parent. 

##### A propos des commandes de gestion des pages 

4D vous fournit des actions automatiques pour les boutons qui effectuent les mêmes tâches que les commandes [FORM FIRST PAGE](form-first-page.md), [FORM LAST PAGE](form-last-page.md), [FORM NEXT PAGE](form-next-page.md), [FORM PREVIOUS PAGE](form-previous-page.md), [FORM GOTO PAGE](form-goto-page.md) que vous pouvez associer aux objets tels que les onglets, les listes déroulantes, etc. A chaque fois que c'est possible, utilisez les actions automatiques pour les boutons plutôt que ces commandes.   
Les commandes de gestion des pages peuvent être utilisées avec des formulaires entrée ou des formulaires affichés dans des boîtes de dialogue. Les formulaires sortie n'utilisent que la première page. Un formulaire comprend toujours au minimum une page, la première. Notez bien que quel que soit le nombre de pages qu'il contient, un formulaire ne peut être associé qu'à une seule méthode formulaire. 

* Vous pouvez utiliser la commande [FORM Get current page](form-get-current-page.md) pour savoir quelle page est affichée à l'écran.
* Vous pouvez utiliser l'[Form event code](form-event-code.md) On Page Change qui est généré à chaque fois que le formulaire change de page courante.

**Note :** Pendant que vous construisez un formulaire, vous pouvez utiliser les pages 1 à N du formulaire ainsi que la page 0 (zéro), dans laquelle vous placez les objets que vous voulez faire apparaître sur toutes les pages. Lors de l'utilisation du formulaire, et donc lorsque les commandes de gestion des pages sont appelées, seules les pages 1 à N sont accessibles : la page 0 est automatiquement combinée à la page affichée à l'écran.

#### Exemple 

L'exemple suivant est la méthode objet d'un bouton affichant la page 3 du formulaire :

```4d
 FORM GOTO PAGE(3)
```

#### Voir aussi 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  