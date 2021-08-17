"""
Auther : Midhun Chandrasekhar
         Architect
Date: Aug 17 2021
Place: Kerala
"""

from flask import Flask
from settings.conf import ServerConf
from components.matrix import matrix_component

app = Flask(__name__)

app.register_blueprint(matrix_component, url_prefix='/matrix')


@app.route("/")
def index():
    return "<h3 align=\"center\">Welcome to Sys Matrix BE Server</h3"


app.run(ServerConf.host, ServerConf.port, ServerConf.debug)
