import { Component, OnInit } from '@angular/core';
import { DiaryDataService } from '../shared/diary-data.component';
import { DiaryEntry } from '../shared/diary-entry.model';

@Component({
    selector: 'app-diary',
    templateUrl: './diary.component.html',
    styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

    diaryEntries: DiaryEntry[];

    constructor(private diaryDataService: DiaryDataService) {}
    
    ngOnInit(): void {
        this.diaryEntries = this.diaryDataService.diaryEntries;
    }

    onDelete(index: number) {
        this.diaryDataService.onDelete(index);
        this.diaryEntries = this.diaryDataService.diaryEntries;
    }
}
