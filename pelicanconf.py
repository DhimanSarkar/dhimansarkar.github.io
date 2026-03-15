AUTHOR = 'Dhiman Sarkar'
SITENAME = 'Hi! My Name Is Dhiman Sarkar'
SITEURL = ""

PATH = "content"

# THEME = 'themes/mytheme'
THEME_STATIC_DIR = 'assets'    

TIMEZONE = 'Asia/Kolkata'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("LinkedIn", "https://www.linkedin.com/in/dhiman-sarkar/"),
    ("ORCiD", "https://orcid.org/0009-0006-8050-6432/"),
    ("GitHub", "https://github.com/DhimanSarkar/"),
    ("Reddit", "https://www.reddit.com/user/dhiman_eminem/"),
    ("Mastodon", "https://mastodon.social/@DhimanSarkar/"),
    ("Facebook", "https://facebook.com/dhiman.eminem/"),
    ("Twitter", "https://twitter.com/_Dhiman_Sarkar_/"),
)

# Social widget
SOCIAL = (
    ("LinkedIn", "https://www.linkedin.com/in/dhiman-sarkar/"),
    ("ORCiD", "https://orcid.org/0009-0006-8050-6432/"),
    ("GitHub", "https://github.com/DhimanSarkar/"),
    ("Reddit", "https://www.reddit.com/user/dhiman_eminem/"),
    ("Mastodon", "https://mastodon.social/@DhimanSarkar/"),
    ("Facebook", "https://facebook.com/dhiman.eminem/"),
    ("Twitter", "https://twitter.com/_Dhiman_Sarkar_/"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True


# ────────────────────────────────────────────────────────────
#  URL STRUCTURE
# ────────────────────────────────────────────────────────────
ARTICLE_URL        = '{category}/{slug}/'
ARTICLE_SAVE_AS    = '{category}/{slug}/index.html'
 
PAGE_URL           = '{slug}/'
PAGE_SAVE_AS       = '{slug}/index.html'
 
CATEGORY_URL       = 'category/{slug}/'
CATEGORY_SAVE_AS   = 'category/{slug}/index.html'
 
TAG_URL            = 'tag/{slug}/'
TAG_SAVE_AS        = 'tag/{slug}/index.html'