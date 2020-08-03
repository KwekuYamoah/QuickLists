import { Injectable } from '@angular/core';
import { Checklist } from '../interfaces/checklists';

@Injectable({
  providedIn: 'root'
})
export class ChecklistDataService {
  public checklists: Checklist[] = [];
  public loaded = false;


  constructor() { }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

  createChecklist(data): void {}

  renameChecklist(checklist, data): void {}

  removeChecklist(checklist): void {}

  getChecklist(id): Checklist{
    return{
      id: '',
      title: '',
      items: []

    };
  }

  addItem(checklistId, data): void {}

  removeItem(checklist, item): void {}

  renameItem(item, data): void {}

  toggleItem(item): void {}

  save(): void {}
  
  generateSlug(title): string {
    return '';
  }
}
