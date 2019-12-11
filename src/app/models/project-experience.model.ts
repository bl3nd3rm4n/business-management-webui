export interface ProjectExperienceEntry {
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
}

export interface ProjectExperienceTransport {
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
}