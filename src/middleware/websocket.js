var wsUri = 'wss://echo.websocket.org/';
var websocket;

function init()
{
  websocket = new WebSocket(wsUri);
  websocket.onopen = (evt) => { onOpen(evt) };
  websocket.onclose = (evt) => { onClose(evt) };
  websocket.onmessage = (evt) => { onMessage(evt) };
  websocket.onerror = (evt) => { onError(evt) };
  return websocket;
}

function onOpen(evt)
{
  writeToConsole("CONNECTED");
  doSend("WebSocket rocks");
}

function onClose(evt)
{
  writeToConsole("DISCONNECTED");
}

function onMessage(evt)
{
  writeToConsole(`RESPONSE: ${evt.data}`);
  setTimeout(() => {
    websocket.close();
  }, 10000)
}

function onError(evt)
{
  writeToConsole(`ERROR: ${evt.data}`);
}

function doSend(message)
{
  writeToConsole("SENT: " + message);
  websocket.send(message);
}

function writeToConsole(message)
{
  console.info(message);
}

export default { init }
