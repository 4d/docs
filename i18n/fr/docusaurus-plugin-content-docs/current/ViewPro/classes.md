---
id: classes
title: Classes
---

The following classes can be used in 4D View Pro.

## LineBorder

### .color

<!-- REF #LineBorder.color.Syntax -->

**.color** : Text<!-- END REF -->

La propriété `.color` est la <!-- REF #LineBorder.color.Summary -->[couleur](configuring.md#borders) de la bordure<!-- END REF -->. Default = black.

### .style

<!-- REF #LineBorder.style.Syntax -->

**.style** : Integer<!-- END REF -->

La propriété `.style` est le <!-- REF #LineBorder.style.Summary -->[style](configuring.md#borders) de la bordure<!-- END REF -->. Default = empty.

## TableColumn

### .dataField

<!-- REF #TableColumn.dataField.Syntax -->

**.dataField** : Text<!-- END REF -->

La propriété `.dataField` <!-- REF #TableColumn.dataField.Summary -->contient le nom de la propriété de la colonne de la table dans le contexte des données<!-- END REF -->.

### .formatter

<!-- REF #TableColumn.formatter.Syntax -->

**.formatter** : Text<!-- END REF -->

La propriété `.formatter` <!-- REF #TableColumn.formatter.Summary -->contient le formateur de la colonne de la table<!-- END REF -->.

### .name

<!-- REF #TableColumn.name.Syntax -->

**.name** : Text<!-- END REF -->

La propriété `.name` <!-- REF #TableColumn.name.Summary -->contient le nom de la colonne de la table<!-- END REF --> (obligatoire).

## TableOptions

### .allowAutoExpand

<!-- REF #TableOptions.allowAutoExpand.Syntax -->

**.allowAutoExpand** : Boolean<!-- END REF -->

La propriété `.allowAutoExpand` <!-- REF #TableOptions.allowAutoExpand.Summary -->indique si les colonnes ou les lignes du tableau doivent être étendues lorsque des valeurs sont ajoutées dans des cellules vides adjacentes<!-- END REF -->. Default = True

### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

La propriété `.bandColumns` <!-- REF #TableOptions.bandColumns.Summary -->indique s'il faut afficher un style de colonne alternée<!-- END REF -->. Default = False

### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

La propriété `.bandRows` <!-- REF #TableOptions.bandRows.Summary -->indique s'il faut afficher un style de ligne alternée<!-- END REF -->. Default = True

### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

La propriété `.highlightLastColumn` <!-- REF #TableOptions.highlightLastColumn.Summary -->indique s'il faut mettre en surbrillance la dernière colonne<!-- END REF -->. Default = False

### .highlightFirstColumn

<!-- REF #TableOptions.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

La propriété `.highlightFirstColumn` <!-- REF #TableOptions.highlightFirstColumn.Summary -->indique s'il faut mettre en surbrillance la première colonne<!-- END REF -->. Default = False

### .showFooter

<!-- REF #TableOptions.showFooter.Syntax -->

**.showFooter** : Boolean<!-- END REF -->

La propriété `.showFooter` <!-- REF #TableOptions.showFooter.Summary -->indique s'il faut afficher un pied de page<!-- END REF -->. Default = False

### .showHeader

<!-- REF #TableOptions.showHeader.Syntax -->

**.showHeader** : Boolean<!-- END REF -->

La propriété `.showHeader` <!-- REF #TableOptions.showHeader.Summary -->indique s'il faut afficher un en-tête<!-- END REF -->. Default = True

### .showResizeHandle

<!-- REF #TableOptions.showResizeHandle.Syntax -->

**.showResizeHandle** : Boolean<!-- END REF -->

La propriété `.showResizeHandle` <!-- REF #TableOptions.showResizeHandle.Summary -->indique s'il faut afficher la poignée de redimensionnement pour les tables qui n'ont pas de _source_<!-- END REF -->. Default = False

### .tableColumns

<!-- REF #TableOptions.tableColumns.Syntax -->

**.tableColumns** : Collection<!-- END REF -->

La propriété `.tableColumns` <!-- REF #TableOptions.tableColumns.Summary -->est une collection d'objets [cs.ViewPro.TableColumn](#tablecolumn) utilisés pour créer les colonnes de la table<!-- END REF -->.

### .theme

<!-- REF #TableOptions.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<!-- END REF -->

La propriété `.theme` <!-- REF #TableOptions.theme.Summary -->définit un thème de table. Peut également être un texte (nom d'un thème natif SpreadJS)<!-- END REF -->.

Voir les [thèmes natifs de SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).

### .useFooterDropDownList

<!-- REF #TableOptions.useFooterDropDownList.Syntax -->

**.useFooterDropDownList** : Boolean<!-- END REF -->

La propriété `.useFooterDropDownList` <!-- REF #TableOptions.useFooterDropDownList.Summary -->indique si une liste déroulante doit être utilisée dans les cellules du pied de page qui calculent la valeur totale d'une colonne<!-- END REF -->. Default = False

## TableStyle

### .backColor

<!-- REF #TableStyle.backColor.Syntax -->

**.backColor** : Text<!-- END REF -->

The `.backColor` property is the <!-- REF #TableStyle.backColor.Summary -->[background color](configuring.md#background--foreground) of the table<!-- END REF -->.

### .forecolor

<!-- REF #TableStyle.forecolor.Syntax -->

**.forecolor** : Text<!-- END REF -->

The `.forecolor` property is the <!-- REF #TableStyle.forecolor.Summary -->[foreground color](configuring.md#background--foreground) of the table<!-- END REF -->.

### .police

<!-- REF #TableStyle.font.Syntax -->

**.font** : Text<!-- END REF -->

The `.font` property is the <!-- REF #TableStyle.font.Summary -->font name (see [**Fonts and text**](configuring.md#fonts-and-text)) of the table<!-- END REF -->.

### .textDecoration

<!-- REF #TableStyle.textDecoration.Syntax -->

**.textDecoration** : Integer<!-- END REF -->

The `.textDecoration` property is the <!-- REF #TableStyle.textDecoration.Summary -->text decoration of the table (see [**Fonts and text**](configuring.md#fonts-and-text))<!-- END REF -->.

### .borderLeft

<!-- REF #TableStyle.borderLeft.Syntax -->

**.borderLeft** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propriété `.borderLeft` est la <!-- REF #TableStyle.borderLeft.Summary -->ligne de bordure gauche de la table<!-- END REF -->.

### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->

**.borderRight** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propriété `.borderRight` est la <!-- REF #TableStyle.borderRight.Summary -->ligne de bordure droite de la table<!-- END REF -->.

### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->

**.borderBottom** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propriété `.borderBottom` est la <!-- REF #TableStyle.borderBottom.Summary -->ligne de bordure inférieure de la table<!-- END REF -->.

### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propriété `.borderHorizontal` est la <!-- REF #TableStyle.borderHorizontal.Summary -->ligne de bordure horizontale de la table<!-- END REF -->.

### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->

**.borderVertical** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propriété `.borderVertical` est la <!-- REF #TableStyle.borderVertical.Summary -->ligne de bordure verticale de la table<!-- END REF -->.

## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

La propriété `.bandRows` <!-- REF #TableTheme.bandRows.Summary -->indique s'il faut afficher un style de ligne alternée<!-- END REF -->.

### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

La propriété `.bandColumns` <!-- REF #TableTheme.bandColumns.Summary -->indique s'il faut afficher un style de colonne alternée<!-- END REF -->.

### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

La propriété `.highlightLastColumn` <!-- REF #TableTheme.highlightLastColumn.Summary -->indique si la dernière colonne doit être mise en surbrillance<!-- END REF -->.

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

La propriété `.highlightFirstColumn` <!-- REF #TableTheme.highlightFirstColumn.Summary -->indique si la première colonne doit être mise en surbrillance<!-- END REF -->.

### .theme

<!-- REF #TableTheme.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme** : Text<!-- END REF -->

La propriété `.theme` <!-- REF #TableTheme.theme.Summary -->définit un thème de table<!-- END REF -->.
Si Texte : nom d'un [thème natif SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).

## TableThemeOptions

### .firstColumnStripSize

<!-- REF #TableThemeOptions.firstColumnStripSize.Syntax -->

**.firstColumnStripSize** : Integer<!-- END REF -->

La propriété `.firstColumnStripSize` est la <!-- REF #TableThemeOptions.firstColumnStripSize.Summary -->taille de la première colonne alternée<!-- END REF -->. Par défaut=1

### .firstColumnStripStyle

<!-- REF #TableThemeOptions.firstColumnStripStyle.Syntax -->

**.firstColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.firstColumnStripStyle` est le <!-- REF #TableThemeOptions.firstColumnStripStyle.Summary -->style de la première colonne alternée<!-- END REF -->.

### .firstFooterCellStyle

<!-- REF #TableThemeOptions.firstFooterCellStyle.Syntax -->

**.firstFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.firstFooterCellStyle` est le <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary -->style de la première cellule de pied de page<!-- END REF -->. "highlightFirstColumn" must be true.

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->

**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.firstHeaderCellStyle` est le <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary -->style de la première cellule de l'en-tête<!-- END REF -->. "highlightFirstColumn" must be true.

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->

**.firstRowStripSize** : Integer<!-- END REF -->

La propriété `.firstRowStripSize` est la <!-- REF #TableThemeOptions.firstRowStripSize.Summary -->taille de la première colonne alternée<!-- END REF -->. Par défaut=1.

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->

**.firstRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.firstRowStripStyle` est le <!-- REF #TableThemeOptions.firstRowStripStyle.Summary -->style de la première rangée alternée<!-- END REF -->.

### .footerRowStyle

<!-- REF #TableThemeOptions.footerRowStyle.Syntax -->

**.footerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.footerRowStyle` est le <!-- REF #TableThemeOptions.footerRowStyle.Summary -->style par défaut de la zone de pied de page<!-- END REF -->.

### .headerRowStyle

<!-- REF #TableThemeOptions.headerRowStyle.Syntax -->

**.headerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.headerRowStyle` est le <!-- REF #TableThemeOptions.headerRowStyle.Summary -->style par défaut de la zone d'en-tête<!-- END REF -->.

### .highlightFirstColumnStyle

<!-- REF #TableThemeOptions.highlightFirstColumnStyle.Syntax -->

**.highlightFirstColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.highlightFirstColumnStyle` est le <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->style de la première colonne<!-- END REF -->. "highlightFirstColumn" must be true.

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->

**.highlightLastColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.highlightLastColumnStyle` est le <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary -->style de la dernière colonne<!-- END REF -->. "highlightLastColumn" must be true.

### .lastFooterCellStyle

<!-- REF #TableThemeOptions.lastFooterCellStyle.Syntax -->

**.lastFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.lastFooterCellStyle` est le <!-- REF #TableThemeOptions.lastFooterCellStyle.Summary -->style de la dernière cellule du pied de page<!-- END REF -->. "highlightLastColumn" must be true.

### .lastHeaderCellStyle

<!-- REF #TableThemeOptions.lastHeaderCellStyle.Syntax -->

**.lastHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.lastHeaderCellStyle` est le <!-- REF #TableThemeOptions.lastHeaderCellStyle.Summary -->style de la dernière cellule d'en-tête<!-- END REF -->. "highlightLastColumn" must be true.

### .name

<!-- REF #TableThemeOptions.name.Syntax -->

**.name** : Text<!-- END REF -->

La propriété `.name` est le <!-- REF #TableThemeOptions.name.Summary -->nom d'un [thème natif SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes)<!-- END REF -->.

### .secondColumnStripSize

<!-- REF #TableThemeOptions.secondColumnStripSize.Syntax -->

**.secondColumnStripSize** : Integer<!-- END REF -->

La propriété `.secondColumnStripSize` est la <!-- REF #TableThemeOptions.secondColumnStripSize.Summary -->taille de la deuxième colonne alternée<!-- END REF -->. Par défaut=1

### .secondColumnStripStyle

<!-- REF #TableThemeOptions.secondColumnStripStyle.Syntax -->

**.secondColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.secondColumnStripStyle` est le <!-- REF #TableThemeOptions.secondColumnStripStyle.Summary -->style de la deuxième colonne alternée<!-- END REF -->.

### .secondRowStripSize

<!-- REF #TableThemeOptions.secondRowStripSize.Syntax -->

**.secondRowStripSize** : Integer<!-- END REF -->

La propriété `.secondRowStripSize` est la <!-- REF #TableThemeOptions.secondRowStripSize.Summary -->taille de la deuxième colonne alternée<!-- END REF -->. Par défaut=1.

### .secondRowStripStyle

<!-- REF #TableThemeOptions.secondRowStripStyle.Syntax -->

**.secondRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.secondRowStripStyle` est le <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->deuxième style de ligne alternée<!-- END REF -->.

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->

**.wholeTableStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propriété `.wholeTableStyle` est le <!-- REF #TableThemeOptions.wholeTableStyle.Summary -->style par défaut de la zone de données<!-- END REF -->.
