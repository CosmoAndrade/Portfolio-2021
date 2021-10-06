class Empregado:
    contador = 0

    def __init__(self,nome,sobrenome,salario):

        Empregado.contador += 1

        self.numero = Empregado.contador
        self.nome = nome
        self.sobrenome = sobrenome
        self.salario = salario

    def get_nome_completo (self):
        return self.nome + ' ' + self.sobrenome

    def __str__(self):
        return ('Número: {}  Nome: {} {} - Salário: {}').format(self.numero,self.nome,self.sobrenome,self.salario)
        