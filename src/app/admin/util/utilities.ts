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

const findIndexOfActive = (arr, key) => arr.reduce((agg, curr, i) => {
        if(agg){
        return agg
        } else if (Object.keys(curr)[0] === key) {
        return i;
        }
    }, undefined)

const findIndexOfInactive = (arr, key) => arr.reduce((agg, curr, i) => {
    if(agg){
    return agg
    } else if (curr.name === key) {
    return i;
    }
}, undefined)

export const removeElementByKey = (arr, key, active) => {
    let index;
    switch(active) {
        case false:
            index = findIndexOfActive(arr, key);
            arr.splice(index, 1);
            return arr;
        case true:
            index = findIndexOfInactive(arr, key);
            arr.splice(index, 1);
            return arr;
        default:
            return arr;
    }
}

export const addElementByKey = (arr, key, active) => {
    switch(active) {
        case true:
            arr.push({[key]: "0"});
            break;
        case false:
            arr.push({name: key});
            break;
        default:
    }
}

export const replaceElement = (arr, elementToAdd) => {
    const key = Object.keys(elementToAdd)[0];
    const index = findIndexOfActive(arr, key);
    arr.splice(index, 1, elementToAdd);
    return arr;
}

export const setInactiveElements: Function = (allSkills, activeSkills) => {
    return allSkills.filter(skill => activeSkills.reduce((agg, curr) => {
          if(agg === false) {
            return false;
          } else if(Object.keys(curr)[0] === skill.name) {
            return false;
          } else {
            return agg;
          }
        }, true)
    )
}

export const getInactiveTeams: Function = (allTeams: any[], activeTeam: string) => allTeams.reduce((agg, curr) => {
        if(curr.name !== activeTeam) {
            agg.push({name: curr.name});
        }
        return agg;
    }, []);

