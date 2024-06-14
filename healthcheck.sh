#!/bin/sh

HOST="localhost"
PORT=${PORT:-3000}  # Use a porta definida na variável de ambiente ou 3000 por padrão

_healthcheck=$(curl --fail -s -S http://$HOST:$PORT/actuator/health) || exit 1

echo ${_healthcheck}

exit $?
