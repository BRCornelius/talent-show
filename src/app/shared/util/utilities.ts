export const aggregateDaysInDevelopment: Function = (startDate: number, endDate: number, daysOffArray: number[]) => {
    let daysInDevelopment = 0;
    for (let i = startDate; i <= endDate; i += 86400000) {
        const currentDay = new Date(i).getDay();
        if (currentDay !== 0 && currentDay !== 6 && !daysOffArray.includes(i)) {
          daysInDevelopment += 1;
        }
    }
    return daysInDevelopment;
};

export const aggregateDaysOff: Function = (daysOff) => {
    const daysOffArray = [];
    daysOff.forEach(request => {
        const requestStart = new Date(request.start).setHours(0, 0, 0, 0);
        const requestEnd = new Date(request.end).setHours(0, 0, 0, 0);
        for (let i = requestStart; i <= requestEnd; i += 86400000) {
          daysOffArray.push(i);
        }
    });
    return daysOffArray;
};
