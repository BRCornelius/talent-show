export const addInactiveElements: Function = (
  responseData,
  target,
  getInactiveClients,
  getInactiveSkills,
  getInactiveTeams,
  getInactiveDepartments
) => {
    responseData.forEach(item => {
        const inactiveClients = getInactiveClients(item.client);
        const inactiveSkills = getInactiveSkills(item.skills);
        const inactiveTeams = getInactiveTeams(item.team);
        const inactiveDepartments = getInactiveDepartments(item.dept);
        target.push({
          ...item,
          inactiveClients,
          inactiveDepartments,
          inactiveSkills,
          inactiveTeams
        });
      });
};
