---
id: resolve-alias
title: RESOLVE ALIAS
slug: /commands/resolve-alias
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE ALIAS.Syntax-->**RESOLVE ALIAS** ( *aliasPath* ; *targetPath* )<!-- END REF-->
<!--REF #_command_.RESOLVE ALIAS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aliasPath | Text | &#8594;  | Name or access path of the alias/shortcut |
| targetPath | Text | &#8592; | Name or access path of the alias/shortcut target |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESOLVE ALIAS.Summary-->The RESOLVE ALIAS command returns the full path to the target file or folder of the alias (named shortcut under Windows).<!-- END REF-->

The full path to the alias is passed in *aliasPath*.

Once the command has been executed, the *targetPath* variable contains the full path to the target file or folder of the alias and the OK system variable is set to 1.

If the path passed in *aliasPath* corresponds to a file and not an alias, *targetPath* returns the path of the file and the OK system variable is set to 0.

#### System variables and sets 

If *aliasPath* does specify an alias/shortcut, the OK system variable is set to 1\. If *aliasPath* specifies a standard file, the OK system variable is set to 0.

#### See also 

[CREATE ALIAS](create-alias.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 695 |
| Thread safe | &check; |
| Modifies variables | OK |


