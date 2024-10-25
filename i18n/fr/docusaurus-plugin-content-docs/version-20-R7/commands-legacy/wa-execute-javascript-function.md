---
id: wa-execute-javascript-function
title: WA EXECUTE JAVASCRIPT FUNCTION
slug: /commands/wa-execute-javascript-function
displayed_sidebar: docs
---

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Syntax-->**WA EXECUTE JAVASCRIPT FUNCTION** ( {* ;} *objet* ; *fonctionJS* ; résultat | * {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| fonctionJS | Text | &#8594;  | Nom de la fonction JavaScript à exécuter |
| résultat &#124; * | Variable | &#8594;  | * pour une fonction sans résultat ou |
| &#8592; | Résultat de la fonction (si attendu) |
| param | Text, Number, Date, Object, Collection | &#8594;  | Paramètre(s) à passer à la fonction |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Summary-->La commande **WA EXECUTE JAVASCRIPT FUNCTION** exécute dans la zone Web désignée par les paramètres *\** et *objet* la fonction JavaScript *fonctionJS* et retourne facultativement son résultat dans le paramètre *résultat*.<!-- END REF-->

Si la fonction ne retourne pas de résultat, passez *\** dans le paramètre *résultat*.

Vous pouvez passer dans *param* un ou plusieurs paramètre(s) contenant les paramètres de la fonction.

La commande prend en charge plusieurs types de paramètres aussi bien en entrée (*param*) qu’en sortie (*résultat*). Vous pouvez passer et récupérer des données de type numérique, date, objet, collection et chaîne. Si le type du paramètre n'est pas défini, le type texte est utilisé par défaut.

**Attention :** L'utilisation de cette commande pour appeler directement une fonction JavaScript qui affiche un dialogue (**alert()**, **print().**..) n'est pas recommandée car l'utilisateur ne peut pas interagir avec la zone Web pendant l'exécution du code 4D. Si vous devez implémenter une telle interface, vous pouvez par exemple appeler **setTimeout(function(){alert();}, 50))** pour laisser l'exécution du code 4D se terminer et permettre l'interaction de l'utilisateur. 

#### Exemple 1 

Appel d’une fonction JavaScript avec 3 paramètres :

```4d
 $JavaScriptFunction:="TheFunctionToBeExecuted"
 $Param1:="10"
 $Param2:="true"
 $Param3:="1,000.2" //notez "," comme séparateur de milliers et "." comme séparateur décimal
 
 WA EXECUTE JAVASCRIPT FUNCTION(MaZoneW;$JavaScriptFunction;$Result;$Param1;$Param2;$Param3)
```

#### Exemple 2 

La fonction JavaScript "getCustomerInfos" reçoit un identifiant numérique en paramètre et retourne un objet :

```4d
 var $Result : Object
 var $ID : Integer
 $ID:=1000
 WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfos";$Result;$ID)
```

#### Voir aussi 

[WA Evaluate JavaScript](wa-evaluate-javascript.md)  