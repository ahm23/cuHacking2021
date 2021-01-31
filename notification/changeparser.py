import requests
from time import time, sleep

filename = 'sysc2004.html'

#Course want to get: SYSC 2004
# https://culearn.carleton.ca/moodle/course/view.php?id=167380 
# 1qsk9usqtoj7r3ct00svsv1nmf

#Get Method 
r = requests.get("https://culearn.carleton.ca/moodle/course/view.php?id=167380")

#Passing Parameter
headers={'MoodleSession': '1qsk9usqtoj7r3ct00svsv1nmf'}
r = requests.get('https://culearn.carleton.ca/moodle/course/view.php?id=167380', params=headers)

#Looping 60s to check anything wrong
running = True
while running:
    sleep (60 - time() % 60)

    if ( filename != headers["MoodleSession"] ):
        filename = headers["MoodleSession"]

        print("Updated successfully" )


#Response content
print (r.text)

print("Access successfully")