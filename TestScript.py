#Send sinusoidal data to web app

import requests
import time
import math

angle = 0;

while(1):
    value = (math.cos(math.radians(angle)) * 2000) + 3000
    url = "http://gasaware.herokuapp.com/receiver?id=6&ppm=%d&armed=1" % value
    #print url
    r = requests.get(url)
    angle = angle + 15
    if angle == 360:
        angle = 0
    time.sleep(.2) 
    