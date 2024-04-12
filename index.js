// Function to handle form submission
async function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  try {
    // Make POST request to crud-crud to save user details
    const response = await axios.post("https://crudcrud.com/api/39bb511afcab4468aa3d2f6abdddbd82", {
      username,
      email,
      phone
    });

    // If request is successful, add user details to the screen
    addUserToList(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to add user details to the screen
function addUserToList(user) {
  const userList = document.getElementById("userList");

  const listItem = document.createElement("li");
  listItem.textContent = `${user.username} - ${user.email} - ${user.phone}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteUser(user._id)); // Call deleteUser function on button click

  listItem.appendChild(deleteButton);
  userList.appendChild(listItem);
}

// Function to delete user details
async function deleteUser(userId) {
  try {
    // Make DELETE request to crud-crud to delete user details
    await axios.delete(`https://crudcrud.com/api/your-api-endpoint/${userId}`);
    
    // If request is successful, remove user details from the screen
    const listItemToRemove = document.querySelector(`li[data-id="${userId}"]`);
    if (listItemToRemove) {
      listItemToRemove.remove();
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Do not touch the code below
module.exports = handleFormSubmit;

