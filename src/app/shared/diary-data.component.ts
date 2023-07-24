import { Injectable } from "@angular/core";
import { DiaryEntry } from "./diary-entry.model";
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    diarySubject = new Subject<DiaryEntry[]>();

    diaryEntries: DiaryEntry[] = [
        new DiaryEntry("Jan 1st", "Entry 1"),
        new DiaryEntry("Jan 2st", "Entry 2"),
        new DiaryEntry("Jan 3rd", "Entry 3")
    ];

    onDelete(index: number) {
        this.diaryEntries.splice(index, 1);
        this.diarySubject.next(this.diaryEntries);
    }
    
}