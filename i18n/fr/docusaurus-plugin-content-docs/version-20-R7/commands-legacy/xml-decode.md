---
id: xml-decode
title: XML DECODE
slug: /commands/xml-decode
displayed_sidebar: docs
---

<!--REF #_command_.XML DECODE.Syntax-->**XML DECODE** ( *valeurXML* ; *var4D* )<!-- END REF-->
<!--REF #_command_.XML DECODE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valeurXML | Text | &#8594;  | Valeur de type texte provenant d’une structure XML |
| var4D | Field, Variable | &#8592; | Variable ou champ 4D devant recevoir la valeur XML convertie |

<!-- END REF-->

#### Description 

<!--REF #_command_.XML DECODE.Summary-->La commande **XML DECODE** convertit une valeur stockée en tant que chaîne XML en une valeur 4D typée.<!-- END REF--> La conversion est effectuée automatiquement en fonction des règles suivantes : 

| **Valeur** | **Exemples**                                                                         | **Conversion sur système français**                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| numérique  | <Prix>8,5</Prix><Prix>8.5</Prix>                                                     | Réel : 8,5                                                                                                                                                                                                                   |
| booléenne  | <Double>1</Double> <Double>0</Double> ou <Double>vrai</Double> <Double>faux</Double> | Booléen : Vrai/Faux                                                                                                                                                                                                          |
| BLOB       | Décodage base64                                                                      |                                                                                                                                                                                                                              |
| Images     | Décodage base64 + commande BLOB vers image                                           |                                                                                                                                                                                                                              |
| Dates      | 2009-10-25T01:03:20+01:00                                                            | !25/10/2009! -> Suppression de la partie heure et du fuseau horaire                                                                                                                                                          |
| Heures     | 2009-10-25T01:03:20+01:00                                                            | ?01:03:20? -> Suppression de la partie date. *Attention* : prise en compte du fuseau horaire s'il est différent de celui de l'heure locale. Par exemple "2009-10-25T01:03:20+05:00" donnera ?21:03:20? en heure locale UTC+1 |

Si le type du paramètre *var4D* n'est pas défini, le type texte est utilisé par défaut.

#### Exemple 

Importation de données depuis un document XML dans lequel les valeurs sont stockées en tant qu’attributs.  
Exemple de document XML :  

```4d
 Repeat
       MyEvent:=SAX Get XML node(DocRef)
 
       Case of
       :(MyEvent=XML Start Element)
          ARRAY TEXT(tAttrNames;0)
          ARRAY TEXT(tAttrValues;0)
          SAX GET XML ELEMENT(DocRef;vName;vPrefix;tAttrNames;tAttrValues)
          If(vName="CD")
             CREATE RECORD([CD])
             For($i;1;Size of array(tAttrNames))
                $attrName:=tAttrNames{$i}
                Case of
                :($attrName="ID_CD")
                   XML DECODE(tAttrValues{$i};[CD]ID_CD)
                :($attrName="Titre")
                   [CD]uvre:=tAttrValues{$i}
                :($attrName="Prix")
                   XML DECODE(tAttrValues{$i};[CD]Prix)
                :($attrName="Date")
                   XML DECODE(tAttrValues{$i};[CD]Date saisie)
                :($attrName="Duree")
                   XML DECODE(tAttrValues{$i};[CD]Durée_totale)
                :($attrName="Double")
                   XML DECODE(tAttrValues{$i};[CD]CD_Double)
                End case
             End for
          End if
       ...
       End case
 Until(MyEvent=XML End Document)
```

#### Voir aussi 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  