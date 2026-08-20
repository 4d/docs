---
id: xml
title: Traitements XML
slug: /Develop/XML
displayed_sidebar: docs
---


## Vue d'ensemble des commandes XML

### XML, DOM et SAX

Le [**thème XML**](../commands/theme/XML.md) regroupe les commandes « utilitaires » XML génériques de 4D. Il s'agit de commandes de gestion des options et des erreurs.

4D propose également deux ensembles distincts de commandes XML : [**DOM**](../commands/theme/XML_DOM.md) (Document Object Model) et [**SAX**](../commands/theme/XML_SAX.md) (Simple API XML) sont deux modes d'analyse différents pour les documents XML.

- Le mode DOM analyse une source XML et construit sa structure (son « arbre ») en mémoire. De ce fait, l'accès à chaque élément de la source est extrêmement rapide. Cependant, comme toute la structure arborescente est stockée en mémoire, le traitement de documents XML volumineux peut conduire au dépassement de la capacité mémoire et provoquer ainsi des erreurs.
- Le mode SAX ne construit pas de structure arborescente en mémoire. Dans ce mode, des « événements » (tels que le début et la fin d'un élément) sont générés lors de l'analyse de la source. Ce mode vous permet d'analyser des documents XML de toute taille, quelle que soit la quantité de mémoire disponible.

### Références

http://www.saxproject.org/?selected=event <br/>
http://www.w3schools.com/xml/

:::note

Pour la prise en charge du XML, 4D utilise la [bibliothèque Xerces.dll](../Notes/updates.md#library-table) développée par la société Apache Foundation.

:::


### Mode préemptif

Les références XML créées par un [process préemptif](../Develop/preemptive.md) ne peuvent être utilisées que dans ce process spécifique. Inversement, les références XML créées par un process coopératif peuvent être utilisées par tout autre process coopératif, mais ne peuvent pas être utilisées par un process préemptif.


### Jeux de caractères

Les jeux de caractères suivants sont pris en charge par les commandes XML DOM et XML SAX de 4D :

- ASCII
- UTF-8
- UTF-16 (Big/Small Endian)
- UCS4 (Big/Small Endian)
- Pages de codes EBCDIC, encodages IBM037, IBM1047 et IBM1140,
- ISO-8859-1 (ou Latin1)
- Windows-1252.


### Glossaire

Cette liste non exhaustive détaille les principaux concepts XML utilisés par les commandes et fonctions de 4D.

- **Attribut** : un sous-tag XML associé à un élément. Un attribut contient toujours un nom et une valeur.
- **Enfant (Child)** : Dans une structure XML, un élément situé à un niveau directement inférieur à un autre.
- **DTD** : *Document Type Declaration*. La DTD consigne l'ensemble des règles et propriétés spécifiques que le XML doit respecter. Ces règles définissent, plus particulièrement, le nom et le contenu de chaque tag ainsi que son contexte. Cette formalisation des éléments peut être utilisée pour vérifier si un document XML est conforme (auquel cas, il est déclaré « valide »). La DTD peut être incluse dans le document XML (DTD interne) ou dans un document séparé (DTD externe). Notez que la DTD n'est pas obligatoire.
- **Élément** : un tag XML. Un élément contient toujours un nom et une valeur. Facultativement, un élément peut contenir des attributs.
- **ElementRef** : référence XML utilisée par les commandes XML de 4D pour désigner une structure XML. Cette référence est composée de 8 caractères codés sous forme hexadécimale, ce qui signifie que sa longueur est de 32 caractères sur un système 64 bits. Il est recommandé de déclarer les références XML en Texte.
- **Parent** : Dans une structure XML, un élément situé à un niveau directement supérieur à un autre.
- **Analyse (Parsing), analyseur (parser)** : L'action d'analyser le contenu d'un objet structuré afin d'en extraire des informations utiles.
- **Racine (Root)** : Un élément situé au premier niveau d'une structure XML.
- **Frère (Sibling)** : Un élément situé au même niveau qu'un autre.
- **Structure** : objet XML structuré. Cet objet peut être un document, une variable ou un élément.
- **Validation** : Un document XML est « validé » par l'analyseur lorsqu'il est « bien formé » et conforme aux spécifications de la DTD.
- **Bien formé (Well-formed)** : Un document XML est déclaré « bien formé » par l'analyseur lorsqu'il est conforme aux spécifications XML génériques.
- **XML** : eXtensible Markup Language. Un standard informatisé d'échange de données permettant le transfert des données ainsi que de leur structure. Le langage XML repose sur l'utilisation de tags et d'une syntaxe spécifique, à l'instar du langage HTML. Cependant, contrairement à ce dernier, le langage XML permet la définition de tags personnalisés.
- **XSL** : eXtensible Stylesheet Language. Un langage permettant la définition de feuilles de style utilisées pour traiter et afficher le contenu d'un document XSL.


## Commandes XML DOM

### Créer, ouvrir et fermer des documents XML via DOM

Les objets créés, modifiés ou analysés par les [commandes XML DOM de 4D](../commands/theme/XML_DOM.md) peuvent être du texte, des URL, des documents ou des BLOB. Les commandes DOM utilisées pour ouvrir des objets XML dans 4D sont [`DOM Parse XML source`](../commands/dom-parse-xml-source) et [`DOM Parse XML variable`](../commands/dom-parse-xml-variable).

De nombreuses commandes vous permettent ensuite de lire, d'analyser et d'écrire les éléments et les attributs. Les erreurs sont récupérées à l'aide de la commande [`XML GET ERROR`](../commands/xml-get-error). N'oubliez pas d'appeler la commande [`DOM CLOSE XML`](../commands/dom-close-xml) pour fermer la source à la fin.

Remarque concernant l'utilisation des paramètres BLOB XML : Pour des raisons historiques, les commandes XML telles que [`DOM Parse XML variable`](../commands/dom-parse-xml-variable) acceptent des paramètres de type BLOB. Cependant, il est fortement recommandé de stocker les structures XML sous forme de Texte. L'utilisation des BLOB est réservée au traitement des données binaires. Conformément aux spécifications XML, les données binaires sont automatiquement encodées en Base64, même lorsque le BLOB contient du texte.


### Prise en charge de la notation XPath

Plusieurs commandes XML DOM ([`DOM Create XML element`](../commands/dom-create-xml-element), [`DOM Find XML element`](../commands/dom-find-xml-element), [`DOM Create XML element arrays`](../commands/dom-create-xml-element-arrays) et [`DOM SET XML ELEMENT VALUE`](../commands/dom-set-xml-element-value)) prennent en charge certaines expressions XPath pour accéder aux éléments XML.

La notation XPath provient du langage XPath, conçu pour naviguer au sein des structures XML. Elle permet de désigner des éléments directement au sein d'une structure XML via une syntaxe de type « chemin d'accès », sans nécessairement devoir indiquer le chemin d'accès complet pour l'atteindre.

Par exemple, étant donné la structure suivante :

```xml
   <RootElement>
      <Elem1>
         <Elem2>
            <Elem3 Font=Verdana Size=10> </Elem3>
         </Elem2>
      </Elem1>
   </RootElement>
```

La notation XPath vous permet d'accéder à l'élément 3 à l'aide de la syntaxe */RootElement/Elem1/Elem2/Elem3*.

4D accepte également les éléments XPath indexés à l'aide de la syntaxe *Element[ElementNum]*. Par exemple, étant donné la structure suivante :

```xml
   <RootElement>
      <Elem1>
         <Elem2>aaa</Elem2>
         <Elem2>bbb</Elem2>
         <Elem2>ccc</Elem2>
      </Elem1>
   </RootElement>
```

La notation XPath vous permet d'accéder à la valeur « ccc » à l'aide de la syntaxe */RootElement/Elem1/Elem2[3]*.

Pour une liste complète des expressions XPath prises en charge, reportez-vous à la description de la commande [`DOM Find XML element`](../commands/dom-find-xml-element).

:::note Compatibilité

À partir de 4D 18 R3, l'implémentation XPath a été modifiée pour être plus conforme et prendre en charge un ensemble d'expressions plus large. Si vous souhaitez bénéficier des fonctionnalités étendues dans vos bases converties, vous devez sélectionner l'option **Utiliser le XPath standard** de la [page Compatibilité](../settings/compatibility.md).

:::

### Gestion des erreurs

De nombreuses fonctions de ce thème retournent une référence d'élément XML. Si une erreur se produit pendant l'exécution de la fonction (par exemple, si la référence de l'élément racine n'est pas valide), la variable *OK* est mise à 0 et une erreur est générée.

De plus, la référence retournée dans ce cas est une séquence de 32 caractères zéro « 0 ».


## Commandes XML SAX

### Créer, ouvrir et fermer des documents XML via SAX

Les [commandes XML SAX](../commands/theme/XML_SAX.md) fonctionnent avec les références de document standard de 4D (**DocRef**, une référence de type Heure). Il est donc possible d'utiliser ces commandes conjointement avec les commandes 4D servant à gérer les documents, telles que [`SEND PACKET`](../commands/send-packet) ou [`Append document`](../commands/append-document).

La création et l'ouverture de documents XML par programmation s'effectuent à l'aide des commandes [`Create document`](../commands/create-document) et [`Open document`](../commands/open-document). Ensuite, l'utilisation d'une commande XML avec ces documents provoquera l'activation automatique des mécanismes XML tels que l'encodage. Par exemple, l'en-tête `<?xml version="1.0" encoding="… encodage …" standalone = "no "?>` sera écrit automatiquement dans le document.

:::note

Les documents lus par les commandes SAX doivent être ouverts en mode lecture seule par la commande [`Open document`](../commands/open-document). Cela évite tout conflit entre 4D et la bibliothèque Xerces lorsque vous ouvrez simultanément des documents « ordinaires » et XML. Si vous exécutez une commande d'analyse SAX avec un document ouvert en mode lecture/écriture, un message d'alerte s'affiche et l'analyse est impossible.

:::

La fermeture d'un document XML doit être effectuée à l'aide de la commande [`CLOSE DOCUMENT`](../commands/close-document). Si des éléments XML étaient ouverts, ils seront fermés automatiquement.

### À propos des caractères de fin de ligne et de la gestion du BOM

Lors de l'écriture de documents SAX, 4D utilise les paramètres par défaut suivants pour les caractères de fin de ligne et l'utilisation du BOM (byte order mask) :

- caractères CRLF sous Windows et LF sous macOS pour les caractères de fin de ligne
- les fichiers sont écrits sans BOM.

:::note Compatibilité

Dans les projets créés avec les versions de 4D jusqu'à 19.x, par défaut 4D utilise CRLF comme caractères de fin de ligne sous macOS pour SAX ainsi qu'un BOM. Vous pouvez contrôler la gestion de `XML line ending` et `XML BOM` à l'aide de la commande [`XML SET OPTIONS`](../commands/xml-set-options) et d'un [paramètre de compatibilité](../settings/compatibility.md). Important : Comme les lignes de fichier SAX sont écrites directement à chaque instruction, si vous devez définir les options de BOM et/ou de fin de ligne, vous devez appeler la commande [`XML SET OPTIONS`](../commands/xml-set-options) avant la première commande d'écriture SAX.

:::
