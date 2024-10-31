from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from pegho.views import DadosPessoaisViewSet, ContatoViewSet, ExperienciaProfissionalViewSet, FormacaoAcademicaViewSet

router = DefaultRouter()
router.register('dados-pessoais', DadosPessoaisViewSet)
router.register('contato', ContatoViewSet)
router.register('experiencia-profissional', ExperienciaProfissionalViewSet)
router.register('formacao-academica', FormacaoAcademicaViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]