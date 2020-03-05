import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { List } from "../models/List";
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ListService {
  listsUrl: string = "http://localhost:3000/api/lists";
  mainListUrl: string = "http://localhost:3000/api/mainList";

  // private readonly _lists = new BehaviorSubject<List[]>([]);
  // readonly lists$ = this._lists.asObservable();

  lists: Observable<List[]>;

  constructor(private http: HttpClient) {}

  // get lists(): List[] {
  //   return this._lists.getValue();
  // }

  // set lists(val: List[]) {
  //   this._lists.next(val);
  // }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listsUrl);
  }

  // GET LIST BY ID
  getList(id: string): Observable<List> {
    return this.http.get<List>(`${this.listsUrl}/${id}`);
  }

  getMainList(): Observable<List> {
    return this.http.get<List>(this.mainListUrl);
  }

  deleteList(list: List): Observable<List> {
    const url = `${this.listsUrl}/${list._id}`;
    return this.http.delete<List>(url, httpOptions);
  }

  addList(list: List): Observable<List> {
    const response = this.http.post<List>(this.listsUrl, list, httpOptions);
    // response.subscribe(list => {
    //   this.lists.
    // });
    return response;
  }

  editList(list: List): Observable<any> {
    const url = `${this.listsUrl}/${list._id}`;
    return this.http.put(url, list, httpOptions);
  }
}
