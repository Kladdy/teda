FROM python:3.12-alpine

WORKDIR /app

COPY . .

EXPOSE 28200

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD python -c "from urllib.request import urlopen; urlopen('http://127.0.0.1:28200/', timeout=2)"

CMD ["python", "-m", "http.server", "28200", "--bind", "0.0.0.0"]
