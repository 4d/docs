---
id: http-rules
title: Règles de configuration HTTP
---

Vous pouvez définir des règles de configuration HTTP pour contrôler les en-têtes de réponse HTTP pour toutes les requêtes reçues par le serveur web 4D, y compris les requêtes REST. Vous pouvez ajouter, modifier ou supprimer des en-têtes HTTP, envoyer des redirections ou définir le statut HTTP. Cette fonction est utile pour mettre en œuvre des politiques de sécurité basées sur le traitement des en-têtes.

Pour définir des règles de configuration HTTP, il suffit d'écrire quelques RegEx pour déclarer les motifs (*patterns*) d'URL que l'on souhaite contrôler, ainsi que la manière de modifier les en-têtes de réponse. Vous pouvez définir ces règles en utilisant un fichier `HTTPRules.json` stocké dans le dossier du projet, ou en utilisant le paramètre *settings* de la fonction [`start()`](../API/WebServerClass.md#start) de l'objet serveur web.

## Conditions requises

Les règles de configuration HTTP sont prises en charge dans les contextes suivants :

- les [sessions extensibles](./sessions.md#enabling-web-sessions) ou [pas de sessions](../settings/web.md#no-sessions) sont activées,
- un serveur web exécuté localement par 4D ou 4D Server, y compris ceux [exécutés par des composants](./webServerObject.md).

## Comment déclarer des règles

Vous pouvez déclarer des règles de réponse HTTP :

- dans un fichier de configuration nommé **HTTPRules.json** stocké dans le dossier [`Project/Sources`](../Project/architecture.md#sources) du projet. Ces règles sont chargées et appliquées dans le serveur Web principal une fois qu'il a démarré.
- en utilisant une propriété [`.rules`](../API/WebServerClass.md#rules) définie dans le paramètre *settings* de la fonction [`start()`](../API/WebServerClass.md#start), pour n'importe quel objet serveur web :

```4d
WEB Server.start($settings.rules) //règles au démarrage du serveur
```

Si un fichier **HTTPRules.json** et un appel à la commande [`WEB Server`](../commands/web-server.md) avec un `$settings.rules` valide sont utilisés simultanément, la commande `WEB Server` est prioritaire.

Si l'URI de la requête ne correspond à aucun des *patterns* RegEx, le serveur web renvoie une réponse par défaut.

## Définition des règles

Le fichier **HTTPRules.json** ou la propriété [`.rules`](../API/WebServerClass.md#rules) doit contenir une collection d'**objets règle**.

Un objet règle est défini par:

- un RegEx décrivant un motif d'URL, par exemple "^(.\*\\.(jpg|jpeg|png|gif)"
- le nom de l'action à exécuter pour la réponse HTTP, par exemple "removeHeaders"
- la valeur de l'action, par exemple "X-Unwanted-Header1"

Les autres propriétés sont ignorées.

### Motifs d'URL

Les motifs d'URL sont donnés en utilisant des **expressions régulières**. Pour déclarer un *pattern* d'expression régulière, utilisez le nom de propriété "RegExPattern".

Ex: `"RegExPattern": "/Test/Authorized/(.*)"`

Lorsque le serveur web reçoit une requête, **tous** les motifs d'URL sont déclenchés séquentiellement dans l'ordre donné, et tous les motifs correspondants sont exécutés. Si plusieurs actions modifient des ressources similaires, la dernière action exécutée est prise en compte.

### Actions

Les mots-clés d'action suivants sont pris en charge :

| Mot-clé         | Value type                 | Description                                                                                                                                                                                                                           |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `removeHeaders` | Text ou collection de text | En-tête(s) à supprimer des réponses HTTP. Si un en-tête à supprimer n'existe pas dans l'en-tête de la réponse, il est ignoré.                                                      |
| `addHeaders`    | Object                     | Nom (texte) et valeur (texte) des en-têtes à ajouter aux réponses HTTP.                                                                                                         |
| `setHeaders`    | Object                     | Nom (texte) et valeur (texte) des en-têtes à modifier dans les réponses HTTP. Si l'en-tête à modifier n'existe pas dans l'en-tête de la réponse, il est ajouté. |
| `denyAccess`    | Boolean                    | true pour refuser l'accès à la ressource, false pour l'autoriser. Lorsque l'accès à une ressource est refusé, le serveur web renvoie un statut 403 par défaut                                                         |
| `redirect`      | Text                       | URL de redirection. Lorsqu'une redirection est déclenchée, le serveur web renvoie par défaut un statut 302                                                                                                            |
| `status`        | Number                     | Statut HTTP                                                                                                                                                                                                                           |

### En-têtes non modifiables

Certains en-têtes ne peuvent pas être ajoutés, modifiés ou supprimés :

| En-tête          | Ajout | Modification     | Suppression |
| ---------------- | ----- | ---------------- | ----------- |
| Date             | Non   | Non              | Non         |
| Content-Length   | Non   | Non              | Non         |
| Content-Encoding | Non   | Non              | Non         |
| Vary             | Oui   | Non              | Non         |
| Set-Cookie       | Oui   | Ajoute un cookie | Non         |

Les modifications non autorisées de ces en-têtes ne génèrent pas d'erreurs, mais les modifications seront ignorées.

### Règles de configuration courantes

Vous pouvez connaître les règles en vigueur en utilisant la [propriété `.rules` de l'objet Serveur Web](../API/WebServerClass.md#rules) :

```
var $rules : Collection
$rules:=WEB Server.rules //règles de configuration courantes
```

## Exemples

Les règles de configuration peuvent être définies en utilisant un fichier `HTTPRules.json` ou le paramètre *settings* de la fonction [`.start()`](../API/WebServerClass.md#start) du serveur web.

### Utilisation d'un fichier HTTPRules.json

```json

[
	{
		"comment": "Toutes requêtes: autoriser méthode GET, supprimer en-tête 'Server' et définir en-têtes de sécurité",
		"regexPattern": "/(.*)",
		"setHeaders": {
			"Allow": "GET",
			"X-Frame-Options": "SAMEORIGIN",
			"Content-Security-Policy": "default-src 'self'"
		},
		"removeHeaders": [
			"Server"
		]
	},
	{
		"comment": "requêtes REST: autoriser méthode POST",
		"regexPattern": "/rest/(.*)",
		"addHeaders": {
			"Allow": "POST"
		}
	},
	{
		"comment": "Fichiers html dans dossier 'doc' : contrôle du cache",
		"regexPattern": "/docs/(.*).html",
		"setHeaders": {
			"Cache-Control": "max-age=3600"
		},
		"removeHeaders": [
			"X-Powered-By"
		]
	},
	{
		"comment": "Status 503 sur page 'maintenance'",
		"regexPattern": "^/maintenance.html",
		"status": 503
	},
	{
		"comment": "Redirection fichiers CSS et JS",
		"regexPattern": "^(.*\\\\.(css|js))",
		"redirect": "https://cdn.example.com/"
	},
	{
		"comment": "Redirection images avec code de statut permanent",
		"regexPattern": "^(.*\\\\.(jpg|jpeg|png|gif))",
		"redirect": "https://cdn.example.com/images/",
		"status": 301
	},
	{
		"comment": "Refuser accès à toutes les ressources dans le dossier 'private'",
		"regexPattern": "/private/(.*)",
		"denyAccess": true
	},
	{
		"comment": "Autoriser accès à toutes les ressources dans le dossier 'private/allowed'",
		"regexPattern": "/private/allowed/(.*)",
		"denyAccess": false
	}
]

```

### Utilisation du paramètre *settings*

```4d
var $rule:={}

var $settings:={}

$settings.rules:=[]

$rule:={}
$rule.comment:="Toutes requêtes: autoriser méthode GET, supprimer en-tête 'Server' et définir en-têtes de sécurité"
$rule.regexPattern:="/(.*)"
$rule.setHeaders:={Allow: "GET"}
$rule.setHeaders["X-Frame-Options"]:="SAMEORIGIN"
$rule.setHeaders["Content-Security-Policy"]:="default-src 'self'"
$rule.removeHeaders:=["Server"]
$settings.rules.push($rule)

$rule:={}
$rule.comment:="requêtes REST: autoriser méthode POST"
$rule.regexPattern:="/rest/(.*)"
$rule.addHeaders:={Allow: "POST"}
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Fichiers html dans dossier 'doc' : contrôle du cache"
$rule.regexPattern:="/docs/(.*).html"
$rule.setHeaders:={}
$rule.setHeaders["Cache-Control"]:="max-age=3600"
$rule.removeHeaders:=["X-Powered-By"]
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Status 503 sur page 'maintenance'"
$rule.regexPattern:="^/maintenance.html"
$rule.status:=503
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Redirection fichiers CSS et JS"
$rule.regexPattern:="^(.*\\\\.(css|js))"
$rule.redirect:="https://cdn.example.com/"
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Redirection images avec code de statut permanent"
$rule.regexPattern:="^(.*\\\\.(jpg|jpeg|png|gif))"
$rule.redirect:="https://cdn.example.com/images/"
$rule.status:=301
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Refuser accès à toutes les ressources dans le dossier 'private'"
$rule.regexPattern:="/private/(.*)"
$rule.denyAccess:=True
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Autoriser accès à toutes les ressources dans le dossier 'private/allowed'"
$rule.regexPattern:="/private/allowed/(.*)"
$rule.denyAccess:=False
$settings.rules.push($rule)

$return:=WEB Server.start($settings)

```

:::tip Article(s) de blog sur le sujet

[New Way to Control Your HTTP Responses](https://blog.4d.com/new-way-to-control-your-http-responses/)

:::
