import { Component, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessLogicService {
  private theHero = new Subject<any[]>();
  // heroObj: any = [];

  constructor() {}

  public getHero(): Observable<any[]> {
    return this.theHero.asObservable();
  }

  public setHero(hero: any) {
    return this.theHero.next(hero);
  }
}
