---
id: overview
title: Settings
---

Os parâmetros configuram o funcionamento do projeto atual. Esses parâmetros podem diferir para cada projeto. They include the listening ports, backup configurations, security options, Web parameters, etc.

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

- El archivo _settings.4DSettings_ es de "sólo lectura" (sólo Proyectos). A modificação de uma configuração exibirá um alerta para desbloqueá-la, se possível.
- Dois ou mais usuários tentam modificar as mesmas configurações ao mesmo tempo. The settings cannot be used until the first user frees it by closing the window. (Apenas cliente/servidor)

In both cases, the settings can be opened in 'Read-only', but cannot be used until the lock is removed.

## Personalização de parâmetros

En las cajas de diálogo de las Propiedades, los parámetros cuyos valores se han modificado aparecen **en negrita**:

![](../assets/en/settings/customize-settings.png)

Parameters indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted project.

Um parâmetro continua a aparecer a negrito mesmo quando o seu valor é substituído manualmente pelos seus valores por defeito. Desta forma, é sempre possível identificar visualmente quaisquer parâmetros que tenham sido personalizados.

A maioria dos parâmetros é aplicada imediatamente. However, a few of them (such as the Startup environment setting) only take effect when the database is restarted. In this case, a dialog box appears to inform you that the change will take effect at the next startup.

## Repor os parâmetros

Para reiniciar los parámetros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en **Restablecer los valores de fábrica**.

Este botão repõe todos os parâmetros da página atual. Fica ativo quando pelo menos um parâmetro tiver sido modificado na página atual.
