
function friday2verilog()
{
    var input = document.getElementById("input").value;

    // remove spaces before ";""
    input = input.replace(/ ;/g, ";");

    // remove spaces around "="
    input = input.replace(/ = /g, "=");

    // add "~" before any negated expression
    input = input.replace(/\w*'/g, "~$&");

    // remove "'"
    input = input.replace(/'/g, "");

    // add "[]" around numbers for array indexing
    input = input.replace(/\d/g, "[$&]");

    // remove duplicate whitespace
    input = input.replace(/  +/g, " ");

    // replace "+" with verilog OR operator and parentheses
    input = input.replace(/ \+ /g, ")|(");

    // add AND operator where there is whitespace
    input = input.replace(/ /g, " & ");

    // add space around OR operator
    input = input.replace(/\|/g, " | ");

    // add spacing around "=" and first opening parentheses
    input = input.replace(/=/g, " = (");

    // add last closing parentheses before ";"
    input = input.replace(/;/g, ");");



    document.getElementById("output").value = input;
};