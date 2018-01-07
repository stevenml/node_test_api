var express = require('express');
var router = express.Router();
var utils = require('../services/service.utils');
var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;

/* GET users listing. */
router.get('/api/:funcName', function (req, res, next) {

    var result = null;
    var success = true;
    var errorMessage = "The request is invalid.";
    switch (req.params.funName) {
        case "Token":
            result = utils.token()
            break;
        case "Fibonacci":
            if (!!query.n)
                result = utils.fibonacci(query.n)
            else
                success = false;
            break;
        case "ReverseWords":

            break;
        case "TriangleType":
            if (!!query.a && !!query.b && !!query.c) {
                try {
                    result = utils.triangleType();
                } catch (e) {
                    if(e.message)
                        errorMessage = e.message;
                }
            }
            else
                success = false;
            break;
        default:
            success = false;
            break;
    }

    if (!success)
        res.send(400, {message: errorMessage})
    else
        res.send(result);
});

module.exports = router;
