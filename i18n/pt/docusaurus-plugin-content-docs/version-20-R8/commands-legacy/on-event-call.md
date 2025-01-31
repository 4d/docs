---
id: on-event-call
title: ON EVENT CALL
slug: /commands/on-event-call
displayed_sidebar: docs
---

<!--REF #_command_.ON EVENT CALL.Syntax-->**ON EVENT CALL** ( *metodoEvento* {; *nomeProcesso*} )<!-- END REF-->
<!--REF #_command_.ON EVENT CALL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodoEvento | Text | &#8594;  | Método evento a ser invocado, ou cadeia vazia para parar eventos interceptados |
| nomeProcesso | Text | &#8594;  | Nome do processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ON EVENT CALL.Summary-->O comando **ON EVENT CALL** instala o método, cujo nome se passa em *metodoEvento*, como método de gestão de eventos.<!-- END REF--> 

**Dica:** este comando necessita um nível de conhecimento avançado em programação. Geralmente, não necessita utilizar**ON EVENT CALL** para trabalhar com eventos. Quando utiliza formulários, 4D administra os eventos e os envia aos objetos e formulários apropriados. 

**Dica:** comandos tais como [MOUSE POSITION](mouse-position.md), [Shift down](shift-down.md), etc., para obter informação sobre eventos. Estes comandos podem chamar-se desde os métodos de objeto para obter a informação que necessita sobre um evento envolvido com um objeto. Utilizá-los lhe economiza a escritura de um algoritmo baseado em uma estrutura de tipo **ON EVENT CALL**.

O alcance deste comando é a sessão de trabalho atual. Automaticamente, o método se executa em um processo local separado. Só pode ter um método de gestão de eventos a la vez. Para deter um método de gestão de eventos, chame novamente **ON EVENT CALL** e passe uma cadeia vazia em *metodoEvento*.

Como o método de gestão de eventos é executado em um processo separado, está ativo constantemente, inclusive se nenhum método de 4D está sendo executado. Depois da instalação, 4D chama ao método de gestão de eventos cada vez que ocorre um evento. Um evento pode ser um clique com o mouse ou pressionar uma tecla. 

O parâmetro opcional *nomeProcesso* nomeia ao processo criado pelo comando **ON EVENT CALL**. Se *nomeProcesso* começa pelo símbolo dinheiro (*$*), começa um processo local, o qual geralmente é o que você quer. Se omitir o parâmetro *nomeProcesso*, 4D cria automaticamente um processo local chamado *$Event Manager*.

**Advertência:** seja muito cuidadoso com o que escreve em um método de gestão de eventos. NAO chame comandos que gerem eventos, do contrário será extremamente difícil sair da execução do método de gestão de eventos. A combinação de teclas Ctrl+Shift+Retrocesso (em Windows) ou comando-Shift-Opção-Control-Retrocesso (em Macintosh) converte o processo de evento em um processo normal. Isto significa que o método não será passado automaticamente a todos os eventos que ocorram. Poderia utilizar esta técnica para recuperar um método de gestão de eventos incontrolável (por exemplo, um que tenha eventos que disparem bugs).

No método de gestão de eventos, pode ler as seguintes variáveis sistema *MouseDown*, *KeyCode*, *Modifiers*, *MouseX*, *MouseY* e *MouseProc*. Note que estas variáveis são variáveis processo. Seu alcance é portanto o processo de gestão de eventos. Copie-as nas variáveis interprocesso se deseja que seus valores estejam disponíveis em outro processo.

* A variável sistema *MouseDown* toma o valor 1 se o evento é um clique do mouse e 0 se não.
* A variável sistema *KeyCode* contém o código do caractere digitado no teclado ou o código de uma tecla de função. Consulte a seção *Códigos Unicode* (e suas subseções) e [EXPORT TEXT](export-text.md) como também na seção *Códigos de Função de teclado*.4D oferece constantes predefinidas para os principais *Códigos Unicode* e teclas de funções. Na janela do explorador, procure os temas destas constantes.
* A variável sistema *Modifiers* contém o valor modificador, indica se alguma das seguintes teclas foram pressionadas quando o evento ocorreu:

| **Plataforma** | **Modificadores**                                                |
| -------------- | ---------------------------------------------------------------- |
| Windows        | Maiús, Bloqueio de maiúsculas, Alt, Ctrl, Botão direito do mouse |
| Macintosh      | Maiús, Bloqueio de maiúsculas, Opção, Comando, Control           |

As teclas modificadoras não geram um evento; também deve pressionar outra tecla ou o botão do mouse. A variável *Modifiers* é uma variável de tipo Inteiro longo de 4 bytes, que deve ser considerada como um array de 32 bits. 4D oferece constantes predefinidas que expressam posições de bit ou máscaras de bit para provar o bit correspondente a cada tecla modificadora. Por exemplo, para detectar se a tecla Shift foi pressionada para o evento, pode escrever:

| **Modificador**                    | **Constante**                          |
| ---------------------------------- | -------------------------------------- |
| Maiúscula                          | Shift key bit / Shift key mask         |
| Bloqueio de maiúsculas             | Caps lock key bit / Caps lock key mask |
| Alt (também chamado Opção em OS X) | Option key bit / Option key mask       |
| Ctrl em Windows                    | Command key bit / Command key mask     |
| Ctrl em OS X                       | Control key bit / Control key mask     |
| Comando em OS X                    | Command key bit / Command key mask     |
| Clic direito                       | Control key bit / Control key mask     |

  
* as variáveis sistema *MouseX* e *MouseY* contêm as posições horizontal e vertical do clique do mouse, expressas no sistema de coordenadas locais da janela onde o clique foi produzido. A esquina superior esquerda da janela é a posição 0,0\. Estas variáveis são significativas só quando há um clique do mouse.
* a variável sistema *MouseProc* contém o número de referência do processo no qual ocorreu o evento (clique do mouse).

**Importante:** as variáveis sistema *MouseDown*, *KeyCode*, *Modifiers*, *MouseX*, *MouseY*, e *MouseProc* só contem valores significativos em um método de gestão de eventos instalado com **ON EVENT CALL**.

#### Exemplo 

Este exemplo cancela a impressão se o usuário pressiona as teclas Ctrl+ponto. Primeiro, o método de gestão de eventos é instalada. Depois aparece uma mensagem, anunciando que o usuário pode cancelar a impressão. Se a variável interprocesso *vbWeStop* é igual a True no método de gestão de eventos, uma caixa de diálogo de alerta aparece para mostrar ao usuário o número de registros que foram impressos. Depois o método de gestão de eventos é desinstalado:

```4d
 PAGE SETUP
 If(OK=1)
    ◊vbWeStop:=False
    ON EVENT CALL("GESTAO DE EVENTOS") // Instala o método de gestão de eventos
    ALL RECORDS([Pessoas])
    MESSAGE("Para interromper a impressão pressione Ctrl+Ponto.")
    $vlNbRegistros:=Records in selection([People])
    For($vlRegistro;1;$vlNbRegistros)
       If(◊vbWeStop)
          ALERT("Printing cancelled at record "+String($vlRegistro)+" of "+String($vlNbRegistros))
          $vlRegistro:=$vlNbRegistros+1
       Else
          Print form([Pessoas];"Relatório especial")
       End if
    End for
    PAGE BREAK
    ON EVENT CALL("") // Desinstala o método de gestão de eventos
 End if
```

Se for pressionado a combinação Ctrl+ponto, o método de gestão de eventos da a *vbWeStop* o valor True:

```4d
  // Método de projeto GESTAO DE EVENTOS
 If((Modifiers?? Command key bit) & (KeyCode=Period))
    CONFIRM("Tem certeza?")
    If(OK=1)
       ◊vbWeStop:=True
       FILTER EVENT // NAO esqueça este chamado; do contrário 4D também obterá este evento
    End if
 End if
```

Note que este exemplo utiliza ON EVENT CALL porque realiza um relatório especial de impressão utilizando os comandos *PAGE SETUP*, [Print form](../commands/print-form.md "Print form") e [PAGE BREAK](page-break.md "PAGE BREAK") em uma estrutura de tipo loop .   
Se um relatório for impresso utilizando [PRINT SELECTION](print-selection.md "PRINT SELECTION"), NAO necessita administrar os eventos que permitem ao usuário interromper a impressão; [PRINT SELECTION](print-selection.md "PRINT SELECTION") faz isso por você.

#### Ver também 

[FILTER EVENT](filter-event.md)  
[MOUSE POSITION](mouse-position.md)  
[Method called on event](method-called-on-event.md)  
[Shift down](shift-down.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 190 |
| Thread-seguro | &cross; |
| Proibido no servidor ||


