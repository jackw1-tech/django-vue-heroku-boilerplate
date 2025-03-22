#!/bin/bash

# Build the front-end
cd front
npm install
npm run build

# Move back to root
cd ..

# Collect static files
cd back
python manage.py collectstatic --noinput