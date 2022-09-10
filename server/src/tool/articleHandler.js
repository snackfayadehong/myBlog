const db = require("../db");
const marked = require("marked");
const fs = require("fs");
const MyError = require("../exception");
const { NOT_FOUND_ERROR_CODE, REQUEST_PARAMS_ERROR_CODE } = require("../exception/errorCode");

function readeArticle(path) {
  if (!path) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE);
  }
}
function addArticle() {}
function changeArticle() {}
