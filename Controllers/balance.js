function showBalance(){
    let labels = [];
    let Datas = [];
    
  axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`).then((res) => {
    res.data.sort((a,b) => a.date.localeCompare(b.date));
    res.data.forEach((item) => {
      labels.push(item.date.toString().split("T")[0]);
      let amount;
      if (item.type==1) {

        amount = item.amount
      }
      else{
        amount=item.amount*-1
      }   
      Datas.push(amount);
    });
    
  });

  setTimeout(() => {
    const ctx = document.getElementById("myBalance");

    new Chart(ctx, {
      type: "line",
      data: {        
        labels: labels,
        datasets: [
          {
            label: "Egyenleg",
            data: Datas,
            borderWidth: 3,
            backgroundColor : "Lightblue",
            borderColor:"Lightblue"
          },
        ],
        
      },
      
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }, 500);
}

showBalance()