---
id: web-service-call
title: WEB SERVICE CALL
slug: /commands/web-service-call
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE CALL.Syntax-->**WEB SERVICE CALL** ( *urlAccès* ; *soapAction* ; *nomMéthode* ; *nameSpace* {; *typeComposé* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE CALL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| urlAccès | Text | &#8594;  | URL d’accès au Web Service |
| soapAction | Text | &#8594;  | Contenu du champ SOAPAction |
| nomMéthode | Text | &#8594;  | Nom de la méthode |
| nameSpace | Text | &#8594;  | Espace de nommage |
| typeComposé | Integer | &#8594;  | Configuration de types composés (types simples si omis) |
| * | Opérateur | &#8594;  | Ne pas fermer la connexion |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE CALL.Summary-->La commande **WEB SERVICE CALL** permet d’invoquer un Web Service en envoyant une requête HTTP.<!-- END REF--> Cette requête contient le message SOAP préalablement construit à l’aide de la commande [WEB SERVICE SET PARAMETER](web-service-set-parameter.md). 

Tout appel ultérieur à la commande [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) provoquera la construction d’une nouvelle requête. L’exécution d’une commande **WEB SERVICE CALL** efface également tout éventuel résultat de Web Service précédemment appelé et le remplace par le(s) nouveau(x) résultats. 

Passez dans *urlAccès* l’URL complet permettant d’accéder au Web Service (ne confondez pas cet URL avec celui du fichier WSDL, décrivant le Web Service). 

* **Accès en mode sécurisé (SSL)** : Si vous souhaitez utiliser le Web Service en mode sécurisé (SSL), passez simplement https:// en tête de l’URL au lieu de http://. Ce paramétrage active automatiquement la connexion en mode sécurisé.  
A noter que cette commande peut utiliser un certificat serveur (cf. commande [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)). Si le certificat n’est pas valide (expiré ou révoqué), la variable système OK prend la valeur 0 et l’erreur 901 "Certificat serveur invalide" est retournée. Vous pouvez intercepter cette erreur à l’aide d’une méthode d’appel sur erreur installée par la commande [ON ERR CALL](on-err-call.md).

Passez dans le paramètre *soapAction* le contenu du champ SOAPAction de la requête. Ce champ contient généralement la valeur “NomService#NomMéthode”. 

Passez dans le paramètre *nomMéthode* le nom de la méthode distante (appartenant au Web Service) que vous souhaitez exécuter. 

Passez dans le paramètre *nameSpace* l’espace de nommage XML utilisé pour la requête SOAP. Pour plus d’informations sur l’espace de nommage XML, reportez-vous au manuel *Mode Développement* de 4D.

Le paramètre optionnel *typeComposé* permet d'indiquer la configuration des paramètres Web Service envoyés ou reçus (définis à l’aide des commandes [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) et [WEB SERVICE GET RESULT](web-service-get-result.md)). La valeur du paramètre *typeComposé* dépend du mode de publication du Web Service (DOC ou RPC, cf. manuel *Mode Développement*) et de ses paramètres.   
Vous devez passer dans *typeComposé* l’une des constantes suivantes, placées dans le thème *Web Services (Client)* :

| Constante              | Type        | Valeur |
| ---------------------- | ----------- | ------ |
| Web Service dynamic    | Entier long | 0      |
| Web Service manual     | Entier long | 3      |
| Web Service manual in  | Entier long | 1      |
| Web Service manual out | Entier long | 2      |

Chaque constante correspond à une “configuration” de Web Services. Une configuration représente une combinaison entre le mode de publication (RPC/DOC) et les types de paramètres entrée/sortie simples ou composés (aussi appelés “complexes”) mis en oeuvre. 

**Note :** La caractéristique “entrée” ou “sortie” des paramètres s’évalue du point de vue de la méthode proxy/du Web Service :   
• un paramètre “entrée” est une valeur passée à la méthode proxy et donc au Web Service,  
• un paramètre “sortie” est retourné par le Web Service et donc par la méthode proxy (généralement via $0). 

Le tableau suivant fournit les configurations possibles et les constantes correspondantes : 

| **Paramètres entrée** |                              |                                 |
| --------------------- | ---------------------------- | ------------------------------- |
| **Paramètres sortie** | **Simples**                  | **Composés**                    |
| **Simples**           | RPC / Web Service dynamic    | RPC / Web Service manual in     |
| **Composés**          | RPC / Web Service manual out | RPC ou DOC / Web Service manual |
  
  
Les cinq configurations décrites ci-dessous peuvent donc être mises en oeuvre. Dans tous les cas, 4D se charge de formater la requête SOAP à envoyer au Web Service ainsi que son enveloppe. Il vous appartient de formater le contenu de cette requête suivant la configuration utilisée. 

**Note :** Bien qu’étant des types XML composés, les tableaux de données sont gérés par 4D comme des types simples. 

##### Mode RPC, entrée et sortie simples 

Cette configuration est la plus simple à utiliser. Dans ce cas, le paramètre *typeComposé* contient la constante Web Service dynamic ou est omis.   
Les paramètres envoyés et les réponses reçues peuvent être manipulés directement, sans traitement préalable.   
Reportez-vous à l’exemple de la commande [WEB SERVICE GET RESULT](web-service-get-result.md).

##### Mode RPC, entrée composée et sortie simple 

Dans ce cas, le paramètre *typeComposé* contient la constante Web Service manual in. Avec cette configuration, vous devez passer “manuellement” au Web Service chaque élément xml source sous la forme d'un BLOB, à l’aide de la commande [WEB SERVICE SET PARAMETER](web-service-set-parameter.md).  
Il vous appartient de formater le BLOB initial sous forme d’élément xml valide. Ce BLOB doit contenir comme premier élément le premier élément “fils” supposé de l’élément <Body> de la requête finale. 

* Exemple

```4d
 var $1 : Blob
 var $0 : Boolean
 
 WEB SERVICE SET PARAMETER("MonBlobXML";$1)
 WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual in)
 WEB SERVICE GET RESULT($0;"MaVarSortie";*)
```

##### Mode RPC, entrée simple et sortie composée 

Dans ce cas, le paramètre *typeComposé* contient la constante Web Service manual out. Chaque paramètre de sortie sera retourné par le Web Service sous forme d’élément xml stocké dans un BLOB. Vous récupérez ce paramètre à l’aide de la commande [WEB SERVICE GET RESULT](web-service-get-result.md). Vous pourrez ensuite analyser le contenu du BLOB reçu à l’aide des commandes XML de 4D. 

* Exemple

```4d
 var $0 : Blob
 var $1 : Boolean
 
 WEB SERVICE SET PARAMETER("MaVarEntree";$1)
 WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual out)
 WEB SERVICE GET RESULT($0;"MonXMLSortie";*)
```

##### Mode RPC, entrée et sortie composées 

Dans ce cas, le paramètre *typeComposé* contient la constante Web Service manual. Chaque paramètre d’entrée et de sortie devra être stocké sous forme d’élément xml dans des BLOBs, comme décrit dans les deux configurations précédentes. 

* Exemple

```4d
 var $0 : Blob
 var $1 : Blob
 
 WEB SERVICE SET PARAMETER("MonBlobXMLEntree";$1)
 WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MonXMLSortie";*)
```

##### Mode DOC 

Une méthode proxy d’appel d’un Web Service DOC est semblable à une méthode proxy d’appel d’un Web Service RPC utilisant des paramètres d’entrée et de sortie composés.  
La seule différence entre ces deux configurations se situe au niveau du contenu xml des paramètres BLOB passés et reçus. Du point de vue de 4D, la construction et l’envoi de la requête SOAP sont identiques. 

* Exemple

```4d
 var $0 : Blob
 var $1 : Blob
 
 WEB SERVICE SET PARAMETER("MonXMLEntree";$1)
 WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MonXMLSortie";*)
```

**Note :** Dans le cas des Web Services DOC, la valeur des chaînes (ci-dessus “MonXMLEntree” et “MonXMLSortie”) passées en paramètres n’a pas d’importance ; il est même possible de passer des chaînes vides (""). En effet, ces valeurs ne sont pas utilisées dans la requête SOAP contenant le document xml. Il est toutefois obligatoire de passer ces paramètres. 

Pour utiliser un Web Service publié en mode DOC (ou en mode RPC avec types composés), il est conseillé de procéder de la manière suivante :

* Générer la méthode proxy à l’aide de l’Assistant Client Web Services.  
La méthode proxy sera appelée de la manière suivante : *$BlobXMLresult:=$proxy\_MethodeDOC($BlobXMLparam)*
* Prendre connaissance du contenu des requêtes SOAP à envoyer au Web Service à l’aide d’un outil de test en ligne (par exemple *http://soapclient.com/soaptest.html*). Ce type d’outil permet, à partir du WSDL du Web Service, de générer des formulaires HTML de test.
* Copier le contenu xml généré à partir du premier fils de *<body>*.
* Ecrire la méthode permettant de placer les valeurs réelles des paramètres dans le code xml ; ce code doit ensuite être placé dans le BLOB *$BlobXMLparam*.
* Pour l’analyse de la réponse, vous pouvez également utiliser un outil de test en ligne, ou tirer parti du WSDL qui spécifie les éléments retournés.

Le paramètre *\** permet d'optimiser les appels. Lorsqu'il est passé, la commande ne referme pas la connexion utilisée par le process à l’issue de son exécution. Dans ce cas, l’appel suivant à [WEB SERVICE CALL](web-service-call.md) réutilise cette même connexion si le paramètre \* est passé, et ainsi de suite. Pour refermer la connexion, il suffit d’exécuter la commande [WEB SERVICE CALL](web-service-call.md) sans le paramètre \*. Ce mécanisme permet d’accélérer sensiblement les traitements en cas d’appels successifs de plusieurs Web Services sur le même serveur, notamment en configuration WAN (via Internet par exemple). A noter que ce mécanisme s’appuie sur le paramétrage “keep-alive” du serveur Web. Ce paramétrage définit généralement un nombre maximal de requêtes via une même connexion, et peut même les interdire. Si les requêtes [WEB SERVICE CALL](web-service-call.md) enchaînées dans la même connexion atteignent ce nombre maximal ou si les connexions keep-alive ne sont pas autorisées, 4D créera une nouvelle connexion pour chaque requête.

#### Variables et ensembles système 

Si la requête est correctement acheminée et que le Web Service l’a acceptée, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0 et une erreur est retournée.

#### Voir aussi 

[WEB SERVICE GET RESULT](web-service-get-result.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 778 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


