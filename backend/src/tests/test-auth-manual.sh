#!/bin/bash

# Definir la URL base
BASE_URL="http://localhost:5000/api/auth"

# Colores para salida
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Test Manual de APIs de Autenticación ===${NC}"
echo 

# 1. Registrar un nuevo usuario
echo -e "${YELLOW}1. Registrando un nuevo usuario...${NC}"
REGISTER_RESPONSE=$(curl -s -X POST \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","apellido":"User","email":"test@example.com","password":"password123"}' \
  $BASE_URL/register)

echo "$REGISTER_RESPONSE" | jq .

# Extraer token
TOKEN=$(echo "$REGISTER_RESPONSE" | jq -r '.token')

if [ "$TOKEN" != "null" ]; then
  echo -e "${GREEN}✓ Registro exitoso, token obtenido${NC}"
else
  echo -e "${RED}✗ Error en registro${NC}"
  exit 1
fi

echo 

# 2. Iniciar sesión
echo -e "${YELLOW}2. Iniciando sesión...${NC}"
LOGIN_RESPONSE=$(curl -s -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}' \
  $BASE_URL/login)

echo "$LOGIN_RESPONSE" | jq .

# Actualizar token
TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.token')

if [ "$TOKEN" != "null" ]; then
  echo -e "${GREEN}✓ Login exitoso, token obtenido${NC}"
else
  echo -e "${RED}✗ Error en login${NC}"
  exit 1
fi

echo 

# 3. Obtener perfil del usuario
echo -e "${YELLOW}3. Obteniendo perfil del usuario...${NC}"
ME_RESPONSE=$(curl -s -X GET \
  -H "Authorization: Bearer $TOKEN" \
  $BASE_URL/me)

echo "$ME_RESPONSE" | jq .

if [ "$(echo "$ME_RESPONSE" | jq -r '.success')" == "true" ]; then
  echo -e "${GREEN}✓ Perfil obtenido correctamente${NC}"
else
  echo -e "${RED}✗ Error al obtener perfil${NC}"
  exit 1
fi

echo 

echo -e "${GREEN}=== Todos los tests manuales pasaron exitosamente ===${NC}" 