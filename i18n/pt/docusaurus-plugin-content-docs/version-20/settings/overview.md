---
id: overview
title: Settings
---

Os parâmetros configuram o funcionamento do projeto atual. Esses parâmetros podem diferir para cada projeto. Eles incluem as portas de escuta, configurações de backup, opções de segurança, parâmetros Web, etc.

![](../assets/en/settings/main.png)

> 4D fornece outro conjunto de parâmetros, chamado **Preferências**, que se aplicam à aplicação 4D IDE. Para obter mais informações, consulte [Preferencies](../Preferencies/general.md).


## Aceder os parâmetros

Pode aceder à caixa de diálogo Parâmetros:

-   usando a opção de menu **Desenho > Parâmetros...**
-   clicando em **Parâmetros** na barra de ferramentas 4D
-   no 4D Server, usando a opção de menu **Editar > Parâmetros...**

Quando o modo [**Parâmetros usuário** está ativado](../Desktop/user-settings.md), **Parâmetros...** é renomeado de **Parâmetros da estrutura...** e dois comandos do menu adicionais estão disponíveis em cada local:

-   **Parâmetros usuário...** lhe dá acesso aos parâmetros que podem ser armazenadas externamente em um arquivo usuário. Se estas forem modificadas, serão utilizadas em vez dos parâmetros de estrutura.
-   **Parâmetros usuário para o arquivo de dados...** lhe dá acesso aos parâmetros que podem ser armazenadas externamente em um arquivo usuário anexado ao arquivo de dados atual. Se eles forem modificados, serão usados em vez de parâmetros de usuário ou estrutura.

### Informações de bloqueio

O bloqueio pode ocorrer nos modos Projeto e Cliente/servidor quando:

-   O arquivo *settings.4DSettings* é 'Somente leitura' (Projetos somente). A modificação de uma configuração exibirá um alerta para desbloqueá-la, se possível.
-   Dois ou mais usuários tentam modificar as mesmas configurações ao mesmo tempo. Os parâmetros não podem ser usadas até que o primeiro usuário a libere fechando a janela. (Apenas cliente/servidor)

Em ambos os casos, os parâmetros podem ser abertos em 'Somente leitura', mas não podem ser usados até que o bloqueio seja removido.



## Personalização de parâmetros

Nas caixas de diálogo das Propriedades, os parâmetros cujos valores foram modificados aparecem **em negrito**:

![](../assets/en/settings/customize-settings.png)

Os parâmetros indicados como personalizados podem ter sido modificados diretamente na caixa de diálogo, ou pode ter sido modificado anteriormente no caso de um projeto convertido.

Um parâmetro continua a aparecer a negrito mesmo quando o seu valor é substituído manualmente pelos seus valores por defeito. Desta forma, é sempre possível identificar visualmente quaisquer parâmetros que tenham sido personalizados.

A maioria dos parâmetros é aplicada imediatamente. No entanto, alguns deles (como parâmetro de inicialização) só têm efeito quando o banco de dados é reiniciado. Neste caso, uma caixa de diálogo parece informar que a alteração terá efeito na próxima inicialização.


## Repor os parâmetros

Para redefinir os parâmetros para seus valores padrão e remover o estilo negrito, indicando que foram personalizados, clique em **Redefinir os parâmetros de fábrica**.

Este botão repõe todos os parâmetros da página atual. Fica ativo quando pelo menos um parâmetro tiver sido modificado na página atual.
