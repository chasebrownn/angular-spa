import { Injectable } from "@angular/core";
import { DiaryEntry } from "./diary-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    diaryEntries: DiaryEntry[] = [
        new DiaryEntry("Jan 1st", "Entry 1"),
        new DiaryEntry("Jan 2st", "Entry 2"),
        new DiaryEntry("Jan 3rd", "Entry 3")
    ];

    onDelete(index: number) {
        this.diaryEntries.splice(index, 1);
    }
    
}