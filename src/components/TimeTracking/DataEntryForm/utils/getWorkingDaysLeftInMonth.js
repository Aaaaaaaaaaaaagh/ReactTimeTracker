

function GetWorkingDaysLeftInMonth() {
  
    let count = 0;
    const curDate = new Date();
    const startofMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 1)
    const endOfMonth = new Date(curDate.getFullYear(), curDate.getMonth()+1, 0)
  
    while (startofMonth <= endOfMonth) {
      const dayOfWeek = startofMonth.getDay();
      if(!((dayOfWeek === 6) || (dayOfWeek === 0)))
        count += 1;
        startofMonth.setDate(startofMonth.getDate() + 1)
    }
    return count * 8;
  }
  

export default GetWorkingDaysLeftInMonth;