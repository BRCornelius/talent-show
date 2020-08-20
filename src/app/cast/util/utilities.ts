export const addInactiveElements: Function = (responseData, target, getInactiveClients, getInactiveSkills, getInactiveTeams) => {
    responseData.forEach(item => {
        const inactiveClients = getInactiveClients(item.client);
        const inactiveSkills = getInactiveSkills(item.skills);
        const inactiveTeams = getInactiveTeams(item.team);
        target.push({
          ...item,
          inactiveClients,
          inactiveSkills,
          inactiveTeams
        })
      });
}
