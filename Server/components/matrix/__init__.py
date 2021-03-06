from flask import Blueprint

from .utils import MatrixCollector
from utils import response_handler

matrix_component = Blueprint('simple_page', __name__)


@matrix_component.route('/')
def show():
    try:
        matrix = MatrixCollector()
    except Exception as err:
        print(err)
        return response_handler.error()
    data = matrix.data()
    return response_handler.success(data)
