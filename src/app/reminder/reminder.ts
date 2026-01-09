import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

interface Reminder {
  text: string;
  time: Date;
  completed: boolean;
}

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reminder.html',
  styleUrls: ['./reminder.css']
})
export class ReminderComponent implements OnInit, OnDestroy {

  currentTime: Date = new Date();
  fastMode = false;
  sub!: Subscription;

  reminders: Reminder[] = [];
  reminderText = '';
  reminderTime = '';

  ngOnInit() {
    this.sub = interval(1000).subscribe(() => {
      if (this.fastMode) {
        this.currentTime = new Date(this.currentTime.getTime() + 60000);
      } else {
        this.currentTime = new Date();
      }
      this.checkReminders();
    });
  }

  toggleFastTime() {
    this.fastMode = !this.fastMode;
  }

  addReminder() {
    if (!this.reminderText || !this.reminderTime) return;

    this.reminders.push({
      text: this.reminderText,
      time: new Date(this.reminderTime),
      completed: false
    });

    this.reminderText = '';
    this.reminderTime = '';
  }

  checkReminders() {
    this.reminders.forEach(r => {
      if (this.currentTime >= r.time) {
        r.completed = true;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
