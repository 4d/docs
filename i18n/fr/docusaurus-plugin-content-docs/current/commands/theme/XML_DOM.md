---
id: XML_DOM_theme
title: XML DOM
sidebar_label: XML DOM
slug: /commands/theme/XML-DOM
---

|                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.DOM Append XML child node.Syntax -->](../../commands/dom-append-xml-child-node)<br/>                       |
| [<!-- INCLUDE #_command_.DOM Append XML element.Syntax -->](../../commands/dom-append-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM CLOSE XML.Syntax -->](../../commands/dom-close-xml)<br/>                                               |
| [<!-- INCLUDE #_command_.DOM Count XML attributes.Syntax -->](../../commands/dom-count-xml-attributes)<br/>                         |
| [<!-- INCLUDE #_command_.DOM Count XML elements.Syntax -->](../../commands/dom-count-xml-elements)<br/>                             |
| [<!-- INCLUDE #_command_.DOM Create XML element.Syntax -->](../../commands/dom-create-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM Create XML element arrays.Syntax -->](../../commands/dom-create-xml-element-arrays)<br/>               |
| [<!-- INCLUDE #_command_.DOM Create XML Ref.Syntax -->](../../commands/dom-create-xml-ref)<br/>                                     |
| [<!-- INCLUDE #_command_.DOM EXPORT TO FILE.Syntax -->](../../commands/dom-export-to-file)<br/>                                     |
| [<!-- INCLUDE #_command_.DOM EXPORT TO VAR.Syntax -->](../../commands/dom-export-to-var)<br/>                                       |
| [<!-- INCLUDE #_command_.DOM Find XML element.Syntax -->](../../commands/dom-find-xml-element)<br/>                                 |
| [<!-- INCLUDE #_command_.DOM Find XML element by ID.Syntax -->](../../commands/dom-find-xml-element-by-id)<br/>                     |
| [<!-- INCLUDE #_command_.DOM Get first child XML element.Syntax -->](../../commands/dom-get-first-child-xml-element)<br/>           |
| [<!-- INCLUDE #_command_.DOM Get last child XML element.Syntax -->](../../commands/dom-get-last-child-xml-element)<br/>             |
| [<!-- INCLUDE #_command_.DOM Get next sibling XML element.Syntax -->](../../commands/dom-get-next-sibling-xml-element)<br/>         |
| [<!-- INCLUDE #_command_.DOM Get parent XML element.Syntax -->](../../commands/dom-get-parent-xml-element)<br/>                     |
| [<!-- INCLUDE #_command_.DOM Get previous sibling XML element.Syntax -->](../../commands/dom-get-previous-sibling-xml-element)<br/> |
| [<!-- INCLUDE #_command_.DOM Get root XML element.Syntax -->](../../commands/dom-get-root-xml-element)<br/>                         |
| [<!-- INCLUDE #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax -->](../../commands/dom-get-xml-attribute-by-index)<br/>             |
| [<!-- INCLUDE #_command_.DOM GET XML ATTRIBUTE BY NAME.Syntax -->](../../commands/dom-get-xml-attribute-by-name)<br/>               |
| [<!-- INCLUDE #_command_.DOM GET XML CHILD NODES.Syntax -->](../../commands/dom-get-xml-child-nodes)<br/>                           |
| [<!-- INCLUDE #_command_.DOM Get XML document ref.Syntax -->](../../commands/dom-get-xml-document-ref)<br/>                         |
| [<!-- INCLUDE #_command_.DOM Get XML element.Syntax -->](../../commands/dom-get-xml-element)<br/>                                   |
| [<!-- INCLUDE #_command_.DOM GET XML ELEMENT NAME.Syntax -->](../../commands/dom-get-xml-element-name)<br/>                         |
| [<!-- INCLUDE #_command_.DOM GET XML ELEMENT VALUE.Syntax -->](../../commands/dom-get-xml-element-value)<br/>                       |
| [<!-- INCLUDE #_command_.DOM Get XML information.Syntax -->](../../commands/dom-get-xml-information)<br/>                           |
| [<!-- INCLUDE #_command_.DOM Insert XML element.Syntax -->](../../commands/dom-insert-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM Parse XML source.Syntax -->](../../commands/dom-parse-xml-source)<br/>                                 |
| [<!-- INCLUDE #_command_.DOM Parse XML variable.Syntax -->](../../commands/dom-parse-xml-variable)<br/>                             |
| [<!-- INCLUDE #_command_.DOM REMOVE XML ATTRIBUTE.Syntax -->](../../commands/dom-remove-xml-attribute)<br/>                         |
| [<!-- INCLUDE #_command_.DOM REMOVE XML ELEMENT.Syntax -->](../../commands/dom-remove-xml-element)<br/>                             |
| [<!-- INCLUDE #_command_.DOM SET XML ATTRIBUTE.Syntax -->](../../commands/dom-set-xml-attribute)<br/>                               |
| [<!-- INCLUDE #_command_.DOM SET XML DECLARATION.Syntax -->](../../commands/dom-set-xml-declaration)<br/>                           |
| [<!-- INCLUDE #_command_.DOM SET XML ELEMENT NAME.Syntax -->](../../commands/dom-set-xml-element-name)<br/>                         |
| [<!-- INCLUDE #_command_.DOM SET XML ELEMENT VALUE.Syntax -->](../../commands/dom-set-xml-element-value)<br/>                       |

## Présentation des commandes XML DOM

Voir la section [XML, DOM et SAX](../theme/XML.md#xml-dom-and-sax) pour une définition de XML DOM.

### Créer, ouvrir et fermer des documents XML via DOM

Les objets créés, modifiés ou analysés par les commandes DOM de 4D peuvent être des textes, des URLs, des documents ou des BLOBs. Les commandes DOM utilisées pour ouvrir les objets XML dans 4D sont [`DOM Parse XML source`](../../commands/dom-parse-xml-source) et [`DOM Parse XML variable`](../../commands/dom-parse-xml-variable).

De nombreuses commandes permettent ensuite de lire, d'analyser et d'écrire les éléments et les attributs. Les erreurs sont récupérées à l'aide de la commande [`XML GET ERROR`](../../commands/xml-get-error). N'oubliez pas d'appeler la commande [`DOM CLOSE XML`](../../commands/dom-close-xml) pour fermer la source à la fin.

Note sur l'usage de paramètres BLOBs XML : Pour des raisons historiques, les commandes XML telles que [`DOM Parse XML variable`](../../commands/dom-parse-xml-variable) acceptent les paramètres de type BLOB. Cependant, il est fortement recommandé de stocker les structures XML sous forme de texte. L'utilisation des BLOBs est réservée au traitement des données binaires. Conformément aux spécifications XML, les données binaires sont automatiquement encodées en Base64, même si le BLOB contient du texte.

### Prise en charge de la notation XPath

Plusieurs commandes XML DOM ([`DOM Create XML element`](../../commands/dom-create-xml-element), [`DOM Find XML element`](../../commands/dom-find-xml-element), [`DOM Create XML element arrays`](../../commands/dom-create-xml-element-arrays) et [`DOM SET XML ELEMENT VALUE`](../../commands/dom-set-xml-element-value)) prennent en charge certaines expressions XPath pour accéder aux éléments XML.

La notation XPath provient du langage XPath, conçu pour naviguer dans les structures XML. Elle permet de définir des éléments directement dans une structure XML via une syntaxe de type "pathname", sans qu'il soit nécessaire d'indiquer le chemin complet pour y accéder.

Soit par exemple la structure suivante :

```xml
   <RootElement>
      <Elem1>
         <Elem2>
            <Elem3 Font=Verdana Size=10> </Elem3>
         </Elem2>
      </Elem1>
   </RootElement>
```

La notation XPath vous permet d'accéder à l'élément 3 en utilisant la syntaxe */RootElement/Elem1/Elem2/Elem3*.

4D accepte également les éléments XPath indexés à l'aide de la syntaxe *Element[ElementNum]*. Soit par exemple la structure suivante :

```xml
   <RootElement>
      <Elem1>
         <Elem2>aaa</Elem2>
         <Elem2>bbb</Elem2>
         <Elem2>ccc</Elem2>
      </Elem1>
   </RootElement>
```

La notation XPath vous permet d'accéder à la valeur "ccc" en utilisant la syntaxe */RootElement/Elem1/Elem2[3]*.

Pour une liste complète des expressions XPath prises en charge, se référer à la description de la commande [`DOM Find XML element`](../../commands/dom-find-xml-element).

:::note Compatibilité

À partir de 4D 18 R3, la mise en œuvre de XPath a été modifiée pour être plus conforme et pour prendre en charge un plus grand nombre d'expressions. Si vous souhaitez bénéficier des fonctionnalités étendues dans vos bases de données converties, vous devez sélectionner l'option **Utiliser XPath standard** de la [page de compatibilité](../../settings/compatibility.md).

:::

### Gestion des erreurs

De nombreuses fonctions de ce thème renvoient une référence à un élément XML. Si une erreur se produit pendant l'exécution de la fonction (par exemple, si la référence à l'élément racine n'est pas valide), la variable *OK* est mise à 0 et une erreur est générée.

En outre, la référence renvoyée dans ce cas est une séquence de 32 caractères zéro "0".

