import sys

def main():
    contador = 0
    dicionario_de_empregados = {}

    while(True):
        print('\nO que você deseja fazer?')
        print('\n1. Cadastrar um empregado')
        print('2. Alterar um empregado')
        print('3. Remover um empregado')
        print('4. Listar empregados')
        print('5. Sair')

        resposta = int(input('\nDigite um número de 1 a 5: '))

        if resposta == 1:
            nome = input('\nInforme o nome: ')
            sobrenome = input('Informe o sobrenome: ')
            salario = float(input('Informe o salário: '))
            contador += 1
            empregado = {'numero': contador, 'nome': nome, 'sobrenome': sobrenome, 'salario': salario}
            dicionario_de_empregados[contador] = empregado
            print('\nEmpregado número ' + str(empregado['numero']) + ' cadastrado com sucesso.')
        elif resposta == 2:
            numero = int(input('\nInforme o número do empregado: '))

            if numero in dicionario_de_empregados:
                print('\nO que você deseja alterar?')
                print('1. Nome')
                print('2. Sobrenome')
                resposta = int(input('\nDigite 1 ou 2: '))
                if resposta == 1:
                    novo_nome = input('\nInforme o novo nome: ')
                    dicionario_de_empregados[numero]['nome'] = novo_nome
                    print('\nNome de empregado alterado com sucesso.')
                elif resposta == 2:
                    novo_sobrenome = input('\nInforme o novo sobrenome: ')
                    dicionario_de_empregados[numero]['sobrenome'] = novo_sobrenome
                    print('\nSobrenome de empregado alterado com sucesso.')
                else:
                    print('\nOpção inválida.')
            else:
                print('\nEmpregado não encontrado')

        elif resposta == 3:
            numero = int(input('\nInforme o número do empregado: '))

            if numero in dicionario_de_empregados:
                nome_completo = dicionario_de_empregados[numero]['nome'] + ' ' + dicionario_de_empregados[numero]['sobrenome']
                del dicionario_de_empregados[numero]
                print('\nEmpregado ' + nome_completo + ' removido com sucesso.')
            else:
                print('\nEmpregado número ' + str(numero) + ' não encontrado.')

        elif resposta == 4:
            for empregado in dicionario_de_empregados.values():
                print(empregado)
        elif resposta == 5:
            sys.exit(0)
        else:
            print('\nOpção inválida.')

if __name__ == '__main__':
    main()