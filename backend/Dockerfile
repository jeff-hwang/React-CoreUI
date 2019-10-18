  FROM python:3.6-slim
  RUN apt-get update
  RUN mkdir /app
  WORKDIR /app
  COPY . /app
  RUN pip install -r requirements.txt
  EXPOSE 5000
  #ENTRYPOINT [ "python" ]
  #CMD [ "test2.py" ]
