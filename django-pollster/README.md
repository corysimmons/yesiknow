# django-pollster

This is an example Django polling app from following along with [this YouTube video](https://www.youtube.com/watch?v=e1IyzVyrLSU) (which follows along with the [official Django intro tutorial](https://docs.djangoproject.com/en/3.0/intro/tutorial01/).

## Personal Thoughts on Django

Django seems to follow a lot of the same conventions Rails does. Django's ORM is similar to Rail's ActiveRecord implementation. Django's MVC works the same way except it has different names (MVT—Models, Views, Templates respective to MVC) which can be somewhat confusing.

Django's core Admin UI seems really, really, nice. Node doesn't have anything to compete with it, and Rail's admin offerings are third-party. Django also seems to take a very mature approach in releases.

Python is also tied closely with AI/ML technologies, so getting more practice with it for a future career pivot (plus the really nice Admin) is a convincing argument to pursue Django full-time.

## Usage

- Have SQLite installed on your machine.
- `pipenv shell` (`brew install pipenv`)
- `pipenv install`
- `cd pollster`
- `python manage.py runserver` (requires Python 3 to be what the `python` bin maps to, alternatively `python3 manage.py runserver`)
- http://localhost:8000