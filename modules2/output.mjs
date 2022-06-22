import clc from "cli-color";

function outputMessage(message) {
  console.log(clc.red(`The message is : ${message}`));
}

export default outputMessage;
