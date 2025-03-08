from fastapi import APIRouter

from app.api.routes import login, private, users, utils, products, subscribers
from app.core.config import settings

api_router = APIRouter()
api_router.include_router(login.router)
api_router.include_router(users.router)
api_router.include_router(utils.router)
api_router.include_router(products.router)
api_router.include_router(subscribers.router)


if settings.ENVIRONMENT == "local":
    api_router.include_router(private.router)
