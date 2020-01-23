const strings = {
  'en': {
    'home': 'Home',
    'blog': 'Blog',
    'siteMap': 'Site map',
    'links': 'Links',
    'headText': {
      'header': 'Sticky Example',
      'text': 'This example shows how to use lazy loaded images, a sticky menu, and a simple text container'
    },
    'footerText': {
      'header': 'Footer Header',
      'text': 'Extra space for a call to action inside the footer that could help re-engage users.'
    }
  },
  'ru': {
    'home': 'Главная',
    'blog': 'Статьи',
    'siteMap': 'Карта сайта',
    'links': 'Ссылки',
    'headText': {
      'header': 'Верхний пример',
      'text': 'Этот приер показывает как картики и меню прилипает и все загружается линиво!'
    },
    'footerText': {
      'header': 'Нижний заголовок',
      'text': 'Здесь супер место для рассположения дейсвий и тд, что бы вернуть пользователя.'
    }
  },
  'links': {
    'mainMenu': [
      {
        'ref': 'home',
        'path': '/',
      },
      {
        'ref': 'blog',
        'path': '/posts'
      },
    ],
    'footerMenu': [
      {
        'ref': 'home',
        'path': '/'
      },
      {
        'ref': 'blog',
        'path': '/posts'
      },
    ],
    'bottomMenu': [
      {
        'ref': 'siteMap',
        'path': '/sitemap',
        'abs': true
      }
    ]
  }
}

export default strings
