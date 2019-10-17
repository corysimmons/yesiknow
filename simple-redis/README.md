# simple-redis

> I just followed along with the tutorial here: https://www.youtube.com/watch?v=oaJq1mQ3dFI

Simple local Redis caching, with an hour-long expiration, of usernames and the number of public repos they have, provided by the GitHub API.

1. Ensure Redis is installed/running locally (`brew install redis; brew services start redis` if you're on Mac)
2. `yarn`
3. `yarn start`
4. Open Chrome, then Network tab of DevTools
5. Visit http://localhost:5000/repos/corysimmons (or any GitHub username) and look at fetch time
6. Refresh and look at fetch time
7. After 60 minutes it will expire and you can try again
8. You can also flush Redis with `$ redis-cli; $ FLUSHALL` then start at step 5