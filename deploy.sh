# Build container
docker build . -t announce-service:latest
# Tag
docker tag announce-service:latest winty.io:5000/winty/announce-service:snapshot
# Pushing
docker push winty.io:5000/winty/announce-service:snapshot