import { IIndividual } from '../models/i-individual';

// Takes in an takes in a submission object and runs validation on each entry and demands each entry
export const validateIndividualEntry = (i): boolean => {
    // if(i.client[0].length < 2 || i.client[1].length === 0 || i.client.length > 3) { return false };
    if(i.name.length < 2) { return false };
    // if(i.super.length < 2) { return false };
    // if(i.dept.length < 2) { return false };
    // if(i.email.length < 5 || !i.email.includes("@") || !i.email.includes(".")) { return false };
    // if(!i.hire.includes(".")) { return false };
    // if(i.permission.length < 2) { return false };
    // if(i.photo.length < 2) { return false };
    // if(i.projects[0].length < 2 || i.projects[1].length === 0 || i.projects.length > 3) { return false };
    // if(i.skills[0].length < 2 || i.skills[1].length === 0 || i.skills.length > 3) { return false };
    // if(i.team.length < 2) { return false };
    // if(i.title.length < 2) { return false };
    return true;
}
