import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from 'express';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  notes: any[] = [];

  maxNotesToShow = 10;

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.loadRecentNotes();
  }

  loadRecentNotes(): void {
    this.service.getLatestNotes().subscribe(
      (data: any) => {
        this.notes = Array.isArray(data)
          ? data.slice(0, this.maxNotesToShow)
          : [];
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteNote(id: any): void {
    if (confirm('Are you sure you want to delete this note?')) {
      this.service.deleteNote(id).subscribe({
        next: () => {
          // Remove the deleted note from the array

          this.notes = this.notes.filter((note) => note.id !== id);

          // Check if there are fewer notes than the maximum count

          if (this.notes.length < this.maxNotesToShow) {
            // Fetch the latest note from the database

            this.service.getLatestNotes().subscribe({
              next: (latestNote) => {
                // Add the latest note to the beginning of the array

                this.notes.unshift(latestNote);
              },

              error: (err) => {
                console.log(err);
              },
            });
          }
        },

        error: (err) => {
          console.log('Error deleting note:', err);
        },
      });
    }
  }
}
