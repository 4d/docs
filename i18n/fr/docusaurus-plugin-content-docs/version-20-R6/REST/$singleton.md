---
id: singleton
title: $singleton
---

Vous pouvez appeler directement les [fonctions exposées de vos shared singletons](../Concepts/classes.md#singleton-classes) via REST.

Les fonctions singleton sont appelées dans des requêtes POST avec la commande `$singleton` et sans `()`. Par exemple, si vous avez défini une fonction `buildVehicle()` dans la classe singleton partagée `VehicleFactory`, vous pouvez l'appeler à l'aide de la requête suivante :

```json
/rest/$singleton/VehicleFactory/buildVehicle
```

avec les données dans le body de la requête POST : ["truck"]

En langage 4D, cet appel est équivalent à :

```4d
$singleton:=cs.VehicleFactory.me.buildVehicle("truck")
```

:::note

N'oubliez pas que seules les fonctions avec le mot-clé [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) peuvent être directement appelées à partir de requêtes REST.

:::

## Appeler des fonctions

Les fonctions Singleton doivent toujours être appelées à l'aide de requêtes REST **POST** (une requête GET recevra une erreur). La syntaxe formelle est la suivante :

`/rest/$singleton/SingletonClass/SingletonClassFunction`

> All 4D code called from REST requests **must be thread-safe** if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the [*Use preemptive process* setting value](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) is ignored by the REST Server).

:::info

Vous pouvez limiter les appels à des fonctions singleton spécifiques en configurant les privilèges appropriés dans le fichier [**roles.json**](../ORDA/privileges.md#fichier-rolesjson).

:::

## Paramètres

Vous pouvez envoyer des paramètres aux fonctions singleton. Côté serveur, ils seront reçus dans les [paramètres déclarés](../Concepts/parameters.md#declaration-des-parametres) des fonctions de la classe singleton.

L'envoi de paramètres aux fonctions singleton est exactement le même que l'envoi de paramètres aux fonctions de classe ORDA. Veuillez vous référer au [paragraphe **Paramètres** de la page "Appeler des fonctions de classe"](ClassFunctions.md#parametres) pour une description détaillée.

## Exemple

Vous avez créé un singleton partagé simple avec une fonction exposée :

```4d
//class mySingleton

shared singleton Class constructor()

exposed Function sayHello ($value : Text)
	return "Hello "+$value

```

:::note

La classe `mySingleton` et la fonction `sayHello` sont répertoriées lorsque vous appelez la commande [`$catalog`]($catalog.md#singleton).

:::

Vous pouvez lancer cette requête :

**POST** `/rest/$singleton/mySingleton/sayHello`

Body de la requête : ["John"]

#### Réponse

```json
{
	"result": "Hello John"
}
```
