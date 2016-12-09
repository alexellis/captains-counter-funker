# captains-counter-funker
A sample funker function to count the total number of Docker captains.

Use this with [funker-dispatch](https://github.com/alexellis/funker-dispatch)

Usage:
======

```
git clone https://github.com/alexellis/captains-counter-funker
cd captains-counter-funker
git clone https://github.com/alexellis/funker-node

docker build -t captains-counter-funker .

docker network create --name funker --attachable
docker service create --name CaptainsIntent --network funker captains-counter-funker
```
