---
id: set-application-color-scheme
title: SET APPLICATION COLOR SCHEME
slug: /commands/set-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Syntax-->**SET APPLICATION COLOR SCHEME** ( *schemaCouleur* )<!-- END REF-->
<!--REF #_command_.SET APPLICATION COLOR SCHEME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| schemaCouleur | Text | &#8594;  | "light", "dark", ou "inherited" |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Summary-->La commande **SET APPLICATION COLOR SCHEME** définit le schéma de couleurs à utiliser au niveau de l'application pour la session courante.<!-- END REF--> Ce schéma sera appliqué aux formulaires qui ne déclarent pas déjà un schéma spécifique (un schéma de couleurs défini au niveau du formulaire est prioritaire sur le niveau de l'application).

**Note :** Cette commande fonctionne uniquement sur macOS. Sous Windows, le seul schéma disponible est «light».

*Dans le paramètre schemaCouleur*, passez un schéma de couleurs à appliquer :

* **"light"** \- l'application utilisera le thème Default Light
* **"dark"** \- l'application utilisera le thème Default Dark Theme
* **"inherited"** \- l'application héritera du niveau de priorité le plus élevé (c'est-à-dire dans les Paramètres)

#### Exemple 

```4d
  // Forcer l'application courante en mode "dark"
 SET APPLICATION COLOR SCHEME("dark")
```

#### Voir aussi 

[FORM Get color scheme](form-get-color-scheme.md)  
[Get application color scheme](get-application-color-scheme.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1762 |
| Thread safe | &check; |
| Interdite sur le serveur ||


