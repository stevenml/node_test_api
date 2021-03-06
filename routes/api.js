var express = require('express');
var router = express.Router();
var utils = require('../services/service.utils');
var url = require('url');


/* GET users listing. */
router.get('/:funcName', function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    var result = null;
    var success = true;
    var errorMessage = "The request is invalid.";
    var funcName = req.params.funcName.toLowerCase();
    switch (funcName) {
        case "token":
            result = utils.token()
            break;
        case "fibonacci":
            if (query.n > -93 && query.n < 93)
                result = utils.fibonacci(query.n)
            else
            {
                success = false;
                errorMessage = "Error";
            }
            break;
        case "reversewords":
            var sentence = "";
            if (!!query.sentence)
                sentence = query.sentence;
            result = utils.reversewords(sentence);
            break;
        case "triangletype":
            try {
                var a = parseInt(query.a);
                var b = parseInt(query.b);
                var c = parseInt(query.c);
                result = utils.triangleType(a, b, c);
            } catch (e) {
                result = "Error";
            }

            break;
        default:
            success = false;
            break;
    }

    if (!success)
        res.send(400, { message: errorMessage })
    else {
        res.set("content-type", "application/json");
        res.send(JSON.stringify(result));
    }
});

module.exports = router;
