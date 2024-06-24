FROM node:lts-alpine

ARG CERT="certjava.pem"
WORKDIR /app

COPY . .
COPY $CERT /usr/local/share/ca-certificates/certjava.crt

RUN apk --no-cache add openssl ca-certificates \
    && cat /usr/local/share/ca-certificates/certjava.crt >> /etc/ssl/certs/ca-certificates.crt \
    && update-ca-certificates

CMD ["npm", "run", "preview"]
