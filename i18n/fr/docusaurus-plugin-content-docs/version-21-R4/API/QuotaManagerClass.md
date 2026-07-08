---
id: QuotaManagerClass
title: QuotaManager
---

La classe `4D.QuotaManager` vous offre une interface permettant de configurer et de surveiller certaines limites d'utilisation que vous appliquez à votre application 4D. Les seuils sont utiles, par exemple, pour protéger le serveur contre les requêtes mal optimisées ou l'utilisation excessive de ses ressources. Typiquement, le gestionnaire de quotas vous permet de définir des limites concernant les ressources ORDA auxquelles une session de serveur REST peut accéder.

Les objets `4D.QuotaManager` peuvent être instanciés via la propriété [`quotas` d'un objet session](./SessionClass.md#quotas).

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 21 R4   | Classe ajoutée |

</details>

### Objet QuotaManager

Les objets 4D.QuotaManager exposent les propriétés suivantes :

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #QuotaManagerClass.currentValues.Syntax -->](#currentvalues)<br/><!-- INCLUDE #QuotaManagerClass.defaultcurrentValuesEntitySetTimeout.Summary -->        |
| [<!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->](#defaultentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Summary --> |
| [<!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Syntax -->](#maxentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Summary -->             |
| [<!-- INCLUDE #QuotaManagerClass.nbEntitySets.Syntax -->](#nbentitysets)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySets().Summary -->                                |

<!-- REF QuotaManagerClass.currentValues.Desc -->

## .currentValues

<!-- REF #QuotaManagerClass.currentValues.Syntax -->**currentValues** : Object<!-- END REF -->

#### Description

La propriété `.currentValues` contient <!-- REF #QuotaManagerClass.currentValues.Summary -->les valeurs courantes associées aux propriétés de quotas définies<!-- END REF -->. Cet objet est automatiquement mis à jour par le serveur.

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### Description

La propriété `.defaultEntitySetTimeout` contient <!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->le délai d'inactivité par défaut pour les entity sets REST stockés en mémoire pendant la session courante (en secondes)<!-- END REF -->.

Par défaut, cette valeur est de 2 heures (7200 secondes). Elle peut également être définie lors de la création de l'entity set à l'aide de l'API REST [`$timeout`](../REST/$timeout.md).

Vous pouvez modifier cette valeur de manière dynamique à l'aide de la propriété [`quotas.defaultEntitySetTimeout` de la session](./SessionClass.md#quotas), afin qu'elle s'applique à tout entity set créé par la suite au cours de la session (les valeurs de délai d'expiration par défaut des entity sets existants ne sont pas modifiées).

:::note

Si vous définissez une valeur supérieure à celle de la propriété `maxEntitySetTimeout`, elle sera alignée sur la valeur de `maxEntitySetTimeout`.

:::

Vous ne pouvez pas passer une valeur <= 0 (une erreur est générée dans ce cas). Pour réinitialiser la valeur de la propriété pour la session, passez *undefined*.

#### Exemple

Dans un code 4D au sein d'un process REST :

```4d
Session.quotas.defaultEntitySetTimeout:=1200
```

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### Description

La propriété `.maxEntitySetTimeout` contient <!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->la valeur du délai d'inactivité maximal pour les entity sets REST stockés en mémoire pendant la session courante (en secondes)<!-- END REF -->.

Vous pouvez définir cette valeur à l'aide de la propriété [`quotas.maxEntitySetTimeout` de la session](./SessionClass.md#quotas), afin qu'elle s'applique à tout entity set créé par la suite au cours de la session (les valeurs de délai d'inactivité maximale des entity sets existants ne sont pas modifiées).

Une fois la propriété `.maxEntitySetTimeout` définie, aucun entity set créé par la suite au cours de la session ne peut avoir un délai d'inactivité supérieur à la valeur de `.maxEntitySetTimeout`.

Par exemple, en supposant que le délai d'inactivité maximal soit fixé à 40 minutes (2400 secondes), si un entity set est créé avec un délai d'inactivité requis supérieur à cette valeur maximale :

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... alors le délai défini dans la requête est ignoré et l'entity set sera libéré après 40 minutes s'il n'est pas utilisé pendant cette période.

Vous ne pouvez pas passer une valeur <= 0 (une erreur est générée dans ce cas). Pour réinitialiser la valeur de la propriété pour la session, passez *undefined*.

#### Exemple

Dans un code 4D au sein d'un process REST :

```4d
Session.quotas.maxEntitySetTimeout:=2400
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySets.Desc -->

## .nbEntitySets

<!-- REF #QuotaManagerClass.nbEntitySets.Syntax -->**nbEntitySets** : Integer<!-- END REF -->

#### Description

La propriété `.nbEntitySets` contient <!-- REF #QuotaManagerClass.nbEntitySets.Summary -->le nombre maximal d'entity sets REST autorisés en mémoire pour la session courante (en secondes)<!-- END REF -->.

Par défaut, il n'y a pas de limite pour les entity sets [stockés en mémoire par les requêtes REST](../REST/$info.md) (la valeur est 0). Vous pouvez définir une limite afin de contrôler la charge utile du serveur pour une session spécifique.

Lorsque le nombre maximal d'entity sets autorisé est atteint, une requête REST visant à créer un entity set recevra un [**status code HTTP 429** et une réponse d'erreur](../REST/REST_requests.md#rest-status-and-response), jusqu'à ce qu'au moins un entity set soit libéré. Vous pouvez libérer un entity set du cache à l'aide de la [commande REST `$release`](../REST/$entityset.md#entitysetrelease).

Vous ne pouvez pas passer une valeur <= 0 (une erreur est générée dans ce cas). Pour réinitialiser la valeur de la propriété pour la session, passez *undefined*.

#### Exemple

Dans un code 4D au sein d'un process REST :

```4d
	//max 50 entity sets
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->




