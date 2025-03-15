import uuid
from datetime import datetime, timezone
from pydantic import EmailStr
from sqlmodel import Field, Relationship, SQLModel


# Shared properties
class UserBase(SQLModel):
    email: EmailStr = Field(unique=True, index=True, max_length=255)
    is_active: bool = True
    is_superuser: bool = False
    full_name: str | None = Field(default=None, max_length=255)

# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=40)

class UserRegister(SQLModel):
    email: EmailStr = Field(max_length=255)
    password: str = Field(min_length=8, max_length=40)
    full_name: str | None = Field(default=None, max_length=255)

# Properties to receive via API on update, all are optional
class UserUpdate(UserBase):
    email: EmailStr | None = Field(default=None, max_length=255)  # type: ignore
    password: str | None = Field(default=None, min_length=8, max_length=40)

class UserUpdateMe(SQLModel):
    full_name: str | None = Field(default=None, max_length=255)
    email: EmailStr | None = Field(default=None, max_length=255)

class UpdatePassword(SQLModel):
    current_password: str = Field(min_length=8, max_length=40)
    new_password: str = Field(min_length=8, max_length=40)

# Database model, database table inferred from class name
class User(UserBase, table=True):
    id: str = Field(default_factory=uuid.uuid4, primary_key=True, max_length=36)
    hashed_password: str
    products: list["Product"] = Relationship(back_populates="owner", cascade_delete=True)

# Properties to return via API, id is always required
class UserPublic(UserBase):
    id: str

class UsersPublic(SQLModel):
    data: list[UserPublic]
    count: int


# Shared properties
class ProductBase(SQLModel):
    title: str = Field(min_length=1, max_length=255)
    description: str | None = Field(default=None, max_length=255)

# Properties to receive on product creation
class ProductCreate(ProductBase):
    pass

# Properties to receive on product update
class ProductUpdate(ProductBase):
    title: str | None = Field(default=None, min_length=1, max_length=255)  # type: ignore

# Database model, database table inferred from class name
class Product(ProductBase, table=True):
    id: str = Field(default_factory=uuid.uuid4, primary_key=True, max_length=36)
    title: str = Field(max_length=255)
    owner_id: str = Field(
        foreign_key="user.id", nullable=False, ondelete="CASCADE"
    )
    owner: User | None = Relationship(back_populates="products")

# Properties to return via API, id is always required
class ProductPublic(ProductBase):
    id: str
    owner_id: str = Field(max_length=36)

class ProductsPublic(SQLModel):
    data: list[ProductPublic]
    count: int


class UserCoordinates(SQLModel):
    latitude: float
    longitude: float
    
class SubscriberBase(SQLModel):
    email: EmailStr = Field(unique=True, index=True, max_length=255)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc).replace(microsecond=0))
    location: str | None = Field(nullable=True, max_length=255)

class SubscriberCreate(SQLModel):
    email: EmailStr = Field(unique=True, index=True, max_length=255)
    coordinates: UserCoordinates
    
class SubscribersExport(SQLModel):
    date_from: datetime
    date_to: datetime
    
class Subscriber(SubscriberBase, table=True):
    id: str = Field(default_factory=uuid.uuid4, primary_key=True, max_length=36)

class SubscriberPublic(SubscriberBase):
    id: str

class SubscribersPublic(SQLModel):
    data: list[SubscriberPublic]
    count: int


# Generic message
class Message(SQLModel):
    message: str


# JSON payload containing access token
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


# Contents of JWT token
class TokenPayload(SQLModel):
    sub: str | None = None


class NewPassword(SQLModel):
    token: str
    new_password: str = Field(min_length=8, max_length=40)
