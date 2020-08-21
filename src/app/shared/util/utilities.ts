export const countElements: Function = (array: any[], element: any): number => array.reduce((agg, curr) => {
  if (curr === element) {
    agg += 1;
  }
  return agg;
}, 0);

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

export const aggregateTeamDaysOff: Function = (teamMembers: any[]) => {
  const daysOff = [];
  teamMembers.forEach(member => {
    aggregateDaysOff(member.days).forEach(time => daysOff.push(time));
  });
  return daysOff;
};

export const aggregateTeamDaysInDevelopment: Function = (
  startDate: number,
  endDate: number,
  daysOffArray: number[],
  teamMemberCount: number
) => {
  let daysInDevelopment = 0;
  for (let i = startDate; i <= endDate; i += 86400000) {
      const currentDay = new Date(i).getDay();
      const teamMembersTakingTheDayOff: number = countElements(daysOffArray, i);
      const teamMembersWorking: number = teamMemberCount - teamMembersTakingTheDayOff;
      if (currentDay !== 0 && currentDay !== 6) {
        daysInDevelopment += teamMembersWorking;
      }
  }
  return daysInDevelopment;
};
