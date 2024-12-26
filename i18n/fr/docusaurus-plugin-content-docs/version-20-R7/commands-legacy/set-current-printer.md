---
id: set-current-printer
title: SET CURRENT PRINTER
slug: /commands/set-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.SET CURRENT PRINTER.Syntax-->**SET CURRENT PRINTER** ( *nomImpr* )<!-- END REF-->
<!--REF #_command_.SET CURRENT PRINTER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomImpr | Text | &#8594;  | Nom de l’imprimante à utiliser |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET CURRENT PRINTER.Summary-->La commande **SET CURRENT PRINTER** permet de désigner l’imprimante à utiliser pour les impressions avec l’application 4D courante.<!-- END REF-->

Passez dans le paramètre *nomImpr* le nom de l’imprimante à sélectionner. Pour obtenir la liste des imprimantes disponibles, utilisez au préalable la commande [PRINTERS LIST](printers-list.md).  
Si vous passez une chaîne vide dans *nomImpr*, l’imprimante courante définie dans le système sera utilisée.

**SET CURRENT PRINTER** vous permet de désigner l'imprimante PDF générique du système afin d'effectuer des impressions PDF. La valeur à utiliser dépend de la version de l'OS et de celle de 4D.

* **Windows 8 et versions précédentes :**  
4D s’appuie sur le pilote PDFCreator pour l’impression de documents PDF sous Windows (cf. section [SET PRINTABLE MARGIN](set-printable-margin.md)). Pour imprimer un document PDF, passez dans le paramètre *nomImpr* le nom de l’imprimante virtuelle installée par PDFCreator. Par défaut, le nom de l’imprimante virtuelle est "PDFCreator". Toutefois, ce nom peut avoir été modifié au moment de l’installation du pilote. Pour que 4D recherche et utilise automatiquement le nom de l’imprimante virtuelle, même s’il a été personnalisé, vous pouvez passer dans *nomImpr* la constante suivante (thème *Options d'impression*) :  

| Constante               | Type   | Valeur     |  
| ----------------------- | ------ | ---------- |  
| PDFCreator Printer name | Chaîne | PDFCreator |
* **A partir de Windows 10 :**  
Windows 10 inclut un pilote d'impression PDF natif, permettant à 4D de créer directement des PDFs sans qu'il soit nécessaire d'utiliser un pilote tiers comme PDFCreator.  
Le nom du pilote est "Microsoft Print to PDF" (cf. exemple présenté dans la section [SET PRINTABLE MARGIN](set-printable-margin.md)).
* **Sous OS X et à partir de Windows 10 (4D v15 R5 64 bits et suivantes) :**  
Une constante du thème *Options d'impression* vous permet de désigner automatiquement l'imprimante PDF générique, quelle que soit la plate-forme. Ce principe facilite l'écriture de code générique.  
| Constante          | Type   | Valeur             | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| ------------------ | ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Generic PDF driver | Chaîne | \_4d\_pdf\_printer | **Note :** Cette fonctionnalité n'est pas disponible dans les versions 32 bits de 4D.<br/>Sous OS X, déclare le pilote par défaut comme imprimante courante. Ce pilote n'est pas visible et ne se trouve pas dans la liste retournée par la commande [PRINTERS LIST](printers-list.md). Notez que le chemin d’accès pour le document PDF doit être défini en utilisant la commande [SET PRINT OPTION](set-print-option.md), sinon l'erreur 3107 est retournée.Sous Windows, déclare le pilote PDF de Windows (nommé "Microsoft Print to PDF") comme imprimante courante. Cette constante est disponible sous Windows 10 uniquement, lorsque l'option PDF est installée. Avec d'autres versions de Windows, ou lorsqu'il n'y a pas de pilote PDF disponible, la commande ne fait rien et la variable système *OK* prend la valeur 0\. |

La commande **SET CURRENT PRINTER** doit être appelée avant [SET PRINT OPTION](set-print-option.md) afin que les options disponibles correspondent à l'imprimante sélectionnée. En revanche, **SET CURRENT PRINTER** doit être appelée après *\_o\_PAGE SETUP* (le cas échéant), sinon le paramétrage d'imprimante n'est pas conservé.

Cette commande peut être utilisée avec les commandes [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md), [Print form](print-form.md), [QR REPORT](qr-report.md) et s’applique à toutes les impressions de 4D, y compris en mode Développement.  
Les commandes d'impression doivent impérativement être appelées avec le paramètre *\>* (le cas échéant) afin que le paramétrage défini soit conservé. 

#### Variables et ensembles système 

Si la sélection d’imprimante est correctement effectuée, la variable système OK prend la valeur 1\. Dans le cas contraire (par exemple l’imprimante désignée est introuvable), la variable système OK prend la valeur 0 et l’imprimante courante est inchangée. 

#### Exemple 

Création d'un document PDF sous Windows :

```4d
 var $pdfpath : Texte
 $pdfpath:=System folder(Desktop)+"test.pdf"
 SET CURRENT PRINTER(Driver PDF générique)
 SET PRINT OPTION(Destination option;3;$pdfpath)
 ALL RECORDS([Table_1])
 PRINT SELECTION([Table_1];*)
 SET CURRENT PRINTER("")
```

#### Voir aussi 

[Get current printer](get-current-printer.md)  
[PRINTERS LIST](printers-list.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 787 |
| Thread safe | &cross; |
| Modifie les variables | OK |


