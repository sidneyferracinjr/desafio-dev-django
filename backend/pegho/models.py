from django.db import models

class DadosPessoais(models.Model):
    nome = models.CharField(max_length=100, blank=False, null=False)
    cpf = models.CharField(max_length=14, blank=False, null=False, default='000.000.000-00')
    data_nascimento = models.DateField(blank=False, null=False)

class Contato(models.Model):
    email = models.EmailField(blank=False, null=False)
    telefone = models.CharField(max_length=20, blank=False, null=False)
    endereco = models.CharField(max_length=255, blank=False, null=False)

class ExperienciaProfissional(models.Model):
    cargo = models.CharField(max_length=100)
    empresa = models.CharField(max_length=100)
    periodo = models.CharField(max_length=50)
    descricao = models.TextField()

class FormacaoAcademica(models.Model):
    instituicao = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)
    periodo = models.CharField(max_length=50)