---
id: compatibility
title: Page Compatibilité
---

La page Compatibilité regroupe les paramètres relatifs au maintien de la compatibilité avec les versions précédentes de 4D.

:::note

- Le nombre d'options affichées dépend de la version de 4D avec laquelle la base de données/projet original a été créé, ainsi que des paramétrages modifiés dans cette base/projet.\
  Cette page répertorie les options de compatibilité disponibles pour les bases de données/projets convertis à partir de 4D 18 et suivants.\
  Cette page répertorie les options de compatibilité disponibles pour les bases de données/projets convertis à partir de 4D 18 et suivants.
- This page lists the compatibility options available for database/projects converted from 4D 18 onwards. Pour les options de compatibilité plus anciennes, consultez la [page Compatibilité](https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html) sur **doc.4d.com**.

:::

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to 18 R3, and checked for databases created with 4D 18 R3 and higher. Starting with 18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. Par conséquent, les fonctionnalités non standard de l'implémentation antérieure ne fonctionnent plus. Elles incluent :

  - le caractère "/" initial n'est pas seulement le noeud racine - l'utilisation du caractère / comme premier caractère d'une expression XPath ne déclare pas un chemin absolu à partir du noeud racine
  - pas de noeud courant implicite - le noeud courant doit être intégré dans l'expression XPath
  - pas de requêtes récursives dans les structures répétées - seul le premier élément est parsé. \

  Même si ces fonctionnalités ne sont pas standard, vous pourriez vouloir continuer à les utiliser afin que votre code continue de fonctionner comme avant -- dans ce cas, il vous suffit de *désélectionner* l'option. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [`DOM Find XML element`](../commands/dom-find-xml-element) command), make sure the **Use standard XPath** option is *checked*.

- **Use LF for end of line on macOS:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. Si vous souhaitez bénéficier de ce nouveau comportement dans les projets convertis à partir de versions antérieures de 4D, cochez cette option. Voir [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Document to text`](../commands/document-to-text), et [XML SET OPTIONS](../commands/xml-set-options).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. Dans les versions antérieures, les fichiers texte étaient écrits avec un BOM par défaut. Sélectionnez cette option si vous souhaitez activer le nouveau comportement dans les projets convertis. Voir [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Document to text`](../commands/document-to-text), et [XML SET OPTIONS](../commands/xml-set-options).

- **Map NULL values to blank values unchecked by default at field creation**: For better compliance with ORDA specifications, in databases created with 4D 19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. Vous pouvez appliquer ce comportement par défaut à vos bases de données converties en cochant cette option (il est recommandé de travailler avec des valeurs Null car elles sont entièrement prises en charge par [ORDA](../ORDA/overview.md)).

- **Non-blocking printing**: Starting with 4D 20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or your databases converted from binary mode to project mode. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call [`CLOSE PRINTING JOB`](../commands/close-printing-job) for the printer to be available for the next print job (check previous 4D documentations for more information).

- **Save structure color and coordinates in separate catalog_editor.json file**: Starting with 4D 20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) sont sauvegardées dans un fichier séparé nommé `catalog_editor.json`, stocké dans le dossier [Sources](../Project/architecture.md#sources) du projet. Cette nouvelle architecture de fichiers facilite la gestion des conflits de fusion dans les applications de gestion de versions (VCS) car le fichier `catalog.4DCatalog` ne contient désormais que les modifications cruciales de la structure de la base de données. Pour des raisons de compatibilité, cette fonctionnalité n'est pas activée par défaut dans les projets convertis à partir des versions précédentes de 4D, vous devez cocher cette option. Lorsque la fonctionnalité est activée, le fichier `catalog_editor.json` est créé lors de la première modification dans l'éditeur de structure.

- **Use legacy print rendering**: Starting with 4D 21 R3, 4D uses a new, unified print rendering engine to print forms on macOS and Windows. To make sure forms designed with the [legacy screen-based print renderer](../FormEditor/forms.md#legacy-print-renderer) continue to be printed as expected, this option is checked by default in converted projects or databases created with 4D 21 R2 and before. You can uncheck this option to benefit from the [modern print rendering engine](../FormEditor/forms.md#print-rendering-engine). Note that when forms are rendered under Liquid Glass (macOS) or Fluent UI (Windows) interfaces, this option is ignored: in such contexts forms are always printed using the modern print renderer (see [this section](../../FormEditor/forms.md#legacy-print-rendering)).