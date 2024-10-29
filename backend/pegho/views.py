from rest_framework import viewsets
from pegho.models import DadosPessoais, Contato, ExperienciaProfissional, FormacaoAcademica
from pegho.serializers import DadosPessoaisSerializer, ContatoSerializer, ExperienciaProfissionalSerializer, FormacaoAcademicaSerializer

class DadosPessoaisViewSet(viewsets.ModelViewSet):
    queryset = DadosPessoais.objects.all()
    serializer_class = DadosPessoaisSerializer

class ContatoViewSet(viewsets.ModelViewSet):
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer

class ExperienciaProfissionalViewSet(viewsets.ModelViewSet):
    queryset = ExperienciaProfissional.objects.all()
    serializer_class = ExperienciaProfissionalSerializer

class FormacaoAcademicaViewSet(viewsets.ModelViewSet):
    queryset = FormacaoAcademica.objects.all()
    serializer_class = FormacaoAcademicaSerializer


