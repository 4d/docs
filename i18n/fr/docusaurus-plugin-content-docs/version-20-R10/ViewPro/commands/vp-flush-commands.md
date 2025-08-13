---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<details><summary>Historique</summary>

| Release | Modifications                           |
| ------- | --------------------------------------- |
| 20 R9   | Prise en charge du paramètre *callback* |

</details>

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** ( *vpAreaName* : Text {; *callback* : 4D.Function} )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Paramètres | Type                        |    | Description                                                                                                                                            |
| ---------- | --------------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| vpAreaName | Text                        | -> | Nom d'objet formulaire zone 4D View Pro                                                                                                                |
| callback   | 4D.Function | -> | (Facultatif) Une fonction de rappel exécutée après que toutes les commandes VP et les fonctions personnalisées 4D ont été exécutées |

<!-- END REF -->

## Description

La commande `VP FLUSH COMMANDS` <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->exécute immédiatement les commandes stockées et vide le buffer de commandes<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Afin d'améliorer la performance et de réduire le nombre de requêtes envoyées, les commandes 4D View Pro appelées par le développeur sont stockées temporairement dans un buffer de commandes. Lorsqu'il est appelé, `VP FLUSH COMMANDS` exécute les commandes comme un lot en quittant la méthode et vide le contenu du buffer de commandes.

Si une fonction *callback* est fournie, elle est exécutée seulement après que toutes les commandes stockées et que les fonctions personnalisées 4D aient terminé le traitement. Cela garantit que toutes les actions de suivi, telles que l'enregistrement ou l'impression du document, ne sont effectuées qu'après tous les calculs.

Les paramètres suivants peuvent être utilisés dans la fonction de rappel (callback) :

| Paramètres |                               | Type    | Description                                             |
| ---------- | ----------------------------- | ------- | ------------------------------------------------------- |
| param1     |                               | Text    | Nom de l'objet 4D View Pro                              |
| param2     |                               | Object  | Objet retourné par la méthode avec un message de statut |
|            | .success      | Boolean | `True` si l'importation a réussi, `False` sinon         |
|            | .errorCode    | Integer | Code d'erreur                                           |
|            | .errorMessage | Text    | Message d'erreur                                        |

---

## Exemple 1

Vous souhaitez exécuter des commandes et vider le buffer de commande :

```4d
// Définir des valeurs de texte dans des cellules spécifiques
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

// Exécutez les commandes enregistrées, effacez le buffer et déclenchez le rappel.
VP FLUSH COMMANDS("ViewProArea1")
```

## Exemple 2

Vous souhaitez exécuter des commandes, vider le buffer de commandes et déclencher une fonction de rappel :

```4d
// Définir des valeurs de texte dans des cellules spécifiques
VP SET FORMULA(VP Cell("ViewProArea1";10;1);"MyCustomFunction()")
VP SET FORMULA(VP Cell("ViewProArea1";10;2);"MyCustomFunction2()")
VP SET FORMULA(VP Cell("ViewProArea1";10;3);"MyCustomFunction3()")

// Exécutez les commandes enregistrées, effacez le buffer et déclenchez le rappel
VP FLUSH COMMANDS("ViewProArea1"; Formula(onFlushComplete))
```

```4d
// Méthode 'onFlushComplete'
#DECLARE($name : Text; $status : Object)
   ALERT("Toutes les commandes et fonctions personnalisées ont été exécutées. Vous pouvez maintenant imprimer ou enregistrer le document.")
```
