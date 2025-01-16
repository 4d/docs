---
id: set-database-localization
title: SET DATABASE LOCALIZATION
slug: /commands/set-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.SET DATABASE LOCALIZATION.Syntax-->**SET DATABASE LOCALIZATION** ( *codeLangue* {; *} )<!-- END REF-->
<!--REF #_command_.SET DATABASE LOCALIZATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| codeLangue | Text | &#8594;  | Sélecteur de langue |
| * | Opérateur | &#8594;  | Portée de la commande |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DATABASE LOCALIZATION.Summary-->La commande **SET DATABASE LOCALIZATION** permet de modifier la langue courante de la base pour la session courante.<!-- END REF-->

La langue courante de la base permet de définir le dossier .lproj dans lequel le programme va chercher les éléments localisés de l’application (textes et images). Par défaut, 4D détermine automatiquement la langue courante en fonction du contenu du dossier **Resources** et de l'environnement système (cf. description de la commande [Get database localization](get-database-localization.md)). **SET DATABASE LOCALIZATION** vous permet de modifier la langue courante par défaut. 

La commande ne modifie pas la langue des formulaires déjà chargés, seuls les éléments affichés postérieurement à l’appel de la commande tiendront compte du nouveau paramétrage. 

Passez dans *codeLangue* la langue à utiliser pour l’application, exprimée dans la norme définie par la RFC 3066, ISO639 et ISO3166\. Typiquement, vous devez passer "fr" pour le français, "es" pour l'espagnol, "en-us" pour l’anglais américain, etc. Pour plus d'informations sur cette norme, reportez-vous à l'*Annexe B : Architecture XLIFF* dans le manuel *Mode Développement*.

Par défaut, la commande s’applique à toutes les bases et composants ouverts, pour tous les process. Le paramètre optionnel *\**, s’il est passé, spécifie que la commande doit s’appliquer uniquement à la base qui a l’a appelée. Ce paramètre permet en particulier de définir séparément la langue de la base et celle d’un composant. 

Si la commande est correctement exécutée, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. 

**Note :** Conformément à la RFC, la commande utilise le "-" (tiret) pour séparer le code langue et le code région, par exemple "fr-ca" ou "en-us". En revanche, les dossiers "lproj" du dossier **Resources** utilisent le "\_" (soulignement), par exemple "fr\_ca.lproj" ou "en\_us.lproj". 

**4D Server :** Avec 4D Server, les langues disponibles sont celles situées sur le poste distant ayant appelé la commande. Vous devez donc veiller à la synchronisation des dossiers **Resources**. 

#### Exemple 1 

Nous souhaitons définir la langue de l’interface en français :

```4d
 SET DATABASE LOCALIZATION("fr")
```

#### Exemple 2 

L’interface de votre application utilise la chaîne statique ":xliff:shopping". Les fichiers xliff contiennent notamment les informations suivantes :

* Dossier FR :  
```XML  
<trans-unit id="15" resname="Shopping">  
  <source>Shopping</source>  
  <target>Faire les courses</target>  
</trans-unit>  
```
* Dossier FR\_CA :  
```XML  
<trans-unit id="15" resname="Shopping">  
  <source>Shopping</source>  
  <target>Magasiner</target>  
</trans-unit>  
```

```4d
 SET DATABASE LOCALIZATION("fr")
  //La chaîne ":xliff:shopping" affiche "Faire les courses"
 SET DATABASE LOCALIZATION("fr-ca")
  //La chaîne ":xliff:shopping" affiche "Magasiner"
```

#### Voir aussi 

[Get database localization](get-database-localization.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1104 |
| Thread safe | &cross; |
| Modifie les variables | OK |


