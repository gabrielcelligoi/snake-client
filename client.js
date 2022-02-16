const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  
  conn.write('Name: GCR');

  // const movements = ['Move: up', 'Move: up', 'Move: up', 'Move: right', 'Move: right', 'Move: right'];
  // let delay = 200;

  // for (let i = 0; i < movements.length; i++) {
  //   setTimeout(() => {
  //     conn.write(movements[i]);
  //   }, delay += 200);
  // };

  

  return conn;
};

module.exports = connect;