---
id: generate-password-hash
title: Generate password hash
slug: /commands/generate-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Generate password hash.Syntax-->**Generate password hash** ( *motDePasse* {; *options*} ) : Text<!-- END REF-->
<!--REF #_command_.Generate password hash.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| motDePasse | Text | &#8594;  | Mot de passe utilisateur (seuls les 72 premiers caractères sont utilisés) |
| options | Object | &#8594;  | Objet contenant des options |
| Résultat | Text | &#8592; | Hash du mot de passe |

<!-- END REF-->

#### Description 

<!--REF #_command_.Generate password hash.Summary-->La commande **Generate password hash** retourne un *hash* de *motDePasse*, généré par un algorithme de hachage cryptographique.<!-- END REF-->

Passez une chaîne dans le paramètre *motDePasse*. La commande **Generate password hash** retourne un hash, aussi appelé empreinte cryptographique, de ce mot de passe. Une empreinte cryptographique différente est générée à chaque appel de la commande avec le même mot de passe. Vous devrez utiliser la commande [Verify password hash](verify-password-hash.md) pour contrôler cette empreinte. 

Dans l'objet *options*, passez les propriétés à utiliser lors de la génération de l'empreinte du mot de passe. Les valeurs possibles sont listées dans ce tableau : 

| **Propriété** | **Type de valeur** | **Description**                                                                            | **Valeur par défaut** |
| ------------- | ------------------ | ------------------------------------------------------------------------------------------ | --------------------- |
| algorithm     | chaîne             | Algorithme à utiliser. Actuellement, seul "bcrypt" (en minuscules) est pris en charge.     | bcrypt                |
| cost          | numérique          | Vitesse de hachage. L'algorithme bcrypt prend en charge les valeurs situées entre 4 et 31. | 10                    |

**Note** : Si l'une des valeurs de l'objet *options* est invalide, une erreur est générée et la commande retourne une chaîne vide.

##### Gestion des erreurs 

Les erreurs suivantes peuvent être retournées. Vous pouvez récupérer et analyser les erreurs à l'aide des commandes [Last errors](last-errors.md)  et [ON ERR CALL](on-err-call.md).  

| **Numéro** | **Message**                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| 850        | Password-hash: Algorithme inconnu.                                                         |
| 852        | Password-hash: bcrypt admet un coût qui va de 4 à 31 inclus, le paramètre est hors limite. |

##### A propos de bcrypt 

bcrypt est une fonction de hachage de mot de passe basée sur l'algorithme de chiffrement Blowfish. Elle incorpore un salage protégeant contre les attaques par "rainbow table" et est adaptative : il est possible d'augmenter le nombre d'itérations afin de la rendre plus lente et donc plus résistante aux attaques par force brute. 

#### Exemple 

Cet exemple génère un hash de mot de passe à l'aide de bcrypt avec un coût de facteur 4.

```4d
 var $password : Text
 var $hash : Text
 var $options : Object
 
 $options:=New object("algorithm";"bcrypt";"cost";4)
 $password:=Request("Veuillez entrer votre mot de passe")
 
 $hash:=Generate password hash($password;$options)
 [Users]hash:=$hash
 SAVE RECORD([Users])
```

**Rappel** : Un hash différent est généré à chaque appel de la commande avec le même mot de passe. Ce fonctionnement est standard pour les algorithmes tels que bcrypt, puisque les bonnes pratiques consistent à créer un nouveau salage aléatoire pour chaque hash. Reportez-vous à la description de la commande [Verify password hash](verify-password-hash.md) pour un exemple de vérification des mots de passe.

#### Voir aussi 

  
[Generate digest](generate-digest.md)  
[Verify password hash](verify-password-hash.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1533 |
| Thread safe | &check; |


