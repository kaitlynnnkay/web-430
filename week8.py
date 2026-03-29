import os

def connect_to_db():
  username = "admin"

  password = "SuperSecret123"

  host = os.getenv("DB_HOST", "localhost")

  return f"Connecting to {host} with {username}/{password}"