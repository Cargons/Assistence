from rest_framework.routers import DefaultRouter
from .views import TicketViewSet, ClientViewSet, OperatorViewSet

router = DefaultRouter()
router.register(r'tickets', TicketViewSet, basename='ticket')
router.register(r'clients', ClientViewSet, basename='client')
router.register(r'operators', OperatorViewSet, basename='operator')

urlpatterns = router.urls
