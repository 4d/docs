---
id: vp-get-value
title: VP Get value
---

<!-- REF #_method_.VP Get value.Syntax -->

**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

| Paramètres | Type   |                             | Description                           |                  |
| ---------- | ------ | --------------------------- | ------------------------------------- | ---------------- |
| rangeObj   | Object | ->                          | Objet plage                           |                  |
| Résultat   | Object | <- | Objet contenant une valeur de cellule | <!-- END REF --> |

#### Description

La commande `VP Get value` <!-- REF #_method_.VP Get value.Summary -->récupère la valeur d'une cellule depuis une plage de cellules désignées<!-- END REF -->.

Dans *rangeObj*, passez une plage dont vous souhaitez récupérer la valeur.

#### Objet retourné

L'objet retourné contiendra la propriété `value` et, dans le cas d'une valeur de date js, une propriété `time` :

| Propriété | Type                                       | Description                                                               |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Object | Valeur de *rangeObj* (exceptée - time)                 |
| time      | Real                                       | Valeur heure (en secondes) si la valeur est du type js |

Si l'objet retourné inclut une date ou une heure, il est traité en tant que datetime et est complété comme suit :

- valeur heure - la date est complétée comme suit : December 30, 1899 au format dd/MM/yyyy (30/12/1899)
- valeur date - l'heure est complétée comme suit : minuit au format HH:mm:ss (00:00:00)

Si *rangeObj* contient plusieurs cellules ou plusieurs plages, la valeur de la première cellule est retournée. La commande retourne un objet null si la cellule est vide.

#### Exemple

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))
End if
```

#### Voir également

[VP Get values](vp-get-values.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET VALUES](vp-set-values.md)
