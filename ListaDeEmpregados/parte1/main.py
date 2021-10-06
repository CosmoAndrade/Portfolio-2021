from modelo import Empregado


def main():
    nome = input('Informe seu nome: ')
    sobrenome = input('Informe seu sobrenome: ')
    salario = float(input('Informe seu salário: '))
    e1 = Empregado (nome,sobrenome,salario)

    print(e1)

    nome = input('Informe seu nome: ')
    sobrenome = input('Informe seu sobrenome: ')
    salario = float(input('Informe seu salário: '))
    e2 = Empregado (nome,sobrenome,salario)

    print(e2)

main()    