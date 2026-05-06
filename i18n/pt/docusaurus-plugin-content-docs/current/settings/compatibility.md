---
id: compatibility
title: Página de compatibilidade
---

Os grupos de páginas de compatibilidade juntam parâmetros relacionados com a manutenção da compatibilidade com versões anteriores do 4D.

:::note

- O número de opções exibidas depende da versão 4D com a qual o banco de dados/projeto original foi criado. bem como as configurações modificadas neste banco de dados/projeto.
- This page lists the compatibility options available for database/projects converted from 4D 18 onwards. Para opções de compatibilidade mais antigas, consulte a [Página de compatibilidade](https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html) em **doc.4d.com**.

:::

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to 18 R3, and checked for databases created with 4D 18 R3 and higher. Starting with 18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. Consequentemente, as características não convencionais da anterior implementação já não funcionam. Estes incluem:

  - inicial "/" não é apenas o nó raiz - usar um / como primeiro caractere em uma expressão XPath não declara um caminho absoluto do nó raiz
  - não há nó atual implícito - o nó atual tem que ser incluído na expressão XPath
  - não há pesquisa recursiva em estruturas repetidas - apenas o primeiro elemento é analisado.\

  Embora não seja padrão, você pode querer continuar usando essas funções para que seu código continue a funcionar como antes -- nesse caso, apenas defina a opção *desmarcada*. Por outro lado, se seu código não depender da implementação não padrão e se você quiser se beneficiar dos recursos estendidos do XPath em seus bancos de dados (como descrito no [`elemento DOM Find XML`](../commands/dom-find-xml-element) comando), certifique-se que a opção **Use XPath** padrão está *marcada*.

- **Use LF for end of line on macOS:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. Se você deseja se beneficiar deste novo comportamento em projetos convertidos de versões anteriores da 4D, marque esta opção. Veja [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Documento ao texto`](../commands/document-to-text), e [XML SET OPTIONS](../commands/xml-set-options).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. Nas versões anteriores, os arquivos texto eram gravados com um BOM por padrão. Selecione esta opção se quiser ativar o novo comportamento nos projetos convertidos. Veja [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Documento ao texto`](../commands/document-to-text), e [XML SET OPTIONS](../commands/xml-set-options).

- **Map NULL values to blank values unchecked by default at field creation**: For better compliance with ORDA specifications, in databases created with 4D 19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. Você pode aplicar esse comportamento padrão aos seus bancos de dados convertidos marcando esta opção (trabalhar com valores Null é recomendado, uma vez que são totalmente suportados por [ORDA](../ORDA/overview.md).

- **Non-blocking printing**: Starting with 4D 20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or your databases converted from binary mode to project mode. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call [`CLOSE PRINTING JOB`](../commands/close-printing-job) for the printer to be available for the next print job (check previous 4D documentations for more information).

- **Save structure color and coordinates in separate catalog_editor.json file**: Starting with 4D 20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) são salvos em um arquivo separado chamado `catalog_editor.json`, armazenado na [pasta de códigos](../Project/architecture.md#sources). Esta nova arquitetura de arquivos torna mais fácil gerenciar conflitos de merge em aplicações VCS desde o arquivo `catalog.4DCatalog` agora contém apenas alterações cruciais na estrutura da base de dados. Por razões de compatibilidade, este recurso não está habilitado por padrão em projetos convertidos de versões 4D anteriores, você precisa marcar esta opção. Quando o recurso estiver ativado, o arquivo `catalog_editor.json` é criado na primeira modificação no editor de estruturas.

- **Use legacy print rendering**: Starting with 4D 21 R3, 4D uses a new, unified print rendering engine to print forms on macOS and Windows. To make sure forms designed with the [legacy screen-based print renderer](../FormEditor/forms.md#legacy-print-renderer) continue to be printed as expected, this option is checked by default in converted projects or databases created with 4D 21 R2 and before. You can uncheck this option to benefit from the [modern print rendering engine](../FormEditor/forms.md#print-rendering-engine). Note that when forms are rendered under Liquid Glass (macOS) or Fluent UI (Windows) interfaces, this option is ignored: in such contexts forms are always printed using the modern print renderer (see [this section](../../FormEditor/forms.md#legacy-print-rendering)).