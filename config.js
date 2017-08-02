const CONFIG = {

  // the category, name, key, url, search path and color for your commands
  // if none of the specified keys are matched, the '*' key is used
  commands: [
    [null, 'Duckduckgo', '*', 'https://duckduckgo.com', '/?q={}', '#111'],
    ['Work', 'Zimbra', 'z', 'http://zimbra.mondial.at', null, '#FF9400'],
    ['Work', 'Trello', 'tr', 'https://trello.com', null, '#006EBD'],
    ['Work', 'GitHub', 'g', 'https://github.com/trending', null, '#333'],
    ['Lurk', 'Facebook', 'f', 'https://www.facebook.com', '/search/top/?q={}', '#3b5998'],
    ['Lurk', 'Instagram', 'i', 'https://www.instagram.com', false, '#833ab4'],
    ['Lurk', 'Reddit', 'r', 'https://www.reddit.com', '/search?q={}', '#5f99cf'],
    ['Lurk', 'Twitter', 't', 'https://twitter.com', '/search?q={}', '#1da1f2'],
    ['Watch', 'Netflix', 'n', 'https://www.netflix.com/browse', '/search?q={}', '#e50914'],
    ['Watch', 'Twitch', 'T', 'https://www.twitch.tv/directory/following', null, '#6441a5'],
    ['Watch', 'YouTube', 'y', 'https://youtube.com/feed/subscriptions', '/results?search_query={}', '#cd201f'],
    ['News', 'Hacker News', 'h', 'https://vue-hn.now.sh/top', null, '#FF4E00'],
    ['News', 'Hunt', 'H', 'https://www.producthunt.com', null, '#da552f'],
    ['News', 'Lobsters', 'l', 'https://www.producthunt.com', null, '#FF0000'],
    ['News', 'Designer News', 'd', 'https://www.designernews.co', null, '#1065DC'],
    ['News', 'derStandard', 's', 'https://www.derstandard.at', null, '#FF0083'],
    ['News', 'Verge', 'v', 'https://theverge.com', null, '#F90073'],
    ['News', 'Polygon', 'p', 'https://polygon.com', null, '#AD002E'],
    ['News', 'Wired', 'w', 'https://wired.com,', null, '#000000'],
    ['News', 'Guardian', 'g', 'https://www.theguardian.com/international', null, '#718182'],
    ['Network', 'NAS', 'N', 'http://olymp.dscloud.me:5000/', null, '#718182'],
    ['Network', 'Sonarr', 'S', 'http://olymp.dscloud.me:8989/', null, '#718182'],
    ['Network', 'Radarr', 'R', 'http://olymp.dscloud.me:7878/', null, '#718182'],
    ['Network', 'SAB', 'D', 'http://olymp.dscloud.me:8080/', null, '#718182'],
    ['Network', 'Modem', 'M', 'http://192.168.0.1', null, '#718182'],
    ['Network', 'Router', 'R', 'https://192.168.1.1', null, '#718182'],
    ['Network', 'UniFi', 'U', 'https://192.168.1.200:8443', null, '#718182'],
    ['Network', 'Pihole', 'P', 'http://192.168.1.200/admin/', null, '#718182'],
  ],

  // give suggestions as you type
  suggestions: true,

  // max amount of suggestions that will ever be displayed
  suggestionsLimit: 5,

  // the order and limit for each suggestion influencer
  // "Default" suggestions come from CONFIG.defaultSuggestions
  // "DuckDuckGo" suggestions come from the duck duck go search api
  // "History" suggestions come from your previously entered queries
  influencers: [{
      name: 'Default',
      limit: 5
    },
    {
      name: 'History',
      limit: 2
    },
    {
      name: 'DuckDuckGo',
      limit: 5
    },
  ],

  // default search suggestions for the specified queries
  defaultSuggestions: {
    'g': ['g/trending', 'gist.github.com', 'g/sxdx', 'g/mondial-edv'],
    'r': ['r/r/paragon', 'r/r/ruby', 'r/r/rails', 'r/r/elixir', 'r/r/vuejs'],
  },

  // instantly redirect when a key is matched
  // put a space before any other queries to prevent unwanted redirects
  instantRedirect: false,

  // open queries in a new tab
  newTab: true,

  // dynamic background colors when command domains are matched
  colors: true,

  // the delimiter between the key and your search query
  // e.g. to search GitHub for potatoes you'd type "g:potatoes"
  searchDelimiter: ':',

  // the delimiter between the key and a path
  // e.g. type "r/r/unixporn" to go to "reddit.com/r/unixporn"
  pathDelimiter: '/',

  // the delimiter between the hours and minutes in the clock
  clockDelimiter: '&nbsp;',
};
