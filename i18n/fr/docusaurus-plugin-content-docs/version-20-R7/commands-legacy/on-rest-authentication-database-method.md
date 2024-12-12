---
id: on-rest-authentication-database-method
title: On REST Authentication database method
slug: /commands/on-rest-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On REST Authentication database method.Syntax-->$1, $2, $3, $4 -> On REST Authentication database method -> $0<!-- END REF-->
<!--REF #_command_.On REST Authentication database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Texte | &#8592; | Nom d’utilisateur |
| $2 | Texte | &#8592; | Mot de passe |
| $3 | Booléen | &#8592; | Vrai = mode Digest, Faux = mode Basic |
| $4 | Texte | &#8592; | Ip address of the caller |
| $0 | Booléen | &#8592; | Vrai = requête acceptée, Faux = requête rejetée |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.On REST Authentication database method.Summary-->La **On REST Authentication database method** est obsolète dans les projets à partir de 4D 20 R6.<!-- END REF-->

L'[authentification Force login](https://developer.4d.com/docs/fr/REST/authUsers/) est désormais fortement recommandée. Dans les projets convertis, vous pouvez mettre à jour votre configuration en cliquant sur le bouton de paramètres [Activer l'authentification REST via la fonction ds.authentify()](https://developer.4d.com/docs/fr/settings/web/#acc%C3%A8s). Consultez également [cet article de blog](https://blog.4d.com/fr/force-login-now-is-the-default-mode-for-all-rest-authentications) pour savoir comment migrer votre code si nécessaire.
