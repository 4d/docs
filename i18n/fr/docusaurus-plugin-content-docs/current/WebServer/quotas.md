---
id: quotas
title: Quotas du serveur Web
---

Les applications web peuvent recevoir des requêtes provenant d'un grand nombre de clients différents, ce qui génère divers niveaux de trafic et de consommation de ressources. En l'absence de limites, une activité excessive de la part d'un ou plusieurs clients peut nuire aux performances et à la disponibilité du serveur Web.
Les quotas du serveur Web vous permettent de contrôler l'utilisation des ressources en limitant le trafic, les requêtes, les sessions actives, les sessions guest et les entity set REST. Les quotas peuvent être configurés au niveau global du serveur web (pour l'ensemble des sessions), au niveau des sessions par défaut (pour chaque nouvelle session) ou au niveau de la session REST en cours.

:::tip Article de blog lié

[Un serveur web 4D qui sait quand dire « non »](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no/)

:::

## Conditions requises

La configuration des quotas nécessite l'activation des [sessions évolutives](./sessions.md#enabling-web-sessions).

## Configurer les quotas

### Au démarrage

Au démarrage, vous pouvez configurer les quotas via la propriété `quotas` passée à [`WebServer.start()`](../API/WebServerClass.md#start) pour le serveur Web hôte ou un serveur Web de composant. Pour le serveur Web hôte uniquement, vous pouvez également charger les quotas à partir d'un fichier **HTTPQuotas.json** stocké dans le dossier [`Project/Sources`](../Project/architecture.md#sources).

#### Utilisation de la propriété `quotas`

Les quotas peuvent être définis à l'aide de la propriété `quotas` du paramètre *settings* transmis à la fonction [`start()`](../API/WebServerClass.md#start).

```4d

var $quotas:={}
$quotas.inBytesPerMin:=20000000

WEB Server().start({quotas: $quotas})
```

#### Utilisation d'un fichier HTTPQuotas.json

Pour le serveur Web hôte, vous pouvez créer un fichier **HTTPQuotas.json** et l'enregistrer dans le dossier [`Project/Sources`](../Project/architecture.md#sources). Ce fichier est chargé au démarrage par le serveur Web hôte. Le fichier doit contenir un objet JSON dont les propriétés sont les [noms des propriétés de quotas](../API/QuotaManagerClass.md) :

```json title="/Project/Sources/HTTPQuotas.json"
{
    "inBytesPerHour": 100000000,
    "inBytesPerHourPerSession": 10000000,
    "nbRequestsPerMin": 1000,
    "nbRequestsPerMinPerSession": 100
}
```

Si le fichier **HTTPQuotas.json** contient du code JSON mal formé, le serveur Web ne démarre pas et renvoie l'erreur *551 - JSON malformed*.

Si `settings.quotas` est fourni au démarrage du serveur Web, le fichier **HTTPQuotas.json** est ignoré.

### A l'exécution

Dans un serveur Web en cours d'exécution, vous pouvez modifier les quotas via la propriété [`WebServer.quotas`](../API/WebServerClass.md#quotas). Les modifications s'appliquent à l'activité ultérieure du serveur Web ; les quotas par défaut des sessions s'appliquent aux nouvelles sessions créées après la mise à jour de la valeur du quota.

### Quotas de session REST courante

La propriété [`Session.quotas`](../API/SessionClass.md#quotas) permet de configurer les quotas pour la session REST courante. Elle fournit les valeurs d'utilisation courantes et vous permet de configurer les limites des entity sets et les délais d'expiration de la session REST. Ces quotas sont distincts des quotas par défaut des sessions configurés via [`WebServer.quotas`](../API/WebServerClass.md#quotas), qui s'appliquent lors de la création de nouvelles sessions Web.

### Exemple

L'exemple suivant permet de configurer les quotas du serveur web au démarrage pour une application interne utilisée par une vingtaine de personnes de manière occasionnelle :

```4d

var $quotas:={}
var $webServer : Object:=WEB Server

// Nombre maximal d'octets en entrée acceptés par fenêtre d'une minute sur le serveur web
$quotas.inBytesPerMin:=20000000

// Nombre maximal d’octets en sortie envoyés par session au cours d’une fenêtre d’une minute
$quotas.outBytesPerMinPerSession:=10000000

// Nombre maximal de sessions actives sur le serveur web
$quotas.nbSessions:=50

// Nombre maximal de sessions non authentifiées sur le serveur web
$quotas.nbGuestSessions:=10

// Nombre maximal de requêtes acceptées par minute sur le serveur web
$quotas.nbRequestsPerMin:=500

// Nombre maximal de requêtes acceptées par le serveur web sur une période d’une heure
$quotas.nbRequestsPerHour:=20000

// Démarrage du serveur web
$webServer.start({quotas: $quotas})
```

## Application des quotas

Pour chaque requête entrante, le serveur Web vérifie les quotas lors du prétraitement, avant l'appel de la méthode base [`On Web Connection`](./httpRequests.md#on-web-connection) (si elle est définie) :

1. Si un quota de session est configuré, c'est celui-ci qui est vérifié en premier.
2. Si la requête est acceptée, le quota global du serveur est vérifié.
3. Si les deux vérifications sont satisfaites, la demande est traitée.

Si l'un ou l'autre de ces quotas est dépassé, la requête est rejetée avec une réponse **HTTP 429 Too Many Requests**. Aucun process Web n'est créé et la méthode [`On Web Connection`](./httpRequests.md#on-web-connection) n'est pas appelée (si elle est définie).

Si le quota d'octets de sortie est dépassé pendant l'envoi d'une réponse, la requête en cours est interrompue. Les règles de prétraitement ci-dessus s'appliquent à la requête suivante dans la même fenêtre temporelle.

### Réponses de limitation de débit

Les quotas de limitation de débit s'appuient sur des fenêtres horaires définies. Lorsqu'un quota est atteint, les requêtes suivantes sont rejetées jusqu'à la fin de la fenêtre courante d'une minute ou d'une heure. La réponse **HTTP 429 Too Many Requests** comprend un en-tête `Retry-After` indiquant le délai à respecter avant d'envoyer une nouvelle requête.

Lorsqu'un des quotas simultanés (`nbSessions`, `nbGuestSessions` et `nbEntitySetsPerSession`) est atteint, la réponse comprend un en-tête `Retry-After` vide jusqu'à ce que le quota ne soit plus atteint.

Les limites d'octets en entrée s'appliquent à l'ensemble des données reçues pour une requête, y compris ses en-têtes et son corps. Les limites d'octets en sortie sont calculées par rapport à la taille non compressée de la réponse, quels que soient les paramètres de compression du serveur Web.

## Valeurs des quotas

Les limites de quota doivent être des nombres entiers positifs. Une valeur *Undefined* signifie que le quota n'est pas configuré et n'est pas appliqué. Si vous définissez une valeur de quota égale à zéro ou à un nombre négatif, une erreur se produit et la valeur de quota existante reste inchangée.

Les compteurs de quotas sont stockés en mémoire pour chaque instance de 4D Server et ne sont pas partagés entre plusieurs instances du serveur.

## Serveurs Web des composants

Les quotas configurés pour le serveur Web d'un composant s'appliquent uniquement à ce serveur et sont indépendants des quotas configurés pour le serveur Web hôte ou pour d'autres serveurs Web de composants.

Le fichier de configuration [**HTTPQuotas.json**](#using-an-httpquotasjson-file) s'applique uniquement au serveur Web hôte. Les serveurs Web des composants doivent être configurés avec la propriété [`.quotas`](../API/WebServerClass.md#quotas) du serveur Web et/ou la propriété [`.quotas`](../API/SessionClass.md#quotas) de la session.

## Voir également

- [`WebServer.quotas`](../API/WebServerClass.md#quotas)
- [`WebServer.start()`](../API/WebServerClass.md#start)
- [`Session.quotas`](../API/SessionClass.md#quotas)
- [`4D.QuotaManager`](../API/QuotaManagerClass.md)