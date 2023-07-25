import { Injectable } from "@angular/core";
import { DiaryEntry } from "./diary-entry.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    diarySubject = new Subject<DiaryEntry[]>();

    diaryEntries: DiaryEntry[] = [];

    constructor(private http: HttpClient) {}

    onDelete(index: number) {
        this.diaryEntries.splice(index, 1);
        this.diarySubject.next(this.diaryEntries);
    }

    onAddDiaryEntry(diaryEntry: DiaryEntry) {
        this.diaryEntries.push(diaryEntry);
        this.diarySubject.next(this.diaryEntries);
    }

    getDiaryEntries() {
        this.http.get<{diaryEntries: DiaryEntry[]}>('http://localhost:3000/diary-entries').subscribe((jsonData) => {
            this.diaryEntries = jsonData.diaryEntries;
            this.diarySubject.next(this.diaryEntries);
        });
    }

    getDiaryEntry(index: number) {
        return {...this.diaryEntries[index]};
    }

    onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
        this.diaryEntries[paramId] = newEntry;
        this.diarySubject.next(this.diaryEntries);
    }
    
}