export const addInactiveElements: Function = (responseData, target, getInactiveClients, getInactiveSkills) => {
    responseData.forEach(item => {
        const inactiveClients = getInactiveClients(item.client);
        const inactiveSkills = getInactiveSkills(item.skills);
        target.push({
          ...item,
          inactiveClients,
          inactiveSkills
        })
      });
}
