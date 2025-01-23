---
id: overview
title: Visão Geral
sidebar_label: Visão Geral
---

A janela do Centro de Manutenção e Segurança (CMS) contém todas as ferramentas necessárias para verificação, análise, manutenção, backup, compactação e criptografia de arquivos de dados. A janela MSC está disponível em todas as aplicações 4D: 4D único usuário, 4D Server ou 4D Desktop.

**Nota:** a janela CSM não está disponível em uma conexão remota 4D.

Existem várias maneiras de abrir a janela do CSM. Como ele é acessado também determina como o projeto da aplicação é aberto: no modo de "manutenção" ou no modo "padrão". No modo de manutenção, o projeto não é aberto pelo 4D, apenas sua referência é fornecida ao CSM. No modo padrão, o projeto é aberto por 4D.

## Acesso no modo manutenção

No modo manutenção, somente a janela CSM é exibida (o projeto não é aberto pela aplicação 4D). Isso significa que os projetos que estão muito danificados para serem abertos no modo padrão por 4D podem, no entanto, ser acessados. Além disso, determinadas operações (compactação, reparo, etc.) exigem que o projeto seja aberto no modo de manutenção (consulte [Disponibilidade de funcionalidades](#feature-availability)).

É possível abrir o CSM em modo de manutenção a partir de dois locais:

- **Na caixa de diálogo padrão de abertura de projeto** A caixa de diálogo padrão Abrir inclui a opção **Centro de Segurança de Manutenção** no menu associado ao botão **Abrir**: ![](../assets/en/MSC/MSC_standardOpen.png)
- Menu **Ajuda/Centro de segurança e de manutenção** ou botão **CSM** da barra de ferramentas (projeto não aberto)  
  ![](../assets/en/MSC/mscicon.png) Quando chamar esta função, aparece uma caixa de diálogo padrão Abrir ficheiro para que possa selecionar o ficheiro *.4DProject* ou *.4dz* do projeto a ser examinado. O projeto não será aberto por 4D.

## Acesso ao modo padrão

No modo standard, está aberto um projeto. Neste modo, algumas funções de manutenção não estão disponíveis. Existem várias possibilidades de acesso à janela do CSM:

- Use o menu **Ajuda/Centro de Segurança e Manutenção** ou o botão **CSM** na barra de ferramentas 4D:  
  ![](../assets/en/MSC/mscicon.png)
- Use a ação padrão "msc" que pode ser associada a um comando de menu ou a um objeto de formulário.
- Utilizar o comando `OPEN SECURITY CENTER`.

## Disponibilidade de funcionalidades

Certas funções do CSM não estão disponíveis dependendo do modo de abertura do CSM:

- A função de backup só está disponível quando o projeto está aberto (o CSM deve ter sido aberto no modo padrão).
- As funções de compactação, reversão, restauração, reparo e criptografia de dados só podem ser usadas com arquivos de dados que não estejam abertos (o CSM deve ter sido aberto no modo manutenção). Se essas funções forem tentadas enquanto o projeto estiver aberto no modo padrão, uma caixa de diálogo avisará que isso implica que a aplicação deve ser fechado e reiniciado no modo manutenção.
- Em bancos de dados criptografados, o acesso a dados criptografados ou ao arquivo .journal exige o fornecimento de uma chave de dados de criptografia válida (consulte [a página Criptografar](encrypt.md)). Caso contrário, os dados encriptados não são visíveis.
