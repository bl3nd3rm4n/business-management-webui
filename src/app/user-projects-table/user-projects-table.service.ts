import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectExperienceTransport, FullUserSpecification, ChangeModel } from '../models/project-experience.model';

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

    saveEdits(changeModels: ChangeModel[], email: String) {
        let url = 'http://localhost:6543/users/' + email + '/create-pending-changes';
        return this.http.post(url, changeModels);
    }

    patchProjectExperience(map): Observable<ProjectExperienceTransport> {
        let url ='http://localhost:6543/rpc/patch-experience';
        return this.http.post<ProjectExperienceTransport>(url, map);
    }

    /**
     * POST http://localhost:6543/users/hans.futterman@test.com/create-pending-changes HTTP/1.1
content-type: application/json

  [
  {
    "changeType": "ADD",
    "resource": "PROJECT",
    "args": {
      "newId": 9999,
      "consultingLevelId": 2,
      "description": "asdasd",
      "endDate": 12345678,
      "startDate": 12345678,
      "projectId": 1
    }
  },
    {
    "changeType": "DELETE",
    "resource": "PROJECT",
    "args": {
      "id": 999
    }
  }
]
     */
}