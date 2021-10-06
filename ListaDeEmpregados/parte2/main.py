import sys

from modelo import Empregado


def recupera_posicao_do_empregado(lista, numero):
    return next((i for i, empregado in enumerate(lista)
                 if empregado.numero == numero), None)


def recupera_empregado(lista, numero):
    for empregado in lista:
        if empregado.numero == numero:
            return empregado
    return None


def main():
    lista_de_empregados = []

    while True:
        print('\nO que você deseja fazer?')
        print('\n1. Cadastrar um empregado')
        print('2. Aterar um empregado')
        print('3. Remover um empregado')
        print('4. Listar um empregado')
        print('5. Sair')

        resposta = int(input('\nDigite um número de 1 a 5: '))

        if resposta == 1:
            nome = input('\nInforme seu nome: ')
            sobrenome = input('Informe seu sobrenome: ')
            salario = float(input('Informe seu salário: '))
            empregado = Empregado(nome, sobrenome, salario)

            lista_de_empregados.append(empregado)

            print('\nEmpregado número ' + str(empregado.numero) +
                  ' cadastro realizado com sucesso.')

        elif resposta == 2:
            numero = int(input('\nInforme o número do empregado: '))
            empregado = recupera_empregado(lista_de_empregados, numero)

            if empregado:
                print('\nO que você deseja alterar?')
                print('1. Nome')
                print('2. Sobrenome')
                resposta = int(input('\nDigite 1 ou 2: '))
                if resposta == 1:
                    novo_nome = input('\nInforme o novo nome: ')
                    empregado.nome = novo_nome
                    print('\nNome de empregado alterado com sucesso.')
                elif resposta == 2:
                    novo_sobrenome = input('\nInforme o novo sobrenome: ')
                    empregado.sobrenome = novo_sobrenome
                    print('\nSobrenome de empregado alterado com sucesso.')
                else:
                    print('\nOpção inválida.')
            else:
                print('\nEmpregado não encontrado')

        elif resposta == 3:
            numero = int(input('\nInforme o número do empregado: '))
            indice = recupera_posicao_do_empregado(lista_de_empregados, numero)
            if indice is not None:
                    nome_completo = lista_de_empregados[indice].get_nome_completo(
                    )
                    # lista_de_empregados.remove(lista_de_empregados[indice]) # percorre a lista novamente
                    lista_de_empregados.pop(indice)
                    print('\nEmpregado ' + nome_completo +
                          ' removido com sucesso.')
            else:
                print('\nEmpregado número ' + str(numero) + ' não encontrado.')
        elif resposta == 4:
            for empregado in lista_de_empregados:
                print(empregado)
        elif resposta == 5:
            sys.exit(0)
            # break
        else:
            print('\nOpção inválida')


if __name__ == '__main__':
    main()
