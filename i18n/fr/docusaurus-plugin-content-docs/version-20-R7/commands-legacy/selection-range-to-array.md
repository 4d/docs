---
id: selection-range-to-array
title: SELECTION RANGE TO ARRAY
slug: /commands/selection-range-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION RANGE TO ARRAY.Syntax-->**SELECTION RANGE TO ARRAY** ( *début* ; *fin* {; leChamp | laTable ; *tableau*} {; leChamp | laTable2 ; *tableau2* ; ... ; leChamp | laTableN ; *tableauN*} )<!-- END REF-->
<!--REF #_command_.SELECTION RANGE TO ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| début | Integer | &#8594;  | Numéro de l'enregistrement sous-sélectionné à partir duquel commencer la copie des données |
| fin | Integer | &#8594;  | Numéro de l'enregistrement sous-sélectionné auquel arrêter la copie des données |
| leChamp &#124; laTable | Champ, Table | &#8594;  | Champ à utiliser pour récupérer les données ou Table à utiliser pour récupérer les numéros d'enregistrements |
| tableau | Array | &#8592; | Tableau recevant les données ou les numéros d'enregistrements |

<!-- END REF-->

#### Description 

<!--REF #_command_.SELECTION RANGE TO ARRAY.Summary-->**SELECTION RANGE TO ARRAY** crée un ou plusieurs tableau(x) et y copie des données en provenance des champs de la sélection courante ou les numéros des enregistrements de la sélection courante.<!-- END REF--> 

A la différence de [SELECTION TO ARRAY](selection-to-array.md) qui s'applique à l'intégralité de la sélection courante, **SELECTION RANGE TO ARRAY** s'applique uniquement à une sous-sélection d'enregistrements, définie par les paramètres *début* et *fin*.

Vous devez passer dans les paramètres *début* et *fin* des numéros d'enregistrements sous-sélectionnés s'inscrivant dans l'intervalle défini par la formule *1 <= début <= fin <= Enregistrements trouves (\[...\])*. 

Si vous passez des numéros correspondant à *1 <= début = fin <= Enregistrements trouves (\[...\])*, ce sont les champs ou les numéros des enregistrements de la sélection courante répondant à *début = fin* qui seront chargés.

Si vous passez des numéros d'enregistrements incorrects, vous obtiendrez les résultats suivants : 

* Si *fin > Enregistrements trouves (\[...\])*, la commande retourne toutes les valeurs, à partir de l'enregistrement sous-sélectionné spécifié par *début* jusqu'au dernier enregistrement sous-sélectionné.
* Si *début > fin*, la commande ne retourne que les valeurs de l'enregistrement *début*.
* Si les deux paramètres sont incompatibles avec la taille de la sous-sélection, les tableaux sont retournés vides

Comme [SELECTION TO ARRAY](selection-to-array.md), **SELECTION RANGE TO ARRAY** s'applique à la sélection de la table passée en paramètre. La commande peut réaliser les opérations suivantes :

* Charger les valeurs d'un ou plusieurs champs,
* Charger les numéros des enregistrements, à l'aide de la syntaxe *...;\[table\];tableau;...*
* Charger des valeurs de champs liés, s'il existe un lien automatique de N vers 1 entre les tables, ou si vous avez préalablement appelé la commande [SET AUTOMATIC RELATIONS](set-automatic-relations.md) pour rendre automatiques les liens manuels N vers 1 (dans les deux cas, les valeurs peuvent être chargées à travers plusieurs niveaux de liens N vers 1 entre les tables).

Chaque tableau est typé en fonction du type de champ.

A noter toutefois que **SELECTION RANGE TO ARRAY** appliquée à un champ de type Heure créera un tableau de type Heure uniquement si le tableau n’a pas déjà été défini dans un autre type. Par exemple dans le contexte ci-dessous, le tableau *monTab* conservera le type Entier long :  

```4d
 ARRAY LONGINT(monTab;0)
 SELECTION RANGE TO ARRAY([maTable]monChpHeure;monTab)
```

Si vous chargez les numéros des enregistrements, ils sont copiés dans un tableau de type Entier long. 

**Note :** Il est possible d’appeler la commande **SELECTION RANGE TO ARRAY** avec uniquement les paramètres *début* et *fin*. Cette syntaxe particulière peut être employée pour lancer sur une sélection limitée l’exécution d’une série différée de commandes [SELECTION TO ARRAY](selection-to-array.md) utilisant le paramètre *\** (cf. exemple 4). 

**4D Server :** La commande **SELECTION RANGE TO ARRAY** est optimisée pour 4D Server. Chaque tableau est créé sur le serveur puis envoyé en totalité sur le poste client.

**ATTENTION :** **SELECTION RANGE TO ARRAY** peut créer des tableaux de taille importante, en fonction de l'intervalle défini par *début* et *fin*, ainsi que du type et de la taille des données à charger. Comme les tableaux résident en mémoire, il peut être utile de tester la taille des tableaux créés après l'exécution de la commande, ou d'utiliser une méthode projet d'interception d'erreurs, installée par la commande [ON ERR CALL](on-err-call.md). 

Une fois la commande correctement exécutée, la taille des tableaux résultants est égale à *(fin-début)+1* — sauf si le paramètre *fin* est supérieur au nombre d'enregistrements dans la sélection. Dans ce cas, les tableaux contiennent *(Enregistrements trouves(\[...\])-début)+1* éléments.

#### Exemple 1 

La ligne de code suivante utilise les 50 premiers enregistrements de la sélection courante de la table *\[Factures\]*. Les valeurs du champ *\[Factures\]RéfFacture* et du champ lié *\[Clients\]RéfClient* sont chargées.

```4d
 SELECTION RANGE TO ARRAY(1;50;[Factures]RéfFacture;tlRéfFacture;[Clients]RéfClient;tlRéfClient)
```

#### Exemple 2 

Les lignes de code suivantes utilisent les 50 derniers enregistrements de la sélection courante de la table *\[Factures\]*. Les numéros d'enregistrements de la table *\[Factures\]* ainsi que ceux de la table liée *\[Clients\]* sont chargés :

```4d
 lTailleSél:=Records in selection([Factures])
 SELECTION RANGE TO ARRAY(lTailleSél-49;lTailleSél;[Factures];taFactureNum;[Clients];taClientNum)
```

#### Exemple 3 

Les lignes de code suivantes vous permettent de travailler séquentiellement avec des portions de 1000 enregistrements d'une sélection importante qui ne peut pas être chargée dans des tableaux en une seule fois :

```4d
 lMaxPage:=1000
 lTailleSél:=Records in selection([Annuaire])
 For($lPage ;1;1+((lTailleSél-1)\lMaxPage))
  // Charger les valeurs et/ou les numéros d'enregistrements
    SELECTION RANGE TO ARRAY(1+(lMaxPage*($lPage-1));lMaxPage*$lPage;...;...;...;...;...;...)
  // Faire quelque chose avec les tableaux
 End for
```

#### Exemple 4 

Utilisation des 50 premiers enregistrements courants de la table \[Factures\] pour charger divers tableaux, en exécution différée : 

```4d
     // Instructions différées
 SELECTION TO ARRAY([Factures]RefFacture;tLRefFac;*)
 SELECTION TO ARRAY([Factures]Date;tDDateFac;*)
 SELECTION TO ARRAY([Clients]RefClient;tLRefCli;*)
     // Exécution des instructions différées
 SELECTION RANGE TO ARRAY(1;50)
```

#### Voir aussi 

[ON ERR CALL](on-err-call.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 368 |
| Thread safe | &check; |


