  
  function countFridays13() {
    let startDate = new Date("2000-01-01");
    let currentDate = new Date();
    let count = 0;
  
    while (startDate <= currentDate) {
      if (startDate.getDay() === 5) {
        count++;
      }
      startDate.setMonth(startDate.getMonth() + 1);
    }
  
    return count;
  }
  
  const friday13Count = countFridays13();
  console.log("Количество пятниц 13 с 01/01/2000 до сегодня: " + friday13Count);
