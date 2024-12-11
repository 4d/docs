---
id: change-current-user
title: CHANGE CURRENT USER
slug: /commands/change-current-user
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE CURRENT USER.Syntax-->**CHANGE CURRENT USER** {( *utilisateur* ; *motDePasse* )}<!-- END REF-->
<!--REF #_command_.CHANGE CURRENT USER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| utilisateur | Text, Integer | &#8594;  | Nom ou Numéro de référence unique de l’utilisateur |
| motDePasse | Text | &#8594;  | Mot de passe (non crypté) |

<!-- END REF-->

#### Description 

<!--REF #_command_.CHANGE CURRENT USER.Summary-->**CHANGE CURRENT USER** permet de changer l'identité de l'utilisateur courant dans la base, sans devoir la quitter.<!-- END REF--> Le changement d'identité peut être effectué par l'utilisateur lui-même via la boîte de dialogue de connexion à la base (lorsque la commande est appelée sans paramètres) ou directement par la commande. Lorsqu'il change d'identité, l'utilisateur abandonne ses anciens privilèges au profit de ceux de l'utilisateur choisi.

**Notes :**

* Cette commande ne produit aucun effet dans une base projet ouverte en monoposte.
* Si un alias a été défini pour l'utilisateur courant avec la commande [SET USER ALIAS](set-user-alias.md), il est réinitialisé en appelant la commande **CHANGE CURRENT USER**.

Si la commande **CHANGE CURRENT USER** est exécutée sans paramètres, la boîte de dialogue de connexion à la base s'affiche. L'utilisateur doit alors saisir ou sélectionner un nom et un mot de passe valides pour entrer dans la base. Le contenu de la boîte de dialogue de connexion dépend des options définies dans la page **Sécurité** des Propriétés de la base.

Vous pouvez également passer les deux paramètres facultatifs *utilisateur* et *motDePasse* afin de spécifier par programmation le nouveau compte à utiliser. 

Passez dans le paramètre *utilisateur* le nom ou le numéro de référence unique (*réfUtilisateur*) du compte à utiliser. Les noms et les numéros des utilisateurs peuvent être obtenus via la commande [GET USER LIST](get-user-list.md).

Si le compte d’utilisateur désigné n’existe pas ou a été supprimé, l’erreur -9979 est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d’erreurs installée par la commande [ON ERR CALL](on-err-call.md). Sinon, vous pouvez appeler la fonction [Is user deleted](is-user-deleted.md) pour tester le compte utilisateur avant d’appeler cette commande.

Passez dans le paramètre *motDePasse* le mot de passe non crypté du compte de l’utilisateur. Si le mot de passe ne correspond pas à l’utilisateur, la commande ne fait rien et l’erreur -9978 est générée.

La commande est à présent temporisée afin d’éviter des attaques par “force brute” (essais automatiques de multiples combinaisons de noms d’utilisateurs/mots de passe). Ainsi, au bout du quatrième appel à la commande, elle n’est exécutée qu’après 10 secondes d’attente. Cette temporisation est globale au poste de travail.

**Note :** Lorsque le groupe de l'utilisateur actuel donne accès à une fonctionnalité "sérialisée" (par exemple, un plug-in), une licence correspondante est utilisée et restera attachée au compte utilisateur 4D jusqu'à la fin de la session, même si **CHANGE CURRENT USER** est appelé et que le groupe du nouvel utilisateur ne fournit pas d'accès à la fonctionnalité.

##### Proposer une boîte de dialogue de gestion d’accès personnalisée 

La commande **CHANGE CURRENT USER** permet de mettre en place des boîtes de dialogue personnalisées pour la saisie du nom et du mot de passe (avec règles de saisie et d'expiration) tout en bénéficiant des avantages du système intégré de contrôle des accès de 4D.   
Le principe est le suivant : 

**1.** L’entrée dans la base s’effectue directement en mode “Utilisateur par défaut”, sans boîte de dialogue. 

**2.** Dans la , le développeur provoque l’affichage d’une boîte de dialogue personnalisée de saisie du nom d’utilisateur et du mot de passe (à l’aide de la commande [DIALOG](../commands/dialog.md) ou [ADD RECORD](add-record.md) par exemple). Tout type de traitement peut être envisagé dans la boîte de dialogue :   
\- Il est possible d’afficher la liste des utilisateurs de la base, comme dans la boîte de dialogue d’accès standard de 4D, à l’aide de la commande [GET USER LIST](get-user-list.md).   
\- Le champ de saisie du mot de passe peut contenir divers contrôles afin de vérifier la validité des caractères saisis (nombre minimum de caractères, unicité...).   
\- Pour les caractères du mot de passe saisi soient brouillés à l'écran, vous pouvez utiliser la commande [FILTER KEYSTROKE](filter-keystroke.md).   
\- Des règles d’expiration peuvent être appliquées au moment de la validation de la boîte de dialogue : date d’expiration, changement forcé à la première connexion, verrouillage du compte après plusieurs saisies erronées, mémorisation des mots de passe déjà utilisés... 

**3.** Lorsque la saisie est validée, les informations requises (nom d’utilisateur et mot de passe) sont passées à la commande **CHANGE CURRENT USER** afin d’ouvrir la base avec les privilèges du compte utilisateur.

#### Exemple 

L'exemple suivant affiche simplement la boîte de dialogue de connexion :

```4d
 CHANGE CURRENT USER
```

**Note :** Ce code ne fait rien dans une base projet monoposte.

#### Voir aussi 

[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 289 |
| Thread safe | &check; |
| Interdite sur le serveur ||


