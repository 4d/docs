---
id: throw
title: throw
slug: /commands/throw
displayed_sidebar: docs
---

<!--REF #_command_.throw.Syntax-->**throw** ( *errorCode* {; *description*} ) <br/>
*throw* {( *errorObj* )}<!-- END REF-->
<!--REF #_command_.throw.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| errorCode | Integer | &#8594;  | Code d'erreur |
| description | Text | &#8594;  | Description de l'erreur |
| throw {( errorObj )} |
| Paramètre | Type | Description |
| errorObj | Object | &#8594;  | Propriétés de l'erreur à construire |

<!-- END REF-->

#### Description 

<!--REF #_command_.throw.Summary-->La commande **throw** crée une erreur qui sera levée soit immédiatement, soit lorsque la méthode appelante retournera à l'appelant (mode différé).<!-- END REF--> 

Lorsque vous rencontrez une situation d'erreur dans votre code 4D, vous pouvez utiliser la commande **throw** pour générer explicitement une erreur et fournir un message d'erreur spécifique ou un numéro d'erreur. Cela peut être utile pour signaler des conditions exceptionnelles ou des entrées non valides.

Les erreurs générées à l'aide de la commande **throw** sont gérées par le moteur 4D comme des erreurs normales : la boîte de dialogue d'erreur standard est affichée, sauf si une méthode d'interception a été installée à l'aide de la commande [ON ERR CALL](on-err-call.md).

La commande prend en charge trois syntaxes :

##### **throw(errorCode{; description})**

Elle spécifie le code d'erreur et un texte de description facultatif ; l'erreur est immédiatement déclenchée.   
Si aucune description n'est fournie, elle est remplie par :

* Code d'erreur errorCode: (hôte) dans l'application hôte
* Code d'erreur errorCode: (C00x) dans un composant

##### throw(errorObj)

L'objet *errorObj* permet d'obtenir des informations plus détaillées sur les erreurs et de contrôler leur traitement. Il peut contenir les propriétés suivantes, ainsi que toute propriété personnalisée à laquelle vous pouvez faire référence en utilisant des placeholders dans la propriété **message**.

| **propriété**      | **type**  | **description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| componentSignature | texte     | Signature de quatre lettres latines pour identifier de manière unique la source de l'erreur. Si la **componentSignature** n'est pas fournie, la commande utilise "host" pour la base de données hôte et "C001", "C002", ... pour les composants.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| errCode            | numérique | Code d'erreur. Si le **errCode** n'est pas fourni, la commande utilise -1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| message            | texte     | Description de l'erreur. Le **message** peut contenir des placeholders qui seront remplacés par des propriétés personnalisées ajoutées à l'objet *errorObj*. Chaque placeholder doit être spécifié en utilisant des accolades {} entourant le nom de la propriété à utiliser. If the **message** is not provided or is an empty string, the command will look for a description in the current database xliff files with a resname built as follows: ERR\_{componentSignature}\_{errCode}". Si le **message** n'est pas fourni ou s'il s'agit d'une chaîne vide, la commande recherchera une description dans les fichiers xliff de la base de données actuelle, avec un nouveau nom construit comme suit : ERR\_{componentSignature}\_{errCode}". |
| deferred           | booléen   | Vrai si l'erreur doit être différée au retour de la méthode en cours ou à la fin du [Try block](developer.4d.com/docs/fr/Concepts/error-handling#trycatchend-try). La valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

When you use this syntax, the *errorObj* object is returned in [Last errors](last-errors.md).

Lorsque vous utilisez cette syntaxe, l'objet *errorObj* est renvoyé dans [Last errors](last-errors.md).

**Note :** Il est possible d'appeler la commande plusieurs fois dans la même méthode de projet pour générer plusieurs erreurs. Vous pouvez utiliser l'option **deferred** pour envoyer toutes les erreurs en une seule fois.

##### **throw** 

Elle lance toutes les erreurs courantes en ***mode différé***, ce qui signifie qu'elles seront ajoutées à une pile et traitées au retour de la méthode appelante. Ceci est typiquement fait à l'intérieur d'un [ON ERR CALL](on-err-call.md) callback.

* **Dans une application :** Lorsqu'une erreur survient, elle est ajoutée à la pile d'erreurs et la méthode [ON ERR CALL](on-err-call.md) de l'application est appelée à la fin de la méthode courante. La fonction [Last errors](last-errors.md) renvoie la pile d'erreurs.
* **Par conséquent, dans un composant** : La pile d'erreurs peut être envoyée à l'application hôte et la méthode [ON ERR CALL](on-err-call.md) de l'application hôte est appelée.

#### Example 1 

```4d
 var $code : Integer
 var $description : text
 $code:=50042 //Code personnalisé
 $description:=“Il s'agit d'une erreur personnalisée”
 throw($code ;$description) // Lance une erreur avec le message " Il s'agit d'une erreur personnalisée " et errCode = 50042
```

#### Example 2 

```4d
throw({errCode: 1; message: "Ceci est une erreur"}) // Lance une erreur avec errCode = 1 et le message "Ceci est une erreur"
```

#### Example 3 

```4d
throw({errCode: 1}) // Lance une erreur avec errCode = 1 et le message "Error code : 1 (host)"
```

#### Example 4 

```4d
throw({message: "Ceci est une erreur"}) //  Lance une erreur avec errCode = -1 et le message "Ceci est une erreur"
```

#### Example 5 

```4d
throw({message: "Ceci est mon erreur"; deferred: True}) // Lance une erreur avec le message "Ceci est mon erreur" et errCode = -1 en deferred mode 
```

``

#### Example 6 

```4d
throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// Lance une erreur avec le message "File myFileName not found (myFilePath)" en mode différé
```

#### Voir aussi 

[ASSERT](assert.md)  
[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1805 |
| Thread safe | &check; |
| Interdite sur le serveur ||


