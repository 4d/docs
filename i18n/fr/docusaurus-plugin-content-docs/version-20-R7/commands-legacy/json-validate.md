---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* ; *vSchema* ) : Object<!-- END REF-->
<!--REF #_command_.JSON Validate.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| vJson | Object | &#8594;  | Objet JSON à valider |
| vSchema | Object | &#8594;  | Schéma JSON utilisé pour valider les objets JSON |
| Résultat | Object | &#8592; | Statut de la validation et erreurs (éventuellement) |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON Validate.Summary-->La commande **JSON Validate** vérifie la conformité des contenus JSON de *vJson* avec les règles définies dans le schéma JSON *vSchema*.<!-- END REF--> Si le JSON est invalide, la commande renvoie une description détaillée de l'erreur ou des erreurs.

Passez dans *vJson* un objet JSON contenant le contenu JSON à valider.

**Note :** Valider une chaine JSON consiste à vérifier qu'elle suit les règles définies dans le schéma JSON. C'est différent d'une vérification que le JSON est bien-formé, ce que fait la commande [JSON Parse](json-parse.md). 

Passez dans *vSchema* le schéma JSON à utiliser pour la validation. Pour plus d'information sur la façon de créer un schéma JSON, vous pouvez consulter le site [json-schema.org](http://json-schema.org/).

**Note :** Pour valider un objet JSON, 4D utilise la norme décrite dans le document [JSON Schema Validation](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) (Ce document est toujours en phase d'écriture et peut évoluer dans le futur). L'implémentation de 4D est basée sur la version 4 de ce document.

 Si le schéma JSON n'est pas valide, 4D retourne un objet [Null](null.md) et génère une erreur pouvant être détectée par une méthode d'appel sur erreur.

Le **JSON Validate** retourne un objet qui fournit le statut de la validation. Cet objet peut contenir les propriétés suivantes :

| **Nom de la propriété** | **Type**            | **Description**                                                                              |
| ----------------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| *success*               | Booléen             | True si *vJson* est validé, False sinon. Si False, la propriété *errors* est aussi retournée |
| *errors*                | Collection d'objets | Liste des objets Erreur dans le cas où *vJson* n'est pas validé (voir ci-dessous)            |

Chaque objet Erreur de la collection *errors* contient les propriétés suivantes :

| **Nom de la propriété** | **Type** | **Description**                                                                                                                                                                                                       |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *code*                  | Nombre   | Code d'erreur                                                                                                                                                                                                         |
| *jsonPath*              | Chaîne   | Chemin d'accès JSON qui ne peut pas être validé dans *vJson*                                                                                                                                                          |
| *line*                  | Nombre   | Numéro de ligne de l'erreur dans le fichier JSON. Cette propriété est renseignée si le fichier JSON est analysé par la commande [JSON Parse](json-parse.md) avec le paramètre *\**. Sinon la propriété est omise      |
| *message*               | Chaîne   | Message de l'erreur                                                                                                                                                                                                   |
| *offset*                | Nombre   | Décalage de la ligne de l'erreur dans le fichier JSON. Cette propriété est renseignée si le fichier JSON est analysé par la commande [JSON Parse](json-parse.md) avec le paramètre *\**. Sinon la propriété est omise |
| *schemaPaths*           | Chaîne   | Chemin d'accès JSON dans le schéma qui cause l'erreur de validation                                                                                                                                                   |

##### Gestion des erreurs 

Les erreurs suivantes peuvent être retournées :

| **Code** | **Mot-clé JSON**     | **Message**                                                                                                                      |
| -------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 2        | multipleOf           | Erreur à la validation d'une clé 'multipleOf'.                                                                                   |
| 3        | maximum              | La valeur entrée ne doit pas être supérieure à ce que spécifie le schéma ("{s1}").                                               |
| 4        | exclusiveMaximum     | La valeur entrée doit être inférieure à ce que spécifie le schéma ("{s1}").                                                      |
| 5        | minimum              | La valeur entrée ne doit pas être inférieure à ce que spécifie le schéma ("{s1}").                                               |
| 6        | exclusiveMinimum     | La valeur entrée doit être supérieure par rapport à ce que spécifie le schéma ("{s1}").                                          |
| 7        | maxLength            | La chaine est trop longue par rapport à ce que spécifie le schéma.                                                               |
| 8        | minLength            | La chaine est trop courte par rapport à ce que spécifie le schéma.                                                               |
| 9        | pattern              | La chaine "{s1}" n'est pas valide selon le modèle du schema:{s2}                                                                 |
| 10       | additionalItems      | Erreur à la validation d'un tableau. Le JSON contient trop d'éléments par rapport à ce que spécifie le schéma.                   |
| 11       | maxItems             | Le tableau contient trop d'éléments par rapport à ce que spécifie le schéma.                                                     |
| 12       | minItems             | Le tableau ne contient pas assez d'éléments par rapport à ce que spécifie le schéma.                                             |
| 13       | uniqueItems          | Erreur à la validation d'un tableau. Des éléments ne sont pas uniques. Une autre instance de "{s1}" existe déjà dans le tableau. |
| 14       | maxProperties        | Le nombre de propriétés est supérieur à ce que spécifie le schéma.                                                               |
| 15       | minProperties        | Le nombre de propriétés est inférieur à ce que spécifie le schéma.                                                               |
| 16       | required             | La propriété requise "{s1}" est manquante.                                                                                       |
| 17       | additionalProperties | Aucune propriété additionnelle n'est autorisée par le schéma. La(es) propriété(s) {s1} doit(vent) être retirée(s).               |
| 18       | dependencies         | La propriété "{s1}" nécessite la présence de la propriété "{s2}".                                                                |
| 19       | enum                 | Erreur à la validation d'une clé 'enum'. La valeur "{s1}" n'est pas validée par les éléments du schéma.                          |
| 20       | type                 | Type incorrect. Le type attendu est: {s1}.                                                                                       |
| 21       | oneOf                | Erreur à la validation d'une clé 'oneOf'. Le JSON a plus qu'une seule valeur.                                                    |
| 22       | oneOf                | Erreur à la validation d'une clé 'oneOf'. Le JSON n'a aucune des valeurs requises.                                               |
| 23       | not                  | Erreur à la validation d'une clé 'not'. Le JSON est invalide face au 'not'.                                                      |
| 24       | format               | La chaîne ne correspond pas à ("{s1}")                                                                                           |

#### Exemple 

Vous souhaitez valider un objet JSON avec un schéma et obtenir la liste des erreurs de validation, s'il y en a. Vous stockez les lignes d'erreur et les messages dans une variable texte :

```4d
 var $oResult : Object
 $oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)
 If($oResult.success)  //la validation a réussi
         //...
 Else  //la validation a échoué
       var $vLNbErr : Integer
       var $vTerrLine : Text
       $vLNbErr:=$oResult.errors.length  //obtenir le nombre d'erreurs
       ALERT(String($vLNbErr)+" validation error(s) found.")
       For($i;0;$vLNbErr)
          $vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Retour chariot
       End for
 End if
```

**Note :** Cet exemple requiert l'activation de la notation objet (voir *Page Compatibilité*). 

#### Voir aussi 

  
  
[JSON Parse](json-parse.md)  