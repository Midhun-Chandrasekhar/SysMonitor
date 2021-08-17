from flask import jsonify, make_response


def success(data={}, message=None):
    return make_response(jsonify({
        "status": "ok",
        "data": data,
        "message": message
    }), 200)


def error(status=400, message="Unknown_error"):
    return make_response(jsonify({
        "status": "err",
        "message": message
    }), status)
