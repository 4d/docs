---
id: dom-set-xml-declaration
title: DOM SET XML DECLARATION
slug: /commands/dom-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML DECLARATION.Syntax-->**DOM SET XML DECLARATION** ( *refElément* ; *encodage* {; *autonome* {; *indentation*}} )<!-- END REF-->
<!--REF #_command_.DOM SET XML DECLARATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| encodage | Text | &#8594;  | Jeu de caractères du document XML |
| autonome | Boolean | &#8594;  | Vrai=le document est autonome Faux (défaut)=le document n’est pas autonome |
| indentation | Boolean | &#8594;  | *** Obsolète, ne plus utiliser *** |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM SET XML DECLARATION.Summary-->La commande **DOM SET XML DECLARATION** permet de définir diverses options qui seront utilisée pour la création de l’arbre XML désigné par *refElément*.<!-- END REF--> Ces options concernent l’encodage et l’attribut autonome (standalone) de l’arbre :

* *encodage* : indique le jeu de caractères employé. Par défaut (si la commande n’est pas appelée), le jeu de caractères UTF-8 (Unicode compressé) est utilisé.  
**Note :** Si vous passez un jeu de caractères non pris en charge par les commandes XML de 4D, l'UTF-8 sera utilisé. Reportez-vous au paragraphe *Jeux de caractères* pour connaître la liste des jeux de caractères pris en charge (l'UTF-8 est toutefois recommandé dans la plupart des cas).
* *autonome* : indique si l’arbre est autonome (Vrai) ou s’il dépend, pour son fonctionnement, de ressources externes (Faux). Par défaut (si la commande n’est pas appelée ou si le paramètre est omis), l’arbre n’est pas autonome.

**Note de compatibilité :** Le paramètre *indentation* est conservé pour des raisons de compatibilité avec les versions précédentes de 4D mais son usage est déconseillé à compter de 4D v12\. Désormais, pour définir l’indentation du document, il est recommandé d’utiliser la commande [XML SET OPTIONS](xml-set-options.md). 

#### Exemple 

Cet exemple définit l’encodage et l’option standalone de l’élément *refElément* : 

```4d
 DOM SET XML DECLARATION(refElément;"UTF-16";True)
```

#### Voir aussi 

[DOM Create XML Ref](dom-create-xml-ref.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 859 |
| Thread safe | &check; |


