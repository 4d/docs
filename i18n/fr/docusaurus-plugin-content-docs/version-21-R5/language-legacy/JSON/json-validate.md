---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* : Object, Collection ; *vSchema* : Object ) : Object<!-- END REF-->
<!--REF #_command_.JSON Validate.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| vJson | Object, Collection | &#8594;  | Objet ou collection JSON à valider |
| vSchema | Object | &#8594;  | Schéma JSON utilisé pour valider les objets JSON |
| Résultat | Object | &#8592; | Statut de la validation et erreurs (éventuellement) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|21 R2|Prise en charge de JSON Schema draft 2020-12|
|16 R4|Créé|

</details>
</div>

## Description 

<!--REF #_command_.JSON Validate.Summary-->La commande **JSON Validate** vérifie la conformité du contenu JSON de *vJson* avec les règles définies dans le schéma JSON *vSchema*.<!-- END REF--> Si le JSON n'est pas valide, la commande renvoie une description détaillée des erreurs.

Dans *vJson*, passez un objet JSON contenant le contenu JSON à valider.

**Note :** Valider une chaîne JSON consiste à vérifier qu'elle respecte les règles définies dans un schéma JSON. Cela diffère de la vérification de la syntaxe JSON, effectuée par la commande [JSON Parse](../commands/json-parse).

Dans *vSchema*, passez le schéma JSON à utiliser pour la validation. Pour plus d'informations sur la création d'un schéma JSON, consultez le site [json-schema.org](http://json-schema.org/).

### Drafts de validation JSON Schema pris en charge

Pour valider un objet JSON, 4D utilise la norme décrite dans un document **JSON Schema Validation draft**. Plusieurs versions de ces documents ont été publiées au fil du temps.

4D prend en charge deux versions du draft :

- [version 2020-12](https://json-schema.org/draft/2020-12/json-schema-validation) (recommandée). Toutes les parties de la norme sont prises en charge, à l'exception de :
	- vocabulary
	- `contentEncoding`, `contentMediaType` et `contentSchema` (validation de contenu non JSON)
	- pour les références : `$dynamicRef`/`$dynamicAnchor` et les références en `https:...`
- [version 4](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) (implémentation historique, utilisée par défaut). Cette version comporte davantage de limitations que la version 2020-12.

#### Spécifier la version à utiliser

La version à utiliser doit être indiquée dans le schéma avec la clé *$schema* :

- version 2020-12 :

```json
"$schema": "https://json-schema.org/draft/2020-12/schema",
```

- version 4 :

```json
"$schema": "http://json-schema.org/draft-04/schema#",
```

Pour des raisons de compatibilité, la version 4 est utilisée si la clé *$schema* est omise. Il est toutefois recommandé d'utiliser la version 2020-12, qui fournit les contrôles les plus fiables.

:::note

Si vous déclarez une autre version du schéma avec la clé *$schema*, une erreur est renvoyée.

:::

### Résultat de la validation

Si le schéma JSON n'est pas valide, 4D renvoie un objet [Null](../commands/null) et génère une erreur qui peut être interceptée par une [méthode de gestion des erreurs](../../Concepts/error-handling.md#installing-an-error-handling-method).

La commande **JSON Validate** renvoie un objet qui indique le statut de la validation. Cet objet peut contenir les propriétés suivantes :

| **Nom de la propriété** | **Type**            | **Description** |
| ----------------------- | ------------------- | -------------- |
| *success*               | Booléen             | Vrai si *vJson* est valide, faux sinon. Si la valeur est fausse, la propriété *errors* est également renvoyée. |
| *errors*                | Collection d'objets | Liste des objets erreur si *vJson* n'est pas valide (voir ci-dessous). |

Chaque objet erreur de la collection *errors* contient les propriétés suivantes :

| **Nom de la propriété** | **Type** | **Description** |
| ----------------------- | -------- | -------------- |
| *code*                  | Nombre   | Code d'erreur |
| *jsonPath*              | Chaîne   | Chemin JSON qui ne peut pas être validé dans *vJson* |
| *line*                  | Nombre   | Numéro de ligne de l'erreur dans le fichier JSON. Cette propriété est renseignée si le JSON a été analysé avec le paramètre *\** de [JSON Parse](../commands/json-parse). Sinon, elle est omise. |
| *message*               | Chaîne   | Message d'erreur |
| *offset*                | Nombre   | Décalage de ligne de l'erreur dans le fichier JSON. Cette propriété est renseignée si le JSON a été analysé avec le paramètre *\** de [JSON Parse](../commands/json-parse). Sinon, elle est omise. |
| *schemaPaths*           | Chaîne   | Chemin JSON dans le schéma à l'origine de l'erreur de validation |

### Liste des erreurs

<details>Les erreurs suivantes peuvent être renvoyées :

| **Code** | **Mot-clé JSON**     | **Message** |
| -------- | -------------------- | ----------- |
| 2        | multipleOf           | Erreur lors de la validation de la clé 'multipleOf'. |
| 3        | maximum              | La valeur ne doit pas être supérieure à celle spécifiée dans le schéma ("{s1}"). |
| 4        | exclusiveMaximum     | La valeur doit être inférieure à celle spécifiée dans le schéma ("{s1}"). |
| 5        | minimum              | La valeur ne doit pas être inférieure à celle spécifiée dans le schéma ("{s1}"). |
| 6        | exclusiveMinimum     | La valeur doit être supérieure à celle spécifiée dans le schéma ("{s1}"). |
| 7        | maxLength            | La chaîne est plus longue que la limite spécifiée dans le schéma. |
| 8        | minLength            | La chaîne est plus courte que la limite spécifiée dans le schéma. |
| 9        | pattern              | La chaîne "{s1}" ne correspond pas au modèle du schéma : {s2}. |
| 10       | additionalItems      | Erreur lors de la validation d'un tableau. Le JSON contient plus d'éléments que la limite spécifiée dans le schéma. |
| 11       | maxItems             | Le tableau contient plus d'éléments que la limite spécifiée dans le schéma. |
| 12       | minItems             | Le tableau contient moins d'éléments que la limite spécifiée dans le schéma. |
| 13       | uniqueItems          | Erreur lors de la validation d'un tableau. Les éléments ne sont pas uniques. Une autre instance de "{s1}" figure déjà dans le tableau. |
| 14       | maxProperties        | Le nombre de propriétés dépasse la limite spécifiée dans le schéma. |
| 15       | minProperties        | Le nombre de propriétés est inférieur à la limite spécifiée dans le schéma. |
| 16       | required             | La propriété obligatoire "{s1}" est manquante. |
| 17       | additionalProperties | Le schéma n'autorise aucune propriété supplémentaire. Supprimez la ou les propriétés {s1}. |
| 18       | dependencies         | La propriété "{s1}" nécessite la propriété "{s2}". |
| 19       | enum                 | Erreur lors de la validation de la clé 'enum'. La valeur "{s1}" ne correspond à aucun élément enum du schéma. |
| 20       | type                 | Type incorrect. Le type attendu est : {s1}. |
| 21       | oneOf                | Le JSON correspond à plusieurs valeurs. |
| 22       | oneOf                | Le JSON ne correspond à aucune valeur. |
| 23       | not                  | Le JSON n'est pas valide par rapport à la valeur de 'not'. |
| 24       | format               | La chaîne ne correspond pas à ("{s1}"). |
| 25       | const                | La valeur "{s1}" ne correspond pas à la valeur 'const' du schéma. |
| 26       | unevalutedProperties | Le schéma n'autorise pas les propriétés non évaluées. Supprimez la ou les propriétés {s1}. |
| 27       | unevalutedItems      | Les éléments de tableau non évalués ne sont pas autorisés. L'élément à l'index {s1} n'est couvert par aucun schéma. |
| 28       | propertyNames       | Le nom de propriété "{s1}" n'est pas valide selon le schéma 'propertyNames'. |
| 29       | contains             | Le tableau ne contient aucun élément correspondant au schéma 'contains'. |
| 30       | contains             | Le tableau doit contenir au moins {s1} éléments correspondant au schéma 'contains', mais seuls {s2} ont été trouvés. |
| 31       | contains             | Le tableau doit contenir au plus {s1} éléments correspondant au schéma 'contains', mais {s2} ont été trouvés. |
| 32       | required             | La propriété "{s1}" nécessite la présence de la propriété "{s2}". |
| 35       | prefixItems          | Les premiers éléments du tableau ne correspondent pas aux schémas 'prefixItems'. |
| 36       | dependentSchemas     | La validation de 'dependentSchemas' a échoué. |
| 37       | $ref                 | La référence n'a pas pu être résolue. |
| 38       | $ref                 | Une référence circulaire a été détectée. |

</details>

## Exemple 

Vous souhaitez valider un objet JSON avec un schéma, obtenir la liste des erreurs éventuelles et stocker les lignes et les messages d'erreur dans une variable texte :

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

## Voir aussi 

  
  
[JSON Parse](../commands/json-parse)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1456 |
| Thread safe | yes |


