---
id: verify-password-hash
title: Verify password hash
slug: /commands/verify-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Verify password hash.Syntax-->**Verify password hash** ( *motDePasse* ; *hash* ) : Boolean<!-- END REF-->
<!--REF #_command_.Verify password hash.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| motDePasse | Text | &#8594;  | Mot de passe utilisateur (seuls les 72 premiers caractères sont utilisés) |
| hash | Text | &#8594;  | Hash du mot de passe |
| Résultat | Boolean | &#8592; | Vrai si motDePasse et hash correspondent, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.Verify password hash.Summary-->La fonction **Verify password hash** vérifie que l'empreinte cryptographique *hash* correspond bien au *motDePasse*.<!-- END REF-->

Cette fonction compare *motDePasse* à un *hash* généré par la commande [Generate password hash](generate-password-hash.md).

##### Gestion des erreurs 

Les erreurs suivantes peuvent être retournées. Vous pouvez récupérer et analyser les erreurs à l'aide des commandes [Last errors](last-errors.md)  et [ON ERR CALL](on-err-call.md).

| **Numéro** | **Message**                                              |
| ---------- | -------------------------------------------------------- |
| 850        | Password-hash: Algorithme inconnu                        |
| 851        | Password-hash: Echec lors des vérifications de cohérence |

**Rappel :** Seul l'algorithme bcrypt est pris en charge. Si votre hash n'as pas été généré à l'aide du bcrypt, une erreur est retournée.

#### Exemple 

Cet exemple compare un hash de mot de passe créé par la commande [Generate password hash](generate-password-hash.md) et stocké dans la table \[Users\] avec un mot de passe qui vient d'être saisi :

```4d
 var $password : Text
 $password:=Request("Veuillez saisir votre mot de passe.")
 
 If(Verify password hash($password;[Users]hash))
    ALERT("Mot de passe correct")
 Else
    ALERT("Mot de passe invalide")
 End if
```

**Note :** Le mot de passe n'est jamais stocké sur disque, seule son empreinte cryptographique est conservée. Lors de l'utilisation d'une application 4D distante, il est possible de générer le hash côté client. Si vous utilisez une application cliente JavaScript (ou similaire), les bonnes pratiques en matière de sécurité recommandent que le hash soit créé côté serveur. Bien entendu, dans ce cas par sécurité vous devez utiliser une connexion réseau cryptée avec TLS car le mot de passe est alors transféré par le réseau. 

#### Voir aussi 

  
[Generate password hash](generate-password-hash.md)  