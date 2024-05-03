---
id: vp-get-value
title: VP Get value
---

<!-- REF #_method_.VP Get value.Syntax -->

**VP Get value** ( _rangeObj_ : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

| Paramètres | Type   |    | Description                           |                  |
| ---------- | ------ | -- | ------------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objet plage                           |                  |
| Résultat   | Object | <- | Objet contenant une valeur de cellule | <!-- END REF --> |

#### Description

The `VP Get value` command <!-- REF #_method_.VP Get value.Summary -->retrieves a cell value from a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range whose value you want to retrieve.

#### Objet retourné

The object returned will contain the `value` property, and, in case of a js date value, a `time` property:

| Propriété | Type                                       | Description                                                               |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Object | Value in the _rangeObj_ (except- time)                 |
| time      | Real                                       | Valeur heure (en secondes) si la valeur est du type js |

Si l'objet retourné inclut une date ou une heure, il est traité en tant que datetime et est complété comme suit :

- valeur heure - la date est complétée comme suit : December 30, 1899 au format dd/MM/yyyy (30/12/1899)
- valeur date - l'heure est complétée comme suit : minuit au format HH:mm:ss (00:00:00)

If _rangeObj_ contains multiple cells or multiple ranges, the value of the first cell is returned. La commande retourne un objet null si la cellule est vide.

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
