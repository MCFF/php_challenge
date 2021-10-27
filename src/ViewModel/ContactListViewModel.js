export default class ContactListViewModel {
  constructor() {
    this.contacts = [
      {
        id: "s",
        first_name: "Sarah",
      },
    ];
  }

  getList() {
    fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const json = await response.json();
      this.contacts.push({
        id: "asf",
        first_name: "john",
      });
    });
  }
}
