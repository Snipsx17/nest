FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install Postgres client
RUN apt-get update && apt-get install -y postgresql-client

# Optional: pgcli (más amigable que psql)
RUN pip install pgcli
