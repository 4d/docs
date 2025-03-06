---
id: php
title: Página PHP
---

Em 4D, você pode executar scripts PHP diretamente configurando a página do PHP nas Configurações do Banco de Dados (consulte [executar scripts PHP em 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) no 4D *Idioma de Referência* manual).

## Intérprete

-   **Endereço IP** e número da porta Por padrão, 4D fornece um interpretador PHP, compilado em FastCGI. Por motivos relacionados à arquitetura interna, as solicitações de execução vão para o interpretador PHP em um endereço HTTP específico. Por padrão, 4D usa o endereço 127.0.0.1 e a porta 8002. Você pode alterar esse endereço e/ou porta se eles já forem usados por outro serviço ou se você tiver vários intérpretes na mesma máquina. Para fazer isso, você modifica os parâmetros **IP Address (endereço IP** ) e **Port number (número da porta** ).\
  Observe que o endereço HTTP deve estar na mesma máquina que 4D.

-   **Interpretador externo** Se você usar um interpretador PHP externo, ele deve ser compilado em FastCGI e estar na mesma máquina que 4D (consulte "Usando outro interpretador PHP ou outro arquivo php.ini" em [Executando scripts PHP em 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)). Selecione esta opção para que 4D não tente uma conexão com o intérprete interno ao executar uma solicitação PHP. Observe que esta configuração requer sua execução manual e controle do intérprete externo.

**4D Server:** Essas configurações são compartilhadas entre o 4D Server e as máquinas remotas 4D, portanto, não é possível usar um intérprete externo na máquina do servidor e usar simultaneamente o intérprete interno nas máquinas clientes (e vice-versa). Além disso, se o servidor usar um intérprete externo na porta 9002, os computadores clientes também deverão usar um intérprete nessa porta.

## Opções

Essas opções estão relacionadas ao gerenciamento automático do interpretador PHP 4D e são desativadas quando a opção **Interpretador externo** é selecionada.

-   **Número de processos**: O interpretador PHP 4D conduz um conjunto de processos de execução do sistema chamados "processos filhos". Para otimização, ele pode executar e manter até cinco processos filhos simultaneamente por padrão. Você pode modificar o número de processos filhos de acordo com suas necessidades. Por exemplo, você pode querer aumentar esse valor se você ligar intensivamente para o interpretador de PHP. Para obter mais informações, consulte a seção "Arquitetura" de [Executando scripts PHP em 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

    > **Nota:** Em Mac OS, todos os processos filhos compartilham a mesma porta. No Windows, cada processo filho utiliza um número de porta específico. O primeiro número é o conjunto para o interpretador PHP; o outro processo filho incrementa este número. Por exemplo, se a porta padrão for 8002 e você iniciar 5 processos filhos, eles usarão as portas 8002 a 8006.

-   **Reiniciar o intérprete após X solicitações**: Isso define o número máximo de solicitações que o interpretador de PHP 4D aceita. Quando esse número é atingido, o intérprete é reiniciado. Para mais informações sobre este parâmetro, consulte a documentação FastCGI-PHP.
> **Observação:** nessa caixa de diálogo, os parâmetros são especificados por padrão para todas as máquinas conectadas e todas as sessões. Você também pode modificá-los e lê-los separadamente para cada máquina e cada sessão usando os comandos [SET DATÁVEL PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) e [Obtenha o parâmetro da base de dados](https://doc.4d.com/4dv19R/help/command/en/page643.html). Os parâmetros modificados pelo comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) têm prioridade para a sessão atual.