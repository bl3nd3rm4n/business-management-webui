import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectExperienceTransport, FullUserSpecification } from '../models/project-experience.model';

@Injectable()
export class ProjectsService {

    constructor(private http: HttpClient) {

    }

    getFullUserSpecification(email: string, diff: boolean): Observable<HttpResponse<FullUserSpecification>> {
        // http://localhost:6543/users/hans.futterman@test.com/projects

        let baseUrl = 'http://localhost:6543/users/';
        if (diff) {
            return this
            .http.get<FullUserSpecification>(baseUrl + email + "/diff", { observe: 'response' });
        }
        return this
        .http.get<FullUserSpecification>(baseUrl + email, { observe: 'response' });
    }

    getAllProjects(): Observable<HttpResponse<Object[]>> {
        let url = 'http://localhost:6543/projects';
        return this.http.get<Object[]>(url, { observe: 'response' });
    }

    getAllConsultingLevel(): Observable<HttpResponse<Object[]>> {
        let url = 'http://localhost:6543/levels';
        return this.http.get<Object[]>(url, { observe: 'response' });
    }

    diffMode: boolean;
}