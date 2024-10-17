---
id: soap-declaration
title: SOAP DECLARATION
slug: /commands/soap-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SOAP DECLARATION.Syntax-->**SOAP DECLARATION** ( *variable* ; *type* ; entrée_sortie {; *alias*} )<!-- END REF-->
<!--REF #_command_.SOAP DECLARATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable référençant un argument SOAP entrant ou sortant |
| type | Integer | &#8594;  | Type 4D vers lequel pointe l’argument |
| entrée_sortie | Integer | &#8594;  | 1 = Entrée SOAP, 2 = Sortie SOAP |
| alias | Text | &#8594;  | Nom publié pour cet argument lors des échanges SOAP |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP DECLARATION.Summary-->La commande **SOAP DECLARATION** permet de déclarer explicitement le type des paramètres utilisés dans une méthode 4D publiée comme Web Service.<!-- END REF-->

Lorsqu’une méthode est publiée en tant que Web Service, les paramètres standard *$0*, *$1*... *$n* sont utilisés pour décrire les paramètres du Web Service auprès du monde extérieur (notamment dans le fichier WSDL). Le protocole SOAP exigeant que les paramètres soient explicitement nommés, 4D utilise par défaut les noms “FourD\_arg0, FourD\_arg1 ... FourD\_argn”.

Ce fonctionnement par défaut peut toutefois s’avérer problématique pour les raisons suivantes :

* Il n’est pas possible de déclarer *$0* ou *$1*, *$2*, etc. en tant que tableau. Il est donc nécessaire d’utiliser des pointeurs, mais dans ce cas il reste à connaître le type des valeurs pour la génération du fichier WSDL.
* Il peut être utile ou nécessaire de personnaliser les noms des paramètres (entrants et sortants).
* Vous pouvez vouloir utiliser des paramètres tels que des structures XML et des références DOM.
* Il peut également être nécessaire de retourner des valeurs d'une taille supérieure à 32 Ko (limite des arguments de type Texte dans les bases de données en mode non Unicode).
* Enfin, ce fonctionnement rend impossible le retour de plus d’une valeur par appel (dans *$0*).

La commande **SOAP DECLARATION** permet de s’affranchir de ces limites. Vous pouvez exécuter cette commande pour chaque paramètre entrant et sortant et lui assigner un nom et un type.

**Note :** Même si la commande **SOAP DECLARATION** est utilisée, il est nécessaire de déclarer les variables et tableaux 4D dans la méthode Compiler\_Web à l’aide les commandes du thème “Compilateur”.

Passez dans *variable* la variable 4D à référencer dans l’appel du Web Service.

**Attention**, vous pouvez référencer uniquement des variables process ou les arguments des méthodes 4D (*$0* à *$n*). Les variables locales et interprocess ne peuvent pas être utilisées.

Par défaut, seuls des arguments de type Texte pouvant être utilisés, les réponses du serveur SOAP sont en principe limitées à 32 Ko dans les bases de données en mode non Unicode. Il est toutefois possible de retourner des arguments SOAP d’une taille supérieure à 32 Ko, en utilisant des BLOBs. Pour cela, il suffit de déclarer les arguments en type BLOB avant d’appeler la commande **SOAP DECLARATION** (cf. exemple 4).

**Notes :** 

* Côté client, si vous souscrivez à ce type de Web Service avec 4D, l’assistant Web Services générera naturellement une variable de type Texte dans la méthode proxy. Pour pouvoir l’utiliser, il vous suffit de retyper cette variable de retour en BLOB dans la méthode proxy.
* Cette commande ne prend pas en charge les objets blob (de type 4D.Blob). Veuillez vous reporter à la section *Passer des blobs et objets blob à des commandes 4D* sur developer.4d.com.

Passez dans *type* le type 4D correspondant. La plupart des types de variables et de tableaux 4D peuvent être employés. Vous pouvez utiliser les constantes ci-dessous, placées dans le thème *Types champs et variables*, ainsi que, pour les types XML, deux constantes du thème *Web Services (Serveur)* :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Boolean array | Entier long | 22     |
| Date array    | Entier long | 17     |
| Integer array | Entier long | 15     |
| Is BLOB       | Entier long | 30     |
| Is Boolean    | Entier long | 6      |
| Is date       | Entier long | 4      |
| Is integer    | Entier long | 8      |
| Is longint    | Entier long | 9      |
| Is real       | Entier long | 1      |
| Is string var | Entier long | 24     |
| Is text       | Entier long | 2      |
| Is time       | Entier long | 11     |
| LongInt array | Entier long | 16     |
| Real array    | Entier long | 14     |
| String array  | Entier long | 21     |
| Text array    | Entier long | 18     |

| Constante        | Type        | Valeur | Comment       |
| ---------------- | ----------- | ------ | ------------- |
| Is DOM reference | Entier long | 37     | <br/> |
| Is XML           | Entier long | 36     |               |

Passez dans *entrée\_sortie* une valeur indiquant si le paramètre traité est “entrant” (c’est-à-dire correspondant à une valeur reçue par la méthode) ou “sortant” (c’est-à-dire correspondant à une valeur retournée par la méthode). Vous pouvez utiliser les constantes prédéfinies suivantes, placées dans le thème “*Web Services (Serveur)*” :

| Constante   | Type        | Valeur |
| ----------- | ----------- | ------ |
| SOAP input  | Entier long | 1      |
| SOAP output | Entier long | 2      |

##### Utilisation de types XML 

 Vous pouvez déclarer des variables de type "structure XML" et "référence DOM", aussi bien en entrée qu’en sortie, via les constantes Is XML et Is DOM reference. Lorsque des paramètres de ce type sont définis, aucun traitement ni encodage ne leur est appliqué, les données sont transmises telles quelles (cf. exemple 5). 

* Paramètres sortants :  
   * Is XML indique que le paramètre contient une structure XML,  
   * Is DOM reference indique que le paramètre contient la référence DOM d’une structure XML. Dans ce cas, l’insertion de la structure XML dans le message SOAP équivaut à l’exécution de la commande [DOM EXPORT TO VAR](dom-export-to-var.md).

**Note :** Dans le cas de références DOM utilisées en paramètres sortants, il est recommandé d’utiliser des références globales, créées par exemple au démarrage et closes à la fermeture de l’application. En effet, une référence DOM créée au sein du Web Service lui-même ne peut pas être refermée avec [DOM CLOSE XML](dom-close-xml.md) sinon le Web Service ne retourne plus rien. Les appels multiples au Web Service impliquent alors la création d’autant de références DOM non refermées, ce qui peut provoquer une saturation de la mémoire.

* Paramètres entrants :  
   * Is XML indique que le paramètre doit recevoir un argument XML envoyé par le client SOAP.  
   * Is DOM reference indique que le paramètre doit recevoir la référence DOM d’une structure XML correspondant à l’argument XML envoyé par le client SOAP.
* Modification de la WSDL : Les structures XML seront déclarées par 4D du type "anyType" (indéterminé) dans la WSDL. Si vous souhaitez typer précisément une structure XML, vous devez sauvegarder le fichier WSDL et ajouter manuellement le schéma de données souhaité dans la section <types> de la WSDL.

##### Méthode COMPILER\_WEB 

 Les arguments SOAP entrants référencés à l’aide de variables 4D (et non via les arguments des méthodes 4D) doivent être préalablement déclarés dans la méthode projet COMPILER\_WEB. En effet, l’utilisation de variables process dans les méthodes Web Services nécessite leur déclaration avant l’appel de la méthode. La méthode projet COMPILER\_WEB est appelée, si elle existe, à chaque requête SOAP acceptée. Par défaut, la méthode COMPILER\_WEB n’existe pas. Vous devez la créer explicitement.   
A noter que la méthode COMPILER\_WEB est également appelée par le serveur Web de 4D lors de la réception de requêtes Web “classiques” de type POST (cf. section *URLs et actions de formulaires*). 

Passez dans *alias* le nom de l’argument tel qu’il doit apparaître dans la WSDL et dans les échanges SOAP. **Attention**, ce nom doit être unique dans l’appel RPC (paramètres entrants et sortants confondus), sinon seule la dernière déclaration sera prise en compte par 4D. 

**Note** **:** Les noms des arguments ne doivent pas débuter par un chiffre ni contenir d’espaces. En outre, pour éviter tout risque d’incompatibilité, il est recommandé de ne pas utiliser de caractères étendus (tels que des caractères accentués).

Si le paramètre *alias* est omis, 4D utilisera par défaut le nom de la variable ou FourD\_argN pour les arguments des méthodes 4D (*$0* à *$n*).

**Note :** La commande **SOAP DECLARATION** doit être incluse dans la méthode publiée comme Web Service. Il n’est pas possible de l’appeler d’une autre méthode. 

#### Exemple 1 

Cet exemple spécifie un nom de paramètre :

```4d
  //Dans la méthode COMPILER_WEB
 var $1 : Integer
 
  //Dans la méthode du service Web
 SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")
  //Lors de la génération du fichier WSDL et des appels SOAP, le libellé zipcode sera utilisé au lieu de fourD_arg1
```

#### Exemple 2 

Cet exemple permet de récupérer un tableau de codes postaux sous forme d’entiers longs :

```4d
  //Dans la méthode COMPILER_WEB
 ARRAY LONGINT(tab_codes;0)
 
  //Dans la méthode du service Web
 SOAP DECLARATION(tab_codes;LongInt array;SOAP input;"in_tab_codes")
```

#### Exemple 3 

Cet exemple permet de référencer deux valeurs de retour sans spécifier de nom d’argument : 

```4d
 SOAP DECLARATION(ret1;Is longint;SOAP output)
 SOAP DECLARATION(ret2;Is longint;SOAP output)
```

#### Exemple 4 

Cet exemple permet au serveur SOAP de 4D de retourner un argument d'une taille supérieure à 32 Ko dans les bases de données en mode non Unicode : 

```4d
 var $0 : Blob
 SOAP DECLARATION($0;Is text;SOAP output)
```

Notez le type Is text (et non Is BLOB). Cette astuce permet un formatage correct de l’argument. 

#### Exemple 5 

Cet exemple illustre l'effet des différents types de déclarations : 

```4d
 ALL RECORDS([Contact])
 
  //Construction d’une structure XML à partir de la sélection de Contacts et stockage du XML dans un BLOB
 var ws_vx_xmlBlob : Blob
 getContactsXML(->ws_vx_xmlBlob)
  //Récupération de la structure XML dans une variable texte
 var ws_vt_xml : Text
 ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)
  //Récupération d’une référence DOM vers la structure XML
 var ws_vt_refXML : Text
 ws_vt_refXML:=DOM Parse XML variable(ws_vt_xml)
 
  //Test des différentes déclarations
 SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")
  //Le XML est converti en Base64 par 4D
 
 SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")
  //Le XML est converti en texte par 4D (< > deviennent des entités)
 
 SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"contactsXML")
  //Le XML est passé en texte XML
 
 SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"contactsBlob")
  //Le XML est passé en BLOB XML
 
 SOAP DECLARATION(ws_vt_refXML;Is DOM reference;SOAP output;"contactByRef")
  //Le XML est passé en tant que référence
```

#### Voir aussi 

[Is data file locked](is-data-file-locked.md)  
[SOAP Get info](soap-get-info.md)  
[SOAP SEND FAULT](soap-send-fault.md)  