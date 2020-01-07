export interface ProjectExperienceEntry {
    id: string;
    startDate: string;
    endDate: string;
    consultingLevel: string;
    description: string;
    projectEndDate: string;
    projectStartDate: string;
    projectName: string;
    industry: string;
    clientName: string;
    clientAddress: string;
    itemState: ItemState;
}

export interface ProjectExperienceTransport {
    id: string;
    startDate: number;
    endDate: number;
    consultingLevel: string;
    description: string;
    projectEndDate: number;
    projectStartDate: number;
    projectName: string;
    industry: string;
    clientName: string;
    clientAddress: string;
    itemState: ItemState;
}

export enum ItemState {
    DELETED,
    ADDED,
    UPDATED,
    PERSISTED
}