import urllib2
from bs4 import BeautifulSoup

link = "http://ramanavami.org/schedule.php"
page = urllib2.urlopen(link)
soup = BeautifulSoup(page)

lists = soup.find_all('span',class_='presenter')
for con in lists:
    print con.find(text=True)
    
