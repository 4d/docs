---
id: quickTour
title: Tour d'horizon d'ORDA
---

Étant donné qu'ORDA est basé sur des objets, l'utilisation d'ORDA nécessite des connaissances de base en programmation d'objets.

## Explorer le datastore

The ORDA datastore is automatically based upon a 4D database structure, provided it complies with the [ORDA prerequisites](overview.md#orda-prerequisites).

Cet exemple utilisera la structure de base de données 4D simple suivante :

![](../assets/en/ORDA/struc.png)

Pour savoir ce qui est exposé en tant que datastore, créez une nouvelle méthode projet, écrivez la ligne suivante :

```code4d
TRACE
```

Exécutez la méthode - elle appelle simplement la fenêtre du débogueur.
In the Expression area, double-click to insert an expression and enter `ds`. Elle retourne l'objet du datastore.
Deploy the object, you can see that tables and fields are automatically exposed by ORDA as properties of the `ds` object:

![](../assets/en/ORDA/debug1.png)

Cela signifie par exemple que, chaque fois que vous avez besoin de vous référer au champ city de la table [Company], dans ORDA il vous suffit d'écrire :

```code4d
ds.Company.city // retourne le nom de la ville
```

> In the ORDA world, ds.Company is a **dataclass**. ds.Company.city is an **attribute**.

> ORDA est sensible à la casse. `ds.company.city` will not refer to the ds.Company.city attribute.

You have also noticed the extra `hires` property in the ds.Company dataclass. Cela ne correspond pas à un champ. `hires` is actually the name of the _One to many_ relation between Company and Employee:

![](../assets/en/ORDA/struc2s.png)
_Name of the relation as defined in the Inspector_

Cela signifie que, chaque fois que vous avez besoin d'accéder à la liste des employés travaillant pour une entreprise, il vous suffit d'écrire, dans ORDA :

```code4d
ds.Company.hires // retourne la liste des employés
```

Mais n'allez pas trop vite. Voyons maintenant comment enregistrer des données dans des dataclass ORDA.

## Ajouter des données

In ORDA, you can add a record to a dataclass using the `new()` command.

> In the ORDA world, a record is an **entity** -- an entity is itself an object. A command that is attached to a specific object is called a **member method**.

```code4d
$entity:=ds.Company.new() //créer une nouvelle référence d'entité
//dans la dataclass Company  
//et l'assigner à la variable $entity
```

Un nouvel objet entité contient une "copie" de tous les attributs de sa dataclass parente, vous pouvez donc leur assigner des valeurs :

```code4d
$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID is automatically filled
```

Pour le moment, l'entité n'existe qu'en mémoire. To store it in the data file, you need to save it using the `save()` member method:

```code4d
$status:=$entity.save()
```
