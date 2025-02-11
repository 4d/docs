---
id: overview
title: Settings
---

Os parâmetros configuram o funcionamento do projeto atual. Esses parâmetros podem diferir para cada projeto. Eles incluem as portas de escuta, configurações de backup, opções de segurança, parâmetros Web, etc.

![](../assets/en/settings/main.png)

> 4D ofrece otro conjunto de parámetros, llamados **Preferencias**, que se aplican a la aplicación 4D IDE. Para más información, consulte [Preferencias](../Preferences/general.md).

## Aceder os parâmetros

Pode aceder à caixa de diálogo Parâmetros:

- utilizando la opción de menú **Diseño > Parámetros...**
- haciendo clic en **Parámetros** en la barra de herramientas 4D
- en 4D Server, utilizando la opción de menú **Edición > Parámetros...**

When [**User settings** mode is enabled](../Desktop/user-settings.md), **Settings...** is renamed **Structure Settings...** and two additional menu commands are available at each location:

- **Parámetros usuario...** le da acceso a los parámetros que pueden almacenarse externamente en un archivo usuario. Se estas forem modificadas, serão utilizadas em vez dos parâmetros de estrutura.
- **Parámetros usuario para el archivo de datos...** le da acceso a los parámetros que pueden almacenarse externamente en un archivo usuario adjunto al archivo de datos actual. Se eles forem modificados, serão usados em vez de parâmetros de usuário ou estrutura.

### Informações de bloqueio

O bloqueio pode ocorrer nos modos Projeto e Cliente/servidor quando:

- El archivo *settings.4DSettings* es de "sólo lectura" (sólo Proyectos). A modificação de uma configuração exibirá um alerta para desbloqueá-la, se possível.
- Dois ou mais usuários tentam modificar as mesmas configurações ao mesmo tempo. Os parâmetros não podem ser usadas até que o primeiro usuário a libere fechando a janela. (Apenas cliente/servidor)

Em ambos os casos, os parâmetros podem ser abertos em 'Somente leitura', mas não podem ser usados até que o bloqueio seja removido.

## Personalização de parâmetros

En las cajas de diálogo de las Propiedades, los parámetros cuyos valores se han modificado aparecen **en negrita**:

![](../assets/en/settings/customize-settings.png)

Os parâmetros indicados como personalizados podem ter sido modificados diretamente na caixa de diálogo, ou pode ter sido modificado anteriormente no caso de um projeto convertido.

Um parâmetro continua a aparecer a negrito mesmo quando o seu valor é substituído manualmente pelos seus valores por defeito. Desta forma, é sempre possível identificar visualmente quaisquer parâmetros que tenham sido personalizados.

A maioria dos parâmetros é aplicada imediatamente. No entanto, alguns deles (como parâmetro de inicialização) só têm efeito quando o banco de dados é reiniciado. Neste caso, uma caixa de diálogo parece informar que a alteração terá efeito na próxima inicialização.

## Repor os parâmetros

Para reiniciar los parámetros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en **Restablecer los valores de fábrica**.

Este botão repõe todos os parâmetros da página atual. Fica ativo quando pelo menos um parâmetro tiver sido modificado na página atual.
