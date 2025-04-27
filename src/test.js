function TEST_parseExpression() {
    var expression = "roll [1d6] and then do something else";
    console.log(expression);
    var result = parseExpression(expression);
    console.log("parseExpression result: " + result);
    addNewLineToJournal(result);
  }
  
  function TEST_parseExpressionWithTable() {
    var expression = "roll [1d6] times on table {Trap} and tehn do something else";
    console.log(expression);
    var result = parseExpression(expression);
    console.log("parseExpression result: " + result);
    write(result);
  }
  
  function TEST_createButton() {
    createButton();
  }