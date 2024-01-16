RUN docker build -t theofficallist . 
RUN docker run -p 8080:80 theofficallist 
