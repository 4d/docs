---
id: register-data-key
title: Register data key
slug: /commands/register-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Register data key.Syntax-->**Register data key** ( phraseSecrèteCour | cléDonnéesCour ) : Boolean<!-- END REF-->
<!--REF #_command_.Register data key.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| phraseSecrèteCour &#124; cléDonnéesCour | Texte, Objet | &#8594;  | Phrase secrète courante (texte) ou clé de chiffrement des données courante (objet) |
| Résultat | Boolean | &#8592; | Vrai si la clé de chiffrement des données a été ajoutée avec succès au trousseau 4D. Faux si elle était déjà dans le trousseau 4D. |

<!-- END REF-->

#### Description 

<!--REF #_command_.Register data key.Summary-->La commande **Register data key** ajoute au trousseau 4D la clé de chiffrement de données qui a été passée dans le paramètre.<!-- END REF-->

Le trousseau 4D est un ensemble d'une ou plusieurs clés de chiffrement des données, chargées dans la mémoire, que 4D scanne automatiquement lorsqu'une clé de données est requise pour chiffrer/déchiffrer un fichier de données. Pour plus d'informations, veuillez consulter la page *Chiffrer les données*.

Passez le paramètre *phraseSecrèteCour* ou *cléDonnéesCour*, qui définit la clé de chiffrement, pour ajouter :

* phraseSecrèteCour : Chaîne utilisée pour générer la clé de chiffrement des données. Lorsque vous utilisez ce paramètre, une clé de chiffrement est générée.
* cléDonnéesCour : Objet (avec la propriété *encodedKey*) contenant la clé de chiffrement des données. Cette clé peut avoir été générée à l'aide de la commande [New data key](new-data-key.md).

**Valeur retournée**

* **Vrai** si la clé de chiffrement est chargée dans le trousseau 4D avec succès.
* **Faux** si la même clé de chiffrement était déjà présente dans le trousseau 4D.

#### Exemple 

```4d
 var $passphrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Saisissez la phrase secrète :")
 If(OK=1)
    $added:=Register data key($passphrase)
 
    OPEN DATA FILE("data.4DD") //Aucune clé n'est requise, elle se trouve dans le trousseau 4D
 End if
```

#### Voir aussi 

  
[New data key](new-data-key.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1638 |
| Thread safe | &check; |


