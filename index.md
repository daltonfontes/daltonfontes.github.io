# Welcome to My Blog

Hello! I'm Dalton Fontes, and this is my personal blog where I share my thoughts on technology, coding, and life experiences.

## Recent Posts

{% for post in site.posts %}
  * [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

Feel free to explore and connect with me on [GitHub](https://github.com/daltonfontes) and [LinkedIn](https://linkedin.com/in/daltonfontes). Enjoy your stay!
