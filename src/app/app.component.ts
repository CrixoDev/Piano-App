import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'piano-app';
  // Listen for keyboard events on the window
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const key = event.key.toUpperCase(); // Convert to uppercase for simplicity

    const note = this.mapKeyToNote(key);

    if (note) {
      this.playNote(note);
    }
  }
  // Play a note based on the note number
  playNote(noteNumber: string): void {
    const audio = new Audio(`assets/notes/${noteNumber}.mp3`);
    audio.play();
  }
  // Map keyboard keys to musical notes
  private mapKeyToNote(key: string): string | null {
    switch (key) {
      // First Octave (Q to P)
      case 'Q':
        return 'A0';
      case 'W':
        return 'Bb0';
      case 'E':
        return 'B0';
      case 'R':
        return 'C1';
      case 'T':
        return 'Db1';
      case 'Y':
        return 'D1';
      case 'U':
        return 'Eb1';
      case 'I':
        return 'E1';
      case 'O':
        return 'F1';
      case 'P':
        return 'Gb1';

      // Second Octave (A to L)
      case 'A':
        return 'G1';
      case 'S':
        return 'Ab1';
      case 'D':
        return 'A1';
      case 'F':
        return 'Bb1';
      case 'G':
        return 'B1';
      case 'H':
        return 'C2';
      case 'J':
        return 'Db2';
      case 'K':
        return 'D2';
      case 'L':
        return 'Eb2';

      // Third Octave (Z to M)
      case 'Z':
        return 'E2';
      case 'X':
        return 'F2';
      case 'C':
        return 'Gb2';
      case 'V':
        return 'G2';
      case 'B':
        return 'Ab2';
      case 'N':
        return 'A2';
      case 'M':
        return 'Bb2';

      default:
        return null;
    }
  }
}
