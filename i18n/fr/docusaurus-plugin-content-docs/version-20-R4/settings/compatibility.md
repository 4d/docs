---
id: compatibility
title: Page de compatibilité
---

La page Compatibilité regroupe les paramètres relatifs au maintien de la compatibilité avec les versions précédentes de 4D.

> The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.\
> This page lists the compatibility options available for database/projects converted from 4D v18 onwards. For older compatibility options, refer to the [Compatibility page](https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.en.html) on **doc.4d.com**.

- **Use legacy network layer**: Starting with 4D v15, 4D applications propose a new network layer, named _ServerNet_, to handle communications between 4D Server and remote 4D machines (clients). L'ancienne couche réseau devient obsolète, mais est conservée pour assurer la compatibilité des bases existantes. A l'aide de cette option, vous pouvez activer ou désactiver à tout moment l'ancienne couche réseau dans vos applications 4D Server en fonction de vos besoins. _ServerNet_ is used automatically for new databases and databases converted from a v15 release or later. A noter qu'en cas de modification de l'option, vous devez redémarrer l'application pour que le changement soit pris en compte. Toute application cliente qui était connectée doit également être redémarrée afin de se connecter avec la nouvelle couche réseau.
  **Note:** This option can also be managed by programming using the `SET DATABASE PARAMETER` command.

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to v18 R3, and checked for databases created with 4D v18 R3 and higher. A partir de v18 R3, l'implémentation de XPath dans 4D a été modifiée pour une meilleure conformité et pour la prise en charge d'un plus grand nombre de prédicats. Par conséquent, les fonctionnalités non standard de l'implémentation antérieure ne fonctionnent plus. Elles incluent :

  - le caractère "/" initial n'est pas seulement le noeud racine - l'utilisation du caractère / comme premier caractère d'une expression XPath ne déclare pas un chemin absolu à partir du noeud racine
  - pas de noeud courant implicite - le noeud courant doit être intégré dans l'expression XPath
  - pas de requêtes récursives dans les structures répétées - seul le premier élément est parsé. \

  Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option _unchecked_. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [`DOM Find XML element`](https://doc.4d.com/4dv20/help/command/en/page864.html) command), make sure the **Use standard XPath** option is _checked_.

- **Use LF for end of line on macOS:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. Si vous souhaitez bénéficier de ce nouveau comportement dans les projets convertis à partir de versions antérieures de 4D, cochez cette option. See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. Dans les versions antérieures, les fichiers texte étaient écrits avec un BOM par défaut. Sélectionnez cette option si vous souhaitez activer le nouveau comportement dans les projets convertis. See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv20/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Map NULL values to blank values unchecked by default a field creation**: For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by [ORDA](../ORDA/overview.md).

- **Non-blocking printing**: Starting with 4D v20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or databases converted from binary mode to project mode. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call `CLOSE PRINTING JOB` for the printer to be available for the next print job (check previous 4D documentations for more information).
