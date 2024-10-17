---
id: set-assert-enabled
title: SET ASSERT ENABLED
slug: /commands/set-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.SET ASSERT ENABLED.Syntax-->**SET ASSERT ENABLED** ( *asserts* {; *} )<!-- END REF-->
<!--REF #_command_.SET ASSERT ENABLED.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| asserts | Boolean | &#8594;  | Vrai = activer les assertions, <br/>Faux = désactiver les assertions |
| * | Opérateur | &#8594;  | Si omis = la commande s’applique à l’ensemble des process, <br/>Si passé = la commande s’applique au process courant uniquement |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET ASSERT ENABLED.Summary-->La commande **SET ASSERT ENABLED** permet de désactiver ou de réactiver les assertions éventuellement insérées dans le code 4D de l’application.<!-- END REF--> Pour plus d’informations sur les assertions, reportez-vous à la description de la commande [ASSERT](assert.md). 

Par défaut, les assertions ajoutées dans le programme sont actives, en mode interprété et en mode compilé. Cette commande est utile pour les désactiver car leur évaluation peut parfois être coûteuse en temps d’exécution et vous pouvez aussi souhaiter les masquer pour l’utilisateur final de l’application. Typiquement, la commande **SET ASSERT ENABLED** pourra être utilisée dans la [On Startup database method](on-startup-database-method.md) afin d’activer ou non les assertions suivant que l’application est en mode "Test" ou en mode "Production". 

Par défaut, la commande **SET ASSERT ENABLED** agit sur tous les process de l’application déjà créés ou créés par la suite. Pour restreindre l’effet de la commande au process courant uniquement, passez le paramètre *\**.

A noter que lorsque les assertions sont désactivées, les expressions passées aux commandes [ASSERT](assert.md) ne sont plus évaluées. Les lignes de code appelant [ASSERT](assert.md) n’ont alors plus aucun effet sur le fonctionnement de l’application, ni en termes de comportement ni en terme de performances.

#### Exemple 

Désactivation globale des assertions :

```4d
 SET ASSERT ENABLED(False)
 ASSERT(MéthodeTest) // MéthodeTest ne sera pas appelée car les asserts sont désactivés
```

#### Voir aussi 

[ASSERT](assert.md)  
[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  