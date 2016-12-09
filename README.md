# captains-counter-funker

Parses Docker's website to count Docker Captains

Use this with [funker-dispatch](https://github.com/alexellis/funker-dispatch)

Usage:
======

```
git clone https://github.com/alexellis/captains-counter-funker
cd captains-counter-funker
git clone https://github.com/alexellis/funker-node

docker build -t captains-counter .

docker network create --name funker --attachable
docker service create --name HelloIntent --network funker captains-counter
```
