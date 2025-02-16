---
id: php
title: Página PHP
---

Em 4D, você pode executar scripts PHP diretamente configurando a página do PHP nas Configurações do Banco de Dados (consulte [executar scripts PHP em 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) no 4D *Idioma de Referência* manual).

## Intérprete

-   **Endereço IP** e número da porta Por padrão, 4D fornece um interpretador PHP, compilado em FastCGI. Por motivos relacionados à arquitetura interna, as solicitações de execução vão para o interpretador PHP em um endereço HTTP específico. Por padrão, 4D usa o endereço 127.0.0.1 e a porta 8002. Você pode alterar esse endereço e/ou porta se eles já forem usados por outro serviço ou se você tiver vários intérpretes na mesma máquina. Para fazer isso, você modifica os parâmetros **IP Address (endereço IP** ) e **Port number (número da porta** ).\
  Observe que o endereço HTTP deve estar na mesma máquina que 4D.

-   **Interpretador externo** Se você usar um interpretador PHP externo, ele deve ser compilado em FastCGI e estar na mesma máquina que 4D (consulte "Usando outro interpretador PHP ou outro arquivo php.ini" em [Executando scripts PHP em 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)). Select this option so 4D does not attempt a connection with the internal interpreter when executing a PHP request. Note that this configuration requires your manual execution and control of the external interpreter.

**4D Server:** These settings are shared between 4D Server and the 4D remote machines so it is not possible to use an external interpreter on the server machine and simultaneously use the internal interpreter on the client machines (and vice versa). Also, if the server uses an external interpreter on port 9002, the client machines must also use an interpreter on this port.

## Opções

These options are related to the automatic management of the 4D PHP interpreter and are disabled when the **External interpreter** option is selected.

-   **Number of processes**: The 4D PHP interpreter drives a set of system execution processes called "child processes". For optimization, it can run and keep up to five child processes simultaneously by default. Você pode modificar o número de processos filhos de acordo com suas necessidades. For example, you may want to increase this value if you call on the PHP interpreter intensively. For more information, refer to the "Architecture" section in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

    > **Note:** Under Mac OS, all child processes share the same port. No Windows, cada processo filho utiliza um número de porta específico. The first number is the one set for the PHP interpreter; the other child processes increment this number. For example, if the default port is 8002 and you launch 5 child processes, they will use ports 8002 to 8006.

-   **Restart the interpreter after X requests**: This sets the maximum number of requests that the 4D PHP interpreter accepts. Quando esse número é atingido, o intérprete é reiniciado. For more information about this parameter, refer to the FastCGI-PHP documentation.
> In the Settings dialog boxes, parameters whose values have been modified appear **in bold**: You can also modify and read them separately for each machine and each session using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) and [Get database parameter](https://doc.4d.com/4dv19R/help/command/en/page643.html) commands. The parameters modified by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command have priority for the current session.