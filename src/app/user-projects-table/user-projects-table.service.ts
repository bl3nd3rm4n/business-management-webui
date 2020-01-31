import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectExperienceTransport, FullUserSpecification, ChangeModel, Skill } from '../models/project-experience.model';

@Injectable({
    providedIn: 'root'
  })  
export class ProjectsService {

    constructor(private http: HttpClient) {

    }

    getHeaders() {
        const headers = new HttpHeaders({
            Authorization: localStorage.getItem("token")
          });
        return headers;
    }

    getFullUserSpecification(email: string, diff: boolean): Observable<HttpResponse<FullUserSpecification>> {
        // https://safe-shore-17677.herokuapp.com/users/hans.futterman@test.com/projects
        if (!email) {
            email = localStorage.getItem('email');
        }
        let baseUrl = 'https://safe-shore-17677.herokuapp.com/users/';
        if (diff) {
            return this
            .http.get<FullUserSpecification>(baseUrl + email + "/diff", { observe: 'response', headers: this.getHeaders()}, );
        }
        return this
        .http.get<FullUserSpecification>(baseUrl + email, { observe: 'response', headers: this.getHeaders() });
    }

    getAllProjects(): Observable<HttpResponse<Object[]>> {
        let url = 'https://safe-shore-17677.herokuapp.com/projects';
        return this.http.get<Object[]>(url, { observe: 'response', headers: this.getHeaders() });
    }

    getAllConsultingLevel(): Observable<HttpResponse<Object[]>> {
        let url = 'https://safe-shore-17677.herokuapp.com/levels';
        return this.http.get<Object[]>(url, { observe: 'response', headers: this.getHeaders() });
    }

    getAllRegions(): Observable<HttpResponse<Object[]>> {
        let url = 'https://safe-shore-17677.herokuapp.com/regions';
        return this.http.get<Object[]>(url, { observe: 'response', headers: this.getHeaders() });
    }
    
    getAllSkills(): Observable<HttpResponse<Object[]>> {
        let url = 'https://safe-shore-17677.herokuapp.com/skills';
        return this.http.get<Object[]>(url, { observe: 'response', headers: this.getHeaders() });
    }


    saveEdits(changeModels: ChangeModel[], email: String) {
        if (!email) {
            email = localStorage.getItem('email');
        }
        let url = 'https://safe-shore-17677.herokuapp.com/users/' + email + '/create-pending-changes';
        return this.http.post(url, changeModels, { headers: this.getHeaders() });
    }

    patchProjectExperience(map): Observable<ProjectExperienceTransport> {
        let url ='https://safe-shore-17677.herokuapp.com/rpc/patch-experience';
        return this.http.post<ProjectExperienceTransport>(url, map, {headers: this.getHeaders()});
    }

    acceptChanges(email) {
        if (!email) {
            email = localStorage.getItem('email');
        }
        let url = 'https://safe-shore-17677.herokuapp.com/users/' + email + '/accept';
        return this.http.post(url, null, {headers: this.getHeaders()});
    }

    discardChanges(email) {
        if (!email) {
            email = localStorage.getItem('email');
        }
        let url = 'https://safe-shore-17677.herokuapp.com/users/' + email + '/create-pending-changes';
        return this.http.post(url, [], {headers: this.getHeaders()});
    }

    patchSkill(map): Observable<Skill> {
        let url ='https://safe-shore-17677.herokuapp.com/rpc/patch-skill';
        return this.http.post<Skill>(url, map, {headers: this.getHeaders()});
    }

    getBySkill(skill): Observable<HttpResponse<Object[]>> {
        let url = 'https://safe-shore-17677.herokuapp.com/supervisor/getBySkill';
        let token = localStorage.getItem("token");
        debugger;
        return this.http.post<Object[]>(url, { "skillId": skill.id }, { observe: 'response' });
    }
}