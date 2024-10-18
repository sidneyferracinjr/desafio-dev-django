from django.db import models


class Candidato(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    telefone = models.CharField(max_length=15)
    endereco = models.CharField(max_length=200)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=2)
    pais = models.CharField(max_length=50)
    data_nascimento = models.DateField()
    genero = models.CharField(max_length=1)
    estado_civil = models.CharField(max_length=1)

    def __str__(self):
        return self.nome


class Formacao(models.Model):
    candidato = models.ForeignKey(Candidato, on_delete=models.CASCADE)
    curso = models.CharField(max_length=100)
    instituicao = models.CharField(max_length=100)
    data_inicio = models.DateField()
    data_fim = models.DateField()

    def __str__(self):
        return self.curso


class Experiencia(models.Model):
    candidato = models.ForeignKey(Candidato, on_delete=models.CASCADE)
    empresa = models.CharField(max_length=100)
    cargo = models.CharField(max_length=100)
    data_inicio = models.DateField()
    data_fim = models.DateField()

    def __str__(self):
        return self.cargo
