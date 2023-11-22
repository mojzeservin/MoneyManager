function showChart(){
    let labels = [];
    let bevetelDatas = [];
    let kiadasDatas = [];
    let color;
  axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`).then((res) => {
    res.data.sort((a,b) => a.date.localeCompare(b.date));
    res.data.forEach((item) => {
      labels.push(item.date.toString().split("T")[0]);
      if (item.type==1) {
        bevetelDatas.push(item.amount)
        kiadasDatas.push(0)
      }
      else{
        kiadasDatas.push(item.amount*-1)
        bevetelDatas.push(0)
      }   
      
    });
    console.log(bevetelDatas,kiadasDatas);
  });

  setTimeout(() => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {        
        labels: labels,
        datasets: [
          {
            label: "Bevétel:",
            data: bevetelDatas,
            borderWidth: 3,
            backgroundColor : "Green"
          },
          {
            label: "Kiadás",
            data : kiadasDatas,
            borderWidth: 3,
            backgroundColor : "Red"
          }
        ],
        
      },
      
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
          x:{
            stacked:true,
          }
        },
      },
    });
  }, 500);
}
