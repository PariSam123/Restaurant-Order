window.addEventListener("DOMContentLoaded", getAllData);
const price = document.getElementById("price");
const dish = document.getElementById("dish");
const table = document.getElementById("catInput");

const addBtn = document
  .getElementById("addBtn")
  .addEventListener("click", submitBtn);
const expList = document.querySelector("#OrderTable");

var editID = false;

async function submitBtn(e){
    e.preventDefault();

    const order = {
        price: price.value,
        dish: dish.value,
        table: table.value
    }
    if(editID === false){
        try{
            const res = await axios.post("http://localhost:8000/orders/addOrder", order)
            showOrders()
        }catch(err){
            console.log("Error Occurred");
        }
    }else {
        axios
        .get(`http://localhost:8080/orders/updateOrder/${id}`)
        .then((order) => {
          console.log("edit", order.data);
          price.value = order.data.price;
          dish.value = order.data.dish;
          table.value = order.data.table;
        })
        .catch((err) => console.log(err));
      }
}
function showOrders(id) {
    list.innerHTML = "";
    axios
      .get(`http://localhost:8000/orders/getOneOrder/${id}`)
      .then((res) => {
        Data = res.data;
        addToList(Data);
      })
      .catch((err) => console.log(err));
  }
  function addToList(data) {
    Array.from(data).forEach((order) => {
      console.log("item", item.name);
      let li = document.createElement("li");
      li.innerHTML = `<tr id=${order.id}> 
                            <td>&#8377; ${order.price} </td>
                            <td> ${order.dish} </td>
                            <td> ${order.table} </td>
                            <td> 
                                <button onclick=editExpense('${order.id}') class='btn btn-outline-primary'>Edit</button>
                                <button onclick=deleteExpense('${order.id}') class='btn btn-outline-danger'>&#10007; </button>
                            </td>
                        </tr>
                    `;
      list.appendChild(li);
    });
  }

  
  function removeItem(id) {
    console.log("delete clicked", id);
    if (confirm("Are You Sure?")) {
      axios
        .delete(`http://localhost:8080/orders/deleteOrder/${id}`)
        .then(() => {
          console.log("delete");
          showOrders();
        })
        .catch((err) => console.log(`Error on delete:${err}`));
    }
  }