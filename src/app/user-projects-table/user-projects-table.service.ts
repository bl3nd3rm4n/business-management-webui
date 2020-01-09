import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectExperienceTransport } from '../models/project-experience.model';

@Injectable()
export class ProjectsService {

    constructor(private http: HttpClient) {

    }

    getProjectForEmail(email: string): Observable<HttpResponse<ProjectExperienceTransport[]>> {
        // http://localhost:6543/users/hans.futterman@test.com/projects
        let baseUrl = 'http://localhost:6543/users/';
        return this
        .http.get<ProjectExperienceTransport[]>(baseUrl + email + '/projects', { observe: 'response' });
    }

    getAllProjects(): Observable<HttpResponse<Object[]>> {
        let url = 'http://localhost:6543/projects';
        return this.http.get<Object[]>(url, { observe: 'response' });
    }

    getAllConsultingLevel(): Observable<HttpResponse<Object[]>> {
        let url = 'http://localhost:6543/levels';
        return this.http.get<Object[]>(url, { observe: 'response' });
    }
}