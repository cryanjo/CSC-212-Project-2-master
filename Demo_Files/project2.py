# To change this template, choose Tools | Templates
# and open the template in the editor.
import web
#import ConfigParser
#import sys
##from pymongo import MongoClient, errors
#import json
#from bson import json_util, BSON
#import datetime
#import dateutil.parser
#from collections import defaultdict
#import os

__author__="US978847"
__date__ ="$Oct 3, 2013 12:47:14 PM$"

# Redirect to index.html file
class Index(object):
  def GET(self):
    raise web.seeother('../static/index.html');


urls = (
  '/', Index
  #'/modelquery', ModelQuery
);

if __name__ == "__main__":
  app = web.application(urls, globals(), True)
  app.run()