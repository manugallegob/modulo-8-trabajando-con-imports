import * as dataB from "./data-business.js";
import * as clientB from "./client-business.js";

function printClientsAccounts() {
  const clients = dataB.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = clientB.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

export { printClientsAccounts };
